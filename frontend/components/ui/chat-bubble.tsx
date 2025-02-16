export const ChatBubble = ({
  text,
  bubbleType,
}: {
  text: string;
  bubbleType: "user" | "ai";
}) => {
  return (
    <div
      className={`w-full flex ${
        bubbleType === "ai" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`px-5 py-3 font-geist-mono text-sm rounded-3xl break-words ${
          bubbleType === "ai" ? "bg-transparent" : "bg-gray-200 max-w-4/5"
        }`}
        style={{ overflowWrap: "anywhere" }}
      >
        {text}
      </div>
    </div>
  );
};
