"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { GithubIcon } from "@/components/Icons";
import { fadeInUp } from "@/lib/animations";

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="space-y-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="flex items-center gap-4"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Projekty
        </h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        {portfolioData.projects.map((project) => {
          const isExpanded = expandedProject === project.id;
          return (
            <motion.div
              key={project.id}
              layout="position"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="glass-panel rounded-2xl border-white/5 overflow-hidden relative flex flex-col"
            >
              <div className="p-6 sm:p-8 space-y-6 z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-400 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {project.challenge.slice(0, 140)}...
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white font-semibold uppercase tracking-wider transition-colors"
                    >
                      Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-200 font-semibold uppercase tracking-wider transition-colors"
                    >
                      Kod źródłowy <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <button
                    onClick={() =>
                      setExpandedProject(isExpanded ? null : project.id)
                    }
                    className="px-4 py-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/5 text-xs font-semibold text-zinc-200 transition-all cursor-pointer flex items-center gap-1"
                  >
                    {isExpanded ? "Zwiń szczegóły" : "Szczegóły projektu"}
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </button>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden border-t border-white/5 bg-zinc-950/40"
                  >
                    <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">
                          Wyzwanie
                        </span>
                        <p className="text-sm text-zinc-400 leading-relaxed font-light">
                          {project.challenge}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">
                          Rozwiązanie
                        </span>
                        <p className="text-sm text-zinc-400 leading-relaxed font-light">
                          {project.solution}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">
                          Rezultat
                        </span>
                        <p className="text-sm text-zinc-400 leading-relaxed font-light">
                          {project.result}
                        </p>
                      </div>
                      <div className="md:col-span-3 pt-4">
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <span className="text-xs text-zinc-600 mr-2 font-medium">
                            Wszystkie technologie:
                          </span>
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-500 animate-fade-in-up"
                              style={{ animationDelay: `${i * 0.05}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
