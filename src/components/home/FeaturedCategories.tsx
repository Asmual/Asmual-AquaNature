"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fish, Leaf, Layers, Sparkles } from "lucide-react";
import { CATEGORIES_META } from "@/data/categories";

// Item summaries tailored for each category to describe the specimens included
const categorySummaryMap: Record<string, { itemsList: string; highlight: string }> = {
  indoor: {
    itemsList: "মনস্টেরা, পিস লিলি, মানিপ্ল্যান্ট, অ্যাগলোনিমা, ক্যালাথিয়া, জেড প্ল্যান্ট, ডাম্ব ক্যান, কোলিয়াস ও লাকি ব্যাম্বুসহ বাতাস বিশুদ্ধকারী প্রিমিয়াম ইনডোর কালেকশন।",
    highlight: "Air Purifying Foliage",
  },
  bonsai: {
    itemsList: "ক্ষুদ্রাকৃতির চাইনিজ বট, ফাইকাস, জেড বনসাই, ফ্লাওয়ারিং গাছ, ড্রয়ার্ফ স্পেসিমেন ও গ্লেজড সিরামিক পটসহ জীবন্ত ভাস্কর্য বনসাই আর্ট।",
    highlight: "Living Bonsai Art",
  },
  flowers: {
    itemsList: "রেয়ার ট্রপিক্যাল ওয়াটার লিলি (শালুক), রেইন লিলি, পদ্মফুল, সুবাসিত গোলাপ ও বিভিন্ন মৌসুমি ফোটা বাহারি ফুলের বিশাল সমাহার।",
    highlight: "Water Lilies & Blooms",
  },
  guppy: {
    itemsList: "২৪কে ফুল গোল্ড, অ্যালবিনো ব্লু টোপাজ, মস্কো ব্লু, ডাম্বো ইয়ার রেড টেইল ও শো-গ্রেড হাই-ডরসেল ডেল্টা স্ট্রেইন পিওরলাইন গাপ্পি।",
    highlight: "Pureline Delta Strains",
  },
  fighter: {
    itemsList: "এলিয়েন কপার বেটা, হাফমুন, বিগ ডাম্বো ইয়ার, রেড ড্রাগন, ব্লু রিম ও শো-গ্রেড ভাইব্রেন্ট গ্যালাক্সি কোই ফাইটার ফিশ স্পেসিমেন।",
    highlight: "Halfmoons & Galaxy Bettas",
  },
  marine: {
    itemsList: "নেমো ক্লাউনফিশ, ব্লু ট্যাং ও কোরাল রিফ অ্যাকোয়ারিয়ামের উপযোগী কোয়ারেন্টাইন করা স্বাস্থ্যকর রঙিন সামুদ্রিক লবণাক্ত পানির মাছ।",
    highlight: "Reef-Safe Seawater Fish",
  },
};

export default function FeaturedCategories() {
  // Category Icon Resolver
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
              প্রতিটি ক্যাটাগরি কার্ডে ক্লিক করে ভেতরে থাকা সমস্ত আকর্ষণীয় স্পেসিমেন ও পরিচর্যার বিস্তারিত তথ্য দেখুন।
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-primary/80 bg-white px-3.5 py-1.5 rounded-full border border-border shadow-xs">
            <span>৬টি বিশেষায়িত ক্যাটাগরি</span>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>
        </div>

        {/* 6 High-Impact Full-Image Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group relative flex flex-col justify-end min-h-[340px] sm:min-h-[380px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-border/80 hover:border-accent transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 bg-primary-dark overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 3}
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle top shade for badges visibility */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                  {/* Deep Dark Gradient Overlay for the bottom half */}
                  <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/95 via-black/80 to-transparent" />
                </div>

                {/* Top Badge (Left): Category Specialization */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-accent/90 backdrop-blur-md text-primary shadow-sm">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    <span>{cat.badge}</span>
                  </span>
                </div>

                {/* Top Badge (Right): Small Count Indicator */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-accent border border-white/20 shadow-sm group-hover:border-accent group-hover:bg-black/80 transition-all">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span>{cat.itemCount} টি কার্ড আছে</span>
                  </span>
                </div>

                {/* Bottom Content Area: Title & Summary Paragraph */}
                <div className="relative z-10 p-5 sm:p-6 space-y-2">
                  {/* Title */}
                  <div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug group-hover:text-accent transition-colors duration-200">
                      {cat.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-accent/90 mt-0.5">
                      {cat.bengaliName}
                    </p>
                  </div>

                  {/* Paragraph with items summary */}
                  <p className="text-xs sm:text-[13px] text-white/85 line-clamp-3 leading-relaxed">
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
