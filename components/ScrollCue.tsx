"use client";

import { useEffect, useState } from "react";

export default function ScrollCue() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 transition duration-500 md:flex ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <span className="text-[0.65rem] uppercase tracking-[0.28em] text-linen/75">Skrolla</span>
      <span className="scroll-cue-line" />
    </div>
  );
}
