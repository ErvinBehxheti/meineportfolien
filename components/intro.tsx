"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { MapPin, ArrowDown } from "lucide-react";
import HeroVisual from "./hero-visual";
import Magnetic from "./magnetic";

const heroStack = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"];
const nameLines = ["Ervin", "Behxheti"];
const letterEase = [0.22, 1, 0.36, 1] as const;

export default function Intro() {
  const { ref: inViewRef } = useSectionInView("Home", 0.5);
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  // Scroll-out: the hero recedes into depth as the story starts
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Mouse-parallax orbs – believable depth, very soft
  const mx = useSpring(useMotionValue(0), { stiffness: 40, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 40, damping: 20 });
  const orb1X = useTransform(mx, [-0.5, 0.5], [-36, 36]);
  const orb1Y = useTransform(my, [-0.5, 0.5], [-24, 24]);
  const orb2X = useTransform(mx, [-0.5, 0.5], [28, -28]);
  const orb2Y = useTransform(my, [-0.5, 0.5], [18, -18]);

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    if (reduceMotion || e.pointerType === "touch") return;
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  }

  return (
    <section
      ref={(node) => {
        inViewRef(node);
        sectionRef.current = node;
      }}
      id="home"
      onPointerMove={handlePointerMove}
      className="w-full min-h-[100svh] flex flex-col justify-center scroll-mt-[100rem] relative"
    >
      {/* Depth orbs reacting to the cursor */}
      <motion.div
        aria-hidden
        className="absolute top-[6%] left-[4%] w-[34rem] h-[34rem] rounded-full pointer-events-none"
        style={{
          x: orb1X,
          y: orb1Y,
          background: "radial-gradient(closest-side, var(--accent-glow), transparent 70%)",
          opacity: 0.55,
        }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[2%] right-[2%] w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{
          x: orb2X,
          y: orb2Y,
          background: "radial-gradient(closest-side, rgba(139,92,246,0.18), transparent 70%)",
          opacity: 0.5,
        }}
      />

      <motion.div
        className="mx-auto px-6 pt-28 pb-24 sm:pt-32 w-full"
        style={{
          maxWidth: "var(--container-max)",
          y: contentY,
          opacity: contentOpacity,
          scale: contentScale,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center">

          {/* Left: text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              className="mb-7"
            >
              <span className="status-pill">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Name – kinetic per-letter reveal in 3D */}
            <h1 className="text-hero text-[var(--text-primary)] mb-6 perspective-1200">
              {nameLines.map((line, lineIndex) => (
                <span key={line} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                  {line.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      className="inline-block will-change-transform"
                      initial={{ y: "112%", rotateX: -55, opacity: 0 }}
                      animate={{ y: 0, rotateX: 0, opacity: 1 }}
                      transition={{
                        duration: 0.85,
                        ease: letterEase,
                        delay: 0.12 + lineIndex * 0.22 + i * 0.035,
                      }}
                      style={
                        lineIndex === 1
                          ? {
                              background:
                                "linear-gradient(135deg, var(--text-primary) 30%, var(--accent) 130%)",
                              WebkitBackgroundClip: "text",
                              backgroundClip: "text",
                              color: "transparent",
                            }
                          : undefined
                      }
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 22, delay: 0.65 }}
              className="text-display text-[var(--text-secondary)] mb-4 max-w-xl"
            >
              JavaScript Engineer building{" "}
              <span className="text-[var(--text-primary)] font-medium">
                high-performance web products.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 22, delay: 0.75 }}
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              Polished interfaces, dashboard systems, and production-ready
              applications — with Next.js, React, TypeScript, and Node.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 22, delay: 0.85 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Magnetic>
                <a href="#work" className="btn-aero">
                  View Work
                  <ArrowDown size={15} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="btn-ghost">
                  Get in Touch
                </a>
              </Magnetic>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-2 py-2 transition-colors hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                Download CV
              </a>
            </motion.div>

            {/* Below-fold strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="border-t pt-7 flex flex-col sm:flex-row sm:items-center gap-4"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="flex items-center gap-1.5 text-sm shrink-0"
                style={{ color: "var(--text-tertiary)" }}
              >
                <MapPin size={13} />
                Riga, Latvia
              </p>
              <div className="flex flex-wrap gap-2">
                {heroStack.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: 3D code panel */}
          <div className="hidden lg:flex justify-end items-center">
            <HeroVisual />
          </div>
        </div>
      </motion.div>

      {/* Scroll cue – the story starts below */}
      <motion.div
        aria-hidden
        style={{ opacity: cueOpacity }}
        className="absolute bottom-7 inset-x-0 hidden sm:block"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col items-center gap-2.5"
        >
          <div className="scroll-cue">
            <div className="scroll-cue-dot" />
          </div>
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: "var(--text-tertiary)" }}
          >
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
