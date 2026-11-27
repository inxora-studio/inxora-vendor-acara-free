import type { coverage, PhotoKey, series } from "./studio";
import type { guides } from "./guides";

export type NoteRows = readonly (readonly [string, string])[];
export type PrintReading = {
  photo: PhotoKey;
  title: string;
  detail: string;
  focus: string;
  crop: string;
};

export const openingPrint: PrintReading = {
  photo: "restu",
  title: "Satu tangan di pipi.",
  detail:
    "Di tengah orang yang berkumpul, satu sentuhan memberi arah pada seluruh foto. Lihat dulu siapa yang berdiri di sekeliling pasangan, lalu dekati gerak tangan di tengah bingkai.",
  focus: "Gerak tangan",
  crop: "52% 43%",
};

export const albumNotes = {
  upacara: {
    wall: "Dari ruang ke prosesi",
    reading: {
      photo: "salam",
      title: "Tangan yang disambut.",
      detail:
        "Latar bunga memberi tahu kita di mana pasangan berada. Ketika bingkai dipersempit, pertemuan kedua tangan mengambil alih perhatian.",
      focus: "Pertemuan tangan",
      crop: "51% 55%",
    },
    brief: "Sebelum prosesi dimulai",
    rows: [
      [
        "Titik berdiri",
        "Tunjukkan batas bagi fotografer kepada koordinator sebelum tamu masuk.",
      ],
      [
        "Gerak singkat",
        "Sebutkan satu momen yang hanya terjadi sekali, misalnya pertukaran cincin atau sungkem.",
      ],
      [
        "Sesudah prosesi",
        "Sepakati tempat keluarga menunggu agar jalan keluar pasangan tetap lapang.",
      ],
    ],
    neighbor:
      "Setelah melihat prosesi, lihat bagaimana suasananya terbaca dari wajah keluarga.",
  },
  keluarga: {
    wall: "Orang di sekeliling pasangan",
    reading: {
      photo: "kecup",
      title: "Sebelum pelukan terlepas.",
      detail:
        "Kerabat di sisi bingkai menempatkan kecupan ini di tengah pertemuan keluarga. Potongan yang lebih dekat mengajak mata berhenti pada dua wajah.",
      focus: "Dua wajah",
      crop: "50% 45%",
    },
    brief: "Ketika keluarga berkumpul",
    rows: [
      [
        "Nama panggilan",
        "Catat siapa yang akan memanggil orang tua dan saudara. Pilih orang yang mengenal kedua keluarga.",
      ],
      [
        "Tempat menunggu",
        "Sisakan kursi dekat area foto bagi kerabat yang ingin duduk sambil menunggu giliran.",
      ],
      [
        "Satu kelompok dulu",
        "Selesaikan potret kelompok inti sebelum mengajak keluarga besar bergabung.",
      ],
    ],
    neighbor:
      "Dari suasana ramai, lanjut ke potret saat pasangan punya sedikit waktu sendiri.",
  },
  berdua: {
    wall: "Potret di sela acara",
    reading: {
      photo: "jendela",
      title: "Jendela sebagai bingkai.",
      detail:
        "Ambang jendela membatasi ruang dan mengarahkan mata pada pasangan. Mendekatkan potongan foto memberi bobot lebih besar pada arah pandang mereka.",
      focus: "Pertemuan pandang",
      crop: "53% 48%",
    },
    brief: "Mencari ruang untuk berdua",
    rows: [
      [
        "Jalur pendek",
        "Pilih tempat yang bisa dicapai dengan busana acara tanpa mengganti alas kaki.",
      ],
      [
        "Gerak awal",
        "Berjalan berdampingan atau mengobrol di ambang pintu bisa menjadi awal sesi.",
      ],
      [
        "Kembali ke acara",
        "Tentukan siapa yang memberi isyarat ketika pasangan perlu kembali menemui tamu.",
      ],
    ],
    neighbor:
      "Lihat bagaimana bingkai yang lebih lebar dipakai ketika pasangan kembali ke tengah upacara.",
  },
} as const satisfies Record<
  (typeof series)[number]["slug"],
  {
    wall: string;
    reading: PrintReading;
    brief: string;
    rows: NoteRows;
    neighbor: string;
  }
