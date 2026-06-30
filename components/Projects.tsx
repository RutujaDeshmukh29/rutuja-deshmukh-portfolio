"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  X,
  Star,
  Bot,
  BookOpen,
  Cpu,
  ChevronRight,
  Sparkles,
  Code2,
  Database,
  Layers,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  icon: React.ElementType;
  color: string;
  badge?: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    id: "workspace",
    title: "AI Multi-Agent Research & Engineering Workspace",
    subtitle: "Flagship Project",
    description:
      "A collaborative AI workspace where specialized agents work together to research, plan, build, and solve complex technical problems.",
    longDesc:
      "An ambitious multi-agent system designed as a full-stack AI SaaS product. Specialized agents handle research, coding assistance, planning, critique, memory management, and workflow orchestration. The system maintains persistent context using PostgreSQL and vector-based retrieval, enabling long-term, intelligent conversations.",
    tech: ["Next.js", "FastAPI", "LangGraph", "LangChain", "PostgreSQL", "Groq API"],
    features: [
      "Collaborative AI agents with specialized roles",
      "Contextual memory with PostgreSQL persistence",
      "Intelligent routing & workflow orchestration",
      "Coding assistance & planning system",
      "Research workflows with semantic retrieval",
      "Modern SaaS-style frontend with Next.js",
    ],
    github: "https://github.com/RutujaDeshmukh29/AI-Multi-Agent-Research-Engineering-Workspace.git",
    demo: "https://ai-multi-agent-workspace.vercel.app/",
    icon: Bot,
    color: "from-indigo-600 to-purple-600",
    badge: "🏆 Flagship",
    accentColor: "indigo",
  },
  {
    id: "learning",
    title: "AI Learning Companion",
    subtitle: "RAG-Powered Study Platform",
    description:
      "An intelligent study platform that turns your PDFs into interactive learning experiences using RAG, semantic search, and adaptive AI.",
    longDesc:
      "Built and deployed an AI-powered learning platform that processes PDFs into a vector knowledge base. Users can chat with their documents, get AI-generated summaries, quizzes, coding challenges, and personalized roadmaps. The hybrid RAG pipeline delivers contextually accurate responses with ChromaDB.",
    tech: ["Python", "Streamlit", "ChromaDB", "Sentence Transformers", "Groq API", "RAG"],
    features: [
      "PDF chat with semantic search & RAG",
      "AI summaries, quizzes & coding challenges",
      "Personalized learning roadmaps",
      "5 adaptive learning modes",
      "Voice interaction & analytics dashboard",
      "Weak-topic analysis & project recommendations",
    ],
    github: "https://github.com/RutujaDeshmukh29/AI-Learning-Companion-Study-Assistant",
    demo: "https://ai-learning-companion-study-assistanti.streamlit.app/",
    icon: BookOpen,
    color: "from-purple-600 to-pink-600",
    badge: "🚀 Live Demo",
    accentColor: "purple",
  },
  {
    id: "agrobot",
    title: "AgroBot — AI Autonomous Mower",
    subtitle: "IoT + AI + Research Publication",
    description:
      "An AI-powered autonomous mowing system with Raspberry Pi integration, real-time Android monitoring, and intelligent workflow automation.",
    longDesc:
      "Developed a complete autonomous agricultural system combining AI algorithms, Raspberry Pi hardware, and Android mobile control. The system features real-time mission control, intelligent path planning, and automated workflows. This project was presented at IET Expo 2026 and published in IJARCCE.",
    tech: ["Python", "Raspberry Pi", "Node.js", "Android Studio", "Java", "IoT"],
    features: [
      "Autonomous navigation & path planning",
      "Real-time Android monitoring app",
      "Raspberry Pi + Node.js communication",
      "Mission control & remote operation",
      "Research published in IJARCCE",
      "Presented at IET Expo 2026",
    ],
    github: "https://github.com/RutujaDeshmukh29/AI-Powered-Smart-Robotic-Lawn-Mower",
    demo: "https://ijarcce.com/papers/agrobot-ai-powered-smart-robotic-lawn-mower/",
    icon: Cpu,
    color: "from-cyan-600 to-teal-600",
    badge: "📄 Published",
    accentColor: "cyan",
  },
];

