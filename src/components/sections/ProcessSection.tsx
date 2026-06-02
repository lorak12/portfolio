"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";

export function ProcessSection() {
  return (
    <section id="process" className="space-y-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="flex items-center gap-4"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Jak pracuję?
        </h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
      </motion.div>

      <div className="relative pt-6">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 timeline-line hidden sm:block" />
        <div className="space-y-12">
          {portfolioData.process.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`flex flex-col sm:flex-row items-stretch sm:justify-between relative ${isEven ? "" : "sm:flex-row-reverse"}`}
              >
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 border-2 border-zinc-600 z-20 flex items-center justify-center font-bold text-xs text-zinc-300">
                  {step.step}
                </div>
                <div className="w-full sm:w-[45%] pl-12 sm:pl-0">
                  <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-white/10 transition-all duration-300 cursor-default">
                    <div className="text-xs font-semibold text-zinc-500 tracking-wider uppercase mb-1">
                      Etap {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-100 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
