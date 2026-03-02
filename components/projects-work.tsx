"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Briefcase, CalendarDays } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const projects = [
  {
    name: "Sales & NLP Dashboard",
    description:
      "Led an 8-month Agile project for Panasonic as Product Owner, delivering a suite of dashboards — 1 Sales dashboard, 2 NLP dashboards, and a combined view — that surface actionable insights from NLP-generated textual data.",
    stack: ["Python", "Streamlit", "Agile / Scrum"],
    github: "https://github.com/Beefsteakk/PSD-dashboard",
    live: null,
  },
  {
    name: "Auralis — Mental Health App",
    description:
      "Designed and built a mental wellness mobile app featuring AI-powered recommendations via the Google Gemini API, mood analytics, YouTube-based meditation guidance, peer chatrooms, and secure video calls with licensed therapists.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase Firestore", "Google Gemini API"],
    github: "https://github.com/Beefsteakk/Auralis",
    live: null,
  },
];

const experience = [
  {
    company: "Accenture · Internship",
    role: "Technical Business Analyst",
    dates: "Sep 2025 – Present · 6 mos",
    bullets: [
      "Developed test scripts covering 27 user stories, translating acceptance criteria into clear, testable scenarios for sprint validation.",
      "Collaborated with designers and developers across 3 sprints to refine 6 wireframes, test features, and communicate fixes.",
      "Presented product demos to stakeholders at sprint reviews, addressing queries and ensuring alignment on project progress.",
      "Facilitated end-to-end UAT for an MVP — creating test scripts, coordinating onsite sessions with clients, and working with developers on defect resolution to achieve sign-off.",
    ],
  },
  {
    company: "Singapore Armed Forces (SAF)",
    role: "Officer",
    dates: "Jul 2021 – Jul 2023 · 2 yrs",
    bullets: [
      "Led a specialized team of 12 over 10 high-intensity reconnaissance operations.",
      "Reduced dropout rate of outfield training by 20% as Safety Officer by enforcing strict safety protocols.",
      "Contributed to achieving the Best Combat Unit award for ATEC evaluation in 2023 by optimizing team performance.",
    ],
  },
];

export function ProjectsWork() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6">
      <div className="mx-auto max-w-5xl">

        {/* ── Projects ── */}
        <SectionReveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Portfolio
          </h2>
          <p className="text-3xl font-bold text-foreground sm:text-4xl mb-10">
            Projects
          </p>
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 mb-20">
          {projects.map((p, i) => (
            <SectionReveal key={p.name} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group flex flex-col h-full rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_4px_24px_var(--purple-glow)] transition-theme"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-foreground text-lg leading-tight">{p.name}</h3>
                  <div className="flex items-center gap-2 shrink-0 mt-0.5">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-muted-foreground hover:text-primary transition-colors duration-150"
                    >
                      <Github size={16} />
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live site"
                        className="text-muted-foreground hover:text-primary transition-colors duration-150"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-accent text-accent-foreground border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Thin divider between sub-sections */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-20" />

        {/* ── Experience ── */}
        <SectionReveal>
          <p className="text-3xl font-bold text-foreground sm:text-4xl mb-10">
            Experience
          </p>
        </SectionReveal>

        <div className="relative flex flex-col gap-6">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border hidden sm:block" />

          {experience.map((job, i) => (
            <SectionReveal key={job.company} delay={i * 0.09}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group sm:pl-8 relative"
              >
                {/* Timeline dot */}
                <span className="absolute left-0 top-3 hidden sm:flex h-3.5 w-3.5 rounded-full border-2 border-primary bg-background transition-theme" />

                <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-200 group-hover:border-primary/50 group-hover:shadow-[0_4px_24px_var(--purple-glow)] transition-theme">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <div className="flex items-center gap-2">
                      <Briefcase size={14} className="text-primary shrink-0" />
                      <span className="font-semibold text-foreground">{job.role}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarDays size={12} />
                      {job.dates}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-primary mb-3">{job.company}</p>
                  <ul className="space-y-1.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
