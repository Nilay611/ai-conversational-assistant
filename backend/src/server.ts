import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes";
import { connectDB } from "./services/db";

dotenv.config();
connectDB();

const app: Application = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "API is running" });
});

app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT ?? 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
