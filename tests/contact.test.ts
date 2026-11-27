import assert from "node:assert/strict";
import test from "node:test";
import { getWhatsAppUrl } from "../src/lib/contact.ts";
import { resolveSiteUrl } from "../src/lib/url.ts";

test("kontak kosong tidak menghasilkan tautan palsu", () => {
  assert.equal(getWhatsAppUrl(""), null);
});
test("nomor lokal Indonesia dinormalisasi dan pesan di-encode", () => {
  const result = getWhatsAppUrl(
    "0812-3456-7890",
    "Halo & ingin pesan + tanya harga",
  );
  assert.ok(result);
  const url = new URL(result);
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, "/6281234567890");
  assert.equal(
    url.searchParams.get("text"),
    "Halo & ingin pesan + tanya harga",
  );
});
test("nomor internasional didukung dan masukan non-telepon ditolak", () => {
  assert.equal(
    getWhatsAppUrl("+1 (415) 555-2671"),
    "https://wa.me/14155552671",
  );
  assert.throws(() => getWhatsAppUrl("javascript:alert(1)"));
  assert.throws(() => getWhatsAppUrl("123"));
});
test("URL produksi harus HTTP/HTTPS tanpa kredensial atau subpath", () => {
  assert.equal(resolveSiteUrl("https://usaha.id").href, "https://usaha.id/");
  assert.equal(resolveSiteUrl().origin, "http://localhost:3000");
  for (const value of [
    "javascript:alert(1)",
    "https://user:pass@example.com",
    "https://usaha.id/produk",
  ]) {
    assert.throws(() => resolveSiteUrl(value));
  }
});
