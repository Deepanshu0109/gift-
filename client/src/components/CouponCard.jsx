import React, { useState } from "react";
import { api } from "../utils/api";
import { motion } from "framer-motion";

export default function CouponCard({ coupon, onRedeemed }) {
  const [redeeming, setRedeeming] = useState(false);

  const redeem = async (e) => {
    e.stopPropagation();
    if (coupon.isRedeemed) return;
    setRedeeming(true);
    try {
      await api.put(`/coupons/redeem/${coupon._id}`);
      onRedeemed?.();
    } catch (err) {
      alert("Couldn't redeem. Try again.");
    } finally {
      setRedeeming(false);
    }
  };

  return (
    <motion.div
      className={`coupon-card ${coupon.isRedeemed ? "redeemed" : ""}`}
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.28 }}
      role="button"
      tabIndex={0}
    >
      <div className="coupon-info">
        <div className="coupon-title">{coupon.title}</div>
        {coupon.isRedeemed ? (
          <div className="coupon-status">Used ✨</div>
        ) : (
          <div className="coupon-action">
            <button className="btn-primary-sm" onClick={redeem} disabled={redeeming}>
              {redeeming ? "Redeeming..." : "Redeem"}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
