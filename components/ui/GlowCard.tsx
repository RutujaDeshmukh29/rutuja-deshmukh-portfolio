"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "cyan" | "gold";
  delay?: number;
}

export default function GlowCard({
  children,
  className,
  glowColor = "blue",
  delay = 0,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const glowColors = {
    blue: "rgba(99,102,241,0.3)",
    purple: "rgba(168,85,247,0.3)",
    cyan: "rgba(6,182,212,0.3)",
    gold: "rgba(251,191,36,0.3)",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative overflow-hidden glass rounded-2xl", className)}
      style={{
        transition: "border-color 0.3s, box-shadow 0.3s",
        borderColor: isHovered
          ? glowColors[glowColor].replace("0.3", "0.5")
          : undefined,
        boxShadow: isHovered
          ? `0 0 40px ${glowColors[glowColor]}`
          : undefined,
      }}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none"
          style={{
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${glowColors[glowColor]}, transparent 70%)`,
            left: mousePos.x - 150,
            top: mousePos.y - 150,
            transition: "opacity 0.2s",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
