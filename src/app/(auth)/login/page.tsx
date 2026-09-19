"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Eye, EyeOff, Lock, Mail, ArrowRight, Loader2, Sparkles } from "lucide-react";
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
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface via-background to-surface/30">
      <div className="w-full max-w-md space-y-8">
        {/* Header with Logo */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Logo size="lg" />
          <div className="space-y-1">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground max-w-xs">
              Sign in to manage your aquarium orders, wishlist, and aquatic care guides.
            </p>
          </div>
        </div>

        {/* Card Wrapper */}
        <div className="bg-white rounded-2xl border border-border shadow-xl p-6 sm:p-8 space-y-6">
          {/* 1. GOOGLE SIGN IN BUTTON */}
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
            <span className="absolute bg-white px-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              Or with email
            </span>
          </div>

          {/* 2. EMAIL & PASSWORD FORM */}
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

            {/* Submit Button (Pill Shape) */}
            <button
              type="submit"
              disabled={isLoading || isGoogleLoading}
              className="w-full py-3 px-6 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
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

          {/* Quick Demo Login Option */}
          <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <span>Testing the website?</span>
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

        {/* Footer Link to Register */}
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-primary hover:text-accent transition-colors duration-200"
          >
            Create an Account →
          </Link>
        </p>
      </div>
    </div>
  );
}
