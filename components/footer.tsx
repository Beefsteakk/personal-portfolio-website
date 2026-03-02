"use client";

import { Mail, Linkedin, Github, Phone } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", href: "mailto:ayersfjz@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ayersfong/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Beefsteakk" },
  { icon: Phone, label: "Phone", href: "tel:+6590488515" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-12 px-6 transition-theme">
      {/* Gradient divider matching section separators */}
      <div className="mx-auto max-w-5xl mb-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Left: copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {year} Ayers Fong
          </p>
          <p className="text-xs text-muted-foreground/60 mt-0.5">
            Designed &amp; built by me.
          </p>
        </div>

        {/* Center: contact icons */}
        <div className="flex items-center gap-3">
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_var(--purple-glow)] transition-theme"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        {/* Right: back to top */}
        <a
          href="#hero"
          className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
