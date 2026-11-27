export function formatRupiah(value: number): string {
  if (!Number.isFinite(value))
    throw new Error("Harga harus berupa angka valid.");
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
