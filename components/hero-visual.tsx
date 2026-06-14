"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TiltCard from "./tilt-card";

const codeLines = [
  { text: "// analytics-dashboard.tsx", type: "comment" },
  { text: 'import { Chart } from "@/components"', type: "import" },
  { text: "", type: "blank" },
  { text: "export default function Dashboard() {", type: "code" },
  { text: "  const data = await fetchMetrics()", type: "await" },
  { text: "", type: "blank" },
  { text: "  return (", type: "code" },
  { text: "    <Chart ssr={true} data={data} />", type: "jsx" },
  { text: "  )", type: "code" },
  { text: "}", type: "code" },
];

const metrics = [
  { label: "First Paint", value: "–30%" },
  { label: "Bundle", value: "42 kB" },
  { label: "Lighthouse", value: "98" },
];

const sparkBars = [34, 58, 42, 72, 55, 88, 64, 96];

const typeColor: Record<string, string> = {
  comment: "var(--text-tertiary)",
  import: "#7dd3fc",
  code: "var(--text-primary)",
  await: "#86efac",
  jsx: "#f9a8d4",
  blank: "transparent",
};

function CodeLine({ text, type, delay }: { text: string; type: string; delay: number }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!shown) return <div className="h-[22px]" />;
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.18 }}
      className="h-[22px] flex items-center"
    >
      <span
        style={{
          color: typeColor[type],
          fontFamily: "ui-monospace, monospace",
          fontSize: "12.5px",
        }}
      >
        {text}
      </span>
    </motion.div>
  );
}

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.5 }}
      className="relative w-full max-w-lg"
    >
      {/* Ambient glow behind card */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[40px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, var(--accent-glow), transparent 70%)",
          opacity: 0.55,
        }}
      />

      <TiltCard maxTilt={9} className="rounded-3xl">
        {/* Slow float keeps the panel alive between interactions */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="preserve-3d"
        >
          <div className="glass-card rounded-3xl overflow-hidden relative">
            {/* Window chrome */}
            <div
              className="flex items-center gap-1.5 px-5 py-3.5 border-b border-[var(--border)]"
              style={{ background: "var(--surface-2)" }}
            >
              <span className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
              <span className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
              <span
                className="ml-3 text-xs"
                style={{ color: "var(--text-tertiary)", fontFamily: "ui-monospace, monospace" }}
              >
                dashboard.tsx
              </span>
            </div>

            {/* Code body */}
            <div className="px-6 py-5 flex flex-col gap-0.5">
              {codeLines.map((line, i) => (
                <CodeLine key={i} text={line.text} type={line.type} delay={700 + i * 170} />
              ))}
            </div>

            {/* Live chart strip */}
            <div
              className="flex items-end gap-1.5 px-6 pb-4 h-16"
              aria-hidden
            >
              {sparkBars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 2.4 + i * 0.09, type: "spring", stiffness: 160, damping: 16 }}
                  className="flex-1 rounded-t-md origin-bottom"
                  style={{
                    height: `${h}%`,
                    background: `linear-gradient(180deg, var(--accent-2), var(--accent))`,
                    opacity: 0.35 + (h / 100) * 0.6,
                  }}
                />
              ))}
            </div>

            {/* Bottom metrics strip */}
            <div
              className="flex items-center gap-5 px-6 py-3.5 border-t border-[var(--border)]"
              style={{ background: "var(--accent-dim)" }}
            >
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col items-center">
                  <span
                    className="text-sm font-bold tabular-nums"
                    style={{ color: "var(--accent)" }}
                  >
                    {m.value}
                  </span>
                  <span className="text-[10px] leading-tight" style={{ color: "var(--text-tertiary)" }}>
                    {m.label}
                  </span>
                </div>
              ))}
              <div className="ml-auto">
                <span className="status-pill" style={{ fontSize: "10px", padding: "4px 10px" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  deployed
                </span>
              </div>
            </div>
          </div>

          {/* Floating badge – hovers above the panel in 3D space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 200, damping: 16 }}
            className="absolute -top-5 -right-5 glass-card rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
            style={{ transform: "translateZ(50px)" }}
          >
            <span className="text-xl">⚡</span>
            <div>
              <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                Next.js SSR
              </p>
              <p className="text-[10px]" style={{ color: "var(--text-tertiary)" }}>
                Production ready
              </p>
            </div>
          </motion.div>

          {/* Floating stack badge – deeper layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.3, type: "spring", stiffness: 200, damping: 16 }}
            className="absolute -bottom-5 -left-3 glass-card rounded-2xl px-4 py-3"
            style={{ transform: "translateZ(35px)" }}
          >
            <p className="text-[10px] font-semibold mb-1.5" style={{ color: "var(--text-tertiary)" }}>
              STACK
            </p>
            <div className="flex gap-1.5">
              {["TS", "RQ", "PG", "VPS"].map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-bold px-2 py-1 rounded-md"
                  style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </TiltCard>
    </motion.div>
  );
}
