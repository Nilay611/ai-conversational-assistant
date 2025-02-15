"use client";
import { ChatContainer } from "@/components/chat-container";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex flex-row justify-center h-screen">
      <Sidebar />
      <ChatContainer />
    </main>
  );
}
