// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("FATAL: MONGO_URI is not set. Please add it to your .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, {
      // recommended options are handled by mongoose defaults in modern versions
      // but you can add options here if needed.
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
