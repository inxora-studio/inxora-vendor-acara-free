# Inxora Template Starter

## Scope

Repository ini fondasi satu template bisnis. Pilih konsep dan arah desain dari brief proyek sebelum membangun antarmuka. Jangan menganggap halaman placeholder sebagai desain final.

## Stack

Next.js App Router, React, strict TypeScript, Tailwind CSS 4. npm dengan package-lock.json. Node 22.18+.

## Konvensi

- Route dan metadata di src/app; gunakan Server Components secara default.
- Gunakan Client Components untuk interaksi yang memang memerlukannya.
- Data usaha di src/config/business.json; data konten di src/content.
- Elemen dasar di components/ui, struktur situs di components/layout, bagian halaman di components/sections.
- Fitur domain di src/features. Jangan memasukkan logika bisnis ke layout global.
- Semua kontak, aset, testimoni, dan klaim harus bersumber atau berlabel contoh.
- Mutu desain, aksesibilitas, dan mobile Free/Premium setara; perbedaan pada kelengkapan.
- Jangan mengirim source Premium dalam distribusi Free.
- Tambahkan integrasi, database, atau pustaka hanya bila ada kebutuhan nyata.
- Jangan memasukkan secrets, node_modules, .next, atau out ke Git.
- Pastikan sitemap hanya memuat route publik yang benar-benar ada.
- Setelah perubahan: npm run format, npm run check, npm run build.
- Jika menjanjikan hosting statis, jalankan npm run build:static dan uji hasilnya.
