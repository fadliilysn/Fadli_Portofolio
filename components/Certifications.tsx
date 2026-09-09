"use client";

import { useState } from "react";
import { Award, CalendarDays, ChevronDown, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Office Specialist: Excel Associate Microsoft 365 Apps",
    issuer: "Certiport",
    date: "2025",
    description:
      "Membuktikan kompetensi profesional dalam pemodelan data, formulasi kalkulasi logika tingkat lanjut, serta analisis visual menggunakan Microsoft Excel.",
    credentialUrl: "https://www.credly.com/badges/a0438cdc-7b6c-4c65-9f85-ef58d92c47d2/",
    skills: ["Microsoft Excel", "Data Analysis", "Spreadsheet"],
  },
  {
    title: "Prompt Engineering for Software Developers",
    issuer: "Dicoding",
    date: "2026",
    description:
      "Memvalidasi keahlian perancangan prompt terstruktur, manajemen konteks dinamis, dan teknik optimasi output AI untuk efisiensi pengembangan perangkat lunak.",
    credentialUrl: "https://www.dicoding.com/certificates/0LZ0YK0O0X65",
    skills: ["Prompt Engineering", "AI", "NLP"],
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding",
    date: "2024",
    description:
      "Menguasai perancangan kueri basis data relasional, manipulasi data (CRUD), penggabungan tabel berelasi (JOIN), dan integritas data menggunakan SQL.",
    credentialUrl: "https://www.dicoding.com/certificates/0LZ06M5YQZ65",
    skills: ["SQL", "Database", "Querying"],
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    date: "2024",
    description:
      "Memahami fundamental konseptual kecerdasan buatan, alur kerja machine learning & deep learning, serta penerapan algoritma cerdas dalam skenario riil.",
    credentialUrl: "https://www.dicoding.com/certificates/ERZR12Q2QZYV",
    skills: ["AI", "Machine Learning", "Deep Learning"],
  },
];

const initialVisibleCount = 3;

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const hasMoreCertifications = certifications.length > initialVisibleCount;
  const visibleCertifications = showAll
    ? certifications
    : certifications.slice(0, initialVisibleCount);

  return (
    <section id="certifications" className="mx-auto max-w-content px-6 py-10 sm:py-12">
      <div className="max-w-2xl">
        <p className="text-xs sm:text-sm font-semibold text-accent">Sertifikasi & Kredensial</p>
        <h2 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl">
          Sertifikasi & Lisensi Profesional
        </h2>
        <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
          Kredensial terverifikasi yang memperkuat kompetensi teknis dalam pengelolaan basis data,
          analitika informasi, dan pemanfaatan teknologi AI modern.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCertifications.map((certification) => (
          <article
            key={`${certification.issuer}-${certification.title}`}
            className="flex h-full min-h-[320px] flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Award size={18} />
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[12px] text-muted">
                <CalendarDays size={13} />
                {certification.date}
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-[16px] font-semibold leading-snug">
                {certification.title}
              </h3>
              <p className="mt-1 text-[13px] font-medium text-muted">
                {certification.issuer}
              </p>
            </div>

            <p className="mt-4 flex-1 text-[14px] leading-relaxed text-muted">
              {certification.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {certification.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-border px-2 py-0.5 text-[11px] text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent"
            >
              Lihat kredensial
              <ExternalLink size={13} />
            </a>
          </article>
        ))}
      </div>

      {hasMoreCertifications && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-surface"
          >
            {showAll ? "Tampilkan lebih sedikit" : "Lihat lainnya"}
            <ChevronDown
              size={15}
              className={`transition-transform ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </section>
  );
}
