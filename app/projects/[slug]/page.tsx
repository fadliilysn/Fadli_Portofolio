import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Layers,
  ScatterChart,
  Star,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug, Project, normalizeImagePath } from "@/data/projects";

const categoryMeta: Record<Project["category"], { Icon: typeof Layers; pattern: string }> = {
  web: {
    Icon: Layers,
    pattern:
      "repeating-linear-gradient(45deg, rgb(var(--accent) / 0.08) 0, rgb(var(--accent) / 0.08) 1px, transparent 1px, transparent 12px)",
  },
  "data-ml": {
    Icon: ScatterChart,
    pattern: "radial-gradient(rgb(var(--accent) / 0.22) 1.5px, transparent 1.5px)",
  },
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Muhamad Fadli Ilyaasin`,
    description: project.summary,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-content px-6 py-12 sm:py-16">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} />
          Kembali ke semua project
        </Link>

        {/* Project Image Banner */}
        {(() => {
          const imageSrc = normalizeImagePath(project.image);
          return (
            <div className="relative mt-6 aspect-[16/8] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={`Tangkapan layar ${project.title}`}
                  fill
                  priority
                  className="object-cover"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{
                    backgroundImage: categoryMeta[project.category].pattern,
                    backgroundSize: project.category === "data-ml" ? "18px 18px" : "auto",
                  }}
                >
                  {(() => {
                    const Icon = categoryMeta[project.category].Icon;
                    return <Icon size={44} strokeWidth={1.5} className="text-accent/60" />;
                  })()}
                </div>
              )}
            </div>
          );
        })()}

        {/* Main Details & Sidebar */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_300px]">
          <div>
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                {project.category === "web" ? "Web Application" : "Data & Machine Learning"}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-500">
                  <Star size={12} className="fill-amber-500" />
                  Proyek Unggulan
                </span>
              )}
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-2 text-sm font-semibold text-accent">{project.role}</p>

            <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-muted">
              <p>{project.description}</p>
            </div>
          </div>

          {/* Right Sidebar: Tech Stack & Actions */}
          <aside className="h-fit space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Teknologi Digunakan
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-bg px-2.5 py-1 text-xs font-medium text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2.5 border-t border-border pt-5">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-surface"
              >
                <Github size={16} />
                Lihat Kode di GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-accent py-2.5 text-sm font-semibold text-accent-ink shadow-md shadow-accent/20 transition-all hover:shadow-lg hover:shadow-accent/25"
                >
                  <ExternalLink size={16} />
                  Buka Live Demo
                </a>
              )}
            </div>
          </aside>
        </div>

        {/* Project Pagination (Previous & Next Project Navigation) */}
        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-1 flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/50 hover:bg-surface"
              >
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <ArrowLeft
                    size={13}
                    className="transition-transform group-hover:-translate-x-1 text-accent"
                  />
                  <span>Project Sebelumnya</span>
                </div>
                <p className="mt-1.5 font-semibold text-ink transition-colors group-hover:text-accent">
                  {prevProject.title}
                </p>
              </Link>
            ) : (
              <div className="hidden sm:block flex-1" />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-1 flex-col items-end rounded-xl border border-border bg-card p-4 text-right transition-all hover:border-accent/50 hover:bg-surface"
              >
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <span>Project Selanjutnya</span>
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1 text-accent"
                  />
                </div>
                <p className="mt-1.5 font-semibold text-ink transition-colors group-hover:text-accent">
                  {nextProject.title}
                </p>
              </Link>
            ) : (
              <div className="hidden sm:block flex-1" />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
