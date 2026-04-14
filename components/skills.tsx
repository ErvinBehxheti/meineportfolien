"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Code2, Server, Zap, LayoutDashboard } from "lucide-react";

// Each group gets an icon + accent color
const groupConfig = [
  {
    icon: Code2,
    color: "#0f83fd",
    bg: "rgba(15,131,253,0.07)",
    label: "Core",
  },
  {
    icon: Server,
    color: "#22c55e",
    bg: "rgba(34,197,94,0.07)",
    label: "Delivery",
  },
  {
    icon: Zap,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.07)",
    label: "Speed",
  },
  {
    icon: LayoutDashboard,
    color: "#a855f7",
    bg: "rgba(168,85,247,0.07)",
    label: "UI",
  },
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full max-w-5xl mx-auto px-6 mb-28 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>Capabilities</SectionHeading>

      {/*
        Asymmetric bento grid (taste-skill: DESIGN_VARIANCE 8)
        Row 1: Frontend (wide, col-span-2) | Full-Stack (col-span-1)
        Row 2: Performance (col-span-1) | Product UI (wide, col-span-2)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-auto">

        {skillsData.map((group, index) => {
          const cfg = groupConfig[index];
          const Icon = cfg.icon;
          const isWide = index === 0 || index === 3;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 22, delay: index * 0.09 }}
              whileHover={{ y: -3 }}
              className={`surface-card p-6 relative overflow-hidden ${isWide ? "sm:col-span-2" : "sm:col-span-1"}`}
              style={{ transition: "box-shadow 0.25s ease, transform 0.25s ease" }}
            >
              {/* Ambient background glow per group */}
              <div
                aria-hidden
                className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 100% 0%, ${cfg.bg.replace("0.07", "0.4")}, transparent 70%)`,
                  filter: "blur(20px)",
                }}
              />

              {/* Icon + group label */}
              <div className="flex items-start justify-between mb-4 relative">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: cfg.bg, color: cfg.color }}
                >
                  <Icon size={18} strokeWidth={2} />
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                  style={{ background: cfg.bg, color: cfg.color }}
                >
                  {cfg.label}
                </span>
              </div>

              {/* Group title + accent underline */}
              <div className="relative mb-1">
                <h3 className="font-semibold text-base relative inline-block" style={{ color: "var(--text-primary)" }}>
                  {group.groupTitle}
                  <span
                    className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${cfg.color}, transparent)` }}
                  />
                </h3>
              </div>

              <p className="text-xs mb-4" style={{ color: "var(--text-tertiary)" }}>
                {group.groupDescription}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium border"
                    style={{
                      background: "var(--surface-2)",
                      borderColor: "var(--border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Skill count badge */}
              <div className="absolute bottom-4 right-5">
                <span
                  className="text-[10px] font-bold tabular-nums"
                  style={{ color: cfg.color, opacity: 0.5 }}
                >
                  {group.skills.length} skills
                </span>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
