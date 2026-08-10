"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollCue from "@/components/ScrollCue";

const slides = [
  {
    src: "/images/mat.png",
    alt: "Mellanrätter från köket",
    position: "center 40%",
  },
  {
    src: "/images/ostron.png",
    alt: "Ostron",
    position: "center 35%",
  },
  {
    src: "/images/tapas.png",
    alt: "Delningsrätter",
    position: "center",
  },
  {
    src: "/images/rib.png",
    alt: "Kött från grillen",
    position: "center 40%",
  },
  {
    src: "/images/maat.png",
    alt: "Rätter på tallrik",
    position: "center",
  },
  {
    src: "/images/entre.png",
    alt: "Förrätt",
    position: "center 45%",
  },
  {
    src: "/images/meny.png",
    alt: "Rätter från menyn",
    position: "center",
  },
];

const INTERVAL_MS = 4500;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover ${i === active ? "hero-slide-zoom" : ""}`}
              style={{ objectPosition: slide.position }}
            />
          </div>
        ))}
        <div className="hero-scrim" aria-hidden="true" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-28 md:px-10 md:pb-24">
        <div className="hero-copy max-w-xl md:max-w-2xl">
          <p className="hero-rise hero-eyebrow text-[0.75rem] font-semibold uppercase tracking-[0.32em]">
            Brunnsgatan 41 · Nyköping
          </p>
          <h1 className="hero-rise hero-rise-delay-1 hero-title mt-5 max-w-[18ch] font-display text-[clamp(2.8rem,7.4vw,6.6rem)] font-medium leading-[1.02] tracking-[-0.02em]">
            Ditt nya <em className="hero-accent">favoritbord</em>
            <br />
            i Nyköping.
          </h1>
          <p className="hero-rise hero-rise-delay-2 hero-lead mt-7 max-w-[46ch] text-base leading-relaxed md:text-[1.1rem]">
            En intim kvarterskrog bakom handkarvade tegelväggar, där kök och matsal delar samma rum.
            Rätterna är gjorda för att vandra runt bordet, vinet är valt av en mästare, och kvällen
            blir sällan som du tänkt dig. På ett bra sätt. Hit kommer man som gäst, och går därifrån
            som en i familjen.
          </p>
          <div className="hero-rise hero-rise-delay-3 mt-10 flex flex-wrap gap-4">
            <Link
              href="/boka-bord"
              className="btn-shine inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold tracking-wide text-linen shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition hover:bg-terracotta-deep"
            >
              Boka bord
            </Link>
            <Link
              href="/meny"
              className="inline-flex items-center justify-center rounded-full border border-white/80 bg-black/50 px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-clay hover:text-clay"
            >
              Se menyn
            </Link>
          </div>
          <div className="hero-rise hero-rise-delay-3 mt-10 flex items-center gap-2" aria-label="Bildspel">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Visa bild ${i + 1}: ${slide.alt}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? "w-10 bg-clay" : "w-1.5 bg-white/55 hover:bg-white/85"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <ScrollCue />
    </section>
  );
}
