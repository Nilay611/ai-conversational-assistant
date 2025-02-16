import { Request, Response } from "express";
import { chatWithGemini } from "../services/geminiService";
import { saveMessage, getMessages, clearMessages } from "../utils/memoryStore";
import { Message } from "../types/message";

export const sendMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { message } = req.body;
    if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    const chatHistory = getMessages();

    const formattedHistory = chatHistory.map(({ message, messageType }) => ({
      role: messageType === "user" ? "user" : "model",
      text: message,
    }));

    formattedHistory.push({ role: "user", text: message });

    const response: string = await chatWithGemini(formattedHistory);

    const userMessage: Message = {
      id: Date.now(),
      message,
      messageType: "user",
    };
    const aiMessage: Message = {
      id: Date.now() + 1,
      message: response,
      messageType: "ai",
    };

    saveMessage(userMessage);
    saveMessage(aiMessage);

    res.json({ response });
  } catch (error) {
    console.error("Failed to communicate with AI: ", error);
    res.status(500).json({ error: "Failed to communicate with AI" });
  }
};

export const getHistory = (req: Request, res: Response): void => {
  res.json({ history: getMessages() });
};

export const clearHistory = (req: Request, res: Response): void => {
  clearMessages();
  res.json({ message: "Chat history cleared" });
};
