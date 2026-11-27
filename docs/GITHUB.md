# GitHub dan proyek baru

Repository starter: https://github.com/dikaproject/starterkit-template-inxorastudio
Folder starter lokal: D:/INXORA-STUDIO/inxora-template-starter

## Cara langsung: clone ke folder projects

Baca brief kategori lebih dulu. Contoh kuliner:
D:/INXORA-STUDIO/inxora-templates/concepts/01-kuliner/BRIEF.md

Jalankan di PowerShell:

    Set-Location 'D:\INXORA-STUDIO\inxora-templates\projects'
    git clone https://github.com/dikaproject/starterkit-template-inxorastudio.git inxora-kuliner-free
    Set-Location '.\inxora-kuliner-free'
    git remote remove origin
    npm ci
    npm run template:init -- --name inxora-kuliner-free --title "Nama Usaha" --concept kuliner --edition free
    npm run format
    Copy-Item -LiteralPath '.env.example' -Destination '.env.local'
    npm run dev

Penghapusan remote hanya dilakukan pada hasil clone baru. Tujuannya agar perubahan template bisnis disimpan ke repository proyek sendiri. Riwayat commit awal starter tetap ada.

Copy-Item dijalankan pada proyek baru. Jika .env.local sudah ada, edit berkas yang tersedia dan pertahankan konfigurasinya.

## Setelah aplikasi berjalan

1. Edit src/config/business.json untuk identitas dan kontak.
2. Isi docs/DESIGN-BRIEF.md memakai brief kategori.
3. Simpan data produk/menu/layanan di src/content.
4. Bangun halaman di src/app, komponen di src/components, dan fitur bisnis di src/features.
5. Jalankan npm run check dan npm run build sebelum rilis.
6. Buat repository GitHub khusus template tersebut, lalu tambahkan sebagai origin pada proyek hasil clone.

Contoh nama repository proyek: inxora-kuliner-free atau inxora-kuliner-premium.
Gunakan --edition premium untuk edisi premium. Edisi hanya identitas paket; halaman dan fitur bisnis dibangun setelah inisialisasi.

## Pilihan GitHub Use this template

Pemilik repository dapat mengaktifkan Settings > General > Template repository.
Setelah diaktifkan, pilih Use this template > Create a new repository, lalu clone repository hasilnya ke folder projects. Pada alur ini origin sudah menunjuk ke repository proyek sendiri sehingga tidak perlu dihapus.

Repository hasil Use this template memiliki riwayat awalnya sendiri. Referensi:
https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository
https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template

## Alternatif dari starter lokal

    Set-Location 'D:\INXORA-STUDIO\inxora-templates\projects'
    git clone --no-hardlinks 'D:\INXORA-STUDIO\inxora-template-starter' inxora-kuliner-free

Lanjutkan langkah yang sama dari masuk ke folder proyek dan menghapus origin pada salinan baru.

## Memperbarui starter

Perubahan starter dikerjakan dan dipush dari D:/INXORA-STUDIO/inxora-template-starter.
Perubahan suatu website bisnis dikerjakan dan dipush dari folder projects milik website itu.
Perubahan starter tidak otomatis masuk ke proyek yang sudah dibuat.
