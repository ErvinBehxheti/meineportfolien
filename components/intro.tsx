"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { MapPin } from "lucide-react";
import HeroVisual from "./hero-visual";

const heroStack = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="w-full min-h-[100dvh] flex flex-col justify-center scroll-mt-[100rem] relative overflow-hidden"
    >
      <div
        className="mx-auto px-6 pt-24 pb-20 sm:pt-32 w-full"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">

          {/* ── Left: text content ── */}
          <div className="max-w-xl">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              className="mb-5"
            >
              <span className="status-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Name — fold element 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.08 }}
              className="text-hero text-[var(--text-primary)] mb-4"
            >
              Ervin<br />Behxheti
            </motion.h1>

            {/* Headline — fold element 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.16 }}
              className="text-display text-[var(--text-secondary)] mb-8"
            >
              JavaScript Engineer building<br className="hidden sm:block" /> high-performance web products.
            </motion.p>

            {/* CTAs — fold element 3 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <a href="#projects" className="btn-aero">View Work</a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium px-5 py-2.5 transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                style={{
                  background: "var(--surface-1)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-strong)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.75), 0 1px 3px rgba(15,40,100,0.07)",
                }}
              >
                Get in Touch
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium px-4 py-2.5 transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                style={{ color: "var(--text-secondary)" }}
              >
                Download CV
              </a>
            </motion.div>

            {/* Below-fold strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="border-t pt-7 flex flex-col sm:flex-row sm:items-center gap-4"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-tertiary)" }}>
                <MapPin size={11} />
                Riga, Latvia
              </p>
              <div className="flex flex-wrap gap-1.5">
                {heroStack.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: animated code visual ── */}
          <div className="hidden lg:flex justify-end items-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
