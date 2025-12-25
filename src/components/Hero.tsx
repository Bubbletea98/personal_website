"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/config";
import GeometricHero from "./GeometricHero";

export default function Hero() {
  const stats = [
    { label: "Years Experience", value: "6+" },
    { label: "Projects", value: "15+" },
    { label: "Publication", value: "1" },
    { label: "Tech Stack", value: "20+" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f0f0f0]">
      {/* Geometric Background */}
      <GeometricHero />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20"
      >
        {/* Status Badge */}
        {/* <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block px-4 py-2 bg-[#0d9488] text-white font-mono text-sm font-bold uppercase tracking-wider border-3 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            Available for Opportunities
          </span>
        </motion.div> */}

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
        >
          <span className="text-black">Hi, I&apos;m </span>
          <span className="bg-[#ff6b35] px-3 inline-block border-3 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            {RESUME_DATA.personal.name}
          </span>
          <span className="text-black/60 text-2xl sm:text-3xl md:text-4xl font-normal ml-2">
            (ʘ‿ʘ)╯
          </span>
        </motion.h1>

        {/* Role Tags */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {["Senior ML Engineer", "LLM Specialist", "Builder"].map((role, index) => (
            <span
              key={role}
              className={`px-4 py-2 font-mono text-sm font-bold uppercase border-3 border-black ${
                index === 0
                  ? "bg-[#fbbf24]"
                  : index === 1
                  ? "bg-[#0d9488] text-white"
                  : "bg-white"
              }`}
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="font-mono text-lg md:text-xl leading-relaxed text-black">
            I turn ML ideas into production-ready systems — LLMs, agents, prediction models, and everything in between.
          </p>
          <p className="font-mono text-base md:text-lg text-[#666666] mt-2 italic">
            ... and occasionally lose track of time exploring new frameworks at 2am.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto mb-16"
        >
          <motion.a
            href="#playground"
            whileHover={{ x: 4, y: 4 }}
            className="px-4 py-3 font-mono text-sm font-bold uppercase bg-[#0d9488] text-white border-3 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none transition-all text-center"
          >
            Digital Me
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ x: 4, y: 4 }}
            className="px-4 py-3 font-mono text-sm font-bold uppercase bg-[#16a34a] text-white border-3 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none transition-all text-center"
          >
            About Me
          </motion.a>

          <motion.a
            href="#experience"
            whileHover={{ x: 4, y: 4 }}
            className="px-4 py-3 font-mono text-sm font-bold uppercase bg-[#7c3aed] text-white border-3 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none transition-all text-center"
          >
            Experience
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ x: 4, y: 4 }}
            className="px-4 py-3 font-mono text-sm font-bold uppercase bg-[#ff6b35] border-3 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none transition-all text-center"
          >
            Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ x: 4, y: 4 }}
            className="px-4 py-3 font-mono text-sm font-bold uppercase bg-[#fbbf24] border-3 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none transition-all text-center col-span-2 md:col-span-1"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="bg-white border-3 border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <div className="font-mono text-4xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-black/60">
                {stat.label}
              </div>
              {/* Decorative corner */}
              <div 
                className={`absolute top-0 right-0 w-4 h-4 ${
                  index % 2 === 0 ? "bg-[#ff6b35]" : "bg-[#0d9488]"
                }`} 
                style={{ position: 'relative', marginTop: '-24px', marginLeft: 'auto' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-black/40">
              Scroll
            </span>
            <div className="w-6 h-10 border-3 border-black rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-black rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
