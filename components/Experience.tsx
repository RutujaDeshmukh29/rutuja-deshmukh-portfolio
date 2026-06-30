"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Code2,
  Award,
} from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  icon: any;
  color: string;
  responsibilities: string[];
  tech: string[];
  certificate?: string;
}

const experience: ExperienceItem[] = [
  {
    role: "Python & Data Engineering Intern",
    company: "ProWorld Technology Pvt. Ltd.",
    period: "Jun 2025 – Aug 2025",
    location: "Nashik, Maharashtra",
    type: "Internship",
    icon: Briefcase,
    color: "indigo",
    responsibilities: [
      "Developed responsive front-end user interface layouts using HTML, CSS, and Django templates to ensure clean, interactive design.",
      "Designed and structured UI interfaces for an AI-Based Energy Monitoring System and the EcoCart E-commerce website.",
      "Integrated frontend templates with Python backend systems and handled basic data flow workflows.",
      "Collaborated in a team-based environment to adopt real-world development workflows, testing, and interface optimization.",
    ],
    tech: ["Python", "Django", "JavaScript", "HTML/CSS", "UI/UX", "Data Flow"],
    certificate: "/certificates/rutuja-deshmukh-proworld-internship.pdf",
  },
];

const education = [
  {
    degree: "Diploma – Artificial Intelligence & Machine Learning",
    institution: "K. K. Wagh Polytechnic",
    period: "2023 – Jul 2026",
    location: "Nashik, Maharashtra",
    score: "89.59% (Final Year)",
    icon: GraduationCap,
    color: "purple",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Shree Ram Vidhyalaya",
    period: "Completed May 2023",
    location: "Nashik, Maharashtra",
    score: "92.80%",
    icon: GraduationCap,
    color: "cyan",
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; dot: string }> = {
  indigo: {
    text: "text-indigo-400", border: "border-indigo-500/30",
    bg: "bg-indigo-500/10", dot: "bg-indigo-500",
  },
  purple: {
    text: "text-purple-400", border: "border-purple-500/30",
    bg: "bg-purple-500/10", dot: "bg-purple-500",
  },
  cyan: {
    text: "text-cyan-400", border: "border-cyan-500/30",
    bg: "bg-cyan-500/10", dot: "bg-cyan-500",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />

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
            Journey
          </p>
          <h2 className="section-title text-white mb-4">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <Briefcase size={16} className="text-indigo-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Work Experience</h3>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 to-transparent" />

              {experience.map((exp, i) => {
                const c = colorMap[exp.color];
                return (
                  <motion.div
                    key={exp.role}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="relative pl-12 pb-8"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-2 top-1 w-4 h-4 rounded-full ${c.dot} ring-4 ring-background`} />

                    <div className={`glass glass-hover rounded-2xl p-6 md:p-8 border ${c.border}`}>
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="font-display text-xl font-bold text-white mb-1">{exp.role}</h4>
                          <p className={`font-body text-base font-medium ${c.text}`}>{exp.company}</p>
                        </div>
                        <span className={`text-xs font-mono ${c.text} ${c.bg} px-3 py-1 rounded-full border ${c.border}`}>
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-zinc-500 font-mono">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} /> {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2.5">
                            <CheckCircle2 size={15} className={`${c.text} mt-0.5 flex-shrink-0`} />
                            <span className="font-body text-sm text-zinc-300 leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-white/[0.06]">
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <span key={t} className={`text-xs px-2.5 py-1 rounded-lg font-mono ${c.bg} ${c.text} border ${c.border}`}>
                              {t}
                            </span>
                          ))}
                        </div>
                        {exp.certificate && (
                          <a
                            href={exp.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium ${c.text} hover:underline`}
                          >
                            <Award size={14} />
                            View Credential →
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <GraduationCap size={16} className="text-purple-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Education</h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 to-transparent" />

              {education.map((edu, i) => {
                const c = colorMap[edu.color];
                return (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="relative pl-12 pb-8"
                  >
                    <div className={`absolute left-2 top-1 w-4 h-4 rounded-full ${c.dot} ring-4 ring-background`} />

                    <div className={`glass glass-hover rounded-2xl p-6 md:p-8 border ${c.border}`}>
                      <h4 className="font-display text-xl font-bold text-white mb-1.5 leading-tight">
                        {edu.degree}
                      </h4>
                      <p className={`font-body text-base font-medium ${c.text} mb-4`}>
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap gap-4 mb-4 text-xs text-zinc-500 font-mono">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} /> {edu.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} /> {edu.location}
                        </span>
                      </div>

                      <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg ${c.bg} border ${c.border}`}>
                        <Code2 size={14} className={c.text} />
                        <span className={`font-mono text-sm font-semibold ${c.text}`}>
                          Score: {edu.score}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
