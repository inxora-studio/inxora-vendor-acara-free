import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { addStaticSegmentAliases } from "../scripts/static-segments.mjs";

test("ekspor halaman bertingkat menyediakan payload navigasi dengan nama yang diminta browser", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "inxora-segments-"));
  try {
    const route = path.join(root, "katalog", "contoh");
    const nested = path.join(route, "__next.katalog", "$d$slug");
    await mkdir(nested, { recursive: true });
    await writeFile(path.join(route, "index.html"), "<h1>Contoh</h1>");
    await writeFile(path.join(nested, "__PAGE__.txt"), "rsc-data");
    await writeFile(path.join(route, "__next._tree.txt"), "tree-data");
    await addStaticSegmentAliases(root);
    await addStaticSegmentAliases(root);
    assert.equal(
      await readFile(
        path.join(route, "__next.katalog.$d$slug.__PAGE__.txt"),
        "utf8",
      ),
      "rsc-data",
    );
    assert.equal(
      await readFile(path.join(route, "__next._tree.txt"), "utf8"),
      "tree-data",
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
