"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
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
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full max-w-3xl mx-auto px-6 mb-28 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>Experience</SectionHeading>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-5 top-6 bottom-6 w-px"
          style={{ background: "var(--border-strong)" }}
        />

        <div className="flex flex-col gap-5">
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 140, damping: 22, delay: index * 0.1 }}
                className="flex gap-5 relative"
              >
                {/* Company avatar — replaces the plain dot */}
                <div className="shrink-0 relative z-10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border-2 font-bold text-sm"
                    style={{
                      background: cfg.bg,
                      borderColor: cfg.borderColor,
                      color: cfg.color,
                      boxShadow: `0 0 12px ${cfg.bg}`,
                    }}
                  >
                    {Icon ? <Icon size={16} strokeWidth={2.5} /> : cfg.initial}
                  </div>
                </div>

                {/* Card */}
                <div className="surface-card p-5 sm:p-6 flex-1 min-w-0">
                  {/* Company color accent line */}
                  <div
                    className="h-[2px] w-12 rounded-full mb-4"
                    style={{ background: `linear-gradient(90deg, ${cfg.color}, transparent)` }}
                  />

                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
                      {item.title}
                    </h3>
                    <span
                      className="text-[11px] font-medium shrink-0 px-2.5 py-1 rounded-full sm:ml-3"
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

                  {/* Company + location */}
                  <p className="text-sm font-semibold mb-1" style={{ color: cfg.color }}>
                    {item.company}
                    {item.location && (
                      <span className="font-normal" style={{ color: "var(--text-tertiary)" }}>
                        {" "}· {item.location}
                      </span>
                    )}
                  </p>

                  {/* Summary */}
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                    {item.summary}
                  </p>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2.5">
                    {item.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm flex gap-2.5 items-start leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="mt-[8px] shrink-0 w-1 h-1 rounded-full"
                          style={{ background: cfg.color, opacity: 0.7 }}
                        />
                        {bullet}
                      </li>
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
