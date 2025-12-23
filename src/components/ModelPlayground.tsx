"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/data/config";

interface InferenceResult {
  category: string;
  confidence: number;
  description: string;
}

const predefinedQueries = [
  "What are Fandi's main skills?",
  "Tell me about LLM experience",
  "What projects has Fandi worked on?",
  "What is Fandi's educational background?",
];

const generateMockResponse = (query: string): InferenceResult[] => {
  const lowerQuery = query.toLowerCase();
  const { skills, workExperience, projects, education } = RESUME_DATA;

  if (
    lowerQuery.includes("skill") ||
    lowerQuery.includes("tech") ||
    lowerQuery.includes("know")
  ) {
    // Custom confidence scores: Languages & Tools, Frameworks, ML Focus, Cloud & Infra
    const skillConfidences = [0.90, 0.85, 0.95, 0.85];
    return skills
      .slice(0, 4)
      .map((category, i) => ({
        category: category.category,
        confidence: skillConfidences[i] ?? 0.85,
        description: category.skills.slice(0, 3).join(", "),
      }))
      .sort((a, b) => b.confidence - a.confidence);
  }

  if (
    lowerQuery.includes("llm") ||
    lowerQuery.includes("language model") ||
    lowerQuery.includes("ai")
  ) {
    return [
      {
        category: "LLM Expertise",
        confidence: 0.97,
        description: "RAG, LangGraph, LangChain, Fine-tuning",
      },
      {
        category: "Current Role",
        confidence: 0.94,
        description: workExperience[0].highlights[1].slice(0, 80) + "...",
      },
      {
        category: "Research",
        confidence: 0.89,
        description: "MODELS 2023 - LLM Taxonomy Generation Paper",
      },
    ];
  }

  if (lowerQuery.includes("project") || lowerQuery.includes("work")) {
    return projects.slice(0, 4).map((project, i) => ({
      category: project.name,
      confidence: 0.92 - i * 0.03,
      description: project.description[0].slice(0, 60) + "...",
    }));
  }

  if (
    lowerQuery.includes("education") ||
    lowerQuery.includes("school") ||
    lowerQuery.includes("degree")
  ) {
    return education.map((edu, i) => ({
      category: edu.degree,
      confidence: 0.96 - i * 0.02,
      description: `${edu.institution} | GPA: ${edu.gpa}`,
    }));
  }

  // Default response
  return [
    {
      category: "Professional Summary",
      confidence: 0.91,
      description: RESUME_DATA.personal.highlight.slice(0, 80) + "...",
    },
    {
      category: "Top Skills",
      confidence: 0.88,
      description: skills[0].skills.slice(0, 4).join(", "),
    },
    {
      category: "Latest Position",
      confidence: 0.85,
      description: `${workExperience[0].title} @ ${workExperience[0].company}`,
    },
  ];
};

