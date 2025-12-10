import React from "react";
import { motion } from "framer-motion";
import MemoryCard from "../components/MemoryCard";

export default function Timeline() {
  const memories = [
    { id: 1, img: "/img/1st pic.jpg", text: "vituu ki phli pic — shy smiles." },
    { id: 2, img: "/img/1st sent.jpg", text: "ye vituu ne khud se bheji thi" },
    { id: 3, img: "/img/bholu.jpg", text: "pdh ni ra tha bholu, masti kar rha tha" },
    { id: 4, img: "/img/date.jpg", text: "hmari phli date" },
    { id: 5, img: "/img/sotuu.jpg", text: "vituu thak gya tha" },
    { id: 6, img: "/img/perfect.jpg", text: "hehehehe" },
  ];

  return (
    <section className="timeline">
      <h3 className="section-title">Memory Lane</h3>

      <div className="timeline-list">
        {memories.map((m, idx) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <MemoryCard img={m.img} text={m.text} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
