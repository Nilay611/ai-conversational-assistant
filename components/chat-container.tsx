import { Input } from "@/components/ui/input";
import { ChatBubble } from "@/components/ui/chat-bubble";

export const ChatContainer = () => {
  return (
    <div className="grow flex flex-col items-center">
      <div className="px-10 sm:px-20 md:px-30 lg:px-40 xl:px-50 h-full w-full grow mt-10 overflow-y-auto flex flex-col gap-5 pb-10">
        <ChatBubble bubbleType="user" />
        <ChatBubble bubbleType="ai" />
        <ChatBubble bubbleType="user" />
        <ChatBubble bubbleType="ai" />
        <ChatBubble bubbleType="user" />
        <ChatBubble bubbleType="ai" />
        <ChatBubble bubbleType="user" />
        <ChatBubble bubbleType="ai" />
        <ChatBubble bubbleType="user" />
        <ChatBubble bubbleType="ai" />
        <ChatBubble bubbleType="user" />
      </div>
      <div className="px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 w-full items-center flex flex-col gap-2">
        <Input
          type="text"
          placeholder="Ask AI..."
          className="w-full text-wrap"
        />
        <p className="font-geist-sans text-gray-400 text-xs mb-2">
          AI can be wrong. Please check important info.
        </p>
      </div>
    </div>
  );
};
