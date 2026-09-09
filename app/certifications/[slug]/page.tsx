import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CalendarDays,
  ExternalLink,
  ImageOff,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { certifications, getCertificationBySlug } from "@/data/certifications";

export function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cert = getCertificationBySlug(params.slug);
  if (!cert) return {};
  return {
    title: `${cert.title} — Muhamad Fadli Ilyaasin`,
    description: cert.description,
  };
}

export default function CertificationDetail({
  params,
}: {
  params: { slug: string };
}) {
  const cert = getCertificationBySlug(params.slug);
  if (!cert) notFound();

  const currentIndex = certifications.findIndex((c) => c.slug === params.slug);
  const prevCert = currentIndex > 0 ? certifications[currentIndex - 1] : null;
  const nextCert =
    currentIndex < certifications.length - 1
      ? certifications[currentIndex + 1]
      : null;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-content px-6 py-12 sm:py-16">

        {/* ── Back Link ── */}
        <Link
          href="/#certifications"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} />
          Kembali ke semua sertifikat
        </Link>

        {/* ── Content ── */}
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_260px]">

          {/* ── Left: Main ── */}
          <div>
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Award size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-accent">{cert.issuer}</p>
                <h1 className="mt-0.5 text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
                  {cert.title}
                </h1>
              </div>
            </div>

            {/* Meta */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={13} />
                {cert.date}
              </span>
            </div>

            {/* Description */}
            <div className="mt-5 rounded-xl border border-border bg-surface p-5 text-[15px] leading-relaxed text-muted">
              <p>{cert.description}</p>
            </div>

            {/* Certificate Image */}
            <div className="mt-8">
              <h2 className="mb-4 text-base font-semibold text-ink">
                Gambar Sertifikat
              </h2>
              {cert.image ? (
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-md">
                  <Image
                    src={cert.image}
                    alt={`Sertifikat ${cert.title}`}
                    width={900}
                    height={640}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </div>
              ) : (
                <div className="flex min-h-[260px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-surface text-muted">
                  <ImageOff size={32} className="opacity-40" />
                  <p className="text-sm">Gambar sertifikat belum tersedia.</p>
                  <p className="text-xs opacity-60">
                    Tambahkan field{" "}
                    <code className="rounded bg-border/60 px-1.5 py-0.5 font-mono text-[11px]">
                      image
                    </code>{" "}
                    di{" "}
                    <code className="rounded bg-border/60 px-1.5 py-0.5 font-mono text-[11px]">
                      data/certifications.ts
                    </code>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ── Right Sidebar ── */}
          <aside className="h-fit space-y-4">

            {/* Credential Link */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Verifikasi
              </p>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-accent py-2.5 text-sm font-semibold text-accent-ink shadow-md shadow-accent/20 transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                <ExternalLink size={15} />
                Lihat Kredensial Resmi
              </a>
            </div>

            {/* Info Card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Info Sertifikat
              </p>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted">Penerbit</span>
                  <span className="font-semibold text-ink">{cert.issuer}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Tahun</span>
                  <span className="font-semibold text-ink">{cert.date}</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Skill Terkait
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-bg px-2.5 py-1 text-xs font-medium text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* ── Prev / Next Navigation ── */}
        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row">
            {prevCert ? (
              <Link
                href={`/certifications/${prevCert.slug}`}
                className="group flex flex-1 flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/50 hover:bg-surface"
              >
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <ArrowLeft
                    size={13}
                    className="text-accent transition-transform group-hover:-translate-x-1"
                  />
                  <span>Sertifikat Sebelumnya</span>
                </div>
                <p className="mt-1.5 font-semibold text-ink transition-colors group-hover:text-accent">
                  {prevCert.title}
                </p>
              </Link>
            ) : (
              <div className="hidden flex-1 sm:block" />
            )}

            {nextCert ? (
              <Link
                href={`/certifications/${nextCert.slug}`}
                className="group flex flex-1 flex-col items-end rounded-xl border border-border bg-card p-4 text-right transition-all hover:border-accent/50 hover:bg-surface"
              >
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <span>Sertifikat Selanjutnya</span>
                  <ArrowRight
                    size={13}
                    className="text-accent transition-transform group-hover:translate-x-1"
                  />
                </div>
                <p className="mt-1.5 font-semibold text-ink transition-colors group-hover:text-accent">
                  {nextCert.title}
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
