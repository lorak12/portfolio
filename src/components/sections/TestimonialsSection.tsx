"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";

export function TestimonialsSection() {
  return (
    <section className="space-y-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="flex items-center gap-4"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Recenzje i opinie
        </h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between h-full">
              <p className="text-zinc-400 italic text-sm leading-relaxed font-light">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-300">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-200">
                    {t.author}
                  </h4>
                  <span className="text-xs text-zinc-500">{t.role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
