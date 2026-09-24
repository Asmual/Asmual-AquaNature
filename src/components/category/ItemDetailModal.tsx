"use client";

import React, { useEffect, useState } from "react";
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
  PhoneCall,
  MessageCircle,
  AlertCircle,
  Copy,
  CheckCheck,
  Maximize2
} from "lucide-react";
import { toast } from "sonner";
import { TCategoryItem } from "@/data/categories";

interface ItemDetailModalProps {
  item: TCategoryItem;
  onClose: () => void;
}

export default function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"specs" | "maintenance" | "tips">("maintenance");
  const [copied, setCopied] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
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
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, isZoomed]);

  const safeImagePath = encodeURI(item.image);

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Page link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Asmual AquaNature! I am interested in specimen: "${item.name}" from ${item.categoryName}. Could you share availability and details?`
    );
    window.open(`https://wa.me/8801700000000?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-border overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col md:flex-row animate-in zoom-in-95 duration-200">
        {/* Top Control Bar for Mobile & Desktop */}
        <div className="absolute top-3.5 right-3.5 z-30 flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share specimen"
            className="p-2 rounded-full bg-white/90 hover:bg-white text-foreground hover:text-primary shadow-md border border-border transition-colors cursor-pointer"
          >
            {copied ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setIsLiked(!isLiked)}
            aria-label="Add to wishlist"
            className="p-2 rounded-full bg-white/90 hover:bg-white text-muted-foreground hover:text-danger shadow-md border border-border transition-colors cursor-pointer"
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-danger text-danger" : ""}`} />
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

        {/* Left Column: Big Image Preview with Lightbox Zoom */}
        <div className="relative w-full md:w-1/2 h-72 sm:h-80 md:h-auto bg-surface overflow-hidden shrink-0 group">
          <Image
            src={safeImagePath}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-transform duration-500 ${isZoomed ? "scale-150 cursor-zoom-out" : "group-hover:scale-105 cursor-zoom-in"}`}
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

          {/* Zoom hint button */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute bottom-3.5 right-3.5 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="text-[10px]">{isZoomed ? "Reset Zoom" : "Click to Zoom"}</span>
          </button>
        </div>

        {/* Right Column: Full Details & Maintenance */}
        <div className="w-full md:w-1/2 p-5 sm:p-7 overflow-y-auto space-y-5">
          {/* Header Info */}
          <div className="space-y-1.5 border-b border-border pb-3.5 pr-20">
            <div className="flex items-center gap-1.5 text-xs font-bold text-accent">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Botanical &amp; Livestock Standard</span>
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground leading-tight">
              {item.name}
            </h2>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-mono text-primary font-medium">{item.scientificName}</span>
              <span>•</span>
              <span className="text-muted-foreground">{item.bengaliName}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Specimen Overview
            </h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Quick Specifications Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-2xl bg-surface border border-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                {item.type === "plant" ? (
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                ) : (
                  <Droplets className="w-3.5 h-3.5 text-cyan-500" />
                )}
                <span>{item.type === "plant" ? "Lighting Need" : "Water Chemistry"}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">
                {item.lightOrWater}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-surface border border-border space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Thermometer className="w-3.5 h-3.5 text-rose-500" />
                <span>Optimal Temp</span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">
                {item.temperature}
              </p>
            </div>
          </div>

          {/* Detailed Maintenance Protocols Box */}
          <div className="rounded-2xl bg-accent-soft/30 p-4 border border-accent/20 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Full Maintenance &amp; Care Guide</span>
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent/20 text-primary">
                Routine Care
              </span>
            </div>

            <div className="space-y-2 text-xs text-foreground/85">
              <div className="p-2.5 rounded-xl bg-white border border-border/70 space-y-0.5">
                <span className="font-bold text-primary block">
                  {item.type === "plant" ? "Hydration & Watering Schedule:" : "Water Change & Maintenance:"}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {item.maintenance.wateringOrWaterChange}
                </p>
              </div>

              {item.maintenance.soilOrSubstrate && (
                <div className="p-2.5 rounded-xl bg-white border border-border/70 space-y-0.5">
                  <span className="font-bold text-primary block">
                    {item.type === "plant" ? "Soil Mix & Potting Substrate:" : "Aquarium Substrate & Sizing:"}
                  </span>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.maintenance.soilOrSubstrate}
                  </p>
                </div>
              )}

              <div className="p-2.5 rounded-xl bg-white border border-border/70 space-y-0.5">
                <span className="font-bold text-primary block">
                  {item.type === "plant" ? "Fertilizer & Nutrient Regimen:" : "Nutritional Diet & Feeding:"}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {item.maintenance.feedingOrFertilizer}
                </p>
              </div>
            </div>

            {/* Expert Guidelines Bullet Points */}
            <div className="pt-2 border-t border-accent/20 space-y-1.5">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wide block">
                Expert Guidelines &amp; Tips:
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

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold text-muted-foreground uppercase mr-1">
              Tags:
            </span>
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded-md bg-surface border border-border text-foreground/75 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Customer Ordering / Inquiry Actions */}
          <div className="pt-2 border-t border-border flex flex-col sm:flex-row items-center gap-2">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </button>

            <a
              href="tel:+8801700000000"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold shadow-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Hotline</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
