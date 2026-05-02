import "./Chat.css";
import { useChatService } from "./useChatService";
import { ChatHistory } from "./components/ChatHistory";
import { ChatMessages } from "./components/ChatMessages";
import { ChatInput } from "./components/ChatInput";

export const Chat = () => {
  const {
    messages,
    sessions,
    currentSessionId,
    selectedModel,
    isLoading,
    input,
    setInput,
    isModelDropdownOpen,
    setModelDropdownOpen,
    isHistoryOpen,
    messagesEndRef,
    startNewChat,
    loadSession,
    sendMessage,
    setSelectedModel,
    activeSuggestions,
  } = useChatService();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        <div className="chat-panel__messages">
          {isHistoryOpen ? (
            <ChatHistory
              sessions={sessions}
              currentSessionId={currentSessionId}
              loadSession={loadSession}
            />
          ) : (
            <ChatMessages
              messages={messages}
              isLoading={isLoading}
              messagesEndRef={messagesEndRef}
            />
          )}
        </div>
        <ChatInput
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          sendMessage={sendMessage}
          suggestions={activeSuggestions}
          isModelDropdownOpen={isModelDropdownOpen}
          setModelDropdownOpen={setModelDropdownOpen}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          startNewChat={startNewChat}
        />
      </div>
    </div>
  );
};

export default Chat;
