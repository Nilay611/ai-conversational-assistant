export const ChatBubble = ({ bubbleType }: { bubbleType: "user" | "ai" }) => {
  return (
    <div
      className={`w-full flex ${
        bubbleType === "ai" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`px-5 py-3 font-geist-mono text-sm rounded-3xl ${
          bubbleType === "ai"
            ? "bg-transparent w-full"
            : "bg-gray-200 max-w-4/5"
        }`}
      >
        This is a test chat bubble, please do not reply. This is a test chat
        bubble, please do not reply. This is a test chat bubble, please do not
        reply. This is a test chat bubble, please do not reply. This is a test
        chat bubble, please do not reply. This is a test chat bubble, please do
        not reply. This is a test chat bubble, please do not reply.
      </div>
    </div>
  );
};
