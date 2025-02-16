import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { ChatBubble } from "@/components/ui/chat-bubble";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { useChat } from "@/hooks/useChat";
import { Message } from "@/shared/message";
import { sendMessageToBackend } from "@/api/chatApi";

export const ChatContainer = () => {
  const { messages, loading, addMessage, setLoadingState } = useChat();
  const [userInput, setUserInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleMessageSent = async () => {
    if (!userInput.trim() || loading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      message: userInput,
      messageType: "user",
    };
    const inputMessage = userInput;
    addMessage(userMessage);
    setUserInput("");
    setLoadingState(true);

    try {
      const aiResponse = await sendMessageToBackend(inputMessage);

      const aiMessage: Message = {
        id: messages.length + 2,
        message: aiResponse,
        messageType: "ai",
      };
      addMessage(aiMessage);
    } catch (error) {
      console.error("Error sending message: ", error);
    } finally {
      setLoadingState(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleMessageSent();
    }
  };

  return (
    <div className="grow flex flex-col items-center justify-center">
      <div
        className={`${
          messages.length > 0 ? "h-full grow" : ""
        } px-10 sm:px-20 md:px-30 lg:px-40 xl:px-50 w-full mt-10 overflow-y-auto flex flex-col gap-5 pb-10 transition ease-in-out delay-5`}
      >
        {messages.map(({ id, message, messageType }: Message) => (
          <ChatBubble key={id} text={message} bubbleType={messageType} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 w-full items-center flex flex-col gap-2">
        <h1
          className={`${
            messages.length > 0 ? "invisible h-0" : "visible h-fit"
          } font-geist-mono text-xl font-bold text-red-400`}
        >
          How can I help you?
        </h1>
        <div className="w-full relative">
          <Input
            type="text"
            placeholder="Ask AI..."
            className="w-full break-words"
            style={{ overflowWrap: "anywhere" }}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            className="rounded-full absolute right-1 bottom-1 h-8 w-8"
            size="icon"
            onClick={handleMessageSent}
            disabled={!userInput.trim() || loading}
          >
            <Send />
          </Button>
        </div>
        <p className="font-geist-sans text-gray-400 text-xs mb-2">
          AI can be wrong. Please check important info.
        </p>
      </div>
    </div>
  );
};
