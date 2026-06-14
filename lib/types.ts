import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type SkillGroup = {
  groupTitle: string;
  groupDescription: string;
  skills: readonly string[];
};

export type ProjectData = {
  title: string;
  summary: string;
  role: string;
  meta?: string;
  focus: string;
  stack: readonly string[];
  result: string;
  imageUrl?: any;
  githubLink?: string;
  urlLink?: string;
  isPrivate?: boolean;
  visual?: "dashboard" | "school";
};

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  date: string;
  summary: string;
  bullets: readonly string[];
};
