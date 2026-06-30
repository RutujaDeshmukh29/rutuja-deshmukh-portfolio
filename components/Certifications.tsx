"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud via Simplilearn SkillUp",
    date: "Issued May 2026",
    skills: ["Generative AI", "Large Language Models", "Prompt Engineering", "AI Workflows"],
    color: "indigo",
    link: "/certificates/rutuja-deshmukh-generative-ai.pdf",
  },
  {
    name: "Big Data Analytics Projects with Apache Spark",
    issuer: "Infosys Springboard",
    date: "Issued Feb 2026",
    skills: ["Apache Spark", "Big Data Analytics", "Distributed Computing"],
    color: "purple",
    link: "/certificates/rutuja-deshmukh-apache-spark.pdf",
  },
  {
    name: "Python 3.4.3 Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    date: "Issued Dec 2025",
    skills: ["Python (Programming Language)", "Problem Solving", "Data Structures"],
    color: "cyan",
    link: "/certificates/rutuja-deshmukh-python-iit-bombay.pdf",
  },
  {
    name: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Oct 2025",
    skills: ["Cloud Computing", "AWS Core Services", "Cloud Security", "Deployment"],
    color: "indigo",
    link: "/certificates/rutuja-deshmukh-aws-foundations.pdf",
  },
  {
    name: "Java Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    date: "Issued Apr 2025",
    skills: ["Java", "Object-Oriented Programming (OOP)"],
    color: "purple",
    link: "/certificates/rutuja-deshmukh-java-iit-bombay.pdf",
  },
  {
    name: "Database Management System",
    issuer: "Infosys Springboard",
    date: "Issued Sep 2024",
    skills: ["Database Management System (DBMS)", "SQL"],
    color: "cyan",
    link: "/certificates/rutuja-deshmukh-dbms-infosys.pdf",
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string }> = {
  indigo: {
    text: "text-indigo-400", border: "border-indigo-500/20", bg: "bg-indigo-500/10"
  },
  purple: {
    text: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/10"
  },
  cyan: {
    text: "text-cyan-400", border: "border-cyan-500/20", bg: "bg-cyan-500/10"
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
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
            Credentials
          </p>
          <h2 className="section-title text-white mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="font-body text-zinc-400 max-w-2xl mx-auto">
            Technical certifications and specialized training validating core skills in Generative AI, Big Data, Cloud, and Software Engineering.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const c = colorMap[cert.color];
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`glass glass-hover rounded-2xl p-6 border ${c.border} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                      {cert.date}
                    </span>
                    <Award size={20} className={c.text} />
                  </div>
                  <h4 className="font-display font-bold text-white text-lg mb-1 leading-snug">
                    {cert.name}
                  </h4>
                  <p className="font-body text-sm text-zinc-400 mb-6">
                    {cert.issuer}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((s) => (
                      <span key={s} className="text-[10px] font-mono bg-white/5 text-zinc-300 px-2 py-0.5 rounded border border-white/[0.04]">
                        {s}
                      </span>
                    ))}
                  </div>

                  {cert.link && (
                    <div className="border-t border-white/[0.06] pt-4">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium ${c.text} hover:underline`}
                      >
                        <ExternalLink size={12} />
                        Verify Credentials
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
