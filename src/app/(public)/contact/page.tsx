"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  HelpCircle,
  CheckCircle2,
  Loader2,
  Calendar,
  MessageSquare
} from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Indoor Plants",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast.error("Please fill in your name, contact number, and message.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        `Thank you ${formData.name}! Your message regarding "${formData.category}" has been received. Our team will contact you shortly.`
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "Indoor Plants",
        message: "",
      });
    }, 1000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Asmual AquaNature! I would like to get more information about your livestock and plants.`
    );
    window.open(`https://wa.me/8801700000000?text=${text}`, "_blank");
  };

  const faqs = [
    {
      q: "How does the 100% Live Arrival Guarantee work?",
      a: "All our livestock and delicate botanical plants are packaged inside insulated double-walled transport boxes with medical-grade pure oxygen. In the extremely rare event that an item arrives unhealthy, simply send us an unboxing video within 2 hours of courier delivery, and we will issue a free replacement or instant store refund.",
    },
    {
      q: "How do you deliver live fishes and bonsai trees across Dhaka?",
      a: "Within Dhaka city, we use specialized temperature-monitored direct hand-delivery to ensure zero physical shock to the organisms. For outside Dhaka, we utilize express bus counter services with morning departures so shipments spend the absolute minimum transit time.",
    },
    {
      q: "Can I visit the studio to select my Betta or Bonsai in person?",
      a: "Yes! We welcome passionate hobbyists to our Dhaka showroom during standard studio hours (9:00 AM to 10:00 PM Saturday through Thursday, and 2:00 PM to 10:00 PM on Friday). Our expert aquarists will gladly demonstrate water parameters and feeding habits.",
    },
    {
      q: "Do you offer custom aquascaping and biophilic tank installations?",
      a: "Absolutely. We specialize in custom rimless planted aquariums, marine reef setups, and custom terrarium builds for private residences, corporate lobbies, and offices. Contact us with your dimensions for a consultation.",
    },
    {
      q: "What water parameters should my tank have before introducing your fish?",
      a: "For our pureline guppies, we recommend a pH between 7.0–7.8 and TDS around 200–280 ppm. For Betta / Fighter species, soft water with gentle botanicals (Catappa tannins) and temperatures around 25°C–28°C is optimal. We provide a tailored acclimation card with every order.",
    },
  ];

  return (
    <div className="w-full bg-surface/30 pb-20">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-primary/10 via-surface to-background border-b border-border py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft text-primary text-xs font-extrabold uppercase tracking-widest border border-accent/20">
            <MessageSquare className="w-3.5 h-3.5 text-accent" />
            <span>Customer Service &amp; Studio Care</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-primary tracking-tight max-w-3xl mx-auto leading-tight">
            Let&apos;s Connect and Bring Nature Into Your Living Space
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Have questions about a specific fish variety, plant care routine, or need guidance choosing the right bonsai tree? Our specialists are here to assist.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CHANNELS QUICK CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Direct Hotline */}
          <div className="p-5 rounded-2xl bg-white border border-border shadow-md hover:border-accent transition-all duration-300 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-primary">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-sm text-foreground">
              Customer Hotline
            </h3>
            <p className="text-xs text-muted-foreground">
              Speak directly with our studio consultants.
            </p>
            <a
              href="tel:+8801700000000"
              className="text-xs font-bold text-primary hover:text-accent inline-block pt-1"
            >
              +880 1700-000000
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-5 rounded-2xl bg-white border border-border shadow-md hover:border-accent transition-all duration-300 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-sm text-foreground">
              WhatsApp Support
            </h3>
            <p className="text-xs text-muted-foreground">
              Instant inquiries &amp; live video verification.
            </p>
            <button
              onClick={handleWhatsApp}
              className="text-xs font-bold text-emerald-600 hover:underline pt-1 cursor-pointer"
            >
              Chat on WhatsApp &rarr;
            </button>
          </div>

          {/* Card 3: Studio Location */}
          <div className="p-5 rounded-2xl bg-white border border-border shadow-md hover:border-accent transition-all duration-300 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-primary">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-sm text-foreground">
              Studio Location
            </h3>
            <p className="text-xs text-muted-foreground">
              Sector 11, Uttara / Dhanmondi, Dhaka, Bangladesh.
            </p>
            <span className="text-[11px] font-semibold text-primary/80 pt-1 block">
              In-person viewing available
            </span>
          </div>

          {/* Card 4: Operating Hours */}
          <div className="p-5 rounded-2xl bg-white border border-border shadow-md hover:border-accent transition-all duration-300 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-primary">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-sm text-foreground">
              Visiting Hours
            </h3>
            <p className="text-xs text-muted-foreground leading-snug">
              Sat – Thu: 9:00 AM – 10:00 PM<br />
              Friday: 2:00 PM – 10:00 PM
            </p>
            <span className="text-[11px] font-semibold text-emerald-600 pt-1 block flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open Today
            </span>
          </div>
        </div>
      </section>

      {/* 3. MAIN FORM & DETAILS SPLIT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-border shadow-xl space-y-6">
            <div className="space-y-1.5 border-b border-border/80 pb-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Send An Inquiry</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
                How Can We Help You?
              </h2>
              <p className="text-xs text-muted-foreground">
                Leave a note below. Our horticulturalists and aquarists typically respond within 2 to 4 business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground block">
                    Your Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asmual Hoque"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-border focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 text-xs sm:text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground block">
                    Phone / WhatsApp Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 01700-000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-border focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 text-xs sm:text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground block">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-border focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 text-xs sm:text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground block">
                    Department / Area of Interest
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-border focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    <option value="Indoor Plants">Indoor Plants</option>
                    <option value="Living Bonsai Art">Living Bonsai Art</option>
                    <option value="Flower Plants">Flower &amp; Pond Plants</option>
                    <option value="Pureline Guppies">Pureline Guppies</option>
                    <option value="Fighter / Betta">Fighter / Betta Fish</option>
                    <option value="SeaWater Fish">SeaWater &amp; Marine Reef</option>
                    <option value="Custom Aquarium Setup">Custom Aquarium Setup</option>
                    <option value="General Question">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground block">
                  Your Message or Specimen Details <span className="text-danger">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you are looking for, your aquarium dimensions, or delivery destination..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-border focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 text-xs sm:text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message Directly to Studio</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Studio Information & Direct Connect */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Fast Track Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Fastest Support on WhatsApp
                </h3>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Need immediate pictures of available Halfmoon Betta strains or video clips of bonsai root formations? Chat with us live!
                </p>
              </div>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start WhatsApp Conversation</span>
              </button>
            </div>

            {/* Quality & Care Assurance Box */}
            <div className="p-6 rounded-3xl bg-white border border-border shadow-md space-y-3">
              <h3 className="font-heading font-bold text-base text-foreground flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span>Our Live Arrival Promise</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every fish and plant ordered through our digital showcase is protected by a 100% healthy arrival commitment. We take full responsibility from our studio tanks to your doorstep.
              </p>
              <div className="pt-2 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Insulated Packaging + Oxygen Bagging</span>
              </div>
            </div>

            {/* Direct Email Inquiries */}
            <div className="p-6 rounded-3xl bg-surface border border-border space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>Direct Email Correspondence</span>
              </div>
              <p className="text-xs text-muted-foreground">
                For corporate greening installations and wholesale plant inquiries:
              </p>
              <a
                href="mailto:contact@asmualaqua.com"
                className="text-xs font-bold text-primary hover:text-accent transition-colors block"
              >
                contact@asmualaqua.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-accent" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Clear answers to help you order live fishes, bonsai, and plants with total confidence.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-border overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-xs sm:text-sm text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 bg-surface/30">
                    <p className="pt-2">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
