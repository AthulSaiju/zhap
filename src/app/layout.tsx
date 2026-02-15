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
    default: "Zhap",
    template: "%s | Zhap",
  },
  description: "Turn clips into income with Zhap — earn from your clips.",
  applicationName: "Zhap",
  metadataBase: new URL("https://zhap.in"),
  openGraph: {
    title: "Zhap",
    description: "Turn clips into income with Zhap — earn from your clips.",
    url: "https://zhap.in",
    siteName: "Zhap",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Zhap Social Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zhap",
    description: "Turn clips into income with Zhap — earn from your clips.",
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
        <div className="hidden md:block fixed inset-0 z-100 pointer-events-none">
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
