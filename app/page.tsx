"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Architecture from "@/components/Architecture";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Architecture />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
