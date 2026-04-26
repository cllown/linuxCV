import { Router } from "express";
import { getContacts } from "../controllers/contact.controller";

const router = Router();

router.get("/contacts", getContacts);

export default router;
