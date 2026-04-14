"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Lock, ArrowUpRight } from "lucide-react";
import type { ProjectData } from "@/lib/types";

type ProjectProps = ProjectData & { index: number; featured?: boolean };

// Dot-grid SVG for private project placeholder
const DotGrid = () => (
  <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
);

export default function Project({
  title,
  summary,
  focus,
  stack,
  result,
  imageUrl,
  githubLink,
  urlLink,
  isPrivate,
  index,
  featured = false,
}: ProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 140, damping: 22, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="surface-card flex flex-col overflow-hidden group relative"
      style={{
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
      }}
    >
      {/* Accent top-bar — each card has a slightly different shade */}
      <div
        className="h-[3px] w-full"
        style={{
          background: index % 2 === 0
            ? "linear-gradient(90deg, var(--accent), rgba(15,131,253,0.3))"
            : "linear-gradient(90deg, rgba(45,200,180,0.9), var(--accent))",
        }}
      />

      {/* Image / placeholder area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: featured ? "16/7" : "16/9" }}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center relative"
            style={{ background: "var(--surface-2)", color: "var(--text-tertiary)" }}
          >
            <DotGrid />
            <div className="relative z-10 flex flex-col items-center gap-3">
              {/* Abstract architecture diagram */}
              <div className="flex items-center gap-2 opacity-60">
                <div
                  className="w-10 h-7 rounded-md border flex items-center justify-center text-[9px] font-bold"
                  style={{ borderColor: "var(--border-strong)", background: "var(--accent-dim)" }}
                >
                  UI
                </div>
                <div className="w-5 h-px" style={{ background: "var(--border-strong)" }} />
                <div
                  className="w-10 h-7 rounded-md border flex items-center justify-center text-[9px] font-bold"
                  style={{ borderColor: "var(--accent)", background: "var(--accent-subtle)" }}
                >
                  API
                </div>
                <div className="w-5 h-px" style={{ background: "var(--border-strong)" }} />
                <div
                  className="w-10 h-7 rounded-md border flex items-center justify-center text-[9px] font-bold"
                  style={{ borderColor: "var(--border-strong)", background: "var(--accent-dim)" }}
                >
                  DB
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--text-tertiary)" }}>
                <Lock size={11} />
                Private client work
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1">
        {/* Role eyebrow */}
        <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          {isPrivate ? "Client Work" : "Personal Project"}
        </p>

        {/* Title + arrow */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-base leading-tight" style={{ color: "var(--text-primary)" }}>
            {title}
          </h3>
          {(urlLink || githubLink) && (
            <ArrowUpRight
              size={16}
              className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "var(--accent)" }}
            />
          )}
        </div>

        {/* Summary */}
        <p className="text-sm leading-relaxed -mt-1" style={{ color: "var(--text-secondary)" }}>
          {summary}
        </p>

        {/* Focus — left-border callout */}
        <p
          className="text-xs leading-relaxed pl-3 border-l-2"
          style={{ color: "var(--text-tertiary)", borderColor: "var(--border-accent)" }}
        >
          {focus}
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <span key={tech} className="skill-pill">{tech}</span>
          ))}
        </div>

        {/* Result */}
        <div
          className="mt-auto pt-4 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Result: </span>
            {result}
          </p>
        </div>

        {/* Links */}
        {(urlLink || githubLink) && (
          <div className="flex gap-2">
            {urlLink && (
              <a
                href={urlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1.5 border transition-colors"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--border)",
                  background: "var(--surface-2)",
                }}
              >
                <ExternalLink size={11} /> Live site
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1.5 border transition-colors"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--border)",
                  background: "var(--surface-2)",
                }}
              >
                <Github size={11} /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
