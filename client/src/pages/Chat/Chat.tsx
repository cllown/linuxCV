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

  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim(), history: messages }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            data.reply ||
            "I'm having trouble thinking right now. Please try again.",
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "System error: Unable to connect to the AI brain.",
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
            <div key={i} className={`chat-msg chat-msg--${msg.role}`}>
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
            <button
              type="submit"
              className="chat-panel__send"
              disabled={!input.trim() || isLoading}
            >
              {isLoading ? "..." : "↑"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
