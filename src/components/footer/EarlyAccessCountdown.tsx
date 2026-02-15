"use client";

import { useEffect, useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { CountdownItem } from "./CountdownItem";
import CTA from "../cta/Cta";
import { EARLY_ACCESS_TARGET_DATE } from "@/lib/utils";

export default function EarlyAccessCountdown() {
  const [mounted, setMounted] = useState(false);

  // Only render after client mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  const { days, hours, minutes, seconds } = useCountdown(EARLY_ACCESS_TARGET_DATE);

  if (!mounted) {
    return null; // prevents SSR mismatch
  }

  return (
    <section className="relative space-y-4 md:space-y-6 mx-auto flex max-w-3xl flex-col items-center justify-center px-6 text-center text-white">
      <div className="space-y-2 max-sm:px-6">
        <h1
          className="text-4xl font-semibold md:text-5xl bg-linear-to-br
  from-white
  via-white/80
  to-white/20
  bg-clip-text
  text-transparent"
        >
          Join early access
        </h1>

        <p className=" max-w-xl text-sm md:text-lg text-neutral-400">
          Be amongst the first to experience ZHAP. Join the waitlist and get
          notified when we launch.
        </p>
      </div>

      {/* <div className="mt-8 flex w-full max-w-md items-center gap-2 rounded-full bg-neutral-900 p-2">
        <input
          type="email"
          placeholder="Email"
          className="flex-1 bg-transparent px-4 text-sm text-white placeholder-neutral-500 focus:outline-none"
        />
        <button className="rounded-full bg-lime-400 px-5 py-2 text-sm font-medium text-black hover:bg-lime-300 transition">
          Join waitlist
        </button>
      </div> */}

      <div className="space-y-6 mt-4">
        <div className=" flex gap-4 md:gap-5 items-center">
          <CountdownItem value={days} label="Days" />
          <span className="text-2xl text-zinc-800 md:text-3xl">|</span>
          <CountdownItem value={hours} label="Hours" />
          <span className="text-2xl text-zinc-800 md:text-3xl">|</span>
          <CountdownItem value={minutes} label="Minutes" />
          <span className="text-2xl text-zinc-800 md:text-3xl">|</span>
          <CountdownItem value={seconds} label="Seconds" />
        </div>

        <p className=" text-[10px] uppercase tracking-widest text-neutral-500">
          Left until Early Access Closes
        </p>
      </div>
      <div className="space-y-4 mt-4">
        <CTA />

        {/* <p className="">
          Join a community of 1287+ Creators across India
        </p> */}

        {/* <p className=" text-xs text-neutral-400">
        Join 300+ Creators on the waitlist
      </p> */}
      </div>
    </section>
  );
}
