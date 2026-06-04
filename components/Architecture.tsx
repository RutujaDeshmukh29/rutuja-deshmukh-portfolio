"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Search, Layers, Bot, Network, Workflow, GitBranch, MemoryStick } from "lucide-react";

const architectures = [
  {
    title: "RAG Pipeline",
    subtitle: "Retrieval-Augmented Generation",
    color: "indigo",
    steps: [
      { icon: Database, label: "Document Ingest", desc: "PDFs, text, data sources" },
      { icon: Search, label: "Semantic Search", desc: "Vector embeddings + ChromaDB" },
      { icon: Layers, label: "Context Retrieval", desc: "Top-k semantic chunks" },
      { icon: Bot, label: "LLM Response", desc: "Groq API + context" },
    ],
  },
  {
    title: "Multi-Agent System",
    subtitle: "LangGraph Orchestration",
    color: "purple",
    steps: [
      { icon: Network, label: "Router Agent", desc: "Intelligent task routing" },
      { icon: Bot, label: "Specialist Agents", desc: "Research, Code, Plan, Critique" },
      { icon: MemoryStick, label: "Memory Manager", desc: "Persistent PostgreSQL state" },
      { icon: Workflow, label: "Output Synthesis", desc: "Unified response delivery" },
    ],
  },
  {
    title: "Semantic Retrieval",
    subtitle: "Vector Search Workflow",
    color: "cyan",
    steps: [
      { icon: Database, label: "Chunk & Embed", desc: "Sentence Transformers" },
      { icon: GitBranch, label: "Hybrid Search", desc: "Dense + sparse retrieval" },
      { icon: Layers, label: "Re-ranking", desc: "Relevance scoring" },
      { icon: Bot, label: "Grounded Answer", desc: "Source-cited response" },
    ],
  },
];

const colorMap: Record<string, {
  text: string; border: string; bg: string;
  stepBg: string; arrow: string; iconBg: string;
}> = {
  indigo: {
    text: "text-indigo-400", border: "border-indigo-500/30",
    bg: "bg-indigo-500/5", stepBg: "bg-indigo-500/10",
    arrow: "text-indigo-500/40", iconBg: "bg-indigo-500/20",
  },
  purple: {
    text: "text-purple-400", border: "border-purple-500/30",
    bg: "bg-purple-500/5", stepBg: "bg-purple-500/10",
    arrow: "text-purple-500/40", iconBg: "bg-purple-500/20",
  },
  cyan: {
    text: "text-cyan-400", border: "border-cyan-500/30",
    bg: "bg-cyan-500/5", stepBg: "bg-cyan-500/10",
    arrow: "text-cyan-500/40", iconBg: "bg-cyan-500/20",
  },
};

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent pointer-events-none" />

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
            AI Architecture
          </p>
          <h2 className="section-title text-white mb-4">
            Systems I <span className="text-gradient">Design</span>
          </h2>
          <p className="font-body text-zinc-400 max-w-2xl mx-auto">
            A look at the AI architectures powering my projects — from RAG pipelines to
            multi-agent orchestration graphs.
          </p>
        </motion.div>

        {/* Architecture cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {architectures.map(({ title, subtitle, color, steps }, gi) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.15, duration: 0.6 }}
                className={`glass glass-hover rounded-2xl p-6 border ${c.border}`}
              >
                {/* Title */}
                <div className="mb-6">
                  <div className={`text-xs font-mono ${c.text} uppercase tracking-widest mb-1`}>
                    {subtitle}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                </div>

                {/* Steps with arrows */}
                <div className="space-y-1">
                  {steps.map(({ icon: Icon, label, desc }, si) => (
                    <div key={label}>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: gi * 0.15 + si * 0.08 }}
                        className={`flex items-center gap-3 p-3 rounded-xl ${c.stepBg}`}
                      >
                        <div className={`w-8 h-8 rounded-lg ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={14} className={c.text} />
                        </div>
                        <div>
                          <div className="font-display text-xs font-semibold text-white">
                            {label}
                          </div>
                          <div className="font-body text-[11px] text-zinc-500">{desc}</div>
                        </div>
                      </motion.div>
                      {si < steps.length - 1 && (
                        <div className={`flex justify-center my-0.5 ${c.arrow}`}>
                          <ArrowRight size={14} className="rotate-90" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Step count badge */}
                <div className={`mt-4 pt-4 border-t ${c.border} flex items-center justify-between`}>
                  <span className="font-mono text-xs text-zinc-600">
                    {steps.length} pipeline stages
                  </span>
                  <span className={`text-xs font-mono ${c.text}`}>Production-ready</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
