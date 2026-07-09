import express from "express";
import logger from "./middleware/logger.middleware.js";
import cros from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

//cors
app.use(
  cors({
    origin:"https://localhost:5173",
    credentials:true,
  })
);

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 AI Thumbnail Studio Backend is Running...");
});

export default app;