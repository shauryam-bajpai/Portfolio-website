import React from "react";
import { aboutData } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-[1120px] mx-auto px-6 sm:px-8 pb-24 sm:pb-28 pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20"
    >
      {/* Left Column: Bio */}
      <div className="lg:sticky lg:top-32 lg:self-start">
        <div className="font-mono text-xs sm:text-[13px] text-[var(--accent)] mb-3 tracking-wider flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          {aboutData.sectionNumber}
        </div>
        <h2 className="m-0 text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] leading-tight">
          {aboutData.title}
        </h2>
        <div className="mt-7 flex flex-col gap-5 text-sm sm:text-[15px] leading-[1.8] text-[var(--muted)]">
          {Array.isArray(aboutData.bio) ? (
            aboutData.bio.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "m-0 text-base leading-[1.75] text-[var(--fg2)]"
                    : "m-0"
                }
              >
                {para.split(/(\*\*.*?\*\*)/g).map((part, index) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={index} className="font-semibold text-[var(--fg2)]">
                      {part.slice(2, -2)}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            ))
          ) : (
            <p className="m-0">{aboutData.bio}</p>
          )}
        </div>
      </div>

      {/* Right Column: Structured Tech Stack Matrix */}
      <div className="rounded-[24px] border border-[var(--border2)] bg-[var(--card)]/55 p-5 sm:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="font-mono text-xs sm:text-[13px] text-[var(--accent)] mb-3 tracking-wider flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          TOOLS &amp; TECHNOLOGIES
        </div>
        <div className="border-t border-[var(--border2)] mt-5">
          {aboutData.techStack.map((category) => (
            <div
              key={category.category}
              className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2.5 sm:gap-4 items-start py-4 border-b border-[var(--border2)] last:border-b-0 transition hover:border-[var(--border)]"
            >
              <div className="font-mono text-xs text-[var(--subtle)] sm:pt-1 uppercase tracking-wider font-medium">
                {category.category}
              </div>
              <div className="flex gap-2 flex-wrap">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="chip cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
