export interface Certification {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl: string;
  skills: string[];
  image?: string; // taruh file di /public/images/certs/, contoh: "/images/certs/mos-excel.png"
}

export const certifications: Certification[] = [
  {
    slug: "mos-excel-associate",
    title: "Microsoft Office Specialist: Excel Associate Microsoft 365 Apps",
    issuer: "Certiport",
    date: "2025",
    description:
      "Membuktikan kompetensi profesional dalam pemodelan data, formulasi kalkulasi logika tingkat lanjut, serta analisis visual menggunakan Microsoft Excel.",
    credentialUrl:
      "https://www.credly.com/badges/a0438cdc-7b6c-4c65-9f85-ef58d92c47d2/",
    skills: ["Microsoft Excel", "Data Analysis", "Spreadsheet"],
    image: "/images/certs/mos-certificate.png",
  },
  {
    slug: "prompt-engineering-dicoding",
    title: "Prompt Engineering for Software Developers",
    issuer: "Dicoding",
    date: "2026",
    description:
      "Memvalidasi keahlian perancangan prompt terstruktur, manajemen konteks dinamis, dan teknik optimasi output AI untuk efisiensi pengembangan perangkat lunak.",
    credentialUrl: "https://www.dicoding.com/certificates/0LZ0YK0O0X65",
    skills: ["Prompt Engineering", "AI", "NLP"],
    // image: "/images/certs/prompt-engineering.png",
  },
  {
    slug: "sql-dasar-dicoding",
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding",
    date: "2024",
    description:
      "Menguasai perancangan kueri basis data relasional, manipulasi data (CRUD), penggabungan tabel berelasi (JOIN), dan integritas data menggunakan SQL.",
    credentialUrl: "https://www.dicoding.com/certificates/0LZ06M5YQZ65",
    skills: ["SQL", "Database", "Querying"],
    // image: "/images/certs/sql-dasar.png",
  },
  {
    slug: "dasar-ai-dicoding",
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    date: "2024",
    description:
      "Memahami fundamental konseptual kecerdasan buatan, alur kerja machine learning & deep learning, serta penerapan algoritma cerdas dalam skenario riil.",
    credentialUrl: "https://www.dicoding.com/certificates/ERZR12Q2QZYV",
    skills: ["AI", "Machine Learning", "Deep Learning"],
    // image: "/images/certs/dasar-ai.png",
  },
];

export function getCertificationBySlug(slug: string) {
  return certifications.find((c) => c.slug === slug);
}
