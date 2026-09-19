"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Sparkles,
  ShieldCheck,
  Fish,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { loginSchema, LoginInput } from "@/lib/validations/auth.schema";
import Logo from "@/components/shared/Logo";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // Handle Email & Password Login
  const onSubmit = async (data: LoginInput) => {
    setIsLoading(true);
    try {
      const response = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: "/",
      });

      if (response.error) {
        toast.error(response.error.message || "Failed to sign in. Please check your credentials.");
      } else {
        toast.success("Welcome back! Signed in successfully.");
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

  // Handle Google OAuth Sign In
  const handleGoogleSignIn = async () => {
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

  // Demo Credentials Fill
  const handleDemoFill = () => {
    setValue("email", "demo@aquanature.com");
    setValue("password", "AquaNature2026!");
    toast.info("Demo credentials loaded into form!");
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

        {/* Center Content: Aquarium & Living Plants Showcase */}
        <div className="relative z-10 my-auto py-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Aquatic Sanctuary & Living Foliage</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl xl:text-4xl text-white tracking-tight leading-tight">
            Where Exotic Aquascapes & Living Flora Come to Life.
          </h2>

          <p className="text-sm xl:text-base text-white/85 font-normal leading-relaxed">
            Bangladesh&apos;s most trusted destination for pureline Betta fighters, champion Guppy bloodlines, rare marine species, and sculpted bonsai trees. Every specimen is professionally quarantined and backed by our Live Arrival Guarantee.
          </p>

          {/* Highlighting Key Offerings */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="w-8 h-8 rounded-full bg-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                <Fish className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Freshwater & Marine Fishes
                </h4>
                <p className="text-xs text-white/75">
                  Over 500+ healthy, disease-free Betta, Guppy, Discus, and reef species.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="w-8 h-8 rounded-full bg-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                <Leaf className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Aquatic Plants & Bonsai Art
                </h4>
                <p className="text-xs text-white/75">
                  Tissue-cultured foliage, blooming water lilies, and sculpted dwarf trees.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="w-8 h-8 rounded-full bg-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  100% Live Arrival Guarantee
                </h4>
                <p className="text-xs text-white/75">
                  Specially insulated, oxygenated packaging delivered safely nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Micro Footer */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/65">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
            <span>Trusted by 2,500+ Aquascapers</span>
          </div>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. RIGHT SIDE: HIGH-FOCUS FORM WITH ONE-CLICK SIGNUP TAB SWITCHER        */}
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

        <div className="max-w-md w-full mx-auto my-auto space-y-6">
          {/* INTERACTIVE TAB SWITCHER (Instant 1-click navigation between Login & SignUp) */}
          <div className="p-1.5 rounded-full bg-surface border border-border grid grid-cols-2 gap-1 shadow-inner">
            <button
              type="button"
              className="py-2.5 rounded-full text-center text-xs sm:text-sm font-bold bg-primary text-white shadow-md transition-all duration-200 cursor-default"
            >
              Sign In
            </button>
            <Link
              href="/register"
              className="py-2.5 rounded-full text-center text-xs sm:text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-white transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <span>Create Account</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent" />
            </Link>
          </div>

          {/* Form Header */}
          <div className="space-y-1">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
              Welcome Back
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Sign in to manage your aquarium orders, wishlist, and customized plant care alerts.
            </p>
          </div>

          {/* GOOGLE SIGN IN BUTTON */}
          <div>
            <button
              type="button"
              onClick={handleGoogleSignIn}
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
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-border" />
            <span className="absolute bg-background px-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              Or sign in with email
            </span>
          </div>

          {/* EMAIL & PASSWORD FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wide">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
                <input
                  type="email"
                  {...register("email")}
                  placeholder="name@example.com"
                  className="w-full bg-surface border border-border rounded-[10px] pl-10 pr-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-danger font-medium mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-foreground uppercase tracking-wide">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs text-primary hover:text-accent font-semibold transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="••••••••"
                  className="w-full bg-surface border border-border rounded-[10px] pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-danger font-medium mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                {...register("rememberMe")}
                className="w-4 h-4 text-primary rounded border-border focus:ring-accent accent-primary cursor-pointer"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-xs text-muted-foreground cursor-pointer select-none"
              >
                Keep me signed in on this device
              </label>
            </div>

            {/* Submit Button (Primary Pill Button) */}
            <button
              type="submit"
              disabled={isLoading || isGoogleLoading}
              className="w-full py-3.5 px-6 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Credentials */}
          <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <span>Testing the platform?</span>
            <button
              type="button"
              onClick={handleDemoFill}
              className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Fill Demo Credentials</span>
            </button>
          </div>
        </div>

        {/* Bottom Prominent Sign Up Link */}
        <div className="pt-6 mt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-extrabold text-primary hover:text-accent underline decoration-accent decoration-2 underline-offset-4 transition-colors"
            >
              Create Account in 30 Seconds →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
