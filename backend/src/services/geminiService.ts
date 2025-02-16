import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

export const chatWithGemini = async (
  messages: { role: string; text: string }[]
): Promise<string> => {
  try {
    const result = await model.generateContent({
      contents: messages.map(({ role, text }) => ({
        role,
        parts: [{ text }],
      })),
    });

    const responseText =
      result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText) {
      throw new Error("Empty response from Gemini API");
    }

    return responseText;
  } catch (error) {
    console.error("Error with Gemini API: ", error);
    throw new Error("Gemini API error");
  }
};
