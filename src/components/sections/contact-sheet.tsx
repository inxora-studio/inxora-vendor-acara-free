import Image from "next/image";
import { useId } from "react";
import { photographs, type PhotoKey } from "@/content/studio";
import type { NoteRows, PrintReading } from "@/content/field-notes";

export function PrintStudy({ note }: { note: PrintReading }) {
  const group = useId();
  const picture = photographs[note.photo];
  return (
    <section className="print-study">
      <div className="study-words">
        <p className="eyebrow">Di balik bingkai</p>
        <h2>{note.title}</h2>
        <p>{note.detail}</p>
        <fieldset className="view-scale">
          <legend>Potongan foto</legend>
          <label>
            <input type="radio" name={group} value="wide" defaultChecked />
            <span>Bingkai penuh</span>
          </label>
          <label>
            <input type="radio" name={group} value="close" />
            <span>{note.focus}</span>
          </label>
        </fieldset>
      </div>
      <figure className="plate-print" data-motion="print-exposure">
        <div className="negative exposure-surface">
          <Image
            src={"/images/" + picture.file}
            width={picture.width}
            height={picture.height}
            alt={picture.alt}
            sizes="(max-width: 720px) 92vw, 52vw"
            style={{ transformOrigin: note.crop }}
          />
        </div>
        <figcaption>
          <b>{picture.title}</b>
          <small>Foto {picture.credit}</small>
        </figcaption>
      </figure>
    </section>
  );
}

export function FieldLedger({
  title,
  lead,
  rows,
  columns,
  children,
}: {
  title: string;
  lead?: string;
  rows: NoteRows;
  columns?: readonly [string, string];
  children?: React.ReactNode;
}) {
  return (
    <section className="field-ledger">
      <div className="ledger-title">
        <h2 data-motion="margin-caption">{title}</h2>
        {lead && <p>{lead}</p>}
        {children}
      </div>
      <div className="ledger-content">
        {columns && (
          <p className="ledger-key" aria-hidden="true">
            <span>{columns[0]}</span>
            <span>{columns[1]}</span>
          </p>
        )}
        <dl>
          {rows.map(([label, description]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function DoublePrint({
  title,
  text,
  photos,
  href,
  link,
}: {
  title: string;
  text: string;
  photos: readonly [PhotoKey, PhotoKey];
  href: string;
  link: string;
}) {
  return (
    <section className="paired-prints">
      <div className="pair-intro">
        <h2>{title}</h2>
        <div>
          <p>{text}</p>
          <a className="under" href={href}>
            {link}
          </a>
        </div>
      </div>
      <div className="pair-frames" data-motion="album-spread">
        {photos.map((id) => {
          const p = photographs[id];
          return (
            <figure key={id}>
              <Image
                src={"/images/" + p.file}
                width={p.width}
                height={p.height}
                alt={p.alt}
                sizes="(max-width: 580px) 88vw, 46vw"
                style={{ objectPosition: p.position }}
              />
              <figcaption>
                <b>{p.title}</b>
                <small>Foto {p.credit}</small>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export function MarginNote({
  title,
  body,
  href,
  link,
}: {
  title: string;
  body: string;
  href?: string;
  link?: string;
}) {
  return (
    <section className="margin-note">
      <h2>{title}</h2>
      <div>
        <p>{body}</p>
        {href && link && (
          <a className="under" href={href}>
            {link}
          </a>
        )}
      </div>
    </section>
  );
}

export function BlankSheet({
  title,
  fields,
}: {
  title: string;
  fields: readonly string[];
}) {
  const body =
    title +
    "\n\n" +
    fields
      .map(
        (field) =>
          field +
          "\n................................................................",
      )
      .join("\n\n");
  return (
    <section className="blank-sheet">
      <div>
        <h2>Lembar yang bisa diisi</h2>
        <p>
          Simpan lembar teks ini, lalu isi bersama orang yang akan mendampingi
          sesi foto.
        </p>
        <a
          className="paper-action"
          href={"data:text/plain;charset=utf-8," + encodeURIComponent(body)}
          download={title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".txt"}
        >
          Unduh lembar kosong (.txt)
        </a>
      </div>
      <div className="sheet-preview" data-motion="margin-caption">
        <p>{title}</p>
        <ul>
          {fields.map((field) => (
            <li key={field}>{field}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
