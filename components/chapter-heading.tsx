"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ChapterHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

const wordEase = [0.22, 1, 0.36, 1] as const;

export default function ChapterHeading({
  index,
  eyebrow,
  title,
  description,
}: ChapterHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const numberY = useTransform(scrollYProgress, [0, 1], [70, -70]);

  const words = title.split(" ");

  return (
    <div ref={ref} className="relative mb-14 sm:mb-20">
      {/* Ghost chapter number – parallax depth layer */}
      <motion.span
        aria-hidden
        className="text-ghost-number absolute right-0 -top-[0.45em] pointer-events-none opacity-60"
        style={{ y: numberY }}
      >
        {index}
      </motion.span>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: wordEase }}
        className="eyebrow mb-5"
      >
        {index} — {eyebrow}
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.055, delayChildren: 0.1 } },
        }}
        className="text-chapter text-[var(--text-primary)] relative max-w-3xl"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "108%" },
                visible: { y: 0, transition: { duration: 0.7, ease: wordEase } },
              }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: wordEase, delay: 0.25 }}
          className="mt-5 text-base sm:text-lg max-w-xl leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </motion.p>
      )}

      {/* Hairline that draws itself */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: wordEase, delay: 0.3 }}
        className="origin-left mt-8 h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--border-accent), var(--border) 40%, transparent)",
        }}
      />
    </div>
  );
}
