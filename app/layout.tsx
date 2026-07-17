import type { Metadata } from "next";
import { Outfit, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Boomn AI — We Get You Clients. On Autopilot.",
  description:
    "AI-powered lead capture, voice agents, and conversion web systems for high-growth US businesses. 500–5,000 verified leads a month, live in under 3 weeks.",
  openGraph: {
    title: "Boomn AI — We Get You Clients. On Autopilot.",
    description:
      "AI-powered lead capture, voice agents, and conversion web systems for high-growth US businesses.",
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Boomn AI — We get you clients. On autopilot." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boomn AI — We Get You Clients. On Autopilot.",
    description: "AI-powered lead capture, voice agents, and conversion web systems for high-growth US businesses.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${dmSans.variable} ${dmMono.variable}`}>{children}</body>
    </html>
  );
}
