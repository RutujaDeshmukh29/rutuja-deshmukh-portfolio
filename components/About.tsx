"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Layers,
  Workflow,
  Database,
  BookOpen,
  Code2,
  Zap,
  Globe,
} from "lucide-react";
import GlowCard from "./ui/GlowCard";

const specializations = [
  { icon: Bot, label: "Generative AI", desc: "LLM-powered applications & conversational AI systems", color: "text-indigo-400" },
  { icon: Layers, label: "RAG Pipelines", desc: "Hybrid retrieval systems with semantic search & ChromaDB", color: "text-purple-400" },
  { icon: Workflow, label: "Multi-Agent Systems", desc: "LangGraph workflows with collaborative AI agents", color: "text-cyan-400" },
  { icon: Database, label: "Vector Databases", desc: "Semantic embeddings & contextual memory systems", color: "text-pink-400" },
];

const stats = [
  { value: "3+", label: "AI Projects Deployed", icon: Zap },
  { value: "6+", label: "Tech Stack Tools", icon: Code2 },
  { value: "89.59%", label: "AIML Diploma Score", icon: BookOpen },
  { value: "1", label: "Research Publication", icon: Globe },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Bg orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-indigo-400 text-sm tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="section-title text-white mb-6">
            Building AI Systems
            <br />
            <span className="text-gradient">That Actually Work</span>
          </h2>
          <p className="font-body text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I&apos;m Rutuja — an aspiring AI Engineer from Nashik, India. Fresh from a
            Diploma in AI & ML with{" "}
            <span className="text-white font-medium">89.59%</span>, I specialize in
            architecting intelligent systems that combine{" "}
            <span className="text-indigo-400 font-medium">RAG pipelines</span>,{" "}
            <span className="text-purple-400 font-medium">multi-agent orchestration</span>,
            and{" "}
            <span className="text-cyan-400 font-medium">LangGraph workflows</span> into
            production-quality applications. I don&apos;t just learn AI — I build with it.
          </p>
        </motion.div>

        {/* Specializations grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {specializations.map(({ icon: Icon, label, desc, color }, i) => (
            <GlowCard key={label} delay={i * 0.1} className="p-6 glass-hover">
              <div className={`w-12 h-12 rounded-xl glass flex items-center justify-center mb-4 ${color} bg-current/5`}>
                <Icon size={22} className={color} />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">{label}</h3>
              <p className="font-body text-zinc-500 text-sm leading-relaxed">{desc}</p>
            </GlowCard>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass glass-hover rounded-2xl p-6 text-center"
            >
              <Icon size={20} className="text-indigo-400 mx-auto mb-3" />
              <div className="font-display text-3xl font-bold text-gradient mb-1">
                {value}
              </div>
              <div className="font-body text-sm text-zinc-500">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