>;

export const packageNotes = {
  "akad-keluarga": {
    title: "Satu tempat, dua titik kumpul",
    lead: "Petakan tempat prosesi dan titik potret keluarga. Tunjukkan rute di antaranya kepada pendamping keluarga.",
    rows: [
      [
        "Saat tamu duduk",
        "Koordinator menunjukkan posisi masuk dan batas ruang upacara.",
      ],
      [
        "Saat prosesi selesai",
        "Pendamping mengajak kelompok keluarga pertama menuju tempat foto.",
      ],
      [
        "Sebelum keluarga pulang",
        "Periksa nama yang belum hadir dan sepakati apakah perlu foto susulan.",
      ],
    ],
    images: ["akad", "kecup"],
    album: "keluarga",
    plate: "Prosesi dan orang terdekat",
    plateText:
      "Siapkan satu bingkai yang memperlihatkan tempat dan satu potret yang mengutamakan hubungan keluarga.",
    change: "Jika resepsi menyusul di tempat lain",
    alternative: "sehari-penuh",
    reason:
      "Tandai jam berangkat dan tiba sebelum memilih durasi. Dua agenda di ruang berbeda perlu dibicarakan sejak awal.",
  },
  "sehari-penuh": {
    title: "Membagi posisi saat dua ruang aktif",
    lead: "Ketika kegiatan berlangsung bersamaan, tandai ruang dan penghubung untuk tiap fotografer pada satu susunan acara.",
    rows: [
      [
        "Persiapan terpisah",
        "Tulis ruang pasangan dan ruang keluarga, lengkap dengan pintu masuk yang dapat digunakan.",
      ],
      [
        "Pindah lokasi",
        "Catat siapa berangkat lebih dahulu untuk menjumpai rombongan di tempat berikutnya.",
      ],
      [
        "Menjelang penutupan",
        "Sepakati momen terakhir yang ingin direkam sebelum waktu liputan selesai.",
      ],
    ],
    images: ["pintu", "restu"],
    album: "upacara",
    plate: "Dua posisi pada satu rangkaian",
    plateText:
      "Satu sudut memberi konteks tempat. Sudut lain memberi ruang bagi keluarga yang sedang menyaksikan.",
    change: "Jika hanya upacara dan potret keluarga",
    alternative: "akad-keluarga",
    reason:
      "Rangkaian yang berdekatan di satu tempat juga bisa direncanakan dalam liputan yang lebih singkat.",
  },
} as const satisfies Record<
  (typeof coverage)[number]["slug"],
  {
    title: string;
    lead: string;
    rows: NoteRows;
    images: readonly [PhotoKey, PhotoKey];
    album: (typeof series)[number]["slug"];
    plate: string;
    plateText: string;
    change: string;
    alternative: (typeof coverage)[number]["slug"];
    reason: string;
  }
>;

