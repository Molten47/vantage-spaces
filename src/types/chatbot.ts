// Essential TypeScript interfaces for ChatBot

// User interface
interface User {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  isAnonymous: boolean;
  sessionId: string;
}

// AI Bot interface
interface AIBot {
  id: string;
  name: string;
  model: string; // e.g., 'gpt-4', 'claude-3', etc.
  version: string;
  capabilities: string[];
  avatar?: string;
}

// Message interface - Core structure
interface Message {
  id: string;
  conversationId: string;
  senderId: string; // userId or botId
  senderType: 'user' | 'ai';
  content: string;
  messageType: 'text' | 'image' | 'file' | 'typing' | 'error';
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read' | 'failed';
  metadata?: {
    tokens?: number;
    model?: string;
    processingTime?: number;
    confidence?: number;
  };
  parentMessageId?: string; // For threading/replies
  edited?: boolean;
  editedAt?: Date;
}

// Conversation interface
interface Conversation {
  id: string;
  userId: string;
  botId: string;
  title?: string;
  createdAt: Date;
  updatedAt: Date;
  status: 'active' | 'archived' | 'deleted';
  messageCount: number;
  tags?: string[];
  summary?: string;
}

// Chat Session interface
interface ChatSession {
  id: string;
  userId: string;
  conversationId: string;
  startTime: Date;
  endTime?: Date;
  isActive: boolean;
  context?: Record<string, any>; // For maintaining conversation context
}

// Props for the ChatBot component
interface ChatBotProps {
  user: User;
  bot: AIBot;
  conversationId?: string;
  onMessageSend?: (message: Message) => void;
  onConversationEnd?: (conversationId: string) => void;
  theme?: 'light' | 'dark';
  customStyles?: Record<string, string>;
  maxMessages?: number;
  allowFileUpload?: boolean;
  placeholder?: string;
}

// State interface for the ChatBot component
interface ChatBotState {
  messages: Message[];
  currentConversation: Conversation | null;
  isLoading: boolean;
  isTyping: boolean;
  inputValue: string;
  error: string | null;
  connectionStatus: 'connected' | 'disconnected' | 'reconnecting';
}

// API Response interfaces
interface SendMessageResponse {
  success: boolean;
  message?: Message;
  error?: string;
}

interface GetMessagesResponse {
  success: boolean;
  messages?: Message[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    hasMore: boolean;
  };
  error?: string;
}

// Export the main ChatBot component interface
export default interface ChatBot {
  // Required props
  user: User;
  bot: AIBot;
  
  // Optional configuration
  conversationId?: string;
  theme?: 'light' | 'dark';
  customStyles?: Record<string, string>;
  maxMessages?: number;
  allowFileUpload?: boolean;
  placeholder?: string;
  
  // Event handlers
  onMessageSend?: (message: Message) => void;
  onConversationEnd?: (conversationId: string) => void;
  onError?: (error: string) => void;
  onTypingStart?: () => void;
  onTypingEnd?: () => void;
  
  // Methods
  sendMessage: (content: string, type?: Message['messageType']) => Promise<void>;
  clearConversation: () => void;
  loadConversation: (conversationId: string) => Promise<void>;
  exportConversation: () => string;
  setTyping: (isTyping: boolean) => void;
}

// Additional utility types
export type MessageStatus = Message['status'];
export type SenderType = Message['senderType'];
export type MessageType = Message['messageType'];
export type ConnectionStatus = ChatBotState['connectionStatus'];

// Export all interfaces for use in other components
export type {
  User,
  AIBot,
  Message,
  Conversation,
  ChatSession,
  ChatBotProps,
  ChatBotState,
  SendMessageResponse,
  GetMessagesResponse
};