import mongoose from 'mongoose';

const interviewSessionSchema = new mongoose.Schema({
  candidateName: {
    type: String,
    required: [true, 'Please provide a candidate name'],
    trim: true,
  },
  targetRole: {
    type: String,
    required: [true, 'Please provide a target role'],
    trim: true,
  },
  interviewTrack: {
    type: String,
    required: [true, 'Please provide an interview track'],
    trim: true,
  },
  difficulty: {
    type: String,
    required: [true, 'Please provide a difficulty tier'],
    enum: ['Easy', 'Medium', 'Hard'],
  },
  company: {
    type: String,
    required: [true, 'Please provide a target company'],
    trim: true,
  },
  dsaQuestions: {
    type: Array,
    default: [],
  },
  resumeInsights: {
    type: Object,
    default: {},
  },
  resumeUrl: {
    type: String,
    required: [true, 'Resume upload is required'],
  },
  resumeKey: {
    type: String,
    required: true,
  },
  resumeOriginalName: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    default: 'Configured',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('InterviewSession', interviewSessionSchema);
