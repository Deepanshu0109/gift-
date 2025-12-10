import React, { useEffect, useState } from "react";
import { api } from "../utils/api";
import CouponCard from "../components/CouponCard";

export default function Coupons() {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCoupons = async () => {
    setLoading(true);
    try {
      const res = await api.get("/coupons");
      setCoupons(res.data || []);
    } catch (err) {
      alert("Could not load coupons.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCoupons();
  }, []);

  return (
    <section className="coupons-section">
      <h3 className="section-title">Love Coupons</h3>

      <div className="coupons-grid">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : coupons.length ? (
          coupons.map((c) => (
            <CouponCard key={c._id} coupon={c} onRedeemed={loadCoupons} />
          ))
        ) : (
          <p className="muted">No coupons yet. Add some from server.</p>
        )}
      </div>
    </section>
  );
}
