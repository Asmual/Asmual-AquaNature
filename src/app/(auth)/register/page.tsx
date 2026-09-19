"use client";

import React, { useState } from "react";
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
  Loader2,
  ShieldCheck,
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
    <div className="min-h-[90vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface via-background to-surface/30">
      <div className="w-full max-w-md space-y-8">
        {/* Header with Logo */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Logo size="lg" />
          <div className="space-y-1">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
              Create Your Account
            </h1>
            <p className="text-sm text-muted-foreground max-w-xs">
              Join Bangladesh&apos;s leading aquatic sanctuary for verified fish strains, bonsai art & perks.
            </p>
          </div>
        </div>

        {/* Card Wrapper */}
        <div className="bg-white rounded-2xl border border-border shadow-xl p-6 sm:p-8 space-y-6">
          {/* 1. GOOGLE SIGN UP BUTTON */}
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
            <span className="absolute bg-white px-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              Or with email
            </span>
          </div>

          {/* 2. REGISTRATION FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wide">
                Full Name
              </label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  {...register("name")}
                  placeholder="e.g. Asmual Hossain"
                  className="w-full bg-surface border border-border rounded-[10px] pl-10 pr-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
              </div>
              {errors.name && (
                <p className="text-xs text-danger font-medium mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Address */}
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

            {/* Phone Number (Optional) */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wide">
                Phone Number <span className="text-muted-foreground font-normal lowercase">(optional, for order tracking)</span>
              </label>
              <div className="relative flex items-center">
                <Phone className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
                <input
                  type="tel"
                  {...register("phoneNumber")}
                  placeholder="+880 1700-000000"
                  className="w-full bg-surface border border-border rounded-[10px] pl-10 pr-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wide">
                Password <span className="text-muted-foreground font-normal lowercase">(min. 8 characters)</span>
              </label>
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

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wide">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword")}
                  placeholder="••••••••"
                  className="w-full bg-surface border border-border rounded-[10px] pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-danger font-medium mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms and Conditions Checkbox */}
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
                  I agree to the{" "}
                  <Link href="#" className="text-primary hover:text-accent font-semibold underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-primary hover:text-accent font-semibold underline">
                    Live Arrival Guarantee
                  </Link>
                  .
                </label>
              </div>
              {errors.termsAccepted && (
                <p className="text-xs text-danger font-medium">
                  {errors.termsAccepted.message}
                </p>
              )}
            </div>

            {/* Submit Button (Pill Shape) */}
            <button
              type="submit"
              disabled={isLoading || isGoogleLoading}
              className="w-full py-3 px-6 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
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

          {/* Privacy Guarantee Note */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>Encrypted with MongoDB & Better Auth security</span>
          </div>
        </div>

        {/* Footer Link to Login */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-primary hover:text-accent transition-colors duration-200"
          >
            Sign In →
          </Link>
        </p>
      </div>
    </div>
  );
}
