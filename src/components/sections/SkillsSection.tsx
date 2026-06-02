"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Compass, Wrench } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function getSkillIcon(cat: string) {
  switch (cat) {
    case "Frontend & UI":
      return <Code2 className="w-6 h-6 text-zinc-400" />;
    case "Backend & Bazy danych":
      return <Database className="w-6 h-6 text-zinc-400" />;
    case "Integracje & Bezpieczeństwo":
      return <Compass className="w-6 h-6 text-zinc-400" />;
    default:
      return <Wrench className="w-6 h-6 text-zinc-400" />;
  }
}

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="flex items-center gap-4"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Stack technologiczny
        </h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {portfolioData.skills.map((cat, idx) => (
          <motion.div key={idx} variants={fadeInUp}>
            <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-white/10 transition-all duration-300 group h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/8 group-hover:border-white/15 transition-all duration-300">
                    {getSkillIcon(cat.category)}
                  </div>
                  <h3 className="font-bold text-lg tracking-wide text-zinc-200">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {cat.items.map((item, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-3.5 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-800/60 transition-all duration-300 cursor-default inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
