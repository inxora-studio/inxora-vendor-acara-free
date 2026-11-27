"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { photographs, type PhotoKey } from "@/content/studio";
export function FolioGallery({ photos }: { photos: readonly PhotoKey[] }) {
  const [index, setIndex] = useState(0);
  const modal = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const active = photographs[photos[index]];
  function shift(by: number) {
    setIndex((value) => Math.min(photos.length - 1, Math.max(0, value + by)));
  }
  return (
    <div className="folio-wall">
      {photos.map((k, i) => {
        const p = photographs[k];
        return (
          <figure key={k} data-motion="print-exposure">
            <button
              className="exposure-surface"
              type="button"
              onClick={(e) => {
                opener.current = e.currentTarget;
                setIndex(i);
                modal.current?.showModal();
              }}
              aria-label={"Perbesar " + p.title}
            >
              <Image
                src={"/images/" + p.file}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(max-width: 700px) 93vw, 44vw"
                style={{ objectPosition: p.position }}
              />
              <span className="enlarge" aria-hidden="true">
                ＋
              </span>
            </button>
            <figcaption>
              <b>{p.title}</b>
              <small>Foto {p.credit}</small>
            </figcaption>
          </figure>
        );
      })}
      <dialog
        ref={modal}
        className="viewer"
        aria-label="Foto diperbesar"
        onClose={() => opener.current?.focus()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            shift(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            shift(-1);
          }
        }}
      >
        <div className="viewer-tools">
          <div className="viewer-count" aria-live="polite">
            {index + 1} / {photos.length}
          </div>
          <button
            type="button"
            onClick={() => modal.current?.close()}
            aria-label="Tutup foto"
          >
            Tutup ×
          </button>
        </div>
        <div className="view-img">
          <Image
            key={active.file}
            src={"/images/" + active.file}
            width={active.width}
            height={active.height}
            alt={active.alt}
            sizes="95vw"
          />
        </div>
        <div className="viewer-tools">
          <div>
            <b>{active.title}</b>
            <small>Foto {active.credit}</small>
          </div>
          <div>
            <button
              className="exposure-surface"
              type="button"
              onClick={() => shift(-1)}
              disabled={index === 0}
              aria-label="Foto sebelumnya"
            >
              ←
            </button>
            <button
              className="exposure-surface"
              type="button"
              onClick={() => shift(1)}
              disabled={index === photos.length - 1}
              aria-label="Foto berikutnya"
            >
              →
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
