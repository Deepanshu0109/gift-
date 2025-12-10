import React, { useState } from "react";
import { motion } from "framer-motion";
import { api } from "../utils/api";

export default function GateKeeper({ onUnlock }) {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!answer.trim()) {
      navigator.vibrate?.(30);
      return alert("Write the secret date, silly 💫");
    }
    setLoading(true);
    try {
      const res = await api.post("/auth/verify", { answer });
      if (res.data?.success) {
        onUnlock();
      } else {
        alert("Not quite... try again 🫠");
      }
    } catch (err) {
      alert("Nope. Wrong answer or server down.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gate-screen">
      <motion.div
        className="gate-card"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="gate-title">When did we meet first?</h2>
        <p className="gate-sub">hint: 3rd day of college 💖</p>

        <input
          className="gate-input"
          type="text"
          placeholder="e.g. 12-03-2021"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={loading}
          aria-busy={loading ? "true" : "false"}
        >
          {loading ? "Checking..." : "Unlock ❤️"}
        </button>
      </motion.div>
    </div>
  );
}
