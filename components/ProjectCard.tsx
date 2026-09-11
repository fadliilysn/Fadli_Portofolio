"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers, ScatterChart, Star, Sparkles, ExternalLink } from "lucide-react";
import { Project, normalizeImagePath } from "@/data/projects";

const categoryMeta: Record<
  Project["category"],
  { label: string; Icon: typeof Layers; pattern: string; color: string }
> = {
  web: {
    label: "Web Application",
    Icon: Layers,
    pattern:
      "repeating-linear-gradient(45deg, rgb(var(--accent) / 0.06) 0, rgb(var(--accent) / 0.06) 1px, transparent 1px, transparent 12px)",
    color: "text-blue-500",
  },
  "data-ml": {
    label: "Data & Machine Learning",
    Icon: ScatterChart,
    pattern:
      "radial-gradient(rgb(var(--accent) / 0.18) 1.5px, transparent 1.5px)",
    color: "text-violet-500",
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const meta = categoryMeta[project.category];
  const imageSrc = normalizeImagePath(project.image);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/90 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 dark:hover:border-accent/30 dark:hover:shadow-black/40"
    >
      {/* ── Image / Mockup Showcase Area ── */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/80 bg-gradient-to-b from-surface/90 via-surface/40 to-surface/80 p-3 pb-0 dark:from-surface/50 dark:via-surface/20 dark:to-surface/40">

        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-40 dark:opacity-20"
          style={{
            backgroundImage: meta.pattern,
            backgroundSize: project.category === "data-ml" ? "14px 14px" : "auto",
          }}
        />

        {/* Featured Star Badge (if applicable) */}
        {project.featured && (
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full border border-amber-500/30 bg-card/90 px-2.5 py-0.5 text-[11px] font-semibold text-amber-500 shadow-sm backdrop-blur-md">
            <Star size={11} className="fill-amber-500 text-amber-500" />
            <span>Unggulan</span>
          </div>
        )}

        {imageSrc && !imageFailed ? (
          /* Browser Window Mockup Frame */
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-t-xl border border-border/90 bg-card shadow-md shadow-black/5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg dark:shadow-black/30">
            {/* Window header with 3 mini dots */}
            <div className="flex h-5 items-center gap-1 border-b border-border/70 bg-surface/80 px-2.5 backdrop-blur-sm dark:bg-surface/60">
              <div className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
              <div className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              <span className="ml-1.5 truncate text-[9.5px] font-medium text-muted/70">
                {project.title.toLowerCase().replace(/\s+/g, "-")}.app
              </span>
            </div>

            {/* Inner screenshot */}
            <div className="relative flex-1 w-full bg-surface/50">
              <Image
                src={imageSrc}
                alt={`Tangkapan layar ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageFailed(true)}
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        ) : (
          /* Elegant Abstract Placeholder for projects without screenshots */
          <div className="relative flex h-full w-full flex-col items-center justify-center rounded-t-xl border border-dashed border-border/80 bg-card/50 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20 shadow-sm transition-transform duration-300 group-hover:scale-110">
              <meta.Icon size={24} strokeWidth={1.75} />
            </div>
            <span className="mt-2 text-[11px] font-medium text-muted/80 tracking-wide uppercase">
              {meta.label}
            </span>
          </div>
        )}
      </div>

      {/* ── Card Content Body ── */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between text-xs text-muted">
          <span className="font-medium">{meta.label}</span>
          {project.demo && (
            <span className="inline-flex items-center gap-1 font-medium text-emerald-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Demo
            </span>
          )}
        </div>

        <h3 className="mt-2.5 text-[16.5px] font-bold text-ink transition-colors duration-200 group-hover:text-accent">
          {project.title}
        </h3>

        <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-muted line-clamp-2">
          {project.summary}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-border/80 bg-surface/80 px-2 py-0.5 text-[11px] font-medium text-muted transition-colors group-hover:border-border"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-md border border-border/80 bg-surface/80 px-1.5 py-0.5 text-[10.5px] font-medium text-muted">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Action Link Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-[13px] font-semibold text-accent">
          <span className="inline-flex items-center gap-1">
            Lihat detail
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>

          {project.year && (
            <span className="text-[11px] font-normal text-muted">
              {project.year}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
