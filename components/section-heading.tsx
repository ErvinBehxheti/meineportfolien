import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-8">
      {children}
    </h2>
  );
}
