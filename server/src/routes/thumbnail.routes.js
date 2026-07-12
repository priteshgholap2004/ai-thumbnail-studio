import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { generateThumbnail } from "../controllers/thumbnail.controller.js";

const router = express.Router();

router.post(
  "/generate",
  authMiddleware,
  generateThumbnail
);

export default router;