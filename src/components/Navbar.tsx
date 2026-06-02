"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Award,
  User,
  Code2,
  Briefcase,
  MessageSquare,
  Mail,
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const NAV_SECTIONS = [
  "home",
  "about",
  "skills",
  "process",
  "projects",
  "contact",
] as const;

type Section = (typeof NAV_SECTIONS)[number];

const LABELS: Record<Section, string> = {
  home: "Start",
  about: "O mnie",
  skills: "Skille",
  process: "Proces",
  projects: "Projekty",
  contact: "Kontakt",
};

const MOBILE_SECTIONS = [
  "home",
  "about",
  "skills",
  "projects",
  "contact",
] as const;

const MOBILE_ICONS: Record<string, React.ReactNode> = {
  home: <Award className="w-5 h-5" />,
  about: <User className="w-5 h-5" />,
  skills: <Code2 className="w-5 h-5" />,
  projects: <Briefcase className="w-5 h-5" />,
  contact: <Mail className="w-5 h-5" />,
};

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const pos = window.scrollY + 200;
      for (const id of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b ${scrolled ? "bg-zinc-950 border-white/8" : "glass-panel border-transparent border-t-0 border-x-0"}`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <span className="font-sans font-black text-2xl tracking-tighter text-white group-hover:opacity-80 transition-opacity duration-300">
              KS
            </span>
            <span className="font-sans font-bold text-sm tracking-widest text-zinc-500 uppercase hidden sm:inline-block group-hover:text-zinc-300 transition-colors">
              .dev
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 relative py-1 cursor-pointer ${
                  activeSection === section
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {LABELS[section]}
                {activeSection === section && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="glass-panel border-white/10 text-zinc-300 hover:text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            Napisz do mnie
          </button>
        </div>
      </nav>

      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm glass-panel py-3 px-6 rounded-full flex justify-around items-center">
        {MOBILE_SECTIONS.map((sec) => (
          <button
            key={sec}
            onClick={() => scrollToSection(sec)}
            className={`p-2 rounded-full transition-all cursor-pointer ${
              activeSection === sec
                ? "text-white bg-white/10"
                : "text-zinc-500 hover:text-zinc-200"
            }`}
          >
            {MOBILE_ICONS[sec]}
          </button>
        ))}
      </div>
    </>
  );
}
