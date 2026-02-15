"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "@/common/text/AnimatedText";
import CTA from "../cta/Cta";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What is Zhap and how does it work?",
    a: "Zhap is a performance-based content distribution platform where Brands get organic reach at scale, creators get paid for the content they create—tracked transparently, paid fairly.",
  },
  {
    q: "How do creators make money on Zhap?",
    a: "Join campaigns, create or clip content, post to your accounts, and earn money for every verified view your content gets. Instant UPI payouts—simple & transparent.",
  },
  {
    q: "Who can join as a creator or clipper?",
    a: "Anyone! Video editors, content creators, clippers, side hustlers, beginners, or people like you!",
  },
  {
    q: "Do I need a large following to join?",
    a: "Nope! Your follower count doesn't matter at all. We pay you based on views—so whether you've got 20 followers or 200K, you earn the same rates. Everyone starts equal.",
  },

  {
    q: "Is Zhap Free to Join?",
    a: "Absolutely! Zhap is free to join. No membership fees, no upfront costs. We only make money when you do.",
  },
  //   {
  //     q: "Can I do this part-time?",
  //     a: "Yes. Most creators work 5-10 hours/week and earn ₹8K-15K/week. Scale up whenever you want.",
  //   },

  //   {
  //     q: "Can I join if I'm just starting out?",
  //     a: "Absolutely. 40% of our top earners had zero content experience when they joined.",
  //   },
  {
    q: "How much can I realistically earn?",
    a: " Creators typically earn ₹40k – ₹60k for every 1 million views generated, depending on performance and the campaign. The more you create the more you earn!",
  },
  {
    q: "How many campaigns can I join?",
    a: "Unlimited! Join as many as you want simultaneously. Most active creators work on multiple campaigns at once to maximize earnings.",
  },
  {
    q: "What type of campaigns are available on Zhap?",
    a: "Campaigns from D2C Brands, Startups, Podcasts, Streamers, YouTubers, Local Businesses and many more.",
  },
  {
    q: "Why should I join the waitlist early?",
    a: "Early creators get priority access, higher CPM campaigns, and first access to top campaigns when we launch.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const faqItemsRef = useRef<HTMLDivElement[]>([]);
  const faqContainerRef = useRef<HTMLDivElement>(null);

  // Reveal animation for FAQ items
  useEffect(() => {
    if (faqItemsRef.current.length > 0) {
      gsap.fromTo(
        faqItemsRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqContainerRef.current,
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none play reverse",
          },
        },
      );
    }
  }, []);


  const toggle = (i: number) => {
    if (open === i) {
      gsap.to(contentRefs.current[i], {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
      setOpen(null);
    } else {
      if (open !== null) {
        gsap.to(contentRefs.current[open], {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }

      gsap.to(contentRefs.current[i], {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      setOpen(i);
    }
  };

  return (
    <div className="w-full  flex flex-col space-y-[10%] items-center py-4 pb-[12%] px-6 md:px-0">
      <section className="relative  w-[98%] md:w-[60%] mx-auto    text-white">
        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center">
          <AnimatedText>
            <p className="mb-4 text-xs  tracking-widest text-neutral-400">
              FREQUENTLY ASKED QUESTIONS
            </p>
          </AnimatedText>

          <AnimatedText>
            <h2 className="mb-10 md:mb-20 text-3xl text-center font-semibold  md:text-5xl leading-tight">
              Curious about <span className="text-green-400">ZHAP</span>?
              <br />
              We got you covered
            </h2>
          </AnimatedText>
        </div>

        {/* FAQ List */}
        <div ref={faqContainerRef} className="divide-y divide-white/10">
          {faqs.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) faqItemsRef.current[i] = el;
              }}
              className="py-4 md:py-8"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center cursor-pointer justify-between text-left"
              >
                <span className="text-lg md:text-2xl font-medium text-white">
                  {item.q}
                </span>

                {/* Chevron */}
                <span
                  className={`ml-6 inline-block transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                >
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                    <path
                      d="M1 1L9 9L17 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                ref={(el) => {
                  if (el) contentRefs.current[i] = el;
                }}
                className="h-0 overflow-hidden opacity-0"
              >
                <p className="mt-6 md:max-w-3xl text-sm md:text-xl leading-relaxed text-neutral-400">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" w-full md:w-[70%] text-center py-16 max-sm:py-[45%] md:p-16  flex flex-col items-center justify-center">
        <AnimatedText>
          <p className=" w-full text-xl leading-relaxed text-white/80 md:text-4xl">
            Every clip you create, Every audience you reach, no matter how small
            — gets you <span className="text-green-400">paid</span>.
          </p>
        </AnimatedText>

        {/* <CTA/> */}
      </section>
    </div>
  );
}
