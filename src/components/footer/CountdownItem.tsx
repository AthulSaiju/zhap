"use client";

type CountdownVariant = "default" | "sm";

export function CountdownItem({
  value,
  label,
  variant = "default",
}: {
  value: number;
  label: string;
  variant?: CountdownVariant;
}) {
  const isSmall = variant === "sm";

  return (
    <div
      className={`
        flex flex-col items-center justify-center
        rounded-xl bg-background
        shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
        ${isSmall 
          ? "w-[60px] md:w-[70px] p-3" 
          : "w-[70px] md:w-[120px] p-4"}
      `}
    >
      <span
        className={`
          font-semibold
          bg-[linear-gradient(24deg,rgb(109,255,194)_0%,rgba(255,255,247,0.34)_100%)]
          bg-clip-text text-transparent
          ${isSmall 
            ? "text-2xl md:text-2xl" 
            : "text-3xl md:text-6xl"}
        `}
      >
        {value.toString().padStart(2, "0")}
      </span>

      <span
        className={`
          uppercase text-neutral-300
          ${isSmall ? "mt-0.5 text-[10px]" : "mt-1 text-[10px]"}
        `}
      >
        {label}
      </span>
    </div>
  );
}
