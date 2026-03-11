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
    "idle" | "loading" | "success"
  >("idle");

  const [toast, setToast] = useState<string | null>(null);

  // 🔥 Show custom toast
  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ Custom validation
  const validateForm = () => {
    if (!form.name.trim()) {
      showToast("Please enter your name.");
      return false;
    }

    if (!form.email.trim()) {
      showToast("Please enter your email.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      showToast("Please enter a valid email address.");
      return false;
    }

    if (!form.state) {
      showToast("Please select your state.");
      return false;
    }

    if (!form.language) {
      showToast("Please select your language.");
      return false;
    }

    if (form.phone) {
      const phoneRegex = /^\d{10}$/;

      if (!phoneRegex.test(form.phone)) {
        showToast("Phone number must be exactly 10 digits.");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        showToast("Something went wrong. Please try again.");
        setStatus("idle");
      }
    } catch {
      showToast("Network error. Please try again.");
      setStatus("idle");
    }
  };

  // ✅ Success State
  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center space-y-4 py-2">
        <div className="relative w-[80%] md:h-[25vh] h-[20vh] flex items-center justify-center">
          <Image
            src="/form-success.png"
            alt="Success"
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold text-white">You're in!</h3>
        <p className="text-green-300 font-medium">
          Welcome to the early crew 🚀
        </p>
        <p className="md:text-lg text-base text-neutral-400 max-w-sm">
          Early access is rolling out now, you'll hear from us soon.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* 🔥 Custom Toast */}
      {toast && (
        <div
          className="
          fixed top-6 left-1/2 -translate-x-1/2
          bg-red-400 border border-red-500/30
          text-black text-sm
          px-6 py-2 rounded-3xl
          backdrop-blur-md
          animate-[fadeIn_0.3s_ease]
          shadow-lg
        "
        >
          {toast}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name */}
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-3xl bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-white/20"
        />

        {/* Email */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-3xl bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-white/20"
        />

        {/* State */}
        <div className="relative w-full">
        <select
          name="state"
          value={form.state}
          onChange={handleChange}
          className="w-full appearance-none rounded-3xl bg-neutral-900 px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20"
        >
          <option value="">State</option>
          {STATES.map((state) => (
            <option key={state} value={state}>
              {state}
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

        {/* Language */}
                <div className="relative w-full">

        <select
          name="language"
          value={form.language}
          onChange={handleChange}
          className="w-full appearance-none rounded-3xl bg-neutral-900 px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20"
        >
          <option value="">Language</option>
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
          maxLength={10}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setForm((prev) => ({ ...prev, phone: value }));
          }}
          className="w-full rounded-3xl bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-white/20"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-4 w-full rounded-3xl cursor-pointer bg-green-300 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 disabled:opacity-60"
        >
          {status === "loading" ? "Submitting..." : "Join"}
        </button>
      </form>
    </div>
  );
}