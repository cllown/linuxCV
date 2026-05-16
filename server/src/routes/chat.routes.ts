import { Router } from 'express';
import {
  handleChat,
  createSession,
  getSessions,
  getSessionHistory,
} from '../controllers/chat.controller';

const router = Router();

router.post('/', handleChat);
router.post('/sessions', createSession);
router.get('/sessions', getSessions);
router.get('/sessions/:id/history', getSessionHistory);

export default router;
