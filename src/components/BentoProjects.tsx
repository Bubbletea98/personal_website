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

export default function BentoProjects() {
  const { projects } = RESUME_DATA;

  // Reorder projects to prioritize: MODELS, Sherpa, Dream Journal
  const priorityOrder = [
    "MODELS Conference 2023",
    "LLM Framework – Sherpa",
    "Dream Journal App",
    "Stock Signal Bot",
  ];

  const orderedProjects = [
    ...projects.filter((p) => priorityOrder.includes(p.name)),
    ...projects.filter((p) => !priorityOrder.includes(p.name)),
  ].sort((a, b) => {
    const aIndex = priorityOrder.indexOf(a.name);
    const bIndex = priorityOrder.indexOf(b.name);
    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  const getGridSpan = (index: number): string => {
    if (index === 0) return "md:col-span-5";
    if (index === 1) return "md:col-span-5";
    if (index === 2) return "md:col-span-6";
    if (index === 3) return "md:col-span-4";
    return "md:col-span-5";
  };

  const getAccentColor = (index: number): string => {
    const colors = ["#ff6b35", "#0d9488", "#7c3aed", "#fbbf24", "#16a34a", "#ec4899", "#2563eb", "#0d9488"];
    return colors[index % colors.length];
  };

  return (
    <section id="projects" className="py-16 relative overflow-hidden bg-[#f0f0f0]">
      {/* Schematic Background */}
      <div className="absolute inset-0 schematic-dots" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - More compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-1 w-8 bg-black" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/60">
              04 // Portfolio
            </span>
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold">
            Project <span className="bg-[#ff6b35] px-2 border-2 border-black">&</span> Research
          </h2>
        </motion.div>

        {/* Tensor Grid - More compact */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3">
          {orderedProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 4, y: 4 }}
              className={`relative bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none transition-all ${getGridSpan(index)}`}
            >
              {/* Compact Header */}
              <div 
                className="h-8 border-b-2 border-black flex items-center justify-between px-3"
                style={{ background: getAccentColor(index) }}
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white mix-blend-difference">
                  T_{String(index).padStart(2, "0")}
                </span>
                
                {project.platform && project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2 py-0.5 bg-white border border-black font-mono text-[10px] font-bold hover:bg-[#fbbf24] transition-colors"
                  >
                    <span>{project.platform}</span>
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : project.platform ? (
                  <span className="font-mono text-[10px] px-1.5 py-0.5 bg-white/80 border border-black">
                    {project.platform}
                  </span>
                ) : null}
              </div>

              {/* Content - Compact */}
              <div className="p-4">
                <h3 className="font-mono text-base font-bold mb-2 leading-tight">
                  {project.name}
                </h3>

                {/* Show ALL descriptions with bold rendering */}
                <div className="space-y-1.5 mb-3">
                  {project.description.map((desc: string, i: number) => (
                    <p key={i} className="text-sm text-black/70 leading-relaxed">
                      {renderWithBold(desc)}
                    </p>
                  ))}
                </div>

                {/* Date Badge - Smaller */}
                <span className="inline-block px-1.5 py-0.5 font-mono text-[10px] border border-black bg-[#fafaf9]">
                  {project.startDate} - {project.endDate}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <div className="h-0.5 flex-1 max-w-[60px] bg-black" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-black/40">
            End of Array
          </span>
          <div className="h-0.5 flex-1 max-w-[60px] bg-black" />
        </motion.div>
      </div>
    </section>
  );
}
