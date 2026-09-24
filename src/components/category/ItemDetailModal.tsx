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
  getSpecimenRegionalName, 
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
  const regionalName = getSpecimenRegionalName(item);
  const bloomingSeason = getSpecimenBloomingSeason(item);
  const sunlightCondition = getSpecimenSunlight(item);

  const cleanBengaliName = item.bengaliName?.includes("•")
    ? item.bengaliName.split("•")[1].trim()
    : item.bengaliName || item.name;

  const handleShare = async () => {
    const shareData = {
      title: `${cleanBengaliName} (${item.name}) - Asmual AquaNature Encyclopedia`,
      text: `জানুন ${cleanBengaliName} (${item.name}) এর পরিচর্যা, আবহাওয়া ও বিজ্ঞানসম্মত তথ্য।`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to clipboard if user cancelled share sheet
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("প্রজাতির লিংক সফলভাবে কপি করা হয়েছে!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleGoogleSearch = () => {
    const query = encodeURIComponent(`${item.name} ${item.scientificName || ""} care guide`);
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
            title="তথ্য শেয়ার বা লিংক কপি করুন"
            className="p-2 rounded-full bg-white/90 hover:bg-white text-foreground hover:text-primary shadow-md border border-border transition-colors cursor-pointer"
          >
            {copied ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setIsBookmarked(!isBookmarked)}
            title="জ্ঞানকোষ বুকমার্কে সংরক্ষণ করুন"
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
                {item.careLevel === "Easy" ? "সহজ যত্ন" : item.careLevel === "Moderate" ? "মাঝারি যত্ন" : "বিশেষ যত্ন"}
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
              <span className="text-[10px]">{isZoomed ? "রিসেট জুম" : "জুম করে দেখুন"}</span>
            </button>
          </div>

          {/* Thumbnail Gallery (When more than 1 image) */}
          {images.length > 1 && (
            <div className="p-3 bg-white/80 border-t border-border flex items-center gap-2 overflow-x-auto scrollbar-none">
              <span className="text-[10px] font-bold text-muted-foreground uppercase shrink-0 mr-1 flex items-center gap-1">
                <Layers className="w-3 h-3 text-accent" />
                <span>{images.length} ফটো:</span>
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

        {/* Right Column: Full Encyclopedic Details & Care Guide */}
        <div className="w-full md:w-1/2 p-5 sm:p-7 overflow-y-auto space-y-4">
          {/* Header Info */}
          <div className="space-y-1.5 border-b border-border pb-3.5 pr-20">
            <div className="flex items-center gap-1.5 text-xs font-bold text-accent">
              <BookOpen className="w-4 h-4 text-accent" />
              <span>উদ্ভিদ ও জলজ প্রাণীর উন্মুক্ত তথ্যকোষ</span>
            </div>

            {/* Bengali Name Prominently */}
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-primary leading-tight">
              {cleanBengaliName}
            </h2>

            {/* English & Scientific Names */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
              <span className="font-semibold text-foreground/90">{item.name}</span>
              {item.scientificName && (
                <>
                  <span className="text-muted-foreground">•</span>
                  <span className="font-mono italic text-accent font-medium">{item.scientificName}</span>
                </>
              )}
            </div>

            {/* Regional Name in Bangladesh */}
            <div className="mt-2 p-2 rounded-xl bg-accent-soft/40 border border-accent/20">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wide block">
                বাংলাদেশে আঞ্চলিক নাম:
              </span>
              <p className="text-xs font-semibold text-primary mt-0.5">
                {regionalName}
              </p>
            </div>
          </div>

          {/* Botanical / Species Overview */}
          <div className="space-y-1">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-accent" />
              <span>প্রজাতি পরিচিতি ও বৈশিষ্ট্য</span>
            </h3>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Key Facts Grid (Sunlight, Blooming/Breeding, Temp, Care) */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Sunlight / Shade */}
            <div className="p-3 rounded-2xl bg-surface border border-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                {item.type === "plant" ? (
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                ) : (
                  <Droplets className="w-3.5 h-3.5 text-cyan-500" />
                )}
                <span>{item.type === "plant" ? "সূর্যালোক ও আবহাওয়া" : "পানির ধরন ও পরিবেশ"}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">
                {sunlightCondition}
              </p>
            </div>

            {/* Blooming / Breeding Season */}
            <div className="p-3 rounded-2xl bg-surface border border-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>{item.type === "plant" ? "ফুল ফোটার সময়" : "প্রজনন মৌসুম"}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">
                {bloomingSeason}
              </p>
            </div>

            {/* Temperature */}
            <div className="p-3 rounded-2xl bg-surface border border-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Thermometer className="w-3.5 h-3.5 text-rose-500" />
                <span>অনুকূল তাপমাত্রা</span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">
                {item.temperature}
              </p>
            </div>

            {/* Care Level */}
            <div className="p-3 rounded-2xl bg-surface border border-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Compass className="w-3.5 h-3.5 text-primary" />
                <span>যত্নের প্রয়োজনীয়তা</span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug font-semibold text-primary">
                {item.careLevel === "Easy" ? "সহজ (নতুনদের উপযোগী)" : item.careLevel === "Moderate" ? "মাঝারি যত্ন প্রয়োজন" : "অভিজ্ঞদের বিশেষ যত্ন"}
              </p>
            </div>
          </div>

          {/* Full Care & Maintenance Guide */}
          <div className="rounded-2xl bg-accent-soft/30 p-4 border border-accent/20 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>বিস্তারিত পরিচর্যা ও যত্ন নির্দেশিকা</span>
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent/20 text-primary">
                নিয়মিত পরিচর্যা
              </span>
            </div>

            <div className="space-y-2 text-xs text-foreground/85">
              <div className="p-2.5 rounded-xl bg-white border border-border/70 space-y-0.5">
                <span className="font-bold text-primary block">
                  {item.type === "plant" ? "পানি দেওয়ার নিয়ম (Watering):" : "পানি পরিবর্তন ও ফিল্ট্রেশন (Water Care):"}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {item.maintenance.wateringOrWaterChange}
                </p>
              </div>

              {item.maintenance.soilOrSubstrate && (
                <div className="p-2.5 rounded-xl bg-white border border-border/70 space-y-0.5">
                  <span className="font-bold text-primary block">
                    {item.type === "plant" ? "মাটি ও টবের প্রস্তুতি (Soil & Pot):" : "সাবস্ট্রেট ও অ্যাকুয়ারিয়ামের মাপ (Tank & Substrate):"}
                  </span>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.maintenance.soilOrSubstrate}
                  </p>
                </div>
              )}

              <div className="p-2.5 rounded-xl bg-white border border-border/70 space-y-0.5">
                <span className="font-bold text-primary block">
                  {item.type === "plant" ? "সার ও পুষ্টি উপাদান (Fertilizer):" : "খাদ্য ও পুষ্টি তালিকা (Diet & Nutrition):"}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {item.maintenance.feedingOrFertilizer}
                </p>
              </div>
            </div>

            {/* Expert Tips */}
            <div className="pt-2 border-t border-accent/20 space-y-1.5">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wide block">
                বিশেষজ্ঞ টিপস ও সতর্কতা:
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
              <span>গুগলে আরও তথ্য খুঁজুন</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-accent" />
              <span>{copied ? "লিংক কপি সম্পন্ন!" : "এই তথ্যটি শেয়ার করুন"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
