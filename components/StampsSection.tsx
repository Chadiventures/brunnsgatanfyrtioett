"use client";

import { motion, useReducedMotion } from "framer-motion";
import StampBadge from "@/components/StampBadge";

type Stamp = {
  code?: string;
  label: string;
  seed: string;
};

type StampsSectionProps = {
  stamps: Stamp[];
};

const FEATURED_SEED = "trip";

export default function StampsSection({ stamps }: StampsSectionProps) {
  const reduceMotion = useReducedMotion();
  const ordered = (() => {
    const featured = stamps.find((s) => s.seed === FEATURED_SEED);
    const rest = stamps.filter((s) => s.seed !== FEATURED_SEED);
    if (!featured || rest.length < 3) return stamps;
    return [rest[0], featured, rest[1], rest[2]];
  })();

  return (
    <section className="stamps-banner px-5 md:px-10" aria-label="Utmärkelser">
      <div className="stamps-banner-glow" aria-hidden="true" />
      <div className="relative z-[1] mx-auto max-w-6xl py-3.5 md:py-4">
        <motion.div
          className="flex flex-wrap items-end justify-center gap-x-16 gap-y-8 sm:gap-x-20 md:gap-x-28 lg:gap-x-36"
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.09,
              },
            },
          }}
        >
          {ordered.map((stamp) => {
            const featured = stamp.seed === FEATURED_SEED;
            return (
              <motion.div
                key={stamp.seed}
                className="flex justify-center"
                variants={{
                  hidden: reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: featured ? 14 : 10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: reduceMotion ? 0 : featured ? 0.75 : 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                <StampBadge
                  code={stamp.code ?? "★"}
                  label={stamp.label}
                  featured={featured}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
