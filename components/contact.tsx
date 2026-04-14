"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-full scroll-mt-28 mb-20 sm:mb-32"
      style={{ maxWidth: "var(--container-max)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="surface-elevated overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">

            {/* ── Left: invitation ── */}
            <div
              className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden"
              style={{ background: "var(--surface-2)" }}
            >
              {/* Background glow */}
              <div
                aria-hidden
                className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, var(--accent-glow), transparent 70%)",
                  filter: "blur(30px)",
                  opacity: 0.5,
                }}
              />

              <div className="relative">
                {/* Availability badge */}
                <span className="status-pill mb-6 inline-flex" style={{ fontSize: "11px" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  Available for new roles
                </span>

                <h2
                  className="font-bold leading-tight mb-4"
                  style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    letterSpacing: "-0.025em",
                    color: "var(--text-primary)",
                  }}
                >
                  Let's build something together.
                </h2>

                <p className="text-sm leading-relaxed mb-8 max-w-xs" style={{ color: "var(--text-secondary)" }}>
                  Open to full-time roles, contract work, and interesting projects.
                  Based in Riga — comfortable with fully remote teams.
                </p>
              </div>

              {/* Social links */}
              <div className="relative flex flex-col gap-3">
                <a
                  href="mailto:ervin.behxheti.dev@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all group-hover:scale-110"
                    style={{
                      background: "var(--accent-subtle)",
                      borderColor: "var(--border-accent)",
                      color: "var(--accent)",
                    }}
                  >
                    <Mail size={15} />
                  </div>
                  <span className="text-sm font-medium transition-colors group-hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>
                    ervin.behxheti.dev@gmail.com
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ervinbehxheti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all group-hover:scale-110"
                    style={{
                      background: "rgba(10,102,194,0.08)",
                      borderColor: "rgba(10,102,194,0.2)",
                      color: "#0a66c2",
                    }}
                  >
                    <Linkedin size={15} />
                  </div>
                  <span className="text-sm font-medium transition-colors group-hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>
                    linkedin.com/in/ervinbehxheti
                  </span>
                </a>

                <a
                  href="https://github.com/ErvinBehxheti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all group-hover:scale-110"
                    style={{
                      background: "var(--surface-3)",
                      borderColor: "var(--border-strong)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <Github size={15} />
                  </div>
                  <span className="text-sm font-medium transition-colors group-hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>
                    github.com/ErvinBehxheti
                  </span>
                </a>

                <p className="flex items-center gap-1.5 mt-1 text-xs" style={{ color: "var(--text-tertiary)" }}>
                  <MapPin size={11} />
                  Riga, Latvia · CET / EET
                </p>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Drop me a message — I usually respond within a day.
              </p>

              <form
                className="flex flex-col gap-3"
                action={async (formData) => {
                  const { error } = await sendEmail(formData);
                  if (error) { toast.error(error); return; }
                  toast.success("Message sent — I'll be in touch soon!");
                }}
              >
                <input
                  name="senderEmail"
                  type="email"
                  required
                  maxLength={500}
                  placeholder="Your email"
                  className="h-11 px-4 text-sm rounded-ios focus:outline-none focus:ring-2 transition-all"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border-strong)",
                    color: "var(--text-primary)",
                    caretColor: "var(--accent)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-subtle)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-strong)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <textarea
                  name="message"
                  required
                  maxLength={5000}
                  placeholder="What would you like to build?"
                  rows={6}
                  className="p-4 text-sm rounded-ios resize-none focus:outline-none transition-all"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border-strong)",
                    color: "var(--text-primary)",
                    caretColor: "var(--accent)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-subtle)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-strong)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <div className="flex items-center justify-between pt-1">
                  <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                    No spam, ever.
                  </p>
                  <SubmitBtn />
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
