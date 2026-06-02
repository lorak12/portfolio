"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Award, Sparkles, Coffee, X } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { fadeInUp } from "@/lib/animations";

const FUN_FACTS = [
  {
    title: "🎧 Strefa audio",
    content:
      "Najchętniej koduję przy muzyce Lo-Fi (Lofi Girl na żywo) lub chiptune przy 110-120 BPM.",
  },
  {
    title: "☕ Paliwo programisty",
    content:
      "Mój dzień to dokładnie 2 filiżanki podwójnego espresso (bez cukru!). O 9:00 i o 15:30.",
  },
  {
    title: "⌨️ Preferencje edytora",
    content:
      "VS Code — Tokyo Night Storm. JetBrains Mono z ligaturami. Mechanik 75% na cichych czerwonych.",
  },
  {
    title: "🌓 Nocna sowa",
    content:
      "Najlepsze pomysły i najtrudniejsze bugi rozwiązuję w godz. 22:00-02:00. Cisza nocna = głęboki flow.",
  },
];

export function AboutSection() {
  const [showFunFactTab, setShowFunFactTab] = useState(false);
  const [activeFunFactIndex, setActiveFunFactIndex] = useState(0);

  return (
    <section id="about" className="space-y-12 overflow-visible">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="flex items-center gap-4"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white">O mnie</h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="lg:col-span-7 space-y-6"
        >
          {portfolioData.aboutParagraphs.map((para, i) => (
            <p
              key={i}
              className="text-zinc-400 leading-relaxed text-base font-light"
            >
              {para}
            </p>
          ))}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex items-center gap-4">
              {[
                {
                  href: portfolioData.contact.github,
                  icon: <GithubIcon className="w-5 h-5" />,
                },
                {
                  href: portfolioData.contact.linkedin,
                  icon: <LinkedinIcon className="w-5 h-5" />,
                },
                {
                  href: `mailto:${portfolioData.contact.email}`,
                  icon: <Mail className="w-5 h-5" />,
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-panel text-zinc-400 hover:text-white hover:border-white/15 hover:bg-white/5 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <button
              onClick={() => setShowFunFactTab(!showFunFactTab)}
              className="px-4 py-2.5 rounded-full border border-white/10 bg-white/3 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span>
                {showFunFactTab ? "Ukryj ciekawostki" : "Poznaj ciekawostki"}
              </span>
            </button>
          </div>
        </motion.div>

        <div className="lg:col-span-5 relative">
          <AnimatePresence mode="wait">
            {!showFunFactTab ? (
              <motion.div
                key="vision"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="relative w-full"
              >
                <div className="glass-panel p-6 rounded-2xl border-white/5 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Award className="w-6 h-6 text-zinc-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Moja wizja</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    Nie tylko piszę kod. Pomagam markom i przedsiębiorcom
                    przekształcać wizje w namacalne, nowoczesne i zoptymalizowane
                    produkty cyfrowe. Dbając o SEO, czas ładowania i UX,
                    zapewniam przewagę konkurencyjną.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="funfacts"
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="relative w-full"
              >
                <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-5">
                  <div className="flex items-center justify-between border-b border-white/8 pb-3">
                    <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-1">
                      <Coffee className="w-3.5 h-3.5" /> Nice to know
                    </span>
                    <button
                      onClick={() => setShowFunFactTab(false)}
                      className="p-1 rounded-full hover:bg-white/5 text-zinc-500 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex justify-between gap-1.5">
                    {FUN_FACTS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveFunFactIndex(i)}
                        className={`flex-1 py-1 rounded text-[10px] font-bold uppercase transition-all cursor-pointer ${
                          activeFunFactIndex === i
                            ? "bg-white/10 border border-white/20 text-white"
                            : "bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        #{i + 1}
                      </button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFunFactIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2 min-h-[110px]"
                    >
                      <h4 className="text-sm font-bold text-zinc-100">
                        {FUN_FACTS[activeFunFactIndex].title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        {FUN_FACTS[activeFunFactIndex].content}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  <div className="text-[10px] text-zinc-600 text-center italic">
                    Znalazłeś 1 z 2 sekretów. Szukaj dalej!
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
