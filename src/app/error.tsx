"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main>
      <h1>Halaman belum bisa dimuat</h1>
      <p>Silakan coba memuat halaman kembali.</p>
      <button type="button" onClick={() => reset()}>
        Muat ulang
      </button>
    </main>
  );
}
