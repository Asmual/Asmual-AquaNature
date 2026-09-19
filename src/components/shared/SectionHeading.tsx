import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllText?: string;
  badge?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  viewAllHref,
  viewAllText = "View All",
  badge,
  className,
  centered = false,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-8",
        centered
          ? "items-center text-center"
          : "md:flex-row md:items-end justify-between",
        className
      )}
    >
      <div className={cn("space-y-1.5", centered && "max-w-2xl mx-auto")}>
        {badge && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-primary mb-2">
            {badge}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight text-primary">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-muted-foreground font-normal">
            {subtitle}
          </p>
        )}
      </div>

      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors duration-200 self-start md:self-end"
        >
          <span>{viewAllText}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
