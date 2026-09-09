"use client";

import { useState } from "react";
import { ChevronDown, FolderGit2 } from "lucide-react";
import { projects, ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const filters: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "web", label: "Web Apps" },
  { key: "data-ml", label: "Data & ML" },
];

const initialVisibleCount = 3;

export default function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const [showAll, setShowAll] = useState(false);

  const counts: Record<ProjectCategory | "all", number> = {
    all: projects.length,
    web: projects.filter((p) => p.category === "web").length,
    "data-ml": projects.filter((p) => p.category === "data-ml").length,
  };

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  const sorted = [...visible].sort((a, b) => Number(b.featured) - Number(a.featured));
  const hasMoreProjects = sorted.length > initialVisibleCount;
  const visibleProjects = showAll ? sorted : sorted.slice(0, initialVisibleCount);

  function handleFilterChange(filter: ProjectCategory | "all") {
    setActive(filter);
    setShowAll(false);
  }

  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-10 sm:py-12">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/10 text-accent">
              <FolderGit2 size={14} />
            </span>
            <p className="text-sm font-semibold text-accent">Koleksi Proyek</p>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Karya & Eksplorasi Pilihan
          </h2>
          <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-muted">
            Kombinasi aplikasi web berbasis framework modern, perancangan REST API,
            serta implementasi analitika citra & machine learning berbasis masalah riil.
          </p>
        </div>

        {/* Filter Buttons with Category Counts */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => {
            const isSelected = active === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => handleFilterChange(filter.key)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all ${
                  isSelected
                    ? "bg-accent text-accent-ink shadow-sm shadow-accent/20"
                    : "border border-border bg-card text-muted hover:border-accent/40 hover:text-ink"
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[11px] font-mono leading-none ${
                    isSelected
                      ? "bg-accent-ink/20 text-accent-ink"
                      : "bg-surface text-muted"
                  }`}
                >
                  {counts[filter.key]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Show More Button */}
      {hasMoreProjects && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold shadow-sm transition-all hover:bg-surface hover:border-accent/40"
          >
            {showAll ? "Tampilkan lebih sedikit" : "Lihat project lainnya"}
            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </section>
  );
}
