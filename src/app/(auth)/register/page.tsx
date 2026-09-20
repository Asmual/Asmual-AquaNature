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
    <div className="min-h-screen lg:h-screen lg:max-h-screen w-full grid grid-cols-1 lg:grid-cols-12 bg-background selection:bg-accent-soft selection:text-primary overflow-y-auto lg:overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. LEFT SIDE: HERO IMAGE WITH SOFT BLUR & AQUATIC NARRATIVE               */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 relative flex-col justify-between p-6 xl:p-8 overflow-hidden bg-primary text-white h-full">
        {/* Background Image: public/images/Login-SignUp.jpg */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Login-SignUp.jpg"
            alt="Asmual AquaNature Aquarium & Living Plants"
            fill
            priority
            className="object-cover object-center filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B4A6F]/95 via-[#0B4A6F]/80 to-[#083A57]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-radial-at-c from-accent/20 via-transparent to-black/40 mix-blend-overlay" />
        </div>

        {/* Top Header: Logo Icon + Back to Shop */}
        <div className="relative z-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent/40 p-0.5 bg-white shrink-0">
              <Image
                src="/images/Asmual-AquaNature-logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="font-heading font-extrabold text-base text-white tracking-tight">
              Aqua<span className="text-accent">Nature</span>
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Shop</span>
          </Link>
        </div>

        {/* Center Content */}
        <div className="relative z-10 my-auto py-4 space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-[11px] font-semibold backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-accent" />
            <span>Join Aqua Collectors Club</span>
          </div>

          <h2 className="font-heading font-extrabold text-xl xl:text-2xl text-white tracking-tight leading-snug">
            Start Your Aquatic & Living Nature Journey.
          </h2>

          <p className="text-xs text-white/85 font-normal leading-relaxed line-clamp-3">
            Create an account to gain priority access to imported rare Betta drops, member pricing on aquatic flora, and personal consultations with our master aquascapers.
          </p>

          <div className="space-y-2 pt-1">
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
              <div className="w-6 h-6 rounded-full bg-accent/25 flex items-center justify-center shrink-0">
                <Fish className="w-3.5 h-3.5 text-accent" />
              </div>
              <p className="text-xs text-white/90 font-medium">
                Early access to new imported fish strains & alerts
              </p>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
              <div className="w-6 h-6 rounded-full bg-accent/25 flex items-center justify-center shrink-0">
                <Leaf className="w-3.5 h-3.5 text-accent" />
              </div>
              <p className="text-xs text-white/90 font-medium">
                Tailored fertilizer, plant light & dosing plans
              </p>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
              <div className="w-6 h-6 rounded-full bg-accent/25 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              </div>
              <p className="text-xs text-white/90 font-medium">
                100% Live Arrival Guarantee on all deliveries
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/65">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
            <span>Guaranteed Healthy Stock</span>
          </div>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. RIGHT SIDE: COMPACT CREATE ACCOUNT FORM (FITS ON ONE SCREEN)           */}
      {/* ========================================================================= */}
      <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center items-center px-4 py-4 sm:px-8 lg:px-12 h-full overflow-y-auto">
        <div className="max-w-sm sm:max-w-md w-full space-y-3">
          {/* Top Logo & Title: ONLY "Create Account" with Logo, No Bulky Clutter */}
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border shadow-sm p-0.5 bg-surface shrink-0">
              <Image
                src="/images/Asmual-AquaNature-logo.png"
                alt="Logo"
                width={40}
                height={40}
                priority
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <h1 className="font-heading font-extrabold text-2xl text-primary tracking-tight">
              Create Account
            </h1>
          </div>

          {/* GOOGLE SIGN UP BUTTON */}
          <div>
            <button
              type="button"
              onClick={handleGoogleSignUp}
              disabled={isGoogleLoading || isLoading}
              className="w-full flex items-center justify-center gap-2.5 py-1.5 sm:py-2 px-4 rounded-full border border-border bg-surface hover:bg-white hover:border-accent hover:shadow-sm text-foreground text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-60"
            >
              {isGoogleLoading ? (
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
              ) : (
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
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
            <span className="absolute bg-background px-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              Or with email
            </span>
          </div>

          {/* REGISTRATION FORM (Clean, Compact Spacing) */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            {/* Full Name */}
            <div className="space-y-0.5">
              <label className="block text-xs font-semibold text-foreground">
                Full Name
              </label>
              <div className="relative flex items-center">
                <User className="w-3.5 h-3.5 text-muted-foreground absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Enter Your Full Name"
                  className="w-full bg-surface border border-border rounded-[10px] pl-9 pr-3.5 py-1.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
              </div>
              {errors.name && (
                <p className="text-[10px] text-danger font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-0.5">
              <label className="block text-xs font-semibold text-foreground">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="w-3.5 h-3.5 text-muted-foreground absolute left-3 pointer-events-none" />
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter Your Email"
                  className="w-full bg-surface border border-border rounded-[10px] pl-9 pr-3.5 py-1.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
              </div>
              {errors.email && (
                <p className="text-[10px] text-danger font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-0.5">
              <label className="block text-xs font-semibold text-foreground">
                Phone Number <span className="text-muted-foreground font-normal lowercase">(optional)</span>
              </label>
              <div className="relative flex items-center">
                <Phone className="w-3.5 h-3.5 text-muted-foreground absolute left-3 pointer-events-none" />
                <input
                  type="tel"
                  {...register("phoneNumber")}
                  placeholder="Enter Your Phone Number"
                  className="w-full bg-surface border border-border rounded-[10px] pl-9 pr-3.5 py-1.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Password & Confirm Password (Two Columns for space optimization) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Password */}
              <div className="space-y-0.5">
                <label className="block text-xs font-semibold text-foreground">
                  Password
                </label>
                <div className="relative flex items-center">
                  <Lock className="w-3.5 h-3.5 text-muted-foreground absolute left-3 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Enter Your Password"
                    className="w-full bg-surface border border-border rounded-[10px] pl-8 pr-7 py-1.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 text-muted-foreground hover:text-primary transition-colors p-0.5"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff className="w-3.5 h-3.5" />
                    ) : (
                      <Eye className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-[10px] text-danger font-medium">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-0.5">
                <label className="block text-xs font-semibold text-foreground">
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <Lock className="w-3.5 h-3.5 text-muted-foreground absolute left-3 pointer-events-none" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword")}
                    placeholder="Confirm Your Password"
                    className="w-full bg-surface border border-border rounded-[10px] pl-8 pr-7 py-1.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 text-muted-foreground hover:text-primary transition-colors p-0.5"
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
                  <p className="text-[10px] text-danger font-medium">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="pt-0.5">
              <div className="flex items-start">
                <input
                  id="termsAccepted"
                  type="checkbox"
                  {...register("termsAccepted")}
                  className="w-3.5 h-3.5 mt-0.5 text-primary rounded border-border focus:ring-accent accent-primary cursor-pointer"
                />
                <label
                  htmlFor="termsAccepted"
                  className="ml-2 block text-[11px] text-muted-foreground leading-snug cursor-pointer select-none"
                >
                  I agree to the{" "}
                  <Link href="#" className="text-primary hover:text-accent font-semibold underline">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-primary hover:text-accent font-semibold underline">
                    Live Arrival Policy
                  </Link>
                  .
                </label>
              </div>
              {errors.termsAccepted && (
                <p className="text-[10px] text-danger font-medium mt-0.5">
                  {errors.termsAccepted.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isGoogleLoading}
              className="w-full py-2 px-6 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 mt-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Prominent Sign In Toggle Callout */}
          <div className="pt-2 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-extrabold text-primary hover:text-accent underline decoration-accent underline-offset-4 transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
