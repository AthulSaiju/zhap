// components/LenisProvider.jsx
"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 2.5,
        // smoothTouch: true,
        wheelMultiplier: 2,
        touchMultiplier: 2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        infinite: false,
        autoResize: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
