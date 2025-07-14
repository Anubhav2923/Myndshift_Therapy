import { Checkin } from "../models/checkin.model.js";

//POST /api/checkins
export const createCheckin = async (req, res) => {
  try {
    const { mood, stress, feelings } = req.body;
    // Robust null check for req.auth and userId
    const userId = req.auth && req.auth.userId ? req.auth.userId : "anonymous";

    if (!userId || !mood || !stress) {
      console.log("Invalid data:", { userId, mood, stress });
      return res.status(400).json({ error: "Invalid Data" });
    }
    const newCheckin = await Checkin.create({
      userId,
      mood,
      stress,
      feelings,
    });
    res.status(201).json(newCheckin);
  } catch (err) {
    console.log("Error in createCheckin Controller", err);
    res.status(500).json({ error: "Failed to create check-in." });
  }
};

//GET /api/checkin
export const getCheckin = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const checkins = await Checkin.find({ userId }).sort({ date: -1 });
    res.status(200).json(checkins);
  } catch (err) {
    console.log("Error in getCheckin controller");
    res.status(500).json({ message: "Failed to Fetch check-in" });
  }
};
