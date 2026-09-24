"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Fish,
  CheckCircle2,
} from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-primary text-white flex items-center lg:h-[calc(100vh-135px)] lg:min-h-[520px] lg:max-h-[660px] min-h-[520px] py-10 lg:py-0">
      {/* 1. HERO BACKGROUND BANNER IMAGE WITH AQUATIC OVERLAYS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/Hero-Banner.png"
          alt="Asmual AquaNature Hero Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B4A6F]/95 via-[#0B4A6F]/85 to-[#083A57]/70" />
        <div className="absolute inset-0 bg-radial-at-c from-accent/15 via-transparent to-black/40 mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Ambient Lighting Spheres */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-primary-dark/50 rounded-full blur-3xl pointer-events-none" />

      {/* 2. HERO CONTENT CONTAINER (GRID: 60% TEXT ON LEFT / 40% SHOWCASE ON RIGHT) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (60% Width on Desktop): Headline, Subtitle, CTA & Trust Badges */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span>Bangladesh&apos;s Premier Living Aquatic Sanctuary</span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.18]">
              Bring Nature&apos;s Serenity into Your Sanctuary with{" "}
              <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-6">
                Living Art
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-white/85 font-normal max-w-xl leading-relaxed">
              Hand-selected, quarantine-certified Betta fighters, prize Guppy bloodlines, rare marine species, and sculpted bonsai trees — crafted for modern homes.
            </p>

            {/* Action Buttons (Pill Shapes with High Contrast) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link
                href="#categories"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-xs sm:text-sm shadow-md hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore All Categories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-semibold text-xs sm:text-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Consult an Aquascaper</span>
                <ChevronRight className="w-4 h-4 text-accent" />
              </Link>
            </div>

            {/* Micro Trust Points */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/80">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <span>100% Live Arrival Warranty</span>
              </div>
              <span className="text-white/30 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Quarantined & Disease Free</span>
              </div>
              <span className="text-white/30 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-highlight font-bold">★ 4.9/5</span>
                <span>2,500+ Keepers</span>
              </div>
            </div>
          </div>

          {/* Right Column (40% Width on Desktop): High-End Glassmorphism Live Showcase Card */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-center">
            <div className="relative w-full max-w-sm rounded-3xl p-5 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-4 hover:border-accent/60 transition-all duration-300 group">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-[11px] font-bold">
                  <Fish className="w-3.5 h-3.5" />
                  <span>Featured Collection</span>
                </div>
                <span className="text-[11px] text-white/70 font-semibold">100% Certified</span>
              </div>

              {/* Showcase Image with Floating Zoom */}
              <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-white/20 shadow-inner bg-primary-dark">
                <Image
                  src="/images/Fish/Fighter/Alien Betta Fish.jpg"
                  alt="Alien Betta Champion Strain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div>
                    <h4 className="font-heading font-bold text-sm leading-tight">Alien Copper Betta</h4>
                    <p className="text-[11px] text-accent font-medium">Rare Pureline Import</p>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-accent text-primary">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Key Guarantee Metrics */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-center">
                <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-[10px] text-white/70 uppercase tracking-wider">Packaging</p>
                  <p className="text-xs font-bold text-white mt-0.5">Oxygen Filled</p>
                </div>
                <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-[10px] text-white/70 uppercase tracking-wider">Health</p>
                  <p className="text-xs font-bold text-accent mt-0.5">Vet Inspected</p>
                </div>
              </div>

              {/* Call to Action Inside Card */}
              <Link
                href="#categories"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-xs transition-all duration-200"
              >
                <span>Explore 6 Living Collections</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
