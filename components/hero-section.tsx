"use client";

import { motion } from "framer-motion";
import { ArrowDown, BriefcaseBusiness, Code2, Download, Mail, Rocket } from "lucide-react";
import { useEffect, useState } from "react";
import { ArchitectureVisual } from "@/components/architecture-visual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroHighlights, profile } from "@/lib/data";

const stats = [
  { value: "BFSI", label: "enterprise analytics" },
  { value: "AI", label: "backend workflows" },
  { value: "K8s", label: "cloud-native systems" },
];

export function HeroSection() {
  const [activeHighlight, setActiveHighlight] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHighlight((current) => (current + 1) % heroHighlights.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="section-shell flex min-h-screen items-center pt-32 md:pt-36"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <Badge className="mb-5 gap-2 border-cyan-200/24 bg-cyan-300/8">
            <Rocket className="h-3.5 w-3.5" />
            Backend systems engineer
          </Badge>

          <h1 className="text-gradient text-balance text-5xl font-semibold leading-tight tracking-normal md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-cyan-100 md:text-2xl">
            {profile.identity}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-2xl leading-8 text-slate-400">
            Backend-focused software engineer with enterprise BFSI experience,
            startup API engineering exposure, and deep interest in AI systems,
            data infrastructure, and distributed backend architecture.
          </p>

          <div className="mt-6 flex min-h-10 flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-slate-400">Currently focused on</span>
            <motion.span
              key={heroHighlights[activeHighlight]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-full border border-cyan-200/18 bg-cyan-300/8 px-4 py-2 text-sm font-semibold text-cyan-100"
            >
              {heroHighlights[activeHighlight]}
            </motion.span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild href="#projects">
              View Projects
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </Button>
            <Button asChild href={profile.resume} target="_blank" rel="noreferrer" variant="secondary">
              Download Resume
              <Download className="h-4 w-4" />
            </Button>
            <Button asChild href={profile.linkedin} target="_blank" rel="noreferrer" variant="ghost">
              <BriefcaseBusiness className="h-4 w-4" />
              LinkedIn
            </Button>
            <Button asChild href={profile.github} target="_blank" rel="noreferrer" variant="ghost">
              <Code2 className="h-4 w-4" />
              GitHub
            </Button>
            <Button asChild href="#contact" variant="ghost">
              <Mail className="h-4 w-4" />
              Contact
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.75, ease: "easeOut" }}
          className="relative"
        >
          <ArchitectureVisual />
        </motion.div>
      </div>
    </section>
  );
}
