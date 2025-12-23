"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/config";

// Map project names to tech stacks (inferred from descriptions)
const projectTechStacks: Record<string, string[]> = {
  "Dream Journal App": ["React Native", "Expo", "Supabase", "TypeScript"],
  "LLM Framework – Sherpa": ["Python", "LangChain", "LLMs", "Agents"],
  "MODELS Conference 2023": ["Python", "PyTorch", "NLP", "Fine-tuning"],
  "Stock Signal Bot": ["Python", "Discord.py", "Heroku", "MACD/RSI"],
  "Advanced AI Analytics for Airbnb Hosts": [
    "Python",
    "Docker",
    "Kubernetes",
    "MLflow",
  ],
  "Continuous Testing And Validation of Jamscript": [
    "C",
    "JavaScript",
    "Travis CI",
    "IoT",
  ],
  "Face Recognition and Tagging": ["Python", "Sklearn", "PCA", "OpenCV"],
  "McGill Rocket Club": ["CAD", "Propulsion", "Aero-Structure"],
};

// Map for icons based on project type
const getProjectIcon = (name: string) => {
  if (name.includes("Dream")) return "📱";
  if (name.includes("Sherpa") || name.includes("LLM")) return "🤖";
  if (name.includes("MODELS") || name.includes("Conference")) return "📄";
  if (name.includes("Stock") || name.includes("Bot")) return "📈";
  if (name.includes("Airbnb")) return "🏠";
  if (name.includes("Jamscript") || name.includes("Testing")) return "🔧";
  if (name.includes("Face") || name.includes("Recognition")) return "👤";
  if (name.includes("Rocket")) return "🚀";
  return "💡";
};

// Define grid spans for bento layout (10-column grid for precise ratios)
// Row 1: MODELS (5) + Sherpa (5) = equal size
// Row 2: Dream Journal (6) + Stock Signal (4) = 6:4 ratio
const getGridSpan = (index: number): string => {
  const spans = [
    "md:col-span-5 md:row-span-1", // 0: MODELS Conference - Half of row 1
    "md:col-span-5 md:row-span-1", // 1: Sherpa - Half of row 1 (equal with MODELS)
    "md:col-span-6 md:row-span-1", // 2: Dream Journal - 6/10 of row 2
    "md:col-span-4 md:row-span-1", // 3: Stock Signal Bot - 4/10 of row 2
    "md:col-span-5 md:row-span-1", // 4: Airbnb - Half
    "md:col-span-5 md:row-span-1", // 5: Jamscript - Half
    "md:col-span-5 md:row-span-1", // 6: Face Recognition - Half
    "md:col-span-5 md:row-span-1", // 7: Rocket Club - Half
  ];
  return spans[index % spans.length];
};

export default function BentoProjects() {
  const projects = RESUME_DATA.projects;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 neural-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neural-teal/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/2 left-0 w-64 h-64 bg-neural-cyan/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-neural-teal/10 border border-neural-teal/20 text-neural-teal text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of projects spanning ML research, open-source
            contributions, and production systems.
          </p>
        </motion.div>

        {/* Bento Grid - 10 columns for precise sizing */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative glass-card rounded-2xl overflow-hidden ${getGridSpan(
                index
              )}`}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neural-cyan/20 via-neural-teal/10 to-neural-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card content */}
              <div className="relative h-full p-6 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.span
                    className="text-3xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {getProjectIcon(project.name)}
                  </motion.span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-mono">
                      {project.startDate} → {project.endDate}
                    </span>
                    {project.platform && project.link ? (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-neural-cyan/10 border border-neural-cyan/30 text-neural-cyan hover:bg-neural-cyan/20 hover:border-neural-cyan/50 transition-all"
                      >
                        {project.platform}
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </motion.a>
                    ) : project.platform ? (
                      <span className="text-xs px-2 py-1 rounded bg-abyss-700/50 text-slate-400">
                        {project.platform}
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-neural-cyan transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <div className="flex-1">
                  {project.description.map((desc, i) => (
                    <p
                      key={i}
                      className="text-slate-400 text-sm leading-relaxed mb-2"
                    >
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-abyss-700/50">
                  {(projectTechStacks[project.name] || ["Tech"]).map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="tech-badge"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -inset-px bg-gradient-to-r from-neural-cyan/10 via-transparent to-neural-teal/10 rounded-2xl" />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-neural-cyan/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neural-cyan/30 text-neural-cyan hover:bg-neural-cyan/10 hover:border-neural-cyan/60 transition-all"
          >
            <span>View All on GitHub</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

