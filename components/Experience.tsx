import { BriefcaseBusiness, Calendar, MapPin, Code2, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "PT Kirim Email Indonesia",
    period: "Agustus — Oktober 2025",
    location: "Bandung, Indonesia",
    type: "Internship",
    summary:
      "Membangun dan mendokumentasikan REST API untuk modul Autentikasi dan Email yang dikonsumsi langsung oleh tim frontend React.",
    highlights: [
      "Membangun 9+ endpoint REST API untuk kebutuhan autentikasi dan modul manajemen email.",
      "Menyusun dokumentasi API terstruktur sehingga integrasi antarmuka frontend berjalan lancar tanpa kendala.",
      "Berkolaborasi aktif dengan tim frontend React dalam penyesuaian payload dan alur request-response data.",
    ],
    stack: ["Laravel", "PHP", "REST API", "React Integration", "Postman"],
  },
  {
    role: "Web & Database Developer",
    company: "Universitas Sangga Buana YPKP (Proyek PKM Dosen)",
    period: "Februari — Juni 2024",
    location: "Bandung, Indonesia",
    type: "Academic Project",
    summary:
      "Merancang basis data relasional dan mengembangkan sistem administrasi berbasis web untuk pelaporan data penelitian & pengabdian dosen.",
    highlights: [
      "Merancang skema database MySQL terstruktur untuk pengelolaan dan rekapitulasi data tridharma dosen.",
      "Membangun modul backend menggunakan PHP dengan alur input, validasi, dan pelaporan yang efisien.",
      "Mengimplementasikan antarmuka web yang mudah digunakan oleh civitas akademika.",
    ],
    stack: ["PHP", "MySQL", "Bootstrap", "Database Design"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-6 py-10 sm:py-12">
      <div>
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold text-accent">Pengalaman Kerja</p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl">
            Pengalaman Profesional & Proyek Relevan
          </h2>
          <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
            Riwayat pengalaman kerja magang dan proyek nyata yang mengasah pemahaman backend,
            manajemen data, serta kerja sama tim.
          </p>
        </div>

        {/* Visual Timeline */}
        <div className="relative mt-10 ml-3 sm:ml-6 border-l-2 border-border/80 pl-6 sm:pl-9 space-y-10">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.role}`} className="relative group">
              {/* Timeline Glowing Node */}
              <span
                className="absolute -left-[31px] sm:-left-[43px] top-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-accent bg-bg text-accent shadow-sm shadow-accent/20 transition-transform group-hover:scale-110"
                aria-hidden
              >
                <BriefcaseBusiness size={14} />
              </span>

              {/* Experience Card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/40 hover:shadow-md">
                {/* Header Info */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg font-bold text-ink">{exp.role}</h3>
                      <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-medium text-muted">
                        <Code2 size={12} />
                        {exp.type}
                      </span>
                    </div>
                    <p className="mt-1 text-[14.5px] font-medium text-accent">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg px-2.5 py-1">
                      <Calendar size={13} className="text-accent" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
                  {exp.summary}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-2.5 border-t border-border/60 pt-4">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-muted">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4">
                  {exp.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-bg px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-accent/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
