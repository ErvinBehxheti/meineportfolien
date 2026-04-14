"use client";

import { useTheme } from "@/context/theme-context";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-8 h-8 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)] transition-colors"
    >
      {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
