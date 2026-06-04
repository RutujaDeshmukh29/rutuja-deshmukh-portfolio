"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  BookOpen,
  Star,
  Cpu,
  Award,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "IET Expo 2026",
    subtitle: "National-Level Technical Exhibition",
    desc: "Presented AgroBot at IET Expo 2026, a prestigious national-level technical innovation and project exhibition.",
    tag: "🏆 National Stage",
    color: "gold",
    accent: "from-yellow-500 to-orange-500",
  },
  {
    icon: BookOpen,
    title: "Research Publication – IJARCCE",
    subtitle: "International Journal Publication",
    desc: "Published 'AgroBot — AI-Powered Autonomous Grass Mower' in the International Journal of Advanced Research in Computer and Communication Engineering.",
    tag: "📄 Published Research",
    color: "indigo",
    link: "https://ijarcce.com/papers/agrobot-ai-powered-smart-robotic-lawn-mower/",
    linkLabel: "Read Paper",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    icon: Star,
    title: "91.65% – Diploma AIML",
    subtitle: "K. K. Wagh Polytechnic",
    desc: "Achieved 91.65% in the 5th Semester of Diploma in Artificial Intelligence and Machine Learning — top performance in core AI subjects.",
    tag: "🎓 Academic Excellence",
    color: "purple",
    accent: "from-purple-500 to-violet-500",
  },
  {
    icon: Cpu,
    title: "AI Engineering Projects",
    subtitle: "Production-Grade Applications",
    desc: "Built and deployed AI applications involving RAG workflows, conversational AI, vector databases, multi-agent systems, and intelligent automation.",
    tag: "🚀 Production AI",
    color: "cyan",
    accent: "from-cyan-500 to-teal-500",
  },
  {
    icon: Award,
    title: "92.80% – SSC Examination",
    subtitle: "Shree Ram Vidhyalaya, Nashik",
    desc: "Secured 92.80% in the Secondary School Certificate examination, demonstrating strong foundational academic performance.",
    tag: "📊 Academic Record",
    color: "green",
    accent: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Live AI Deployment",
    subtitle: "Streamlit Cloud",
    desc: "Deployed the AI Learning Companion publicly on Streamlit Cloud — a fully functional RAG-powered study assistant accessible to users worldwide.",
    tag: "🌐 Live Product",
    color: "pink",
    link: "https://ai-learning-companion-study-assistanti.streamlit.app/",
    linkLabel: "Try It Live",
    accent: "from-pink-500 to-rose-500",
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string }> = {
  gold: { text: "text-yellow-400", border: "border-yellow-500/20", bg: "bg-yellow-500/10" },
  indigo: { text: "text-indigo-400", border: "border-indigo-500/20", bg: "bg-indigo-500/10" },
  purple: { text: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/10" },
  cyan: { text: "text-cyan-400", border: "border-cyan-500/20", bg: "bg-cyan-500/10" },
  green: { text: "text-green-400", border: "border-green-500/20", bg: "bg-green-500/10" },
  pink: { text: "text-pink-400", border: "border-pink-500/20", bg: "bg-pink-500/10" },
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full bg-yellow-500/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-yellow-400 text-sm tracking-widest uppercase mb-4">
            Achievements
          </p>
          <h2 className="section-title text-white mb-4">
            Milestones &amp; <span className="text-gradient-gold">Recognition</span>
          </h2>
          <p className="font-body text-zinc-400 max-w-2xl mx-auto">
            From national-level technical exhibitions to research publications — here&apos;s
            what I&apos;ve accomplished while building in AI.
          </p>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map(({ icon: Icon, title, subtitle, desc, tag, color, link, linkLabel, accent }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`glass glass-hover rounded-2xl p-6 border ${c.border} group relative overflow-hidden`}
              >
                {/* Background gradient glow */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-2xl`} />

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon size={20} className="text-white" />
                </div>

                {/* Tag */}
                <span className={`inline-block text-xs font-mono px-2.5 py-1 rounded-full border ${c.bg} ${c.border} ${c.text} mb-3`}>
                  {tag}
                </span>

                <h3 className="font-display font-bold text-white mb-1 leading-tight">{title}</h3>
                <p className={`font-mono text-xs ${c.text} mb-3`}>{subtitle}</p>
                <p className="font-body text-sm text-zinc-400 leading-relaxed mb-4">{desc}</p>

                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-mono ${c.text} hover:underline`}
                  >
                    {linkLabel}
                    <ExternalLink size={11} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
