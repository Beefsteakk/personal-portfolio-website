"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Download } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:you@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    icon: Phone,
    label: "Phone",
    href: "tel:+10000000000",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center"
    >
      {/* Subtle radial glow behind text */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 40%, color-mix(in oklch, var(--purple-accent) 45%, transparent), transparent)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Avatar */}
        <motion.div {...fadeUp(0)} className="relative">
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-60"
            style={{ background: "var(--purple-glow)" }}
            aria-hidden="true"
          />
          {/* Gradient ring */}
          <div
            className="relative rounded-full p-[2.5px]"
            style={{
              background: "linear-gradient(135deg, var(--purple-accent), var(--purple-accent-soft))",
            }}
          >
            {/* Photo area — replace this div with <Image> when you have a real photo */}
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-card text-3xl font-bold text-primary sm:h-44 sm:w-44">
              AF
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl"
        >
          Ayers Fong
        </motion.h1>

        {/* One-liner title */}
        <motion.p
          {...fadeUp(0.3)}
          className="max-w-xl text-xl font-medium text-primary sm:text-2xl"
        >
          Product-Minded Developer
        </motion.p>

        {/* Short descriptor */}
        <motion.p
          {...fadeUp(0.4)}
          className="max-w-lg text-base text-muted-foreground sm:text-lg"
        >
          I design and build software that actually matters.
        </motion.p>

        {/* Contact icon links */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex items-center gap-4 mt-2"
        >
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-[0_0_12px_var(--purple-glow)] transition-theme"
            >
              <Icon className="h-4.5 w-4.5 transition-transform duration-200 group-hover:scale-110" size={18} />
            </a>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div {...fadeUp(0.6)}>
          <a
            href="/resume.pdf"
            download
            className="group mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-[0_4px_20px_var(--purple-glow)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download size={15} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-xs text-muted-foreground/60 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="h-5 w-px bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
