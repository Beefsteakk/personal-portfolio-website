"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px]"
      aria-hidden="true"
      aria-label="Page scroll progress"
    >
      <div
        className="h-full w-full"
        style={{
          background: "linear-gradient(to right, var(--purple-accent), var(--purple-accent-soft))",
          boxShadow: "0 0 8px var(--purple-glow)",
        }}
      />
    </motion.div>
  );
}
