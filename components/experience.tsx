"use client";

import React, { useRef } from "react";
import ChapterHeading from "./chapter-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Laptop } from "lucide-react";

// Company visual config — keeps it honest: initials + brand color, no fake logos
const companyConfig: Record<string, {
  initial?: string;
  color: string;
  bg: string;
  borderColor: string;
  icon?: typeof Laptop;
}> = {
  "Attributy": {
    initial: "A",
    color: "#0f83fd",
    bg: "rgba(15,131,253,0.1)",
    borderColor: "rgba(15,131,253,0.25)",
  },
  "Freelance": {
    color: "#22c55e",
    bg: "rgba(34,197,94,0.1)",
    borderColor: "rgba(34,197,94,0.25)",
    icon: Laptop,
  },
  "Logiscool Mitrovica": {
    initial: "L",
    color: "#f97316",
    bg: "rgba(249,115,22,0.1)",
    borderColor: "rgba(249,115,22,0.25)",
  },
};

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const listRef = useRef<HTMLDivElement>(null);

  // The timeline draws itself as the story scrolls
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.72", "end 0.5"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const lineScale = useTransform(lineProgress, [0, 1], [0, 1]);
  const dotTop = useTransform(lineProgress, (v) => `${v * 100}%`);

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full max-w-4xl mx-auto px-6 mb-32 sm:mb-44 scroll-mt-28"
    >
      <ChapterHeading
        index="03"
        eyebrow="Experience"
        title="The road so far."
        description="From intern to instructor — analytics products, full-stack client delivery, and mentoring the next batch of engineers."
      />

      <div className="relative">
        {/* Static rail */}
        <div
          aria-hidden
          className="absolute left-[23px] top-6 bottom-6 w-px"
          style={{ background: "var(--border)" }}
        />
        {/* Drawn-in line */}
        <motion.div
          aria-hidden
          className="absolute left-[23px] top-6 bottom-6 w-px origin-top"
          style={{
            scaleY: lineScale,
            background: "linear-gradient(180deg, var(--accent), var(--accent-2))",
            boxShadow: "0 0 10px var(--accent-glow)",
          }}
        />
        {/* Traveling dot */}
        <motion.div
          aria-hidden
          className="absolute left-[23px] top-6 bottom-6 w-px pointer-events-none"
        >
          <motion.span
            className="absolute -left-[5px] w-[11px] h-[11px] rounded-full"
            style={{
              top: dotTop,
              background: "var(--accent)",
              boxShadow: "0 0 0 4px var(--accent-subtle), 0 0 16px var(--accent-glow)",
            }}
          />
        </motion.div>

        <div ref={listRef} className="flex flex-col gap-7">
          {experiencesData.map((item, index) => {
            const cfg = companyConfig[item.company] ?? {
              color: "var(--accent)",
              bg: "var(--accent-subtle)",
              borderColor: "var(--border-accent)",
            };
            const Icon = cfg.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 110, damping: 20, delay: index * 0.08 }}
                className="flex gap-5 sm:gap-7 relative"
              >
                {/* Company avatar */}
                <div className="shrink-0 relative z-10">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ type: "spring", stiffness: 240, damping: 16, delay: index * 0.08 + 0.15 }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border-2 font-bold text-base"
                    style={{
                      background: cfg.bg,
                      borderColor: cfg.borderColor,
                      color: cfg.color,
                      boxShadow: `0 0 16px ${cfg.bg}`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {Icon ? <Icon size={19} strokeWidth={2.5} /> : cfg.initial}
                  </motion.div>
                </div>

                {/* Card */}
                <div className="surface-card p-6 sm:p-8 flex-1 min-w-0">
                  <div
                    className="h-[2px] w-14 rounded-full mb-5"
                    style={{ background: `linear-gradient(90deg, ${cfg.color}, transparent)` }}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1.5">
                    <h3
                      className="font-semibold text-lg sm:text-xl tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </h3>
                    <span
                      className="text-xs font-medium shrink-0 px-3 py-1.5 rounded-full sm:ml-3 self-start"
                      style={{
                        color: cfg.color,
                        background: cfg.bg,
                        border: `1px solid ${cfg.borderColor}`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.date}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-semibold mb-2" style={{ color: cfg.color }}>
                    {item.company}
                    {item.location && (
                      <span className="font-normal" style={{ color: "var(--text-tertiary)" }}>
                        {" "}· {item.location}
                      </span>
                    )}
                  </p>

                  <p className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                    {item.summary}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {item.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}
                        className="text-sm sm:text-[15px] flex gap-3 items-start leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="mt-[9px] shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: cfg.color, opacity: 0.7 }}
                        />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
