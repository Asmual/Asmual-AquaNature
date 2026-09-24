"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Search,
  User,
  Menu,
  X,
  Fish,
  Leaf,
  LogOut,
  Loader2,
  Home,
  Info,
  PhoneCall,
  ShieldCheck,
  Layers,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import Logo from "./Logo";
import { useSession, signOut } from "@/lib/auth-client";
import { 
  CATEGORY_ITEMS, 
  getSpecimenDisplayTitle,
  getSpecimenScientificName
} from "@/data/categories";

export const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFishOpen, setMobileFishOpen] = useState(true);
  const [mobilePlantsOpen, setMobilePlantsOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  
  // Instant Live Search State
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu/dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setProfileDropdownOpen(false);
        setSearchFocused(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clean 2-word titles, NO arrows, NO slashes
  const fishCategories = [
    { name: "Betta Fish", href: "/category/fighter" },
    { name: "Guppy Fish", href: "/category/guppy" },
    { name: "Marine Fish", href: "/category/marine" },
  ];

  const plantCategories = [
    { name: "Indoor Plants", href: "/category/indoor" },
    { name: "Bonsai Plants", href: "/category/bonsai" },
    { name: "Flower Plants", href: "/category/flowers" },
  ];

  // Instant live search results matching English, Bengali, scientific, or category
  const liveSearchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return CATEGORY_ITEMS.filter((item) => {
      const matchName = item.name.toLowerCase().includes(q);
      const matchBengali = item.bengaliName?.toLowerCase().includes(q) || false;
      const matchScientific = item.scientificName?.toLowerCase().includes(q) || false;
      const matchCategory = item.categoryName.toLowerCase().includes(q);
      const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
      return matchName || matchBengali || matchScientific || matchCategory || matchTags;
    }).slice(0, 6);
  }, [searchQuery]);

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed out successfully");
            setProfileDropdownOpen(false);
            setMobileMenuOpen(false);
            router.push("/");
            router.refresh();
          },
        },
      });
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Failed to sign out";
      toast.error(errorMsg);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const userAvatar = session?.user?.image || "/images/default-avatar.svg";
  const userName = session?.user?.name || "Aqua Member";
  const userEmail = session?.user?.email || "";
  const userRole = (session?.user as { role?: string })?.role || "Member";

  return (
    <header className="w-full sticky top-0 z-40 transition-all duration-200">
      {/* MAIN HEADER (Clean White - NO Top Delivery Bar) */}
      <div
        className={`bg-white transition-all duration-200 border-b border-border ${
          isScrolled ? "shadow-md py-2" : "shadow-xs py-2.5 sm:py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-8">
            {/* Logo */}
            <div className="flex items-center min-w-0 shrink-0">
              <Logo size="md" />
            </div>

            {/* Desktop Instant Live Search Bar */}
            <div 
              ref={searchContainerRef}
              className="hidden lg:flex flex-1 max-w-md xl:max-w-lg relative"
            >
              <div className="w-full flex items-center bg-surface border border-border rounded-xl px-3.5 py-2 focus-within:border-accent focus-within:bg-white focus-within:ring-2 focus-within:ring-accent/20 transition-all duration-200">
                <Search className="w-4 h-4 text-muted-foreground mr-2.5 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchFocused(true);
                  }}
                  onFocus={() => setSearchFocused(true)}
                  placeholder="Search species (e.g. Monstera, Betta, Water Lily)..."
                  className="w-full bg-transparent text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-muted-foreground hover:text-foreground text-xs px-1.5"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Instant Floating Search Results Dropdown - Direct Navigation to /item/[id] */}
              {searchFocused && searchQuery.trim() && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-border shadow-2xl overflow-hidden z-50 p-2 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center justify-between border-b border-border/60">
                    <span>Search Results ({liveSearchResults.length})</span>
                    <span className="text-accent font-semibold">Click to open profile</span>
                  </div>

                  {liveSearchResults.length > 0 ? (
                    <div className="divide-y divide-border/40 max-h-96 overflow-y-auto">
                      {liveSearchResults.map((item) => {
                        const title = getSpecimenDisplayTitle(item);
                        const sci = getSpecimenScientificName(item);
                        return (
                          <Link
                            key={item.id}
                            href={`/item/${item.id}`}
                            onClick={() => {
                              setSearchFocused(false);
                              setSearchQuery("");
                            }}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface transition-colors cursor-pointer group"
                          >
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-border/80 shrink-0 bg-surface">
                              <Image
                                src={encodeURI(item.image)}
                                alt={item.name}
                                fill
                                sizes="48px"
                                className="object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <h4 className="text-xs font-bold text-foreground group-hover:text-primary truncate">
                                  {title.fullTitle}
                                </h4>
                                <span className="text-[9.5px] px-1.5 py-0.2 rounded-md bg-accent-soft text-primary font-bold shrink-0">
                                  {item.categoryName}
                                </span>
                              </div>
                              <p className="text-[11px] italic font-serif text-muted-foreground truncate">
                                {sci}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-xs text-muted-foreground">
                      No specimens found matching &quot;{searchQuery}&quot;.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Icons & User Controls (NO CART, NO WISHLIST) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Knowledge Hub Badge */}
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-soft text-primary border border-accent/30 text-xs font-bold">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>Encyclopedia</span>
              </div>

              {/* User Account / Avatar Dropdown */}
              {isPending ? (
                <div className="hidden sm:block w-8 h-8 rounded-full bg-surface border border-border animate-pulse shrink-0" />
              ) : session?.user ? (
                <div className="hidden sm:block relative" ref={dropdownRef}>
                  <button
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="flex items-center gap-2 p-1 pr-2 rounded-full hover:bg-surface border border-transparent hover:border-border transition-all duration-200 cursor-pointer group"
                    aria-label="Account menu"
                  >
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-accent shadow-sm shrink-0 bg-primary-dark">
                      <Image
                        src={userAvatar}
                        alt={userName}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <span className="hidden xl:inline text-xs font-bold text-primary max-w-[85px] truncate">
                      {userName.split(" ")[0]}
                    </span>
                  </button>

                  {/* Profile Dropdown Menu */}
                  {profileDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-60 z-50 rounded-2xl bg-white border border-border shadow-xl p-2 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                      {/* User Header */}
                      <div className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-border/60">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent shrink-0 bg-primary-dark">
                          <Image
                            src={userAvatar}
                            alt={userName}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-primary truncate leading-tight">
                            {userName}
                          </p>
                          <p className="text-[11px] text-muted-foreground truncate mt-0.5">
                            {userEmail}
                          </p>
                          <span className="inline-block mt-1 px-2 py-0.2 rounded-full text-[9px] font-extrabold uppercase bg-accent-soft text-primary">
                            {userRole}
                          </span>
                        </div>
                      </div>

                      {/* Navigation Links */}
                      <div className="py-1.5 space-y-0.5">
                        <Link
                          href="/profile"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-foreground hover:bg-surface hover:text-primary transition-colors"
                        >
                          <User className="w-4 h-4 text-accent" />
                          <span>My Profile</span>
                        </Link>

                        <Link
                          href="/#categories"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-foreground hover:bg-surface hover:text-primary transition-colors"
                        >
                          <Layers className="w-4 h-4 text-primary" />
                          <span>Explore All Categories</span>
                        </Link>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-border my-1" />

                      {/* Logout Button */}
                      <button
                        type="button"
                        onClick={handleSignOut}
                        disabled={isLoggingOut}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-danger hover:bg-red-50 transition-colors disabled:opacity-60 cursor-pointer"
                      >
                        {isLoggingOut ? (
                          <Loader2 className="w-4 h-4 animate-spin text-danger" />
                        ) : (
                          <LogOut className="w-4 h-4" />
                        )}
                        <span>{isLoggingOut ? "Signing out..." : "Sign Out"}</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-white text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-200"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </Link>
              )}

              {/* HAMBURGER MENU BUTTON FOR MOBILE & TABLET (< 1024px) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-primary text-white hover:bg-primary-dark active:scale-95 shadow-xs transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </div>

          {/* DESKTOP NAVIGATION LINKS: NO ARROWS, NO SLASHES, CLEAN 1-2 WORD TITLES */}
          <nav className="hidden lg:flex items-center justify-between pt-3 mt-2 border-t border-border/60">
            <ul className="flex items-center gap-1.5 xl:gap-2">
              <li>
                <Link
                  href="/"
                  className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-primary bg-accent-soft hover:bg-accent hover:text-primary transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Home className="w-4 h-4 text-primary" />
                  <span>Home</span>
                </Link>
              </li>

              {/* Fishes Dropdown - with ChevronDown indicator */}
              <li
                className="relative"
                onMouseEnter={() => setActiveDropdown("fish")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-1.5 cursor-pointer">
                  <Fish className="w-4 h-4 text-primary" />
                  <span>Fishes</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                      activeDropdown === "fish" ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "fish" && (
                  <div className="absolute left-0 top-full pt-2 w-52 z-50 animate-in fade-in-50 slide-in-from-top-1 duration-200">
                    <div className="bg-white rounded-2xl border border-border shadow-xl p-2 space-y-1">
                      {fishCategories.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block px-3.5 py-2 rounded-xl text-sm font-bold text-primary hover:bg-surface hover:text-accent transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* Plants Dropdown - with ChevronDown indicator */}
              <li
                className="relative"
                onMouseEnter={() => setActiveDropdown("plants")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-1.5 cursor-pointer">
                  <Leaf className="w-4 h-4 text-accent" />
                  <span>Plants</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                      activeDropdown === "plants" ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "plants" && (
                  <div className="absolute left-0 top-full pt-2 w-52 z-50 animate-in fade-in-50 slide-in-from-top-1 duration-200">
                    <div className="bg-white rounded-2xl border border-border shadow-xl p-2 space-y-1">
                      {plantCategories.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block px-3.5 py-2 rounded-xl text-sm font-bold text-primary hover:bg-surface hover:text-accent transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/#categories"
                  className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Layers className="w-4 h-4 text-muted-foreground" />
                  <span>Categories</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Info className="w-4 h-4 text-muted-foreground" />
                  <span>About Us</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-1.5"
                >
                  <PhoneCall className="w-4 h-4 text-muted-foreground" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>

            <div className="hidden xl:flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Botanical &amp; Aquatic Encyclopedia</span>
            </div>
          </nav>
        </div>
      </div>

      {/* FULLY RESPONSIVE MOBILE DRAWER: NO ARROWS, NO SLASHES */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 right-0 bottom-0 w-[88%] max-w-sm sm:max-w-md bg-white z-[9999] lg:hidden shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-border flex items-center justify-between bg-surface/80">
          <Logo size="sm" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-full text-foreground hover:text-primary hover:bg-white border border-border transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Drawer Content */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {/* 1. Single-Line User State (Compact, No Large Section) */}
          {session?.user ? (
            <div className="space-y-2 pb-2.5 border-b border-border/70">
              {/* Single Line User Info */}
              <Link
                href="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between gap-2.5 px-3 py-2 bg-surface hover:bg-surface-hover rounded-xl border border-border/70 transition-colors group"
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-accent shrink-0 bg-primary-dark">
                    <Image
                      src={userAvatar}
                      alt={userName}
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                    {userName}
                  </p>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-accent-soft text-primary font-bold uppercase tracking-wider shrink-0">
                  {userRole}
                </span>
              </Link>

              {/* Logout Button directly below User Name */}
              <button
                type="button"
                onClick={handleSignOut}
                disabled={isLoggingOut}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-red-50 hover:bg-red-100 text-danger border border-red-200/80 text-xs font-semibold transition-colors disabled:opacity-50 cursor-pointer"
              >
                {isLoggingOut ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-danger" />
                ) : (
                  <LogOut className="w-3.5 h-3.5" />
                )}
                <span>{isLoggingOut ? "Signing out..." : "Sign Out"}</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-2 px-3 py-2 bg-surface rounded-xl border border-border/70">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-7 h-7 rounded-full bg-accent-soft flex items-center justify-center text-primary shrink-0">
                  <User className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-foreground truncate">
                  Guest
                </span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-bold transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2.5 py-1.5 rounded-lg border border-border hover:bg-white text-foreground text-xs font-semibold transition-colors"
                >
                  Register
                </Link>
              </div>
            </div>
          )}

          {/* 2. NAVIGATION LINKS LIST (Directly below user state) */}
          <div className="space-y-1.5 pt-1">
            {/* 1. Home Link (NO arrow) */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-bold text-primary bg-accent-soft/60 hover:bg-accent-soft transition-colors"
            >
              <Home className="w-4 h-4 text-primary" />
              <span>Home</span>
            </Link>

            {/* 2. Fishes Accordion - with ChevronDown arrow indicator */}
            <div className="rounded-xl border border-border/70 overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => setMobileFishOpen(!mobileFishOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-foreground hover:bg-surface transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Fish className="w-4 h-4 text-primary" />
                  <span>Fishes</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                    mobileFishOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              {mobileFishOpen && (
                <div className="p-2 pt-0 space-y-1 bg-surface/30 border-t border-border/40">
                  {fishCategories.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded-lg bg-white border border-border/60 hover:border-accent hover:bg-accent-soft/30 transition-all text-xs font-bold text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Plants Accordion - with ChevronDown arrow indicator */}
            <div className="rounded-xl border border-border/70 overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => setMobilePlantsOpen(!mobilePlantsOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-foreground hover:bg-surface transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Leaf className="w-4 h-4 text-accent" />
                  <span>Plants</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                    mobilePlantsOpen ? "rotate-180 text-accent" : ""
                  }`}
                />
              </button>

              {mobilePlantsOpen && (
                <div className="p-2 pt-0 space-y-1 bg-surface/30 border-t border-border/40">
                  {plantCategories.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded-lg bg-white border border-border/60 hover:border-accent hover:bg-accent-soft/30 transition-all text-xs font-bold text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 4. All Categories (NO arrow) */}
            <Link
              href="/#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-bold text-foreground hover:bg-surface transition-colors"
            >
              <Layers className="w-4 h-4 text-muted-foreground" />
              <span>Categories</span>
            </Link>

            {/* 5. About Us (NO arrow) */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-bold text-foreground hover:bg-surface transition-colors"
            >
              <Info className="w-4 h-4 text-muted-foreground" />
              <span>About Us</span>
            </Link>

            {/* 6. Contact (NO arrow) */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-bold text-foreground hover:bg-surface transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-muted-foreground" />
              <span>Contact</span>
            </Link>
          </div>

          {/* 3. Quick Search */}
          <div className="pt-2 border-t border-border/60 relative">
            <div className="w-full flex items-center bg-surface border border-border rounded-xl px-3 py-2 focus-within:border-accent focus-within:bg-white focus-within:ring-2 focus-within:ring-accent/20 transition-all">
              <Search className="w-3.5 h-3.5 text-muted-foreground mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search species..."
                className="w-full bg-transparent text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-muted-foreground hover:text-foreground px-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Instant Search Results in Mobile Drawer */}
            {searchQuery.trim() && (
              <div className="mt-2 bg-white rounded-xl border border-border shadow-lg p-2 space-y-1">
                <div className="px-2 py-1 text-[10px] font-bold text-muted-foreground uppercase flex items-center justify-between">
                  <span>Results ({liveSearchResults.length})</span>
                  <span className="text-accent font-semibold">Open</span>
                </div>
                {liveSearchResults.length > 0 ? (
                  liveSearchResults.map((item) => {
                    const title = getSpecimenDisplayTitle(item);
                    const sci = getSpecimenScientificName(item);
                    return (
                      <Link
                        key={item.id}
                        href={`/item/${item.id}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface transition-colors cursor-pointer"
                      >
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-border bg-surface">
                          <Image
                            src={encodeURI(item.image)}
                            alt={item.name}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-foreground truncate">
                            {title.fullTitle}
                          </p>
                          <p className="text-[10px] italic font-serif text-muted-foreground truncate">
                            {sci}
                          </p>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-muted-foreground p-2">No species found.</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Drawer Footer Badge */}
        <div className="p-3 border-t border-border bg-surface text-center">
          <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="font-medium">Botanical &amp; Aquatic Encyclopedia</span>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
