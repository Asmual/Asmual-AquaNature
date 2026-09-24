import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className,
  showText = true,
  size = "md",
}) => {
  const sizeMap = {
    sm: { img: 34, title: "text-sm sm:text-lg", sub: "text-[8px] sm:text-[9px]" },
    md: { img: 42, title: "text-base sm:text-xl lg:text-2xl", sub: "text-[9px] sm:text-[10px]" },
    lg: { img: 52, title: "text-lg sm:text-2xl lg:text-3xl", sub: "text-[10px] sm:text-xs" },
  };

  const current = sizeMap[size];

  return (
    <Link href="/" className={cn("flex items-center gap-2 sm:gap-3 group min-w-0 shrink", className)}>
      <div
        className={cn(
          "relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105",
          size === "sm" && "w-8 h-8 sm:w-9 sm:h-9",
          size === "md" && "w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12",
          size === "lg" && "w-11 h-11 sm:w-14 sm:h-14"
        )}
      >
        <Image
          src="/images/main-logo.png"
          alt="Asmual AquaNature Logo"
          width={current.img}
          height={current.img}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col min-w-0">
          <span
            className={cn(
              "font-heading font-extrabold text-primary tracking-tight leading-none group-hover:text-primary-dark transition-colors truncate",
              current.title
            )}
          >
            Asmual <span className="text-accent">AquaNature</span>
          </span>
          <span
            className={cn(
              "font-semibold text-muted-foreground tracking-wider uppercase mt-0.5 truncate hidden xs:inline-block",
              current.sub
            )}
          >
            Aquatic &amp; Nature Studio
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
