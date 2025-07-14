import mongoose, { mongo } from "mongoose";

const checkinSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  mood: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  stress: {
    type: String,
    required: true,
    enum: ["low", "medium", "high"],
  },
  feelings: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Checkin = mongoose.model("Checkin", checkinSchema);
