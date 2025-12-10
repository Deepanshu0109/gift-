import React, { useState } from "react";
import GateKeeper from "./pages/GateKeeper.jsx";
import Timeline from "./pages/Timeline.jsx";
import WhyILoveYou from "./pages/WhyILoveYou.jsx";
import Coupons from "./pages/Coupons.jsx";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="app-root">
      {!unlocked ? (
        <GateKeeper onUnlock={() => setUnlocked(true)} />
      ) : (
        <main className="main-area">
          <header className="top-bar">
            <h1 className="app-title">Memory Lane</h1>
          </header>

          <section className="content-area">
            <Timeline />
            <WhyILoveYou />
            <Coupons />
          </section>
        </main>
      )}
    </div>
  );
}
