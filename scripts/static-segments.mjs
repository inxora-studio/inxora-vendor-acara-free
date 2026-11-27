import { copyFile, readdir } from "node:fs/promises";
import path from "node:path";

// Some Windows Next.js exports write a nested segment where the browser requests a dotted filename.
export async function addStaticSegmentAliases(outputDirectory) {
  const entries = await readdir(outputDirectory, {
    recursive: true,
    withFileTypes: true,
  });
  const pages = new Set(
    entries
      .filter((entry) => entry.isFile() && entry.name === "index.html")
      .map((entry) => entry.parentPath),
  );
  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".txt")) continue;
    const file = path.join(entry.parentPath, entry.name);
    const parts = path.relative(outputDirectory, file).split(path.sep);
    const segment = parts.findIndex((part) => part.startsWith("__next."));
    if (segment < 0 || segment === parts.length - 1) continue;
    const page = path.resolve(outputDirectory, ...parts.slice(0, segment));
    if (!pages.has(page)) continue;
    const name = parts.slice(segment).join(".");
    await copyFile(file, path.join(page, name));
  }
}
