"use client";

import React from "react";
import Image from "next/image";
import {
  motion,
  useTransform,
  useMotionTemplate,
  type MotionValue,
} from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";
import type { ProjectData } from "@/lib/types";
import { DashboardMock, SchoolMock } from "./project-visual";
import TiltCard from "./tilt-card";

type ProjectProps = ProjectData & {
  index: number;
  total: number;
  /** Scroll progress of the whole deck (0–1) */
  progress: MotionValue<number>;
};

/**
 * One sheet of the stacking story deck. Sticks to the viewport while the
 * next sheet slides over it, receding in scale + brightness like the iOS
 * app switcher.
 */
export default function Project({
  title,
  summary,
  meta,
  focus,
  stack,
  result,
  imageUrl,
  githubLink,
  urlLink,
  isPrivate,
  visual,
  index,
  total,
  progress,
}: ProjectProps) {
  const targetScale = 1 - (total - 1 - index) * 0.05;
  const targetBrightness = 1 - (total - 1 - index) * 0.09;

  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const brightness = useTransform(progress, [index / total, 1], [1, targetBrightness]);
  const filter = useMotionTemplate`brightness(${brightness})`;

  return (
    <div
      className="sticky top-0 h-[100svh] flex items-center justify-center px-4 sm:px-6"
      style={{ paddingTop: `calc(4.5rem + ${index * 1.4}rem)`, paddingBottom: "3rem" }}
    >
      <motion.div
        style={{ scale, filter }}
        className="w-full origin-top"
      >
        <TiltCard maxTilt={2} className="rounded-[28px]">
          <article
            className="surface-elevated overflow-hidden mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]"
            style={{ maxWidth: "var(--container-max)" }}
          >
            {/* Content */}
            <div className="relative p-6 sm:p-10 lg:p-12 flex flex-col min-w-0">
              {/* Ghost index */}
              <span
                aria-hidden
                className="absolute bottom-2 right-4 text-[6rem] font-bold leading-none pointer-events-none select-none lg:right-8"
                style={{ color: "var(--surface-2)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative flex items-center gap-3 mb-5 sm:mb-7 flex-wrap">
                <span
                  className="text-xs font-bold tabular-nums px-2.5 py-1 rounded-full"
                  style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
                >
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                {meta && (
                  <span className="text-xs font-medium" style={{ color: "var(--text-tertiary)" }}>
                    {meta}
                  </span>
                )}
                {isPrivate && (
                  <span
                    className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    <Lock size={9} />
                    Private
                  </span>
                )}
              </div>

              <h3
                className="relative font-bold leading-[1.08] tracking-tight mb-3 sm:mb-4"
                style={{
                  fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)",
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                }}
              >
                {title}
              </h3>

              <p
                className="relative text-base sm:text-lg leading-relaxed mb-4 sm:mb-5 max-w-md"
                style={{ color: "var(--text-secondary)" }}
              >
                {summary}
              </p>

              <p
                className="relative hidden sm:block text-sm leading-relaxed pl-3.5 border-l-2 mb-6 max-w-md"
                style={{ color: "var(--text-tertiary)", borderColor: "var(--border-accent)" }}
              >
                {focus}
              </p>

              <div className="relative flex flex-wrap gap-2 mb-6">
                {stack.map((tech) => (
                  <span key={tech} className="skill-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className="relative mt-auto pt-5 border-t flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                  <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
                    Result:{" "}
                  </span>
                  {result}
                </p>

                {(urlLink || githubLink) && (
                  <div className="flex gap-2 shrink-0">
                    {urlLink && (
                      <a
                        href={urlLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium rounded-full px-4 py-2 border transition-colors hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]"
                        style={{
                          color: "var(--text-secondary)",
                          borderColor: "var(--border-strong)",
                          background: "var(--surface-2)",
                        }}
                      >
                        <ExternalLink size={13} /> Live
                      </a>
                    )}
                    {githubLink && (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium rounded-full px-4 py-2 border transition-colors hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]"
                        style={{
                          color: "var(--text-secondary)",
                          borderColor: "var(--border-strong)",
                          background: "var(--surface-2)",
                        }}
                      >
                        <Github size={13} /> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Visual */}
            <div
              className="relative h-44 sm:h-64 lg:h-auto lg:min-h-[420px] order-first lg:order-none border-b lg:border-b-0 lg:border-l"
              style={{ borderColor: "var(--border)" }}
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              ) : visual === "dashboard" ? (
                <DashboardMock />
              ) : (
                <SchoolMock />
              )}
            </div>
          </article>
        </TiltCard>
      </motion.div>
    </div>
  );
}
