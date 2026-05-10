"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/data";

const story = [
  "Backend-focused software engineer working across Python APIs, data workflows, enterprise analytics, and AI-enabled backend systems.",
  "Enterprise BFSI exposure at TCS added practical experience with risk analytics, orchestration, Spark processing, GraphQL services, and production support expectations.",
  "Recently working on Kubernetes deployments in on-prem Unix server environments, including pods, services, deployments, secrets, and port-forwarding.",
  "Recognition includes Gold Medallist at SR University and a National Level IEEE EV Hackathon win that led to Bosch internship exposure.",
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Backend engineer focused on production systems, APIs, data workflows, and Kubernetes."
        description="Sai's portfolio is centered on practical backend engineering: building services, supporting enterprise analytics, learning infrastructure deeply, and shipping work that can run in real environments."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <Card className="edge-glow relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(102,228,255,0.16),transparent_36%),radial-gradient(circle_at_90%_80%,rgba(129,140,248,0.13),transparent_38%)]" />
            <div className="relative grid min-h-[420px] place-items-center rounded-lg border border-white/10 bg-slate-950/62 p-6">
              <div className="relative grid h-56 w-56 place-items-center rounded-full border border-cyan-200/24 bg-cyan-300/[0.045] shadow-[0_0_80px_rgba(102,228,255,0.13)]">
                <div className="absolute inset-4 rounded-full border border-indigo-200/14" />
                <div className="absolute inset-9 rounded-full border border-cyan-200/16" />
                <div className="text-center">
                  <div className="text-5xl font-semibold text-white">SV</div>
                  <div className="mt-3 text-sm font-medium text-cyan-100">
                    Backend Systems
                  </div>
                </div>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-cyan-200" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-3">
                  <Cpu className="h-4 w-4 text-cyan-200" />
                  Python, AI systems, data infrastructure
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid gap-4">
          {story.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-200/25 hover:bg-white/[0.06]"
            >
              <div className="flex gap-4">
                <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-cyan-200/18 bg-cyan-300/8 text-sm font-semibold text-cyan-100">
                  {index + 1}
                </div>
                <p className="leading-8 text-slate-300">{item}</p>
                <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-200" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
