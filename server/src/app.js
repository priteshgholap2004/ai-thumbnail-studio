import express from "express";
import logger from "./middleware/logger.middleware.js";

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 AI Thumbnail Studio Backend is Running...");
});

export default app;