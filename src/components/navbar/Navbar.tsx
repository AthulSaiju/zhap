"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Navbar() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownInnerRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<GSAPTimeline | null>(null);

  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      if (!navRef.current || !dropdownRef.current || !dropdownInnerRef.current)
        return;

      const nav = navRef.current;
      const dropdown = dropdownRef.current;
      const inner = dropdownInnerRef.current;

      const tl = gsap.timeline({ paused: true });

      tl.to(nav, {
        width: "80%",
        duration: 0.6,
        ease: "power4.inOut",
      })
        .to(
          dropdown,
          {
            height: "auto",
            duration: 0.4,
            ease: "power3.inOut",
          },
          "-=0.2",
        )
        .to(
          inner.children,
          {
            // This targets the 3 columns to stagger them in
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2",
        );

      tlRef.current = tl;
    },
    { scope: containerRef },
  );

  const toggleMenu = () => {
    if (!tlRef.current) return;
    if (open) {
      tlRef.current.reverse();
    } else {
      tlRef.current.play();
    }
    setOpen(!open);
  };

  return (
    <div
      ref={containerRef}
      className="w-full  md:flex flex-col items-center justify-center pt-2 z-50 absolute md:fixed top-0 left-0 "
    >
      {/* <div className="w-full h-px bg-white absolute left-0 z-10 top-10"></div> */}
      <nav
        ref={navRef}
        className="
         w-[90%] md:w-[50%] mx-auto
           border border-white/10 rounded-sm
          
          overflow-hidden
          
          will-change-[width,height]
        "
      >
        {/* ───── TOP BAR ───── */}
        <div className="flex items-center justify-between px-4 py-2 text-white relative z-20 bg-[#353030] backdrop-blur-lg">
          <button
            onClick={toggleMenu}
            className="group flex  items-center gap-2 px-4 py-2 cursor-pointer rounded-lg hover:bg-white/5 transition-colors"
          >
            <div className="relative w-6 h-6">
              {/* Top line */}
              <span
                className={`
      absolute left-0 top-1/2
      w-6 h-px bg-white
      transition-transform duration-300 ease-out
      ${open ? "rotate-45" : "-translate-y-2"}
    `}
              />

              {/* Middle line */}
              <span
                className={`
      absolute left-0 top-1/2
      w-6 h-px bg-white
      transition-opacity duration-200
      ${open ? "opacity-0" : ""}
    `}
              />

              {/* Bottom line */}
              <span
                className={`
      absolute left-0 top-1/2
      w-6 h-px bg-white
      transition-transform duration-300 ease-out
      ${open ? "-rotate-45" : "translate-y-2"}
    `}
              />
            </div>

            <span className="hidden md:block text-sm font-medium ml-1">Menu</span>
          </button>

          <div className=" text-2xl font-bold tracking-widest uppercase">
            zhap
          </div>

          <button className="px-6 py-2 rounded-full bg-white text-black text-sm font-bold hover:scale-105 active:scale-95 transition-transform">
            Join
          </button>
        </div>

        {/* ───── DROPDOWN CONTENT ───── */}
        <div ref={dropdownRef} className="h-0 overflow-hidden bg-[#0a0a0a]">
          <div
            ref={dropdownInnerRef}
            className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {/* ── COL 1: PRODUCTS CARD ── */}
            <div className="bg-[#1c1c1c] rounded-3xl p-8 hidden  md:flex flex-col justify-between min-h-[400px] opacity-0 translate-y-4">
              <div>
                <h3 className="text-[#888] text-xs font-semibold tracking-wider mb-6">
                  OUR PRODUCTS
                </h3>
                <ul className="space-y-6">
                  <li className="text-xl text-white font-medium hover:text-gray-300 cursor-pointer transition-colors">
                    The Vault
                  </li>
                  <li className="flex items-center gap-3 text-xl text-white font-medium hover:text-gray-300 cursor-pointer transition-colors">
                    Page Transition Course
                    <span className="bg-[#5b21b6] text-[#d8b4fe] text-[10px] font-bold px-1.5 py-0.5 rounded">
                      WIP
                    </span>
                  </li>
                  <li className="text-xl text-white font-medium hover:text-gray-300 cursor-pointer transition-colors">
                    Icon Library
                  </li>
                  <li className="text-xl text-white font-medium hover:text-gray-300 cursor-pointer transition-colors">
                    Community
                  </li>
                </ul>
              </div>
              <div className="mt-8 flex items-center gap-3 text-xl text-white font-medium">
                Easings
                <span className="bg-[#333] text-[#888] text-[10px] font-bold px-1.5 py-0.5 rounded">
                  SOON
                </span>
              </div>
            </div>

            {/* ── COL 2: EXPLORE & SOCIALS ── */}
            <div className="flex flex-col justify-between p-6 opacity-0 translate-y-4">
              <div>
                <h3 className="text-[#888] text-xs font-semibold tracking-wider mb-6">
                  EXPLORE
                </h3>
                <ul className="space-y-6">
                  <li className="text-xl text-white font-medium hover:text-gray-300 cursor-pointer transition-colors">
                    Osmo Showcase
                  </li>
                  <li className="text-xl text-white font-medium hover:text-gray-300 cursor-pointer transition-colors">
                    Updates
                  </li>
                  <li className="text-xl text-white font-medium hover:text-gray-300 cursor-pointer transition-colors">
                    Pricing
                  </li>
                </ul>
              </div>

              {/* <div className="flex gap-3 mt-12">
                {[<Linkedin key="l" size={20} />, <Instagram key="i" size={20} />, <Twitter key="t" size={20} />].map((icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-xl bg-[#1c1c1c] text-white flex items-center justify-center hover:bg-[#333] transition-colors">
                    {icon}
                  </button>
                ))}
              </div> */}
            </div>

            {/* ── COL 3: MILESTONE CARD ── */}
            <div className="bg-[#1c1c1c] rounded-3xl pt-8 flex flex-col items-center text-center relative overflow-hidden min-h-[400px] opacity-0 translate-y-4">
              <div className="relative z-10 w-full flex flex-col items-center h-full">
                <div className="flex items-center gap-2 mb-12">
                  <span className="text-[#888] text-xs font-bold uppercase">
                    Featured
                  </span>
                  <span className="bg-[#00f510] text-[#000000] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    MILESTONE
                  </span>
                </div>

                <h2 className="text-3xl text-white font-medium leading-tight mb-8">
                  We hit 300+
                  <br />
                  Creators!
                </h2>

                {/* <button className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mb-auto">
                  Join them
                </button>

                <div className="mt-12 flex -space-x-4 bg-red-500">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-14 h-14 rounded-full border-4 border-[#1c1c1c] overflow-hidden bg-gray-600"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?img=${i + 10}`}
                        alt="avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div> */}

                <div className=" relative h-[100%]  w-full">
                  <div className="w-full flex items-center justify-center">
                    <Image
                      src="/clippers-blue.jpeg"
                      alt="Hero background"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="bg-[#A1FF62] text-black w-[50%] mt-1">
        Early Access
      </div> */}
    </div>
  );
}
