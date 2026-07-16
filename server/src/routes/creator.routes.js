import express from "express";
import { generateTitles } from "../controllers/creator.controller.js";

const router = express.Router();

router.post("/titles", generateTitles);

export default router;