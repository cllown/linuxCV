export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface LLMResponse {
  reply: string;
}

export interface LLMProvider {
  chat(message: string, history: ChatMessage[]): Promise<string>;
}
