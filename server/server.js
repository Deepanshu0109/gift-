import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import reasonRoutes from "./routes/reasonRoutes.js";
import couponRoutes from "./routes/couponRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/reasons", reasonRoutes);
app.use("/api/coupons", couponRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port 5000")
);
