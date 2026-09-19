"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Fish,
  Leaf,
  Layers,
} from "lucide-react";

export const Hero = () => {
  // Exact category data mapped directly to the user's project image folders
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

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-primary text-white">
      {/* 1. HERO BACKGROUND BANNER IMAGE WITH DYNAMIC FALLBACK */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero-Banner.png"
          alt="Asmual AquaNature Hero Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000"
        />

        {/* Ambient Aquatic Ocean Lighting & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B4A6F]/95 via-[#0B4A6F]/85 to-[#083A57]/70" />
        <div className="absolute inset-0 bg-radial-at-c from-accent/15 via-transparent to-black/40 mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Decorative Glow Spheres */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-primary-dark/40 rounded-full blur-3xl pointer-events-none" />

      {/* 2. HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 lg:pb-24">
        {/* Main Hero Header */}
        <div className="max-w-3xl space-y-6">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent text-xs sm:text-sm font-semibold shadow-inner">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span>Bangladesh&apos;s Premier Living Aquatic Sanctuary</span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            Bring Nature&apos;s Serenity into Your Sanctuary with{" "}
            <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-8">
              Living Art
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-white/85 font-normal max-w-2xl leading-relaxed">
            Hand-selected, quarantine-certified Betta fighters, prize Guppy bloodlines, rare marine species, and sculpted bonsai trees — crafted for modern homes.
          </p>

          {/* Action Call To Action Buttons (Pill Shapes) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#categories"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-sm sm:text-base shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore All Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-semibold text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Consult an Aquascaper</span>
              <ChevronRight className="w-4 h-4 text-accent" />
            </Link>
          </div>

          {/* Micro Trust Points */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-white/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>100% Live Arrival Warranty</span>
            </div>
            <span className="text-white/30 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Quarantined & Disease Free</span>
            </div>
            <span className="text-white/30 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-highlight font-bold">★ 4.9/5</span>
              <span>Trusted by 2,500+ Keepers</span>
            </div>
          </div>
        </div>

        {/* 3. ALL CATEGORIES SECTION WITH ROUND SHAPES, BACKGROUND IMAGES & GLOSSY GLASS EFFECT */}
        <div id="categories" className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-widest mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Featured Collections</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Explore by Category
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-md">
              Hover over each collection to explore high-definition strains, rare plants, and living flora.
            </p>
          </div>

          {/* Glassy Circular & Rounded Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  href={cat.href}
                  onMouseEnter={() => setActiveCategory(idx)}
                  className={`group relative flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border hover:border-accent hover:bg-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 ${
                    activeCategory === idx
                      ? "border-accent ring-1 ring-accent/40 bg-white/15"
                      : "border-white/20"
                  }`}
                >
                  {/* Category Image Circle (Round Shape with Zoom on Hover) */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden border-2 border-white/30 group-hover:border-accent p-0.5 shadow-md shrink-0 bg-primary-dark">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 80px, 96px"
                      className="object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                  </div>

                  {/* Glassy Tag Badge */}
                  <div className="mt-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-accent">
                    <Icon className="w-2.5 h-2.5" />
                    <span>{cat.badge}</span>
                  </div>

                  {/* Category Title */}
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-white mt-1.5 group-hover:text-accent transition-colors leading-tight">
                    {cat.name}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="text-[10px] sm:text-[11px] text-white/70 mt-1 line-clamp-2 leading-snug">
                    {cat.desc}
                  </p>

                  {/* Subtle Glow Indicator on Hover */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-accent/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
