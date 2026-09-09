import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Layers,
  ScatterChart,
  Star,
  Calendar,
  Tag,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import {
  projects,
  getProjectBySlug,
  Project,
} from "@/data/projects";

const categoryMeta: Record<
  Project["category"],
  { Icon: typeof Layers; pattern: string; label: string; color: string }
> = {
  web: {
    Icon: Layers,
    pattern:
      "repeating-linear-gradient(45deg, rgb(var(--accent) / 0.08) 0, rgb(var(--accent) / 0.08) 1px, transparent 1px, transparent 12px)",
    label: "Web Application",
    color: "text-blue-500 bg-blue-500/10 border-blue-500/25",
  },
  "data-ml": {
    Icon: ScatterChart,
    pattern:
      "radial-gradient(rgb(var(--accent) / 0.22) 1.5px, transparent 1.5px)",
    label: "Data & Machine Learning",
    color: "text-violet-500 bg-violet-500/10 border-violet-500/25",
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

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const catMeta = categoryMeta[project.category];

  // Build gallery: extra images + main image (avoid duplicates)
  const galleryImages: string[] = [
    ...(project.images ?? []),
    ...(project.image && !(project.images ?? []).includes(project.image)
      ? [project.image]
      : []),
  ].filter(Boolean);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-content px-6 py-12 sm:py-16">

        {/* ── Back Link ── */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} />
          Kembali ke semua project
        </Link>

        {/* ── Content Grid ── */}
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_272px]">

          {/* ── Left: Main Content ── */}
          <div>
            {/* Title & meta */}
            <p className="text-sm font-semibold text-accent">{project.role}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {project.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted">
              {project.year && (
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  {project.year}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Tag size={13} />
                {catMeta.label}
              </span>
            </div>

            {/* Description */}
            <div className="mt-5 rounded-xl border border-border bg-surface p-5 text-[15px] leading-relaxed text-muted">
              <p>{project.description}</p>
            </div>

            {/* Gallery (client component) */}
            {galleryImages.length > 0 && (
              <ImageGallery images={galleryImages} title={project.title} />
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-ink">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Zap size={13} />
                  </span>
                  Fitur Utama
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/40 hover:shadow-sm"
                    >
                      {feat.icon && (
                        <span className="mb-2 block text-2xl leading-none">
                          {feat.icon}
                        </span>
                      )}
                      <p className="text-sm font-semibold text-ink">
                        {feat.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Right Sidebar ── */}
          <aside className="h-fit space-y-4">

            {/* Action Buttons */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Tautan
              </p>
              <div className="space-y-2.5">
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
            </div>

            {/* Tech Stack */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Teknologi
              </p>
              <div className="flex flex-wrap gap-1.5">
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

            {/* Info Card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Info Proyek
              </p>
              <div className="space-y-2.5 text-sm">
                {project.year && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Tahun</span>
                    <span className="font-semibold text-ink">{project.year}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-muted">Kategori</span>
                  <span className="font-semibold text-ink">
                    {project.category === "web" ? "Web App" : "Data / ML"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Status</span>
                  <span
                    className={`flex items-center gap-1.5 font-semibold ${
                      project.demo ? "text-emerald-500" : "text-muted"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.demo ? "bg-emerald-500" : "bg-muted"
                      }`}
                    />
                    {project.demo ? "Live" : "Closed"}
                  </span>
                </div>
                {project.featured && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Label</span>
                    <span className="flex items-center gap-1 font-semibold text-amber-500">
                      <Star size={11} className="fill-amber-500" />
                      Unggulan
                    </span>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* ── Prev / Next Navigation ── */}
        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-1 flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/50 hover:bg-surface"
              >
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <ArrowLeft
                    size={13}
                    className="text-accent transition-transform group-hover:-translate-x-1"
                  />
                  <span>Project Sebelumnya</span>
                </div>
                <p className="mt-1.5 font-semibold text-ink transition-colors group-hover:text-accent">
                  {prevProject.title}
                </p>
              </Link>
            ) : (
              <div className="hidden flex-1 sm:block" />
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
                    className="text-accent transition-transform group-hover:translate-x-1"
                  />
                </div>
                <p className="mt-1.5 font-semibold text-ink transition-colors group-hover:text-accent">
                  {nextProject.title}
                </p>
              </Link>
            ) : (
              <div className="hidden flex-1 sm:block" />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
