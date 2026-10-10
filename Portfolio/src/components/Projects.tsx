import React from "react";
import { projectsData } from "../data/portfolioData";

export default function Projects() {
  const getBadgeStyle = (category: string) => {
    if (category.includes("AI")) return "text-indigo-400 bg-indigo-500/10 border-indigo-500/20";
    if (category.includes("DISTRIBUTED")) return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
    if (category.includes("MACHINE LEARNING")) return "text-purple-400 bg-purple-500/10 border-purple-500/20";
    if (category.includes("FULL STACK")) return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
    if (category.includes("BACKEND")) return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    return "text-[var(--accent)] bg-[var(--accent)]/10 border-[var(--accent)]/20";
  };

  return (
    <section id="projects" className="relative max-w-[1120px] mx-auto px-6 sm:px-8 pb-28">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5 mb-7 pb-8 border-b border-[var(--border2)]">
        <div>
          <div className="font-mono text-xs sm:text-[13px] text-[var(--accent)] mb-3 tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            03 / FEATURED PROJECTS
          </div>
          <h2 className="m-0 text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-[-0.03em]">
            Projects
          </h2>
          <p className="m-0 mt-3 max-w-[620px] text-sm sm:text-[15px] leading-relaxed text-[var(--muted)]">
            A selection of full-stack, applied AI/ML, and distributed systems
            projects.
          </p>
        </div>
        <span className="self-start shrink-0 inline-flex items-center gap-2 font-mono text-xs sm:text-[13px] text-[var(--muted)] bg-[var(--card)] border border-[var(--border)] rounded-full py-1.5 px-3.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          06 projects
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {projectsData.map((project) => {
          const isTwoSpan = project.colSpan === 2;
          const badgeClass = getBadgeStyle(project.category);

          return (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
              className={`pcard project-card group min-h-full ${
                isTwoSpan ? "md:col-span-2" : "md:col-span-1"
              } p-6 sm:p-7 md:p-8 flex flex-col justify-between gap-6 sm:gap-7`}
            >
              {/* Top Accent Line */}
              <div className="tl" aria-hidden="true" />
              {/* Dot Pattern Mask */}
              <div
                className="dots absolute top-0 right-0 w-[240px] pointer-events-none"
                style={{ height: "170px" }}
                aria-hidden="true"
              />

              {/* Card Body */}
              <div className="relative z-10">
                <div className="flex justify-between items-start gap-3 mb-4 sm:mb-5">
                  <span
                    className={`font-mono text-[10px] sm:text-[11px] py-1 px-2.5 rounded-full border tracking-[0.07em] font-medium inline-flex items-center gap-1.5 ${badgeClass}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-current" />
                    {project.category}
                  </span>
                  <span className="shrink-0 font-mono text-[11px] text-[var(--subtle)] pt-1">
                    {project.index}
                  </span>
                </div>

                <h3
                  className={`m-0 mb-2.5 font-semibold tracking-[-0.03em] leading-[1.12] text-[var(--fg)] group-hover:text-white transition-colors ${
                    isTwoSpan
                      ? "text-2xl sm:text-3xl md:text-[32px]"
                      : "text-xl sm:text-2xl md:text-[24px]"
                  }`}
                >
                  {project.title}
                </h3>

                <p className="m-0 text-sm leading-[1.65] text-[var(--muted)] max-w-[560px]">
                  {project.description}
                </p>

                {project.points && project.points.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4 sm:mt-5">
                    {project.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex gap-2.5 text-xs sm:text-[13px] leading-[1.55] text-[var(--muted)]"
                      >
                        <span
                          className="flex-none w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 opacity-80"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Bottom: Metrics + Tags + Action */}
              <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
                {/* Metrics Blocks */}
                <div
                  className={`grid gap-2.5 pt-4 border-t border-[var(--border2)] ${
                    project.metrics.length === 3
                      ? "grid-cols-2 sm:grid-cols-3"
                      : "grid-cols-2"
                  }`}
                >
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="project-metric min-w-0 flex flex-col items-center justify-center gap-1 border border-[var(--border)]/50 rounded-xl px-3 py-3 text-center"
                    >
                      <span className="max-w-full text-lg sm:text-xl font-bold tracking-tight text-[var(--fg)] break-words">
                        {metric.value}
                      </span>
                      <span className="font-mono text-[10px] leading-snug text-[var(--subtle)] tracking-wider uppercase">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer: Tags + Arrow Button */}
                <div className="flex justify-between items-end gap-3 pt-1">
                  <div className="flex gap-1.5 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip text-[11px] py-1 px-2.5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span
                    aria-hidden="true"
                    className="arr shadow-sm"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </a>
          );
        })}

        {/* More on GitHub Card */}
        <a
          href="https://github.com/shauryam-bajpai"
          target="_blank"
          rel="noopener noreferrer"
          className="pcard md:col-span-3 border border-dashed border-[var(--border)] hover:border-[var(--accent)] rounded-[22px] py-6 px-7 sm:px-9 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 transition group bg-[var(--card)]/60 hover:bg-[var(--card)]"
        >
          <div>
            <div className="text-lg sm:text-xl font-semibold tracking-[-0.02em] group-hover:text-[var(--accent)] transition-colors">
              More projects on GitHub
            </div>
            <div className="text-xs sm:text-sm text-[var(--muted)] mt-0.5">
              Additional experiments, tools, and backend work.
            </div>
          </div>
          <div className="self-start sm:self-auto text-sm font-mono text-[var(--accent)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>View all</span>
            <span>→</span>
          </div>
        </a>
      </div>
    </section>
  );
}
