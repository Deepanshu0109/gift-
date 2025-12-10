// seed.js — Coupon-only seeder (cute Hinglish coupons)
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Coupon from "./models/Coupon.js";

const COUPONS = [
  { title: "Free Cheezi Treat 🍕" },
  { title: "Late-Night Video Call Pass 📞✨" },
  { title: "Maggi Date Coupon 🍜" },
  { title: "Instant Reply Token 😂" },
  { title: "Movie Night — Aap Choose ❤️" },
  { title: "Head Massage by Me 💆‍♀️" },
  { title: "Your Choice Date — No Questions Asked 💖" },
  { title: "I’ll Listen Without Arguing Coupon 😭😂" }
];

const seed = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI missing in .env");

    await mongoose.connect(uri);
    console.log("🌸 Connected to MongoDB");

    await Coupon.deleteMany({});
    console.log("🗑️ Old coupons cleared");

    await Coupon.insertMany(COUPONS);
    console.log(`🎟️ Inserted ${COUPONS.length} cute coupons`);

    console.log("✨ Coupon seeding complete!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seed();
