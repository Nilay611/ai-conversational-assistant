import { Message } from "../types/message";

let chatHistory: Message[] = [];

export const saveMessage = (message: Message): void => {
  chatHistory.push(message);
};

export const getMessages = (): Message[] => {
  return chatHistory;
};

export const clearMessages = (): void => {
  chatHistory = [];
};
