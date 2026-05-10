"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Bot, Cloud, Database, GitBranch, Server } from "lucide-react";

const desktopNodes = [
  { label: "API", icon: Server, x: "9%", y: "42%", tone: "cyan" },
  { label: "Agents", icon: Bot, x: "36%", y: "18%", tone: "indigo" },
  { label: "Spark", icon: Activity, x: "36%", y: "66%", tone: "blue" },
  { label: "Iceberg", icon: Database, x: "67%", y: "24%", tone: "cyan" },
  { label: "Airflow", icon: GitBranch, x: "70%", y: "67%", tone: "indigo" },
  { label: "K8s", icon: Cloud, x: "48%", y: "43%", tone: "cyan" },
];

const mobileNodes = [
  { label: "API", icon: Server, x: "5%", y: "8%", tone: "cyan" },
  { label: "Agents", icon: Bot, x: "50%", y: "2%", tone: "indigo" },
  { label: "Iceberg", icon: Database, x: "88%", y: "8%", tone: "cyan" },
  { label: "K8s", icon: Cloud, x: "50%", y: "32%", tone: "cyan" },
  { label: "Spark", icon: Activity, x: "28%", y: "54%", tone: "blue" },
  { label: "Airflow", icon: GitBranch, x: "72%", y: "54%", tone: "indigo" },
];

export function ArchitectureVisual() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReducedMotion(prefersReduced);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nodes = isMobile ? mobileNodes : desktopNodes;
  const animationDuration = prefersReducedMotion ? 0.001 : 1.6;
  const progressDuration = prefersReducedMotion ? 0.001 : 2.8;

  return (
    <div className="edge-glow relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/72 p-4 shadow-[0_24px_100px_rgba(0,0,0,0.42)] backdrop-blur-2xl md:min-h-[420px] md:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(102,228,255,0.08),transparent_34%),radial-gradient(circle_at_70%_75%,rgba(129,140,248,0.07),transparent_30%)] md:bg-[radial-gradient(circle_at_50%_35%,rgba(102,228,255,0.16),transparent_34%),radial-gradient(circle_at_70%_75%,rgba(129,140,248,0.14),transparent_30%)]" />
      <div className="absolute inset-6 hidden rounded-xl border border-cyan-200/10 md:block" />
      <div className="absolute inset-0 hidden grid-cols-6 grid-rows-5 opacity-35 md:grid">
        {Array.from({ length: 30 }).map((_, index) => (
          <span key={index} className="border border-cyan-100/[0.035]" />
        ))}
      </div>

      {!isMobile && (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 430" aria-hidden="true">
          <defs>
            <linearGradient id="lineGradient" x1="0" x2="1">
              <stop offset="0%" stopColor="#66e4ff" stopOpacity="0.18" />
              <stop offset="55%" stopColor="#66e4ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {[
            "M104 214 C185 170 240 110 306 185",
            "M104 214 C190 266 235 305 307 239",
            "M337 190 C405 148 440 120 474 119",
            "M337 235 C400 272 438 300 486 288",
            "M306 214 C240 214 190 214 104 214",
          ].map((d) => (
            <motion.path
              key={d}
              d={d}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: animationDuration, ease: "easeInOut" }}
            />
          ))}
        </svg>
      )}

      {nodes.map(({ label, icon: Icon, x, y, tone }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: prefersReducedMotion ? 0 : 0.18 + index * 0.08,
            duration: prefersReducedMotion ? 0.001 : 0.45,
          }}
          className="absolute"
          style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
        >
          <div
            className={`grid h-16 w-16 place-items-center rounded-xl border bg-slate-950/80 backdrop-blur-sm md:h-20 md:w-20 md:rounded-2xl md:backdrop-blur-xl ${
              tone === "indigo"
                ? "border-indigo-200/28 text-indigo-100 shadow-[0_0_44px_rgba(129,140,248,0.18)]"
                : "border-cyan-200/28 text-cyan-100 shadow-[0_0_44px_rgba(102,228,255,0.18)]"
            }`}
            style={{
              animation: prefersReducedMotion ? "none" : `node-breathe-${isMobile ? "mobile" : "desktop"} ${isMobile ? "3s" : "4s"} ease-in-out infinite`,
            }}
          >
            <Icon className="h-5 w-5 md:h-6 md:w-6" />
            <span className="mt-0.5 text-[0.65rem] font-semibold md:mt-1 md:text-xs">{label}</span>
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/10 bg-slate-950/72 p-3 md:bottom-5 md:left-5 md:right-5 md:rounded-xl md:p-4">
        <div className="hidden items-center justify-between gap-3 text-xs text-slate-400 md:flex">
          <span>request orchestration</span>
          <span>async processing</span>
          <span>analytics state</span>
        </div>
        <div className="flex items-center justify-between gap-2 text-[0.7rem] text-slate-400 md:hidden">
          <span>orchestration</span>
          <span>processing</span>
          <span>state</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8 md:mt-3">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300"
            animate={prefersReducedMotion ? {} : { x: ["-40%", "120%"] }}
            transition={{
              duration: progressDuration,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            style={{ width: "45%" }}
          />
        </div>
      </div>
    </div>
  );
}
