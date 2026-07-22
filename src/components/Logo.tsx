"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
  isDark?: boolean;
}

export default function Logo({
  className = "w-12 h-12",
  showText = true,
  textClassName = "text-2xl font-black tracking-tight",
  isDark = false,
}: LogoProps) {
  return (
    <div className="flex items-center gap-3 select-none cursor-pointer">
      <div className={`relative ${className}`}>
        <Image
          src="/logo.svg"
          alt="BrosDev Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {showText && (
        <span
          className={`${textClassName} ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Bros<span className="text-[#A90706]">Dev</span>
        </span>
      )}
    </div>
  );
}