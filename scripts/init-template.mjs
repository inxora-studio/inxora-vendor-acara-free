import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const allowed = new Set(["name", "title", "concept", "edition", "dry-run"]);
const concepts = new Set([
  "kuliner",
  "jasa-rumah",
  "katalog-produk",
  "interior",
  "salon",
  "penginapan",
  "catering",
  "kursus",
  "bengkel",
  "vendor-acara",
  "rental",
  "supplier",
]);

function argumentsFrom(args) {
  const values = {};
  for (let i = 0; i < args.length; i++) {
    const key = args[i].replace(/^--/, "");
    if (!args[i].startsWith("--") || !allowed.has(key) || key in values) {
      throw new Error("Argumen tidak dikenal atau duplikat: " + args[i]);
    }
    if (key === "dry-run") {
      values[key] = true;
      continue;
    }
    const value = args[++i];
    if (!value || value.startsWith("--"))
      throw new Error("Nilai argumen belum diisi: --" + key);
    values[key] = value;
  }
  if (
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(values.name ?? "") ||
    values.name.length > 100
  ) {
    throw new Error("--name wajib berupa slug, contoh inxora-kuliner-free.");
  }
  if (values.edition && !["free", "premium"].includes(values.edition)) {
    throw new Error("--edition harus free atau premium.");
  }
  if (values.concept && !concepts.has(values.concept)) {
    throw new Error("--concept tidak ada dalam katalog konsep.");
  }
  if (
    values.title &&
    (values.title.length > 120 || /[\r\n]/.test(values.title))
  ) {
    throw new Error("--title maksimal 120 karakter dan satu baris.");
  }
  return values;
}

try {
  const options = argumentsFrom(process.argv.slice(2));
  const root = process.cwd();
  const packagePath = path.join(root, "package.json");
  const templatePath = path.join(root, "src/config/template.json");
  const businessPath = path.join(root, "src/config/business.json");
  const lockPath = path.join(root, "package-lock.json");
  const [pkg, template, business] = await Promise.all(
    [packagePath, templatePath, businessPath].map(async (file) =>
      JSON.parse(await readFile(file, "utf8")),
    ),
  );
  let lock;
  try {
    lock = JSON.parse(await readFile(lockPath, "utf8"));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }

  pkg.name = options.name;
  template.id = options.name;
  template.name = options.title || options.name;
  template.concept = options.concept || null;
  template.edition = options.edition || "free";
  if (options.title) business.name = options.title;
  if (lock) {
    lock.name = options.name;
    if (lock.packages?.[""]) lock.packages[""].name = options.name;
  }
  const changes = [
    [packagePath, pkg],
    [templatePath, template],
    [businessPath, business],
  ];
  if (lock) changes.push([lockPath, lock]);

  if (!options["dry-run"]) {
    for (const [file, data] of changes) {
      await writeFile(file, JSON.stringify(data, null, 2) + "\n", "utf8");
    }
  }
  console.log(
    (options["dry-run"] ? "Pratinjau: " : "Proyek disiapkan: ") + options.name,
  );
  console.log(
    "Konsep: " +
      (template.concept || "belum dipilih") +
      " | Edisi: " +
      template.edition,
  );
  console.log(
    "Berikutnya: sesuaikan src/config/business.json, .env.local, dan docs/DESIGN-BRIEF.md.",
  );
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
