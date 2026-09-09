"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, CalendarDays, ChevronDown, ArrowRight } from "lucide-react";
import { certifications } from "@/data/certifications";

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
        <p className="text-xs sm:text-sm font-semibold text-accent">Sertifikasi &amp; Kredensial</p>
        <h2 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl">
          Sertifikasi &amp; Lisensi Profesional
        </h2>
        <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
          Kredensial terverifikasi yang memperkuat kompetensi teknis dalam pengelolaan basis data,
          analitika informasi, dan pemanfaatan teknologi AI modern.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCertifications.map((cert) => (
          <Link
            key={`${cert.issuer}-${cert.title}`}
            href={`/certifications/${cert.slug}`}
            className="group flex h-full min-h-[320px] flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/50 hover:shadow-md hover:shadow-accent/5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <Award size={18} />
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[12px] text-muted">
                <CalendarDays size={13} />
                {cert.date}
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-[16px] font-semibold leading-snug transition-colors group-hover:text-accent">
                {cert.title}
              </h3>
              <p className="mt-1 text-[13px] font-medium text-muted">
                {cert.issuer}
              </p>
            </div>

            <p className="mt-4 flex-1 text-[14px] leading-relaxed text-muted">
              {cert.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-border px-2 py-0.5 text-[11px] text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* "Lihat detail" hint */}
            <div className="mt-5 flex items-center gap-1 text-[13px] font-semibold text-accent">
              Lihat detail
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>
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
