"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  Phone,
  Clock,
  Sparkles,
  ChevronDown,
  Fish,
  Leaf,
  Flame,
  LogOut,
  Loader2,
  Home,
  Info,
  PhoneCall,
  Package,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import Logo from "./Logo";
import { useSession, signOut } from "@/lib/auth-client";

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
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
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

  const fishCategories = [
    { name: "Fighter / Betta", desc: "Alien, Dumbo, Red Dragon, Koi Bettas", href: "#categories" },
    { name: "Guppy Collection", desc: "24k Gold, Albino Blue Topaz, Moscow", href: "#categories" },
    { name: "Mix Freshwater", desc: "Tetras, Mollies, Angels & Community Fish", href: "#categories" },
    { name: "SeaWater Fish", desc: "Marine clownfishes, tangs & reef species", href: "#categories" },
  ];

  const plantCategories = [
    { name: "Indoor Plants", desc: "Monstera, Peace Lily, Snake Plants, ZZ", href: "#categories" },
    { name: "Bonsai Plants", desc: "Living miniature trees and dwarf figs", href: "#categories" },
    { name: "Flower Plants", desc: "Water lilies, roses, seasonal bloomers", href: "#categories" },
  ];

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged out successfully");
            setProfileDropdownOpen(false);
            setMobileMenuOpen(false);
            router.push("/");
            router.refresh();
          },
        },
      });
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Failed to log out";
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
    <header className="w-full sticky top-0 z-50 transition-all duration-200">
      {/* 1. TOP ANNOUNCEMENT BAR (Deep Navy-Teal #0B4A6F) */}
      <div className="bg-primary text-white text-xs font-medium py-2 px-3 sm:px-6 lg:px-8 border-b border-primary-dark">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-accent text-primary uppercase tracking-wide shrink-0">
              Notice
            </span>
            <span className="text-white/90 text-[11px] sm:text-xs">
              Free Delivery across Dhaka on live fish & plants orders over ৳1,500!
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-white/85 text-[11px] sm:text-xs">
            <a
              href="tel:+8801700000000"
              className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>+880 1700-000000</span>
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <div className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>9:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Clean White with Soft Border and Shadow) */}
      <div
        className={`bg-white transition-all duration-200 border-b border-border ${
          isScrolled ? "shadow-md py-2" : "shadow-sm py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop / Tablet Search Bar */}
            <div className="hidden md:flex flex-1 max-w-sm lg:max-w-lg relative">
              <div className="w-full flex items-center bg-surface border border-border rounded-[10px] px-3.5 py-2 focus-within:border-accent focus-within:bg-white focus-within:ring-2 focus-within:ring-accent/20 transition-all duration-200">
                <Search className="w-4 h-4 text-muted-foreground mr-2.5 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Betta, Guppy, Bonsai, Indoor Plants..."
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-muted-foreground hover:text-foreground text-xs px-1"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Action Icons & User Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <button
                aria-label="Wishlist"
                className="relative p-2 sm:p-2.5 rounded-full text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 cursor-pointer"
              >
                <Heart className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-accent text-primary text-[10px] font-bold flex items-center justify-center">
                  0
                </span>
              </button>

              <button
                aria-label="Cart"
                className="relative p-2 sm:p-2.5 rounded-full text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-2 cursor-pointer"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-danger text-white text-[10px] font-bold flex items-center justify-center">
                    0
                  </span>
                </div>
                <span className="hidden xl:inline text-xs font-semibold text-primary">
                  ৳0.00
                </span>
              </button>

              {/* User Account / Avatar Dropdown for Desktop */}
              {isPending ? (
                <div className="w-8 h-8 rounded-full bg-surface border border-border animate-pulse shrink-0" />
              ) : session?.user ? (
                <div className="relative" ref={dropdownRef}>
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
                    <div className="absolute right-0 top-full mt-2 w-64 z-50 rounded-2xl bg-white border border-border shadow-xl p-2 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                      {/* User Header */}
                      <div className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-border/60">
                        <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-accent shrink-0 bg-primary-dark">
                          <Image
                            src={userAvatar}
                            alt={userName}
                            fill
                            sizes="44px"
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
                          <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-accent-soft text-primary border border-accent/30">
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
                          <span>View Profile</span>
                        </Link>

                        <Link
                          href="#orders"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-foreground hover:bg-surface hover:text-primary transition-colors"
                        >
                          <ShoppingBag className="w-4 h-4 text-primary" />
                          <span>My Orders</span>
                        </Link>

                        <Link
                          href="#wishlist"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-foreground hover:bg-surface hover:text-primary transition-colors"
                        >
                          <Heart className="w-4 h-4 text-danger" />
                          <span>Saved Wishlist</span>
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
                        <span>{isLoggingOut ? "Logging out..." : "Log Out"}</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </Link>
              )}

              {/* Hamburger Menu Toggle Button (Visible on Mobile & Tablet: <1024px) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                className="lg:hidden p-2 sm:p-2.5 rounded-xl text-primary bg-surface hover:bg-accent-soft border border-border transition-colors duration-200 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* 3. DESKTOP NAVIGATION LINKS (Visible only on 1024px+ screens) */}
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

              {/* Fishes Dropdown */}
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
                  <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in-50 slide-in-from-top-1 duration-200">
                    <div className="bg-white rounded-xl border border-border shadow-lg p-3 space-y-1">
                      {fishCategories.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block p-2.5 rounded-lg hover:bg-surface transition-colors duration-200"
                        >
                          <div className="text-sm font-semibold text-primary">
                            {item.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* Plants Dropdown */}
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
                  <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in-50 slide-in-from-top-1 duration-200">
                    <div className="bg-white rounded-xl border border-border shadow-lg p-3 space-y-1">
                      {plantCategories.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block p-2.5 rounded-lg hover:bg-surface transition-colors duration-200"
                        >
                          <div className="text-sm font-semibold text-primary">
                            {item.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="#categories"
                  className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Package className="w-4 h-4 text-muted-foreground" />
                  <span>Aquarium & Gear</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#deals"
                  className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Flame className="w-4 h-4 text-danger" />
                  <span>Hot Deals</span>
                  <span className="bg-danger text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    Sale
                  </span>
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
              <span>100% Healthy Live Arrival Guarantee</span>
            </div>
          </nav>
        </div>
      </div>

      {/* 4. COMPREHENSIVE RESPONSIVE MOBILE & TABLET HAMBURGER DRAWER */}
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Sliding Drawer Container */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[90%] max-w-sm sm:max-w-md bg-white z-50 lg:hidden shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-border flex items-center justify-between bg-surface/70">
          <Logo size="sm" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-full text-foreground hover:text-primary hover:bg-white border border-border transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Drawer Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {/* Quick Search */}
          <div className="relative">
            <div className="w-full flex items-center bg-surface border border-border rounded-xl px-3 py-2.5 focus-within:border-accent focus-within:bg-white focus-within:ring-2 focus-within:ring-accent/20 transition-all">
              <Search className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search fish, plants, tanks..."
                className="w-full bg-transparent text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-muted-foreground hover:text-foreground px-1"
                >
                  Clear
                </button>
              )}
            </div>
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
                  onClick={handleSignOut}
                  disabled={isLoggingOut}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-100 hover:text-white text-xs font-semibold backdrop-blur-sm transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {isLoggingOut ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <LogOut className="w-3.5 h-3.5" />
                  )}
                  <span>{isLoggingOut ? "Exiting..." : "Log Out"}</span>
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
                  <p className="text-xs font-bold text-primary">Aqua Member Club</p>
                  <p className="text-[11px] text-muted-foreground">Sign in for member perks & order status</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold shadow-sm transition-colors text-center"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white border border-primary/30 hover:border-accent text-primary text-xs font-bold shadow-sm transition-colors text-center"
                >
                  <span>Create Account</span>
                </Link>
              </div>
            </div>
          )}

          {/* Quick Action Buttons (Wishlist & Cart) */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="#wishlist"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border/80 hover:border-accent hover:bg-accent-soft/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-danger" />
                <span className="text-xs font-semibold text-foreground">Wishlist</span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent-soft text-primary">
                0
              </span>
            </Link>

            <Link
              href="#cart"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border/80 hover:border-accent hover:bg-accent-soft/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-foreground">Cart</span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-danger text-white">
                0
              </span>
            </Link>
          </div>

          {/* Navigation Links List */}
          <div className="space-y-1.5 pt-1">
            {/* 1. Home Link */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-primary bg-accent-soft/50 hover:bg-accent-soft transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Home className="w-4 h-4 text-primary" />
                <span>Home</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Link>

            {/* 2. Fishes Accordion */}
            <div className="rounded-xl border border-border/70 overflow-hidden bg-white">
              <button
                onClick={() => setMobileFishOpen(!mobileFishOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-foreground hover:bg-surface transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Fish className="w-4 h-4 text-primary" />
                  <span>Fishes & Species</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface text-muted-foreground border border-border/60">
                    4 Types
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                      mobileFishOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {mobileFishOpen && (
                <div className="p-2 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-1.5 bg-surface/40 border-t border-border/40">
                  {fishCategories.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-lg bg-white border border-border/60 hover:border-accent hover:bg-accent-soft/30 transition-all"
                    >
                      <div className="text-xs font-bold text-primary">{item.name}</div>
                      <div className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Plants Accordion */}
            <div className="rounded-xl border border-border/70 overflow-hidden bg-white">
              <button
                onClick={() => setMobilePlantsOpen(!mobilePlantsOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-foreground hover:bg-surface transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Leaf className="w-4 h-4 text-accent" />
                  <span>Plants, Flora & Bonsai</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface text-muted-foreground border border-border/60">
                    3 Types
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                      mobilePlantsOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {mobilePlantsOpen && (
                <div className="p-2 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-1.5 bg-surface/40 border-t border-border/40">
                  {plantCategories.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-lg bg-white border border-border/60 hover:border-accent hover:bg-accent-soft/30 transition-all"
                    >
                      <div className="text-xs font-bold text-primary">{item.name}</div>
                      <div className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Aquarium & Gear */}
            <Link
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-surface transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Package className="w-4 h-4 text-muted-foreground" />
                <span>Aquarium & Gear</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Link>

            {/* 5. Hot Deals */}
            <Link
              href="#deals"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-danger hover:bg-red-50/50 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Flame className="w-4 h-4 text-danger" />
                <span>Hot Deals & Flash Sales</span>
              </div>
              <span className="bg-danger text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                Sale
              </span>
            </Link>

            {/* 6. About Us */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-surface transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Info className="w-4 h-4 text-muted-foreground" />
                <span>About Us</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Link>

            {/* 7. Contact */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-surface transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-muted-foreground" />
                <span>Contact & Store</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          </div>

          {/* Customer Hotline & Hours Box */}
          <div className="rounded-2xl bg-surface border border-border p-3.5 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-primary">
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>Customer Care Hotline</span>
            </div>
            <a
              href="tel:+8801700000000"
              className="block text-sm font-extrabold text-primary hover:text-accent transition-colors"
            >
              +880 1700-000000
            </a>
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <Clock className="w-3 h-3 text-accent" />
              <span>Support Hours: 9:00 AM - 10:00 PM (Everyday)</span>
            </div>
          </div>
        </div>

        {/* Drawer Footer Badge */}
        <div className="p-3 border-t border-border bg-surface text-center">
          <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="font-medium">100% Live Arrival Guarantee in Dhaka</span>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