export default function ModelPlayground() {
  const [query, setQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<InferenceResult[] | null>(null);
  const [showOutput, setShowOutput] = useState(false);
  const [processingStage, setProcessingStage] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  const processingStages = [
    "Tokenizing input...",
    "Encoding embeddings...",
    "Running inference...",
    "Computing attention weights...",
    "Generating response...",
  ];

  const handleSubmit = async () => {
    if (!query.trim() || isProcessing) return;

    setIsProcessing(true);
    setShowOutput(true);
    setResults(null);
    setProcessingStage(0);

    // Simulate processing stages
    for (let i = 0; i < processingStages.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setProcessingStage(i + 1);
    }

    // Generate mock results
    const mockResults = generateMockResponse(query);
    setResults(mockResults);
    setIsProcessing(false);
  };

  useEffect(() => {
    if (terminalRef.current && showOutput) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [processingStage, results, showOutput]);

  return (
    <section id="playground" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 neural-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neural-violet/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-neural-cyan/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-neural-violet/10 border border-neural-violet/20 text-neural-violet text-sm font-medium mb-4">
            Beta Version
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Talk to <span className="gradient-text">Digital Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
           Ask questions about my skills, projects, and experience. 	ฅ(^•ﻌ•^ฅ)
           <br /> Please Note: This is a simulated feature, not a real model. I made it for fun.
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="terminal-window shadow-2xl shadow-neural-cyan/10"
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-4 text-sm text-slate-400 font-mono">
              fandi-inference-engine v2.0
            </span>
            <div className="ml-auto flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-neural-cyan animate-pulse" />
              <span>Model loaded</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6">
            {/* Input Area */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                <span className="text-neural-cyan">$</span>
                <span>Enter your query:</span>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="Ask about skills, projects, or experience..."
                  className="flex-1 bg-abyss-800/50 border border-abyss-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-neural-cyan/50 focus:ring-1 focus:ring-neural-cyan/30 transition-all font-mono text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-neural-cyan to-neural-teal text-abyss-950 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Running
                    </span>
                  ) : (
                    "Infer"
                  )}
                </motion.button>
              </div>
            </div>

            {/* Quick Queries */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs text-slate-500">Try:</span>
              {predefinedQueries.map((q) => (
                <button
                  key={q}
                  onClick={() => setQuery(q)}
                  className="text-xs px-3 py-1 rounded-full bg-abyss-700/50 text-slate-400 hover:text-neural-cyan hover:bg-abyss-700 transition-all"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Output Area */}
            <AnimatePresence>
              {showOutput && (
                <motion.div
                  ref={terminalRef}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-abyss-900/50 rounded-lg p-4 font-mono text-sm overflow-auto max-h-96"
                >
                  {/* Processing Stages */}
                  {processingStages.slice(0, processingStage).map((stage, i) => (
                    <motion.div
                      key={stage}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 mb-2"
                    >
                      <span className="text-neural-cyan">▸</span>
                      <span className="text-slate-400">{stage}</span>
                      <span className="text-neural-emerald ml-auto">✓</span>
                    </motion.div>
                  ))}

                  {/* Currently Processing */}
                  {isProcessing &&
                    processingStage < processingStages.length && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-neural-cyan">▸</span>
                        <span className="text-slate-300">
                          {processingStages[processingStage]}
                        </span>
                        <span className="typing-cursor" />
                      </div>
                    )}

                  {/* Results */}
                  {results && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mt-4 pt-4 border-t border-abyss-700"
                    >
                      <div className="text-neural-cyan mb-3">
                        ═══ Inference Results ═══
                      </div>
                      <div className="space-y-4">
                        {results.map((result, i) => (
                          <motion.div
                            key={result.category}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-abyss-800/50 rounded-lg p-4 border border-abyss-700/50"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-slate-200 font-semibold">
                                {result.category}
                              </span>
                              <span
                                className={`text-xs px-2 py-1 rounded ${
                                  result.confidence > 0.9
                                    ? "bg-neural-emerald/20 text-neural-emerald"
                                    : result.confidence > 0.8
                                    ? "bg-neural-cyan/20 text-neural-cyan"
                                    : "bg-neural-violet/20 text-neural-violet"
                                }`}
                              >
                                {(result.confidence * 100).toFixed(1)}%
                                confidence
                              </span>
                            </div>
                            {/* Confidence Bar */}
                            <div className="w-full h-1 bg-abyss-700 rounded-full mb-2 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${result.confidence * 100}%` }}
                                transition={{ duration: 0.8, delay: i * 0.15 }}
                                className="h-full bg-gradient-to-r from-neural-cyan to-neural-teal rounded-full"
                              />
                            </div>
                            <p className="text-slate-400 text-sm">
                              {result.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Model Stats */}
                      <div className="mt-4 pt-4 border-t border-abyss-700 flex flex-wrap gap-4 text-xs text-slate-500">
                        <span>
                          Latency:{" "}
                          <span className="text-neural-cyan">
                            {(Math.random() * 100 + 50).toFixed(0)}ms
                          </span>
                        </span>
                        <span>
                          Tokens:{" "}
                          <span className="text-neural-cyan">
                            {Math.floor(Math.random() * 50 + 20)}
                          </span>
                        </span>
                        <span>
                          Model:{" "}
                          <span className="text-neural-cyan">
                            fandi-embeddings-v2
                          </span>
                        </span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

