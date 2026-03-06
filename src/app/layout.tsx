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
    default: "Rudio | The new Creator Economy",
    template: "%s | Rudio",
  },

  description:
    "Rudio lets creators earn money for every verified view. Join campaigns, create clips, and turn your content into income.",

  applicationName: "Rudio",

  metadataBase: new URL("https://rudio.in"),

  keywords: [
    "rudio",
    "creator monetization",
    "earn from videos",
    "paid per view platform",
    "creator economy",
    "social media monetization",
    "make money online",
    "make money online in india"
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Rudio — The new Creator Economy",
    description:
      "Earn money for every verified view. Join campaigns, create clips, and monetize your content with Rudio.",
    url: "https://rudio.in",
    siteName: "Rudio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rudio Social Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rudio — The new Creator Economy",
    description:
      "Earn money for every verified view. Join campaigns and monetize your clips with Rudio.",
    images: ["/og.png"],
  },

  alternates: {
    canonical: "https://rudio.in",
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
