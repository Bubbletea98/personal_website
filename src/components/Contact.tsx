"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/config";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function Contact() {
  const { personal } = RESUME_DATA;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#f0f0f0]">
      {/* Schematic Background */}
      <div className="absolute inset-0 schematic-dots opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-1 w-12 bg-black" />
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-black/60">
              05 // Connect
            </span>
            <div className="h-1 w-12 bg-black" />
          </div>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-[#fbbf24] px-2 border-2 border-black">Touch</span>
          </h2>
          <p className="font-mono text-black/60 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Let&apos;s talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              <h3 className="font-mono text-xl font-bold uppercase mb-6 flex items-center gap-2">
                <span className="w-3 h-3 bg-[#ff6b35]" />
                Contact Details
              </h3>
              
              <div className="space-y-4">
                <div
                  className="flex items-center gap-4 p-4 border-2 border-black bg-[#fafaf9]"
                >
                  <div className="w-12 h-12 bg-[#0d9488] border-2 border-black flex items-center justify-center text-white">
                    {/* Email Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase text-black/50">Email</div>
                    <div className="font-mono font-bold">
                      {/* Masked email to prevent spam */}
                      {personal.email.replace("@", " [at] ").replace(/\./g, " • ")}
                    </div>
                  </div>
                </div>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 border-black hover:bg-[#fbbf24] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#0077b5] border-2 border-black flex items-center justify-center text-white">
                    {/* LinkedIn Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase text-black/50">LinkedIn</div>
                    <div className="font-mono font-bold group-hover:underline">Connect with me</div>
                  </div>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 border-black hover:bg-[#fbbf24] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#1a1a1a] border-2 border-black flex items-center justify-center text-white">
                    {/* GitHub Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase text-black/50">GitHub</div>
                    <div className="font-mono font-bold group-hover:underline">View my code</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 border-2 border-black bg-[#fafaf9]">
                  <div className="w-12 h-12 bg-[#ff6b35] border-2 border-black flex items-center justify-center text-white">
                    {/* Location Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase text-black/50">Location</div>
                    <div className="font-mono font-bold">{personal.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            {/* <div className="bg-[#27ca40] border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-white border-2 border-black animate-pulse" />
                <span className="font-mono font-bold uppercase">Currently Available</span>
              </div>
              <p className="font-mono text-sm mt-2 text-black/70">
                Open to full-time opportunities and interesting collaborations
              </p>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
            >
              <h3 className="font-mono text-xl font-bold uppercase mb-6 flex items-center gap-2">
                <span className="w-3 h-3 bg-[#0d9488]" />
                Send a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-black/60 block mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-mono border-3 border-black focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] focus:translate-x-[-4px] focus:translate-y-[-4px] transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-black/60 block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-mono border-3 border-black focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] focus:translate-x-[-4px] focus:translate-y-[-4px] transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-black/60 block mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-mono border-3 border-black focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] focus:translate-x-[-4px] focus:translate-y-[-4px] transition-all outline-none"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-black/60 block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 font-mono border-3 border-black focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] focus:translate-x-[-4px] focus:translate-y-[-4px] transition-all outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Status Message */}
                {status.type !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 font-mono text-sm border-2 border-black ${
                      status.type === "success"
                        ? "bg-[#27ca40]"
                        : status.type === "error"
                        ? "bg-[#ef4444] text-white"
                        : "bg-[#fbbf24]"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status.type === "loading"}
                  whileHover={{ x: 6, y: 6 }}
                  className="w-full py-4 font-mono font-bold uppercase tracking-wider bg-[#ff6b35] border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
