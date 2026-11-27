"use client";
import { useState } from "react";

import Image from "next/image";
import { photographs, presentation } from "@/content/studio";
import business from "@/config/business.json";
export function Cover() {
  const keys = presentation.heroPhotos;
  const [index, setIndex] = useState(0);
  const current = photographs[keys[index]];
  return (
    <section className="cover" aria-label="Fotografi studio">
      <div className="cover-images">
        {keys.map((k, i) => {
          const p = photographs[k];
          return (
            <Image
              key={k}
              src={"/images/" + p.file}
              fill
              sizes="100vw"
              alt={index === i ? p.alt : ""}
              aria-hidden={i !== index}
              preload={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              style={{ objectPosition: p.position }}
              className={i === index ? "cover-active" : ""}
            />
          );
        })}
      </div>
      <div className="cover-shade" aria-hidden="true" />
      <div className="frame cover-grid">
        <div className="cover-copy">
          <p className="eyebrow">
            {business.name} <span>/</span> {business.address}
          </p>
          <h1>
            {presentation.heroTitle[0]}
            <br />
            {presentation.heroTitle[1]}
          </h1>
          <p className="cover-intro">{presentation.heroIntro}</p>
          <a href="/album" className="pale">
            Buka album <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="cover-bar">
          <p aria-live="polite">
            <b>{current.title}</b> <span>Foto {current.credit}</span>
          </p>
          <div className="cover-buttons">
            <button
              type="button"
              disabled={index === 0}
              onClick={() => setIndex(index - 1)}
              aria-label="Foto sampul sebelumnya"
            >
              ←
            </button>
            <span>
              {index + 1} / {keys.length}
            </span>
            <button
              type="button"
              disabled={index === keys.length - 1}
              onClick={() => setIndex(index + 1)}
              aria-label="Foto sampul berikutnya"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
