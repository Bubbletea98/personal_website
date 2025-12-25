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

export default function About() {
  const { personal, skills, languages } = RESUME_DATA;

  return (
    <section id="about" className="py-16 relative overflow-hidden bg-[#f0f0f0]">
      {/* Schematic Dots Background */}
      <div className="absolute inset-0 schematic-dots" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-1 w-8 bg-black" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/60">
              02 // Introduction
            </span>
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold">
            About <span className="bg-[#fbbf24] px-2 border-2 border-black">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left: Bio & Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Bio Card */}
            <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#ff6b35] border-2 border-black flex items-center justify-center text-lg">
                  👋
                </div>
                <h3 className="font-mono text-xl font-bold uppercase">Hello!</h3>
              </div>
              {/* Use sans-serif for body text - better readability */}
              <p className="text-base leading-relaxed text-black/80">
                {renderWithBold(personal.highlight)}
              </p>
            </div>

            {/* Languages Card */}
            <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <h3 className="font-mono text-base font-bold uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0d9488]" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex items-center gap-2 px-3 py-1.5 border border-black bg-[#fafaf9]"
                  >
                    <span className="font-mono font-bold text-sm">{lang.language}</span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 bg-[#0d9488] text-white border border-black">
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
            className="space-y-3"
          >
            <h3 className="font-mono text-base font-bold uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff6b35]" />
              Technical Skills
            </h3>
            
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span 
                    className={`w-2 h-2 ${
                      index === 0 ? "bg-[#ff6b35]" : 
                      index === 1 ? "bg-[#0d9488]" : 
                      index === 2 ? "bg-[#7c3aed]" : 
                      "bg-[#fbbf24]"
                    }`} 
                  />
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 font-mono text-xs border border-black/30 bg-[#fafaf9] hover:bg-[#fbbf24] hover:border-black transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Skill Distribution Chart - Compact */}
            <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-3">
                Skill Distribution
              </h4>
              <div className="space-y-2">
                {[
                  { name: "ML/AI", value: 95, color: "#ff6b35" },
                  { name: "Backend", value: 85, color: "#0d9488" },
                  { name: "Cloud", value: 80, color: "#7c3aed" },
                  { name: "Frontend", value: 60, color: "#fbbf24" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <span className="font-mono text-[10px] w-14 text-right">{item.name}</span>
                    <div className="flex-1 h-4 border border-black bg-[#fafaf9]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full"
                        style={{ background: item.color }}
                      />
                    </div>
                    <span className="font-mono text-[10px] font-bold w-8">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
