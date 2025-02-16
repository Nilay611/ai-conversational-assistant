import express from "express";
import {
  sendMessage,
  getHistory,
  clearHistory,
} from "../controllers/chatController";

const router = express.Router();

router.post("/", sendMessage);
router.get("/history", getHistory);
router.delete("/history", clearHistory);

export default router;
