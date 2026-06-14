"use client";

import React from "react";

const rowOne = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "SSR",
  "REST APIs",
];

const rowTwo = [
  "Tailwind CSS",
  "Framer Motion",
  "Recharts",
  "Redux Toolkit",
  "Zustand",
  "Server Actions",
  "Vercel",
  "Linux VPS",
];

function MarqueeRow({
  items,
  reverse = false,
  duration = "44s",
}: {
  items: string[];
  reverse?: boolean;
  duration?: string;
}) {
  const segment = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex items-center shrink-0"
    >
      {items.map((item) => (
        <React.Fragment key={item}>
          <span
            className="text-2xl sm:text-[2rem] font-semibold tracking-tight px-6 sm:px-9 whitespace-nowrap"
            style={{ color: "var(--text-tertiary)" }}
          >
            {item}
          </span>
          <span
            aria-hidden
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: "var(--accent)", opacity: 0.5 }}
          />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className="marquee-track"
        data-reverse={reverse || undefined}
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {segment(false)}
        {segment(true)}
      </div>
    </div>
  );
}

/** Trusted-stack strip – two slow counter-flowing rows between hero and work. */
export default function Marquee() {
  return (
    <section aria-label="Technology stack" className="w-full py-14 sm:py-20 flex flex-col gap-5">
      <MarqueeRow items={rowOne} duration="46s" />
      <MarqueeRow items={rowTwo} reverse duration="56s" />
    </section>
  );
}
