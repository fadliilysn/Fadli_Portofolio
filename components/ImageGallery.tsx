"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  Maximize2,
  X,
} from "lucide-react";
import { normalizeImagePath } from "@/data/projects";

export default function ImageGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const validImages = images
    .map(normalizeImagePath)
    .filter(Boolean) as string[];

  const prev = useCallback(() => {
    setActive((a) => (a - 1 + validImages.length) % validImages.length);
  }, [validImages.length]);

  const next = useCallback(() => {
    setActive((a) => (a + 1) % validImages.length);
  }, [validImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  if (validImages.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base font-semibold text-ink">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/10 text-accent">
            <Layers size={13} />
          </span>
          Preview Tampilan ({validImages.length} Gambar)
        </h2>
        <span className="text-xs text-muted">
          Klik gambar untuk memperbesar
        </span>
      </div>

      {/* Main Preview Container with Browser Window Style */}
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/70 shadow-sm transition-all hover:border-accent/30 dark:bg-card">
        {/* Subtle browser-like top bar */}
        <div className="flex items-center justify-between border-b border-border/80 bg-surface/90 px-4 py-2.5 backdrop-blur-sm dark:bg-surface/50">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-2 truncate text-[11px] font-medium text-muted">
              {title} — Screenshot #{active + 1}
            </span>
          </div>

          <button
            onClick={() => setIsLightboxOpen(true)}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-muted transition hover:bg-card hover:text-ink"
            title="Perbesar gambar"
          >
            <Maximize2 size={13} />
            <span className="hidden sm:inline">Perbesar</span>
          </button>
        </div>

        {/* Image wrapper: using object-contain with flexible height so full screenshot is preserved */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="relative aspect-[16/10] w-full cursor-zoom-in bg-gradient-to-b from-transparent to-black/[0.02] p-2 sm:p-4 sm:aspect-[16/10] dark:to-white/[0.02]"
        >
          <Image
            key={active}
            src={validImages[active]}
            alt={`Preview ${title} — ${active + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-contain p-1 sm:p-2 transition-all duration-300 drop-shadow-sm"
            priority
          />

          {/* Nav arrows */}
          {validImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Gambar sebelumnya"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/90 text-ink shadow-md backdrop-blur-md transition hover:scale-105 hover:bg-card active:scale-95"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Gambar berikutnya"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/90 text-ink shadow-md backdrop-blur-md transition hover:scale-105 hover:bg-card active:scale-95"
              >
                <ChevronRight size={18} />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 rounded-full bg-card/80 px-2.5 py-1 backdrop-blur-md border border-border/60">
                {validImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(i);
                    }}
                    aria-label={`Pilih gambar ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === active ? "w-5 bg-accent" : "w-1.5 bg-muted/40 hover:bg-muted"
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Thumbnail strip */}
      {validImages.length > 1 && (
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1">
          {validImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 bg-surface/80 p-1 transition-all ${i === active
                  ? "border-accent shadow-md shadow-accent/20 ring-2 ring-accent/20"
                  : "border-border opacity-70 hover:opacity-100 hover:border-border/80"
                }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  sizes="100px"
                  className="object-contain"
                />
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox / Fullscreen Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md transition-opacity animate-in fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Tutup preview"
            className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95"
          >
            <X size={20} />
          </button>

          {/* Lightbox Navigation Buttons */}
          {validImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Gambar sebelumnya"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Gambar berikutnya"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Lightbox Full Image Content */}
          <div
            className="relative flex h-full max-h-[88vh] w-full max-w-6xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full">
              <Image
                src={validImages[active]}
                alt={`Preview ${title} — ${active + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            {/* Image counter caption */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
              {active + 1} / {validImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
