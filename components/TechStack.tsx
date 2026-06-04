"use client";

import { motion } from "framer-motion";

const techGroups = [
  {
    title: "AI / ML Core",
    color: "indigo",
    items: [
      { name: "LangChain", emoji: "🔗", level: 90 },
      { name: "LangGraph", emoji: "🕸️", level: 85 },
      { name: "RAG Pipelines", emoji: "🧠", level: 88 },
      { name: "Prompt Engineering", emoji: "✨", level: 92 },
      { name: "LLM Applications", emoji: "🤖", level: 87 },
      { name: "Groq API", emoji: "⚡", level: 83 },
    ],
  },
  {
    title: "Backend & Frameworks",
    color: "purple",
    items: [
      { name: "Python", emoji: "🐍", level: 92 },
      { name: "FastAPI", emoji: "🚀", level: 85 },
      { name: "Django", emoji: "🎸", level: 78 },
      { name: "Streamlit", emoji: "📊", level: 88 },
      { name: "Sentence Transformers", emoji: "🔢", level: 80 },
      { name: "Hugging Face", emoji: "🤗", level: 75 },
    ],
  },
  {
    title: "Frontend & Databases",
    color: "cyan",
    items: [
      { name: "Next.js", emoji: "⬛", level: 80 },
      { name: "React", emoji: "⚛️", level: 82 },
      { name: "Tailwind CSS", emoji: "🎨", level: 85 },
      { name: "ChromaDB", emoji: "🗄️", level: 88 },
      { name: "PostgreSQL", emoji: "🐘", level: 75 },
      { name: "Git / GitHub", emoji: "🐙", level: 90 },
    ],
  },
];

const colorMap = {
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "text-indigo-400",
    bar: "bg-indigo-500",
    glow: "rgba(99,102,241,",
    badge: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    bar: "bg-purple-500",
    glow: "rgba(168,85,247,",
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    bar: "bg-cyan-500",
    glow: "rgba(6,182,212,",
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  },
};

export default function TechStack() {
  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-purple-400 text-sm tracking-widest uppercase mb-4">
            Tech Stack
          </p>
          <h2 className="section-title text-white mb-4">
            Tools I <span className="text-gradient">Build With</span>
          </h2>
          <p className="font-body text-zinc-400 max-w-2xl mx-auto">
            My AI engineering toolkit — from LLM orchestration to full-stack deployment.
          </p>
        </motion.div>

        {/* Tech groups */}
        <div className="grid md:grid-cols-3 gap-6">
          {techGroups.map(({ title, color, items }, gi) => {
            const c = colorMap[color as keyof typeof colorMap];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.15, duration: 0.6 }}
                className="glass rounded-2xl p-6 glass-hover"
              >
                {/* Group title */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-medium mb-6 ${c.badge}`}>
                  {title}
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {items.map(({ name, emoji, level }, ii) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.15 + ii * 0.06 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{emoji}</span>
                          <span className="font-body text-sm font-medium text-zinc-300">
                            {name}
                          </span>
                        </div>
                        <span className={`font-mono text-xs ${c.text}`}>{level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: gi * 0.15 + ii * 0.06 + 0.3, duration: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full ${c.bar}`}
                          style={{
                            boxShadow: `0 0 8px ${c.glow}0.5)`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            "SQL", "VS Code", "IoT", "Android Studio",
            "Raspberry Pi", "Node.js", "Semantic Search", "Vector Embeddings",
            "API Integration", "Workflow Orchestration",
          ].map((tag) => (
            <span
              key={tag}
              className="glass glass-hover px-4 py-1.5 rounded-full font-mono text-xs text-zinc-400 border border-white/5 cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
