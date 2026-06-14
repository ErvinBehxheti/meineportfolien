"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
  type MotionValue,
} from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { MapPin, GraduationCap, Users } from "lucide-react";

const manifesto =
  "I build for the person on the other side of the screen — interfaces that stay fast under real data, dashboards that tell the truth, and systems I can own end to end, from Postgres schema to the last hover state.";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.32em]">
      {children}
    </motion.span>
  );
}

function Counter({
  to,
  prefix = "",
  suffix = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, prefix, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}0{suffix}
    </span>
  );
}

const stats = [
  { to: 3, suffix: "+", label: "years shipping production JavaScript" },
  { to: 30, prefix: "↓", suffix: "%", label: "first paint after SSR work at Attributy" },
  { to: 4, suffix: "", label: "production systems built end to end" },
];

const facts = [
  {
    icon: MapPin,
    title: "Riga, Latvia",
    body: "Currently here on an Erasmus+ exchange — internationally minded and at home in remote teams.",
  },
  {
    icon: GraduationCap,
    title: "B.Sc. Computer Science & Engineering",
    body: "Solid fundamentals under the product work — algorithms, systems, and software architecture.",
  },
  {
    icon: Users,
    title: "Instructor & mentor",
    body: "Teaching React, JavaScript, and Node.js at Logiscool — code reviews, fundamentals, and architecture.",
  },
];

export default function About() {
  const { ref } = useSectionInView("About", 0.15);
  const pinRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  const words = manifesto.split(" ");

  return (
    <section id="about" ref={ref} className="w-full relative scroll-mt-20 mb-32 sm:mb-44">
      {/* Pinned manifesto */}
      <div ref={pinRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-[100svh] flex items-center">
          <div className="mx-auto px-6 w-full" style={{ maxWidth: "var(--container-max)" }}>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-8"
            >
              04 — About
            </motion.p>

            <p className="text-statement max-w-4xl" style={{ color: "var(--text-primary)" }}>
              {words.map((word, i) => {
                const start = (i / words.length) * 0.82;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, start + 0.12]}>
                    {word}
                  </Word>
                );
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Numbers that are actually true */}
      <div className="mx-auto px-6" style={{ maxWidth: "var(--container-max)" }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.1 }}
              className="surface-card p-7 sm:p-8"
            >
              <p
                className="font-bold mb-2 tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--accent)", lineHeight: 1 }}
              >
                <Counter to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="text-sm sm:text-base leading-snug" style={{ color: "var(--text-secondary)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {facts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.15 + i * 0.1 }}
                className="glass-card rounded-[20px] p-7"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
                >
                  <Icon size={19} />
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                  {fact.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {fact.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
