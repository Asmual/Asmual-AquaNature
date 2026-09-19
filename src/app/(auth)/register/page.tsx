"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  User,
  Mail,
  Lock,
  Phone,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Loader2,
  ShieldCheck,
  Sparkles,
  Fish,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { registerSchema, RegisterInput } from "@/lib/validations/auth.schema";
import Logo from "@/components/shared/Logo";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  });

  // Handle Email & Password Sign Up
  const onSubmit = async (data: RegisterInput) => {
    setIsLoading(true);
    try {
      const response = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        callbackURL: "/",
      });

      if (response.error) {
        toast.error(response.error.message || "Failed to create account. Please try again.");
      } else {
        toast.success("Account created successfully! Welcome to Asmual AquaNature.");
        router.push("/");
        router.refresh();
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google OAuth Sign Up
  const handleGoogleSignUp = async () => {
    setIsGoogleLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Google authentication failed";
      toast.error(errorMsg);
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 bg-background selection:bg-accent-soft selection:text-primary">
      {/* ========================================================================= */}
      {/* 1. LEFT SIDE: HERO IMAGE WITH SOFT BLUR & AQUARIUM / PLANT NARRATIVE     */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex lg:col-span-6 xl:col-span-5 relative flex-col justify-between p-10 xl:p-14 overflow-hidden bg-primary text-white">
        {/* Background Image: public/images/Login-SignUp.jpg */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Login-SignUp.jpg"
            alt="Asmual AquaNature Aquarium & Living Plants"
            fill
            priority
            className="object-cover object-center scale-105 filter blur-[1.5px]"
          />

          {/* Soft Blur & Deep Ocean Atmospheric Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B4A6F]/95 via-[#0B4A6F]/80 to-[#083A57]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-radial-at-c from-accent/20 via-transparent to-black/40 mix-blend-overlay" />
        </div>

        {/* Top Header: Logo + Back to Shop Link */}
        <div className="relative z-10 flex items-center justify-between">
          <Logo size="md" />

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all duration-200 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Shop</span>
          </Link>
        </div>

        {/* Center Content: Community Perks & Collector Privileges */}
        <div className="relative z-10 my-auto py-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Join Aqua Collectors Club</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl xl:text-4xl text-white tracking-tight leading-tight">
            Start Your Aquatic & Living Nature Journey.
          </h2>

          <p className="text-sm xl:text-base text-white/85 font-normal leading-relaxed">
            Create an account to gain priority access to imported rare Betta drops, member pricing on aquatic flora, and personal consultations with our master aquascapers.
          </p>

          {/* Member Benefits */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="w-8 h-8 rounded-full bg-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                <Fish className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  First Access to Rare Strains
                </h4>
                <p className="text-xs text-white/75">
                  Get notified 24 hours ahead on Alien Bettas and Albino Blue Topaz Guppy batches.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="w-8 h-8 rounded-full bg-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                <Leaf className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Aquatic Care & Dosing Schedules
                </h4>
                <p className="text-xs text-white/75">
                  Tailored fertilizer, light, and water parameter guidance for your setup.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="w-8 h-8 rounded-full bg-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Express Live Transport
                </h4>
                <p className="text-xs text-white/75">
                  Priority packing with double-oxygenated insulated delivery across Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Micro Footer */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/65">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
            <span>100% Guaranteed Healthy Stock</span>
          </div>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. RIGHT SIDE: REGISTRATION FORM WITH ONE-CLICK LOGIN TAB SWITCHER       */}
      {/* ========================================================================= */}
      <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 overflow-y-auto">
        {/* Mobile Header (Only visible on small devices) */}
        <div className="flex lg:hidden items-center justify-between pb-4 mb-6 border-b border-border">
          <Logo size="sm" />
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Shop</span>
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto my-auto space-y-5">
          {/* INTERACTIVE TAB SWITCHER (Instant 1-click navigation between Login & SignUp) */}
          <div className="p-1.5 rounded-full bg-surface border border-border grid grid-cols-2 gap-1 shadow-inner">
            <Link
              href="/login"
              className="py-2.5 rounded-full text-center text-xs sm:text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-white transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-accent" />
              <span>Sign In</span>
            </Link>
            <button
              type="button"
              className="py-2.5 rounded-full text-center text-xs sm:text-sm font-bold bg-primary text-white shadow-md transition-all duration-200 cursor-default"
            >
              Create Account
            </button>
          </div>

          {/* Form Header */}
          <div className="space-y-1">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
              Create Your Account
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Sign up with Google or complete the registration below.
            </p>
          </div>

          {/* GOOGLE SIGN UP BUTTON */}
          <div>
            <button
              type="button"
              onClick={handleGoogleSignUp}
              disabled={isGoogleLoading || isLoading}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-full border border-border bg-surface hover:bg-white hover:border-accent hover:shadow-md text-foreground text-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-60"
            >
              {isGoogleLoading ? (
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
              ) : (
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              )}
              <span>Sign up with Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-border" />
            <span className="absolute bg-background px-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              Or register with email
            </span>
          </div>

          {/* REGISTRATION FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wide">
                Full Name
              </label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  {...register("name")}
                  placeholder="e.g. Asmual Hossain"
                  className="w-full bg-surface border border-border rounded-[10px] pl-10 pr-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
              </div>
              {errors.name && (
                <p className="text-xs text-danger font-medium mt-0.5">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wide">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
                <input
                  type="email"
                  {...register("email")}
                  placeholder="name@example.com"
                  className="w-full bg-surface border border-border rounded-[10px] pl-10 pr-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-danger font-medium mt-0.5">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wide">
                Phone Number <span className="text-muted-foreground font-normal lowercase">(optional, for live arrival alerts)</span>
              </label>
              <div className="relative flex items-center">
                <Phone className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
                <input
                  type="tel"
                  {...register("phoneNumber")}
                  placeholder="+880 1700-000000"
                  className="w-full bg-surface border border-border rounded-[10px] pl-10 pr-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Password Fields in 2 Columns on Tablet/Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-foreground uppercase tracking-wide">
                  Password
                </label>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-muted-foreground absolute left-3 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="••••••••"
                    className="w-full bg-surface border border-border rounded-[10px] pl-9 pr-8 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-[11px] text-danger font-medium mt-0.5">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-foreground uppercase tracking-wide">
                  Confirm
                </label>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-muted-foreground absolute left-3 pointer-events-none" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword")}
                    placeholder="••••••••"
                    className="w-full bg-surface border border-border rounded-[10px] pl-9 pr-8 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2.5 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-3.5 h-3.5" />
                    ) : (
                      <Eye className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-[11px] text-danger font-medium mt-0.5">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="space-y-1 pt-1">
              <div className="flex items-start">
                <input
                  id="termsAccepted"
                  type="checkbox"
                  {...register("termsAccepted")}
                  className="w-4 h-4 mt-0.5 text-primary rounded border-border focus:ring-accent accent-primary cursor-pointer"
                />
                <label
                  htmlFor="termsAccepted"
                  className="ml-2 block text-xs text-muted-foreground leading-snug cursor-pointer select-none"
                >
                  I accept the{" "}
                  <Link href="#" className="text-primary hover:text-accent font-semibold underline">
                    Terms
                  </Link>{" "}
                  &{" "}
                  <Link href="#" className="text-primary hover:text-accent font-semibold underline">
                    Live Arrival Guarantee
                  </Link>
                  .
                </label>
              </div>
              {errors.termsAccepted && (
                <p className="text-[11px] text-danger font-medium">
                  {errors.termsAccepted.message}
                </p>
              )}
            </div>

            {/* Submit Button (Accent Pill Button) */}
            <button
              type="submit"
              disabled={isLoading || isGoogleLoading}
              className="w-full py-3.5 px-6 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Create Free Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Security Note */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground text-center pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>Encrypted with MongoDB & Better Auth security</span>
          </div>
        </div>

        {/* Bottom Prominent Sign In Link */}
        <div className="pt-4 mt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-extrabold text-primary hover:text-accent underline decoration-accent decoration-2 underline-offset-4 transition-colors"
            >
              Sign In to Your Account →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
