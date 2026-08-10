"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import StampBadge from "@/components/StampBadge";

type Stamp = {
  code?: string;
  label: string;
  seed: string;
  icon: "medal" | "star" | "fork" | "leaf";
};

type StampsSectionProps = {
  stamps: Stamp[];
};

export default function StampsSection({ stamps }: StampsSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-linen px-5 md:px-10" aria-label="Utmärkelser">
      <div className="mx-auto max-w-7xl border-y border-gold-hairline/30 py-16">
        <motion.div
          className="grid grid-cols-2 items-stretch justify-items-center md:flex md:flex-row md:justify-center md:gap-0"
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.1,
              },
            },
          }}
        >
          {stamps.map((stamp, i) => (
            <Fragment key={stamp.seed}>
              {i === 2 ? (
                <div
                  className="col-span-2 my-8 h-px w-full bg-gold-hairline/25 md:hidden"
                  aria-hidden="true"
                />
              ) : null}
              {i > 0 ? (
                <div
                  className="hidden min-h-12 w-px self-stretch bg-gold-hairline/25 md:block"
                  aria-hidden="true"
                />
              ) : null}
              <motion.div
                className="flex items-center justify-center px-10 py-2"
                variants={{
                  hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: reduceMotion ? 0 : 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                <StampBadge code={stamp.code} label={stamp.label} icon={stamp.icon} />
              </motion.div>
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
