"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ParallaxMediaProps = {
  src: string;
  alt: string;
  opacity?: number;
};

export default function ParallaxMedia({ src, alt, opacity = 0.4 }: ParallaxMediaProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const view = window.innerHeight;
      const progress = (view - rect.top) / (view + rect.height);
      const y = window.matchMedia("(max-width: 767px)").matches
        ? (progress - 0.5) * 24
        : (progress - 0.5) * 60;
      el.style.setProperty("--py", `${y.toFixed(1)}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="parallax-media absolute inset-0 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ opacity }}
      />
    </div>
  );
}
