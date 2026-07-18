import express from "express";
import {
  generateTitles,
  generateDescription,
  generateTags,
  generateEnhancedPrompt,
} from "../controllers/creator.controller.js";

const router = express.Router();

router.post("/titles", generateTitles);

router.post("/description", generateDescription);

router.post("/tags", generateTags);

router.post(
  "/enhance-prompt",
  generateEnhancedPrompt
);

export default router;