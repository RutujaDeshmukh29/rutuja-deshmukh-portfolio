"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  ArrowDown,
  Download,
  Sparkles,
  Cpu,
  Network,
  BrainCircuit,
  ChevronRight,
} from "lucide-react";

const typingWords = [
  "Generative AI Engineer",
  "RAG Pipeline Builder",
  "Multi-Agent Architect",
  "LLM Application Dev",
  "AI Workflow Engineer",
];

const floatingIcons = [
  { icon: BrainCircuit, x: "10%", y: "20%", delay: 0, size: 28 },
  { icon: Network, x: "85%", y: "15%", delay: 0.5, size: 24 },
  { icon: Cpu, x: "80%", y: "70%", delay: 1, size: 26 },
  { icon: Sparkles, x: "12%", y: "75%", delay: 1.5, size: 22 },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const word = typingWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < word.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((w) => (w + 1) % typingWords.length);
    }

    setDisplayed(word.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-cyan-600/5 blur-[120px]" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Floating tech icons */}
      {floatingIcons.map(({ icon: Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-14 h-14 glass rounded-2xl"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0.5],
            y: [0, -15, 0],
            scale: 1,
          }}
          transition={{
            opacity: { duration: 1, delay },
            y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay },
            scale: { duration: 0.5, delay },
          }}
        >
          <Icon size={size} className="text-indigo-400/70" />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 border border-indigo-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-mono text-zinc-300 tracking-wide">
            Open to AI Engineering Roles
          </span>
        </motion.div>

        <Image
          src="/profile.jpg"
          alt="Rutuja Deshmukh"
          width={120}
          height={120}
          className="rounded-full border-2 border-indigo-500/30 mx-auto mb-6"
        />

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-mono text-indigo-400 text-base mb-4 tracking-widest"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-6 leading-[1.05]"
        >
          <span className="text-white">Rutuja</span>
          <br />
          <span className="text-gradient">Deshmukh</span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-10 mb-6 flex items-center justify-center gap-1"
        >
          <span className="font-display text-xl sm:text-2xl font-semibold text-zinc-300">
            {displayed}
          </span>
          <span className="typing-cursor font-display text-xl sm:text-2xl text-indigo-400 font-light">
            |
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-body text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build intelligent AI systems using{" "}
          <span className="text-indigo-400 font-medium">RAG architectures</span>,{" "}
          <span className="text-purple-400 font-medium">LangGraph workflows</span>, and{" "}
          <span className="text-cyan-400 font-medium">multi-agent orchestration</span>.
          Turning cutting-edge AI research into production-ready applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <a href="#projects" className="btn-primary flex items-center gap-2">
            View Projects
            <ChevronRight size={16} />
          </a>
          <a
            href="https://github.com/RutujaDeshmukh29"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center gap-2"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="/Rutuja_Deshmukh_Resume.pdf"
            download
            className="btn-ghost flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </a>
          <a href="#contact" className="btn-ghost flex items-center gap-2">
            <Linkedin size={16} />
            Let&apos;s Connect
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
        >
          {[
            { value: "6+", label: "AI Projects" },
            { value: "91.65%", label: "Diploma AIML" },
            { value: "RAG", label: "Architecture" },
            { value: "1", label: "Published Paper" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-2xl font-bold text-gradient">{value}</div>
              <div className="font-body text-xs text-zinc-500 mt-0.5 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} className="text-zinc-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
