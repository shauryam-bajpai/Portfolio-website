import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import TechMarquee from "../components/TechMarquee";
import ActivityCalendar from "../components/ActivityCalendar";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="page-shell relative min-h-screen bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--accent)] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechMarquee />
        <ActivityCalendar />
      </main>

      {/* Footer / Contact */}
      <Contact />
    </div>
  );
}
