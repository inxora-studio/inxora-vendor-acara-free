import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "true";

const config: NextConfig = {
  ...(staticExport
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : {}),
  poweredByHeader: false,
};

export default config;
