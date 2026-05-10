import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { navItems, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="soft-divider mb-8" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold text-white">Janagani Sai Varshith</div>
            <div className="mt-2 text-sm text-slate-400">
              Backend systems, AI workflows, distributed analytics, and cloud-native infrastructure.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-cyan-100">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a aria-label="Email" href={`mailto:${profile.email}`} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 hover:text-cyan-100">
              <Mail className="h-4 w-4" />
            </a>
            <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 hover:text-cyan-100">
              <Code2 className="h-4 w-4" />
            </a>
            <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 hover:text-cyan-100">
              <BriefcaseBusiness className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-sm text-slate-500">
          Copyright {new Date().getFullYear()} Janagani Sai Varshith. Built for production-focused engineering credibility.
        </div>
      </div>
    </footer>
  );
}
