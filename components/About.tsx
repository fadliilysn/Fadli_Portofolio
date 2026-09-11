import {
  Database,
  Layers3,
  Workflow,
  GraduationCap,
  Calendar,
  Award,
  Code2,
  Server,
  Cpu,
  Boxes,
  Binary,
  GitBranch,
  Network,
  Eye,
  FileCode,
  Zap,
} from "lucide-react";

interface TechItem {
  name: string;
  icon: typeof Code2;
}

const skillCategories: {
  label: string;
  desc: string;
  items: TechItem[];
}[] = [
    {
      label: "Frontend Web",
      desc: "Membangun antarmuka modern, interaktif, & responsif.",
      items: [
        { name: "React", icon: Code2 },
        { name: "Next.js", icon: Zap },
        { name: "TypeScript", icon: FileCode },
        { name: "Tailwind CSS", icon: Layers3 },
      ],
    },
    {
      label: "Backend & API",
      desc: "Perancangan arsitektur server, endpoint RESTful, & logic data.",
      items: [
        { name: "Laravel", icon: Server },
        { name: "Flask", icon: Network },
        { name: "PHP", icon: FileCode },
        { name: "REST API", icon: Binary },
      ],
    },
    {
      label: "Data & ML",
      desc: "Pemrosesan citra digital & pemodelan machine learning.",
      items: [
        { name: "Python", icon: Code2 },
        { name: "SVM", icon: Cpu },
        { name: "OpenCV", icon: Eye },
        { name: "GLCM & Feature Ext.", icon: Binary },
      ],
    },
    {
      label: "Database & Tools",
      desc: "Manajemen basis data relasional, cloud infra, & version control.",
      items: [
        { name: "PostgreSQL", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "Supabase", icon: Zap },
        { name: "Git", icon: GitBranch },
        { name: "Docker", icon: Boxes },
      ],
    },
  ];

const strengths = [
  {
    title: "End-to-End Development",
    description:
      "Terbiasa merancang alur sistem dari nol—mulai dari permodelan skema data, pengembangan business logic di backend, hingga integrasi antarmuka yang responsif.",
    Icon: Workflow,
  },
  {
    title: "Backend & API Architecture",
    description:
      "Berpengalaman membangun REST API yang aman, modular, dan terdokumentasi terstruktur untuk mempermudah konsumsi data oleh sisi frontend.",
    Icon: Layers3,
  },
  {
    title: "Data Science & Machine Learning",
    description:
      "Menerapkan pipeline Computer Vision mulai dari preprocessing citra, ekstraksi fitur citra (Color Moments, GLCM), pemodelan klasifikasi SVM, hingga deployment aplikasi berbasis web.",
    Icon: Database,
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-10 sm:py-12">
      {/* Section Header */}
      <div className="max-w-2xl">
        <p className="text-xs sm:text-sm font-semibold text-accent">Tentang Saya</p>
        <h2 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl">
          Latar Belakang & Pendekatan Teknis
        </h2>
        <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
          Mahasiswa tingkat akhir Teknik Informatika di Bandung yang antusias dalam
          merancang sistem perangkat lunak terstruktur, antarmuka web modern, dan analitika data.
        </p>
      </div>

      {/* Education & Academic Highlight Banner */}
      <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/40">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <GraduationCap size={24} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold text-ink">
                  S1 Teknik Informatika — Universitas Sangga Buana YPKP Bandung
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  <Award size={12} />
                  IPK: 3.88
                </span>
              </div>
              <p className="mt-1 text-[13.5px] leading-relaxed text-muted">
                Riset Skripsi: Klasifikasi Kesegaran Rimpang Jahe berbasis Computer Vision & SVM
                (ekstraksi fitur Color Moments HSV + GLCM), dideploy sebagai aplikasi web di Hugging Face & Supabase.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-muted">
            <Calendar size={14} className="text-accent" />
            <span>2022 — Sekarang (Tingkat Akhir)</span>
          </div>
        </div>
      </div>

      {/* Core Strengths */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {strengths.map(({ title, description, Icon }) => (
          <article
            key={title}
            className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/50 hover:shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
              <Icon size={19} />
            </div>
            <h3 className="mt-4 text-[16px] font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
              {description}
            </p>
          </article>
        ))}
      </div>

      {/* Tech Stack Showcase */}
      <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">Keahlian & Tech Stack</h3>
          <p className="mt-1 text-[13px] text-muted">
            Teknologi dan perangkat lunak yang saya gunakan untuk mengembangkan aplikasi web, REST API, dan analitika data.
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((group) => (
            <div
              key={group.label}
              className="flex flex-col rounded-xl border border-border/70 bg-surface/40 p-4 transition-all hover:border-accent/30"
            >
              <div className="border-b border-border/60 pb-2.5">
                <p className="text-[13.5px] font-semibold text-ink">{group.label}</p>
                <p className="mt-0.5 text-[11.5px] text-muted leading-tight">{group.desc}</p>
              </div>

              <div className="mt-3.5 flex flex-wrap gap-2">
                {group.items.map(({ name, icon: Icon }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1.5 text-[12.5px] font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent hover:shadow-sm"
                  >
                    <Icon size={14} className="text-accent/80" />
                    <span>{name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
