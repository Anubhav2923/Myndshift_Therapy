import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import checkinRoutes from "./routes/checkin.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use((req, res, next) => {
  res.setTimeout(10000, () => {
    console.error("Request timed out:", req.method, req.originalUrl);
    res.status(503).json({ error: "Request timed out" });
  });
  next();
});

app.use("/api/checkins", checkinRoutes);
app.use("/api/test", (req, res) => {
  res.send("backend is running");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
