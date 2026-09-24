"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Search, 
  SlidersHorizontal, 
  Layers, 
  Sparkles, 
  Leaf, 
  Fish, 
  CheckCircle2,
  X,
  Filter
} from "lucide-react";
import { TCategoryMeta, TCategoryItem, CATEGORIES_META } from "@/data/categories";
import CategoryItemCard from "./CategoryItemCard";
import ItemDetailModal from "./ItemDetailModal";

interface CategoryShowcaseClientProps {
  category: TCategoryMeta;
  items: TCategoryItem[];
}

export default function CategoryShowcaseClient({
  category,
  items,
}: CategoryShowcaseClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<TCategoryItem | null>(null);

  // Extract all unique tags for filter pills
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    items.forEach((item) => {
      item.tags.forEach((tag) => tagsSet.add(tag));
    });
    return ["All", ...Array.from(tagsSet)];
  }, [items]);

  // Filtered items based on search and filters (ALL items in a single page)
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesDifficulty =
        selectedDifficulty === "All" || item.careLevel === selectedDifficulty;

      const matchesTag =
        selectedTag === "All" || item.tags.includes(selectedTag);

      return matchesSearch && matchesDifficulty && matchesTag;
    });
  }, [items, searchQuery, selectedDifficulty, selectedTag]);

  return (
    <div className="w-full min-h-screen bg-surface/30 pb-20">
      {/* 1. TOP HERO BANNER & BREADCRUMB */}
      <section className="bg-gradient-to-b from-primary/10 via-surface to-background border-b border-border py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span>Categories</span>
              <span>/</span>
              <span className="font-bold text-primary">{category.name}</span>
            </div>
          </div>

          {/* Category Banner Title Area */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-border shadow-sm">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-extrabold uppercase tracking-wider">
                {category.type === "plant" ? (
                  <Leaf className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <Fish className="w-3.5 h-3.5 text-accent" />
                )}
                <span>{category.badge}</span>
                <span className="text-muted-foreground/60">•</span>
                <span>{category.name}</span>
              </div>

              <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-primary tracking-tight">
                {category.name}
              </h1>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>

              {/* Single page status note */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>All {items.length} items curated on this single page without pagination</span>
              </div>
            </div>

            {/* Category Representative Thumbnail */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-accent shadow-md shrink-0 self-center md:self-auto bg-surface">
              <Image
                src={encodeURI(category.image)}
                alt={category.name}
                fill
                priority
                sizes="(max-width: 640px) 128px, 160px"
                className="object-cover"
              />
            </div>
          </div>

          {/* 6 Quick Category Switcher Tabs */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Switch Category
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES_META.map((cat) => {
                const isCurrent = cat.id === category.id;
                return (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                      isCurrent
                        ? "bg-primary text-white border-primary shadow-sm"
                        : "bg-white text-foreground hover:border-accent hover:text-primary border-border"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isCurrent ? "bg-accent text-primary" : "bg-surface text-muted-foreground"
                    }`}>
                      {cat.itemCount}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH, FILTER & ITEM COUNT BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl border border-border p-4 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search in ${category.name} by name or tag...`}
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-surface border border-border rounded-xl focus:outline-none focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Care Level Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs font-bold text-muted-foreground mr-1 hidden sm:inline">
                Care:
              </span>
              {["All", "Easy", "Moderate", "Advanced"].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedDifficulty(level)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedDifficulty === level
                      ? "bg-primary text-white shadow-xs"
                      : "bg-surface text-foreground/80 hover:bg-white hover:border-accent border border-border"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary & Reset */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/60">
            <div className="flex items-center gap-1.5 font-medium">
              <Layers className="w-3.5 h-3.5 text-accent" />
              <span>
                Showing <strong className="text-foreground">{filteredItems.length}</strong> of {items.length} specimens
              </span>
            </div>

            {(searchQuery || selectedDifficulty !== "All" || selectedTag !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDifficulty("All");
                  setSelectedTag("All");
                }}
                className="text-primary font-bold hover:underline cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. ALL SPECIMEN CARDS GRID (Single Page - All Items) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="bg-white rounded-3xl border border-border p-12 text-center space-y-4 max-w-md mx-auto my-10 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-accent-soft text-primary mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground">
              No matching specimens found
            </h3>
            <p className="text-xs text-muted-foreground">
              We couldn&apos;t find any items matching &quot;{searchQuery}&quot; with selected filters in {category.name}.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDifficulty("All");
                setSelectedTag("All");
              }}
              className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-colors cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. COMPREHENSIVE ITEM DETAILS MODAL */}
      {activeItem && (
        <ItemDetailModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </div>
  );
}
