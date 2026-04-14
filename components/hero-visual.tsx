"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeLines = [
  { text: "// analytics-dashboard.tsx", type: "comment" },
  { text: 'import { Chart } from "@/components"', type: "import" },
  { text: "", type: "blank" },
  { text: "export default function Dashboard() {", type: "code" },
  { text: "  const data = await fetchMetrics()", type: "await" },
  { text: "", type: "blank" },
  { text: "  return (", type: "code" },
  { text: '    <Chart ssr={true} data={data} />', type: "jsx" },
  { text: "  )", type: "code" },
  { text: "}", type: "code" },
];

const metrics = [
  { label: "First Paint", value: "–30%", positive: true },
  { label: "Bundle", value: "42 kB", positive: true },
  { label: "Lighthouse", value: "98", positive: true },
];

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
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), delay);
    const c = setInterval(() => setCursor((v) => !v), 530);
    return () => { clearTimeout(t); clearInterval(c); };
  }, [delay]);

  if (!shown) return <div className="h-5" />;
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.18 }}
      className="h-5 flex items-center"
    >
      <span style={{ color: typeColor[type], fontFamily: "ui-monospace, monospace", fontSize: "11.5px" }}>
        {text}
      </span>
    </motion.div>
  );
}

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 22, delay: 0.3 }}
      className="relative w-full max-w-sm lg:max-w-md"
    >
      {/* Ambient glow behind card */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, var(--accent-glow), transparent 70%)",
          opacity: 0.5,
        }}
      />

      {/* Code window card */}
      <motion.div
        className="glass-card rounded-2xl overflow-hidden relative"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Window chrome */}
        <div
          className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--border)]"
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
        <div className="px-5 py-4 flex flex-col gap-0.5" style={{ background: "rgba(0,0,0,0.01)" }}>
          {codeLines.map((line, i) => (
            <CodeLine key={i} text={line.text} type={line.type} delay={400 + i * 180} />
          ))}
        </div>

        {/* Bottom metrics strip */}
        <div
          className="flex items-center gap-4 px-5 py-3 border-t border-[var(--border)]"
          style={{ background: "var(--accent-dim)" }}
        >
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center">
              <span
                className="text-sm font-bold tabular-nums"
                style={{ color: m.positive ? "var(--accent)" : "var(--text-secondary)" }}
              >
                {m.value}
              </span>
              <span
                className="text-[10px] leading-tight"
                style={{ color: "var(--text-tertiary)" }}
              >
                {m.label}
              </span>
            </div>
          ))}
          <div className="ml-auto">
            <span className="status-pill" style={{ fontSize: "10px", padding: "3px 9px" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              deployed
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating accent badge — top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 200, damping: 16 }}
        className="absolute -top-4 -right-4 glass-card rounded-xl px-3 py-2 flex items-center gap-2"
      >
        <span className="text-lg">⚡</span>
        <div>
          <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
            Next.js SSR
          </p>
          <p className="text-[10px]" style={{ color: "var(--text-tertiary)" }}>
            Production ready
          </p>
        </div>
      </motion.div>

      {/* Floating stack badge — bottom left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.1, type: "spring", stiffness: 200, damping: 16 }}
        className="absolute -bottom-4 -left-2 glass-card rounded-xl px-3 py-2"
      >
        <p className="text-[10px] font-semibold mb-1" style={{ color: "var(--text-tertiary)" }}>
          STACK
        </p>
        <div className="flex gap-1">
          {["TS", "RQ", "PG", "VPS"].map((t) => (
            <span
              key={t}
              className="text-[10px] font-bold px-1.5 py-0.5 rounded"
              style={{
                background: "var(--accent-subtle)",
                color: "var(--accent)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
