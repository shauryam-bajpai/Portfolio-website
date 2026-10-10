"use client";

import React, { useEffect, useState } from "react";
import { navLinks } from "../data/portfolioData";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1.5rem)] transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`no-scrollbar flex items-center gap-0.5 sm:gap-1.5 p-1.5 px-2 rounded-full border overflow-x-auto transition-all duration-300 ${
          scrolled
            ? "border-white/15 bg-[var(--card)]/90 shadow-2xl shadow-black/45 backdrop-blur-2xl"
            : "border-white/10 bg-[var(--card)]/70 shadow-xl shadow-black/30 backdrop-blur-xl"
        }`}
      >
        {navLinks.map((link) => {
          if (link.isButton) {
            return (
              <a
                key={link.label}
                href={link.href}
                style={{ backgroundColor: "var(--fg)", color: "var(--bg)" }}
                className="shrink-0 py-1.5 px-3.5 sm:px-4 text-xs sm:text-sm font-semibold rounded-full !text-[#0a0a0a] transition hover:opacity-90 active:scale-95 shadow-sm"
              >
                {link.label}
              </a>
            );
          }

          const targetId = link.href === "#" ? "home" : link.href.replace("#", "");
          const isActive = activeSection === targetId;

          return (
            <a
              key={link.label}
              href={link.href}
              className={`shrink-0 py-1.5 px-2 sm:px-3 text-xs sm:text-sm rounded-full transition-all duration-200 ${
                isActive
                  ? "text-[var(--fg)] font-medium bg-[var(--border)]/70 shadow-sm"
                  : "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--border2)]/50"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
