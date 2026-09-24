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
    sm: { img: 38, title: "text-lg", sub: "text-[9px]" },
    md: { img: 48, title: "text-xl sm:text-2xl", sub: "text-[10px] sm:text-[11px]" },
    lg: { img: 58, title: "text-2xl sm:text-3xl", sub: "text-xs" },
  };

  const current = sizeMap[size];

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 sm:gap-3 group shrink-0", className)}>
      <div
        className={cn(
          "relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105",
          size === "sm" && "w-9 h-9",
          size === "md" && "w-11 h-11 sm:w-12 sm:h-12",
          size === "lg" && "w-14 h-14"
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
        <div className="flex flex-col">
          <span
            className={cn(
              "font-heading font-extrabold text-primary tracking-tight leading-none group-hover:text-primary-dark transition-colors",
              current.title
            )}
          >
            Asmual <span className="text-accent">AquaNature</span>
          </span>
          <span
            className={cn(
              "font-semibold text-muted-foreground tracking-wider uppercase mt-0.5",
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
