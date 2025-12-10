import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isRedeemed: { type: Boolean, default: false }
});

export default mongoose.model("Coupon", CouponSchema);
