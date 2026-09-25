"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, FileText, ExternalLink, Sparkles } from "lucide-react";

const navigationLinks = [
  { href: "/#about", label: "Tentang" },
  { href: "/#experience", label: "Pengalaman" },
  { href: "/#certifications", label: "Sertifikasi" },
  { href: "/#projects", label: "Proyek Pilihan" },
  { href: "/#contact", label: "Kontak" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/fadliilysn",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/muhamad-fadli-ilyaasin",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:muhamadfadli2016a@gmail.com",
    icon: Mail,
  },
  {
    label: "Unduh CV",
    href: "/CV-Muhamad Fadli Ilyaasin.pdf",
    icon: FileText,
    isDownload: true,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-border bg-surface/40 backdrop-blur-sm">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-[100px]"
      />

      <div className="mx-auto max-w-content px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Brief Bio (5 cols) */}
          <div className="space-y-4 lg:col-span-5">
            <Link
              href="/"
              className="inline-block text-lg font-bold tracking-tight text-ink transition-colors hover:text-accent"
            >
              Muhamad Fadli Ilyaasin
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Software Developer & Mahasiswa Teknik Informatika yang berfokus pada Backend Engineering, Modern Web Apps, dan Machine Learning aplikatif.
            </p>

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Terbuka untuk peluang kerja & kolaborasi
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="space-y-3 lg:col-span-3 lg:pl-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">
              Navigasi
            </p>
            <ul className="space-y-2 text-sm text-muted">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block transition-colors hover:translate-x-0.5 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect (4 cols) */}
          <div className="space-y-3 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">
              Koneksi & Dokumen
            </p>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(item.isDownload
                      ? { download: true }
                      : { target: "_blank", rel: "noreferrer" })}
                    className="group flex items-center justify-between rounded-lg border border-border bg-card/60 px-3 py-2 text-xs font-medium text-muted transition-all hover:border-accent/40 hover:bg-card hover:text-ink"
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={14} className="text-accent transition-transform group-hover:scale-110" />
                      {item.label}
                    </span>
                    <ExternalLink size={12} className="opacity-40 transition-opacity group-hover:opacity-100" />
                  </a>
                );
              })}
            </div>
            <p className="text-[12px] leading-relaxed text-muted pt-1">
              Tertarik bekerja sama? Jangan ragu untuk berdiskusi santai melalui email atau LinkedIn.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Tech stack credit, and Scroll to top */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Muhamad Fadli Ilyaasin.</span>
            <span className="hidden text-border sm:inline">•</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="group flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-muted transition-all hover:border-accent/50 hover:bg-surface hover:text-ink"
          >
            <span>Kembali ke atas</span>
            <ArrowUp
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
