"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { 
  X, 
  Droplets, 
  Sun, 
  Thermometer, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Heart,
  Share2,
  PhoneCall
} from "lucide-react";
import { TCategoryItem } from "@/data/categories";

interface ItemDetailModalProps {
  item: TCategoryItem;
  onClose: () => void;
}

export default function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const safeImagePath = encodeURI(item.image);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-border overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-foreground hover:text-danger shadow-md transition-colors cursor-pointer border border-border"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Big Image Preview */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-surface overflow-hidden shrink-0">
          <Image
            src={safeImagePath}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 pointer-events-none">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/90 text-white backdrop-blur-md shadow-xs">
              {item.categoryName}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent text-primary backdrop-blur-md shadow-xs">
              {item.careLevel} Care
            </span>
          </div>
        </div>

        {/* Right Column: Full Details & Maintenance */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="space-y-1.5 border-b border-border/80 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-accent">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Healthy Livestock &amp; Botanicals</span>
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground">
              {item.name}
            </h2>
            <p className="text-xs text-muted-foreground font-mono">
              {item.scientificName}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
              Description &amp; Highlights
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Environmental Parameters Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-surface border border-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                {item.type === "plant" ? (
                  <Sun className="w-4 h-4 text-amber-500" />
                ) : (
                  <Droplets className="w-4 h-4 text-cyan-500" />
                )}
                <span>{item.type === "plant" ? "Lighting" : "Water Type"}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-tight">
                {item.lightOrWater}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-surface border border-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Thermometer className="w-4 h-4 text-rose-500" />
                <span>Temperature</span>
              </div>
              <p className="text-xs text-muted-foreground leading-tight">
                {item.temperature}
              </p>
            </div>
          </div>

          {/* Care & Maintenance Guide */}
          <div className="space-y-2 rounded-2xl bg-accent-soft/40 p-4 border border-accent/20">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Full Care &amp; Maintenance Protocol</span>
            </h3>

            <div className="space-y-1.5 text-xs text-foreground/80">
              <p>
                <strong className="text-primary font-semibold">
                  {item.type === "plant" ? "Watering:" : "Water Change:"}
                </strong>{" "}
                {item.maintenance.wateringOrWaterChange}
              </p>
              {item.maintenance.soilOrSubstrate && (
                <p>
                  <strong className="text-primary font-semibold">
                    {item.type === "plant" ? "Soil Mix:" : "Substrate:"}
                  </strong>{" "}
                  {item.maintenance.soilOrSubstrate}
                </p>
              )}
              <p>
                <strong className="text-primary font-semibold">
                  {item.type === "plant" ? "Fertilizer:" : "Feeding:"}
                </strong>{" "}
                {item.maintenance.feedingOrFertilizer}
              </p>
            </div>

            {/* Pro Tips */}
            <div className="pt-2 border-t border-accent/20 space-y-1">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wide">
                Expert Guidelines:
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

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pt-2">
            <a
              href="tel:+8801700000000"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold shadow-sm transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Inquire &amp; Order Specimen</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-surface hover:bg-border text-foreground text-xs font-bold border border-border transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
