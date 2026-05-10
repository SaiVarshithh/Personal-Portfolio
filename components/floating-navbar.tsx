"use client";

import { BriefcaseBusiness, Code2, FileText, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FloatingNavbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const current = navItems
        .map((item) => item.href.replace("#", ""))
        .findLast((id) => {
          const section = document.getElementById(id);
          if (!section) return false;
          return section.getBoundingClientRect().top <= 140;
        });

      if (current) setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const iconLinks = [
    { label: "GitHub", href: profile.github, icon: Code2 },
    { label: "LinkedIn", href: profile.linkedin, icon: BriefcaseBusiness },
    { label: "Resume", href: profile.resume, icon: FileText },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-x-0 top-4 z-40 px-4"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-xl border border-white/10 bg-slate-950/64 px-3 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition duration-300",
          scrolled && "max-w-5xl border-cyan-200/18 bg-slate-950/78 py-2",
        )}
        aria-label="Primary navigation"
      >
        <a href="#home" className="flex items-center gap-3 rounded-lg px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-200/20 bg-cyan-300/10 text-sm font-bold text-cyan-100 shadow-[0_0_24px_rgba(102,228,255,0.16)]">
            SV
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            Sai Varshith
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300",
                  active === id && "text-cyan-100",
                )}
              >
                {item.label}
                {active === id ? (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-x-3 -bottom-0.5 h-px rounded-full bg-cyan-300"
                  />
                ) : null}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {iconLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.045] text-slate-300 transition hover:border-cyan-200/35 hover:bg-cyan-300/10 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.055] text-slate-100 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-6xl rounded-xl border border-white/10 bg-slate-950/92 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
        >
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {iconLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-slate-200"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
