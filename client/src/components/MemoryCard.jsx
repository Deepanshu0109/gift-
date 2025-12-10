import React from "react";

export default function MemoryCard({ img, text }) {
  return (
    <article className="memory-card">
      <div className="memory-img-wrap">
        <img src={img} alt={text} className="memory-img" />
      </div>
      <div className="memory-text">{text}</div>
    </article>
  );
}
