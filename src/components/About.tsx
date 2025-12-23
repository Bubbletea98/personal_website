"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/config";

export default function About() {
  const { personal, skills, languages } = RESUME_DATA;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 neural-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-neural-emerald/10 border border-neural-emerald/20 text-neural-emerald text-sm font-medium mb-4">
            Introduction
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio Card */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-neural-cyan to-neural-teal flex items-center justify-center text-abyss-950">
                  👋
                </span>
                Hello!
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                {personal.highlight}
              </p>
            </div>

            {/* Languages */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-slate-100">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-abyss-700/50"
                  >
                    <span className="text-slate-200">{lang.language}</span>
                    <span className="text-xs text-neural-cyan px-2 py-0.5 rounded bg-neural-cyan/10">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-100">
              Technical Skills
            </h3>
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <h4 className="text-neural-cyan font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neural-cyan" />
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-lg bg-abyss-700/50 text-slate-300 text-sm hover:bg-neural-cyan/10 hover:text-neural-cyan transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

