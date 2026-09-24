"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Droplets, 
  Sun, 
  Thermometer, 
  ChevronRight, 
  Heart,
  ShieldCheck
} from "lucide-react";
import { TCategoryItem } from "@/data/categories";

interface CategoryItemCardProps {
  item: TCategoryItem;
  onSelect: (item: TCategoryItem) => void;
}

export default function CategoryItemCard({ item, onSelect }: CategoryItemCardProps) {
  const [imgError, setImgError] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Safe image path encoding for Next.js Image
  const safeImagePath = encodeURI(item.image);

  return (
    <div
      onClick={() => onSelect(item)}
      className="group bg-white rounded-2xl border border-border overflow-hidden shadow-xs hover:shadow-xl hover:border-accent/60 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 relative"
    >
      {/* Top Image Preview Frame */}
      <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-surface">
        <Image
          src={imgError ? "/images/placeholder.jpg" : safeImagePath}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-108 transition-transform duration-500"
          onError={() => setImgError(true)}
        />

        {/* Gradient Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-60 transition-opacity" />

        {/* Badges on Top */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs backdrop-blur-md ${
            item.careLevel === "Easy"
              ? "bg-emerald-500/90 text-white"
              : item.careLevel === "Moderate"
              ? "bg-amber-500/90 text-white"
              : "bg-primary/90 text-white"
          }`}>
            {item.careLevel} Care
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            aria-label="Save to wishlist"
            className="pointer-events-auto p-1.5 rounded-full bg-white/80 hover:bg-white text-muted-foreground hover:text-danger backdrop-blur-md transition-colors shadow-xs"
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-danger text-danger" : ""}`} />
          </button>
        </div>

        {/* Bottom Spec Pill on Image */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-medium z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px]">
            {item.type === "plant" ? (
              <Sun className="w-3 h-3 text-amber-300" />
            ) : (
              <Droplets className="w-3 h-3 text-cyan-300" />
            )}
            <span className="truncate max-w-[120px]">{item.lightOrWater.split(';')[0]}</span>
          </span>

          <span className="inline-flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px]">
            <Thermometer className="w-3 h-3 text-rose-300" />
            <span>{item.temperature.split(' ')[0]}</span>
          </span>
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-1 text-[10px] text-muted-foreground">
            <span className="font-semibold uppercase tracking-wider text-accent">
              {item.categoryName}
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>Certified Strain</span>
            </span>
          </div>

          <h3 className="font-heading font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {item.name}
          </h3>

          <p className="text-[11px] sm:text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {item.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[9.5px] px-2 py-0.5 rounded-md bg-surface border border-border text-foreground/70 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Button Footer */}
        <div className="pt-2 border-t border-border/60">
          <div className="w-full flex items-center justify-between text-xs font-bold text-primary group-hover:text-accent transition-colors">
            <span>View Full Details &amp; Care</span>
            <div className="w-6 h-6 rounded-full bg-surface group-hover:bg-accent group-hover:text-primary flex items-center justify-center transition-all">
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
