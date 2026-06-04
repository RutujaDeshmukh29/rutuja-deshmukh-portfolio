"use client";

import { motion } from "framer-motion";
import { Brain, Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Brain size={15} className="text-white" />
            </div>
            <div>
              <div className="font-display font-bold text-white">Rutuja Deshmukh</div>
              <div className="font-mono text-xs text-zinc-500">AI Engineer</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {["About", "Projects", "Experience", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="font-body text-sm text-zinc-500 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/RutujaDeshmukh29", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/rutuja-deshmukh29", label: "LinkedIn" },
              { icon: Mail, href: "mailto:deshmukhrutuja2908@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 glass rounded-xl flex items-center justify-center text-zinc-400 hover:text-white glass-hover transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-zinc-600 flex items-center gap-1.5">
            Built with <Heart size={11} className="text-red-500" /> by Rutuja Deshmukh
            &nbsp;·&nbsp; © {new Date().getFullYear()}
          </p>
          <p className="font-mono text-xs text-zinc-600">
            Next.js 15 · TypeScript · Tailwind · Framer Motion
          </p>
          <button
            onClick={scrollTop}
            className="glass glass-hover rounded-xl p-2 text-zinc-500 hover:text-white transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
