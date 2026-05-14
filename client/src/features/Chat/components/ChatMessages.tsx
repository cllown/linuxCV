import React, { type RefObject } from "react";
import type { Message } from "../chatTypes";

type Props = {
  messages: Message[];
  isLoading: boolean;
  messagesEndRef: RefObject<HTMLDivElement | null>;
};

export const ChatMessages: React.FC<Props> = ({
  messages,
  isLoading,
  messagesEndRef,
}) => (
  <>
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
);
