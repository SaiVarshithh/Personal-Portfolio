"use client";

import { Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile, projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Architecture-heavy projects that show real backend judgment."
        description="Each project is framed around the system shape, the engineering problem solved, and the production ideas behind it."
      />

      <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Card className="group relative h-full overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25 sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(102,228,255,0.12),transparent_34%),radial-gradient(circle_at_100%_70%,rgba(129,140,248,0.11),transparent_35%)] opacity-80" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-medium text-cyan-100">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-cyan-200/20 bg-cyan-300/8 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="my-4 rounded-lg border border-white/10 bg-slate-950/68 p-3 sm:my-6 sm:p-4">
                    <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      architecture flow
                    </div>
                    <div className="grid grid-cols-3 items-center gap-2 text-center text-[0.7rem] text-slate-300 sm:gap-3 sm:text-xs">
                      <div className="rounded-lg border border-cyan-200/14 bg-cyan-300/[0.05] px-2 py-3">
                        API surface
                      </div>
                      <div className="relative rounded-lg border border-indigo-200/14 bg-indigo-300/[0.05] px-2 py-3">
                        orchestration
                        <span className="absolute -left-3 top-1/2 h-px w-3 bg-cyan-200/35" />
                        <span className="absolute -right-3 top-1/2 h-px w-3 bg-cyan-200/35" />
                      </div>
                      <div className="rounded-lg border border-cyan-200/14 bg-cyan-300/[0.05] px-2 py-3">
                        data layer
                      </div>
                    </div>
                  </div>

                  <p className="leading-8 text-slate-300">{project.overview}</p>
                  <p className="mt-4 leading-8 text-slate-400">{project.architecture}</p>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {project.solved.map((item) => (
                      <div key={item} className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild href={profile.github} target="_blank" rel="noreferrer" variant="secondary">
                      <Code2 className="h-4 w-4" />
                      GitHub
                    </Button>
                    <Button asChild href="#contact" variant="ghost">
                      <ExternalLink className="h-4 w-4" />
                      Demo request
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
