"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/config";

export default function Footer() {
  const { personal } = RESUME_DATA;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: personal.linkedin, icon: "in" },
    { name: "GitHub", href: personal.github, icon: "GH" },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white border-t-4 border-black">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="font-mono font-bold text-2xl mb-4 flex items-center gap-2">
              <span className="bg-[#ff6b35] text-black px-2 py-1 border-2 border-white">
                {personal.name.split(" ")[0].toUpperCase()}
              </span>
              <span className="text-white/80">
                .{personal.name.split(" ")[1]?.toLowerCase() || "dev"}
              </span>
            </div>
            <p className="font-mono text-sm text-white/60 leading-relaxed">
              ML Engineer building intelligent systems that think, learn, and scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0d9488]" />
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Digital Me", href: "#playground" },
                { label: "Contact", href: "#contact" },
                { label: "Top ↑", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-sm text-white/60 hover:text-[#fbbf24] transition-colors py-1"
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#fbbf24]" />
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 3, y: 3 }}
                  className="w-12 h-12 bg-white/10 border-2 border-white/30 flex items-center justify-center font-mono font-bold text-sm hover:bg-[#ff6b35] hover:text-black hover:border-white transition-all shadow-[3px_3px_0_0_rgba(255,255,255,0.2)] hover:shadow-none"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-white/40 uppercase tracking-wider">
              © {currentYear} {personal.name}. All rights reserved.
            </div>
            
            <div className="font-mono text-xs text-white/40 flex items-center gap-4">
              <span>Built with Next.js</span>
              <span className="w-1 h-1 bg-white/40" />
              <span>Neubrutalism v2.0</span>
            </div>

            <div className="font-mono text-xs text-white/40">
              Toronto, Canada
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="h-2 bg-gradient-to-r from-[#ff6b35] via-[#fbbf24] via-[#0d9488] to-[#7c3aed]" />
    </footer>
  );
}
