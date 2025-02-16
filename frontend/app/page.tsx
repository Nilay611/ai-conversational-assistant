"use client";
import { ChatContainer } from "@/components/chat-container";
import { Sidebar } from "@/components/sidebar";
import { ChatProvider } from "@/context/ChatContext";

export default function Home() {
  return (
    <ChatProvider>
      <main className="flex flex-row justify-center h-screen">
        <Sidebar />
        <ChatContainer />
      </main>
    </ChatProvider>
  );
}
