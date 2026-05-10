"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Enterprise systems, startup speed, and engineering discipline."
        description="The timeline emphasizes production backend exposure, BFSI analytics, data orchestration, and practical delivery across different engineering environments."
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/35 to-indigo-300/0 sm:left-4 md:left-1/2" />

        <div className="grid gap-8">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            const alignRight = index % 2 === 0;

            return (
              <motion.article
                key={experience.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className={`relative grid gap-4 md:grid-cols-2 ${alignRight ? "" : "md:[&>div]:col-start-2"}`}
              >
                <div
                  className={`ml-12 rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur-sm sm:p-5 sm:backdrop-blur-xl md:ml-0 ${
                    alignRight ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-200/18 bg-cyan-300/8 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
                      <p className="text-sm text-cyan-100">{experience.role}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>{experience.duration}</Badge>
                    <Badge className="border-indigo-200/15 bg-indigo-300/[0.06] text-indigo-100">
                      {experience.location}
                    </Badge>
                  </div>

                  <p className="mt-4 leading-8 text-slate-300">{experience.summary}</p>
                  <ul className="mt-5 grid gap-3">
                    {experience.impact.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute left-4 top-6 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-cyan-200/30 bg-slate-950 text-xs font-semibold text-cyan-100 shadow-[0_0_30px_rgba(102,228,255,0.22)] md:left-1/2">
                  {index + 1}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
