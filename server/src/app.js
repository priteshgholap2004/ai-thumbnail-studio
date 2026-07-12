import express from "express";
import logger from "./middleware/logger.middleware.js";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/error.middleware.js";

import thumbnailRoutes from "./routes/thumbnail.routes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(logger);

app.use("/api/users",userRoutes);

app.use("/api/thumbnails",thumbnailRoutes);


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

app.use(errorHandler);

export default app;