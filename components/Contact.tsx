"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check, ExternalLink } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "muhamadfadli2016a@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-10 sm:py-12">
      <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-accent">Kontak</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Terbuka untuk peluang kerja dan kolaborasi project.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Jika ada lowongan pekerjaan, tawaran magang, atau project yang cocok,
            jangan ragu untuk menghubungi saya melalui salah satu kanal di bawah ini.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {/* Email Card with Quick Copy */}
          <div className="group relative flex flex-col justify-between rounded-xl border border-border bg-bg p-4 transition-all hover:border-accent/50">
            <div className="flex items-start justify-between gap-2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Mail size={18} />
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Salin email ke clipboard"
                className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-all ${
                  copied
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "border-border bg-card text-muted hover:border-accent/40 hover:text-ink"
                }`}
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-emerald-500" />
                    Tersalin!
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    Salin
                  </>
                )}
              </button>
            </div>

            <div className="mt-4 min-w-0">
              <p className="text-xs font-medium text-muted">Email</p>
              <a
                href={`mailto:${emailAddress}`}
                className="mt-0.5 block truncate text-[13.5px] font-medium transition-colors hover:text-accent"
                title={emailAddress}
              >
                {emailAddress}
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <a
            href="https://github.com/fadliilysn"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between rounded-xl border border-border bg-bg p-4 transition-all hover:border-accent/50"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Github size={18} />
              </span>
              <ExternalLink
                size={14}
                className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
              />
            </div>
            <div className="mt-4 min-w-0">
              <p className="text-xs font-medium text-muted">GitHub</p>
              <p className="mt-0.5 truncate text-[13.5px] font-medium text-ink group-hover:text-accent">
                github.com/fadliilysn
              </p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/muhamad-fadli-ilyaasin"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between rounded-xl border border-border bg-bg p-4 transition-all hover:border-accent/50"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Linkedin size={18} />
              </span>
              <ExternalLink
                size={14}
                className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
              />
            </div>
            <div className="mt-4 min-w-0">
              <p className="text-xs font-medium text-muted">LinkedIn</p>
              <p className="mt-0.5 truncate text-[13.5px] font-medium text-ink group-hover:text-accent">
                muhamad-fadli-ilyaasin
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
