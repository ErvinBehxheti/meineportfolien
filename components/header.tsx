"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./theme-switch";
import {
  Home,
  Layers,
  Sparkles,
  Briefcase,
  UserRound,
  Mail,
  type LucideIcon,
} from "lucide-react";

const dockIcons: Record<(typeof links)[number]["name"], LucideIcon> = {
  Home: Home,
  Work: Layers,
  Skills: Sparkles,
  Experience: Briefcase,
  About: UserRound,
  Contact: Mail,
};

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  const handleClick = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };

  return (
    <header className="z-[999] relative">
      {/* Story progress bar */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[1001] origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          boxShadow: "0 0 12px var(--accent-glow)",
        }}
      />

      {/* Desktop: one floating glass capsule */}
      <motion.nav
        initial={{ y: -90, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 26, delay: 0.15 }}
        className="glass-nav fixed top-5 left-1/2 hidden sm:flex items-center gap-1 rounded-full p-1.5 pr-2"
      >
        <Link
          href="#home"
          onClick={() => handleClick("Home")}
          aria-label="Ervin Behxheti – home"
          className="flex items-center justify-center w-9 h-9 rounded-full text-[11px] font-bold text-white shrink-0 mr-1"
          style={{
            background: "linear-gradient(145deg, var(--accent-2), var(--accent))",
            boxShadow: "0 2px 10px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.35)",
          }}
        >
          EB
        </Link>

        <ul className="flex items-center">
          {links.map((link) => (
            <li key={link.hash} className="relative">
              <Link
                href={link.hash}
                onClick={() => handleClick(link.name)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 block",
                  activeSection === link.name
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 rounded-full -z-10"
                    style={{ background: "var(--accent-subtle)" }}
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeSwitch />
      </motion.nav>

      {/* Mobile: top corners – monogram + theme toggle */}
      <motion.div
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 26, delay: 0.1 }}
        className="sm:hidden fixed top-4 inset-x-4 flex items-center justify-between"
      >
        <Link
          href="#home"
          onClick={() => handleClick("Home")}
          aria-label="Ervin Behxheti – home"
          className="flex items-center justify-center w-10 h-10 rounded-full text-[11px] font-bold text-white"
          style={{
            background: "linear-gradient(145deg, var(--accent-2), var(--accent))",
            boxShadow: "0 4px 16px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.35)",
          }}
        >
          EB
        </Link>
        <div className="glass-nav rounded-full">
          <ThemeSwitch />
        </div>
      </motion.div>

      {/* Mobile: iOS tab-bar dock */}
      <motion.nav
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 26, delay: 0.2 }}
        className="glass-nav sm:hidden fixed bottom-3 inset-x-3 z-[999] rounded-[24px] px-1 py-1.5"
        style={{ paddingBottom: "max(0.375rem, env(safe-area-inset-bottom))" }}
      >
        <ul className="flex items-center justify-between">
          {links.map((link) => {
            const Icon = dockIcons[link.name];
            const isActive = activeSection === link.name;
            return (
              <li key={link.hash} className="relative flex-1">
                <Link
                  href={link.hash}
                  onClick={() => handleClick(link.name)}
                  className={cn(
                    "relative flex flex-col items-center gap-0.5 py-1.5 rounded-2xl transition-colors duration-150",
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-tertiary)]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      className="absolute inset-x-1 inset-y-0 rounded-2xl -z-10"
                      style={{ background: "var(--accent-subtle)" }}
                      layoutId="dockActive"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon size={19} strokeWidth={isActive ? 2.4 : 2} />
                  <span className="text-[9.5px] font-semibold tracking-wide">
                    {link.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </header>
  );
}