const accentMap: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  indigo: {
    text: "text-indigo-400",
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/10",
    glow: "shadow-indigo-500/20",
  },
  purple: {
    text: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    glow: "shadow-purple-500/20",
  },
  cyan: {
    text: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    glow: "shadow-cyan-500/20",
  },
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const c = accentMap[project.accentColor];
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl glass glass-hover text-zinc-400 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <Icon size={26} className="text-white" />
          </div>
          <div>
            <div className={`text-xs font-mono ${c.text} mb-1`}>{project.badge}</div>
            <h3 className="font-display text-xl font-bold text-white leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="font-body text-zinc-300 leading-relaxed mb-6">{project.longDesc}</p>

        <div className="mb-6">
          <h4 className="font-display font-semibold text-white mb-3 text-sm uppercase tracking-wider">
            Key Features
          </h4>
          <div className="grid sm:grid-cols-2 gap-2">
            {project.features.map((f) => (
              <div key={f} className="flex items-start gap-2">
                <ChevronRight size={14} className={`${c.text} mt-0.5 flex-shrink-0`} />
                <span className="font-body text-sm text-zinc-400">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-display font-semibold text-white mb-3 text-sm uppercase tracking-wider">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className={`px-3 py-1 rounded-lg text-xs font-mono border ${c.bg} ${c.border} ${c.text}`}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center gap-2 flex-1 justify-center text-sm py-2.5"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 flex-1 justify-center text-sm py-2.5"
            >
              <ExternalLink size={16} />
              {project.id === "agrobot" ? "View Paper" : "Live Demo"}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-4">
            Featured Projects
          </p>
          <h2 className="section-title text-white mb-4">
            AI Systems I&apos;ve <span className="text-gradient">Built</span>
          </h2>
          <p className="font-body text-zinc-400 max-w-2xl mx-auto">
            Real-world AI applications demonstrating production-grade architecture
            and engineering depth.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-6">
          {projects.map((project, i) => {
            const c = accentMap[project.accentColor];
            const Icon = project.icon;
            const isFlagship = project.id === "workspace";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`glass glass-hover rounded-3xl overflow-hidden ${
                  isFlagship ? `border ${c.border} shadow-xl ${c.glow}` : ""
                }`}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Left: color panel */}
                  <div
                    className={`relative bg-gradient-to-br ${project.color} p-8 flex flex-col justify-between min-h-[200px]`}
                  >
                    <div>
                      {project.badge && (
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-mono px-3 py-1 rounded-full mb-4">
                          {project.badge}
                        </span>
                      )}
                      <Icon size={isFlagship ? 48 : 36} className="text-white/90 mb-4" />
                      <div className="font-mono text-white/60 text-xs uppercase tracking-wider mb-1">
                        {project.subtitle}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="bg-white/20 text-white text-xs px-2 py-0.5 rounded font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="md:col-span-2 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-3 leading-tight">
                        {project.title}
                      </h3>
                      <p className="font-body text-zinc-400 text-sm leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-2 gap-1.5 mb-6">
                        {project.features.slice(0, 4).map((f) => (
                          <div key={f} className="flex items-start gap-1.5">
                            <Sparkles size={11} className={`${c.text} mt-0.5 flex-shrink-0`} />
                            <span className="font-body text-xs text-zinc-500">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setSelected(project)}
                        className={`btn-ghost text-sm py-2 px-4 flex items-center gap-2 ${c.text}`}
                      >
                        Details
                        <ChevronRight size={14} />
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost text-sm py-2 px-4 flex items-center gap-2"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
                        >
                          <ExternalLink size={14} />
                          {project.id === "agrobot" ? "Paper" : "Demo"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* More projects note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/RutujaDeshmukh29"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2 text-sm"
          >
            <Github size={16} />
            View All Projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
