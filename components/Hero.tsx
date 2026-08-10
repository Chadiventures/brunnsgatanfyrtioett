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
    mobilePosition: "center 32%",
  },
  {
    src: "/images/ostron.png",
    alt: "Ostron",
    position: "center 35%",
    mobilePosition: "center 28%",
  },
  {
    src: "/images/tapas.png",
    alt: "Delningsrätter",
    position: "center",
    mobilePosition: "center 40%",
  },
  {
    src: "/images/rib.png",
    alt: "Kött från grillen",
    position: "center 40%",
    mobilePosition: "center 35%",
  },
  {
    src: "/images/maat.png",
    alt: "Rätter på tallrik",
    position: "center",
    mobilePosition: "center 38%",
  },
  {
    src: "/images/entre.png",
    alt: "Förrätt",
    position: "center 45%",
    mobilePosition: "center 42%",
  },
  {
    src: "/images/meny.png",
    alt: "Rätter från menyn",
    position: "center",
    mobilePosition: "center 36%",
  },
];

const INTERVAL_MS = 3200;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

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
              style={{
                objectPosition: isMobile ? slide.mobilePosition : slide.position,
              }}
            />
          </div>
        ))}
        <div className="hero-scrim" aria-hidden="true" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-28 md:justify-end md:px-10 md:pb-24 md:pt-28">
        <div className="hero-copy max-w-xl md:max-w-2xl">
          <p className="hero-rise text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-clay sm:text-[0.7rem] sm:tracking-[0.24em]">
            Brunnsgatan 41 · Nyköping
          </p>
          <h1 className="hero-rise hero-rise-delay-1 hero-heading mt-3 text-[clamp(2.55rem,9.8vw,5.5rem)] text-linen [hyphens:none] sm:mt-4 sm:max-w-[14ch]">
            Ditt&nbsp;nya
            <br />
            favoritbord
            <br />
            i&nbsp;Nyköping.
          </h1>
          <p className="hero-rise hero-rise-delay-2 mt-4 max-w-md text-[0.95rem] leading-relaxed text-linen/80 sm:mt-6 sm:max-w-xl sm:text-lg">
            <span className="sm:hidden">
              Ljuset dämpas, glasen klirrar, och rätterna vandrar runt bordet. Här delas maten som
              hemma, men känslan följer med långt efter kvällen.
            </span>
            <span className="hidden sm:inline">
              Ljuset dämpas, glasen klirrar, och rätterna vandrar runt bordet från hand till hand. Här
              delas maten som hemma, men känslan följer med långt efter att du lämnat bordet. Det här är
              Brunnsgatan 41.
            </span>
          </p>
          <div className="hero-rise hero-rise-delay-3 mt-6 flex w-full flex-col gap-2.5 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/boka-bord"
              className="btn-shine inline-flex min-h-12 w-full items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold tracking-wide text-linen shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition hover:bg-terracotta-deep sm:w-auto"
            >
              Boka bord
            </Link>
            <Link
              href="/meny"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/80 bg-black/45 px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-clay hover:text-clay sm:w-auto"
            >
              Se menyn
            </Link>
          </div>
          <div
            className="hero-rise hero-rise-delay-3 mt-5 flex items-center justify-center gap-2 sm:mt-10 sm:justify-start"
            aria-label="Bildspel"
          >
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Visa bild ${i + 1}: ${slide.alt}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-500 sm:h-2 ${
                  i === active ? "w-7 bg-clay sm:w-10" : "w-1.5 bg-white/50 hover:bg-white/85 sm:w-2"
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
