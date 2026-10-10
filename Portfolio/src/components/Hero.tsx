import React from "react";
import { heroData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="home" className="grid-pattern relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-5 pt-24 pb-14 overflow-hidden">
      {/* Top purple ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 62% 48% at 50% 0%, rgba(129, 140, 248, 0.28), transparent 72%)",
        }}
        aria-hidden="true"
      />
      {/* Vignette fade to dark background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, var(--bg) 82%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Aceternity-style spotlight orb behind headline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[220px] rounded-full blur-[100px] pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(129, 140, 248, 0.14) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="rise relative max-w-[900px] flex flex-col items-center gap-3 sm:gap-4 z-10 my-auto">
        {/* Education & Status Badge */}
        <span className="font-mono text-[11px] sm:text-xs text-[var(--muted)] border border-[var(--border)] rounded-full py-1 px-3 sm:px-3.5 inline-flex items-center gap-2 bg-[var(--card)]/80 backdrop-blur-sm shadow-sm transition hover:border-[var(--accent)]/50">
          <i
            className="pulseg w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block"
            aria-hidden="true"
          />
          {heroData.badge}
        </span>

        {/* Main Headline with Shine effect */}
        <h1 className="hero-title m-0 font-semibold leading-[1.02] tracking-[-0.05em] text-balance">
          {heroData.name}
          <br />
          <span className="shine">{heroData.tagline}</span>
        </h1>

        {/* Subtitle */}
        <p className="m-0 w-full max-w-[720px] text-sm sm:text-base leading-[1.65] text-[var(--muted)] text-balance">
          {heroData.description}
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <a
            href={heroData.primaryAction.href}
            className="btn py-2.5 px-5 rounded-full border border-[var(--border3)] bg-[var(--bg)] text-xs sm:text-sm font-medium shadow-[0_0_0_4px_rgba(129,140,248,0.12),0_12px_30px_-10px_rgba(129,140,248,0.5)] text-[var(--fg)] hover:border-[var(--accent)] transition active:scale-95 flex items-center gap-1.5"
          >
            <span>{heroData.primaryAction.label}</span>
            <span className="text-xs text-[var(--accent)]">↓</span>
          </a>
          <a
            href={heroData.secondaryAction.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn py-2.5 px-5 rounded-full border border-[var(--border3)] bg-[var(--card)] text-xs sm:text-sm font-medium text-[var(--fg2)] hover:text-[var(--fg)] transition flex items-center gap-1 active:scale-95"
          >
            {heroData.secondaryAction.label}
          </a>
        </div>

        {/* Cursive Animated Signature */}
        <div
          aria-hidden="true"
          className="mt-1 flex flex-col items-center select-none -rotate-3 transition hover:rotate-0 duration-300"
        >
          <span
            className="sig inline-block text-3xl sm:text-4xl md:text-[46px] leading-tight px-3 tracking-[0.02em]"
            style={{
              fontFamily: "var(--font-cursive), 'Monsieur La Doulaise', cursive",
              background:
                "linear-gradient(90deg, var(--subtle), var(--fg2) 55%, var(--muted))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {heroData.signature}
          </span>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--subtle)]">
        <span>Software Engineering</span>
        <span className="h-px w-7 bg-[var(--border3)]" />
        <span>Applied AI/ML</span>
        <span className="h-px w-7 bg-[var(--border3)]" />
        <span>Distributed Systems</span>
      </div>
    </section>
  );
}
