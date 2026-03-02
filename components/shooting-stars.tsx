"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

interface Star {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
  tailLength: number;
  dy: number; // slight diagonal drift
}

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function createStar(canvasHeight: number): Star {
  return {
    x: randomBetween(-200, -20),
    y: randomBetween(0, canvasHeight),
    speed: randomBetween(120, 320),     // px per second
    size: randomBetween(1, 2),
    opacity: randomBetween(0.3, 0.8),
    tailLength: randomBetween(40, 110),
    dy: randomBetween(-0.15, 0.25),     // slight downward drift
  };
}

export function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const STAR_COUNT = 20;
    const stars: Star[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    // Seed stars spread across the canvas initially
    for (let i = 0; i < STAR_COUNT; i++) {
      const s = createStar(canvas.height);
      s.x = randomBetween(-canvas.width * 0.5, canvas.width * 1.1);
      stars.push(s);
    }

    let lastTime = performance.now();
    let animId: number;

    function draw(now: number) {
      if (!canvas || !ctx) return;
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Star color based on theme
      const starColor = theme === "dark"
        ? "168, 85, 247"    // purple-400 rgb approx
        : "147, 51, 234";   // purple-600 rgb approx

      for (const star of stars) {
        star.x += star.speed * dt;
        star.y += star.speed * star.dy * dt;

        // Reset once past right edge
        if (star.x > canvas.width + 50) {
          const fresh = createStar(canvas.height);
          Object.assign(star, fresh);
        }

        // Draw tail (gradient streak)
        const tailX = star.x - star.tailLength;
        const gradient = ctx.createLinearGradient(tailX, star.y, star.x, star.y);
        gradient.addColorStop(0, `rgba(${starColor}, 0)`);
        gradient.addColorStop(1, `rgba(${starColor}, ${star.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, star.y);
        ctx.lineTo(star.x, star.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.size;
        ctx.lineCap = "round";
        ctx.stroke();

        // Draw bright head dot
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starColor}, ${Math.min(star.opacity + 0.2, 1)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="shooting-stars-canvas pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
