"use client";

import React from "react";
import ChapterHeading from "./chapter-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Code2, Server, Zap, LayoutDashboard } from "lucide-react";
import TiltCard from "./tilt-card";

// Each group gets an icon + accent color
const groupConfig = [
  { icon: Code2, color: "#0f83fd", bg: "rgba(15,131,253,0.08)", label: "Core" },
  { icon: Server, color: "#22c55e", bg: "rgba(34,197,94,0.08)", label: "Delivery" },
  { icon: Zap, color: "#f59e0b", bg: "rgba(245,158,11,0.08)", label: "Speed" },
  { icon: LayoutDashboard, color: "#a855f7", bg: "rgba(168,85,247,0.08)", label: "UI" },
];

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full mx-auto px-6 mb-32 sm:mb-44 scroll-mt-28 relative"
      style={{ maxWidth: "var(--container-max)" }}
    >
      <ChapterHeading
        index="02"
        eyebrow="Capabilities"
        title="Depth where it matters."
        description="Not a wall of badges — four areas of real, production-earned capability."
      />

      {/* Asymmetric bento: wide / narrow, narrow / wide */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {skillsData.map((group, index) => {
          const cfg = groupConfig[index];
          const Icon = cfg.icon;
          const isWide = index === 0 || index === 3;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 56, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 110, damping: 20, delay: index * 0.1 }}
              className={`perspective-1200 ${isWide ? "sm:col-span-2" : "sm:col-span-1"}`}
            >
              <TiltCard maxTilt={5} className="rounded-[20px] h-full">
                <div className="surface-card p-7 sm:p-8 relative overflow-hidden h-full">
                  {/* Ambient corner glow per group */}
                  <div
                    aria-hidden
                    className="absolute top-0 right-0 w-44 h-44 rounded-full pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 100% 0%, ${cfg.bg.replace("0.08", "0.45")}, transparent 70%)`,
                      filter: "blur(24px)",
                    }}
                  />

                  <div className="flex items-start justify-between mb-5 relative">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: cfg.bg, color: cfg.color }}
                    >
                      <Icon size={21} strokeWidth={2} />
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: cfg.bg, color: cfg.color }}
                    >
                      {cfg.label}
                    </span>
                  </div>

                  <h3
                    className="font-semibold text-lg sm:text-xl mb-1.5 relative"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {group.groupTitle}
                  </h3>

                  <p className="text-sm mb-5 relative" style={{ color: "var(--text-tertiary)" }}>
                    {group.groupDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 relative">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
