"use client";

import { SectionReveal } from "@/components/section-reveal";
import { MapPin, GraduationCap, Dumbbell } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Computing Science Graduate" },
  { icon: MapPin, label: "Based in Singapore" },
  { icon: Dumbbell, label: "Gym · Food · Cooking" },
];

export function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 bg-muted/40">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            About
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              Hi, I&apos;m Ayers — a Computing Science graduate obsessed with finding the right solutions to problems I actually face. I believe that great software starts with understanding the people using it and the problem worth solving, not just something that works.
            </p>
            <p>
              Apart from work, you can find me at the gym, exploring new places to eat, or cooking!
            </p>
          </div>
        </SectionReveal>

        {/* Highlight stat row */}
        <SectionReveal delay={0.2}>
          <div className="flex flex-wrap gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-theme"
              >
                <Icon size={14} className="text-primary shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
