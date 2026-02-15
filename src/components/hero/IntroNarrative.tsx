"use client";

import AnimatedText from "@/common/text/AnimatedText";

export default function IntroNarrative() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden px-3 max-sm:pb-[35%] md:px-6 py-[20%] md:py-[15%]">
      {/* Background vignette */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]" /> */}

      <div className="relative z-10 mx-auto w-full md:max-w-6xl text-center">
        {/* Badge */}
        {/* <div className="mb-8 flex items-center justify-center gap-2 text-xs tracking-widest text-lime-400">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-lime-400">
            ×
          </span>
          <span>INTRODUCING CLIPBASE</span>
        </div> */}

        {/* Body text */}
        <AnimatedText>
        <p className="text-xl leading-relaxed text-zinc-500 md:text-4xl">
         The future of content <span className="text-white">creators</span> isn't chasing <span className="text-white">brand deals</span> or waiting for <span className="text-white">followers</span>—it's getting <span className="text-white">paid from day one. </span> 
          Anonymous? Small account? Just starting? <span className="text-white">Doesn't matter.</span> Because the <span className="text-white">future </span> of marketing isn't ads or big influencers— <span className="text-green-300">it's you</span>.
        </p>
        </AnimatedText>

        {/* Emphasized line */}
                {/* <AnimatedText>

        <p className="mt-[30%] md:mt-[20%] text-3xl font-medium  text-white md:text-4xl">
          JOIN,  CLIP,  <span className="text-green-300">EARN</span> - It's that simple!
        </p>
        </AnimatedText> */}
      </div>
    </section>
  );
}
