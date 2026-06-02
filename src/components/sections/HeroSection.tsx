"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { MagneticButton } from "@/components/MagneticButton";
import { useTextScramble } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
  const scrambledName = useTextScramble(portfolioData.name, 600, 1400);

  return (
    <section id="home" className="min-h-[88vh] flex flex-col justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full glass-panel border-white/10 text-zinc-500 text-xs font-medium tracking-widest uppercase w-fit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>Dostępny do nowych projektów</span>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <p className="text-xs font-semibold text-zinc-600 tracking-[0.25em] uppercase mb-4">
            {portfolioData.title}
          </p>
          <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-extrabold tracking-tighter leading-[0.88] text-white">
            {scrambledName}
          </h1>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg font-light"
        >
          {portfolioData.bio}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold text-sm tracking-wide hover:bg-zinc-100 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
          >
            Porozmawiajmy
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 rounded-xl glass-panel font-semibold text-sm tracking-wide text-zinc-300 hover:bg-white/5 hover:border-white/15 transition-all duration-300 cursor-pointer"
          >
            Zobacz projekty
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="pt-6 border-t border-white/6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-zinc-600 tracking-widest uppercase">
            <span>Polska</span>
            <span className="text-zinc-800">·</span>
            <span>Zdalnie</span>
            <span className="text-zinc-800">·</span>
            <span>React &amp; Next.js</span>
            <span className="text-zinc-800">·</span>
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-3">
            {[
              {
                href: portfolioData.contact.github,
                icon: <GithubIcon className="w-4 h-4" />,
                label: "GitHub",
              },
              {
                href: portfolioData.contact.linkedin,
                icon: <LinkedinIcon className="w-4 h-4" />,
                label: "LinkedIn",
              },
              {
                href: `mailto:${portfolioData.contact.email}`,
                icon: <Mail className="w-4 h-4" />,
                label: "Email",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-600 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
