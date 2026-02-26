import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const SITE_URL = "https://ui-replication-practise.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "UI Replication — Chargeflow & Domu Animations",
    template: "%s | UI Replication",
  },
  description:
    "Pixel-perfect UI replications of scroll-driven animations and navbar interactions from Chargeflow and Domu, built with Next.js, Tailwind CSS, and Framer Motion principles.",
  keywords: [
    "UI replication",
    "Chargeflow",
    "Domu",
    "Next.js animation",
    "scroll animation",
    "converging animation",
    "navbar scroll shrink",
    "Tailwind CSS",
    "frontend recreation",
  ],
  authors: [{ name: "UI Replication Project" }],
  creator: "UI Replication Project",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "UI Replication — Chargeflow & Domu Animations",
    description:
      "Pixel-perfect UI replications of scroll-driven animations and navbar interactions from Chargeflow and Domu, built with Next.js and Tailwind CSS.",
    siteName: "UI Replication",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Replication — Chargeflow & Domu Animations",
    description:
      "Pixel-perfect UI replications of scroll-driven animations and navbar interactions from Chargeflow and Domu.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#080810]">
        {children}
      </body>
    </html>
  );
}
