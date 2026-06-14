"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import ChapterHeading from "./chapter-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Work", 0.05);
  const deckRef = useRef<HTMLDivElement>(null);

  // Drives the whole stacking deck
  const { scrollYProgress } = useScroll({
    target: deckRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} id="work" className="w-full relative scroll-mt-20 mb-16 sm:mb-24">
      <div className="mx-auto px-6" style={{ maxWidth: "var(--container-max)" }}>
        <ChapterHeading
          index="01"
          eyebrow="Selected Work"
          title="Built to ship."
          description="Production systems from product teams, client work, and my own lab — each one owned from architecture to delivery. Keep scrolling, the deck stacks."
        />
      </div>

      {/* Story deck – each project sticks while the next slides over it */}
      <div ref={deckRef}>
        {projectsData.map((project, i) => (
          <Project
            key={project.title}
            {...project}
            index={i}
            total={projectsData.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
