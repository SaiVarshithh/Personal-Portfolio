"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function ContactSection() {
  const [subject, setSubject] = useState("Portfolio inquiry");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = encodeURIComponent(message || "Hi Sai, I saw your portfolio and would like to connect.");
    const mailSubject = encodeURIComponent(subject || "Portfolio inquiry");
    window.location.href = `mailto:${profile.email}?subject=${mailSubject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell pb-10">
      <SectionHeading
        eyebrow="Contact"
        title="Open to backend, AI infrastructure, and data platform opportunities."
        description="The fastest path is email or LinkedIn. GitHub is available for deeper project context and repository review."
      />

      <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
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

        <motion.form
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          onSubmit={handleSubmit}
          className="edge-glow rounded-lg border border-white/10 bg-slate-950/72 p-6 backdrop-blur-xl"
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-200">Subject</span>
              <input
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                className="min-h-12 rounded-lg border border-white/10 bg-white/[0.055] px-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-200/45 focus:bg-white/[0.075]"
                placeholder="Opportunity, collaboration, or project discussion"
                suppressHydrationWarning
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-200">Message</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="min-h-40 resize-y rounded-lg border border-white/10 bg-white/[0.055] px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-200/45 focus:bg-white/[0.075]"
                placeholder="Write a short note..."
                suppressHydrationWarning
              />
            </label>
            <Button type="submit" className="w-full sm:w-fit">
              <Send className="h-4 w-4" />
              Send Email
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
