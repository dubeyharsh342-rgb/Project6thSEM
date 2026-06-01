import express from 'express';
import { createDsaQuestions } from '../../DSA_AGENT/dsaController.js';
import { authMiddleware } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.post('/questions', authMiddleware, createDsaQuestions);

export default router;
