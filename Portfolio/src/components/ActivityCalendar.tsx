"use client";

import React, { useState } from "react";
import { githubActivity, leetcodeActivity } from "../data/activityData";

export default function ActivityCalendar() {
  const [view, setView] = useState<"github" | "leetcode">("github");
  const [flip, setFlip] = useState(false);
  const [hoveredCell, setHoveredCell] = useState<{
    index: number;
    level: string;
  } | null>(null);

  const isGithub = view === "github";

  const handleToggle = () => {
    if (flip) return;
    setFlip(true);
    setTimeout(() => {
      setView((prev) => (prev === "github" ? "leetcode" : "github"));
      setFlip(false);
    }, 270);
  };

  const months = [
    { name: "Oct", left: 0 },
    { name: "Nov", left: 68 },
    { name: "Dec", left: 153 },
    { name: "Jan", left: 221 },
    { name: "Feb", left: 289 },
    { name: "Mar", left: 357 },
    { name: "Apr", left: 442 },
    { name: "May", left: 510 },
    { name: "Jun", left: 595 },
    { name: "Jul", left: 663 },
    { name: "Aug", left: 731 },
    { name: "Sep", left: 816 },
  ];

  return (
    <section id="activity" className="max-w-[1120px] mx-auto px-6 sm:px-8 pb-28">
      {/* Header */}
      <div className="mb-10">
        <div className="font-mono text-xs sm:text-[13px] text-[var(--accent)] mb-3 tracking-wider flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          05 / CODING ACTIVITY
        </div>
        <h2 className="m-0 text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-[-0.03em]">
          Consistent Engineering Practice
        </h2>
      </div>

      {/* 3D Flip Card Container */}
      <div
        style={{
          transform: `perspective(1400px) rotateX(${flip ? 90 : 0}deg)`,
          opacity: flip ? 0 : 1,
          transition: "transform .26s ease, opacity .26s ease",
          transformOrigin: "center top",
        }}
      >
        <div className="activity-card border border-[var(--border2)] rounded-[24px] bg-[var(--card)] p-6 sm:p-8 md:p-9 shadow-2xl relative overflow-hidden">
          {/* Subtle ambient corner glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-20 -z-0"
            style={{
              background: isGithub
                ? "radial-gradient(circle, #22c55e, transparent)"
                : "radial-gradient(circle, #f59e0b, transparent)",
            }}
          />

          {/* Card Title & Link Row */}
          <div className="flex justify-between items-start gap-4 flex-wrap mb-6 sm:mb-8 relative z-10">
            <div>
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isGithub ? "bg-[#39d353] shadow-[0_0_8px_#39d353]" : "bg-[#ffa116] shadow-[0_0_8px_#ffa116]"
                  }`}
                />
                <h3 className="m-0 text-xl sm:text-2xl md:text-[26px] font-semibold tracking-[-0.02em] text-[var(--fg)]">
                  {isGithub
                    ? "170+ contributions in the last year"
                    : "400+ algorithmic problems solved"}
                </h3>
              </div>

              <div className="font-mono text-xs text-[var(--subtle)] mt-2 uppercase tracking-wider flex items-center gap-3">
                <span>{isGithub ? "GITHUB · shauryam-bajpai" : "LEETCODE · bajpai_shauryam"}</span>
                <span className="text-[var(--border3)]">|</span>
                <span className="text-[var(--muted)]">
                  {isGithub ? "Active commits & PRs" : "Daily problem solving streak"}
                </span>
              </div>
            </div>

            <a
              href={
                isGithub
                  ? "https://github.com/shauryam-bajpai"
                  : "https://leetcode.com/u/bajpai_shauryam/"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-xs sm:text-sm text-[var(--fg)] border border-[var(--border)] rounded-full py-2 px-4 inline-flex items-center gap-1.5 hover:border-[var(--accent)] bg-[var(--bg)] shadow-sm active:scale-95"
            >
              <span>{isGithub ? "View Profile" : "View Profile"}</span>
              <span>↗</span>
            </a>
          </div>

          {/* Activity Heatmap Grid */}
          <div className="overflow-x-auto pb-2 -mx-2 px-2 relative z-10">
            <div className="flex gap-2.5 w-max">
              {/* Day Labels Column */}
              <div className="grid grid-rows-7 gap-1 pt-[22px] font-mono text-[11px] text-[var(--subtle)] leading-[13px] select-none">
                <span className="h-[13px]" />
                <span className="h-[13px]">Mon</span>
                <span className="h-[13px]" />
                <span className="h-[13px]">Wed</span>
                <span className="h-[13px]" />
                <span className="h-[13px]">Fri</span>
                <span className="h-[13px]" />
              </div>

              {/* Months & Heatmap Matrix */}
              <div>
                {/* Month labels */}
                <div className="relative h-[22px] font-mono text-[11px] text-[var(--subtle)] select-none">
                  {months.map((m) => (
                    <span
                      key={m.name}
                      style={{ position: "absolute", left: `${m.left}px` }}
                    >
                      {m.name}
                    </span>
                  ))}
                </div>

                {/* 7 rows x 53 columns matrix */}
                <div className="hm">
                  {(isGithub ? githubActivity : leetcodeActivity).map(
                    (levelClass, idx) => (
                      <i
                        key={`${view}-${idx}`}
                        className={`c ${levelClass} transition-transform hover:scale-125 cursor-pointer`}
                        onMouseEnter={() =>
                          setHoveredCell({ index: idx, level: levelClass })
                        }
                        onMouseLeave={() => setHoveredCell(null)}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Toolbar: Toggle Button + Live Cell Feedback + Legend */}
          <div className="flex justify-between items-center gap-4 mt-7 flex-wrap relative z-10 pt-4 border-t border-[var(--border2)]">
            <button
              type="button"
              onClick={handleToggle}
              aria-label={`Show ${isGithub ? "LeetCode" : "GitHub"} activity`}
              disabled={flip}
              className="btn inline-flex items-center gap-2.5 font-sans text-xs sm:text-sm font-medium text-[var(--fg)] bg-[var(--bg)] border border-[var(--border)] rounded-full py-2.5 px-5 cursor-pointer hover:border-[var(--accent)] active:scale-95 shadow-sm"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={`transition-transform duration-300 ${flip ? "rotate-180" : ""}`}
              >
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
              <span>{isGithub ? "LeetCode Activity" : "GitHub Activity"}</span>
            </button>

            {/* Cell status badge or Legend */}
            <div className="flex items-center gap-4">
              {hoveredCell && (
                <div className="font-mono text-xs text-[var(--fg2)] bg-[var(--border2)] border border-[var(--border)] rounded-full py-0.5 px-3 animate-fade-in hidden sm:block">
                  Intensity Level: <span className="font-bold text-[var(--accent)]">{hoveredCell.level.toUpperCase()}</span>
                </div>
              )}

              {/* Legend */}
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--subtle)] select-none">
                <span>Less</span>
                {isGithub ? (
                  <>
                    <i className="c g0" />
                    <i className="c g1" />
                    <i className="c g2" />
                    <i className="c g3" />
                    <i className="c g4" />
                  </>
                ) : (
                  <>
                    <i className="c l0" />
                    <i className="c l1" />
                    <i className="c l2" />
                    <i className="c l3" />
                    <i className="c l4" />
                  </>
                )}
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
