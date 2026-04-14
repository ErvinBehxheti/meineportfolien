"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);

  const [featured, ...rest] = projectsData;

  return (
    <section
      ref={ref}
      id="projects"
      className="w-full max-w-5xl mx-auto px-6 mb-28 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>Selected Work</SectionHeading>

      {/* Featured project — full width */}
      <div className="mb-5">
        <Project {...featured} index={0} featured />
      </div>

      {/* Remaining projects — 2-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((project, i) => (
          <Project key={i} {...project} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
