"use client";

import { useRef } from "react";
import WaitlistForm from "./WaitlistForm";

export default function CTA() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const lockScroll = () => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };

  const openDialog = () => {
    lockScroll();
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    unlockScroll();
    dialogRef.current?.close();
  };

  return (
    <>
      {/* CTA Button */}
      <button
        onClick={openDialog}
        className="
relative
px-8 py-3
rounded-full
text-black
text-sm font-semibold
tracking-[0.02em]
cursor-pointer

bg-gradient-to-b
from-[#9bf7c2]
to-[#6ee7b7]

border border-white/10

shadow-[0_20px_60px_rgba(110,231,183,0.35)]

transition-all duration-300 ease-out
hover:-translate-y-1
active:scale-[0.98]

before:absolute
before:inset-0
before:rounded-full
before:bg-white/10
before:opacity-0
before:transition-opacity
hover:before:opacity-100
"
      >
        Join Early Access
      </button>

      {/* Dialog */}
      <dialog
        ref={dialogRef}
        onClose={unlockScroll}
        onClick={(e) => {
          // Close when clicking backdrop
          if (e.target === e.currentTarget) closeDialog();
        }}
        className="
          fixed inset-0 m-auto
          backdrop:bg-neutral-400/10
          backdrop:backdrop-blur-sm
          rounded-2xl
          bg-black
          text-white
          w-[30vw] h-[80vh]
          px-4
        "
      >
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Join Early Access</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Earn from day one. No sponsors. No gatekeeping.
            </p>
          </div>

          <WaitlistForm />

          {/* Close */}
          <button
            onClick={closeDialog}
            className="mt-4 w-full text-xs cursor-pointer text-neutral-500 hover:text-neutral-300"
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}
