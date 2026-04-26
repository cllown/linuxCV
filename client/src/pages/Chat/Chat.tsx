import { useState, useEffect, useRef } from "react";
import "./Chat.css";
import { AVAILABLE_MODELS, type ChatModel } from "../../config/chatConfig";
import type { Message, ChatSession, ApiError } from "../../types/chat";

const suggestions = [
  "What's your tech stack?",
  "Tell me about your experience",
  "Are you open to work?",
  "What projects have you built?",
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<ChatModel>(
    AVAILABLE_MODELS[0],
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchSessions();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const fetchSessions = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/chat/sessions");
      const data = await response.json();
      setSessions(data);
    } catch (error) {
      console.error("Failed to fetch sessions:", error);
    }
  };

  const startNewChat = async (model = selectedModel.id) => {
    try {
      const response = await fetch("http://localhost:5000/api/chat/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model, title: "New Chat" }),
      });
      const newSession = await response.json();
      setSessions([newSession, ...sessions]);
      setCurrentSessionId(newSession.id);
      setMessages([]);
      setIsHistoryOpen(false);
    } catch (error) {
      console.error("Failed to start new chat:", error);
    }
  };

  const loadSession = async (sessionId: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/chat/sessions/${sessionId}/history`,
      );
      const history = await response.json();

      const session = sessions.find((s) => s.id === sessionId);
      if (session) {
        const model =
          AVAILABLE_MODELS.find((m) => m.id === session.model) ||
          AVAILABLE_MODELS[0];
        setSelectedModel(model);
      }

      setMessages(history);
      setCurrentSessionId(sessionId);
      setIsHistoryOpen(false);
    } catch (error) {
      console.error("Failed to load session:", error);
    }
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    let sessionId = currentSessionId;
    if (!sessionId) {
      // Auto-start session on first message
      const response = await fetch("http://localhost:5000/api/chat/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: selectedModel.id,
          title: text.slice(0, 30),
        }),
      });
      const newSession = await response.json();
      setSessions([newSession, ...sessions]);
      sessionId = newSession.id;
      setCurrentSessionId(sessionId);
    }

    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text.trim(),
          sessionId,
          model: selectedModel.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const apiErr: ApiError = data.error || {
          message: "Failed to get response",
        };
        throw new Error(apiErr.message);
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "No response" },
      ]);

      // Refresh sessions to get updated titles
      fetchSessions();
    } catch (error: unknown) {
      console.error("Chat error:", error);
      const msg =
        error instanceof Error
          ? error.message
          : "System error: Unable to connect to the AI brain.";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: msg,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="chat-container">
      <div className="chat-status-label">
        <span className="chat-status-dot" />
        Available for opportunities
      </div>

      <div className="chat-panel">
        {/* Header with History/New Chat actions */}
        <div className="chat-panel__header">
          <button
            className={`chat-panel__header-btn ${isHistoryOpen ? "active" : ""}`}
            onClick={() => setIsHistoryOpen(!isHistoryOpen)}
            title="History"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button
            className="chat-panel__header-btn"
            onClick={() => startNewChat()}
            title="New Chat"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        <div className="chat-panel__messages">
          {isHistoryOpen ? (
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
          ) : (
            <>
              {messages.length === 0 && (
                <div className="chat-panel__empty">
                  <span className="chat-panel__empty-title">
                    Ask me anything
                  </span>
                  <span className="chat-panel__empty-sub">
                    I'm an AI assistant trained on Artur's portfolio
                  </span>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`chat-msg chat-msg--${msg.role}`}>
                  {msg.content}
                </div>
              ))}
              {isLoading && (
                <div className="chat-msg chat-msg--assistant chat-msg--loading">
                  <div className="typing-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {!isHistoryOpen && (
          <div className="chat-panel__bottom">
            <div className="chat-panel__suggestions">
              {suggestions.map((s) => (
                <button
                  key={s}
                  className="chat-panel__pill"
                  onClick={() => sendMessage(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <form
              className="chat-panel__input-container"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="chat-panel__input"
                placeholder="Ask anything"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <div className="chat-panel__input-actions">
                <div className="chat-panel__left-actions">
                  <button type="button" className="chat-panel__action-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 1V13M1 7H13"
                        stroke="#7588A3"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  <div
                    className="chat-panel__model-selector"
                    onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                  >
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      style={{
                        transform: isModelDropdownOpen
                          ? "rotate(180deg)"
                          : "none",
                      }}
                    >
                      <path
                        d="M1 1L8 8L15 1"
                        stroke="#7588A3"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>{selectedModel.name}</span>

                    {isModelDropdownOpen && (
                      <div className="chat-model-dropdown">
                        {AVAILABLE_MODELS.map((model) => (
                          <div
                            key={model.id}
                            className={`chat-model-option ${selectedModel.id === model.id ? "active" : ""}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedModel(model);
                              setIsModelDropdownOpen(false);
                            }}
                          >
                            <div className="model-name">{model.name}</div>
                            <div className="model-provider">
                              {model.provider} {model.isFree && "(Free)"}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="chat-panel__send-btn"
                  disabled={!input.trim() || isLoading}
                >
                  {isLoading ? (
                    <span className="chat-panel__loading">...</span>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M1 7L13 7M13 7L7 1M13 7L7 13"
                        stroke="#7588A3"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
