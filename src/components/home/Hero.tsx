"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Fish,
  Leaf,
  ShieldCheck,
} from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-primary text-white flex items-center min-h-[calc(100vh-80px)] py-16 sm:py-24">
      {/* 1. HERO BACKGROUND IMAGE WITH NATURAL OVERLAYS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/Hero-Banner.png"
          alt="Asmual Aqua Nature Hero Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic dark emerald gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
        <div className="absolute inset-0 bg-radial-at-c from-accent/10 via-transparent to-black/50" />
      </div>

      {/* 2. HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-6 sm:space-y-8">
        {/* Subtle Nature Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <span>Botanical &amp; Aquatic Heritage Encyclopedia</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.18] max-w-4xl mx-auto">
          Discover the Elegance of{" "}
          <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-8">
            Aquatic &amp; Botanical
          </span>{" "}
          Life
        </h1>

        {/* Subtitle / Purpose Description */}
        <p className="text-sm sm:text-lg text-white/85 font-normal max-w-2xl mx-auto leading-relaxed">
          An open educational platform cataloging exotic freshwater fishes, vibrant marine species, air-purifying indoor flora, and ancient bonsai art — complete with scientifically verified taxonomy and habitat care protocols.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href="/category"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-sm shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Explore All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200"
          >
            <BookOpen className="w-4 h-4 text-accent" />
            <span>About Our Mission</span>
          </Link>
        </div>

        {/* Educational Highlights */}
        <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/80 border-t border-white/15 max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <Fish className="w-4 h-4 text-accent" />
            <span>Aquatic Life Taxonomy</span>
          </div>
          <span className="text-white/30 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-accent" />
            <span>Botanical Care Protocols</span>
          </div>
          <span className="text-white/30 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>100% Non-Commercial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
