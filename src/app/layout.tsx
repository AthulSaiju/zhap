// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import LenisProvider from "@/common/LenisProvider";
import { Spotlight } from "@/common/spotlight";
import { LightRays } from "@/common/lightrays";
import Navbar from "@/components/navbar/Navbar";

// Global metadata for SEO and sharing
export const metadata: Metadata = {
  title: {
    default: "Clipbase",
    template: "%s | Clipbase",
  },
  description: "Turn clips into income with Clipbase — earn from your edits.",
  applicationName: "Clipbase",
  metadataBase: new URL("https://clipbase.in"),
  openGraph: {
    title: "Clipbase",
    description: "Turn clips into income with Clipbase — earn from your edits.",
    url: "https://clipbase.in",
    siteName: "Clipbase",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Clipbase Social Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipbase",
    description: "Turn clips into income with Clipbase — earn from your edits.",
    images: ["/og.png"],
  },
};

const myFont = localFont({
  src: [
    {
      path: "../fonts/Rinter.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-main",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <div className="fixed inset-0 z-100 pointer-events-none">
          <Spotlight
            className="-top-40 z-100 left-0 md:-top-60 md:-left-60"
            fill="white"
          />
        </div>

        <Navbar/>

        {/* <LightRays className="opacity-50" intensity={0.1} /> */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
