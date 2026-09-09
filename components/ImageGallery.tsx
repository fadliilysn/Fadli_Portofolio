"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { normalizeImagePath } from "@/data/projects";

export default function ImageGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const validImages = images.map(normalizeImagePath).filter(Boolean) as string[];
  if (validImages.length === 0) return null;

  const prev = () =>
    setActive((a) => (a - 1 + validImages.length) % validImages.length);
  const next = () =>
    setActive((a) => (a + 1) % validImages.length);

  return (
    <div className="mt-8">
      <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-ink">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/10 text-accent">
          <Layers size={13} />
        </span>
        Preview Tampilan
      </h2>

      {/* Main large image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
        <Image
          key={active}
          src={validImages[active]}
          alt={`Preview ${title} — ${active + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
        />

        {validImages.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Gambar sebelumnya"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Gambar berikutnya"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {validImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Gambar ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-5 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {validImages.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {validImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                i === active
                  ? "border-accent shadow-md shadow-accent/20"
                  : "border-border opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