export const worksheets = {
  "susun-jadwal": {
    method: "Mulai dari agenda yang sudah tetap",
    title: "Contoh susunan satu pagi",
    intro:
      "Contoh latihan untuk satu lokasi. Ganti jam dan ruang sesuai acara yang sebenarnya.",
    columns: ["Waktu contoh", "Catatan koordinator"],
    rows: [
      [
        "07.30 · Ruang rias",
        "Potret busana dan orang tua sebelum menuju ruang prosesi.",
      ],
      [
        "08.30 · Ruang prosesi",
        "Koordinator memberi tanda ketika rombongan siap masuk.",
      ],
      [
        "10.00 · Serambi",
        "Kumpulkan keluarga inti sementara tamu mulai beranjak.",
      ],
    ],
    twist: "Jika mulainya mundur",
    action:
      "Tandai dua agenda yang jamnya tetap. Bicarakan potret mana yang masih bisa dipindah ke jeda berikutnya sebelum memotong waktu pertemuan keluarga.",
    fields: [
      "Waktu dan agenda tetap",
      "Lokasi atau ruang",
      "Penghubung",
      "Agenda yang bisa dipindah",
    ],
    related: "foto-keluarga",
  },
  "foto-keluarga": {
    method: "Sebelum memanggil kelompok pertama",
    title: "Contoh lembar panggilan",
    intro:
      "Isi nama panggilan bersama keluarga. Bagikan satu salinan kepada orang yang akan memanggil tiap kelompok.",
    columns: ["Kelompok contoh", "Catatan pendamping"],
    rows: [
      [
        "Orang tua dan pasangan",
        "Siapkan kursi dekat area potret sebelum mengajak orang tua bergabung.",
      ],
      [
        "Saudara kandung",
        "Panggil kelompok berikutnya saat foto orang tua masih berlangsung.",
      ],
      [
        "Keluarga besar",
        "Hitung kembali jumlah orang bersama pendamping sebelum berpindah.",
      ],
    ],
    twist: "Jika satu anggota belum hadir",
    action:
      "Tandai namanya di lembar panggilan. Lanjut ke kelompok yang sudah siap, lalu sepakati titik temu berikutnya dengan pendamping.",
    fields: [
      "Nama kelompok",
      "Nama panggilan anggota",
      "Pendamping",
      "Kebutuhan kursi atau akses",
      "Tempat menunggu",
    ],
    related: "lokasi-potret",
  },
  "lokasi-potret": {
    method: "Bawa busana dan jam acara ke survei",
    title: "Dua tempat untuk sesi yang sama",
    intro:
      "Catat pengaruh tempat pada gerak pasangan. Contoh ini membandingkan satu ruang terbuka dan satu pilihan berteduh.",
    columns: ["Titik contoh", "Yang diperiksa di tempat"],
    rows: [
      [
        "Halaman",
        "Bayangan pada wajah, jalur tamu dan permukaan yang akan dilewati pasangan.",
      ],
      [
        "Serambi",
        "Cahaya dari samping, ruang untuk busana, dan jarak dari pintu keluar.",
      ],
      [
        "Ruang ganti",
        "Siapa yang memegang akses dan lewat pintu mana pasangan paling mudah kembali.",
      ],
    ],
    twist: "Jika hujan datang saat sesi",
    action:
      "Mulai dari titik berteduh yang sudah disurvei. Beri tahu koordinator lokasi baru agar ia tetap dapat menemukan pasangan ketika acara berlanjut.",
    fields: [
      "Titik foto utama",
      "Jam survei",
      "Jalur dari ruang acara",
      "Izin dan penghubung",
      "Titik berteduh",
    ],
    related: "susun-jadwal",
  },
} as const satisfies Record<
  (typeof guides)[number]["slug"],
  {
    method: string;
    title: string;
    intro: string;
    columns: readonly [string, string];
    rows: NoteRows;
    twist: string;
    action: string;
    fields: readonly string[];
    related: (typeof guides)[number]["slug"];
  }
>;

export const readyBrief = [
  [
    "Tanggal & kota",
    "Tulis tanggal yang ingin ditanyakan dan kota acara. Bila gedung masih dipilih, sebutkan area yang sudah diketahui.",
  ],
  [
    "Momen utama",
    "Sebutkan rangkaian yang paling penting untuk keluarga dan perkiraan waktu mulainya.",
  ],
  [
    "Lokasi tambahan",
    "Tandai jika persiapan, upacara, dan resepsi berlangsung di tempat berbeda.",
  ],
] as const;
export const handover = [
  [
    "Tautan dan akses",
    "Sepakati penerima tautan, cara keluarga mengunduh foto, dan siapa yang dapat melihat album.",
  ],
  [
    "Waktu penyerahan",
    "Minta tanggal atau rentang pengiriman yang tertulis dalam penawaran.",
  ],
  [
    "Salinan keluarga",
    "Setelah berkas diterima, simpan salinan pilihan di tempat yang bisa diakses keluarga.",
  ],
] as const;
export const priorities = [
  "Prosesi dan detail upacara",
  "Potret orang tua",
  "Kelompok keluarga besar",
  "Potret berdua",
  "Suasana resepsi",
] as const;
