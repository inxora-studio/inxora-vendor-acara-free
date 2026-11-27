import business from "@/config/business.json";

export const presentation = {
  heroTitle: ["Potret", "pernikahan."],
  heroIntro: "Upacara, keluarga, dan waktu berdua.",
  heroPhotos: ["sepeda", "restu", "jendela"],

  studioIntro:
    "Kami memotret pernikahan dengan mengikuti apa yang terjadi di ruangan. Ada saatnya berdiri jauh dari prosesi, ada saatnya membantu keluarga berkumpul untuk satu potret.",
} as const;

type Photo = {
  file: string;
  width: number;
  height: number;
  title: string;
  credit: string;
  alt: string;
  position: string;
};
export const photographs = {
  siraman: {
    file: "study-6811920.webp",
    width: 1280,
    height: 1600,
    title: "Persiapan siraman",
    credit: "RGA Production",
    alt: "Wadah tradisional untuk prosesi siraman pernikahan.",
    position: "50% 50%",
  },
  melati: {
    file: "study-31813383.webp",
    width: 1280,
    height: 1920,
    title: "Ronce melati",
    credit: "bagas dwi",
    alt: "Potret pengantin Jawa dengan rangkaian melati di sisi wajah.",
    position: "50% 42%",
  },
  salam: {
    file: "pexels-15973347.webp",
    width: 1280,
    height: 720,
    title: "Salam di pelaminan",
    credit: "Yudha Allam",
    alt: "Pengantin membungkuk mencium tangan pasangannya di depan rangkaian bunga merah muda.",
    position: "50% 52%",
  },
  jendela: {
    file: "pexels-33677398.webp",
    width: 1280,
    height: 1916,
    title: "Di balik jendela",
    credit: "Ruyat Supriazi",
    alt: "Dua pengantin berbusana hitam dan emas saling tersenyum dari balik jendela hijau.",
    position: "50% 48%",
  },
  restu: {
    file: "pexels-29194926.webp",
    width: 1280,
    height: 854,
    title: "Restu keluarga",
    credit: "afiful huda",
    alt: "Orang tua menyentuh wajah pengantin di tengah keluarga yang berkumpul.",
    position: "50% 43%",
  },
  pintu: {
    file: "pexels-29194865.webp",
    width: 1280,
    height: 1917,
    title: "Di depan pintu ukir",
    credit: "afiful huda",
    alt: "Pasangan berbusana putih berdiri di depan pintu berukir emas.",
    position: "50% 66%",
  },
  sepeda: {
    file: "pexels-30792367.webp",
    width: 1300,
    height: 867,
    title: "Bersepeda berdua",
    credit: "kriisszzz kriisszzz",
    alt: "Pasangan berbaju biru bersepeda bersama melewati jendela rumah tua yang teduh.",
    position: "63% 61%",
  },
  jalan: {
    file: "pexels-16098076.webp",
    width: 1300,
    height: 1950,
    title: "Jalan sore",
    credit: "ONEPROPHOTO PHOTO & CINEMA",
    alt: "Sepasang pengantin berpakaian adat berjalan beriringan di bawah pepohonan.",
    position: "50% 57%",
  },
  akad: {
    file: "pexels-32541817.webp",
    width: 1300,
    height: 867,
    title: "Duduk berdampingan",
    credit: "Kalamata Creative",
    alt: "Pasangan berpakaian putih duduk berdampingan saat keluarga mengikuti upacara.",
    position: "47% 47%",
  },
  kecup: {
    file: "pexels-40503282.webp",
    width: 1300,
    height: 867,
    title: "Kecup di dahi",
    credit: "Tuti Isnawati",
    alt: "Seorang ayah mengecup dahi pengantin di hadapan keluarga.",
    position: "54% 48%",
  },
} satisfies Record<string, Photo>;
export type PhotoKey = keyof typeof photographs;
export const spreads = [
  [photographs.salam, photographs.jendela],
  [photographs.restu, photographs.pintu],
];

