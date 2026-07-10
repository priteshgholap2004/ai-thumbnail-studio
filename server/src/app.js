import express from "express";
import logger from "./middleware/logger.middleware.js";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(logger);

app.use("/api/users",userRoutes);

//cors
app.use(
  cors({
    origin:"http://localhost:5173",
    credentials:true,
  })
);

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 AI Thumbnail Studio Backend is Running...");
});

export default app;