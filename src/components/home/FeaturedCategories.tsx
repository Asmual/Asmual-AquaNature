"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fish, Leaf, Layers, Sparkles } from "lucide-react";
import { CATEGORIES_META } from "@/data/categories";

// Concise English summaries tailored for compact cards
const categorySummaryMap: Record<string, { itemsList: string; highlight: string }> = {
  indoor: {
    itemsList: "Monstera, Peace Lily, Aglaonema, Calathea & air-purifying foliage.",
    highlight: "Air Purifying",
  },
  bonsai: {
    itemsList: "Miniature Ficus, Chinese Banyan, Jade & glazed ceramic living art.",
    highlight: "Ancient Bonsai",
  },
  flowers: {
    itemsList: "Tropical Water Lilies, Sacred Lotus, Arabian Jasmines & garden blooms.",
    highlight: "Water Lilies",
  },
  guppy: {
    itemsList: "24K Full Gold, Albino Blue Topaz & pureline delta strains.",
    highlight: "Pureline Guppy",
  },
  fighter: {
    itemsList: "Halfmoons, Alien Copper, Dumbo Ears & Galaxy Koi bettas.",
    highlight: "Show Bettas",
  },
  marine: {
    itemsList: "Percula Clownfish, Blue Tang, Yellow Tang & saltwater reef species.",
    highlight: "Reef Safe",
  },
};

export default function FeaturedCategories() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "indoor":
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
    <section id="categories" className="w-full py-10 sm:py-12 bg-surface/50 border-b border-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold uppercase tracking-widest mb-1.5">
              <Layers className="w-3.5 h-3.5 text-accent" />
              <span>Flora &amp; Fauna Departments</span>
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-primary tracking-tight">
              Explore By Category
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 max-w-xl">
              Select any specialized department to view all cataloged species and care guides.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-primary/80 bg-white px-3 py-1 rounded-full border border-border shadow-xs">
            <span>6 Departments</span>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>
        </div>

        {/* 4-Column Compact Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES_META.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.id);
            const summary = categorySummaryMap[cat.id] || {
              itemsList: cat.description,
              highlight: cat.badge,
            };

            return (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="group relative flex flex-col justify-end min-h-[155px] sm:min-h-[170px] lg:min-h-[180px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-border hover:border-accent transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 bg-primary-dark overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={idx < 4}
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle top shade for badges */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                  {/* Deep Dark Gradient Overlay for the bottom text */}
                  <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-black/95 via-black/75 to-transparent" />
                </div>

                {/* Top Badge (Left): Category Specialization */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-accent/90 backdrop-blur-md text-primary shadow-xs">
                    <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                    <span>{cat.badge}</span>
                  </span>
                </div>

                {/* Top Badge (Right): Count Indicator */}
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10">
                  <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-black/60 backdrop-blur-md text-accent border border-white/20 shadow-xs">
                    <span>{cat.itemCount}</span>
                  </span>
                </div>

                {/* Bottom Content Area: Title & Summary */}
                <div className="relative z-10 p-2.5 sm:p-3.5 space-y-0.5 sm:space-y-1">
                  <h3 className="font-heading font-extrabold text-xs sm:text-base text-white tracking-tight leading-snug group-hover:text-accent transition-colors duration-200">
                    {cat.name}
                  </h3>

                  <p className="text-[10px] sm:text-[11px] text-white/80 line-clamp-1 sm:line-clamp-2 leading-tight sm:leading-relaxed">
                    {summary.itemsList}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
