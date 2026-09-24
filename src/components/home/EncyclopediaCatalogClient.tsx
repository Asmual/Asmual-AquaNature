"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  X, 
  Layers, 
  Leaf, 
  Fish, 
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { 
  TCategoryItem, 
  CATEGORY_ITEMS, 
  CATEGORIES_META 
} from "@/data/categories";
import CategoryItemCard from "@/components/category/CategoryItemCard";
import ItemDetailModal from "@/components/category/ItemDetailModal";

export default function EncyclopediaCatalogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCare, setSelectedCare] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<TCategoryItem | null>(null);

  // Filter items based on active category, search query, care level, and type
  const filteredItems = useMemo(() => {
    return CATEGORY_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.categoryId !== selectedCategory) {
        return false;
      }

      // Type filter (plant or fish)
      if (selectedType !== "all" && item.type !== selectedType) {
        return false;
      }

      // Care level filter
      if (selectedCare !== "all" && item.careLevel !== selectedCare) {
        return false;
      }

      // Search query across name, bengaliName, scientificName, tags, and description
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesBengali = item.bengaliName?.toLowerCase().includes(q) || false;
        const matchesScientific = item.scientificName?.toLowerCase().includes(q) || false;
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCategory = item.categoryName.toLowerCase().includes(q);

        if (!matchesName && !matchesBengali && !matchesScientific && !matchesTags && !matchesDesc && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedType, selectedCare, searchQuery]);

  return (
    <div className="w-full">
      {/* 1. COMPACT ENCYCLOPEDIA HEADER BANNER IN ENGLISH */}
      <section className="bg-gradient-to-b from-primary/10 via-surface to-background border-b border-border py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-extrabold uppercase tracking-wider border border-accent/20">
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span>Botanical &amp; Aquatic Encyclopedia</span>
            </div>

            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-tight">
              Living Botanical &amp; Aquatic Knowledge Repository
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Explore authentic scientific taxonomy, lighting requirements, climate adaptation, and comprehensive care guides for indoor plants, living bonsai art, water lilies, and show-grade aquarium fishes.
            </p>

            {/* Quick Live Stats Pill in English */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-border shadow-2xs font-semibold text-primary">
                <Leaf className="w-3.5 h-3.5 text-accent" />
                <span>108+ Flora Species</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-border shadow-2xs font-semibold text-primary">
                <Fish className="w-3.5 h-3.5 text-primary" />
                <span>46+ Aquatic Species</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-border shadow-2xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Free Open Knowledge Hub</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROL BAR */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-border shadow-2xs py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {/* Search Input and Type Toggles */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Live Search Bar */}
            <div className="relative flex-1 max-w-xl">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by English, Bengali, or scientific name (e.g. Monstera, Betta, Water Lily, Ficus)..."
                className="w-full pl-9 pr-8 py-2.5 text-xs sm:text-sm bg-surface border border-border rounded-xl focus:outline-none focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 transition-all text-foreground"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Kingdom Filter (All / Plants / Aquatic Fishes) */}
            <div className="flex items-center gap-1.5 self-center md:self-auto overflow-x-auto">
              <button
                type="button"
                onClick={() => {
                  setSelectedType("all");
                  setSelectedCategory("all");
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedType === "all"
                    ? "bg-primary text-white shadow-xs"
                    : "bg-surface text-foreground hover:bg-white border border-border"
                }`}
              >
                All Biodiversity
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedType("plant");
                  if (selectedCategory !== "indoor" && selectedCategory !== "bonsai" && selectedCategory !== "flowers") {
                    setSelectedCategory("all");
                  }
                }}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedType === "plant"
                    ? "bg-accent text-primary shadow-xs"
                    : "bg-surface text-foreground hover:bg-white border border-border"
                }`}
              >
                <Leaf className="w-3.5 h-3.5 text-accent" />
                <span>Flora (Plants)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedType("fish");
                  if (selectedCategory !== "fighter" && selectedCategory !== "guppy" && selectedCategory !== "marine") {
                    setSelectedCategory("all");
                  }
                }}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedType === "fish"
                    ? "bg-primary text-white shadow-xs"
                    : "bg-surface text-foreground hover:bg-white border border-border"
                }`}
              >
                <Fish className="w-3.5 h-3.5 text-primary" />
                <span>Aquatic Fauna (Fishes)</span>
              </button>
            </div>
          </div>

          {/* 6 Major Category Filter Pills (Pure English, NO brackets) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                selectedCategory === "all"
                  ? "bg-primary text-white border-primary shadow-2xs"
                  : "bg-surface text-foreground hover:bg-white border-border"
              }`}
            >
              <span>All Categories</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === "all" ? "bg-accent text-primary" : "bg-white text-muted-foreground"
              }`}>
                {CATEGORY_ITEMS.length}
              </span>
            </button>

            {CATEGORIES_META.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              // Dim if category doesn't match selected type
              if (selectedType !== "all" && cat.type !== selectedType) return null;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-primary text-white border-primary shadow-2xs"
                      : "bg-white text-foreground hover:border-accent hover:text-primary border-border"
                  }`}
                >
                  {cat.type === "plant" ? (
                    <Leaf className="w-3 h-3 text-accent" />
                  ) : (
                    <Fish className="w-3 h-3 text-accent" />
                  )}
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-accent text-primary" : "bg-surface text-muted-foreground"
                  }`}>
                    {cat.itemCount}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Result Count and Quick Care Filter */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t border-border/60">
            <div className="flex items-center gap-1.5 font-medium">
              <Layers className="w-3.5 h-3.5 text-accent" />
              <span>
                Showing <strong className="text-primary font-bold">{filteredItems.length}</strong> documented species
              </span>
            </div>

            {/* Care level filter buttons */}
            <div className="flex items-center gap-1.5">
              <span className="hidden sm:inline font-semibold text-[11px]">Care Level:</span>
              {[
                { label: "All", value: "all" },
                { label: "Easy", value: "Easy" },
                { label: "Moderate", value: "Moderate" },
                { label: "Advanced", value: "Advanced" },
              ].map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setSelectedCare(c.value)}
                  className={`px-2 py-0.5 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                    selectedCare === c.value
                      ? "bg-accent-soft text-primary font-bold border border-accent/40"
                      : "hover:text-primary text-muted-foreground"
                  }`}
                >
                  {c.label}
                </button>
              ))}

              {(searchQuery || selectedCategory !== "all" || selectedCare !== "all" || selectedType !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedCare("all");
                    setSelectedType("all");
                  }}
                  className="ml-2 text-primary font-bold hover:underline cursor-pointer text-[11px]"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECT 4-COLUMN COMPACT ENCYCLOPEDIA GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredItems.map((item) => (
              <CategoryItemCard
                key={item.id}
                item={item}
                onSelect={(selected) => setActiveItem(selected)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-border p-12 text-center space-y-4 max-w-md mx-auto my-12 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-accent-soft text-primary mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground">
              No matching species found
            </h3>
            <p className="text-xs text-muted-foreground">
              We couldn&apos;t find any species matching &quot;{searchQuery}&quot;. Please check your spelling or adjust filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedCare("all");
                setSelectedType("all");
              }}
              className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. COMPREHENSIVE BOTANICAL & AQUATIC DETAIL MODAL */}
      {activeItem && (
        <ItemDetailModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </div>
  );
}
