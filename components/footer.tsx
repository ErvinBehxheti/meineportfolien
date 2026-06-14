"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Magnetic from "./magnetic";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const wordmarkY = useTransform(scrollYProgress, [0, 1], [90, 0]);

  return (
    <footer
      ref={ref}
      className="w-full relative overflow-hidden border-t pb-28 sm:pb-10"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Giant ghost wordmark rising from the fold */}
      <motion.p
        aria-hidden
        style={{ y: wordmarkY }}
        className="text-center font-bold leading-none select-none pointer-events-none whitespace-nowrap pt-12"
      >
        <span
          style={{
            fontSize: "clamp(3.5rem, 12.5vw, 11rem)",
            letterSpacing: "-0.04em",
            background:
              "linear-gradient(180deg, var(--text-tertiary) 0%, transparent 90%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            opacity: 0.35,
          }}
        >
          Ervin Behxheti
        </span>
      </motion.p>

      <div
        className="mx-auto px-6 -mt-4 sm:-mt-8 relative"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
          <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
            © {new Date().getFullYear()} Ervin Behxheti — designed & built in Riga.
          </p>

          <div className="flex items-center gap-2.5">
            {[
              { href: "https://github.com/ErvinBehxheti", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/ervinbehxheti/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:ervin.behxheti.dev@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <Magnetic key={label} strength={0.35}>
                <a
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:text-[var(--text-primary)] hover:border-[var(--border-accent)]"
                  style={{
                    color: "var(--text-tertiary)",
                    borderColor: "var(--border)",
                    background: "var(--surface-1)",
                  }}
                >
                  <Icon size={16} />
                </a>
              </Magnetic>
            ))}

            <Magnetic strength={0.35}>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform active:scale-95"
                style={{
                  background: "linear-gradient(145deg, var(--accent-2), var(--accent))",
                  boxShadow: "0 4px 14px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.35)",
                }}
              >
                <ArrowUp size={16} />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
}
