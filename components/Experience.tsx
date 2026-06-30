"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Code2,
} from "lucide-react";

const experience = [
  {
    role: "Python & Data Engineering Intern",
    company: "ProWorld Technology Pvt. Ltd.",
    period: "Jun 2025 – Aug 2025",
    location: "Nashik, Maharashtra",
    type: "Internship",
    icon: Briefcase,
    color: "indigo",
    responsibilities: [
      "Contributed to Django-based application development — e-commerce platform & smart energy management systems",
      "Developed responsive UI components, improving user interaction workflows and experience",
      "Worked with backend integration and real-world software development practices",
      "Collaborated on feature implementation and debugging in team-based environments",
    ],
    tech: ["Python", "Django", "JavaScript", "HTML/CSS", "IoT", "Analytics"],
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
                const Icon = exp.icon;
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

                    <div className={`glass glass-hover rounded-2xl p-6 border ${c.border}`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="font-display font-semibold text-white">{exp.role}</h4>
                          <p className={`font-body text-sm font-medium ${c.text}`}>{exp.company}</p>
                        </div>
                        <span className={`text-xs font-mono ${c.text} ${c.bg} px-2.5 py-1 rounded-full border ${c.border}`}>
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-xs text-zinc-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} /> {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className={`${c.text} mt-0.5 flex-shrink-0`} />
                            <span className="font-body text-xs text-zinc-400 leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span key={t} className={`text-xs px-2 py-0.5 rounded font-mono ${c.bg} ${c.text} border ${c.border}`}>
                            {t}
                          </span>
                        ))}
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

                    <div className={`glass glass-hover rounded-2xl p-6 border ${c.border}`}>
                      <h4 className="font-display font-semibold text-white mb-1 leading-tight">
                        {edu.degree}
                      </h4>
                      <p className={`font-body text-sm font-medium ${c.text} mb-3`}>
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap gap-4 mb-3 text-xs text-zinc-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} /> {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} /> {edu.location}
                        </span>
                      </div>

                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${c.bg} border ${c.border}`}>
                        <Code2 size={12} className={c.text} />
                        <span className={`font-mono text-sm font-semibold ${c.text}`}>
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pl-12"
              >
                <div className="glass glass-hover rounded-2xl p-6 border border-white/[0.06]">
                  <h4 className="font-display font-semibold text-white mb-4">Certifications</h4>
                  <ul className="space-y-2">
                    {[
                      "AWS Academy Graduate – Cloud Foundations",
                      "Introduction to Generative AI – Google Cloud",
                      "Build AI Agents using LangGraph – Simplilearn",
                      "Big Data Analytics – Infosys Springboard",
                      "Python Training – IIT Bombay",
                    ].map((cert) => (
                      <li key={cert} className="flex items-start gap-2">
                        <CheckCircle2 size={12} className="text-zinc-500 mt-0.5 flex-shrink-0" />
                        <span className="font-body text-xs text-zinc-400">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
