"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fish, Leaf, Layers, Sparkles, ArrowRight } from "lucide-react";
import { CATEGORIES_META } from "@/data/categories";

export default function FeaturedCategories() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  // Category Icon Resolver
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "indoor":
        return Leaf;
      case "bonsai":
        return Leaf;
      case "flowers":
        return Sparkles;
      case "guppy":
      case "fighter":
      case "marine":
      default:
        return Fish;
    }
  };

  return (
    <section id="categories" className="w-full py-12 sm:py-16 bg-surface border-b border-border scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold uppercase tracking-widest mb-2">
              <Layers className="w-3.5 h-3.5 text-accent" />
              <span>Core Specializations</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
              Curated Botanical &amp; Aquatic Categories
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
              Select any collection to view every specimen on a single dedicated showcase page with comprehensive care and maintenance details.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-primary/80 bg-white px-3 py-1.5 rounded-full border border-border">
            <span>6 Specialized Collections</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </div>
        </div>

        {/* 6 Balanced Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4.5">
          {CATEGORIES_META.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.id);
            const isActive = activeCategory === idx;

            return (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                onMouseEnter={() => setActiveCategory(idx)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`group relative flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl bg-white border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  isActive ? "border-accent ring-2 ring-accent/30" : "border-border hover:border-accent"
                }`}
              >
                {/* Category Image Circle */}
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden border-2 border-border group-hover:border-accent p-0.5 shadow-sm shrink-0 bg-surface">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 80px, 96px"
                    className="object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Badge / Count */}
                <div className="mt-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface border border-border text-[10px] font-bold text-primary group-hover:bg-accent-soft group-hover:text-primary transition-colors">
                  <Icon className="w-2.5 h-2.5 text-accent" />
                  <span>{cat.itemCount} Items</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xs sm:text-sm text-foreground mt-1.5 group-hover:text-primary transition-colors leading-tight">
                  {cat.name}
                </h3>

                {/* Bengali Subtitle / Tagline */}
                <p className="text-[10px] font-medium text-primary/80 mt-0.5">
                  {cat.bengaliName}
                </p>

                {/* Short Description */}
                <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-snug">
                  {cat.tagline}
                </p>

                {/* Hover CTA Indicator */}
                <div className="mt-2.5 pt-2 border-t border-border/50 w-full flex items-center justify-center gap-1 text-[10px] font-bold text-primary opacity-80 group-hover:opacity-100 group-hover:text-accent transition-all">
                  <span>View All {cat.itemCount}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
