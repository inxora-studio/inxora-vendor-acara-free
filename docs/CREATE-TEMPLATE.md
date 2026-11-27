# Membuat template baru

Starter GitHub: https://github.com/dikaproject/starterkit-template-inxorastudio

## Hubungan folder konsep dan proyek

- concepts/01-kuliner/BRIEF.md: rencana dan kebutuhan website kuliner.
- projects/inxora-kuliner-free/: kode aplikasi hasil clone starter.
- inxora-template-starter/: fondasi bersama untuk proyek berikutnya.

concepts dan projects berada di D:/INXORA-STUDIO/inxora-templates.
Berkas konsep tidak menjadi route Next.js dan tidak otomatis membangun halaman.

## Langkah

1. Baca brief kategori.
2. Clone starter ke folder proyek baru atau buat repository melalui GitHub Use this template. Contoh perintah lengkap ada di [GITHUB.md](GITHUB.md).
3. Jalankan npm ci di folder hasil clone.
4. Jalankan npm run template:init -- --name inxora-kuliner-free --title "Nama Usaha" --concept kuliner --edition free.
5. Jalankan npm run format.
6. Salin .env.example ke .env.local pada proyek baru, lalu atur URL website.
7. Isi src/config/business.json dan docs/DESIGN-BRIEF.md.
8. Jalankan npm run dev untuk pengembangan.
9. Buat konten dan tipe yang diperlukan, lalu bangun halaman dan fitur.
10. Lengkapi masing-masing edisi sesuai brief serta siapkan distribusi mandiri.
11. Jalankan npm run check dan npm run build; uji interaksi.
12. Simpan perubahan ke repository khusus website tersebut.

## Slug konsep

kuliner, jasa-rumah, katalog-produk, interior, salon, penginapan, catering, kursus, bengkel, vendor-acara, rental, supplier.

## Inisialisasi

--name wajib: slug huruf kecil, angka, dan tanda hubung.
--title opsional: nama tampilan maksimal 120 karakter.
--concept opsional: slug dari daftar.
--edition opsional: free atau premium, default free.
--dry-run: validasi dan tampilkan rencana tanpa menulis.

Perintah mengubah nama package, root package-lock, identitas template, dan nama usaha jika title diberikan. Tidak membuat halaman, mengganti remote, menghapus sejarah Git, memasang dependensi, atau memublikasikan repository.

Mutu desain dan aksesibilitas kedua edisi tetap setara. Premium berbeda dalam kelengkapan. Jangan mengirim source Premium dalam paket Free dengan sekadar menyembunyikannya memakai flag.
