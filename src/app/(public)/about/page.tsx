"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  PhoneCall,
  Heart,
  Droplets,
  Sun,
  Eye,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES_META } from "@/data/categories";

export default function AboutPage() {
  const [activePillar, setActivePillar] = useState(0);

  const stats = [
    { value: "150+", label: "Pureline & Botanical Strains", icon: Fish, color: "text-primary" },
    { value: "5,000+", label: "Thriving Specimens Delivered", icon: Heart, color: "text-accent" },
    { value: "99.8%", label: "Live Arrival Success Rate", icon: ShieldCheck, color: "text-emerald-600" },
    { value: "24/7", label: "Lifetime Hobbyist Coaching", icon: Users, color: "text-primary" },
  ];

  const pillars = [
    {
      id: "quarantine",
      icon: ShieldCheck,
      title: "14-Day Medical Quarantine",
      tagline: "Rigorous Health Audits & Acclimation",
      desc: "Every pureline fish, from halfmoon bettas to rare marine tangs, undergoes a strict 14-day preventive quarantine. We treat for parasites, test water chemistry daily, and condition livestock with live baby brine shrimp and spirulina before they ever leave our studio tanks.",
      image: "/images/Fish/Fighter/Alien Betta Fish.jpg",
      points: [
        "Zero cross-contamination facility protocols",
        "TDS, pH, and ammonia monitored 3x daily",
        "Certified disease-free & acclimated before dispatch",
      ],
    },
    {
      id: "botanical",
      icon: Leaf,
      title: "Pesticide-Free Living Flora",
      tagline: "Acclimatized for Real Apartment Living",
      desc: "Our indoor plants and aquatic water lilies are nurtured in balanced bio-environments without harsh synthetic glosses or root-choking chemical fertilizers. They are conditioned specifically to thrive in indoor ambient lighting with minimal fuss.",
      image: "/images/Plants/Indoor Plants/Monstera.jpg",
      points: [
        "Porous aeration potting soils with perlite & coco peat",
        "Wiped with organic neem oil for natural pest defense",
        "Includes tailored sunlight and watering guides",
      ],
    },
    {
      id: "bonsai",
      icon: TreePine,
      title: "Artisanal Living Bonsai Craft",
      tagline: "Decades of Sculpted Japanese & Chinese Art",
      desc: "Bonsai is not simply a potted tree—it is sculpture in living motion. Seasoned bonsai craftsmen patiently guide the branch structure, root flare (Nebari), and deadwood styling (Jin) using high-fired ceramic stoneware pots.",
      image: "/images/Plants/Bonsai Plant/B.jpg",
      points: [
        "Akadama and volcanic lava rock root substrates",
        "Hand-wired branches for architectural symmetry",
        "Comes with root trimming & pruning instructions",
      ],
    },
    {
      id: "delivery",
      icon: Truck,
      title: "100% Live Arrival Packaging",
      tagline: "Medical-Grade Oxygenated Transport",
      desc: "Shipping live organisms requires scientific precision. We double-bag all livestock with medical-grade oxygen, use insulated styrofoam crates, and maintain direct temperature tracking to ensure zero stress during transit across Bangladesh.",
      image: "/images/Fish/Guppy/24k Gold.jpg",
      points: [
        "Insulated thermal barrier boxes",
        "Pure oxygen inflation for up to 48 hours transit",
        "Same-day hand delivery across Dhaka metropolis",
      ],
    },
  ];

  const coreValues = [
    {
      badge: "Biophilic Wellness",
      title: "Serenity in Concrete Living",
      desc: "We bring the tranquil sights and sounds of nature directly into modern apartments to relieve daily urban fatigue.",
      icon: Droplets,
    },
    {
      badge: "Ethical Breeding",
      title: "Conscientious Hobbyist Standards",
      desc: "We prioritize specimen health over volume. No crowded glass jars, no synthetic dyes, and no hormone-doped strains.",
      icon: Award,
    },
    {
      badge: "Community First",
      title: "Lifelong Partnership",
      desc: "Your journey doesn't end at checkout. Our aquarists and botanists are on call via WhatsApp to assist whenever you need care advice.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="w-full bg-surface/30 pb-20 overflow-hidden">
      {/* 1. ANIMATED HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-surface to-background border-b border-border py-16 sm:py-24">
        {/* Animated Background Ambient Glows */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-accent/20 rounded-full blur-3xl pointer-events-none -z-10"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-primary/15 rounded-full blur-3xl pointer-events-none -z-10"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-soft text-primary text-xs font-extrabold uppercase tracking-widest border border-accent/30 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent animate-spin-slow" />
            <span>The Story &amp; Philosophy Behind Asmual AquaNature</span>
          </motion.div>

          {/* Heading with Entrance Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-primary tracking-tight max-w-4xl mx-auto leading-tight"
          >
            Nurturing Living Art: From Deep Aquatics to Botanical Canopies
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Welcome to <strong>Asmual AquaNature</strong>. We are Dhaka&apos;s devoted sanctuary for champion-grade pureline fishes, sculptured living bonsai trees, and acclimatized indoor greenery.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-3"
          >
            <Link
              href="/#categories"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Explore The 6 Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-surface text-primary border border-border text-xs sm:text-sm font-bold shadow-xs hover:border-accent hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <PhoneCall className="w-4 h-4 text-accent" />
              <span>Contact Our Studio</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS OVERVIEW CARDS (Animated on Entrance) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-xl">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center space-y-1.5 p-2 rounded-2xl hover:bg-surface/50 transition-colors border-r border-border/60 last:border-none"
              >
                <div className="w-10 h-10 rounded-full bg-accent-soft mx-auto flex items-center justify-center mb-1">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className={`font-heading font-extrabold text-2xl sm:text-4xl ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-[11px] sm:text-xs text-muted-foreground font-medium leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. FOUNDER & ETHOS STORY NARRATIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Interactive Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full h-80 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden border-2 border-border shadow-2xl bg-surface group">
              <Image
                src="/images/Plants/Bonsai Plant/B.jpg"
                alt="Living Bonsai Art at Asmual AquaNature"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Card Glass Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-border shadow-lg space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-accent">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Masterpiece Living Bonsai</span>
                </div>
                <p className="font-heading font-bold text-sm sm:text-base text-primary">
                  12-Year-Old Trained Ficus Bonsai
                </p>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  Cultivated with traditional root wiring in an artisanal glazed stoneware container.
                </p>
              </div>
            </div>

            {/* Floating Top Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-accent text-primary px-4 py-2 rounded-2xl font-heading font-extrabold text-xs shadow-xl hidden sm:flex items-center gap-2 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Dhaka&apos;s Premium Bio-Studio</span>
            </motion.div>
          </motion.div>

          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-accent" />
              <span>Origins &amp; Passion</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-foreground tracking-tight leading-snug">
              Built by Lifelong Aquarists, Refined for Modern Living Spaces
            </h2>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>Asmual AquaNature</strong> was born out of deep reverence for living ecosystems. What began over a decade ago as a hobbyist&apos;s quest to breed competition-grade pureline guppies and sculpt miniature forest canopies evolved into Dhaka&apos;s trusted biological design studio.
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We recognized a severe challenge in Bangladesh&apos;s pet and plant market: poor hygiene, high mortality from rushed transit, and zero follow-up education. We established Asmual AquaNature to be different. Every specimen is properly quarantined, fed live nutritious diets, and conditioned to thrive in real home environments.
            </p>

            {/* Checklist with Hover Micro-interactions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Zero pesticide nursery practices",
                "Certified pureline genetic lineage",
                "Free tailored care and water cards",
                "Hand-delivered shock-free in Dhaka",
                "Daily water parameter monitoring",
                "Continuous WhatsApp hobbyist support",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-semibold text-foreground p-2 rounded-xl bg-white border border-border/70 hover:border-accent shadow-2xs transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. INTERACTIVE 4 COMMITMENT PILLARS (Interactive Tab Switcher) */}
      <section className="bg-white border-y border-border py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>Standard of Care</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
              Our 4 Pillars of Uncompromising Quality
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Click through our quality protocols to discover how we maintain healthy live arrivals.
            </p>
          </div>

          {/* Interactive Pillar Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activePillar === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer space-y-2 ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-lg scale-102"
                      : "bg-surface text-foreground hover:bg-white hover:border-accent border-border"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isActive ? "bg-accent text-primary" : "bg-white border border-border text-primary"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs sm:text-sm leading-tight">
                      {pillar.title}
                    </h3>
                    <p className={`text-[11px] line-clamp-1 mt-0.5 ${isActive ? "text-white/80" : "text-muted-foreground"}`}>
                      {pillar.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detailed View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-surface rounded-3xl border border-border p-6 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  Protocol #{activePillar + 1}
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-primary">
                  {pillars[activePillar].title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {pillars[activePillar].desc}
                </p>

                <div className="space-y-2 pt-2">
                  {pillars[activePillar].points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-foreground">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-border shadow-md">
                <Image
                  src={pillars[activePillar].image}
                  alt={pillars[activePillar].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 5. 6 CORE DEPARTMENTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <TreePine className="w-3.5 h-3.5 text-accent" />
              <span>Studio Divisions</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
              Explore Our Six Curated Departments
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Every department features its own dedicated single-page showcase.
            </p>
          </div>
          <Link
            href="/#categories"
            className="text-xs font-bold text-primary hover:text-accent inline-flex items-center gap-1 transition-colors"
          >
            <span>View All Departments</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES_META.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <Link
                href={`/category/${cat.id}`}
                className="group p-5 rounded-3xl bg-white border border-border hover:border-accent hover:shadow-xl transition-all duration-300 flex items-center gap-4 cursor-pointer block h-full shadow-xs"
              >
                <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 bg-surface border border-border group-hover:border-accent shadow-xs">
                  <Image
                    src={encodeURI(cat.image)}
                    alt={cat.name}
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-115 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase text-accent bg-accent-soft px-2 py-0.5 rounded-full">
                      {cat.badge}
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground">
                      {cat.itemCount} items
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors truncate">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground line-clamp-1">
                    {cat.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER (Interactive Glow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-dark text-white p-8 sm:p-14 overflow-hidden shadow-2xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Begin Your Living Journey</span>
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Ready to Enrich Your Living Space?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
              Whether you are planning a nano planted betta tank, a marine reef aquarium, or a sculptured bonsai centerpiece, our team is ready to guide you.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 relative z-10">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-xs sm:text-sm shadow-lg transition-all inline-flex items-center gap-2 hover:scale-105"
            >
              <PhoneCall className="w-4 h-4 text-primary" />
              <span>Get In Touch</span>
            </Link>
            <Link
              href="/#categories"
              className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-sm border border-white/25 transition-all hover:scale-105"
            >
              <span>Explore Collections</span>
            </Link>
          </div>

          {/* Decorative Glowing Orbs */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-accent/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </section>
    </div>
  );
}
