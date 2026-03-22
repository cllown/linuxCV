import { useState } from "react";
import "./Chat.css";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const suggestions = [
  "What's your tech stack?",
  "Tell me about your experience",
  "Are you open to work?",
  "What projects have you built?",
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Mock response — replace with backend fetch later
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Thanks for your question! This will be connected to an AI backend soon.",
        },
      ]);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="chat-panel">
      <div className="chat-panel__label">
        <span className="chat-panel__dot" />
        Available for opportunities
      </div>

      <div className="chat-panel__box">
        <div className="chat-panel__messages">
          {messages.length === 0 && (
            <div className="chat-panel__empty">
              <span className="chat-panel__empty-title">Ask me anything</span>
              <span className="chat-panel__empty-sub">
                I'm an AI assistant trained on Artur's portfolio
              </span>
            </div>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-msg chat-msg--${msg.role}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-panel__bottom">
          {messages.length === 0 && (
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
          )}

          <form className="chat-panel__input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              className="chat-panel__input"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="chat-panel__send" disabled={!input.trim()}>
              ↑
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
