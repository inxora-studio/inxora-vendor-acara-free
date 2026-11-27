export const guides = [
  {
    slug: "susun-jadwal",
    title: "Menyusun waktu foto",
    intro:
      "Buat urutan kegiatan yang bisa dipakai keluarga, perias, dan fotografer pada hari yang sama.",
    image: "akad",
    entries: [
      [
        "Mulai dari waktu yang sudah tetap",
        "Tulis jam mulai prosesi, akses masuk lokasi, dan akhir resepsi. Letakkan waktu foto di antara kegiatan itu, dengan ruang untuk berjalan dan berpindah busana.",
      ],
      [
        "Tandai agenda di dua tempat",
        "Jika kedua pasangan bersiap di ruang berbeda, beri tahu studio alamat atau nama ruangnya. Sepakati mana yang dipotret lebih dahulu atau kapan dua fotografer diperlukan.",
      ],
      [
        "Buat satu versi terakhir",
        "Simpan jadwal ringkas dengan nomor penghubung acara. Beri tanda pada tiga momen yang paling ingin kamu dokumentasikan.",
      ],
    ],
    takeaway:
      "Bagikan alamat, jam mulai, jadwal pindah tempat, dan kontak koordinator dalam satu pesan.",
  },
  {
    slug: "foto-keluarga",
    title: "Menata sesi keluarga",
    intro:
      "Daftar singkat membantu orang tua dan kerabat kembali menikmati acara setelah sesi foto.",
    image: "kecup",
    entries: [
      [
        "Mulai dari orang yang perlu duduk",
        "Tempatkan orang tua, kerabat lansia, atau anak kecil pada urutan awal. Pastikan ada tempat duduk di dekat area foto.",
      ],
      [
        "Tulis nama panggilan",
        "Susun kelompok sesuai rumah tangga atau hubungan dengan pasangan. Nama panggilan lebih mudah digunakan pendamping saat memanggil anggota keluarga.",
      ],
      [
        "Cari satu pendamping keluarga",
        "Minta satu orang yang mengenal kerabat membantu merapikan antrean. Tunjukkan tempat menunggu agar panggilan tidak perlu diulang melalui pengeras suara.",
      ],
    ],
    takeaway:
      "Bawa daftar kelompok, nama panggilan, dan seorang pendamping yang mengenal keluarga.",
  },
  {
    slug: "lokasi-potret",
    title: "Memilih lokasi potret",
    intro:
      "Cahaya, akses, dan izin lokasi memengaruhi berapa banyak waktu yang bisa dipakai untuk memotret.",
    image: "jalan",
    entries: [
      [
        "Lihat cahaya pada jam yang sama",
        "Kunjungi area luar pada perkiraan jam sesi. Perhatikan bayangan di wajah, tempat berteduh, dan jalur orang yang berlalu-lalang.",
      ],
      [
        "Periksa akses memakai busana acara",
        "Coba lintasan dari ruang ganti ke lokasi. Permukaan licin, tangga sempit, atau kendaraan yang harus pindah dapat memakan banyak waktu.",
      ],
      [
        "Simpan opsi ketika hujan",
        "Cari serambi atau ruang dengan jendela besar. Periksa izin memotret di lokasi, batas waktu penggunaan dan ruang untuk berganti pakaian.",
      ],
    ],
    takeaway:
      "Kirim satu foto lokasi utama dan satu foto tempat berteduh kepada studio.",
  },
] as const;
export const workflow = [
  [
    "Kenalan dan tanyakan tanggal",
    "Mulai dengan tanggal, kota, serta rangkaian yang ingin diliput. Studio akan memeriksa ketersediaan dan membahas kebutuhan sebelum menyusun penawaran.",
  ],
  [
    "Baca susunan acara bersama",
    "Bagikan jadwal dan siapa saja yang perlu masuk ke foto keluarga. Kita tentukan kapan fotografer harus berada di ruang persiapan, prosesi, dan resepsi.",
  ],
  [
    "Saat hari acara",
    "Fotografer mengikuti aturan tempat, mengambil jarak ketika prosesi berlangsung, dan membantu mengatur barisan ketika keluarga siap berfoto.",
  ],
  [
    "Setelah acara",
    "Studio menyaring dan menyunting hasil sesuai cakupan yang disepakati. Cara pengiriman, akses, dan jangka waktu penyimpanan galeri dikonfirmasi sebelum pemesanan.",
  ],
] as const;
const dateQuestions = [
  [
    "Apakah tanggal langsung tersimpan setelah saya membuat draf?",
    "Tanggal belum dipesan. Kirim pertanyaan ke studio dan tunggu konfirmasi tertulis mengenai ketersediaan serta cakupan pekerjaan.",
  ],
  [
    "Bagaimana kalau acara berlangsung di dua lokasi?",
    "Sertakan kedua lokasi dan perkiraan jam perpindahan. Studio dapat memeriksa waktu tempuh serta memberi pilihan jumlah fotografer.",
  ],
] as const;
const prepQuestions = [
  [
    "Apa yang perlu disiapkan sebelum berbicara dengan fotografer?",
    "Mulai dari tanggal, kota atau gedung, dan jenis rangkaian. Jadwal kasar serta daftar keluarga inti bisa menyusul ketika sudah tersedia.",
  ],
  [
    "Siapa yang memanggil anggota keluarga saat sesi foto?",
    "Tunjuk seorang pendamping yang mengenal kerabat. Beri ia daftar kelompok dan nama panggilan agar orang tua, saudara, dan anak-anak dapat bergiliran.",
  ],
] as const;
const deliveryQuestions = [
  [
    "Bisa membatasi foto yang ditampilkan di portofolio?",
    "Sampaikan batasan sebelum acara, termasuk siapa saja yang ingin tetap privat. Penggunaan foto untuk publikasi perlu persetujuan pemilik hak dan pihak terkait.",
  ],
  [
    "Bagaimana saya menerima hasil foto?",
    "Paket contoh berisi galeri digital. Mintalah rincian tenggat pengiriman, jumlah foto, bentuk akses, dan masa simpan sebelum menyetujui penawaran.",
  ],
] as const;
export const questionChapters = [
  { id: "tanggal", title: "Tanggal dan lokasi", items: dateQuestions },
  { id: "persiapan", title: "Persiapan keluarga", items: prepQuestions },
  { id: "hasil", title: "Galeri dan izin", items: deliveryQuestions },
] as const;
