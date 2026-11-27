import { Cover } from "@/features/cover";
import { PhotoAlbum } from "@/features/photo-album";
import { presentation } from "@/content/studio";
import {
  SerialIndex,
  Plans,
  ContactStrip,
  GuideIndex,
} from "@/components/sections/folio";
import business from "@/config/business.json";
import { PrintStudy, FieldLedger } from "@/components/sections/contact-sheet";
import { openingPrint } from "@/content/field-notes";
export default function Home() {
  return (
    <main id="utama">
      <Cover />
      <div className="frame">
        <PrintStudy note={openingPrint} />
      </div>
      <section className="frame section" id="album">
        <div className="section-title">
          <h2>Seri pilihan.</h2>
          <a className="under" href="/album">
            Seluruh album
          </a>
        </div>
        <SerialIndex />
      </section>
      <section id="studio" className="studio-ribbon">
        <div className="frame studio-ribbon-inner">
          <div>
            <p className="eyebrow">Studio · {business.address}</p>
            <h2>{business.name}</h2>
          </div>
          <div>
            <p className="statement">{presentation.studioIntro}</p>
            <a className="under" href="/studio">
              Kenali studio
            </a>
          </div>
        </div>
      </section>
      <section id="liputan" className="frame section">
        <div className="section-title">
          <h2>Pilihan liputan.</h2>
          <a className="under" href="/liputan">
            Bandingkan paket
          </a>
        </div>
        <Plans />
      </section>
      <section className="frame section ruled">
        <div className="section-title">
          <h2>Lembar album.</h2>
        </div>
        <PhotoAlbum />
      </section>
      <div className="frame">
        <FieldLedger
          title="Siapa yang ingin ada dalam foto?"
          lead="Satu daftar pendek lebih mudah dibawa di sela acara. Mulai dari tiga pertanyaan ini sebelum mengumpulkan nama."
          rows={[
            [
              "Yang hadir lebih awal",
              "Cari tahu kapan orang tua dan keluarga inti tiba. Pilih satu tempat agar mereka mudah ditemukan.",
            ],
            [
              "Yang ingin duduk",
              "Siapkan kursi di pinggir area foto supaya kerabat tetap nyaman sambil menunggu.",
            ],
            [
              "Yang memanggil keluarga",
              "Berikan daftar nama panggilan kepada satu pendamping yang mengenal keluarga.",
            ],
          ]}
        >
          <a className="under" href="/panduan/foto-keluarga">
            Ambil lembar kelompok keluarga
          </a>
        </FieldLedger>
      </div>
      <section className="frame section ruled">
        <div className="section-title">
          <h2>Sebelum acara.</h2>
          <a className="under" href="/panduan">
            Panduan acara
          </a>
        </div>
        <GuideIndex />
      </section>
      <ContactStrip />
    </main>
  );
}
