"use client";

import { useRef } from "react";
import WaitlistForm from "./WaitlistForm";

export default function CTA() {
  const dialogRef = useRef<HTMLDialogElement>(null);



  const openDialog = () => {
   
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
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
          w-[90%] md:w-[30vw] h-[70vh] md:h-[75vh]
          px-1 md:px-8
        "
      >
        <div className="p-4 py-8 md:px-4 ">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Get Early Access</h3>
            <p className="mt-2 text-lg text-neutral-400">
              Join, Clip, <span className="text-green-400">Earn</span> - It's that simple
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
