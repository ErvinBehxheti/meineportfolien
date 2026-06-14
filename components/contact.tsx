"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import ChapterHeading from "./chapter-heading";
import Magnetic from "./magnetic";

const socials = [
  {
    href: "mailto:ervin.behxheti.dev@gmail.com",
    label: "ervin.behxheti.dev@gmail.com",
    icon: Mail,
    color: "var(--accent)",
    bg: "var(--accent-subtle)",
    border: "var(--border-accent)",
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/ervinbehxheti/",
    label: "linkedin.com/in/ervinbehxheti",
    icon: Linkedin,
    color: "#0a66c2",
    bg: "rgba(10,102,194,0.08)",
    border: "rgba(10,102,194,0.2)",
    external: true,
  },
  {
    href: "https://github.com/ErvinBehxheti",
    label: "github.com/ErvinBehxheti",
    icon: Github,
    color: "var(--text-secondary)",
    bg: "var(--surface-3)",
    border: "var(--border-strong)",
    external: true,
  },
];

const inputStyle: React.CSSProperties = {
  background: "var(--surface-2)",
  border: "1px solid var(--border-strong)",
  color: "var(--text-primary)",
  caretColor: "var(--accent)",
};

function focusRing(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = "var(--accent)";
  e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-subtle)";
}

function blurRing(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = "var(--border-strong)";
  e.currentTarget.style.boxShadow = "none";
}

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full scroll-mt-28 mb-24 sm:mb-32 mx-auto px-6"
      style={{ maxWidth: "var(--container-max)" }}
    >
      <ChapterHeading
        index="05"
        eyebrow="Contact"
        title="Let's build something together."
        description="Open to full-time roles, contract work, and interesting projects."
      />

      <motion.div
        initial={{ opacity: 0, y: 70, rotateX: 7 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 90, damping: 20 }}
        className="perspective-1200"
      >
        <div className="surface-elevated overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
            {/* Left: invitation */}
            <div
              className="p-8 sm:p-10 lg:p-14 flex flex-col justify-between gap-10 relative overflow-hidden"
              style={{ background: "var(--surface-2)" }}
            >
              <div
                aria-hidden
                className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, var(--accent-glow), transparent 70%)",
                  filter: "blur(30px)",
                  opacity: 0.5,
                }}
              />

              <div className="relative">
                <span className="status-pill mb-7 inline-flex">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  Available for new roles
                </span>

                <p
                  className="text-lg sm:text-xl leading-relaxed max-w-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Based in Riga, comfortable with fully remote teams.{" "}
                  <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                    I usually respond within a day.
                  </span>
                </p>
              </div>

              {/* Social links */}
              <div className="relative flex flex-col gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      {...(social.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center gap-3.5 group w-fit"
                    >
                      <Magnetic strength={0.35}>
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center border transition-transform group-hover:scale-110"
                          style={{
                            background: social.bg,
                            borderColor: social.border,
                            color: social.color,
                          }}
                        >
                          <Icon size={17} />
                        </div>
                      </Magnetic>
                      <span
                        className="text-sm sm:text-base font-medium transition-colors group-hover:text-[var(--accent)]"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {social.label}
                      </span>
                    </a>
                  );
                })}

                <p className="flex items-center gap-1.5 mt-1 text-sm" style={{ color: "var(--text-tertiary)" }}>
                  <MapPin size={12} />
                  Riga, Latvia · CET / EET
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="p-8 sm:p-10 lg:p-14">
              <form
                className="flex flex-col gap-4"
                action={async (formData) => {
                  const { error } = await sendEmail(formData);
                  if (error) {
                    toast.error(error);
                    return;
                  }
                  toast.success("Message sent — I'll be in touch soon!");
                }}
              >
                <input
                  name="senderEmail"
                  type="email"
                  required
                  maxLength={500}
                  placeholder="Your email"
                  className="h-14 px-5 text-base rounded-2xl focus:outline-none transition-all"
                  style={inputStyle}
                  onFocus={focusRing}
                  onBlur={blurRing}
                />
                <textarea
                  name="message"
                  required
                  maxLength={5000}
                  placeholder="What would you like to build?"
                  rows={7}
                  className="p-5 text-base rounded-2xl resize-none focus:outline-none transition-all"
                  style={inputStyle}
                  onFocus={focusRing}
                  onBlur={blurRing}
                />
                <div className="flex items-center justify-between pt-1">
                  <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                    No spam, ever.
                  </p>
                  <Magnetic>
                    <SubmitBtn />
                  </Magnetic>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
