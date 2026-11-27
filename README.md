# Ronce Foto

Template Next.js untuk studio fotografi acara. Demo berupa studio pernikahan di Yogyakarta, dengan sepuluh foto lokal berkredit, tiga seri tematik, dua pilihan liputan, serta draf pertanyaan ketersediaan. Setiap halaman dibuat statis saat build dan punya judul serta deskripsi sendiri.

## Menjalankan

Pakai Node 22.18 atau lebih baru. Dari folder proyek:

```powershell
npm ci
npm run dev
```

Buka alamat yang dicetak terminal. Untuk server Node jalankan `npm run build`, kemudian `npm start`. Untuk hosting statis, `npm run build:static` menghasilkan `out/`. Pemeriksaan TypeScript, tes dan format dijalankan dengan `npm run check`.

## Isi website

| Kelompok | Halaman                                                                                 |
| -------- | --------------------------------------------------------------------------------------- |
| Beranda  | `/`                                                                                     |
| Galeri   | `/album`, `/album/upacara`, `/album/keluarga`, `/album/berdua`                          |
| Liputan  | `/liputan`, `/liputan/akad-keluarga`, `/liputan/sehari-penuh`                           |
| Studio   | `/studio`, `/cara-kerja`                                                                |
| Panduan  | `/panduan`, `/panduan/susun-jadwal`, `/panduan/foto-keluarga`, `/panduan/lokasi-potret` |
| Kontak   | `/tanya-jawab`, `/kontak`                                                               |

Enam belas halaman publik unik. Tautan lama `/#album`, `/#liputan`, `/#studio`, dan `/#kontak` mengarah ke bagian beranda yang sesuai.

## Menyesuaikan untuk usaha

1. **Identitas dan kontak.** Ganti nama, deskripsi, basis kota, nomor WhatsApp dan penanda data contoh pada `src/config/business.json`. Nomor dapat diawali 08 atau ditulis dalam format internasional. Saat nomor kosong, draf bisa disalin. Saat terisi, pengguna dapat membuka WhatsApp dengan draf pilihannya. Studio mengonfirmasi ketersediaan dan biaya akhir.
2. **Sampul, koleksi, paket.** Edit `presentation`, `photographs`, `series`, `spreads` dan `coverage` pada `src/content/studio.ts`. Foto memiliki ID, nama berkas, ukuran, judul, kredit fotografer, teks alternatif dan titik potong. Taruh aset di `public/images` dan gunakan ID tersebut pada sampul atau seri. Sebagai contoh, fotografer wisuda dapat memakai seri prosesi wisuda, keluarga, dan potret pribadi. Ubah judul, data liputan serta naskah pernikahan agar sesuai usaha.
3. **Bacaan dan navigasi.** Isi panduan, FAQ, dan langkah kerja berada di `src/content/guides.ts`. Daftar halaman dan menu utama berada di `src/content/routes.ts`. Seri, paket dan panduan di sana dibentuk dari data masing-masing. Konten bebas beranda berada di `src/app/page.tsx`, komposisi halaman dalam di `src/app/[...jalur]/page.tsx`.
4. **Tema dan gerak.** Palet, ukuran lebar konten, jenis huruf, durasi utama dan kurva transisi terkumpul di `src/app/theme.css`. Layout dan perilaku beragam lebar ada di `src/app/globals.css`. Font judul tersimpan lokal. Preferensi pengurangan gerak perangkat mematikan transisi, gerak masuk dan gulir halus.
5. **Persiapan tayang.** Ganti data serta foto studio contoh dengan materi berizin milik pemilik. Selanjutnya ubah `isDemo`, isi domain dan pengindeksan di `.env.local`. Ketika pengindeksan aktif, sitemap berisi URL dari seluruh daftar halaman. Ikuti [panduan deployment](docs/DEPLOYMENT.md).

Riset dan keputusan visual tersedia di [brief desain](docs/DESIGN-BRIEF.md). Hak pakai dan sumber visual dicatat di [aset](docs/ASSETS.md) dan [foto editorial](docs/FOTO-EDITORIAL.md). Tanggal yang dimasukkan pada demo diproses di browser hingga pengunjung memilih menyalin atau membuka WhatsApp. Kode sumber mengikuti `LICENSE`.
