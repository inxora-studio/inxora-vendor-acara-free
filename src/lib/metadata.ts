import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const siteMetadata: Metadata = {
  metadataBase: siteConfig.url,
  title: { default: siteConfig.name, template: "%s | " + siteConfig.name },
  description: siteConfig.description,
  robots: { index: siteConfig.indexable, follow: siteConfig.indexable },
  openGraph: {
    type: "website",
    locale: siteConfig.locale.replace("-", "_"),
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
};
