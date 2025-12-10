import Coupon from "../models/Coupon.js";

export const getCoupons = async (req, res) => {
  const coupons = await Coupon.find();
  res.json(coupons);
};

export const redeemCoupon = async (req, res) => {
  const updated = await Coupon.findByIdAndUpdate(
    req.params.id,
    { isRedeemed: true },
    { new: true }
  );

  res.json(updated);
};
