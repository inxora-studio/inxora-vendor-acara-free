"use client";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import business from "@/config/business.json";
import { coverage } from "@/content/studio";
import { getWhatsAppUrl } from "@/lib/contact";

function todayLocal() {
  const now = new Date();
  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
}

export function InquiryButton({
  label = "Tanyakan tanggal",
  selected = "",
  note = "",
  tone = "ink-button",
}: {
  label?: string;
  selected?: string;
  note?: string;
  tone?: string;
}) {
  const modal = useRef<HTMLDialogElement>(null);
  const draftField = useRef<HTMLTextAreaElement>(null);
  const lastOpener = useRef<HTMLButtonElement | null>(null);
  const [pack, setPack] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [minDate, setMinDate] = useState("");
  const [draft, setDraft] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const heading = useId();
  useEffect(() => {
    if (draft) draftField.current?.focus();
  }, [draft]);
  function openInquiry(initial: string, opener: HTMLButtonElement) {
    lastOpener.current = opener;
    setPack(initial);
    setDraft("");
    setCopyStatus("");
    setMinDate(todayLocal());
    modal.current?.showModal();
  }
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const day = todayLocal();
    if (date < day) {
      setMinDate(day);
      const field = form.elements.namedItem("date") as HTMLInputElement;
      field.min = day;
      field.reportValidity();
      return;
    }
    const town = city.trim();
    if (!town) {
      const field = form.elements.namedItem("city") as HTMLInputElement;
      field.setCustomValidity("Isi kota atau lokasi acara.");
      field.reportValidity();
      return;
    }
    const readable = new Intl.DateTimeFormat("id-ID", {
      dateStyle: "long",
    }).format(new Date(date + "T12:00:00"));
    const subject = pack || "liputan pernikahan";
    setDraft(
      "Halo " +
        business.name +
        ", saya ingin menanyakan " +
        subject +
        " untuk " +
        readable +
        " di " +
        town +
        ". Apakah tanggalnya tersedia? Mohon info cakupan dan biaya akhirnya." +
        (note ? "\n\n" + note : ""),
    );
    setCopyStatus("");
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus("Pesan disalin.");
    } catch {
      draftField.current?.focus();
      draftField.current?.select();
      setCopyStatus("Teks dipilih. Gunakan perintah salin pada perangkatmu.");
    }
  }
  const chat = draft ? getWhatsAppUrl(business.whatsapp, draft) : null;
  return (
    <>
      <button
        className={tone}
        type="button"
        aria-label={selected ? "Tanya paket " + selected : label}
        onClick={(e) => openInquiry(selected, e.currentTarget)}
      >
        {label}
      </button>
      <dialog
        ref={modal}
        aria-labelledby={heading}
        onClose={() => lastOpener.current?.focus()}
      >
        <div className="dialog-head">
          <h2 id={heading}>Tanyakan tanggal</h2>
          <button
            type="button"
            className="dismiss"
            onClick={() => modal.current?.close()}
            aria-label="Tutup pertanyaan"
          >
            ×
          </button>
        </div>
        <form
          onSubmit={prepare}
          onChange={() => {
            setDraft("");
            setCopyStatus("");
          }}
        >
          <label>
            Rencana liputan
            <select
              name="coverage"
              value={pack}
              onChange={(e) => setPack(e.target.value)}
            >
              <option value="">Belum memilih</option>
              {coverage.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </select>
          </label>
          <div className="pair">
            <label>
              Tanggal acara
              <input
                name="date"
                type="date"
                required
                min={minDate}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <label>
              Kota atau lokasi
              <input
                name="city"
                required
                maxLength={120}
                autoComplete="address-level2"
                value={city}
                onChange={(e) => {
                  e.target.setCustomValidity("");
                  setCity(e.target.value);
                }}
              />
            </label>
          </div>
          <button className="ink-button" type="submit">
            Siapkan pesan
          </button>
        </form>
        {draft && (
          <div className="response">
            <label>
              Draf pertanyaan
              <textarea rows={4} ref={draftField} readOnly value={draft} />
            </label>
            <p>
              {chat
                ? "Periksa draf sebelum mengirimnya."
                : "Nomor studio belum diisi. Salin draf ini untuk dibagikan sendiri."}
            </p>
            <div className="response-actions">
              {chat && (
                <a
                  className="ink-button"
                  href={chat}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buka WhatsApp
                </a>
              )}
              <button className="text-link" type="button" onClick={copy}>
                Salin pesan
              </button>
            </div>
            <p role="status">{copyStatus}</p>
          </div>
        )}
      </dialog>
    </>
  );
}
