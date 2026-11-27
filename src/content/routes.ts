import { series, coverage } from "./studio";
import { guides } from "./guides";

export type FolioRoute = {
  path: string;
  title: string;
  intro: string;
  kind:
    | "album"
    | "series"
    | "coverage"
    | "package"
    | "studio"
    | "workflow"
    | "guides"
    | "guide"
    | "faq"
    | "contact";
};
export const routes: FolioRoute[] = [
  {
    path: "/album",
    title: "Album foto",
    intro: "Pilih rangkaian menurut momen yang ingin kamu abadikan.",
    kind: "album",
  },
  ...series.map((s) => ({
    path: "/album/" + s.slug,
    title: s.name,
    intro: s.intro,
    kind: "series" as const,
  })),
  {
    path: "/liputan",
    title: "Pilihan liputan",
    intro: "Bandingkan waktu, jumlah fotografer dan hasil yang dibawa pulang.",
    kind: "coverage",
  },
  ...coverage.map((p) => ({
    path: "/liputan/" + p.slug,
    title: p.name,
    intro: p.fit,
    kind: "package" as const,
  })),
  {
    path: "/studio",
    title: "Tentang studio",
    intro: "Cara kami melihat orang, ruang, dan hubungan di antaranya.",
    kind: "studio",
  },
  {
    path: "/cara-kerja",
    title: "Cara kerja",
    intro: "Dari percakapan pertama hingga foto sampai ke keluarga.",
    kind: "workflow",
  },
  {
    path: "/panduan",
    title: "Panduan sebelum acara",
    intro:
      "Catatan ringkas untuk menyusun waktu, menyiapkan keluarga dan memilih tempat foto.",
    kind: "guides",
  },
  ...guides.map((g) => ({
    path: "/panduan/" + g.slug,
    title: g.title,
    intro: g.intro,
    kind: "guide" as const,
  })),
  {
    path: "/tanya-jawab",
    title: "Tanya jawab",
    intro:
      "Jawaban untuk hal yang sering perlu dibicarakan sebelum memilih liputan.",
    kind: "faq",
  },
  {
    path: "/kontak",
    title: "Tanyakan tanggal",
    intro: "Ceritakan kapan dan di mana kamu merencanakan acara.",
    kind: "contact",
  },
];
export const mainLinks = [
  ["/album", "Album"],
  ["/liputan", "Liputan"],
  ["/studio", "Studio"],
  ["/panduan", "Panduan"],
] as const;