export const series = [
  {
    slug: "upacara",
    name: "Upacara",
    intro: "Gerak tangan, arah pandang, dan jeda di tengah prosesi.",
    text: "Tiga sudut pandang memperlihatkan suasana upacara dari dekat dan jauh. Bingkai lebar menunjukkan tempat serta keluarga yang hadir. Potret yang lebih rapat menangkap gerak tangan yang singkat.",
    photos: ["salam", "siraman", "akad", "pintu"],
  },
  {
    slug: "keluarga",
    name: "Keluarga",
    intro: "Pertemuan antargenerasi, dari pelukan pertama hingga restu.",
    text: "Dalam seri ini, perhatian berpindah dari pasangan ke orang yang berdiri di sebelahnya. Pengambilan gambar dari sisi acara memberi ruang bagi pelukan dan ekspresi kecil yang tak perlu diarahkan.",
    photos: ["kecup", "restu"],
  },
  {
    slug: "berdua",
    name: "Berdua",
    intro:
      "Potret pasangan ketika ada waktu untuk bergerak dengan ritme sendiri.",
    text: "Jendela, jalan setapak, dan sepeda menjadi bagian dari potret. Orang yang kurang terbiasa berpose bisa mulai dengan berjalan atau berbicara berdua sebelum berhadapan dengan kamera.",
    photos: ["sepeda", "jalan", "jendela", "melati"],
  },
] as const satisfies readonly {
  slug: string;
  name: string;
  intro: string;
  text: string;
  photos: readonly PhotoKey[];
}[];

export const coverage = [
  {
    slug: "akad-keluarga",
    name: "Akad & keluarga",
    duration: "4 jam",
    price: 3200000,
    details: "Akad atau pemberkatan, potret berdua, dan foto bersama keluarga.",
    delivery: "1 fotografer · galeri digital",
    image: "salam",
    fit: "Untuk rangkaian di satu lokasi ketika upacara dan sesi keluarga menjadi fokus utama.",
    includes: [
      "Percakapan tentang alur upacara dan orang yang perlu dipotret.",
      "Liputan prosesi dan potret keluarga dalam satu rentang empat jam.",
      "Pemilihan dan penyuntingan foto untuk galeri digital pribadi.",
    ],
    plan: [
      [
        "Sebelum upacara",
        "Sisihkan waktu untuk detail busana dan potret bersama orang tua.",
      ],
      [
        "Saat prosesi",
        "Fotografer mengikuti aturan ruang dan arahan pemimpin acara.",
      ],
      [
        "Sesudah upacara",
        "Kumpulkan keluarga sesuai urutan yang sudah disepakati.",
      ],
    ],
  },
  {
    slug: "sehari-penuh",
    name: "Sehari penuh",
    duration: "8 jam",
    price: 5800000,
    details: "Dari persiapan, upacara, hingga pertemuan tamu di resepsi.",
    delivery: "2 fotografer · galeri digital",
    image: "restu",
    fit: "Untuk acara dengan beberapa rangkaian yang berjalan beriringan atau berpindah ruang.",
    includes: [
      "Diskusi lokasi, waktu perpindahan dan upacara yang berlangsung bersamaan.",
      "Dua fotografer mengikuti pasangan dan keluarga dalam rentang delapan jam.",
      "Pemilihan dan penyuntingan untuk satu galeri digital yang runtut.",
    ],
    plan: [
      ["Persiapan", "Sepakati di mana tiap fotografer mulai bekerja."],
      [
        "Upacara & keluarga",
        "Satu posisi menghadap prosesi, satu lagi mengikuti keluarga dan tamu.",
      ],
      [
        "Resepsi",
        "Tentukan bagian acara yang harus terekam sebelum waktu liputan berakhir.",
      ],
    ],
  },
] as const;
export const businessIntro = () =>
  business.name + " berbasis di " + business.address + ".";
