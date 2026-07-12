import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { 
  generateThumbnail,
  getUserThumbnails,
  getThumbnailById,
  deleteThumbnail,
 } from "../controllers/thumbnail.controller.js";

const router = express.Router();

router.post(
  "/generate",
  authMiddleware,
  generateThumbnail
);

router.get(
  "/",
  authMiddleware,
  getUserThumbnails
);

router.get(
  "/:id",
  authMiddleware,
  getThumbnailById
);

router.delete(
  "/:id",
  authMiddleware,
  deleteThumbnail
);

export default router;