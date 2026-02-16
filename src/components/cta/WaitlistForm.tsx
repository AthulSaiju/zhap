"use client";

import { useState } from "react";
import { STATES, LANGUAGES } from "@/lib/utils";
import Image from "next/image";

export default function WaitlistForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    state: "",
    language: "",
    phone: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // ✅ Works for both input and select
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          state: form.state,
          language: form.language,
          phone: form.phone,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // ✅ Success State
  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center space-y-4 py-2">
        {/* Success Icon */}
        <div className="relative w-[80%] md:h-[25vh] h-[20vh]  flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
                            <Image
                              src="/form-success.png"
                              alt="Hero background"
                              fill
                              className="object-cover"
                            />
                          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">You're in!</h3>
          <p className="text-green-300 font-medium">
            Welcome to the early crew 🚀
          </p>
        </div>

        {/* Description */}
        <p className="md:text-lg text-base text-neutral-400 max-w-sm">
          We’ll notify you as soon as zhap goes live. You’re officially part of
          the first wave.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-white/10" />

        {/* Close Button */}
        {/* <button
        onClick={() => setStatus("idle")}
        className="
          text-xs
          uppercase
          tracking-widest
          text-neutral-500
          hover:text-white
          transition
        "
      >
        Close
      </button> */}
      </div>



    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <input
        name="name"
        required
        placeholder="Name"
        value={form.name}
        autoFocus={false}
        onChange={handleChange}
        className="w-full rounded-3xl bg-neutral-900 px-4 py-3 text-sm
        text-white placeholder-neutral-500
        focus:outline-none focus:ring-1 focus:ring-white/20"
      />

      {/* Email */}
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        value={form.email}
        autoFocus={false}
        onChange={handleChange}
        className="w-full rounded-3xl bg-neutral-900 px-4 py-3 text-sm
        text-white placeholder-neutral-500
        focus:outline-none focus:ring-1 focus:ring-white/20"
      />

      {/* State Dropdown */}
      <div className="relative w-full">
        <select
          name="state"
          required
          value={form.state}
          autoFocus={false}
          onChange={handleChange}
          className="w-full appearance-none rounded-3xl bg-neutral-900 px-4 pr-10 py-3 text-sm
    text-white focus:outline-none focus:ring-1 focus:ring-white/20"
        >
          <option value="" disabled>
            State
          </option>

          {STATES.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        {/* Chevron */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/60">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.937a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Language Dropdown */}
      <div className="relative w-full">
        <select
          name="language"
          required
          value={form.language}
          autoFocus={false}
          onChange={handleChange}
          className="w-full appearance-none rounded-3xl bg-neutral-900  px-4 py-3 text-sm 
  text-white focus:outline-none focus:ring-1 focus:ring-white/20"
        >
          <option value="" disabled>
            Language
          </option>

          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/60">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.937a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Phone */}
      <input
        name="phone"
        type="tel"
        placeholder="Phone (optional)"
        value={form.phone}
        autoFocus={false}
        onChange={handleChange}
        className="w-full rounded-3xl bg-neutral-900 px-4 py-3 text-sm
        text-white placeholder-neutral-500
        focus:outline-none focus:ring-1 focus:ring-white/20"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="
          mt-4 w-full rounded-3xl
          bg-green-300 py-3 text-sm font-semibold
          text-black transition
          hover:bg-neutral-200
          disabled:opacity-60
        "
      >
        {status === "loading" ? (
          <div className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : (
          "Join"
        )}
      </button>

      {/* Error */}
      {status === "error" && (
        <p className="text-center text-xs text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
