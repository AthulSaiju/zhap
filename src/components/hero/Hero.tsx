"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CountdownItem } from "../footer/CountdownItem";
import { useCountdown } from "@/hooks/useCountdown";
import { EARLY_ACCESS_TARGET_DATE } from "@/lib/utils";
import CTA from "../cta/Cta";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  // Only render after client mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  const { days, hours, minutes, seconds } = useCountdown(
    EARLY_ACCESS_TARGET_DATE,
  );
  return (
    // <div className="relative min-h-screen bg-red-500 w-full flex items-center justify-center overflow-hidden">
    //    {/* <div className="w-full flex items-center justify-center">
    //   <Image
    //     src="/bg-2k-blank.jpeg"
    //     alt="Hero background"
    //     width={1920}
    //     height={1080}
    //     className="w-[100%] h-auto"
    //     priority
    //   />
    // </div> */}
    //   {/* <div className="relative z-10 text-center">
    //     <h1 className="text-8xl font-black text-white tracking-widest drop-shadow-2xl">
    //       HERO
    //     </h1>
    //   </div> */}
    // </div>

    // -------------------------------------------------------------------------------------------------------

    <section className="relative min-h-[110vh]  w-full flex items-center justify-center bg-black text-white overflow-hidden px-6 ">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.6] bg-grid" />

      {/* Soft top spotlight */}
      <div
        className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-[1000px] h-[600px]
        bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_70%)]
        blur-[10px]
        opacity-40
      "
      />

      <div className="relative z-10 max-w-3xl w-full text-center ">
        {/* Logo */}
        {/* <div className="flex justify-center">
          <div className="w-14 h-14 rounded-xl bg-lime-400 flex items-center justify-center text-black font-bold">
            CB
          </div>
        </div> */}

        {/* Badge */}
        <div className=" flex justify-center">
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-wide text-white/80 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full  bg-green-400" />
            EARLY ACCESS{" "}
          </div>
        </div>

        {/* Title */}
        <h1
          className="mt-8 text-4xl md:text-7xl bg-linear-to-br
  from-white
  via-white/80
  to-white/20
  bg-clip-text
  text-transparent"
        >
          A New Era of Content Monetization
        </h1>

        {/* Subtitle */}
        <p className="mt-6 md:mt-4 text-white/60 text-sm md:text-lg leading-relaxed">
          Join campaigns that match your style. Create original content or clip
          viral moments. Get paid for performance—every view counts, every skill
          pays.
        </p>

        {/* Countdown */}
        {mounted && (
          <div className="space-y-4 mt-6 flex py-4 flex-col items-center justify-center">
            <div className=" flex gap-4 md:gap-4 items-center">
              <CountdownItem value={days} label="Days" variant="sm" />
              <span className="text-2xl text-zinc-800 md:text-2xl">|</span>
              <CountdownItem value={hours} label="Hours" variant="sm" />
              <span className="text-2xl text-zinc-800 md:text-2xl">|</span>
              <CountdownItem value={minutes} label="Minutes" variant="sm" />
              <span className="text-2xl text-zinc-800 md:text-2xl">|</span>
              <CountdownItem value={seconds} label="Seconds" variant="sm" />
            </div>

            <p className=" text-[10px] uppercase tracking-widest text-neutral-500">
              Left until Early Access Closes
            </p>
          </div>
        )}

        {/* Email + CTA */}
        <div className="mt-6 md:mt-6 flex items-center justify-center  p-2">
          <CTA />
        </div>

        {/* Social proof avatars */}
        <div className="mt-2 flex items-center justify-center gap-3">
          <div className="flex -space-x-3">
            <div className="w-8 h-8 rounded-full bg-neutral-700 border border-black" />
            <div className="w-8 h-8 rounded-full bg-neutral-600 border border-black" />
            <div className="w-8 h-8 rounded-full bg-neutral-500 border border-black" />
            <div className="w-8 h-8 rounded-full bg-neutral-400 border border-black" />
          </div>

          <p className="text-sm text-white/50">
            Join 300+ creators
          </p>
        </div>
      </div>
    </section>

    // -------------------------------------------------------------------------------------------------------

    // <div
    //       className="relative w-full h-[98vh] bg-black "
    //       style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    //     >
    //       <div className="fixed top-0 h-[98vh] w-full flex items-center justify-center bg-grid">
    //          <section className="relative  w-full flex items-center justify-center bg-black text-white overflow-hidden px-6 pb-[8%]">
    //     {/* Subtle grid background */}
    //     <div className="absolute inset-0 opacity-[0.9]] bg-grid" />

    //      {/* Soft top spotlight */}
    //     <div
    //       className="
    //       absolute top-0 left-1/2 -translate-x-1/2
    //       w-[1000px] h-[600px]
    //       bg-[radial-gradient(circle_at_top,rgba(190,255,0,0.25),transparent_70%)]
    //       blur-[140px]
    //       opacity-40
    //     "
    //     />

    //     <div className="relative z-10 max-w-3xl w-full text-center mt-[15%]">
    //       {/* Logo */}
    //       {/* <div className="flex justify-center">
    //         <div className="w-14 h-14 rounded-xl bg-lime-400 flex items-center justify-center text-black font-bold">
    //           CB
    //         </div>
    //       </div> */}

    //       {/* Badge */}
    //       <div className=" flex justify-center">
    //         <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-wide text-white/80 backdrop-blur-sm">
    //           <span className="w-2 h-2 rounded-full bg-lime-400" />
    //           EARLY ACCESS{" "}
    //         </div>
    //       </div>

    //       {/* Title */}
    //       <h1
    //         className="mt-8 text-7xl bg-linear-to-br
    // from-white
    // via-white/80
    // to-white/20
    // bg-clip-text
    // text-transparent"
    //       >
    //         A New Era of Content Monetization
    //       </h1>

    //       {/* Subtitle */}
    //       <p className="mt-4 text-white/60 text-lg leading-relaxed">
    //         Join campaigns that match your style. Create original content or clip
    //         viral moments. Get paid for performance—every view counts, every skill
    //         pays.
    //       </p>

    //       {/* Email + CTA */}
    //       <div className="mt-8 flex items-center bg-neutral-900 border border-white/10 rounded-full p-2">
    //         <input
    //           type="email"
    //           placeholder="Email"
    //           className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none"
    //         />

    //         <button
    //           className="
    //           px-6 py-2
    //           rounded-full
    //           bg-lime-400
    //           text-black
    //           text-sm font-medium
    //           transition
    //           hover:bg-lime-300
    //         "
    //         >
    //           Join waitlist
    //         </button>
    //       </div>

    //       {/* Social proof avatars */}
    //       <div className="mt-6 flex items-center justify-center gap-3">
    //         <div className="flex -space-x-3">
    //           <div className="w-8 h-8 rounded-full bg-neutral-700 border border-black" />
    //           <div className="w-8 h-8 rounded-full bg-neutral-600 border border-black" />
    //           <div className="w-8 h-8 rounded-full bg-neutral-500 border border-black" />
    //           <div className="w-8 h-8 rounded-full bg-neutral-400 border border-black" />
    //         </div>

    //         <p className="text-sm text-white/50">
    //           Join 300+ creators on the waitlist
    //         </p>
    //       </div>

    //       {/* Countdown */}
    //       <div className="mt-10 flex justify-center gap-6">
    //         {[
    //           { value: "17", label: "DAYS" },
    //           { value: "01", label: "HOURS" },
    //           { value: "29", label: "MINUTES" },
    //           { value: "20", label: "SECONDS" },
    //         ].map((item) => (
    //           <div key={item.label} className="text-center">
    //             <div className="text-3xl font-mono text-white bg-background w-[4vw] py-2 rounded-lg">
    //               {item.value}
    //             </div>
    //             <div className="mt-1 text-xs tracking-widest text-white/40">
    //               {item.label}
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       <p className="mt-6 text-xs uppercase tracking-widest text-white/30">
    //         Left until full release
    //       </p>
    //     </div>
    //   </section>
    //       </div>

    //       <div className="absolute bottom-0 left-0 w-full flex justify-end pr-4 pb-2">
    //         <p className=" text-xs text-neutral-500">[ SCROLL ]</p>
    //       </div>
    //     </div>
  );
};

export default Hero;
