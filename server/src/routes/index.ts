import contactRoutes from "./contact.routes";
import chatRoutes from "./chat.routes";
import adminRoutes from "./admin.routes";
import { Router } from "express";

const router = Router();

router.use("/contact", contactRoutes);
router.use("/chat", chatRoutes);
router.use("/admin", adminRoutes);

export default router;
