"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["About", "Projects", "Skills", "Education"];
const sectionIds = ["hero", "about", "projects", "skills", "education"];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-theme"
        style={{
          borderBottom: "1px solid color-mix(in oklch, var(--purple-accent) 15%, var(--border) 60%)",
          background: "color-mix(in oklch, var(--background) 30%, transparent)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          boxShadow: "0 1px 24px color-mix(in oklch, var(--purple-glow) 60%, transparent)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo / Name */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors duration-200"
          >
            Ayers Fong
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`relative transition-colors duration-200 group ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300"
                    style={{ width: isActive ? "100%" : "0%" }}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Dark / light toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="relative flex h-8 w-14 items-center rounded-full border border-border bg-muted px-1 transition-theme hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Sun
                className="absolute left-1.5 h-3.5 w-3.5 text-amber-400 transition-opacity duration-300"
                style={{ opacity: theme === "light" ? 1 : 0.35 }}
              />
              <Moon
                className="absolute right-1.5 h-3.5 w-3.5 text-primary transition-opacity duration-300"
                style={{ opacity: theme === "dark" ? 1 : 0.35 }}
              />
              <motion.span
                layout
                className="h-5 w-5 rounded-full bg-primary shadow-sm"
                animate={{ x: theme === "dark" ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[65px] left-0 right-0 z-40 md:hidden px-4 pb-4"
          >
            <nav
              className="rounded-2xl border border-border p-2 flex flex-col gap-1"
              style={{
                background: "color-mix(in oklch, var(--background) 85%, transparent)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                boxShadow: "0 8px 32px color-mix(in oklch, var(--purple-glow) 50%, transparent)",
              }}
            >
              {navLinks.map((item, i) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={item}
                    href={`#${id}`}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "bg-accent text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                        isActive ? "bg-primary" : "bg-primary/40"
                      }`}
                    />
                    {item}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close menu on outside tap */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
