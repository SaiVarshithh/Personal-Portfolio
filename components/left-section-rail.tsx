"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function LeftSectionRail() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const current = navItems
        .map((item) => item.href.replace("#", ""))
        .findLast((id) => {
          const section = document.getElementById(id);
          if (!section) return false;
          return section.getBoundingClientRect().top <= 160;
        });

      if (current) setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25, duration: 0.45 }}
      className="fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
      aria-label="Section navigation"
    >
      <nav className="rounded-xl border border-white/10 bg-slate-950/62 p-2 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
        <div className="grid gap-1">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex w-36 items-center gap-3 rounded-lg px-3 py-2 text-xs font-semibold text-slate-400 transition hover:bg-white/[0.055] hover:text-white",
                  isActive && "bg-cyan-300/10 text-cyan-100",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full bg-slate-600 transition",
                    isActive && "bg-cyan-300 shadow-[0_0_18px_rgba(102,228,255,0.7)]",
                  )}
                />
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </motion.aside>
  );
}
