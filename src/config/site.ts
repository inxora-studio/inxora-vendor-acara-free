import business from "./business.json";
import { resolveSiteUrl } from "@/lib/url";

export const siteConfig = {
  ...business,
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  indexable: process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true",
} as const;
