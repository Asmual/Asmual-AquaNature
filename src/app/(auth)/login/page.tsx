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
  CheckCircle2,
  UserPlus,
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

  // Demo Login Quick Fill
  const handleDemoFill = () => {
    setValue("email", "demo@aquanature.com");
    setValue("password", "AquaNature2026!");
    toast.info("Demo credentials filled into form!");
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 bg-background">
      {/* ========================================================= */}
      {/* 1. LEFT SIDE: BRAND & VISUAL SHOWCASE (Hidden on mobile) */}
      {/* ========================================================= */}
      <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 relative flex-col justify-between p-10 xl:p-14 overflow-hidden bg-primary text-white">
        {/* Background Image with Deep Ocean Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero-Banner.png"
            alt="Asmual AquaNature Sanctuary"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B4A6F] via-[#0B4A6F]/90 to-[#083A57]/80" />
          <div className="absolute inset-0 bg-radial-at-c from-accent/20 via-transparent to-black/50 mix-blend-overlay" />
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-dark/50 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header: Logo & Back to Home Link */}
        <div className="relative z-10 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-accent/40 p-0.5 bg-white shrink-0">
              <Image
                src="/images/Asmual-AquaNature-logo.png"
                alt="Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                Asmual <span className="text-accent">AquaNature</span>
              </span>
              <span className="text-[10px] font-semibold text-accent/80 tracking-widest uppercase">
                Aquatic & Nature Studio
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 text-xs font-semibold backdrop-blur-md border border-white/20 transition-all duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Shop</span>
          </Link>
        </div>

        {/* Middle Content: About Website & Trust Metrics */}
        <div className="relative z-10 my-auto py-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Client Portal</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl xl:text-4xl text-white tracking-tight leading-snug">
            Bringing Ocean Tranquility & Living Flora into Your Life.
          </h2>

          <p className="text-sm xl:text-base text-white/80 leading-relaxed max-w-md">
            Bangladesh&apos;s leading sanctuary for quarantine-certified Betta fighters, pureline guppies, vibrant marine fishes, and sculpted bonsai living trees.
          </p>

          {/* Key Value Points */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-accent" />
              </div>
              <span className="text-xs xl:text-sm text-white/90 font-medium">
                100% Live Arrival Guarantee across Bangladesh
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-accent" />
              </div>
              <span className="text-xs xl:text-sm text-white/90 font-medium">
                Over 500+ healthy aquatic species & bonsai varieties
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <span className="text-xs xl:text-sm text-white/90 font-medium">
                Free aquascaping & species compatibility guidance
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Micro Footer */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
          <span>© {new Date().getFullYear()} Asmual AquaNature</span>
          <span className="text-accent/80 font-medium">Dhaka, Bangladesh</span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. RIGHT SIDE: LOGIN FORM & PROMINENT SIGN UP CALLOUT      */}
      {/* ========================================================= */}
      <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 overflow-y-auto">
        {/* Mobile Header (Shown on mobile only) */}
        <div className="flex lg:hidden items-center justify-between pb-6 mb-6 border-b border-border">
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
          {/* HIGH FOCUS SIGN UP PROMOTION BANNER */}
          <div className="p-4 rounded-xl bg-accent-soft border border-accent/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold text-primary">
                New to Asmual AquaNature?
              </p>
              <p className="text-[11px] text-muted-foreground">
                Create a free account in 30 seconds for member rewards.
              </p>
            </div>
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-xs shadow-md transition-all duration-200 shrink-0 hover:scale-105"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Sign Up Here</span>
            </Link>
          </div>

          {/* Form Header */}
          <div className="space-y-1 text-left">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
              Sign In to Your Account
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Enter your credentials or authenticate instantly with Google.
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
              Or with email
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
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
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
                Remember me on this device
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
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Credentials */}
          <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <span>Testing the app?</span>
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
            Don&apos;t have an account yet?{" "}
            <Link
              href="/register"
              className="font-extrabold text-primary hover:text-accent underline decoration-accent decoration-2 underline-offset-4 transition-colors"
            >
              Create an Account Now →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
