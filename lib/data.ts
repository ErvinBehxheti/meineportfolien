import neuralBlogging from "@/public/neural-blogging.webp";
import priceseer from "@/public/scraping.webp";
import type { ExperienceItem, ProjectData, SkillGroup } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Work",
    hash: "#work",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "Attributy",
    location: "Remote",
    date: "Oct 2022 – Nov 2023",
    summary:
      "Built an analytics dashboard product with Next.js, TypeScript, and Recharts.",
    bullets: [
      "Developed an interactive analytics dashboard with real-time data visualization using Recharts and Next.js.",
      "Implemented SSR across key routes, improving first paint performance by approximately 30%.",
      "Collaborated closely with design on Figma-to-production component delivery and maintained a structured component system.",
      "Optimized rendering patterns and reduced unnecessary re-renders across complex data views.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    location: "Remote",
    date: "Jul 2024 – Aug 2025",
    summary:
      "Delivered a production private school management system end-to-end.",
    bullets: [
      "Built a private school management system with Next.js, TypeScript, and Postgres covering enrollment, scheduling, and payments.",
      "Designed and implemented REST API routes and server-side data flows from scratch.",
      "Managed full deployment lifecycle on Linux VPS — environment setup and production releases.",
      "Owned the entire codebase: frontend architecture, backend routes, database schema, and production delivery.",
    ],
  },
  {
    title: "Web Development Instructor",
    company: "Logiscool Mitrovica",
    location: "Mitrovica, Kosovo",
    date: "Dec 2024 – Aug 2025",
    summary:
      "Taught React, JavaScript, and Node.js fundamentals to junior students.",
    bullets: [
      "Designed and delivered curriculum covering React component patterns, JavaScript fundamentals, and REST API integration.",
      "Mentored students through real coding projects with hands-on code review and architectural guidance.",
      "Introduced Node.js basics and backend-connected workflows as part of the full-stack track.",
    ],
  },
];

export const projectsData: ProjectData[] = [
  {
    title: "Analytics Dashboard",
    summary: "Internal analytics dashboard for marketing attribution tracking.",
    role: "Frontend Developer — Attributy",
    meta: "Attributy · 2022 – 2023",
    focus: "Data visualization layer, SSR optimization, and component architecture.",
    stack: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "SSR"],
    result:
      "~30% improvement in first paint. Real-time chart rendering with smooth filter interactions across the dashboard.",
    isPrivate: true,
    visual: "dashboard",
  },
  {
    title: "School Management System",
    summary:
      "Full-stack management platform for a private school — enrollment, scheduling, and payments.",
    role: "Full-Stack Developer — Freelance",
    meta: "Freelance · 2024 – 2025",
    focus:
      "End-to-end ownership from database schema to production deployment.",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Node.js",
      "REST APIs",
      "Linux VPS",
    ],
    result:
      "Complete enrollment and payment workflow delivered to production. Full CI on Linux VPS.",
    isPrivate: true,
    visual: "school",
  },
  {
    title: "Neural Blogging",
    summary: "AI-powered PWA blog platform with push notifications.",
    role: "Personal Project",
    meta: "Personal project",
    focus: "PWA setup, ChatGPT integration, Supabase backend, notification system.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    result:
      "Shipped as a functioning PWA with offline support and push notification infrastructure.",
    imageUrl: neuralBlogging,
    githubLink: "https://github.com/ErvinBehxheti/NeuralBlogging",
    urlLink: "https://neural-blogging.vercel.app/",
    isPrivate: false,
  },
  {
    title: "PriceSeer",
    summary: "Amazon price tracking platform with automated cron-based alerts.",
    role: "Personal Project",
    meta: "Personal project",
    focus:
      "Server Actions scraping pipeline, MongoDB storage, and scheduled notification jobs.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Server Actions", "Tailwind CSS"],
    result:
      "Built and deployed an end-to-end scraping and price-alert system.",
    imageUrl: priceseer,
    githubLink: "https://github.com/ErvinBehxheti/priceseer",
    urlLink: "https://priceseer.vercel.app/",
    isPrivate: false,
  },
];

export const skillsData: SkillGroup[] = [
  {
    groupTitle: "Frontend Engineering",
    groupDescription: "Core stack for building production interfaces.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "SSR",
      "Server Components",
    ],
  },
  {
    groupTitle: "Full-Stack Delivery",
    groupDescription: "End-to-end application development and deployment.",
    skills: [
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Server Actions",
      "Route Handlers",
      "Linux VPS",
    ],
  },
  {
    groupTitle: "Performance & Architecture",
    groupDescription: "Building fast, maintainable systems.",
    skills: [
      "Code Splitting",
      "Lazy Loading",
      "Bundle Optimization",
      "Lighthouse",
      "Web Vitals",
      "Caching",
    ],
  },
  {
    groupTitle: "Product UI",
    groupDescription: "Interface systems, data visualization, and dashboards.",
    skills: [
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Redux Toolkit",
      "Zustand",
      "Responsive Design",
    ],
  },
];
