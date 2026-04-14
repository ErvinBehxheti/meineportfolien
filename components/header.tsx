"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Nav pill — fully opaque glass-nav so it never blends into content */}
      <motion.div
        className="glass-nav fixed top-0 left-1/2 h-[4rem] w-full sm:top-5 sm:h-[3.25rem] sm:w-auto sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      />

      {/* Nav links */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 flex items-center h-[4rem] sm:top-[1.3rem] sm:h-[3.25rem]">
        <ul className="flex items-center gap-0.5 px-3">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative flex items-center"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-150",
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
            </motion.li>
          ))}

          <li className="w-px h-4 mx-1.5 bg-[var(--border-strong)]" aria-hidden />

          <motion.li
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 30, delay: 0.05 }}
          >
            <ThemeSwitch />
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
