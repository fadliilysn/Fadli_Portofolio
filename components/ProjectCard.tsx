"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers, ScatterChart, Star } from "lucide-react";
import { Project, normalizeImagePath } from "@/data/projects";

const categoryMeta: Record<
  Project["category"],
  { label: string; Icon: typeof Layers; pattern: string }
> = {
  web: {
    label: "Web Application",
    Icon: Layers,
    pattern:
      "repeating-linear-gradient(45deg, rgb(var(--accent) / 0.08) 0, rgb(var(--accent) / 0.08) 1px, transparent 1px, transparent 12px)",
  },
  "data-ml": {
    label: "Data & Machine Learning",
    Icon: ScatterChart,
    pattern:
      "radial-gradient(rgb(var(--accent) / 0.22) 1.5px, transparent 1.5px)",
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const meta = categoryMeta[project.category];
  const imageSrc = normalizeImagePath(project.image);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface">
        {/* Featured Ribbon / Badge */}
        {project.featured && (
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full border border-amber-500/30 bg-bg/90 px-2.5 py-0.5 text-[11px] font-medium text-amber-500 shadow-sm backdrop-blur-md">
            <Star size={11} className="fill-amber-500 text-amber-500" />
            Unggulan
          </div>
        )}

        {imageSrc && !imageFailed ? (
          <Image
            src={imageSrc}
            alt={`Tangkapan layar ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageFailed(true)}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              backgroundImage: meta.pattern,
              backgroundSize: project.category === "data-ml" ? "16px 16px" : "auto",
            }}
          >
            <meta.Icon size={28} strokeWidth={1.5} className="text-accent/60" />
          </div>
        )}
      </div>

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

        <h3 className="mt-2.5 text-[16.5px] font-bold text-ink transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-muted"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-md border border-border bg-surface px-1.5 py-0.5 text-[10.5px] font-medium text-muted">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-1 text-[13px] font-semibold text-accent">
          Lihat detail
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </Link>
  );
}
