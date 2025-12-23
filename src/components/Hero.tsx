"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/config";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { label: "Years in ML", value: "6+" },
    { label: "Personal Projects For Fun", value: "15+" },
    { label: "Tech Stack", value: "20+" },
    { label: "Publication", value: "1" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-abyss-950 via-abyss-950/50 to-abyss-950 pointer-events-none" />

      {/* Neural grid pattern */}
      <div className="absolute inset-0 neural-grid opacity-30" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neural-cyan/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neural-teal/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-neural-violet/10 rounded-full blur-[80px] animate-pulse-slow delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Pre-title */}
          {/* <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neural-cyan/10 border border-neural-cyan/20 text-neural-cyan text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-neural-cyan animate-pulse" />
              Available for opportunities
            </span>
          </motion.div> */}

          {/* Main title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-slate-100">Hi, I&apos;m </span>
            <span className="gradient-text glow-text-subtle">
              {RESUME_DATA.personal.name}
            </span>
            <span className="text-slate-100 text-2xl sm:text-3xl md:text-4xl font-normal"> (ʘ‿ʘ)╯</span>
          </motion.h1>

          {/* Subtitle with typing effect style */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 md:gap-4 text-xl md:text-2xl lg:text-3xl font-light text-slate-300 mb-8"
          >
            <span>Senior ML Engineer</span>
            <span className="text-neural-cyan">•</span>
            <span>LLM Specialist</span>
            <span className="text-neural-cyan">•</span>
            <span>Builder</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-12"
          >
            {RESUME_DATA.personal.highlight}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-gradient-to-br from-neural-cyan/20 to-neural-teal/30 border border-neural-cyan/40 text-neural-cyan font-semibold text-sm sm:text-base text-center hover:from-neural-cyan/30 hover:to-neural-teal/40 hover:border-neural-cyan/60 transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
            >
              Project & Research
            </motion.a>

            <motion.a
              href="#experience"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-gradient-to-br from-neural-violet/20 to-neural-blue/30 border border-neural-violet/40 text-neural-violet font-semibold text-sm sm:text-base text-center hover:from-neural-violet/30 hover:to-neural-blue/40 hover:border-neural-violet/60 transition-all hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]"
            >
              Work & Education Experience 
            </motion.a>

            <motion.a
              href="#playground"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-gradient-to-br from-neural-teal/20 to-neural-emerald/30 border border-neural-teal/40 text-neural-teal font-semibold text-sm sm:text-base text-center hover:from-neural-teal/30 hover:to-neural-emerald/40 hover:border-neural-teal/60 transition-all hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]"
            >
              Digital Me
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-gradient-to-br from-neural-blue/20 to-neural-cyan/30 border border-neural-blue/40 text-neural-blue font-semibold text-sm sm:text-base text-center hover:from-neural-blue/30 hover:to-neural-cyan/40 hover:border-neural-blue/60 transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass-card rounded-xl p-4 md:p-6"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-slate-500 hover:text-neural-cyan transition-colors"
          >
            <span className="text-xs mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

