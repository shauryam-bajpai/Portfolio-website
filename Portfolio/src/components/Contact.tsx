"use client";

import React, { useState } from "react";
import { contactData } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer
      id="contact"
      className="grid-pattern relative py-24 sm:py-32 px-6 text-center border-t border-[var(--border2)] overflow-hidden"
    >
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(129,140,248,0.08), var(--bg) 72%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6 max-w-xl mx-auto">
        <div className="font-mono text-xs sm:text-[13px] text-[var(--accent)] tracking-wider flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          {contactData.sectionNumber}
        </div>

        <h2 className="m-0 text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-[-0.035em] leading-[1.08]">
          {contactData.title}
        </h2>

        <p className="m-0 text-sm sm:text-base md:text-lg leading-[1.65] text-[var(--muted)] max-w-md">
          {contactData.subtitle}
        </p>

        {/* Email CTA Buttons: Direct Mailto + Click to Copy */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <a
            href={`mailto:${contactData.email}`}
            style={{ backgroundColor: "var(--fg)", color: "var(--bg)" }}
            className="py-3 px-6 sm:px-7 rounded-full !text-[#0a0a0a] text-xs sm:text-sm font-semibold transition hover:opacity-90 active:scale-95 shadow-lg shadow-white/5 flex items-center gap-2"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {contactData.email}
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="btn py-3 px-4 rounded-full border border-[var(--border)] bg-[var(--card)] text-xs text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition flex items-center gap-1.5 cursor-pointer active:scale-95"
            title="Copy email address"
          >
            {copied ? (
              <>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[#4ade80] font-mono">Copied!</span>
              </>
            ) : (
              <>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links with Icons */}
        <div className="flex gap-6 sm:gap-8 mt-5 text-xs sm:text-sm text-[var(--subtle)]">
          {contactData.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--fg)] transition flex items-center gap-1.5 font-medium"
            >
              {social.label}
              <span className="text-[10px] opacity-60">↗</span>
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View résumé (PDF, opens in a new tab)"
          className="btn py-2.5 px-5 rounded-full border border-[var(--border)] bg-[var(--card)] text-xs sm:text-sm font-medium text-[var(--fg2)] transition active:scale-95 inline-flex items-center gap-2"
        >
          <span>View résumé</span>
          <span aria-hidden="true">↗</span>
        </a>

        {/* Location Badge */}
        <div className="font-mono text-[11px] text-[var(--subtle2)] mt-6 border-t border-[var(--border2)] pt-6 w-full max-w-sm flex flex-col gap-2">
          <span>{contactData.location}</span>
          <span>© 2026 Shauryam Bajpai</span>
        </div>
      </div>
    </footer>
  );
}
