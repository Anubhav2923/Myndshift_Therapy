import express from "express";
import { requireAuth } from "@clerk/clerk-sdk-node";

import { createCheckin, getCheckin } from "../controllers/checkinController.js";

const router = express.Router();

// Temporarily remove requireAuth for debugging Clerk issues
router.post("/", createCheckin);
router.get("/",  getCheckin);

export default router;
