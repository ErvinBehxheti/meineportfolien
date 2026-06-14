"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, TrendingUp, Users, CreditCard, CalendarDays } from "lucide-react";

/**
 * Reconstructed interface blocks for private client work – abstract,
 * skeleton-style UI that shows the shape of the product without faking
 * screenshots or data.
 */

const barHeights = [38, 62, 45, 78, 56, 92, 70, 84, 60, 96];

function PrivateBadge() {
  return (
    <span
      className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md"
      style={{
        background: "var(--surface-nav)",
        border: "1px solid var(--border-strong)",
        color: "var(--text-secondary)",
      }}
    >
      <Lock size={9} />
      Private client work – reconstructed UI
    </span>
  );
}

export function DashboardMock() {
  return (
    <div
      className="relative w-full h-full p-4 sm:p-6 flex flex-col gap-3 overflow-hidden"
      style={{ background: "var(--surface-2)" }}
    >
      <PrivateBadge />

      {/* Toolbar */}
      <div className="flex items-center gap-2">
        <div
          className="h-7 px-3 rounded-lg flex items-center text-[10px] font-semibold"
          style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
        >
          <TrendingUp size={11} className="mr-1.5" />
          Attribution
        </div>
        {["7d", "30d", "90d"].map((label, i) => (
          <div
            key={label}
            className="h-7 px-2.5 rounded-lg flex items-center text-[10px] font-medium"
            style={{
              background: i === 1 ? "var(--surface-1)" : "transparent",
              border: `1px solid ${i === 1 ? "var(--border-strong)" : "var(--border)"}`,
              color: i === 1 ? "var(--text-primary)" : "var(--text-tertiary)",
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* KPI tiles */}
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
            className="rounded-xl p-2.5 sm:p-3"
            style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}
          >
            <div className="h-1.5 w-10 rounded-full mb-2" style={{ background: "var(--surface-3)" }} />
            <div
              className="h-2.5 w-14 rounded-full"
              style={{ background: i === 0 ? "var(--accent)" : "var(--surface-3)", opacity: i === 0 ? 0.7 : 1 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Chart card */}
      <div
        className="flex-1 rounded-xl p-3 sm:p-4 flex items-end gap-1.5 min-h-[90px]"
        style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}
      >
        {barHeights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.06, type: "spring", stiffness: 150, damping: 17 }}
            className="flex-1 rounded-t-[4px] origin-bottom"
            style={{
              height: `${h}%`,
              background: "linear-gradient(180deg, var(--accent-2), var(--accent))",
              opacity: 0.3 + (h / 100) * 0.65,
            }}
          />
        ))}
      </div>
    </div>
  );
}

const schoolRows = [
  { width: "62%", status: "Paid", color: "#22c55e" },
  { width: "48%", status: "Pending", color: "#f59e0b" },
  { width: "70%", status: "Paid", color: "#22c55e" },
  { width: "55%", status: "Paid", color: "#22c55e" },
];

export function SchoolMock() {
  return (
    <div
      className="relative w-full h-full p-4 sm:p-6 flex gap-3 overflow-hidden"
      style={{ background: "var(--surface-2)" }}
    >
      <PrivateBadge />

      {/* Sidebar */}
      <div
        className="hidden sm:flex w-12 rounded-xl flex-col items-center gap-3 py-3 shrink-0"
        style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}
      >
        {[Users, CalendarDays, CreditCard].map((Icon, i) => (
          <div
            key={i}
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{
              background: i === 2 ? "var(--accent-subtle)" : "transparent",
              color: i === 2 ? "var(--accent)" : "var(--text-tertiary)",
            }}
          >
            <Icon size={13} />
          </div>
        ))}
      </div>

      {/* Payments table */}
      <div
        className="flex-1 rounded-xl p-3 sm:p-4 flex flex-col gap-2 min-w-0"
        style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}
      >
        <div className="flex items-center justify-between mb-1">
          <div
            className="text-[10px] font-semibold flex items-center gap-1.5"
            style={{ color: "var(--text-secondary)" }}
          >
            <CreditCard size={11} style={{ color: "var(--accent)" }} />
            Payments
          </div>
          <div className="h-5 w-14 rounded-md" style={{ background: "var(--accent-subtle)" }} />
        </div>

        {schoolRows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.45 }}
            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2"
            style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
          >
            <div
              className="w-6 h-6 rounded-full shrink-0"
              style={{
                background: "linear-gradient(145deg, var(--surface-3), var(--border-strong))",
              }}
            />
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <div className="h-1.5 rounded-full" style={{ width: row.width, background: "var(--surface-3)" }} />
              <div className="h-1.5 w-1/4 rounded-full" style={{ background: "var(--surface-3)", opacity: 0.6 }} />
            </div>
            <span
              className="text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0"
              style={{ background: `${row.color}1a`, color: row.color }}
            >
              {row.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
