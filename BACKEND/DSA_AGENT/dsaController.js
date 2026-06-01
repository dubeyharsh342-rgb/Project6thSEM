import { generateDsaQuestions } from './dsaAgent.js';

export const createDsaQuestions = (req, res) => {
  const { candidateName, targetRole, interviewTrack, difficulty, company } = req.body;

  const result = generateDsaQuestions({
    candidateName,
    targetRole,
    interviewTrack,
    difficulty,
    company,
  });

  return res.status(200).json(result);
};
