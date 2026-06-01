import express from 'express';
import multer from 'multer';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { createInterviewSession, getLatestInterviewSession, getInterviewSessions } from '../CONTROLARS/interviewController.js';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max
  },
});

const router = express.Router();

router.post('/', authMiddleware, upload.single('resume'), createInterviewSession);
router.get('/', authMiddleware, getLatestInterviewSession);
router.get('/all', authMiddleware, getInterviewSessions);

export default router;
