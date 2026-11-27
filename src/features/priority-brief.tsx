"use client";
import { useState } from "react";
import { priorities } from "@/content/field-notes";
import { InquiryButton } from "./coverage-inquiry";

export function PriorityBrief() {
  const [selected, setSelected] = useState<string[]>([]);
  const note = selected.length
    ? "Momen yang ingin kami utamakan: " + selected.join(", ") + "."
    : "";
  return (
    <section className="priority-brief">
      <div>
        <h2>Momen yang ingin kamu simpan</h2>
        <p>
          Pilih yang penting untuk keluargamu. Pilihanmu akan ikut tertulis saat
          kamu membuat draf pertanyaan.
        </p>
      </div>
      <div className="brief-fields">
        <fieldset>
          <legend>Prioritas foto</legend>
          {priorities.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={(e) =>
                  setSelected((prior) =>
                    e.target.checked
                      ? [...prior, item]
                      : prior.filter((value) => value !== item),
                  )
                }
              />
              <span>{item}</span>
            </label>
          ))}
        </fieldset>
        <div className="brief-submit">
          <span aria-live="polite">{selected.length} momen dipilih</span>
          <InquiryButton label="Buat draf pertanyaan" note={note} />
        </div>
      </div>
    </section>
  );
}
