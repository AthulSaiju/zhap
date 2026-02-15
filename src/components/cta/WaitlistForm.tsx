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
    <div className="flex flex-col items-center text-center space-y-6 py-8">
      
      {/* Success Icon */}
      <div className="w-16 h-16 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center">
        <span className="text-2xl text-lime-400">✓</span>
      </div>

      {/* Title */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">
          You're in.
        </h3>
        <p className="text-green-400 font-medium">
          Welcome to the early crew 🚀
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-400 max-w-sm">
        We’ll notify you as soon as zhap goes live. 
        You’re officially part of the first wave.
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
        onChange={handleChange}
        className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-sm
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
        onChange={handleChange}
        className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-sm
        text-white placeholder-neutral-500
        focus:outline-none focus:ring-1 focus:ring-white/20"
      />

      {/* State Dropdown */}
      <select
        name="state"
        required
        value={form.state}
        onChange={handleChange}
        className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-sm
  text-white focus:outline-none focus:ring-1 focus:ring-white/20"
      >
        <option value="" disabled>
          Select State
        </option>

        {STATES.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      {/* Language Dropdown */}
      <select
        name="language"
        required
        value={form.language}
        onChange={handleChange}
        className="w-full rounded-lg bg-neutral-900  px-4 py-3 text-sm 
  text-white focus:outline-none focus:ring-1 focus:ring-white/20"
      >
        <option value="" disabled>
          Select Language
        </option>

        {LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>

      {/* Phone */}
      <input
        name="phone"
        type="tel"
        placeholder="Phone (optional)"
        value={form.phone}
        onChange={handleChange}
        className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-sm
        text-white placeholder-neutral-500
        focus:outline-none focus:ring-1 focus:ring-white/20"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="
          mt-4 w-full rounded-lg
          bg-white py-3 text-sm font-medium
          text-black transition
          hover:bg-neutral-200
          disabled:opacity-60
        "
      >
        {status === "loading" ? "Joining…" : "Join Waitlist"}
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
