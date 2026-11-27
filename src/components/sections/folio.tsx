import Image from "next/image";
import business from "@/config/business.json";
import { coverage, photographs, series, type PhotoKey } from "@/content/studio";
import { guides } from "@/content/guides";
import { formatRupiah } from "@/lib/format";
import { InquiryButton } from "@/features/coverage-inquiry";

export function Photo({
  id,
  priority = false,
}: {
  id: PhotoKey;
  priority?: boolean;
}) {
  const item = photographs[id];
  return (
    <figure className="individual-photo" data-motion="print-exposure">
      <div className="exposure-surface">
        <Image
          src={"/images/" + item.file}
          width={item.width}
          height={item.height}
          alt={item.alt}
          preload={priority}
          sizes="(max-width: 760px) 92vw, 52vw"
          style={{ objectPosition: item.position }}
        />
      </div>
      <figcaption>
        <b>{item.title}</b>
        <small>Foto {item.credit}</small>
      </figcaption>
    </figure>
  );
}
export function SerialIndex() {
  return (
    <div className="serial-index">
      {series.map((s) => {
        const p = photographs[s.photos[0]];
        return (
          <article key={s.slug}>
            <a
              className="serial-link"
              href={"/album/" + s.slug}
              aria-label={"Buka seri " + s.name}
            >
              <div
                className="card-image exposure-surface"
                data-motion="print-exposure"
              >
                <Image
                  width={p.width}
                  height={p.height}
                  alt={p.alt}
                  src={"/images/" + p.file}
                  sizes="(max-width: 760px) 90vw, 31vw"
                  style={{ objectPosition: p.position }}
                />
              </div>
              <div className="serial-copy">
                <div className="index-title">
                  <h3>{s.name}</h3>
                  <span>{s.photos.length} foto</span>
                </div>
                <p>{s.intro}</p>
                <small>Foto {p.credit}</small>
              </div>
            </a>
          </article>
        );
      })}
    </div>
  );
}
export function Plans() {
  return (
    <div className="plans">
      {coverage.map((p) => (
        <article className="plan" key={p.slug}>
          <p className="eyebrow">{p.duration}</p>
          <h3>
            <a href={"/liputan/" + p.slug}>{p.name}</a>
          </h3>
          <p>{p.details}</p>
          <p className="delivery">{p.delivery}</p>
          <strong>{formatRupiah(p.price)}</strong>
          <div className="plan-links">
            <a className="under" href={"/liputan/" + p.slug}>
              Rincian liputan
            </a>
            <InquiryButton
              selected={p.name}
              label="Tanya paket"
              tone="text-link"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
export function GuideIndex() {
  return (
    <div className="guide-index">
      {guides.map((g) => (
        <a key={g.slug} href={"/panduan/" + g.slug}>
          <b>{g.title}</b>
          <span>{g.intro}</span>
          <i aria-hidden="true">↗</i>
        </a>
      ))}
    </div>
  );
}
export function ContactStrip() {
  return (
    <section id="kontak" className="contact-strip">
      <div className="frame strip-inner">
        <div>
          <p className="eyebrow">Kontak studio · {business.address}</p>
          <h2>Sudah ada tanggal?</h2>
        </div>
        <div>
          <p>
            Mulai dengan kota dan tanggal acaramu. Kami akan memeriksa
            jadwalnya.
          </p>
          <InquiryButton tone="pale" />
        </div>
      </div>
    </section>
  );
}
export function Heading({
  title,
  intro,
  kicker,
  back,
}: {
  title: string;
  intro?: string;
  kicker?: string;
  back?: [string, string];
}) {
  return (
    <header className="page-intro">
      {back && (
        <a className="back" href={back[0]}>
          ← {back[1]}
        </a>
      )}
      {kicker && <p className="eyebrow">{kicker}</p>}
      <h1>{title}</h1>
      {intro && <p className="lead">{intro}</p>}
    </header>
  );
}
