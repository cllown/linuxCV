export type Message = {
  role: "user" | "assistant";
  content: string;
};

export type ChatSession = {
  id: string;
  title: string;
  model: string;
  created_at: string;
};

export type ApiError = {
  message: string;
  code?: string;
  details?: unknown;
};
