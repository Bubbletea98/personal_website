"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/config";

export default function Experience() {
  const { workExperience, education } = RESUME_DATA;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 neural-grid opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neural-blue/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-neural-blue/10 border border-neural-blue/20 text-neural-blue text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-neural-cyan to-neural-teal flex items-center justify-center text-abyss-950">
                💼
              </span>
              Work & Education Experience 
            </h3>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neural-cyan via-neural-teal to-neural-violet opacity-30" />

              {workExperience.map((job, index) => (
                <motion.div
                  key={`${job.company}-${job.startDate}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16 pb-12 last:pb-0"
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-neural-cyan to-neural-teal shadow-[0_0_20px_rgba(6,182,212,0.5)]" />

                  {/* Card */}
                  <div className="glass-card rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-shadow">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-100">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-neural-cyan font-medium">
                            {job.company}
                          </span>
                          {job.team && (
                            <>
                              <span className="text-slate-600">•</span>
                              <span className="text-slate-400 text-sm">
                                {job.team}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-slate-400 font-mono">
                          {job.startDate} — {job.endDate}
                        </span>
                        <div className="text-xs text-slate-500 mt-1">
                          📍 {job.location}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {job.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <span className="text-neural-teal mt-1.5 flex-shrink-0">
                            ▹
                          </span>
                          <span className="text-sm leading-relaxed">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education - Takes 1 column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-neural-violet to-neural-blue flex items-center justify-center text-white">
                🎓
              </span>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="glass-card rounded-2xl p-6 relative overflow-hidden group"
                >
                  {/* Accent gradient */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neural-violet via-neural-blue to-neural-cyan" />

                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-slate-100 mb-1">
                      {edu.degree}
                    </h4>
                    <div className="text-neural-violet font-medium">
                      {edu.institution}
                    </div>
                    <div className="text-sm text-slate-400 font-mono mt-1">
                      {edu.startDate} — {edu.endDate}
                    </div>
                  </div>

                  {/* GPA & Honors */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-neural-cyan/10 text-neural-cyan">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                    {edu.honors && (
                      <div className="text-sm text-neural-emerald">
                        ⭐ {edu.honors}
                      </div>
                    )}
                  </div>

                  {/* Courses */}
                  <div>
                    <div className="text-xs text-slate-500 mb-2">
                      Relevant Courses:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="text-xs px-2 py-1 rounded bg-abyss-700/50 text-slate-400"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

