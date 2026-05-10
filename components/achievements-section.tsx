"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { achievements } from "@/lib/data";

export function AchievementsSection() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Achievements"
        title="Signals of discipline, learning agility, and execution."
        description="Academic recognition, competitive engineering wins, certifications, internships, and enterprise exposure support the same story: practical engineering momentum."
      />

      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map(({ title, detail, icon: Icon }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.05, duration: 0.42 }}
            className="rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-200/22 hover:bg-white/[0.065] sm:p-5 sm:backdrop-blur-xl"
          >
            <div className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-200/18 bg-cyan-300/8 text-cyan-100 shadow-[0_0_34px_rgba(102,228,255,0.12)]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 leading-7 text-slate-300">{detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
