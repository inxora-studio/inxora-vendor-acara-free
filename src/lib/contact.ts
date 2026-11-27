export function getWhatsAppUrl(phone: string, message = ""): string | null {
  const value = phone.trim();
  if (!value) return null;
  if (!/^[+\d\s().-]+$/.test(value)) {
    throw new Error("Nomor WhatsApp hanya boleh berisi nomor telepon.");
  }
  let digits = value.replace(/[^\d]/g, "");
  if (digits.startsWith("08")) digits = "62" + digits.slice(1);
  if (!/^[1-9]\d{7,14}$/.test(digits)) {
    throw new Error("Gunakan nomor WhatsApp dalam format internasional.");
  }
  const url = new URL("https://wa.me/" + digits);
  if (message.trim()) url.searchParams.set("text", message);
  return url.toString();
}
