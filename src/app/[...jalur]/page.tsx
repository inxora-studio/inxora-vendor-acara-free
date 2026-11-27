import { notFound } from "next/navigation";

import type { Metadata } from "next";
import { routes, type FolioRoute } from "@/content/routes";
import {
  coverage,
  series,
  presentation,
  businessIntro,
} from "@/content/studio";
import { guides, questionChapters, workflow } from "@/content/guides";
import {
  albumNotes,
  packageNotes,
  worksheets,
  readyBrief,
  handover,
} from "@/content/field-notes";
import {
  PrintStudy,
  FieldLedger,
  DoublePrint,
  MarginNote,
  BlankSheet,
} from "@/components/sections/contact-sheet";
import { PhotoAlbum } from "@/features/photo-album";
import { PriorityBrief } from "@/features/priority-brief";
import { formatRupiah } from "@/lib/format";
import { siteConfig } from "@/config/site";
import {
  Photo,
  Heading,
  SerialIndex,
  Plans,
  GuideIndex,
  ContactStrip,
} from "@/components/sections/folio";
import { FolioGallery } from "@/features/folio-gallery";
import { InquiryButton } from "@/features/coverage-inquiry";
import business from "@/config/business.json";

type Props = { params: Promise<{ jalur: string[] }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return routes.map((r) => ({ jalur: r.path.slice(1).split("/") }));
}
async function readRoute(params: Props["params"]) {
  const { jalur } = await params;
  const route = routes.find((p) => p.path === "/" + jalur.join("/"));
  if (!route) notFound();
  return route;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = await readRoute(params);
  return {
    title: r.title,
    description: r.intro,
    alternates: { canonical: r.path + "/" },
    openGraph: {
      title: r.title + " | " + siteConfig.name,
      description: r.intro,
      url: r.path + "/",
      siteName: siteConfig.name,
      type: "website",
      locale: "id_ID",
    },
  };
}
function Steps({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <ol className="steps">
      {items.map(([h, body]) => (
        <li key={h}>
          <h3>{h}</h3>
          <p>{body}</p>
        </li>
      ))}
    </ol>
  );
}
function Follow({ href, label }: { href: string; label: string }) {
  return (
    <p className="after">
      <a className="under" href={href}>
        {label}
      </a>
    </p>
  );
}
function Content({ r }: { r: FolioRoute }) {
  const slug = r.path.split("/").at(-1);
  switch (r.kind) {
    case "album":
      return (
        <>
          <div className="folio-mast">
            <Heading title={r.title} intro={r.intro} kicker="Portofolio" />
            <div className="mast-note">
              <span>Di halaman ini</span>
              <a href="#seri">Seri tematik</a>
              <a href="#cetakan">Lembar berpasangan</a>
            </div>
          </div>
          <section id="seri">
            <h2 className="plate-title">Tiga cara melihat acara</h2>
            <SerialIndex />
          </section>
          <div className="small-note">
            {business.isDemo
              ? "Tiga seri tematik. Foto contoh berlisensi dari fotografer yang tercantum pada tiap gambar."
              : "Setiap seri mengumpulkan foto berdasarkan suasana dan pendekatan visualnya."}
          </div>
          <DoublePrint
            title="Ruang dan jarak dekat"
            text="Satu foto memperlihatkan suasana di sekitar pasangan. Foto lain menahan perhatian pada rincian kecil. Dua jarak ini bisa saling melengkapi dalam satu album."
            photos={["akad", "melati"]}
            href="/album/upacara"
            link="Lihat seri upacara"
          />
          <section id="cetakan" className="album-turn">
            <h2>Lembar berpasangan</h2>
            <p>
              Buka tiap bentangan untuk melihat bagaimana dua komposisi dibaca
              berdampingan.
            </p>
            <PhotoAlbum />
          </section>
          <MarginNote
            title="Bawa satu foto ke percakapan"
            body="Catat judul foto yang menarik perhatianmu, lalu sebutkan hal yang ingin kamu simpan dari acaramu sendiri. Arah pandang orang tua atau suasana sebuah ruang sering lebih mudah dibahas dengan satu contoh."
            href="/kontak"
            link="Susun arahan foto"
          />
        </>
      );
    case "series": {
      const s = series.find((item) => item.slug === slug)!;
      const next = series[(series.indexOf(s) + 1) % series.length];
      const note = albumNotes[s.slug];
      return (
        <>
          <Heading
            title={s.name}
            intro={s.intro}
            back={["/album", "Album foto"]}
          />
          <section>
            <h2 className="plate-title">{note.wall}</h2>
            <div className="series-caption">
              <p>{s.text}</p>
              <span>{s.photos.length} foto</span>
            </div>
            <FolioGallery photos={s.photos} />
          </section>
          <PrintStudy note={note.reading} />
          <FieldLedger title={note.brief} rows={note.rows} />
          <MarginNote
            title={"Ke seri " + next.name}
            body={note.neighbor}
            href={"/album/" + next.slug}
            link={"Buka album " + next.name}
          />
        </>
      );
    }
    case "coverage":
      return (
        <>
          <div className="folio-mast">
            <Heading title={r.title} intro={r.intro} kicker="Layanan studio" />
            <div className="mast-note">
              <span>Pilih berdasarkan</span>
              <a href="#paket">Cakupan paket</a>
              <a href="#durasi">Jadwal acara</a>
            </div>
          </div>
          <section id="paket">
            <h2 className="plate-title">Dua rentang liputan</h2>
            <Plans />
          </section>
          <section id="durasi" className="info-band">
            <h2>Menentukan durasi.</h2>
            <p>
              Hitung dari waktu fotografer mulai bekerja hingga rangkaian
              terakhir yang ingin kamu simpan. Sisipkan waktu pindah tempat,
              berganti busana, dan berkumpul bersama keluarga.
            </p>
            <a className="under" href="/panduan/susun-jadwal">
              Baca panduan jadwal
            </a>
          </section>
          <DoublePrint
            title="Satu momen atau dua ruang?"
            text="Jika prosesi dan keluarga berkumpul di ruangan yang sama, satu sudut pandang bisa mengikuti keduanya. Bila persiapan berlangsung terpisah, bawa peta ruang ke percakapan tentang liputan."
            photos={["salam", "pintu"]}
            href="/cara-kerja"
            link="Lihat cara membagi posisi"
          />
          <FieldLedger
            title="Yang perlu tercatat dalam penawaran"
            lead="Sesuaikan rincian ini sebelum menyepakati tanggal."
            rows={[
              [
                "Waktu",
                "Tuliskan kapan tim mulai dan kapan liputan terakhir berakhir.",
              ],
              [
                "Perjalanan",
                "Sertakan semua alamat agar jarak antaragenda dapat diperhitungkan.",
              ],
              [
                "Hasil",
                "Periksa format foto, akses galeri dan waktu penyerahan yang disepakati.",
              ],
            ]}
          />
        </>
      );
    case "package": {
      const p = coverage.find((x) => x.slug === slug)!;
      const notes = packageNotes[p.slug];
      const other = coverage.find((item) => item.slug === notes.alternative)!;
      return (
        <>
          <div className="detail-cover">
            <div>
              <Heading
                title={p.name}
                intro={p.fit}
                back={["/liputan", "Pilihan liputan"]}
              />
              <dl className="spec">
                <div>
                  <dt>Waktu liputan</dt>
                  <dd>{p.duration}</dd>
                </div>
                <div>
                  <dt>Tarif paket</dt>
                  <dd>{formatRupiah(p.price)}</dd>
                </div>
                <div>
                  <dt>Tim & hasil</dt>
                  <dd>{p.delivery}</dd>
                </div>
              </dl>
              <InquiryButton selected={p.name} label="Tanya paket" />
            </div>
            <Photo id={p.image} priority />
          </div>
          <section className="journal-block">
            <h2>Termasuk dalam liputan.</h2>
            <ul className="included">
              {p.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>
          <section className="journal-block">
            <h2>Rangkaian contoh.</h2>
            <Steps items={p.plan} />
          </section>
          <DoublePrint
            title={notes.plate}
            text={notes.plateText}
            photos={notes.images}
            href={"/album/" + notes.album}
            link="Buka seri fotonya"
          />
          <FieldLedger
            title={notes.title}
            lead={notes.lead}
            rows={notes.rows}
          />
          <MarginNote
            title={notes.change}
            body={notes.reason}
            href={"/liputan/" + other.slug}
            link={"Lihat " + other.name + " · " + other.duration}
          />
        </>
      );
    }
    case "studio":
      return (
        <>
          <div className="detail-cover">
            <div>
              <Heading
                title={business.name}
                intro={businessIntro()}
                kicker="Tentang studio"
              />
              <p className="statement">{presentation.studioIntro}</p>
              <Follow href="/cara-kerja" label="Baca cara kerja kami" />
            </div>
            <Photo id="melati" priority />
          </div>
          <div className="journal-block">
            <h2>Bergerak seperlunya.</h2>
            <div className="prose">
              <p>
                Kami meminta keluarga menunjukkan orang dan momen yang penting.
                Dengan begitu fotografer dapat mengenali siapa yang harus
                diikuti tanpa banyak memberi aba-aba saat prosesi berlangsung.
              </p>
              <p>
                Untuk potret berdua, kami meluangkan waktu di luar ruang acara.
                Berjalan sebentar atau duduk bersama sering cukup untuk memulai
                sesi yang terasa wajar.
              </p>
            </div>
          </div>
          <PrintStudy note={albumNotes.berdua.reading} />
          <FieldLedger
            title="Sebelum mengangkat kamera"
            lead="Arahan yang singkat membantu fotografer memilih tempat dan menjaga kenyamanan orang di dalam bingkai."
            rows={[
              [
                "Pasangan",
                "Tunjukkan orang dan momen yang ingin diberi ruang khusus dalam liputan.",
              ],
              [
                "Keluarga",
                "Sepakati siapa yang akan memanggil kelompok serta siapa yang perlu didahulukan.",
              ],
              [
                "Lokasi",
                "Tanyakan batas gerak saat upacara, penggunaan lampu dan jalur keluar tamu.",
              ],
            ]}
          />
          <MarginNote
            title="Pilih foto yang boleh dibagikan"
            body="Beri tahu studio jika ada momen yang hanya ingin disimpan keluarga. Bicarakan izin untuk halaman portofolio terpisah dari akses galeri pribadi."
            href="/tanya-jawab"
            link="Baca tentang akses dan publikasi"
          />
        </>
      );
    case "workflow":
      return (
        <>
          <Heading title={r.title} intro={r.intro} kicker="Studio" />
          <section>
            <h2 className="plate-title">Dari tanggal ke galeri</h2>
            <div className="reading">
              <Photo id="siraman" />
              <Steps items={workflow} />
            </div>
          </section>
          <FieldLedger
            title="Satu lembar untuk dua pihak"
            lead="Sebelum hari acara, kumpulkan nama dan jadwal di dokumen yang sama."
            rows={[
              [
                "Pasangan dan keluarga",
                "Isi jadwal utama, kelompok foto, tempat berkumpul dan kebutuhan akses.",
              ],
              [
                "Koordinator dan studio",
                "Cocokkan posisi fotografer dengan arah masuk, jalur keluarga dan aturan ruang.",
              ],
            ]}
          />
          <DoublePrint
            title="Saat prosesi berjalan"
            text="Posisi fotografer memengaruhi apa yang masuk dalam satu bingkai. Gunakan contoh ini ketika membahas apakah kedua sisi keluarga perlu diliput pada waktu yang sama."
            photos={["akad", "restu"]}
            href="/liputan"
            link="Bandingkan cakupan liputan"
          />
          <FieldLedger title="Ketika galeri siap" rows={handover} />
        </>
      );
    case "guides":
      return (
        <>
          <Heading title={r.title} intro={r.intro} kicker="Buku saku" />
          <section>
            <h2 className="plate-title">Pilih lembar persiapan</h2>
            <div className="reading">
              <Photo id="jalan" priority />
              <GuideIndex />
            </div>
          </section>
          <FieldLedger
            title="Urutan menyiapkan bahan"
            lead="Mulai dari hal yang sudah diketahui. Satu perubahan lokasi biasanya juga mengubah waktu dan kelompok foto."
            rows={[
              [
                "Begitu tempat dipilih",
                "Simpan alamat, pintu masuk dan penghubung lokasi.",
              ],
              [
                "Setelah susunan acara ada",
                "Palangkan agenda tetap dan isi waktu berpindah ruang.",
              ],
              [
                "Menjelang acara",
                "Bagikan versi terakhir pada pendamping yang akan memanggil keluarga.",
              ],
            ]}
          />
          <DoublePrint
            title="Dua pilihan tempat menunggu"
            text="Teras yang teduh dan ruang berjendela memberi kemungkinan berbeda. Saat survei, lihat bagaimana orang berpindah di antara titik itu sambil mengenakan busana acara."
            photos={["jalan", "jendela"]}
            href="/panduan/lokasi-potret"
            link="Ambil lembar survei lokasi"
          />
          <MarginNote
            title="Saat jadwal bertabrakan"
            body="Tandai kegiatan yang terjadi bersamaan, siapa yang hadir, dan ruangnya. Informasi itu lebih membantu fotografer menyiapkan liputan daripada daftar acara tanpa lokasi."
            href="/panduan/susun-jadwal"
            link="Susun agenda foto"
          />
        </>
      );
    case "guide": {
      const g = guides.find((x) => x.slug === slug)!;
      const sheet = worksheets[g.slug];
      const nextGuide = guides.find((guide) => guide.slug === sheet.related)!;
      return (
        <>
          <Heading
            title={g.title}
            intro={g.intro}
            back={["/panduan", "Semua panduan"]}
          />
          <section>
            <h2 className="plate-title">{sheet.method}</h2>
            <div className="reading">
              <Photo id={g.image} priority />
              <div>
                <Steps items={g.entries} />
                <aside className="takeaway">
                  <h2>Yang perlu dibawa.</h2>
                  <p>{g.takeaway}</p>
                </aside>
              </div>
            </div>
          </section>
          <FieldLedger
            title={sheet.title}
            lead={sheet.intro}
            rows={sheet.rows}
            columns={sheet.columns}
          />
          <MarginNote
            title={sheet.twist}
            body={sheet.action}
            href={"/panduan/" + nextGuide.slug}
            link={nextGuide.title}
          />
          <BlankSheet title={g.title} fields={sheet.fields} />
        </>
      );
    }
    case "faq":
      return (
        <>
          <Heading
            title={r.title}
            intro={r.intro}
            kicker="Sebelum menghubungi"
          />
          <nav className="topic-rule" aria-label="Topik pertanyaan">
            {questionChapters.map((group) => (
              <a href={"#" + group.id} key={group.id}>
                {group.title}
              </a>
            ))}
          </nav>
          {questionChapters.map((group) => (
            <section className="faq-chapter" key={group.id} id={group.id}>
              <h2 data-motion="margin-caption">{group.title}</h2>
              <div className="faq">
                {group.items.map(([q, a]) => (
                  <details key={q}>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
          <FieldLedger title="Bila rencana belum lengkap" rows={readyBrief} />
          <MarginNote
            title="Periksa kembali drafmu"
            body="Draf pertanyaan dapat diperiksa dan disalin sebelum diteruskan kepada studio. Tambahkan prioritas bila ada momen keluarga yang memerlukan koordinasi khusus."
            href="/kontak"
            link="Susun pertanyaan untuk studio"
          />
        </>
      );
    case "contact":
      return (
        <>
          <div className="detail-cover contact-page">
            <div>
              <Heading title={r.title} intro={r.intro} kicker={business.name} />
              <p className="contact-blurb">
                Studio akan memeriksa ketersediaan fotografer, perjalanan dan
                cakupan yang sesuai. Mulai dengan draf singkat yang bisa kamu
                periksa kembali.
              </p>
              <InquiryButton />
              <dl className="spec">
                <div>
                  <dt>Basis studio</dt>
                  <dd>{business.address}</dd>
                </div>
                <div>
                  <dt>Yang disiapkan</dt>
                  <dd>Tanggal dan kota acara</dd>
                </div>
              </dl>
              <Follow href="/tanya-jawab" label="Lihat pertanyaan umum" />
            </div>
            <Photo id="jendela" priority />
          </div>
          <PriorityBrief />
          <FieldLedger
            title="Bekal untuk percakapan pertama"
            rows={readyBrief}
          />
          <DoublePrint
            title="Jelaskan momen dengan sebuah foto"
            text="Bila sulit menjelaskan gaya yang kamu suka, sebutkan judul foto contoh dan bagian yang menarik bagimu. Studio dapat membahas tempat dan waktu untuk mencari suasana serupa."
            photos={["kecup", "sepeda"]}
            href="/album"
            link="Pilih acuan dari album"
          />
          <MarginNote
            title="Setelah mengirim pertanyaan"
            body="Tunggu kabar mengenai tanggal dan lokasi. Sebelum menyepakati liputan, periksa lagi jam kerja, jumlah fotografer, biaya perjalanan bila ada, serta cara menerima galeri."
            href="/liputan"
            link="Periksa rincian paket"
          />
        </>
      );
  }
}
export default async function FolioPage({ params }: Props) {
  const route = await readRoute(params);
  return (
    <main id="utama" key={route.path}>
      <div className="frame subpage">
        <Content r={route} />
      </div>
      {route.kind !== "contact" && <ContactStrip />}
    </main>
  );
}
