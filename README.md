# Portofolio Fadli

Website portofolio pribadi — Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Struktur project

```
app/
  layout.tsx          -> root layout, font, theme init
  page.tsx             -> halaman utama (Hero, About, Projects, Contact)
  globals.css           -> design token (warna dark/light) + base style
  projects/[slug]/page.tsx -> halaman detail tiap project
components/            -> semua UI section (Navbar, Hero, About, dst)
data/projects.ts        -> SUMBER DATA project. Edit file ini untuk nambah/ubah project
lib/theme-provider.tsx  -> logic toggle dark/light mode
public/images/           -> taruh screenshot project di sini
public/cv-fadli.pdf      -> file CV yang didownload dari tombol "Unduh CV"
```

---

## 1. Setup awal (di laptop kamu)

Pastikan sudah install **Node.js versi 18.18 ke atas** (cek dengan `node -v`). Kalau belum, download di [nodejs.org](https://nodejs.org).

1. Ekstrak folder project ini, lalu buka terminal di dalam folder tersebut.
2. Install semua dependency:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000) di browser. Web sudah bisa dilihat dan setiap perubahan kode akan otomatis reload.

---

## 2. Yang perlu kamu lengkapi/sesuaikan

Kode sudah lengkap dan siap jalan, tapi ada beberapa hal yang aku isi dengan data placeholder yang perlu kamu cek/ganti:

### a. Email di section Contact
Buka `components/Contact.tsx`, cari bagian `channels`, ganti `fadli.email@gmail.com` dengan email asli kamu (di 2 tempat: `value` dan `href`).

### b. Link GitHub project "Administrasi PKM Dosen"
Di `data/projects.ts`, project `sistem-administrasi-pkm-dosen` linknya masih mengarah ke halaman profil GitHub kamu (bukan repo spesifik) karena aku nggak tau nama repo persisnya. Ganti field `github` dengan URL repo yang benar kalau ada, atau hapus baris tersebut kalau repo-nya private/tidak ingin ditampilkan.

### c. Link live demo klasifikasi jahe
Field `demo` di project `gingers-freshness-classification` aku isi dengan pola URL umum Hugging Face Spaces. Cek dan sesuaikan dengan URL Space kamu yang sebenarnya.

### d. File CV
Tombol "Unduh CV" di Hero mengarah ke `/cv-fadli.pdf`. Taruh file PDF CV kamu di `public/cv-fadli.pdf` (nama file harus persis sama, atau ubah path-nya di `components/Hero.tsx`).

### e. Screenshot project
Project yang kamu punya screenshot-nya: taruh file gambar di `public/images/` (format `.png`/`.jpg`, disarankan rasio 16:10), lalu isi field `image` di `data/projects.ts` sesuai nama filenya, contoh:
```ts
image: "/images/promosiin.png",
```
Project yang belum ada screenshot dibiarkan tanpa field `image` — otomatis akan tampil placeholder inisial huruf, jadi tetap rapi.

---

## 3. Menambah project baru

Cukup tambahkan satu object baru di array `projects` pada `data/projects.ts`, ikuti format yang sudah ada. Halaman detail (`/projects/nama-slug`) otomatis dibuat, tidak perlu bikin file baru.

## 4. Ganti warna aksen

Warna aksen biru elektrik diatur lewat CSS variable `--accent` di `app/globals.css` (ada 2 tempat: `:root` untuk light mode, `.dark` untuk dark mode). Format-nya `R G B` (tanpa koma).

---

## 5. Deploy ke Vercel (gratis)

1. Push project ini ke repository GitHub baru.
2. Buka [vercel.com](https://vercel.com), login pakai akun GitHub.
3. Klik **Add New → Project**, pilih repo portofolio kamu.
4. Biarkan semua setting default (Vercel otomatis mendeteksi Next.js), klik **Deploy**.
5. Setelah selesai (biasanya 1-2 menit), kamu akan dapat URL live seperti `fadli-portfolio.vercel.app`.
6. Setiap kali kamu `git push` perubahan baru, Vercel otomatis re-deploy.

---

## 6. Perintah yang tersedia

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Jalankan development server |
| `npm run build` | Build versi production |
| `npm start` | Jalankan hasil build production secara lokal |
| `npm run lint` | Cek error/format kode |
