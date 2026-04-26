import { getDb } from "../db";
import { ChatMessage, LLMProvider } from "../types";
import { OpenRouterService } from "./llm/openrouter.service";

export class ChatService {
  private llmProvider: LLMProvider;

  constructor() {
    // Default to OpenRouter, could be easily changed via DI or factory
    this.llmProvider = new OpenRouterService();
  }

  async processMessage(message: string, history: any[]) {
    const db = await getDb();

    // Map history to OpenAI format
    const mappedHistory: ChatMessage[] = (history || []).map((msg: any) => ({
      role: msg.role,
      content: msg.text,
    }));

    // Get AI response
    const reply = await this.llmProvider.chat(message, mappedHistory);

    // Persist history
    await db.run("INSERT INTO chat_history (role, content) VALUES (?, ?)", [
      "user",
      message,
    ]);
    await db.run("INSERT INTO chat_history (role, content) VALUES (?, ?)", [
      "assistant",
      reply,
    ]);

    return reply;
  }
}

export const chatService = new ChatService();
