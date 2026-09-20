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
} from "lucide-react";
import Logo from "./Logo";
import { useSession, signOut } from "@/lib/auth-client";

export const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      <div className="bg-primary text-white text-xs font-medium py-2 px-4 sm:px-6 lg:px-8 border-b border-primary-dark">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-accent text-primary uppercase tracking-wide">
              Notice
            </span>
            <span className="text-white/90">
              Free Delivery across Dhaka on live fish & plants orders over ৳1,500!
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/85">
            <div className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200">
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>+880 1700-000000</span>
            </div>
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
          isScrolled ? "shadow-md py-2.5" : "shadow-sm py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Search Bar (Surface Background #F1F6F9, 10px rounded input) */}
            <div className="hidden md:flex flex-1 max-w-lg relative">
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
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                aria-label="Wishlist"
                className="relative p-2.5 rounded-full text-foreground hover:text-primary hover:bg-surface transition-colors duration-200"
              >
                <Heart className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-accent text-primary text-[10px] font-bold flex items-center justify-center">
                  0
                </span>
              </button>

              <button
                aria-label="Cart"
                className="relative p-2.5 rounded-full text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-2"
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

              {/* User Account / Avatar Dropdown */}
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
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </Link>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="md:hidden p-2 rounded-lg text-primary hover:bg-surface transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* 3. DESKTOP NAVIGATION LINKS */}
          <nav className="hidden md:flex items-center justify-between pt-3 mt-2 border-t border-border/60">
            <ul className="flex items-center gap-1 lg:gap-2">
              <li>
                <Link
                  href="/"
                  className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-primary bg-accent-soft hover:bg-accent hover:text-primary transition-colors duration-200 flex items-center gap-1.5"
                >
                  Home
                </Link>
              </li>

              {/* Fishes Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setActiveDropdown("fish")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-1">
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
                <button className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 flex items-center gap-1">
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
                  className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200"
                >
                  Aquarium & Gear
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
                  className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-foreground hover:text-primary hover:bg-surface transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>100% Healthy Live Arrival Guarantee</span>
            </div>
          </nav>
        </div>
      </div>

      {/* 4. MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border shadow-lg transition-all duration-300">
          <div className="px-4 pt-3 pb-6 space-y-4">
            <div className="flex items-center bg-surface border border-border rounded-[10px] px-3.5 py-2">
              <Search className="w-4 h-4 text-muted-foreground mr-2.5 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search fish, plants, tanks..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-primary bg-accent-soft"
              >
                Home
              </Link>
              <div className="py-2 px-3">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Fish Categories
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {fishCategories.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 bg-surface rounded-lg text-xs font-medium text-primary hover:bg-accent-soft"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="py-2 px-3">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Plant Categories
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {plantCategories.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 bg-surface rounded-lg text-xs font-medium text-primary hover:bg-accent-soft"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="#deals"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-danger hover:bg-surface flex items-center justify-between"
              >
                <span>Hot Deals</span>
                <span className="bg-danger text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  Sale
                </span>
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-foreground hover:bg-surface"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-foreground hover:bg-surface"
              >
                Contact
              </Link>
            </div>

            <div className="pt-2 border-t border-border">
              {session?.user ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2.5 bg-surface rounded-xl border border-border">
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
                      <p className="text-xs font-bold text-primary truncate">
                        {userName}
                      </p>
                      <p className="text-[10px] text-muted-foreground truncate">
                        {userEmail}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/profile"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-3 rounded-lg bg-surface hover:bg-accent-soft text-primary text-xs font-semibold flex items-center justify-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-accent" />
                      <span>View Profile</span>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      disabled={isLoggingOut}
                      className="py-2 px-3 rounded-lg bg-red-50 hover:bg-red-100 text-danger text-xs font-semibold flex items-center justify-center gap-1.5"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4" />
                  <span>My Account / Sign In</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
