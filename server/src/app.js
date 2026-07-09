import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 AI Thumbnail Studio Backend is Running...");
});

export default app;