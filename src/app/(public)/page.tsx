import Hero from "@/components/home/Hero";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION WITH WIDE BANNER AND GLASSY CATEGORIES */}
      <Hero />

      {/* 2. VALUE & INTRODUCTORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          badge="Our Specializations"
          title="Curated for Passionate Aquarists & Plant Enthusiasts"
          subtitle="Every specimen undergoes thorough quarantine, acclimation, and health audits before reaching your collection."
          viewAllHref="#categories"
          viewAllText="Explore Catalog"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border p-6 bg-surface hover:border-accent hover:shadow-md transition-all duration-200 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent-soft text-primary">
              Freshwater & Marine
            </span>
            <h3 className="font-heading font-bold text-xl text-primary">
              Certified Healthy Livestock
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From championship-line Halfmoon and Dumbo Bettas to vivid clownfish and neon schooling tetras, all species are fed premium diets and conditioned for vitality.
            </p>
          </div>

          <div className="rounded-xl border border-border p-6 bg-surface hover:border-accent hover:shadow-md transition-all duration-200 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent-soft text-primary">
              Aquascaping & Flora
            </span>
            <h3 className="font-heading font-bold text-xl text-primary">
              Aquatic Plants & Water Lilies
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Snails-free tissue culture and potted plants, nutrient-rich substrates, and exotic floating lilies that turn any glass tank into an underwater rainforest.
            </p>
          </div>

          <div className="rounded-xl border border-border p-6 bg-surface hover:border-accent hover:shadow-md transition-all duration-200 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent-soft text-primary">
              Living Greenery
            </span>
            <h3 className="font-heading font-bold text-xl text-primary">
              Hand-Crafted Bonsai Trees
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mature Ficus, China Bot, and miniature woody wonders potted in artisanal glazed ceramics, ideal for living room centerpieces and desk biophiles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
