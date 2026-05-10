"use client";

import { motion } from "framer-motion";
import { Code2, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { pinnedRepositories, profile } from "@/lib/data";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};

const fallbackRepos: Repo[] = pinnedRepositories.map((name) => ({
  name,
  html_url: `${profile.github}/${name}`,
  description: "Highlighted engineering repository from Sai Varshith's project work.",
  stargazers_count: 0,
  language: "Python",
  updated_at: "2026-05-10T00:00:00.000Z",
}));

export function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);

  useEffect(() => {
    let active = true;

    fetch("https://api.github.com/users/SaiVarshithh/repos?sort=updated&per_page=20")
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((data: Repo[]) => {
        if (!active) return;
        const selected = pinnedRepositories
          .map((repoName) => data.find((repo) => repo.name.toLowerCase() === repoName.toLowerCase()))
          .filter(Boolean) as Repo[];
        setRepos(selected.length ? selected : data.slice(0, 3));
      })
      .catch(() => {
        if (active) setRepos(fallbackRepos);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="GitHub & Open Source"
        title="Repository activity presented like an engineer's console."
        description="The section reads live public GitHub repository data when available and keeps a resilient fallback for deploy previews and offline development."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-lg border border-white/10 bg-slate-950/76 p-5 font-mono text-sm text-slate-300 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
        >
          <div className="mb-5 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
          </div>
          <p className="text-cyan-100">$ profile --focus</p>
          <p className="mt-3">backend_systems=true</p>
          <p>ai_infra=true</p>
          <p>distributed_analytics=true</p>
          <p>cloud_native=true</p>
          <div className="mt-6 grid grid-cols-13 gap-1">
            {Array.from({ length: 91 }).map((_, index) => {
              const opacity = [0.12, 0.2, 0.34, 0.52, 0.75][index % 5];
              return (
                <span
                  key={index}
                  className="h-3 rounded-sm bg-cyan-300"
                  style={{ opacity }}
                />
              );
            })}
          </div>
          <Button asChild href={profile.github} target="_blank" rel="noreferrer" className="mt-6" variant="secondary">
            <Code2 className="h-4 w-4" />
            Open GitHub
          </Button>
        </motion.div>

        <div className="grid gap-4">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06, duration: 0.42 }}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:border-cyan-200/25 hover:bg-white/[0.065]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
                  <p className="mt-2 leading-7 text-slate-300">
                    {repo.description ?? "Repository details available on GitHub."}
                  </p>
                </div>
                <Code2 className="h-5 w-5 shrink-0 text-cyan-100" />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span>{repo.language ?? "Code"}</span>
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" />
                  {repo.stargazers_count}
                </span>
                <span>Updated {new Date(repo.updated_at).toLocaleDateString("en-IN")}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
