"use client";
import React from "react";
import EarlyAccessCountdown from "./EarlyAccessCountdown";

export default function Footer() {
  return (
    <div
      className="relative w-full h-[60vh] md:h-[75vh] bg-black "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[60vh] md:h-[75vh] w-full flex items-center justify-center bg-grid">
        <EarlyAccessCountdown />
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-end pr-4 pb-2">
        <p className=" text-xs text-neutral-500">2026 CLIPBASE</p>
      </div>
    </div>
  );
}
