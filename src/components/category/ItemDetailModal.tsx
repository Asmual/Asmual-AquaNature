"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { 
  X, 
  Droplets, 
  Sun, 
  Thermometer, 
  Sparkles, 
  Check, 
  Bookmark,
  Share2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Layers,
  Calendar,
  Compass,
  Search,
  CheckCheck,
  BookOpen,
  Info
} from "lucide-react";
import { toast } from "sonner";
import { 
  TCategoryItem, 
  getSpecimenDisplayTitle,
  getSpecimenScientificName,
  getSpecimenBloomingSeason, 
  getSpecimenSunlight 
} from "@/data/categories";

interface ItemDetailModalProps {
  item: TCategoryItem;
  onClose: () => void;
}

export default function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
  const images = item.images && item.images.length > 0 ? item.images : [item.image];
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowLeft" && images.length > 1) {
        setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight" && images.length > 1) {
        setActiveImgIndex((prev) => (prev + 1) % images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, isZoomed, images.length]);

  const currentSafeImage = encodeURI(images[activeImgIndex]);
  const titleInfo = getSpecimenDisplayTitle(item);
  const scientificName = getSpecimenScientificName(item);
  const bloomingSeason = getSpecimenBloomingSeason(item);
  const sunlightCondition = getSpecimenSunlight(item);

  const handleShare = async () => {
    const shareData = {
      title: `${titleInfo.fullTitle} - Asmual AquaNature Encyclopedia`,
      text: `Learn about ${titleInfo.fullTitle} (${scientificName}): care guide, sunlight, climate, and maintenance protocols.`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to clipboard if cancelled
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Specimen guide link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleGoogleSearch = () => {
    const query = encodeURIComponent(`${titleInfo.englishName} ${scientificName} care guide`);
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-border overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col md:flex-row animate-in zoom-in-95 duration-200">
        {/* Top Control Bar */}
        <div className="absolute top-3.5 right-3.5 z-30 flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            title="Share specimen link"
            className="p-2 rounded-full bg-white/90 hover:bg-white text-foreground hover:text-primary shadow-md border border-border transition-colors cursor-pointer"
          >
            {copied ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setIsBookmarked(!isBookmarked)}
            title="Bookmark this specimen"
            className="p-2 rounded-full bg-white/90 hover:bg-white text-foreground hover:text-accent shadow-md border border-border transition-colors cursor-pointer"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-accent text-accent" : ""}`} />
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full bg-white/90 hover:bg-white text-foreground hover:text-danger shadow-md border border-border transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Left Column: Big Image Preview & Thumbnail Gallery */}
        <div className="relative w-full md:w-1/2 flex flex-col bg-surface shrink-0 border-b md:border-b-0 md:border-r border-border">
          {/* Main Photo Area */}
          <div className="relative w-full h-64 sm:h-72 md:h-[420px] overflow-hidden group">
            <Image
              key={activeImgIndex}
              src={currentSafeImage}
              alt={`${item.name} image ${activeImgIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-all duration-500 ${isZoomed ? "scale-150 cursor-zoom-out" : "group-hover:scale-105 cursor-zoom-in"}`}
              priority
              onClick={() => setIsZoomed(!isZoomed)}
            />

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
            {images.length > 1 && (
              <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between z-20 pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length)}
                  aria-label="Previous image"
                  className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md shadow-md transition-all hover:scale-110 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImgIndex((prev) => (prev + 1) % images.length)}
                  aria-label="Next image"
                  className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md shadow-md transition-all hover:scale-110 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Zoom hint button */}
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="absolute bottom-3.5 right-3.5 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="text-[10px]">{isZoomed ? "Reset Zoom" : "Click to Zoom"}</span>
            </button>
          </div>

          {/* Thumbnail Gallery (When more than 1 image) */}
          {images.length > 1 && (
            <div className="p-3 bg-white/80 border-t border-border flex items-center gap-2 overflow-x-auto scrollbar-none">
              <span className="text-[10px] font-bold text-muted-foreground uppercase shrink-0 mr-1 flex items-center gap-1">
                <Layers className="w-3 h-3 text-accent" />
                <span>{images.length} Photos:</span>
              </span>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImgIndex(idx)}
                  className={`relative w-12 h-12 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                    activeImgIndex === idx
                      ? "border-accent ring-2 ring-accent/30 scale-105"
                      : "border-border/70 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={encodeURI(img)}
                    alt={`${item.name} thumbnail ${idx + 1}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Full Encyclopedic Details & Care Guide in English */}
        <div className="w-full md:w-1/2 p-5 sm:p-7 overflow-y-auto space-y-4">
          {/* Header Info */}
          <div className="space-y-1 border-b border-border pb-3.5 pr-20">
            <div className="flex items-center gap-1.5 text-xs font-bold text-accent">
              <BookOpen className="w-4 h-4 text-accent" />
              <span>Botanical &amp; Aquatic Encyclopedia</span>
            </div>

            {/* Title: English Name (বাংলা নাম) */}
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-primary leading-tight">
              {titleInfo.fullTitle}
            </h2>

            {/* Scientific Name in Subtle Italic Font */}
            <p className="text-xs sm:text-sm italic font-serif text-muted-foreground/80 tracking-normal">
              {scientificName}
            </p>
          </div>

          {/* Botanical / Species Overview */}
          <div className="space-y-1">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-accent" />
              <span>Specimen Overview &amp; Profile</span>
            </h3>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Key Facts Grid in English */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Sunlight / Water Condition */}
            <div className="p-3 rounded-2xl bg-surface border border-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                {item.type === "plant" ? (
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                ) : (
                  <Droplets className="w-3.5 h-3.5 text-cyan-500" />
                )}
                <span>{item.type === "plant" ? "Sunlight & Lighting" : "Water Chemistry"}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">
                {sunlightCondition}
              </p>
            </div>

            {/* Blooming / Breeding Season */}
            <div className="p-3 rounded-2xl bg-surface border border-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>{item.type === "plant" ? "Blooming Season" : "Breeding Cycle"}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">
                {bloomingSeason}
              </p>
            </div>

            {/* Temperature */}
            <div className="p-3 rounded-2xl bg-surface border border-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Thermometer className="w-3.5 h-3.5 text-rose-500" />
                <span>Optimal Temperature</span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">
                {item.temperature}
              </p>
            </div>

            {/* Care Level */}
            <div className="p-3 rounded-2xl bg-surface border border-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Compass className="w-3.5 h-3.5 text-primary" />
                <span>Care Difficulty</span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug font-semibold text-primary">
                {item.careLevel === "Easy" ? "Easy (Beginner Friendly)" : item.careLevel === "Moderate" ? "Moderate Care Needed" : "Advanced Expertise"}
              </p>
            </div>
          </div>

          {/* Full Care & Maintenance Guide in English */}
          <div className="rounded-2xl bg-accent-soft/30 p-4 border border-accent/20 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Comprehensive Care &amp; Maintenance Guide</span>
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent/20 text-primary">
                Daily Routine
              </span>
            </div>

            <div className="space-y-2 text-xs text-foreground/85">
              <div className="p-2.5 rounded-xl bg-white border border-border/70 space-y-0.5">
                <span className="font-bold text-primary block">
                  {item.type === "plant" ? "Hydration & Watering Schedule:" : "Water Care & Filtration:"}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {item.maintenance.wateringOrWaterChange}
                </p>
              </div>

              {item.maintenance.soilOrSubstrate && (
                <div className="p-2.5 rounded-xl bg-white border border-border/70 space-y-0.5">
                  <span className="font-bold text-primary block">
                    {item.type === "plant" ? "Soil Mix & Potting Substrate:" : "Aquarium Substrate & Tank Sizing:"}
                  </span>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.maintenance.soilOrSubstrate}
                  </p>
                </div>
              )}

              <div className="p-2.5 rounded-xl bg-white border border-border/70 space-y-0.5">
                <span className="font-bold text-primary block">
                  {item.type === "plant" ? "Fertilizer & Nutrition Regimen:" : "Nutritional Diet & Feeding:"}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {item.maintenance.feedingOrFertilizer}
                </p>
              </div>
            </div>

            {/* Expert Tips */}
            <div className="pt-2 border-t border-accent/20 space-y-1.5">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wide block">
                Expert Guidelines &amp; Precautions:
              </span>
              <ul className="space-y-1 text-[11px] text-muted-foreground">
                {item.maintenance.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons: Purely Educational & Research Focused */}
          <div className="pt-2 border-t border-border flex flex-col sm:flex-row items-center gap-2">
            <button
              type="button"
              onClick={handleGoogleSearch}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface hover:bg-white text-primary border border-border hover:border-accent text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-accent" />
              <span>Search on Google</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-accent" />
              <span>{copied ? "Link Copied!" : "Share Specimen"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
