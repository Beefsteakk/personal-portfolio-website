"use client";

import { SectionReveal } from "@/components/section-reveal";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science (Honours) in Computing Science",
    institution: "Singapore Institute of Technology",
    year: "Expected Aug 2026",
    details:
      "Related Coursework: Data Structures & Algorithms, Object-Oriented Programming, Networks, Programming Methodology in C, Web Programming, Cloud Computing, Data Analytics.",
  },
  {
    degree: "Diploma in Accounting and Finance",
    institution: "Temasek Polytechnic",
    year: "Apr 2018 – Apr 2021",
    details: "",
  },
];

export function Education() {
  return (
    <section id="education" className="relative z-10 py-24 px-6 bg-muted/40">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Education
          </h2>
          <p className="text-3xl font-bold text-foreground sm:text-4xl mb-10">
            Background &amp; Learning
          </p>
        </SectionReveal>

        <div className="flex flex-col gap-5">
          {education.map((edu, i) => (
            <SectionReveal key={edu.degree} delay={i * 0.1}>
              <div className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-theme">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                    <span className="font-semibold text-foreground">{edu.degree}</span>
                    <span className="text-xs text-muted-foreground">· {edu.year}</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.details}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
