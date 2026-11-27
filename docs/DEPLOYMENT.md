# Deployment

## Next.js server

Atur NEXT_PUBLIC_SITE_URL ke origin produksi. Jalankan npm ci, npm run build, lalu npm start. Sesuaikan PORT jika dibutuhkan.

## Hosting statis

npm run build:static menghasilkan folder out. Unggah isi folder tersebut ke hosting statis yang melayani HTML/CSS/JavaScript.

Mode ini menggunakan trailing slash dan gambar tanpa layanan optimasi server Next.js. Optimalkan ukuran gambar sebelum distribusi.

Fitur yang memerlukan server, seperti Server Actions, POST route handler, cookies di server, dan autentikasi dinamis, tidak tersedia pada ekspor statis. Gunakan layanan eksternal yang dikonfigurasi secara eksplisit atau pilih deployment server.

Referensi: https://nextjs.org/docs/app/guides/static-exports

## Sebelum produksi

- Ganti identitas, URL, kontak, dan konten contoh.
- Isi URL domain ketika build, karena metadata statis dibuat saat build.
- Aktifkan NEXT_PUBLIC_SITE_INDEXABLE=true hanya untuk website produksi yang siap diindeks.
- Tambahkan semua route publik ke sitemap.
- Atur canonical per halaman serta gambar Open Graph yang benar.
- Pastikan data bisnis dan tautan tujuan sudah benar.
