import { Router } from 'express';
import { submitContactForm, getContacts } from '../controllers/contact.controller';

const router = Router();

router.post('/', submitContactForm);

export default router;
