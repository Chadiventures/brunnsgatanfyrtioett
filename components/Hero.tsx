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

const INTERVAL_MS = 3200;

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
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-28 sm:pb-20 md:px-10 md:pb-24">
        <div className="hero-copy max-w-xl md:max-w-2xl">
          <p className="hero-rise text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-clay sm:text-[0.7rem]">
            Brunnsgatan 41 · Nyköping
          </p>
          <h1 className="hero-rise hero-rise-delay-1 hero-heading mt-3 max-w-[14ch] text-[clamp(2.35rem,9vw,5.5rem)] text-linen sm:mt-4">
            Ditt nya
            <br />
            favoritbord
            <br />
            i Nyköping.
          </h1>
          <p className="hero-rise hero-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-linen/80 sm:mt-6 sm:text-lg">
            Ljuset dämpas, glasen klirrar, och rätterna vandrar runt bordet från hand till hand. Här
            delas maten som hemma, men känslan följer med långt efter att du lämnat bordet. Det här är
            Brunnsgatan 41.
          </p>
          <div className="hero-rise hero-rise-delay-3 mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/boka-bord"
              className="btn-shine inline-flex min-h-12 w-full items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold tracking-wide text-linen shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition hover:bg-terracotta-deep sm:w-auto"
            >
              Boka bord
            </Link>
            <Link
              href="/meny"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/80 bg-black/50 px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-clay hover:text-clay sm:w-auto"
            >
              Se menyn
            </Link>
          </div>
          <div className="hero-rise hero-rise-delay-3 mt-8 flex items-center gap-2 sm:mt-10" aria-label="Bildspel">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Visa bild ${i + 1}: ${slide.alt}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === active ? "w-8 bg-clay sm:w-10" : "w-2 bg-white/55 hover:bg-white/85"
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
