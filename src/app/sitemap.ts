import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { routes } from "@/content/routes";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexable) return [];
  return ["/", ...routes.map((r) => r.path + "/")].map((path) => ({
    url: new URL(path, siteConfig.url).href,
  }));
}
