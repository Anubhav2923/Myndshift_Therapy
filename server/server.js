import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import checkinRoutes from "./routes/checkin.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: "https://myndshift-therapy.vercel.app/", 
    credentials: true,
  })
);
app.use(express.json());

// Timeout handler
app.use((req, res, next) => {
  res.setTimeout(10000, () => {
    console.error("Request timed out:", req.method, req.originalUrl);
    res.status(503).json({ error: "Request timed out" });
  });
  next();
});

// API routes
app.use("/api/checkins", checkinRoutes);



// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
