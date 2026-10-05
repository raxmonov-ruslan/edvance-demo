import type { Metadata } from "next";
import { demoMeta } from "@/lib/landing/demo-config";
import "./globals.css";

export const metadata: Metadata = {
  title: demoMeta.title,
  description: demoMeta.description,
  openGraph: {
    title: demoMeta.ogTitle,
    description: demoMeta.ogDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body className="antialiased">{children}</body>
    </html>
  );
}
