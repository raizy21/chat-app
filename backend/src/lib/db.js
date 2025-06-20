import mongoose from "mongoose";
import { MONGODB_URI } from "../config/config.js";

export const connectDB = async () => {
  if (!MONGODB_URI) {
    console.error("mongodb_uri not set in .env");
    process.exit(1);
  }

  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("connected"))
    .catch((err) => console.log("auth error:", err.message));

  try {
    const conn = await mongoose.connect(MONGODB_URI);
    // console.log(`mongo db connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`error: ${error.message}`);
    process.exit(1);
  }
};
