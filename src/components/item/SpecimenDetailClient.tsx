"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft,
  ChevronLeft, 
  ChevronRight, 
  Droplets, 
  Sun, 
  Thermometer, 
  Sparkles, 
  Check, 
  Bookmark, 
  Share2, 
  Search, 
  CheckCheck, 
  BookOpen, 
  Info, 
  Compass, 
  Layers, 
  Maximize2,
  Calendar,
  ShieldCheck
} from "lucide-react";
import { toast } from "sonner";
import { 
  TCategoryItem, 
  getSpecimenDisplayTitle, 
  getSpecimenScientificName, 
  getSpecimenBloomingSeason, 
  getSpecimenSunlight,
  getRelatedItems
} from "@/data/categories";
import CategoryItemCard from "@/components/category/CategoryItemCard";

interface SpecimenDetailClientProps {
  item: TCategoryItem;
  relatedItems: TCategoryItem[];
}

export default function SpecimenDetailClient({ item, relatedItems }: SpecimenDetailClientProps) {
  // Collect all photos from this item and ensure rich gallery
  const photos = item.images && item.images.length > 0 ? item.images : [item.image];
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const titleInfo = getSpecimenDisplayTitle(item);
  const scientificName = getSpecimenScientificName(item);
  const bloomingSeason = getSpecimenBloomingSeason(item);
  const sunlightCondition = getSpecimenSunlight(item);

  const handleShare = async () => {
    const shareData = {
      title: `${titleInfo.fullTitle} - Asmual AquaNature Encyclopedia`,
      text: `Explore verified care guidelines and scientific taxonomy for ${titleInfo.fullTitle} (${scientificName}).`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Page link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleGoogleSearch = () => {
    const query = encodeURIComponent(`${titleInfo.englishName} ${scientificName} care guide`);
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  };

  const currentSafeImage = encodeURI(photos[activePhotoIndex]);

  return (
    <div className="w-full min-h-screen bg-surface/30 pb-20">
      {/* 1. BREADCRUMB & BACK NAVIGATION */}
      <section className="bg-white border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Encyclopedia</span>
            </Link>

            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/category/${item.categoryId}`} className="hover:text-primary transition-colors">
                {item.categoryName}
              </Link>
              <span>/</span>
              <span className="font-bold text-foreground truncate max-w-[200px]">{titleInfo.englishName}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN SPECIMEN SHOWCASE & METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Multi-Photo Gallery Showcase (5 Columns) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm p-3 space-y-3">
              {/* Main Photo Frame with Zoom & Arrows */}
              <div className="relative w-full h-80 sm:h-96 md:h-[460px] rounded-2xl overflow-hidden bg-surface group">
                <Image
                  key={activePhotoIndex}
                  src={currentSafeImage}
                  alt={`${titleInfo.fullTitle} photo ${activePhotoIndex + 1}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-all duration-500 ${
                    isZoomed ? "scale-150 cursor-zoom-out" : "group-hover:scale-105 cursor-zoom-in"
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 pointer-events-none z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/90 text-white backdrop-blur-md shadow-xs">
                    {item.categoryName}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-md ${
                    item.careLevel === "Easy"
                      ? "bg-emerald-600/90 text-white"
                      : item.careLevel === "Moderate"
                      ? "bg-amber-600/90 text-white"
                      : "bg-primary text-white"
                  }`}>
                    {item.careLevel} Care
                  </span>
                </div>

                {/* Left & Right Arrows (If multiple images) */}
                {photos.length > 1 && (
                  <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between z-20 pointer-events-auto">
                    <button
                      type="button"
                      onClick={() => setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)}
                      aria-label="Previous image"
                      className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md shadow-md transition-all hover:scale-110 cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePhotoIndex((prev) => (prev + 1) % photos.length)}
                      aria-label="Next image"
                      className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md shadow-md transition-all hover:scale-110 cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Zoom hint toggle button */}
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute bottom-3.5 right-3.5 z-10 p-2 px-3 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{isZoomed ? "Reset Zoom" : "Click to Zoom"}</span>
                </button>
              </div>

              {/* Thumbnail Strip Gallery */}
              {photos.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
                  <span className="text-[11px] font-bold text-muted-foreground uppercase shrink-0 mr-1 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-accent" />
                    <span>{photos.length} Photos:</span>
                  </span>
                  {photos.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                        activePhotoIndex === idx
                          ? "border-accent ring-2 ring-accent/30 scale-105"
                          : "border-border/80 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={encodeURI(img)}
                        alt={`${titleInfo.fullTitle} thumb ${idx + 1}`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleShare}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-accent" />}
                <span>{copied ? "Link Copied!" : "Share Specimen"}</span>
              </button>

              <button
                type="button"
                onClick={handleGoogleSearch}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-white hover:bg-surface text-primary border border-border hover:border-accent text-xs font-bold shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4 text-accent" />
                <span>Search on Google</span>
              </button>

              <button
                type="button"
                onClick={() => setIsBookmarked(!isBookmarked)}
                title={isBookmarked ? "Remove Bookmark" : "Save Bookmark"}
                className="p-3 rounded-xl bg-white hover:bg-surface border border-border text-foreground hover:text-accent shadow-2xs transition-colors cursor-pointer"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-accent text-accent" : ""}`} />
              </button>
            </div>
          </div>

          {/* RIGHT: Detailed Profile & Science Data (6 Columns) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Title & Classification Box */}
            <div className="bg-white rounded-3xl border border-border p-6 sm:p-7 space-y-3 shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-extrabold uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                  <span>Botanical &amp; Aquatic Profile</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Specimen</span>
                </div>
              </div>

              {/* Title: English Name (বাংলা নাম) */}
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight leading-tight">
                {titleInfo.fullTitle}
              </h1>

              {/* Scientific Name in Subtle Italic Font */}
              <p className="text-sm sm:text-base italic font-serif text-muted-foreground/90 tracking-wide">
                {scientificName}
              </p>

              {/* Overview Paragraph */}
              <div className="pt-2 border-t border-border/70 space-y-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-accent" />
                  <span>Specimen Overview</span>
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Lighting / Water */}
              <div className="p-4 rounded-2xl bg-white border border-border space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  {item.type === "plant" ? (
                    <Sun className="w-4 h-4 text-amber-500" />
                  ) : (
                    <Droplets className="w-4 h-4 text-cyan-500" />
                  )}
                  <span>{item.type === "plant" ? "Lighting & Sunlight" : "Water Chemistry"}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {sunlightCondition}
                </p>
              </div>

              {/* Blooming / Breeding */}
              <div className="p-4 rounded-2xl bg-white border border-border space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span>{item.type === "plant" ? "Blooming Season" : "Breeding Cycle"}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {bloomingSeason}
                </p>
              </div>

              {/* Temperature */}
              <div className="p-4 rounded-2xl bg-white border border-border space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <Thermometer className="w-4 h-4 text-rose-500" />
                  <span>Optimal Temperature</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.temperature}
                </p>
              </div>

              {/* Care Level */}
              <div className="p-4 rounded-2xl bg-white border border-border space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <Compass className="w-4 h-4 text-primary" />
                  <span>Care Difficulty</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-semibold text-primary">
                  {item.careLevel === "Easy" ? "Easy (Beginner Friendly)" : item.careLevel === "Moderate" ? "Moderate Care Needed" : "Advanced Expertise"}
                </p>
              </div>
            </div>

            {/* Comprehensive Maintenance Protocols */}
            <div className="bg-white rounded-3xl border border-border p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="font-heading font-bold text-base sm:text-lg text-primary flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span>Comprehensive Care &amp; Maintenance Protocols</span>
                </h2>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-accent-soft text-primary">
                  Guideline
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-surface border border-border/80 space-y-1">
                  <span className="font-bold text-primary block">
                    {item.type === "plant" ? "Hydration & Watering Schedule:" : "Water Care & Filtration:"}
                  </span>
                  <p className="text-muted-foreground leading-relaxed text-xs">
                    {item.maintenance.wateringOrWaterChange}
                  </p>
                </div>

                {item.maintenance.soilOrSubstrate && (
                  <div className="p-3.5 rounded-xl bg-surface border border-border/80 space-y-1">
                    <span className="font-bold text-primary block">
                      {item.type === "plant" ? "Soil Mix & Potting Substrate:" : "Aquarium Substrate & Tank Sizing:"}
                    </span>
                    <p className="text-muted-foreground leading-relaxed text-xs">
                      {item.maintenance.soilOrSubstrate}
                    </p>
                  </div>
                )}

                <div className="p-3.5 rounded-xl bg-surface border border-border/80 space-y-1">
                  <span className="font-bold text-primary block">
                    {item.type === "plant" ? "Fertilizer & Nutrition Regimen:" : "Nutritional Diet & Feeding:"}
                  </span>
                  <p className="text-muted-foreground leading-relaxed text-xs">
                    {item.maintenance.feedingOrFertilizer}
                  </p>
                </div>
              </div>

              {/* Expert Tips */}
              <div className="pt-3 border-t border-border space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wide block">
                  Expert Guidelines &amp; Precautions:
                </span>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  {item.maintenance.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SIMILAR SPECIMENS IN THIS DEPARTMENT (4 Columns Grid) */}
      {relatedItems.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="border-t border-border pt-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold uppercase tracking-widest mb-1.5">
                  <span>Related Specimens</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-primary">
                  More in {item.categoryName}
                </h3>
              </div>
              <Link
                href={`/category/${item.categoryId}`}
                className="text-xs font-bold text-primary hover:text-accent transition-colors"
              >
                View all in {item.categoryName} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {relatedItems.map((rel) => (
                <CategoryItemCard
                  key={rel.id}
                  item={rel}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
