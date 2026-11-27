import { ScrollMotion } from "@/components/layout/scroll-motion";
import type { ReactNode } from "react";
import { siteMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { SiteFooter, SiteHeader } from "@/components/layout/frame";
import "./globals.css";
export const metadata = siteMetadata;
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteConfig.locale}>
      <body>
        <SiteHeader />
        {children}
        <ScrollMotion />
        <SiteFooter />
      </body>
    </html>
  );
}
