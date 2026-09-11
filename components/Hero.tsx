"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Terminal, Code2, Server, Cpu, Check, Copy } from "lucide-react";

const stats = [
  { value: "5+", label: "Project portfolio" },
  { value: "4+", label: "Sertifikasi relevan" },
  { value: "1", label: "Pengalaman internship" },
  { value: "3.88", label: "IPK terakhir" },
];

const focusAreas = [
  {
    title: "Backend & REST API",
    desc: "Merancang arsitektur server dengan Laravel & PHP, integrasi REST API yang aman, serta manajemen database relasional.",
    icon: Server,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Frontend Web App",
    desc: "Membangun antarmuka interaktif, responsif, dan berperforma tinggi dengan ekosistem React, Next.js, TypeScript, & Tailwind.",
    icon: Code2,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Data & Machine Learning",
    desc: "Mengembangkan pipeline ekstraksi fitur citra (Color Moments, GLCM) dan klasifikasi SVM menggunakan Python & OpenCV.",
    icon: Cpu,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

const devSnippet = `{
  "developer": "Muhamad Fadli Ilyaasin",
  "status": "Final-year Student @ USB YPKP",
  "ipk": 3.88,
  "location": "Bandung, ID",
  "specialties": ["Backend", "Frontend", "Data & ML"],
  "availableForHire": true
}`;

export default function Hero() {
  const [cvAlert, setCvAlert] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"focus" | "config">("focus");
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleDownloadCv = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      const res = await fetch("public/files/CV-Muhamad-Fadli-Ilyaasin.pdf", { method: "HEAD" });
      if (!res.ok) {
        e.preventDefault();
        setCvAlert("File CV sedang dalam pembaruan. Silakan hubungi via email untuk resume terbaru.");
        setTimeout(() => setCvAlert(null), 4000);
      }
    } catch {
      e.preventDefault();
      setCvAlert("File CV sedang dalam pembaruan. Silakan hubungi via email untuk resume terbaru.");
      setTimeout(() => setCvAlert(null), 4000);
    }
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(devSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      {/* Ambient background glow */}
      <div aria-hidden className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px] dark:bg-accent/20" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/15" />

      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgb(var(--accent) / 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "-12px -12px",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-content gap-12 px-6 pb-16 pt-14 sm:pb-20 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-20">
        {/* Left Column: Bio & CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[12.5px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Open for Work
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl text-[2.45rem] font-bold leading-[1.08] tracking-tight sm:text-[3.25rem]">Membangun Web App Modern, REST API Handal, dan Solusi Berbasis Data.</h1>

          <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted">
            Saya <strong className="font-semibold text-ink">Muhamad Fadli Ilyaasin</strong>, pengembang perangkat lunak & mahasiswa tingkat akhir Teknik Informatika di Universitas Sangga Buana YPKP Bandung. Fokus merancang arsitektur
            backend yang kokoh, antarmuka web yang intuitif, serta solusi machine learning aplikatif yang memecahkan masalah riil.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-ink shadow-md shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            >
              Lihat project
              <ArrowRight size={15} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface">
              <Mail size={15} />
              Hubungi saya
            </a>
            <a href="/cv-fadli.pdf" download onClick={handleDownloadCv} className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface">
              <Download size={15} />
              Unduh CV
            </a>
          </div>

          <AnimatePresence>
            {cvAlert && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="mt-3 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3.5 py-2 text-xs font-medium text-accent"
              >
                <span>ℹ️</span>
                <span>{cvAlert}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-6 flex items-center gap-2 text-[13px] text-muted">
            <MapPin size={14} className="text-accent" />
            Berbasis di Bandung, Indonesia • Terbuka untuk peluang Full-time, Internship, dan Kolaborasi Proyek.
          </p>
        </motion.div>

        {/* Right Column: Interactive Developer Terminal Card */}
        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card/95 shadow-xl backdrop-blur-md transition-all hover:border-accent/40"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between border-b border-border bg-surface/80 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-muted flex items-center gap-1.5">
                <Terminal size={12} />
                fadli@portfolio:~
              </span>
            </div>

            {/* Tab switchers */}
            <div className="flex items-center rounded-lg border border-border bg-bg/80 p-0.5 text-xs font-medium">
              <button type="button" onClick={() => setActiveTab("focus")} className={`rounded-md px-2.5 py-1 transition-all ${activeTab === "focus" ? "bg-card font-semibold text-accent shadow-sm" : "text-muted hover:text-ink"}`}>
                Fokus Utama
              </button>
              <button type="button" onClick={() => setActiveTab("config")} className={`rounded-md px-2.5 py-1 transition-all ${activeTab === "config" ? "bg-card font-semibold text-accent shadow-sm" : "text-muted hover:text-ink"}`}>
                fadli.json
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-5 sm:p-6">
            {activeTab === "focus" ? (
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Pilar Keahlian Utama</p>
                {focusAreas.map((item, index) => (
                  <div key={item.title} className="group flex items-start gap-3.5 rounded-xl border border-border/60 bg-surface/50 p-3.5 transition-all hover:border-accent/40 hover:bg-surface">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.bg} ${item.color} transition-transform group-hover:scale-105`}>
                      <item.icon size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-semibold text-accent">0{index + 1}</span>
                        <h2 className="text-[14px] font-semibold text-ink">{item.title}</h2>
                      </div>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative">
                <div className="flex items-center justify-between pb-2">
                  <span className="font-mono text-xs text-muted">// developer_spec.json</span>
                  <button type="button" onClick={handleCopySnippet} className="flex items-center gap-1 text-[11px] font-medium text-muted hover:text-ink">
                    {copiedSnippet ? (
                      <>
                        <Check size={12} className="text-emerald-500" />
                        <span className="text-emerald-500">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="overflow-x-auto rounded-xl border border-border bg-bg/90 p-3.5 font-mono text-[12.5px] leading-relaxed text-muted">
                  <code>{devSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        </motion.aside>

        {/* Stats Section */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:col-span-2 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg px-5 py-5 transition-colors hover:bg-surface/50">
              <dt className="font-mono text-[28px] font-semibold tracking-tight text-accent sm:text-[32px]">{stat.value}</dt>
              <dd className="mt-1 text-[12.5px] leading-snug text-muted">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
