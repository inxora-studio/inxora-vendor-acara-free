export function resolveSiteUrl(input?: string): URL {
  const url = new URL(input?.trim() || "http://localhost:3000");
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password
  ) {
    throw new Error("SITE_URL harus berupa URL HTTP/HTTPS tanpa kredensial.");
  }
  if (url.pathname !== "/" || url.search || url.hash) {
    throw new Error("SITE_URL harus berupa origin, contoh https://usaha.id.");
  }
  return url;
}
