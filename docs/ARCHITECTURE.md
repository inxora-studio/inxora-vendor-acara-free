# Arsitektur

## Alur konten

src/config/business.json menyimpan identitas dasar dan kontak.
src/config/site.ts menambahkan URL publik dan status indexing.
src/content menyimpan data kategori bisnis.
src/app merakit halaman dari komponen dan konten.
src/features menyimpan perilaku khusus kategori.

## Aturan pemisahan

ui: kontrol kecil yang tidak tahu kategori usaha.
layout: header/footer/navigasi.
sections: susunan konten halaman.
features: fitur seperti filter katalog, estimasi, dan ringkasan pesanan.
lib: fungsi murni untuk data dan format.
types: tipe domain yang benar-benar dipakai.

Tidak perlu membuat semua abstraksi di awal. Folder yang belum terpakai berisi README agar tujuan dan struktur tetap terlihat di Git.

## Konfigurasi

business.json: nama, deskripsi, locale, WhatsApp, email, alamat, dan jam buka.
template.json: identitas produk, konsep, versi, dan edisi.
.env.local: URL publik dan indexing; jangan dikomit.
.env.example: contoh konfigurasi yang boleh dikomit.

Edisi adalah identitas distribusi. Tidak ada pembatasan kualitas atau lisensi melalui flag di browser.

## Metadata

Judul dan deskripsi memakai konfigurasi usaha. Set canonical pada masing-masing route saat halaman bisnis dibuat, jangan memberi semua halaman canonical ke beranda. Tambahkan gambar Open Graph yang benar sebelum rilis.
robots.txt dan sitemap.xml disiapkan untuk build biasa maupun statis. Indexing baru diaktifkan setelah domain dan konten produksi benar.
