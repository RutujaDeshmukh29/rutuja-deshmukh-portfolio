"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  MapPin,
  Send,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "deshmukhrutuja2908@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=deshmukhrutuja2908@gmail.com&su=Hello%20Rutuja&body=Hi%20Rutuja%2C%0A%0AI%20would%20like%20to%20connect%20about%20...",
    color: "indigo",
    desc: "Drop me a message anytime",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/RutujaDeshmukh29",
    href: "https://github.com/RutujaDeshmukh29",
    color: "purple",
    desc: "Explore my code & projects",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rutuja-deshmukh29",
    href: "https://linkedin.com/in/rutuja-deshmukh29",
    color: "cyan",
    desc: "Connect professionally",
  },
  {
    icon: Download,
    label: "Resume",
    value: "Download PDF",
    href: "/Rutuja_Deshmukh_Resume.pdf",
    color: "gold",
    desc: "Get my full CV",
    download: true,
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  indigo: { text: "text-indigo-400", border: "border-indigo-500/30", bg: "bg-indigo-500/10", glow: "group-hover:shadow-indigo-500/20" },
  purple: { text: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10", glow: "group-hover:shadow-purple-500/20" },
  cyan: { text: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10", glow: "group-hover:shadow-cyan-500/20" },
  gold: { text: "text-yellow-400", border: "border-yellow-500/30", bg: "bg-yellow-500/10", glow: "group-hover:shadow-yellow-500/20" },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Large glow orb */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-indigo-600/6 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-indigo-400 text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="section-title text-white mb-6">
            Let&apos;s Build Something
            <br />
            <span className="text-gradient">Intelligent Together</span>
          </h2>
          <p className="font-body text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I&apos;m actively looking for AI engineering roles, internships, and collaborations.
            If you&apos;re working on something exciting in AI, I&apos;d love to chat.
          </p>
        </motion.div>

        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass rounded-3xl p-8 md:p-12 border border-indigo-500/20 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-green-400 text-sm">Open to Opportunities</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Work with Me as an AI Engineer
              </h3>
              <p className="font-body text-zinc-400 leading-relaxed mb-6">
                Specializing in RAG pipelines, multi-agent systems, LangGraph workflows,
                and full-stack AI applications. Ready to bring production-grade AI to your team.
              </p>
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <MapPin size={14} />
                <span className="font-mono">Nashik, Maharashtra, India</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=deshmukhrutuja2908@gmail.com&su=Hello%20Rutuja&body=Hi%20Rutuja%2C%0A%0AI%20would%20like%20to%20connect%20about%20..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 py-3.5"
              >
                <Send size={16} />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/rutuja-deshmukh29"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center justify-center gap-2 py-3.5"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
                <ExternalLink size={13} />
              </a>
              <a
                href="/Rutuja_Deshmukh_Resume.pdf"
                download
                className="btn-ghost flex items-center justify-center gap-2 py-3.5"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact links grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {contactLinks.map(({ icon: Icon, label, value, href, color, desc, download }, i) => {
            const c = colorMap[color];
            const isMailto = typeof href === "string" && href.startsWith("mailto:");
            return (
              <motion.a
                key={label}
                href={href}
                target={download || isMailto ? undefined : "_blank"}
                rel={download || isMailto ? undefined : "noopener noreferrer"}
                download={download}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`glass glass-hover rounded-2xl p-5 border ${c.border} group text-center hover:shadow-lg ${c.glow} transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mx-auto mb-3`}>
                  <Icon size={18} className={c.text} />
                </div>
                <div className="font-display font-semibold text-white text-sm mb-1">{label}</div>
                <div className="font-mono text-xs text-zinc-500 truncate">{value}</div>
                <div className={`font-body text-xs ${c.text} mt-2 opacity-0 group-hover:opacity-100 transition-opacity`}>
                  {desc}
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Availability note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-2 glass px-5 py-3 rounded-full border border-white/[0.06]">
            <Sparkles size={14} className="text-indigo-400" />
            <span className="font-body text-sm text-zinc-400">
              Available for{" "}
              <span className="text-white font-medium">full-time</span>,{" "}
              <span className="text-white font-medium">internship</span>, and{" "}
              <span className="text-white font-medium">freelance</span> AI roles
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
