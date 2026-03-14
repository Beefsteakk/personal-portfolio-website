import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProjectsWork } from "@/components/projects-work";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Sticky navbar */}
      <Navbar />

      {/* Main content stack */}
      <main>
        <Hero />

        {/* Subtle divider */}
        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <About />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <ProjectsWork />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <Skills />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <Education />
      </main>

      <Footer />
    </div>
  );
}
