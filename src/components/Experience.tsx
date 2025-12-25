"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/config";

// Helper function to parse **bold** markers and render with bold styling
function renderWithBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} className="font-bold text-black">
          {boldText}
        </strong>
      );
    }
    return part;
  });
}

export default function Experience() {
  const { workExperience, education } = RESUME_DATA;

  return (
    <section id="experience" className="py-16 relative overflow-hidden bg-white">
      {/* Grid Background - reduced opacity */}
      <div className="absolute inset-0 schematic-grid" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-12 bg-black" />
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-black/60">
              03 // Career Path
            </span>
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold">
            Work <span className="bg-[#7c3aed] text-white px-2 border-2 border-black">&</span> Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <h3 className="font-mono text-lg font-bold uppercase mb-6 flex items-center gap-3">
              <span className="w-7 h-7 bg-[#ff6b35] border-2 border-black flex items-center justify-center font-bold text-sm">W</span>
              Work Experience
            </h3>

            <div className="relative">
              {/* Continuous Timeline Line */}
              <div className="absolute left-[14px] top-[20px] bottom-[20px] w-[3px] bg-black" />

              <div className="space-y-4">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={`${job.company}-${job.title}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="relative flex gap-4"
                  >
                    {/* Timeline Node */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-8 h-8 bg-white border-3 border-black flex items-center justify-center font-mono font-bold text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Content Card - Full height, no clipping */}
                    <div className="flex-1 bg-[#fafaf9] border-2 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-mono font-bold text-base leading-tight">{job.title}</h4>
                          <p className="font-mono text-sm text-black/60">{job.company}</p>
                        </div>
                        <span className="font-mono text-[10px] px-2 py-0.5 bg-[#fbbf24] border border-black whitespace-nowrap">
                          {job.startDate} - {job.endDate}
                        </span>
                      </div>

                      {/* Show ALL highlights with bold rendering */}
                      <ul className="space-y-1.5">
                        {job.highlights.map((highlight: string, i: number) => (
                          <li key={i} className="text-sm text-black/80 flex gap-2 leading-relaxed">
                            <span className="text-[#ff6b35] font-bold flex-shrink-0">→</span>
                            <span>{renderWithBold(highlight)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-lg font-bold uppercase mb-6 flex items-center gap-3">
              <span className="w-7 h-7 bg-[#0d9488] text-white border-2 border-black flex items-center justify-center font-bold text-sm">E</span>
              Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#fafaf9] border-2 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#7c3aed] border-2 border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">🎓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-mono font-bold text-base leading-tight">{edu.degree}</h4>
                      <p className="font-mono text-sm text-black/60">{edu.institution}</p>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-[#0d9488] text-white border border-black whitespace-nowrap">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.honors && (
                      <span className="font-mono text-xs px-2 py-0.5 bg-[#fbbf24] border border-black">
                        {edu.honors}
                      </span>
                    )}
                    <span className="font-mono text-xs px-2 py-0.5 border border-black/30 bg-white">
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  {edu.courses && edu.courses.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-dashed border-black/20">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-black/50 mb-1.5">
                        Key Courses
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.courses.map((course: string) => (
                          <span
                            key={course}
                            className="font-mono text-[11px] px-1.5 py-0.5 border border-black/20 bg-white"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Compact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 grid grid-cols-2 gap-3"
            >
              <div className="bg-black text-white p-4 border-2 border-black">
                <div className="font-mono text-2xl font-bold">2016</div>
                <div className="font-mono text-[10px] uppercase tracking-wider opacity-70">Started Journey</div>
              </div>
              <div className="bg-[#ff6b35] p-4 border-2 border-black">
                <div className="font-mono text-2xl font-bold">6+</div>
                <div className="font-mono text-[10px] uppercase tracking-wider">Years in ML</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
