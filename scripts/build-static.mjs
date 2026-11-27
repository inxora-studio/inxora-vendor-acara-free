import { spawnSync } from "node:child_process";
import path from "node:path";
import { addStaticSegmentAliases } from "./static-segments.mjs";
import { fileURLToPath } from "node:url";

const nextCli = fileURLToPath(import.meta.resolve("next/dist/bin/next"));
const result = spawnSync(process.execPath, [nextCli, "build"], {
  env: { ...process.env, STATIC_EXPORT: "true" },
  stdio: "inherit",
});
if (result.status !== 0) process.exit(result.status ?? 1);
await addStaticSegmentAliases(path.resolve("out"));
