"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Droplets, 
  Sun, 
  Thermometer, 
  ChevronRight, 
  ChevronLeft,
  Bookmark,
  Layers,
  Calendar,
  Compass,
  BookOpen
} from "lucide-react";
import { 
  TCategoryItem, 
  getSpecimenDisplayTitle,
  getSpecimenScientificName,
  getSpecimenBloomingSeason, 
  getSpecimenSunlight 
} from "@/data/categories";

interface CategoryItemCardProps {
  item: TCategoryItem;
}

export default function CategoryItemCard({ item }: CategoryItemCardProps) {
  const images = item.images && item.images.length > 0 ? item.images : [item.image];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Auto-slide every 3.5 seconds; pauses when hovering on the card
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const currentSafeImage = encodeURI(images[currentIndex]);
  const titleInfo = getSpecimenDisplayTitle(item);
  const scientificName = getSpecimenScientificName(item);
  const bloomingSeason = getSpecimenBloomingSeason(item);
  const sunlightCondition = getSpecimenSunlight(item);

  return (
    <Link
      href={`/item/${item.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-2xl border border-border/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-accent/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative cursor-pointer"
    >
      {/* Top Image Preview Frame with Auto-Slider & Badges */}
      <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-surface">
        <Image
          key={currentIndex}
          src={imgError ? "/images/placeholder.jpg" : currentSafeImage}
          alt={`${item.name} photo ${currentIndex + 1}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-all duration-700 ease-in-out group-hover:scale-108"
          onError={() => setImgError(true)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/30 opacity-60 group-hover:opacity-75 transition-opacity pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 pointer-events-none">
            <span className={`px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-wider shadow-xs backdrop-blur-md ${
              item.careLevel === "Easy"
                ? "bg-emerald-600/90 text-white"
                : item.careLevel === "Moderate"
                ? "bg-amber-600/90 text-white"
                : "bg-primary/90 text-white"
            }`}>
              {item.careLevel} Care
            </span>

            {/* Multi-Photo Count Badge */}
            {images.length > 1 && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9.5px] font-bold bg-black/60 text-white backdrop-blur-md">
                <Layers className="w-2.5 h-2.5 text-accent" />
                <span>{currentIndex + 1}/{images.length}</span>
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
            }}
            title={isBookmarked ? "Remove Bookmark" : "Save Bookmark"}
            className="p-1.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors shadow-xs cursor-pointer"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? "fill-accent text-accent" : "text-white"}`} />
          </button>
        </div>

        {/* Left & Right Arrow Buttons (Only if multiple photos) */}
        {images.length > 1 && (
          <div className="absolute inset-x-1.5 top-1/2 -translate-y-1/2 flex items-center justify-between z-20 pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous photo"
              className="p-1 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-transform hover:scale-110 cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next photo"
              className="p-1 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-transform hover:scale-110 cursor-pointer shadow-md"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Category Pill over Image Bottom */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[10px] font-medium z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-[9.5px] text-accent font-semibold truncate max-w-[150px]">
            <Compass className="w-3 h-3 text-accent shrink-0" />
            <span className="truncate">{item.categoryName}</span>
          </span>

          <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-[9.5px]">
            <Thermometer className="w-3 h-3 text-rose-300 shrink-0" />
            <span>{item.temperature.split(' ')[0]}</span>
          </span>
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2.5">
        <div className="space-y-0.5">
          {/* Title: English Name (বাংলা নাম) */}
          <h3 className="font-heading font-extrabold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors line-clamp-1 leading-snug">
            {titleInfo.fullTitle}
          </h3>

          {/* Scientific Name in Subtle Italic Font */}
          <p className="text-[11.5px] italic font-serif text-muted-foreground/80 tracking-normal truncate">
            {scientificName}
          </p>
        </div>

        {/* Sunlight & Blooming Season Quick Specs in Clean English */}
        <div className="space-y-1.5 pt-1 text-[11px] border-t border-border/50">
          <div className="flex items-center gap-1.5 text-foreground/75 truncate">
            {item.type === "plant" ? (
              <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            ) : (
              <Droplets className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
            )}
            <span className="truncate text-muted-foreground">
              <strong className="text-foreground/90 font-semibold">{item.type === "plant" ? "Sunlight:" : "Water:"}</strong> {sunlightCondition}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-foreground/75 truncate">
            <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate text-muted-foreground">
              <strong className="text-foreground/90 font-semibold">{item.type === "plant" ? "Blooming:" : "Breeding:"}</strong> {bloomingSeason}
            </span>
          </div>
        </div>

        {/* Action Button Footer linking to /item/[id] */}
        <div className="pt-2 border-t border-border/60">
          <div className="w-full flex items-center justify-between text-xs font-bold text-primary group-hover:text-accent transition-colors">
            <span className="flex items-center gap-1 text-[11px]">
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span>Read Care Guide</span>
            </span>
            <div className="w-6 h-6 rounded-full bg-surface group-hover:bg-accent group-hover:text-primary flex items-center justify-center transition-all">
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
