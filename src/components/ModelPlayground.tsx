"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/config";

// Suggested questions for users (examples only)
const SUGGESTED_QUESTIONS = [
  { query: "Who is Fandi?", label: "whoami" },
  { query: "What are Fandi's LLM experiences?", label: "llm" },
  { query: "What are Fandi's project experiences?", label: "projects" },
  { query: "What is Fandi's education background?", label: "education" },
  { query: "What are Fandi's skills?", label: "skills" },
  { query: "What is Fandi's favorite food?", label: "food" },
];

// Processing stages for the "inference" effect
const PROCESSING_STAGES = [
  "Tokenizing input...",
  "Loading embeddings...",
  "Running inference...",
  "Computing attention weights...",
  "Generating response...",
];

export default function ModelPlayground() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "user" | "bot" | "system"; text: string }[]>([
    { type: "system", text: "FANDI_INFERENCE_ENGINE V2.0 initialized..." },
    { type: "system", text: "Model loaded fandi-fancy-embeddings-v2 | Ready for inference" },
    { type: "bot", text: "Hello! Ask me anything about Fandi. Try the suggestions below or type your own question." },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStage, setCurrentStage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { personal, education, skills, workExperience, projects } = RESUME_DATA;

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isTyping, currentStage]);

  // Generate response based on query
  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    // Clear command
    if (lowerQuery.includes("clear")) {
      return "__CLEAR__";
    }

    // Who is Fandi / whoami
    if (lowerQuery.includes("who") || lowerQuery.includes("whoami") || lowerQuery.includes("about")) {
      return `${personal.name} — Senior ML Engineer at RBC, McGill Alum, and LLM specialist. 6+ years of experience building production ML systems, from model design to deployment. Currently leading a team developing agentic RAG chatbots that streamline enterprise operations.`;
    }

    // LLM experiences
    if (lowerQuery.includes("llm") || lowerQuery.includes("language model") || lowerQuery.includes("agent")) {
      const llmSkills = skills.find(s => s.category === "ML Focus")?.skills.join(", ") || "";
      const frameworks = skills.find(s => s.category === "Frameworks")?.skills.join(", ") || "";
      return `LLM Expertise: ${llmSkills}\nFrameworks: ${frameworks}\n\nAt RBC, I lead development of agentic RAG-based chatbots using FastMCP, LangGraph, and LangFuse — projected 30% reduction in operational time for the enterprise change management team.`;
    }

    // Projects - with clean summaries
    if (lowerQuery.includes("project")) {
      const projectSummaries: Record<string, string> = {
        "MODELS Conference 2023": "Co-first author on LLM taxonomy paper comparing prompting vs fine-tuning methods",
        "LLM Framework – Sherpa": "Open-source contributor building search refinement and chain-of-action tools",
        "Dream Journal App": "Full-stack iOS app built with Cursor IDE, deployed to Apple App Store",
        "Stock Signal Bot": "Real-time Discord bot for stock alerts using MACD/RSI analytics",
      };
      const projectList = projects.slice(0, 4).map(p => {
        const summary = projectSummaries[p.name] || p.description[0]?.replace(/\*\*/g, '').slice(0, 60);
        return `• ${p.name}: ${summary}`;
      }).join("\n");
      return `Featured Projects:\n${projectList}`;
    }

    // Education
    if (lowerQuery.includes("education") || lowerQuery.includes("school") || lowerQuery.includes("degree") || lowerQuery.includes("university")) {
      const eduDetails = education.map(e => {
        const honors = e.honors ? ` | ${e.honors}` : "";
        return `• ${e.degree} @ ${e.institution}\n  GPA: ${e.gpa}${honors}\n  Key Courses: ${e.courses.slice(0, 3).join(", ")}`;
      }).join("\n\n");
      return `Education Background:\n${eduDetails}`;
    }

    // Skills / Tech Stack
    if (lowerQuery.includes("skill") || lowerQuery.includes("tech") || lowerQuery.includes("stack")) {
      const skillList = skills.map(s => `• ${s.category}: ${s.skills.join(", ")}`).join("\n");
      return `Technical Skills:\n${skillList}`;
    }

    // Work Experience
    if (lowerQuery.includes("experience") || lowerQuery.includes("work") || lowerQuery.includes("job") || lowerQuery.includes("company")) {
      const workSummaries: Record<string, string> = {
        "RBC": "Leading 5-member team on agentic RAG chatbots, deployed 4 enterprise ML models",
        "CIBC": "Built NLP entity linking APIs and large-scale contract document search",
        "Alibaba Group": "Analyzed OKR data (10M+ records) with Neo4j graph database",
        "McGill University": "NLP research on Twitter sentiment analysis with BERT classifiers",
      };
      const expList = workExperience.slice(0, 4).map(w => {
        const summary = workSummaries[w.company] || w.highlights[0]?.replace(/\*\*/g, '').slice(0, 50);
        return `• ${w.title} @ ${w.company} (${w.startDate} - ${w.endDate})\n  ${summary}`;
      }).join("\n\n");
      return `Work Experience:\n${expList}`;
    }

    // Fun questions
    if (lowerQuery.includes("food") || lowerQuery.includes("eat") || lowerQuery.includes("favorite")) {
      return "🍗 Fried chicken! Specifically Korean fried chicken with yangnyeom sauce. Also a big fan of bubble tea (hence my GitHub username @Bubbletea98).";
    }

    if (lowerQuery.includes("hobby") || lowerQuery.includes("fun") || lowerQuery.includes("free time")) {
      return "When not coding, I enjoy exploring new ML frameworks at 2am ☕, contributing to open-source projects like Sherpa, and occasionally building side projects like my Dream Journal App.";
    }

    if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("reach")) {
      return `📧 Email: ${personal.email}\n🔗 LinkedIn: ${personal.linkedin}\n💻 GitHub: ${personal.github}`;
    }

    // Default response
    return `I can answer questions about Fandi's skills, LLM experience, projects, education, work history, and even favorite food! Try asking something specific.`;
  };

  const handleCommand = async (queryText: string) => {
    const cleanQuery = queryText.trim();
    if (!cleanQuery || isTyping) return;

    // Add user message to history
    setHistory(prev => [...prev, { type: "user", text: cleanQuery }]);
    setInput("");
    setIsTyping(true);

    // Check for clear command early
    if (cleanQuery.toLowerCase().includes("clear")) {
      setTimeout(() => {
        setHistory([
          { type: "system", text: "Terminal cleared." },
          { type: "bot", text: "Ready for new queries!" },
        ]);
        setIsTyping(false);
        setCurrentStage("");
      }, 300);
      return;
    }

    // Simulate processing stages
    for (let i = 0; i < PROCESSING_STAGES.length; i++) {
      setCurrentStage(PROCESSING_STAGES[i]);
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    // Generate and add response
    const response = generateResponse(cleanQuery);
    setHistory(prev => [...prev, { type: "bot", text: response }]);
    setIsTyping(false);
    setCurrentStage("");
  };

  return (
    <section id="playground" className="py-16 relative overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 schematic-grid" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-1 w-8 bg-black" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/60">
              01 // Interactive
            </span>
            <div className="h-1 w-8 bg-black" />
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-3 flex-wrap">
            <span>Talk to <span className="bg-[#0d9488] text-white px-2 border-2 border-black">Digital Me</span></span>
            <span className="px-2 py-0.5 text-xs font-bold uppercase bg-[#fbbf24] border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">Beta</span>
          </h2>
          <p className="text-sm text-black/60 max-w-md mx-auto">
            Please note, this is a simulation of an LLM inference engine. I just made it for fun, not a real LLM. ฅ(^•ﻌ•^ฅ)
          </p>
        </motion.div>

        {/* Suggestion Chips - Above terminal for visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="text-sm font-mono font-bold uppercase tracking-wider text-center mb-3">
            <span className="bg-[#CCFF00] px-2 py-1 border-2 border-black">Suggested Questions</span>
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q.label}
                onClick={() => handleCommand(q.query)}
                disabled={isTyping}
                className="bg-white border-2 border-black px-3 py-1.5 font-mono text-xs font-bold shadow-[3px_3px_0px_0px_#000] hover:bg-[#CCFF00] hover:-translate-y-0.5 hover:shadow-[3px_5px_0px_0px_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {q.query}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full font-mono"
        >
          <div className="bg-black border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col h-[500px]">
            
            {/* Header bar */}
            <div className="bg-[#E0E0E0] border-b-4 border-black p-3 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-black" />
                <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-black">fandi-inference-v2.0</span>
              <button
                onClick={() => handleCommand("clear")}
                className="px-2 py-0.5 text-xs font-bold uppercase bg-white border-2 border-black shadow-[2px_2px_0_0_#000] hover:bg-red-100 active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
              >
                Clear
              </button>
            </div>

            {/* Output Area */}
            <div 
              ref={scrollRef}
              className="flex-1 p-6 overflow-y-auto space-y-3"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#333 #000" }}
            >
              {history.map((entry, i) => (
                <div 
                  key={i} 
                  className={`flex ${
                    entry.type === "user" 
                      ? "text-white" 
                      : entry.type === "system" 
                      ? "text-[#FFBF00]" 
                      : "text-[#00FF41]"
                  }`}
                >
                  <span className="mr-2 flex-shrink-0">
                    {entry.type === "user" ? "λ" : entry.type === "system" ? "[*]" : ">>"}
                  </span>
                  <p className="leading-relaxed whitespace-pre-wrap">{entry.text}</p>
                </div>
              ))}
              
              {/* Processing stages */}
              {isTyping && currentStage && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-[#FFBF00] flex items-center gap-2"
                >
                  <span className="animate-pulse">[*]</span>
                  <span>{currentStage}</span>
                </motion.div>
              )}
            </div>

            {/* Input Line */}
            <div className="p-4 bg-[#1A1A1A] border-t-4 border-black flex items-center gap-2">
              <label htmlFor="terminal-input" className="text-[#FF5F1F] font-bold flex-shrink-0">
                fandi@inference:~$
              </label>
              <input
                id="terminal-input"
                ref={inputRef}
                type="text"
                autoFocus
                className="flex-1 bg-transparent outline-none text-white caret-[#FF5F1F] min-w-0"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCommand(input)}
                placeholder="Ask me anything..."
                disabled={isTyping}
              />
              <button 
                onClick={() => handleCommand(input)}
                disabled={isTyping || !input.trim()}
                className="bg-[#FF5F1F] text-black px-4 py-1 font-bold border-2 border-black shadow-[2px_2px_0px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                {isTyping ? "..." : "RUN"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
