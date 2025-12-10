import express from "express";
import { getCoupons, redeemCoupon } from "../controllers/couponController.js";

const router = express.Router();

router.get("/", getCoupons);
router.put("/redeem/:id", redeemCoupon);

export default router;
