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
  Sparkles,
  ChevronDown,
  Fish,
  Leaf,
  LogOut,
  Loader2,
  Home,
  Info,
  PhoneCall,
  ShieldCheck,
  ChevronRight,
  Layers,
  BookOpen,
} from "lucide-react";
import Logo from "./Logo";
import { useSession, signOut } from "@/lib/auth-client";
import { 
  CATEGORY_ITEMS, 
  TCategoryItem, 
  getSpecimenDisplayTitle,
  getSpecimenScientificName
} from "@/data/categories";
import ItemDetailModal from "@/components/category/ItemDetailModal";

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
  const [selectedSpecimen, setSelectedSpecimen] = useState<TCategoryItem | null>(null);

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

  // Clean category lists - ONLY titles, NO brackets, NO paragraphs
  const fishCategories = [
    { name: "Fighter / Betta", href: "/category/fighter" },
    { name: "Pureline Guppies", href: "/category/guppy" },
    { name: "SeaWater Fish", href: "/category/marine" },
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
    <>
      <header className="w-full sticky top-0 z-40 transition-all duration-200">
        {/* MAIN HEADER (Clean White with Soft Border and Shadow - NO Top Delivery Bar) */}
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

                {/* Instant Floating Search Results Dropdown */}
                {searchFocused && searchQuery.trim() && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-border shadow-2xl overflow-hidden z-50 p-2 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                    <div className="px-3 py-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center justify-between border-b border-border/60">
                      <span>Search Results ({liveSearchResults.length})</span>
                      <span className="text-accent font-semibold">Click to view guide</span>
                    </div>

                    {liveSearchResults.length > 0 ? (
                      <div className="divide-y divide-border/40 max-h-96 overflow-y-auto">
                        {liveSearchResults.map((item) => {
                          const title = getSpecimenDisplayTitle(item);
                          const sci = getSpecimenScientificName(item);
                          return (
                            <div
                              key={item.id}
                              onClick={() => {
                                setSelectedSpecimen(item);
                                setSearchFocused(false);
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
                            </div>
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
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                          profileDropdownOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
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

                {/* ============================================================== */}
                {/* HAMBURGER MENU BUTTON (ALWAYS VISIBLE & PROMINENT ON < 1024px) */}
                {/* ============================================================== */}
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

            {/* DESKTOP NAVIGATION LINKS (Visible only on 1024px+ screens, NO Bengali, NO Brackets) */}
            <nav className="hidden lg:flex items-center justify-between pt-3 mt-2 border-t border-border/60">
              <ul className="flex items-center gap-1 xl:gap-2">
                <li>
                  <Link
                    href="/"
                    className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-primary bg-accent-soft hover:bg-accent hover:text-primary transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <Home className="w-4 h-4 text-primary" />
                    <span>Home</span>
                  </Link>
                </li>

                {/* Fishes Dropdown - ONLY Titles, NO Brackets */}
                <li
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("fish")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-1 cursor-pointer">
                    <Fish className="w-4 h-4 text-primary" />
                    <span>Fishes</span>
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>

                  {activeDropdown === "fish" && (
                    <div className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in-50 slide-in-from-top-1 duration-200">
                      <div className="bg-white rounded-2xl border border-border shadow-xl p-2 space-y-1">
                        {fishCategories.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-primary hover:bg-surface hover:text-accent transition-colors duration-200"
                          >
                            <span>{item.name}</span>
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>

                {/* Plants Dropdown - ONLY Titles, NO Brackets */}
                <li
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("plants")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-1 cursor-pointer">
                    <Leaf className="w-4 h-4 text-accent" />
                    <span>Plants</span>
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>

                  {activeDropdown === "plants" && (
                    <div className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in-50 slide-in-from-top-1 duration-200">
                      <div className="bg-white rounded-2xl border border-border shadow-xl p-2 space-y-1">
                        {plantCategories.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-primary hover:bg-surface hover:text-accent transition-colors duration-200"
                          >
                            <span>{item.name}</span>
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
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
                    <span>All Categories</span>
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
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Botanical &amp; Aquatic Encyclopedia</span>
              </div>
            </nav>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FULLY RESPONSIVE MOBILE & TABLET DRAWER WITH ALL MENUS (Z-INDEX 9999) */}
        {/* ========================================================================= */}
        {/* Backdrop Overlay */}
        <div
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] lg:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Sliding Drawer Container */}
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
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {/* Quick Instant Search inside Mobile Drawer */}
            <div className="relative">
              <div className="w-full flex items-center bg-surface border border-border rounded-xl px-3 py-2.5 focus-within:border-accent focus-within:bg-white focus-within:ring-2 focus-within:ring-accent/20 transition-all">
                <Search className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search species by name..."
                  className="w-full bg-transparent text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
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
                    <span className="text-accent">Click to view</span>
                  </div>
                  {liveSearchResults.length > 0 ? (
                    liveSearchResults.map((item) => {
                      const title = getSpecimenDisplayTitle(item);
                      const sci = getSpecimenScientificName(item);
                      return (
                        <div
                          key={item.id}
                          onClick={() => {
                            setSelectedSpecimen(item);
                            setMobileMenuOpen(false);
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
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-xs text-muted-foreground p-2">No species found.</p>
                  )}
                </div>
              )}
            </div>

            {/* User Account State Card */}
            {session?.user ? (
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-3.5 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent shrink-0 bg-primary-dark shadow-sm">
                    <Image
                      src={userAvatar}
                      alt={userName}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-white truncate">{userName}</p>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-accent text-primary shrink-0">
                        {userRole}
                      </span>
                    </div>
                    <p className="text-xs text-white/70 truncate mt-0.5">{userEmail}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/15">
                  <Link
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-colors text-center"
                  >
                    <User className="w-3.5 h-3.5 text-accent" />
                    <span>My Profile</span>
                  </Link>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    disabled={isLoggingOut}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-100 hover:text-white text-xs font-semibold backdrop-blur-sm transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {isLoggingOut ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <LogOut className="w-3.5 h-3.5" />
                    )}
                    <span>{isLoggingOut ? "Exiting..." : "Sign Out"}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-surface border border-border rounded-2xl p-3.5 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-accent-soft flex items-center justify-center text-primary shrink-0">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary">Member Community</p>
                    <p className="text-[11px] text-muted-foreground">Sign in for personalized bookmarks</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold shadow-sm transition-colors text-center"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Sign In</span>
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-primary/30 hover:border-accent text-primary text-xs font-bold shadow-sm transition-colors text-center"
                  >
                    <span>Register</span>
                  </Link>
                </div>
              </div>
            )}

            {/* NAVIGATION LINKS LIST - ONLY TITLES, NO SHORT PARAGRAPHS, NO BRACKETS */}
            <div className="space-y-1.5 pt-1">
              {/* 1. Home Link */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-primary bg-accent-soft/50 hover:bg-accent-soft transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Home className="w-4 h-4 text-primary" />
                  <span>Home</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </Link>

              {/* 2. Fishes Accordion - ONLY Titles */}
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
                  <div className="flex items-center gap-1.5">
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                        mobileFishOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </div>
                </button>

                {mobileFishOpen && (
                  <div className="p-2 pt-0 space-y-1 bg-surface/30 border-t border-border/40">
                    {fishCategories.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-white border border-border/60 hover:border-accent hover:bg-accent-soft/30 transition-all text-xs font-bold text-primary"
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Plants Accordion - ONLY Titles */}
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
                  <div className="flex items-center gap-1.5">
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                        mobilePlantsOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </div>
                </button>

                {mobilePlantsOpen && (
                  <div className="p-2 pt-0 space-y-1 bg-surface/30 border-t border-border/40">
                    {plantCategories.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-white border border-border/60 hover:border-accent hover:bg-accent-soft/30 transition-all text-xs font-bold text-primary"
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. All Categories Catalog */}
              <Link
                href="/#categories"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-foreground hover:bg-surface transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-muted-foreground" />
                  <span>All Categories</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </Link>

              {/* 5. About Us */}
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-foreground hover:bg-surface transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Info className="w-4 h-4 text-muted-foreground" />
                  <span>About Us</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </Link>

              {/* 6. Contact */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-foreground hover:bg-surface transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-muted-foreground" />
                  <span>Contact</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </Link>
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

      {/* Global Interactive Specimen Modal (Triggered by Live Search or selection) */}
      {selectedSpecimen && (
        <ItemDetailModal
          item={selectedSpecimen}
          onClose={() => setSelectedSpecimen(null)}
        />
      )}
    </>
  );
};

export default Navbar;
