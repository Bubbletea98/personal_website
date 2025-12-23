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

            {/* Contact Info */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-slate-100">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-abyss-700/50 flex items-center justify-center group-hover:bg-neural-cyan/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-neural-cyan"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-300 group-hover:text-neural-cyan transition-colors">
                    {personal.email}
                  </span>
                </a>

                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-abyss-700/50 flex items-center justify-center group-hover:bg-neural-cyan/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-neural-cyan"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-300 group-hover:text-neural-cyan transition-colors">
                    {personal.phone}
                  </span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-abyss-700/50 flex items-center justify-center group-hover:bg-neural-cyan/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-neural-cyan"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-slate-300 group-hover:text-neural-cyan transition-colors">
                    LinkedIn Profile
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-abyss-700/50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-neural-cyan"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-300">{personal.address}</span>
                </div>
              </div>
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

