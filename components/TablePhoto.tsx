"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Ratio = "portrait" | "landscape" | "square" | "cinema" | "fill";

type TablePhotoProps = {
  src: string;
  alt: string;
  seed?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fillHeight?: boolean;
  caption?: string;
  ratio?: Ratio;
  objectPosition?: string;
};

const ratioClass: Record<Exclude<Ratio, "fill">, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  cinema: "aspect-[16/10]",
};

export default function TablePhoto({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 90vw, 40vw",
  priority = false,
  fillHeight = false,
  caption,
  ratio = "portrait",
  objectPosition = "center",
}: TablePhotoProps) {
  const ref = useRef<HTMLElement>(null);
  const shape = fillHeight || ratio === "fill" ? "fill" : ratio;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-inview");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-inview");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure
      ref={ref}
      className={`photo-frame group relative ${shape === "fill" ? "h-full min-h-[180px]" : ""} ${className}`}
    >
      <div
        className={`photo-frame-inner relative overflow-hidden ${
          shape === "fill" ? "h-full" : ratioClass[shape]
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="photo-frame-img object-cover"
          style={{ objectPosition }}
        />
        {caption && shape === "fill" ? (
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 md:p-5">
            <span className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-linen/90">
              <span className="h-px w-5 bg-gold-hairline" aria-hidden="true" />
              {caption}
            </span>
          </figcaption>
        ) : null}
      </div>
      {caption && shape !== "fill" ? (
        <figcaption className="mt-3 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-ink/70">
          <span className="h-px w-6 bg-gold-hairline/70" aria-hidden="true" />
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
