"use client";

import { useEffect, useState } from "react";

export default function AmbientCursor() {
  const [pos, setPos] = useState({ x: 50, y: 40 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setOn(true);
    const onMove = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!on) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[70] mix-blend-screen"
      aria-hidden="true"
      style={{
        background: `radial-gradient(520px circle at ${pos.x}% ${pos.y}%, color-mix(in srgb, #9C7A4E 12%, transparent), transparent 55%)`,
      }}
    />
  );
}
