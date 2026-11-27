# Memeriksa Ronce Foto

Gunakan `npm run check`, `npm run build`, dan `npm run build:static`. Untuk menguji versi hasil ekspor, sajikan folder `out/` melalui HTTP. Susunan 16 URL tercantum di README proyek.

## Uji perjalanan calon klien

1. Di beranda, ganti foto sampul lewat kedua tombol. Pastikan kredit dan foto ikut berubah, tombol batas awal/akhir dinonaktifkan. Buka album dan pilih satu seri.
2. Perbesar foto dengan keyboard. Gunakan panah kiri dan kanan untuk mengganti gambar. Tekan Escape. Fokus harus kembali ke pembuka yang digunakan. Setiap foto memiliki judul dan kredit.
3. Buka detail tiap liputan dari indeks. Periksa tarif, durasi dan cakupan yang bersesuaian. Tekan Tanya paket. Pastikan nama paket terpilih; tombol Tanyakan tanggal pada halaman kontak membuka pilihan umum.
4. Kirim formulir kosong, tanggal lampau, atau kota berisi spasi. Isian harus dikoreksi. Isi tanggal mendatang serta kota, buat draf, lalu salin. Ubah kota dan pastikan draf lama dihapus.
5. Buka masing-masing panduan, halaman studio, cara kerja dan FAQ. Uji menu pada ponsel, tautan kembali, FAQ native, navigasi keyboard, dan gerak yang berkurang pada pengaturan perangkat.
6. Uji ulang menggunakan nomor WhatsApp milik pemilik sebelum dipakai untuk usaha. Nomor kosong pada demo menghasilkan opsi salin. Halaman utama dan seluruh isi artikel, paket, serta seri tersedia sebagai HTML; tampilan modal, salin, dan pergantian foto sampul memerlukan JavaScript.
   Pengujian Edge pada 320, 390, 768 dan 1440 piksel mencakup 16 URL, galeri papan ketik, menu ponsel, draf serta salin. Halaman beranda, seri upacara, paket dan panduan juga terbaca dengan JavaScript dinonaktifkan. Tautan antardokumen memakai navigasi HTML agar hosting statis tidak memerlukan penulisan ulang URL data Next.
