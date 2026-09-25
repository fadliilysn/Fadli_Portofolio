export type ProjectCategory = "web" | "data-ml";

export interface ProjectFeature {
  icon?: string;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  role: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string; // taruh file di /public/images, contoh: "/images/promosiin.png"
  images?: string[]; // array gambar untuk galeri
  year?: string | number;
  features?: ProjectFeature[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "promosiin",
    title: "PromosiIn",
    category: "web",
    summary: "Asisten pemasaran berbasis AI untuk UMKM — ubah foto produk jadi caption siap posting.",
    description:
      "PromosiIn membantu pelaku UMKM mengubah foto produk menjadi caption, hashtag, dan tips posting yang siap pakai. Dibangun untuk IDCamp Developer Challenge, aplikasi ini menganalisis foto produk lewat Google Gemini API dan mengembalikan output terstruktur yang disesuaikan dengan platform (Instagram, TikTok, WhatsApp, e-commerce) dan tone yang dipilih pengguna. API key Gemini dijaga tetap aman lewat Next.js API route di sisi server.",
    role: "Personal project — IDCamp Developer Challenge",
    tech: ["Next.js 14", "JavaScript", "Tailwind CSS", "Google Gemini API"],
    github: "https://github.com/fadliilysn/PromosiIn",
    demo: "https://promosiin.vercel.app",
    image: "/images/prjct/PromosiIn/ss-promosiin.png",
    images: ["/images/prjct/PromosiIn/ss-promosiin.png", "/images/prjct/PromosiIn/hasil-promosiin.png"],
    featured: false,
  },
  {
    slug: "gingers-freshness-classification",
    title: "GingerClassify",
    category: "data-ml",
    summary: "Sistem klasifikasi kesegaran rimpang jahe berbasis Color Moments (HSV) + GLCM dan SVM.",
    description:
      "Sistem berbasis web untuk mengklasifikasikan kesegaran rimpang jahe menggunakan kombinasi 9 fitur Color Moments (HSV) dan 4 fitur tekstur GLCM, diklasifikasikan dengan SVM kernel RBF. Model dilatih pada 576 citra dan mencapai akurasi 84% pada pengujian internal serta 82% pada citra baru di luar dataset. Ini adalah topik skripsi saya, dideploy sebagai aplikasi web di Hugging Face Spaces lengkap dengan riwayat prediksi tersimpan di Supabase.",
    role: "Skripsi / Tugas Akhir",
    tech: ["Python", "Flask", "SVM", "OpenCV", "Supabase", "Hugging Face Spaces"],
    github: "https://github.com/fadliilysn/gingers-freshness-classification",
    demo: "https://fadliilysn-gingerclassify.hf.space/",
    image: "/images/prjct/GingerClassify/home-gingerclassify.png",
    images: ["/images/prjct/GingerClassify/home-gingerclassify.png", "/images/prjct/GingerClassify/hasil-gingerclassify.png", "/images/prjct/GingerClassify/riwayat-gingerclassify.png"],
    featured: false,
  },
  {
    slug: "nuanscent",
    title: "Nuanscent",
    category: "web",
    summary: "Katalog dan rekomendasi parfum lokal dengan quiz pencocokan preferensi.",
    description:
      "Aplikasi katalog dan rekomendasi parfum lokal dengan arsitektur terpisah antara frontend (React, TypeScript, Vite) dan REST API backend (Laravel 12, PostgreSQL). Fitur utamanya meliputi pencarian dan filter katalog, quiz rekomendasi dengan penjelasan 'Kenapa cocok?', perbandingan produk berdampingan, dan panel admin berbasis Filament untuk mengelola data parfum.",
    role: "Personal project",
    tech: ["React", "TypeScript", "Vite", "Laravel 12", "PostgreSQL", "Filament"],
    github: "https://github.com/fadliilysn/Nuanscent",
    image: "/images/prjct/Nuanscent/home-nuanscent.png",
    images: ["/images/prjct/Nuanscent/home-nuanscent.png", "/images/prjct/Nuanscent/quiz-nuanscent.png", "/images/prjct/Nuanscent/katalog-nuanscent.png", "/images/prjct/Nuanscent/brand-nuanscent.png", "/images/prjct/Nuanscent/guide-nuanscent.png", "/images/prjct/Nuanscent/admin-nuanscent.png"],
    featured: false,
  },
  {
    slug: "antrian-digital",
    title: "Antrian Digital",
    category: "web",
    summary: "Sistem manajemen antrian dengan autentikasi, pendaftaran, dan pelacakan status.",
    description:
      "Sistem manajemen antrian yang dibangun dengan Laravel dan Blade sebagai proyek latihan pengembangan backend. Mengimplementasikan autentikasi pengguna, pendaftaran antrian, pelacakan status antrian secara real-time, serta operasi CRUD penuh untuk manajemen data.",
    role: "Personal project",
    tech: ["Laravel", "Blade", "MySQL"],
    github: "https://github.com/fadliilysn/antrian_digital",
    image: "/images/prjct/antrian_digital/homepage.png",
    images: ["/images/prjct/antrian_digital/homepage.png", "/images/prjct/antrian_digital/customer-view.png", "/images/prjct/antrian_digital/display-monitor.png", "/images/prjct/antrian_digital/admin-dashboard.png", "/images/prjct/antrian_digital/queue-management.png"],
    featured: false,
  },
  {
    slug: "flowsent-back",
    title: "FlowSent Backend",
    category: "web",
    summary: "Backend API untuk aplikasi email client.",
    description: "Backend API untuk FlowSent, sebuah aplikasi email client. Dibangun dengan Laravel, menangani autentikasi, pengelolaan folder, dan operasi CRUD untuk pesan email yang dikonsumsi oleh aplikasi frontend.",
    role: "Personal project",
    tech: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/fadliilysn/flowsent-back",
    image: "/images/prjct/flowsent/login.png",
    images: ["/images/prjct/flowsent/login.png", "/images/prjct/flowsent/main-layout.png"],
    featured: false,
  },
  {
    slug: "jadwal-sholat",
    title: "Jadwal Sholat",
    category: "web",
    summary: "Aplikasi web ringan untuk menampilkan jadwal sholat dari berbagai kota.",
    description: "Aplikasi web untuk menampilkan jadwal sholat berdasarkan kota yang dipilih pengguna. Dibangun dengan React dan Vite untuk performa loading yang cepat serta pengalaman penggunaan yang ringan.",
    role: "Personal project",
    tech: ["React", "Vite", "JavaScript"],
    github: "https://github.com/fadliilysn/jadwal-sholat",
    image: "/images/prjct/jadwal-sholat/home-light.png",
    images: ["/images/prjct/jadwal-sholat/home-dark.png"],
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function normalizeImagePath(image?: string): string | null {
  if (!image) return null;
  let clean = image.trim();
  if (clean.startsWith("public/")) {
    clean = clean.replace(/^public\//, "/");
  } else if (clean.startsWith("public\\")) {
    clean = clean.replace(/^public\\/, "/");
  }
  if (!clean.startsWith("/") && !clean.startsWith("http")) {
    clean = `/${clean}`;
  }
  return clean;
}
