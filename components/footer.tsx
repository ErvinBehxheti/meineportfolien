import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full max-w-5xl mx-auto px-6 py-10 border-t border-[var(--border)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-tertiary)]">
          © {new Date().getFullYear()} Ervin Behxheti
        </p>
        <p className="text-sm text-[var(--text-tertiary)]">
          Designed and built by Ervin
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com/ErvinBehxheti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ervinbehxheti/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
