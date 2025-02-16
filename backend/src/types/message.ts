export interface Message {
  id: number;
  message: string;
  messageType: "user" | "ai";
}
