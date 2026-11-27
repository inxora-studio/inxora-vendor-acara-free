"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import business from "@/config/business.json";
import { mainLinks } from "@/content/routes";
export function SiteHeader() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);
  const current = (url: string) =>
    pathname === url ? ("page" as const) : undefined;
  return (
    <>
      <a className="skip" href="#utama">
        Lewati ke konten
      </a>
      <header className="sitehead">
        <div className="frame head-inner">
          <a
            className="brand"
            href="/"
            aria-label={business.name + ", beranda"}
          >
            {business.name}
          </a>
          <nav className="wide-nav" aria-label="Navigasi utama">
            {mainLinks.map(([url, label]) => (
              <a key={url} href={url} aria-current={current(url)}>
                {label}
              </a>
            ))}
          </nav>
          <a
            className="head-contact"
            href="/kontak"
            aria-current={current("/kontak")}
          >
            Hubungi studio
          </a>
          <details
            className="small-nav"
            ref={menu}
            onKeyDown={(e) => {
              if (e.key === "Escape" && menu.current?.open) {
                menu.current.open = false;
                menu.current.querySelector("summary")?.focus();
              }
            }}
          >
            <summary>Menu</summary>
            <nav aria-label="Navigasi ponsel">
              {[
                ...mainLinks,
                ["/cara-kerja", "Cara kerja"],
                ["/tanya-jawab", "Tanya jawab"],
              ].map(([url, label]) => (
                <a
                  href={url}
                  key={url}
                  aria-current={current(url)}
                  onClick={() => {
                    if (menu.current) menu.current.open = false;
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
export function SiteFooter() {
  return (
    <footer className="sitefoot">
      <div className="frame foot-grid">
        <div>
          <a href="/" className="brand">
            {business.name}
          </a>
          <p>Fotografi pernikahan · {business.address}</p>
        </div>
        <nav aria-label="Tautan studio">
          <a href="/album">Album foto</a>
          <a href="/liputan">Pilihan liputan</a>
          <a href="/studio">Tentang studio</a>
          <a href="/cara-kerja">Cara kerja</a>
        </nav>
        <nav aria-label="Informasi acara">
          <a href="/panduan">Panduan acara</a>
          <a href="/tanya-jawab">Tanya jawab</a>
          <a href="/kontak">Hubungi studio</a>
        </nav>
      </div>
      {business.isDemo && (
        <p className="frame foot-note">
          Studio dan tarif contoh. Foto Pexels berlisensi dengan kredit pada
          setiap gambar.
        </p>
      )}
    </footer>
  );
}
