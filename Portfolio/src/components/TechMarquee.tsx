import React from "react";
import { marqueeTechnologies } from "../data/portfolioData";

export default function TechMarquee() {
  return (
    <section className="max-w-[1120px] mx-auto px-6 sm:px-8 pb-28">
      <div className="font-mono text-xs sm:text-[13px] text-[var(--accent)] mb-3 tracking-wider flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        04 / CORE STACK
      </div>
      <h2 className="m-0 mb-10 text-2xl sm:text-3xl lg:text-[32px] font-medium tracking-[-0.02em] text-[var(--muted)]">
        Technologies I ship with in production.
      </h2>

      <div className="relative rounded-[22px] border border-[var(--border2)] bg-[var(--card)]/45 py-8 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="marquee flex items-center gap-4">
          {/* Primary loop */}
          <div className="flex items-center gap-3 pr-3">
            {marqueeTechnologies.map((tech, idx) => (
              <div
                key={`${tech}-1-${idx}`}
                className="flex items-center gap-2 py-2 px-4 rounded-full border border-[var(--border)] bg-[var(--card)]/90 text-sm sm:text-[15px] font-medium text-[var(--fg2)] whitespace-nowrap shadow-sm hover:border-[var(--accent)] hover:text-white transition-all cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-70" />
                <span>{tech}</span>
              </div>
            ))}
          </div>

          {/* Duplicated loop for smooth infinite continuous scrolling */}
          <div className="flex items-center gap-3 pr-3" aria-hidden="true">
            {marqueeTechnologies.map((tech, idx) => (
              <div
                key={`${tech}-2-${idx}`}
                className="flex items-center gap-2 py-2 px-4 rounded-full border border-[var(--border)] bg-[var(--card)]/90 text-sm sm:text-[15px] font-medium text-[var(--fg2)] whitespace-nowrap shadow-sm hover:border-[var(--accent)] hover:text-white transition-all cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-70" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Left & Right gradient edge fades */}
        <div
          className="absolute top-0 bottom-0 left-0 w-24 sm:w-32 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to right, var(--bg), transparent)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-24 sm:w-32 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to left, var(--bg), transparent)",
          }}
        />
      </div>
    </section>
  );
}
