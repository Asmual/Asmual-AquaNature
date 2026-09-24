import React from "react";
import EncyclopediaCatalogClient from "@/components/home/EncyclopediaCatalogClient";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. DIRECT 4-COLUMN BOTANICAL & AQUATIC ENCYCLOPEDIA (NO HERO SECTION) */}
      <EncyclopediaCatalogClient />

      {/* 2. 6 CORE SPECIES CATEGORIES DIRECTORY */}
      <FeaturedCategories />

      {/* 3. BOTANICAL & AQUARIUM EDUCATION MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          badge="Our Mission &amp; Purpose"
          title="Open Botanical &amp; Aquatic Knowledge Repository"
          subtitle="Empowering hobbyists, urban gardeners, and nature enthusiasts with scientifically verified taxonomy, water chemistry, potting substrate formulas, and expert care guidance."
          viewAllHref="#categories"
          viewAllText="Explore Categories"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border p-6 bg-surface hover:border-accent hover:shadow-md transition-all duration-200 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent-soft text-primary">
              Scientific Taxonomy
            </span>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-primary">
              Verified Species Profiles
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              From championship-grade Betta and pureline Guppy strains to rare indoor Monsteras and living Ficus bonsai trees, explore authentic binomial nomenclature and regional origins.
            </p>
          </div>

          <div className="rounded-2xl border border-border p-6 bg-surface hover:border-accent hover:shadow-md transition-all duration-200 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent-soft text-primary">
              Lighting &amp; Climate
            </span>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-primary">
              Sunlight &amp; Ambient Guidance
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Clear specifications on which species require intense full-spectrum direct sunlight versus those flourishing in gentle morning rays, dappled shade, or ambient indoor light.
            </p>
          </div>

          <div className="rounded-2xl border border-border p-6 bg-surface hover:border-accent hover:shadow-md transition-all duration-200 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent-soft text-primary">
              Nutrition &amp; Substrate
            </span>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-primary">
              Water, Soil &amp; Feeding Protocols
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Expert guidelines for freshwater pH stability, water change cycles, specialized porous potting mixes, and balanced fertilization schedules.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
