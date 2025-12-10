import React, { useState } from "react";
import { api } from "../utils/api";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyILoveYou() {
  const [reason, setReason] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const fetchReason = async () => {
    setLoading(true);
    try {
      const res = await api.get("/reasons/random");
      if (res.data && res.data.text) {
        setReason(res.data.text);
        setOpen(true);
      } else {
        setReason("I ran out of poetic lines... but I’ve got infinite love. ❤️");
        setOpen(true);
      }
    } catch (err) {
      setReason("Couldn't fetch a reason — server sleepy. Try again.");
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    // leave reason in state so another can animate in quickly if reopened
  };

  const handleAnother = async () => {
    setLoading(true);
    try {
      const res = await api.get("/reasons/random");
      if (res.data && res.data.text) {
        // small crossfade animation handled by AnimatePresence + key change
        setReason(null);
        // tiny pause for nicer animation
        setTimeout(() => setReason(res.data.text), 160);
      }
    } catch {
      setReason("Couldn't fetch a new one. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="why-section">
      <h3 className="section-title">Why I love you</h3>

      <div className="why-actions">
        <button
          className="btn-primary"
          onClick={fetchReason}
          disabled={loading}
          aria-busy={loading ? "true" : "false"}
        >
          {loading ? "Thinking..." : "Tell me why 💌"}
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="reason-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <div className="modal-header">
                <div className="modal-heart-wrap" aria-hidden>
                  {/* small heart burst animation */}
                  <motion.div
                    className="heart-burst"
                    animate={{ scale: [0.8, 1.08, 1], rotate: [0, -6, 0] }}
                    transition={{ duration: 0.8 }}
                  >
                    ❤️
                  </motion.div>
                </div>

                <button className="btn-ghost" onClick={handleClose} aria-label="Close">
                  Close
                </button>
              </div>

              <div className="modal-body">
                <AnimatePresence mode="wait">
                  {reason ? (
                    <motion.p
                      key={reason}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="reason-text"
                    >
                      {reason}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="reason-text muted"
                    >
                      Loading...
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="modal-footer">
                <button
                  className="btn-primary-sm"
                  onClick={handleAnother}
                  disabled={loading}
                  aria-busy={loading ? "true" : "false"}
                >
                  {loading ? "Thinking..." : "Another 💫"}
                </button>
                <button className="btn-ghost" onClick={handleClose}>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
