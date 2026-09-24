"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Leaf,
  Fish,
  Sun,
  Send,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-14 pb-8 border-t border-primary-dark">
      {/* 1. Value Proposition Highlights (Educational & Scientific Pillars) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-b border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                প্রামাণ্য উদ্ভিদ পরিচিতি
              </h4>
              <p className="text-[11px] text-white/70">
                বৈজ্ঞানিক ও আঞ্চলিক নাম সংকলন
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
              <Fish className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                জলজ জীববৈচিত্র্য
              </h4>
              <p className="text-[11px] text-white/70">
                বেটা, গাপ্পি ও সামুদ্রিক মাছের গাইড
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
              <Sun className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                সূর্যালোক ও পরিচর্যা
              </h4>
              <p className="text-[11px] text-white/70">
                পানি, সার, মাটি ও তাপমাত্রা নির্দেশিকা
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                উন্মুক্ত বিশ্বকোষ
              </h4>
              <p className="text-[11px] text-white/70">
                বিনামূল্যে প্রকৃতির জ্ঞান সবার জন্য
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Navigation & Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column (Col Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/main-logo.png"
                  alt="Asmual AquaNature"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  Asmual <span className="text-accent">AquaNature</span>
                </span>
                <span className="text-[11px] font-semibold text-accent/80 tracking-widest uppercase">
                  Botanical &amp; Aquatic Encyclopedia
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm">
              বাংলাদেশের প্রকৃতিপ্রেমী, ছাদবাগান উৎসাহী এবং অ্যাকুয়ারিয়াম শৌখিনদের জন্য উদ্ভিদ ও জলজ প্রাণীর সঠিক বৈজ্ঞানিক তথ্য, আবহাওয়া, সূর্যালোক ও পরিচর্যার উন্মুক্ত তথ্যকোষ।
            </p>

            <div className="space-y-2 pt-2 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>ঢাকা, বাংলাদেশ (Dhaka, Bangladesh)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>info@asmual-aquanature.com</span>
              </div>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs tracking-wider uppercase text-accent">
              উদ্ভিদ ও মাছের বিভাগ
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link href="/category/indoor" className="hover:text-accent transition-colors duration-200">
                  ইনডোর প্ল্যান্টস (Indoor Plants)
                </Link>
              </li>
              <li>
                <Link href="/category/bonsai" className="hover:text-accent transition-colors duration-200">
                  জীবন্ত বনসাই বৃক্ষ (Bonsai Art)
                </Link>
              </li>
              <li>
                <Link href="/category/flowers" className="hover:text-accent transition-colors duration-200">
                  ফুল ও জলপদ্ম (Flower Plants)
                </Link>
              </li>
              <li>
                <Link href="/category/fighter" className="hover:text-accent transition-colors duration-200">
                  সিয়ামিজ বেটা মাছ (Betta / Fighter)
                </Link>
              </li>
              <li>
                <Link href="/category/guppy" className="hover:text-accent transition-colors duration-200">
                  পিয়োরলাইন গাপ্পি (Pureline Guppies)
                </Link>
              </li>
              <li>
                <Link href="/category/marine" className="hover:text-accent transition-colors duration-200">
                  সামুদ্রিক মাছ (SeaWater Fishes)
                </Link>
              </li>
            </ul>
          </div>

          {/* Educational Resources & Support */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs tracking-wider uppercase text-accent">
              জ্ঞান ও পরামর্শ
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors duration-200">
                  আমাদের উদ্দেশ্য ও গল্প
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors duration-200">
                  যোগাযোগ ও তথ্য সংশোধন
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-accent transition-colors duration-200">
                  সম্পূর্ণ উন্মুক্ত ক্যাটালগ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors duration-200">
                  ইনডোর প্ল্যান্ট পরিচর্যা নির্দেশিকা
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors duration-200">
                  অ্যাকুয়ারিয়াম পানি ও তাপমাত্রা গাইড
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Newsletter */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs tracking-wider uppercase text-accent">
              প্রকৃতিপ্রেমী সম্প্রদায়
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              নতুন প্রজাতি সংযোজন ও মৌসুমি পরিচর্যা পরামর্শের নোটিফিকেশন পেতে সাবস্ক্রাইব করুন।
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-2"
            >
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল অ্যাড্রেস..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-white/50 focus:outline-none focus:border-accent focus:bg-white/15 transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-xs shadow-md transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>যুক্ত হোন</span>
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </form>

            <div className="flex items-center gap-2.5 pt-1">
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

      {/* 3. Bottom Legal & Knowledge Hub Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Asmual AquaNature. উদ্ভিদ ও জলজ প্রাণীর উন্মুক্ত বিশ্বকোষ।</p>
          <div className="flex items-center gap-2 text-[11px] text-accent font-medium">
            <span>উন্মুক্ত বটানিক্যাল ও অ্যাকুয়াটিক জ্ঞানভাণ্ডার</span>
            <span>•</span>
            <span>ঢাকা, বাংলাদেশ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
