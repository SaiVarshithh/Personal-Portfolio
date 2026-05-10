"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/lib/data";

export function ExpertiseSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Technical Expertise"
        title="Backend depth across APIs, data systems, AI workflows, and infrastructure."
        description="The stack is organized around production systems: request surfaces, orchestration, compute, storage, observability, and intelligent automation."
      />

      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, skills }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.05, duration: 0.48 }}
          >
            <Card className="group h-full p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/24 hover:bg-white/[0.06] sm:p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-200/18 bg-cyan-300/8 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="border-white/10 bg-white/[0.045] text-slate-200 transition group-hover:border-cyan-200/18"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
