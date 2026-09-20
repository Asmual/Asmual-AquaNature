"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fish, Leaf, Layers, Sparkles } from "lucide-react";

export default function FeaturedCategories() {
  const categories = [
    {
      id: "betta",
      name: "Betta / Fighter",
      badge: "10+ Varieties",
      desc: "Alien, Dumbo, Red Dragon & Koi",
      image: "/images/Fish/Fighter/Alien Betta Fish.jpg",
      href: "#betta",
      icon: Fish,
    },
    {
      id: "guppy",
      name: "Pureline Guppies",
      badge: "Champion Strains",
      desc: "24k Gold, Albino Blue Topaz",
      image: "/images/Fish/Guppy/24k Gold.jpg",
      href: "#guppy",
      icon: Fish,
    },
    {
      id: "marine",
      name: "Marine & Seawater",
      badge: "Reef Safe",
      desc: "Nemo Clownfish, Blue Tangs",
      image: "/images/Fish/SeaWater Fish/Nemo FIsh.jpg",
      href: "#marine",
      icon: Fish,
    },
    {
      id: "freshwater",
      name: "Freshwater & Mix",
      badge: "Community",
      desc: "Discus, Neon Tetras & Mollies",
      image: "/images/Fish/Mix fish/Neon Tetra.jpg",
      href: "#freshwater",
      icon: Layers,
    },
    {
      id: "indoor-plants",
      name: "Indoor Foliage",
      badge: "Air Purifier",
      desc: "Monstera, Peace Lily, Snake Plants",
      image: "/images/Plants/Indoor Plants/Monstera.jpg",
      href: "#plants",
      icon: Leaf,
    },
    {
      id: "bonsai",
      name: "Living Bonsai Art",
      badge: "Ancient Craft",
      desc: "Dwarf Ficus, China Bot & Trees",
      image: "/images/Plants/Bonsai Plant/B.jpg",
      href: "#bonsai",
      icon: Leaf,
    },
    {
      id: "flowers",
      name: "Water Lilies & Bloom",
      badge: "Aquatic Flora",
      desc: "Rare Water Lilies & Rain Lilies",
      image: "/images/Plants/Flowers Plant/Water Lily.jpg",
      href: "#flowers",
      icon: Sparkles,
    },
  ];

  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="categories" className="w-full py-12 sm:py-16 bg-surface border-b border-border scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold uppercase tracking-widest mb-2">
              <Layers className="w-3.5 h-3.5 text-accent" />
              <span>Featured Collections</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
              Explore by Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
            Hover over each collection to discover hand-raised pureline fish, aquatic greenery, and sculptured bonsai art.
          </p>
        </div>

        {/* 7 Circular Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeCategory === idx;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                onMouseEnter={() => setActiveCategory(idx)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`group relative flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-white border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                  isActive ? "border-accent ring-2 ring-accent/30" : "border-border hover:border-accent"
                }`}
              >
                {/* Category Image Circle */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden border-2 border-border group-hover:border-accent p-0.5 shadow-sm shrink-0 bg-surface">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 80px, 96px"
                    className="object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Badge */}
                <div className="mt-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface border border-border text-[10px] font-semibold text-primary group-hover:bg-accent-soft group-hover:text-primary transition-colors">
                  <Icon className="w-2.5 h-2.5 text-accent" />
                  <span>{cat.badge}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xs sm:text-sm text-foreground mt-1.5 group-hover:text-primary transition-colors leading-tight">
                  {cat.name}
                </h3>

                {/* Description */}
                <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-snug">
                  {cat.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
