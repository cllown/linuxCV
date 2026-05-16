import './Chat.css';
import { useChatService } from './useChatService';
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';
export type { Message, ChatSession } from './chatTypes';

export type ApiError = {
  message: string;
  code?: string;
  details?: unknown;
};

export const Chat = () => {
  const {
    messages,
    selectedModel,
    isLoading,
    input,
    setInput,
    isModelDropdownOpen,
    setModelDropdownOpen,
    messagesEndRef,
    startNewChat,
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
      <div className="chat-panel">
        <div className="chat-panel__messages">
          <ChatMessages messages={messages} isLoading={isLoading} messagesEndRef={messagesEndRef} />
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
