import { Request, Response, NextFunction } from "express";
import { chatService } from "../services/chat.service";

export const handleChat = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = await chatService.processMessage(message, history);
    res.json({ reply });
  } catch (error) {
    next(error);
  }
};
