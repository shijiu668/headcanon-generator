import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Headcanon Generator - Create Unique Character Traits",
  description: "Generate unique and creative character headcanons for your favorite characters. A fun tool for writers, roleplayers, and fans.",
  keywords: "headcanon generator, character traits, writing tool, character development, creative writing",
  authors: [{ name: "Headcanon Generator" }],
  openGraph: {
    title: "Headcanon Generator - Create Unique Character Traits",
    description: "Generate unique and creative character headcanons for your favorite characters",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Headcanon Generator",
    description: "Generate unique and creative character headcanons",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
