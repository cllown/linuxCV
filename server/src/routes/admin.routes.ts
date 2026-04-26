import { Router } from "express";
import { getContacts } from "../controllers/contact.controller";
import { adminAuth } from "../middleware/auth.middleware";

const router = Router();

router.get("/contacts", adminAuth, getContacts);

export default router;
