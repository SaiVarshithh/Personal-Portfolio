"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-10">
      <SectionHeading
        eyebrow="Contact"
        title="Open to backend, AI infrastructure, and data platform opportunities."
        description="The fastest path is email or LinkedIn. GitHub is available for deeper project context and repository review."
      />

      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold text-white">Direct channels</h3>
          <div className="mt-6 grid gap-3">
            <a className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:border-cyan-200/25" href={`mailto:${profile.email}`}>
              <Mail className="h-5 w-5 text-cyan-100" />
              {profile.email}
            </a>
            <a className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:border-cyan-200/25" href={`tel:${profile.phone}`}>
              <Phone className="h-5 w-5 text-cyan-100" />
              {profile.phone}
            </a>
            <a className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:border-cyan-200/25" href={profile.linkedin} target="_blank" rel="noreferrer">
              <BriefcaseBusiness className="h-5 w-5 text-cyan-100" />
              LinkedIn
            </a>
            <a className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:border-cyan-200/25" href={profile.github} target="_blank" rel="noreferrer">
              <Code2 className="h-5 w-5 text-cyan-100" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
