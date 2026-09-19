"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Truck,
  HeartHandshake,
  Send,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary-dark">
      {/* 1. Value Proposition Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white">
                Live Arrival Guaranteed
              </h4>
              <p className="text-xs text-white/70">
                100% safe & oxygenated transport
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white">
                Healthy Quarantine Stock
              </h4>
              <p className="text-xs text-white/70">
                Disease-free & well-acclimated
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white">
                Expert Consultation
              </h4>
              <p className="text-xs text-white/70">
                Free aquascaping & care guidance
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white">
                Express Dhaka Delivery
              </h4>
              <p className="text-xs text-white/70">
                Same-day & scheduled shipping
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Navigation & Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column (Col Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-accent/40 p-0.5 bg-white shrink-0">
                <Image
                  src="/images/Asmual-AquaNature-logo.png"
                  alt="Asmual AquaNature"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                  Asmual <span className="text-accent">AquaNature</span>
                </span>
                <span className="text-xs font-semibold text-accent/80 tracking-widest uppercase">
                  Aquatic & Nature Studio
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              Your premier destination for high-grade freshwater Bettas, rare Guppy strains, marine fishes, indoor air-purifying foliage, and living bonsai art.
            </p>

            <div className="space-y-2 pt-2 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+880 1700-000000 / +880 1800-000000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>info@asmual-aquanature.com</span>
              </div>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-accent">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <Link href="#categories" className="hover:text-accent transition-colors duration-200">
                  Fighter / Betta Fish
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-accent transition-colors duration-200">
                  Exotic Guppy Strains
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-accent transition-colors duration-200">
                  Seawater & Marine Fish
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-accent transition-colors duration-200">
                  Tropical Community Fish
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-accent transition-colors duration-200">
                  Bonsai Tree Plants
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-accent transition-colors duration-200">
                  Indoor Foliage & Succulents
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service & Support */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-accent">
              Customer Support
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors duration-200">
                  About Our Hatchery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors duration-200">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors duration-200">
                  Shipping & Packaging Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors duration-200">
                  Live Arrival Claim
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors duration-200">
                  Aquascaping Guide & Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors duration-200">
                  Privacy Policy & Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-accent">
              Join Aqua Club
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Subscribe for new fish stock alerts, rare plant drops, and exclusive weekly flash sales.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-2"
            >
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full bg-white/10 border border-white/20 rounded-[10px] px-3.5 py-2.5 text-xs text-white placeholder:text-white/50 focus:outline-none focus:border-accent focus:bg-white/15 transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-xs shadow-md transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Subscribe Now</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-all duration-200 flex items-center justify-center"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-all duration-200 flex items-center justify-center"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-all duration-200 flex items-center justify-center"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal & Payment Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Asmual AquaNature. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-white/40">Secure Payments:</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white/90 text-[10px] font-semibold">bKash</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white/90 text-[10px] font-semibold">Nagad</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white/90 text-[10px] font-semibold">Cards</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white/90 text-[10px] font-semibold">Cash On Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
