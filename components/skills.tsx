"use client";

import { SectionReveal } from "@/components/section-reveal";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "Java", "Kotlin", "C", "SQL", "HTML/CSS"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["Streamlit", "Jetpack Compose", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend & Data",
    skills: ["Firebase Firestore", "MySQL", "Google Gemini API"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Azure DevOps", "Git/GitHub", "Agile/Scrum", "Figma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Skills
          </h2>
          <p className="text-3xl font-bold text-foreground sm:text-4xl mb-12">
            What I work with
          </p>
        </SectionReveal>

        <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, catIdx) => (
            <SectionReveal key={cat.category} delay={catIdx * 0.08}>
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.06 + skillIdx * 0.04, duration: 0.3 }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-all duration-150 hover:border-primary/50 hover:text-primary hover:shadow-[0_2px_12px_var(--purple-glow)] cursor-default transition-theme"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
