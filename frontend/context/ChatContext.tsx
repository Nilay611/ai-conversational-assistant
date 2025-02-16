import {
  createContext,
  ReactNode,
  useState,
  useMemo,
  useCallback,
} from "react";
import { Message } from "@/shared/message";

interface ChatContextType {
  messages: Message[];
  addMessage: (newMessage: Message) => void;
  clearChat: () => void;
  loading: boolean;
  setLoadingState: (state: boolean) => void;
}

export const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = (props: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const addMessage = useCallback((newMessage: Message) => {
    setMessages((prev) => [...prev, newMessage]);
  }, []);

  const clearChat = useCallback(() => {
    setMessages([]);
  }, []);

  const setLoadingState = useCallback((state: boolean) => {
    setLoading(state);
  }, []);

  const value = useMemo(
    () => ({ messages, addMessage, clearChat, loading, setLoadingState }),
    [messages, addMessage, clearChat, loading, setLoadingState]
  );

  return (
    <ChatContext.Provider value={value}>{props.children}</ChatContext.Provider>
  );
};
