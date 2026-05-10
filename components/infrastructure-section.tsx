"use client";

import { motion } from "framer-motion";
import { CloudCog, Database, GitBranch, ServerCog } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { infrastructure } from "@/lib/data";

const topology = [
  { label: "FastAPI / GraphQL", icon: ServerCog },
  { label: "Airflow DAGs", icon: GitBranch },
  { label: "Spark / Trino", icon: CloudCog },
  { label: "Iceberg / HMS", icon: Database },
];

export function InfrastructureSection() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Infrastructure & Architecture"
        title="Distributed systems awareness beyond application code."
        description="The portfolio is intentionally infrastructure-forward because Sai's work touches orchestration, analytical storage, Kubernetes runtime behavior, and operational tooling."
      />

      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative min-h-[430px] overflow-hidden rounded-lg border border-white/10 bg-slate-950/68 p-6 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_40%,rgba(102,228,255,0.16),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(129,140,248,0.13),transparent_35%)]" />
          <div className="relative grid h-full content-center gap-6">
            {topology.map(({ label, icon: Icon }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="relative flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-4"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-200/18 bg-cyan-300/8 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">{label}</div>
                  <div className="mt-1 text-sm text-slate-400">
                    {index === 0 && "request and service contracts"}
                    {index === 1 && "dynamic orchestration layer"}
                    {index === 2 && "distributed execution runtime"}
                    {index === 3 && "analytical table ecosystem"}
                  </div>
                </div>
                {index < topology.length - 1 ? (
                  <span className="absolute -bottom-6 left-10 h-6 w-px bg-cyan-200/25" />
                ) : null}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-3">
          {infrastructure.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.035, duration: 0.35 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-200/22 hover:bg-cyan-300/[0.055]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
