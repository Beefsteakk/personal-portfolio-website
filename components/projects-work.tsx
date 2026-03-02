"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Briefcase, CalendarDays } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const projects = [
  {
    name: "Project Alpha",
    description:
      "A full-stack SaaS platform for managing team workflows with real-time collaboration, role-based access control, and analytics dashboards.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-alpha",
    live: "https://project-alpha.vercel.app",
  },
  {
    name: "DevPulse CLI",
    description:
      "An open-source command-line tool for monitoring code quality metrics, generating reports, and integrating with CI pipelines.",
    stack: ["Node.js", "TypeScript", "Jest", "Commander.js"],
    github: "https://github.com/yourusername/devpulse-cli",
    live: null,
  },
  {
    name: "AI Writing Assistant",
    description:
      "A browser extension that integrates GPT-4 to help users draft, edit, and improve text directly inside any web form or editor.",
    stack: ["React", "OpenAI API", "Chrome Extension API", "Tailwind CSS"],
    github: "https://github.com/yourusername/ai-writer",
    live: "https://chromewebstore.google.com",
  },
  {
    name: "PortfolioKit",
    description:
      "A reusable Next.js + Tailwind template for developers to showcase their work with minimal setup and maximum customization.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
    github: "https://github.com/yourusername/portfoliokit",
    live: "https://portfoliokit.dev",
  },
];

const experience = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    dates: "Jan 2023 – Present",
    bullets: [
      "Led migration of monolithic Rails app to Next.js microservices, reducing page load time by 62%.",
      "Designed and implemented a real-time notification system serving 500K+ daily active users.",
      "Mentored a team of 4 junior engineers, running weekly code reviews and architecture discussions.",
    ],
  },
  {
    company: "Startup XYZ",
    role: "Full-Stack Developer",
    dates: "Jun 2021 – Dec 2022",
    bullets: [
      "Built customer-facing dashboards in React and TypeScript, increasing user retention by 28%.",
      "Architected REST and GraphQL APIs with Node.js, deployed on AWS ECS with zero-downtime deploys.",
      "Collaborated closely with design team to ship a design system adopted across 3 product lines.",
    ],
  },
  {
    company: "Open Source / Freelance",
    role: "Independent Developer",
    dates: "2019 – 2021",
    bullets: [
      "Delivered 10+ client projects spanning e-commerce, SaaS, and portfolio sites.",
      "Contributed to popular OSS libraries with 500+ GitHub stars.",
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
