import React from "react";
import type { ChatSession } from "@/features/Chat/chatTypes";

type Props = {
  sessions: ChatSession[];
  currentSessionId: string | null;
  loadSession: (id: string) => void;
};

export const ChatHistory: React.FC<Props> = ({
  sessions,
  currentSessionId,
  loadSession,
}) => (
  <div className="chat-history-list">
    <div className="chat-history-title">Previous Chats</div>
    {sessions.map((s) => (
      <div
        key={s.id}
        className={`chat-history-item ${currentSessionId === s.id ? "active" : ""}`}
        onClick={() => loadSession(s.id)}
      >
        <div className="chat-history-item-title">{s.title}</div>
        <div className="chat-history-item-meta">
          {new Date(s.created_at).toLocaleDateString()}
        </div>
      </div>
    ))}
    {sessions.length === 0 && (
      <div className="chat-history-empty">No previous chats</div>
    )}
  </div>
);
