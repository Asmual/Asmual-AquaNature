import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Truck,
  Leaf,
  Fish,
  Award,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  TreePine,
  Clock,
  MapPin,
  PhoneCall
} from "lucide-react";
import { CATEGORIES_META } from "@/data/categories";

export const metadata: Metadata = {
  title: "About Us — Asmual AquaNature Studio",
  description:
    "Discover the story, philosophy, and dedication behind Asmual AquaNature: Dhaka's premier destination for ethically raised pureline fishes, living bonsai art, and acclimatized botanical greenery.",
};

export default function AboutPage() {
  const milestones = [
    {
      icon: Fish,
      title: "150+ Pureline & Botanical Varieties",
      desc: "Carefully curated pureline guppies, show-grade halfmoon bettas, marine specimens, sculptured bonsai, and rare indoor foliage.",
    },
    {
      icon: ShieldCheck,
      title: "14-Day Mandatory Quarantine",
      desc: "Every live fish undergoes comprehensive medical screening and water conditioning before reaching customer aquariums.",
    },
    {
      icon: Truck,
      title: "100% Live Arrival Safe Transit",
      desc: "Specially packaged with medical-grade oxygenated bags, thermal insulation, and gentle handling throughout Dhaka.",
    },
    {
      icon: HeartHandshake,
      title: "Lifetime Hobbyist Guidance",
      desc: "We don't just sell flora and fauna; our expert aquarists provide continuous water parameter and plant care coaching.",
    },
  ];

  const values = [
    {
      badge: "Our Philosophy",
      title: "Biophilic Harmony in Urban Living",
      desc: "In an increasingly concrete urban landscape, we believe surrounding yourself with thriving underwater ecosystems and sculpted living greenery promotes mental serenity, lower stress, and a daily connection with nature.",
    },
    {
      badge: "Breeding Ethics",
      title: "Uncompromising Livestock Care",
      desc: "We vehemently oppose overcrowded and unhygienic breeding mills. All our livestock are fed live baby brine shrimp, high-protein spirulina diets, and housed in clean filtered environments with pristine water parameters.",
    },
    {
      badge: "Botanical Craft",
      title: "Artisanal Living Sculptures",
      desc: "Each bonsai tree in our collection represents years of patient pruning, wiring, and root development by seasoned craftsmen, bringing Japanese and Chinese horticultural tradition into Bangladeshi homes.",
    },
  ];

  return (
    <div className="w-full bg-surface/30 pb-20">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-surface to-background border-b border-border py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft text-primary text-xs font-extrabold uppercase tracking-widest border border-accent/20">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>The Studio Behind The Ecosystem</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-primary tracking-tight max-w-4xl mx-auto leading-tight">
            Nurturing Living Art: From Deep Aquatics to Botanical Canopies
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong>Asmual AquaNature</strong>. We are a team of dedicated aquarists, horticulturists, and biophilic artisans transforming indoor environments into peaceful natural retreats.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/#categories"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-surface text-primary border border-border text-xs sm:text-sm font-bold shadow-xs hover:border-accent transition-all"
            >
              <span>Contact Studio</span>
            </Link>
          </div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      </section>

      {/* 2. STATS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-lg">
          <div className="text-center space-y-1 border-r border-border/60 last:border-none">
            <p className="font-heading font-extrabold text-2xl sm:text-4xl text-primary">150+</p>
            <p className="text-xs text-muted-foreground font-medium">Curated Species</p>
          </div>
          <div className="text-center space-y-1 border-r border-border/60 last:border-none">
            <p className="font-heading font-extrabold text-2xl sm:text-4xl text-accent">5,000+</p>
            <p className="text-xs text-muted-foreground font-medium">Delivered Specimens</p>
          </div>
          <div className="text-center space-y-1 border-r border-border/60 last:border-none">
            <p className="font-heading font-extrabold text-2xl sm:text-4xl text-emerald-600">99.8%</p>
            <p className="text-xs text-muted-foreground font-medium">Live Arrival Rate</p>
          </div>
          <div className="text-center space-y-1">
            <p className="font-heading font-extrabold text-2xl sm:text-4xl text-primary">24/7</p>
            <p className="text-xs text-muted-foreground font-medium">Hobbyist Support</p>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER & STORY NARRATIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-80 sm:h-96 lg:h-[460px] rounded-3xl overflow-hidden border-2 border-border shadow-xl bg-surface">
              <Image
                src="/images/Plants/Bonsai Plant/B.jpg"
                alt="Living Bonsai Art at Asmual AquaNature"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-border shadow-md">
                <p className="font-heading font-bold text-sm text-primary">
                  Masterpiece Bonsai Specimen
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Cultivated over a decade with artisanal root pruning and stoneware ceramics.
                </p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-primary px-4 py-2 rounded-2xl font-heading font-extrabold text-xs shadow-lg hidden sm:flex items-center gap-1.5 border border-primary/20">
              <Award className="w-4 h-4 text-primary" />
              <span>Certified Breeder &amp; Botanist</span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-accent" />
              <span>Our Origins &amp; Journey</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-foreground tracking-tight leading-snug">
              Started by Passionate Enthusiasts, Grown for Conscientious Keepers
            </h2>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Asmual AquaNature was born out of a relentless pursuit of excellence in the aquatic and botanical hobby. What began as a personal fascination with breeding championship-strain guppies and sculpting miniature Ficus trees gradually evolved into one of Bangladesh&apos;s most reliable studio hubs for discerning hobbyists.
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Too often, urban nature lovers face poor livestock health, high mortality rates from improper shipping, and misidentified species. We set out to change this standard. Every fish in our facility is quarantined, fed nutrient-dense live feeds, and monitored for prime immune health. Every plant is acclimated to withstand real indoor conditions.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Zero pesticide greenhouse plants",
                "Pureline genetic lineage verification",
                "Full care guides with every order",
                "Pre-conditioned live aquarium delivery",
                "Transparent water parameter audits",
                "Direct WhatsApp support with aquarists",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR FOUR COMMITMENT PILLARS */}
      <section className="bg-white border-y border-border py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
              The Asmual AquaNature Difference
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Why thousands of aquarists and interior plant lovers across Bangladesh trust our live specimens.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface border border-border hover:border-accent hover:shadow-md transition-all duration-300 space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center text-primary">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 6 SPECIALIZED DEPARTMENTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <TreePine className="w-3.5 h-3.5 text-accent" />
              <span>Studio Divisions</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
              Explore Our Six Core Departments
            </h2>
          </div>
          <Link
            href="/#categories"
            className="text-xs font-bold text-primary hover:text-accent inline-flex items-center gap-1 transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES_META.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              className="group p-5 rounded-2xl bg-white border border-border hover:border-accent hover:shadow-lg transition-all duration-300 flex items-center gap-4 cursor-pointer"
            >
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-surface border border-border group-hover:border-accent">
                <Image
                  src={encodeURI(cat.image)}
                  alt={cat.name}
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-accent">
                    {cat.badge}
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground">
                    {cat.itemCount} items
                  </span>
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground group-hover:text-primary transition-colors truncate">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-muted-foreground line-clamp-1">
                  {cat.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-dark text-white p-8 sm:p-12 overflow-hidden shadow-xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Ready to Enrich Your Living Space?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Whether you are planning a nano planted betta aquarium, a soothing marine reef, or a sculptured bonsai centerpiece, our team is ready to guide you.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-primary" />
              <span>Get in Touch</span>
            </Link>
            <Link
              href="/#categories"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-sm border border-white/20 transition-all"
            >
              <span>Browse Catalog</span>
            </Link>
          </div>

          {/* Decorative Glow */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
