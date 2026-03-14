"use client";
import React from "react";
import EarlyAccessCountdown from "./EarlyAccessCountdown";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="relative w-full h-[60vh] md:h-[75vh] bg-black "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[60vh] md:h-[75vh] w-full flex items-center justify-center bg-grid2">
        <EarlyAccessCountdown />
      </div>

      <div className="absolute text-[10px] md:text-sm text-neutral-500 bottom-0 left-0 w-full gap-4 flex justify-center  pb-2">
        <a className="" href="mailto:info@rudio.in">Contact</a>
        <Link href="/privacy">
  Privacy Policy
</Link>

<Link href="/terms">
  Terms of Service
</Link>


        <p className=""> &copy; 2026 RUDIO</p>
      </div>
    </div>
  );
}
