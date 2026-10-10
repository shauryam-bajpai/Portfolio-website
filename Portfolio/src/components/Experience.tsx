import React from "react";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-[1120px] mx-auto px-6 sm:px-8 pb-28"
    >
      <div className="font-mono text-xs sm:text-[13px] text-[var(--accent)] mb-3 tracking-wider flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        02 / WORK EXPERIENCE
      </div>
      <h2 className="m-0 text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-[-0.03em]">
        Engineering Experience
      </h2>

      <div className="mt-12 relative border-l border-[var(--border)] pl-5 sm:pl-9 max-w-[920px] flex flex-col gap-6 sm:gap-8">
        {experienceData.map((exp) => (
          <div
            key={exp.company}
            className="relative group p-5 sm:p-7 rounded-[22px] border border-[var(--border2)] bg-[var(--card)]/45 hover:border-[var(--border)] hover:bg-[var(--card)]/80 transition-all duration-300"
          >
            {/* Timeline node */}
            {exp.isCurrent ? (
              <span
                className="pulse absolute -left-[31px] sm:-left-[43px] top-8 w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]"
                aria-hidden="true"
              />
            ) : (
              <span
                className="absolute -left-[31px] sm:-left-[43px] top-8 w-2.5 h-2.5 rounded-full bg-[var(--border3)] group-hover:bg-[var(--accent)] transition-colors"
                aria-hidden="true"
              />
            )}

            {/* Date Tag & Status */}
            <div className="font-mono text-xs text-[var(--subtle)] mb-2 tracking-wider uppercase flex items-center gap-2.5">
              <span>{exp.period}</span>
              {exp.isCurrent && (
                <span className="text-[10px] text-[#4ade80] bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-full py-0.5 px-2.5 font-mono font-medium">
                  CURRENT ROLE
                </span>
              )}
            </div>

            {/* Title & Organization */}
            <h3 className="m-0 text-lg sm:text-xl font-semibold text-[var(--fg)] group-hover:text-white transition-colors">
              {exp.title}
            </h3>
            <div className="text-sm sm:text-[15px] text-[var(--accent)] mt-0.5 font-medium">
              {exp.company}
            </div>

            {/* Bullet descriptions */}
            <div className="flex flex-col gap-2.5 mt-4">
              {exp.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-sm sm:text-[14.5px] leading-[1.65] text-[var(--muted)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--subtle)] mt-2 flex-none opacity-60" />
                  <p className="m-0">{bullet}</p>
                </div>
              ))}
            </div>

            {/* Skills chips */}
            {exp.skills && exp.skills.length > 0 && (
              <div className="flex gap-2 flex-wrap mt-5 pt-4 border-t border-[var(--border2)]/60">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] py-1 px-2.5 rounded-full bg-[var(--card)] border border-[var(--border2)] text-[var(--subtle)] group-hover:text-[var(--muted)] group-hover:border-[var(--border)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
