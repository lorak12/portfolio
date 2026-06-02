"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Send } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { LinkedinIcon } from "@/components/Icons";
import { MagneticButton } from "@/components/MagneticButton";
import { fadeInUp } from "@/lib/animations";

const CONTACT_LINKS = [
  {
    href: () => `mailto:${portfolioData.contact.email}`,
    icon: <Mail className="w-5 h-5 text-zinc-400" />,
    label: "E-mail bezpośredni",
    value: portfolioData.contact.email,
  },
  {
    href: () => portfolioData.contact.linkedin,
    icon: <LinkedinIcon className="w-5 h-5 text-zinc-400" />,
    label: "LinkedIn",
    value: "linkedin.com/in/karolstroz",
  },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus("loading");
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="space-y-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="flex items-center gap-4"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Porozmawiajmy!
        </h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="lg:col-span-5 space-y-6"
        >
          <div>
            <h3 className="text-xl font-bold text-zinc-200">
              Masz projekt w głowie?
            </h3>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed font-light">
              Niezależnie od tego, czy potrzebujesz kompletnej platformy
              internetowej, panelu zarządzania, czy wsparcia doradczego – napisz
              do mnie.
            </p>
          </div>
          <div className="space-y-4">
            {CONTACT_LINKS.map((item, i) => {
              const href = item.href();
              return (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/12 hover:bg-white/3 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-lg bg-zinc-800 border border-white/5 group-hover:border-white/12 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-semibold block">
                      {item.label}
                    </span>
                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors font-medium">
                      {item.value}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border-white/5 relative"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <motion.div
                  animate={{ scale: [0.8, 1.1, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center"
                >
                  <Check className="w-8 h-8 text-white" />
                </motion.div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-zinc-100">
                    Wiadomość wysłana!
                  </h3>
                  <p className="text-sm text-zinc-400 font-light max-w-sm">
                    Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      Imię
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Np. Jan"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-white/5 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="np. jan@domena.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-white/5 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Wiadomość
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Opisz krótko swój projekt lub pytanie..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-white/5 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-white/20 resize-none transition-colors"
                  />
                </div>
                <MagneticButton
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-white hover:bg-zinc-100 disabled:bg-zinc-800 disabled:text-zinc-500 text-black font-semibold text-sm tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-zinc-600 border-t-zinc-200 rounded-full animate-spin" />
                      <span>Wysyłanie...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Wyślij wiadomość</span>
                    </>
                  )}
                </MagneticButton>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
