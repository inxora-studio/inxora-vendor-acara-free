"use client";
import Image from "next/image";
import { useState } from "react";
import { spreads } from "@/content/studio";
import business from "@/config/business.json";

export function PhotoAlbum() {
  const [index, setIndex] = useState(0);
  return (
    <div className="album">
      <div className="album-controls">
        <p>{business.isDemo ? "Album contoh" : "Album studio"}</p>
        <div className="turns">
          <button
            type="button"
            aria-label="Lembar sebelumnya"
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
          >
            ←
          </button>
          <span aria-live="polite" aria-atomic="true">
            Lembar {index + 1} / {spreads.length}
          </span>
          <button
            type="button"
            aria-label="Lembar berikutnya"
            disabled={index === spreads.length - 1}
            onClick={() => setIndex(index + 1)}
          >
            →
          </button>
        </div>
      </div>
      <div key={index} className="spread" data-motion="album-spread">
        {spreads[index].map((photo, part) => (
          <figure key={photo.file}>
            <div className="print">
              <Image
                src={"/images/" + photo.file}
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
                preload={index === 0 && part === 0}
                loading={part === 0 && index === 0 ? undefined : "eager"}
                style={{ objectPosition: photo.position }}
                sizes={
                  part === 0
                    ? "(max-width: 640px) 94vw, 66vw"
                    : "(max-width: 640px) 62vw, 30vw"
                }
              />
            </div>
            <figcaption>
              <span>{photo.title}</span>
              <small>Foto {photo.credit}</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
