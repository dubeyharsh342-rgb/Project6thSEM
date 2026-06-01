import InterviewSession from '../models/InterviewSession.js';
import supabase, { supabaseBucket } from '../utils/supabaseClient.js';
import { generateDsaQuestions } from '../DSA_AGENT/dsaAgent.js';

const uploadResumeToSupabase = async (fileBuffer, originalname, mimetype, userId) => {
  const bucket = supabaseBucket;
  const fileKey = `${userId}/${Date.now()}-${originalname.replace(/\s+/g, '_')}`;

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(fileKey, fileBuffer, {
      contentType: mimetype,
      upsert: false,
    });

  if (uploadError) {
    throw uploadError;
  }

  const { data: publicUrlData, error: publicUrlError } = supabase.storage
    .from(bucket)
    .getPublicUrl(fileKey);

  if (publicUrlError) {
    throw publicUrlError;
  }

  return {
    resumeUrl: publicUrlData.publicUrl,
    resumeKey: fileKey,
  };
};

export const createInterviewSession = async (req, res) => {
  try {
    const { candidateName, targetRole, interviewTrack, difficulty, company } = req.body;

    if (!candidateName || !targetRole || !interviewTrack || !difficulty || !company || !req.file) {
      return res.status(400).json({
        success: false,
        message: 'All interview setup fields including company and resume upload are required',
      });
    }

    const { resumeUrl, resumeKey } = await uploadResumeToSupabase(
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype,
      req.userId,
    );

    const dsaResult = generateDsaQuestions({
      candidateName,
      targetRole,
      interviewTrack,
      difficulty,
      company,
      resumeMetadata: {
        fileName: req.file.originalname,
        mimeType: req.file.mimetype,
      },
    });

    const session = await InterviewSession.create({
      candidateName,
      targetRole,
      interviewTrack,
      difficulty,
      company,
      resumeUrl,
      resumeKey,
      resumeOriginalName: req.file.originalname,
      user: req.userId,
      dsaQuestions: dsaResult.questions,
      resumeInsights: dsaResult.resumeInsights,
    });

    return res.status(201).json({
      success: true,
      message: 'Interview session configured successfully',
      session,
      questions: dsaResult.questions,
      resumeInsights: dsaResult.resumeInsights,
    });
  } catch (error) {
    console.error('Create Interview Session Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Error configuring interview session',
    });
  }
};

export const getLatestInterviewSession = async (req, res) => {
  try {
    const session = await InterviewSession.findOne({ user: req.userId })
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      session: session || null,
    });
  } catch (error) {
    console.error('Get Latest Interview Session Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Error fetching interview session',
    });
  }
};

export const getInterviewSessions = async (req, res) => {
  try {
    const sessions = await InterviewSession.find({ user: req.userId })
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      sessions,
    });
  } catch (error) {
    console.error('Get Interview Sessions Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Error fetching interview sessions',
    });
  }
};
