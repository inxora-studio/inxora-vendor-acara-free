import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const script = fileURLToPath(
  new URL("../scripts/init-template.mjs", import.meta.url),
);

async function fixture() {
  const root = await mkdtemp(path.join(tmpdir(), "inxora-init-test-"));
  await mkdir(path.join(root, "src/config"), { recursive: true });
  const values = {
    "package.json": { name: "starter" },
    "package-lock.json": {
      name: "starter",
      packages: { "": { name: "starter" } },
    },
    "src/config/template.json": { id: "starter", version: "0.1.0" },
    "src/config/business.json": { name: "Nama Usaha", whatsapp: "" },
  };
  for (const [file, value] of Object.entries(values)) {
    await writeFile(path.join(root, file), JSON.stringify(value));
  }
  return root;
}

test("inisialisasi memperbarui nama, lockfile, konsep, dan edisi", async () => {
  const root = await fixture();
  const result = spawnSync(
    process.execPath,
    [
      script,
      "--name",
      "inxora-kuliner-free",
      "--title",
      "Kedai Contoh",
      "--concept",
      "kuliner",
      "--edition",
      "free",
    ],
    { cwd: root, encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const json = async (file: string) =>
    JSON.parse(await readFile(path.join(root, file), "utf8"));
  assert.equal((await json("package.json")).name, "inxora-kuliner-free");
  assert.equal(
    (await json("package-lock.json")).packages[""].name,
    "inxora-kuliner-free",
  );
  assert.equal((await json("src/config/template.json")).concept, "kuliner");
  assert.equal((await json("src/config/business.json")).name, "Kedai Contoh");
});

test("dry-run dan argumen tidak valid tidak mengubah proyek", async () => {
  const root = await fixture();
  const before = await readFile(path.join(root, "package.json"), "utf8");
  const dry = spawnSync(
    process.execPath,
    [script, "--name", "inxora-demo", "--dry-run"],
    { cwd: root },
  );
  assert.equal(dry.status, 0);
  for (const args of [
    ["--name", "../escape"],
    ["--name", "inxora-demo", "--edition", "pro"],
    ["--name", "inxora-demo", "--concept", "unknown"],
    ["--name", "inxora-demo", "--name", "duplicate"],
  ]) {
    const result = spawnSync(process.execPath, [script, ...args], {
      cwd: root,
    });
    assert.equal(result.status, 1);
  }
  assert.equal(await readFile(path.join(root, "package.json"), "utf8"), before);
});
