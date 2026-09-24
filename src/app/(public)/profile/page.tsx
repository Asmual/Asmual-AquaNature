"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
  Loader2,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useSession, authClient } from "@/lib/auth-client";
import { uploadToImgBB } from "@/lib/imgbb";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("/images/default-avatar.svg");

  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  // Fetch full profile data from API and session
  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setAvatarUrl(session.user.image || "/images/default-avatar.svg");

      const sessionUserData = session.user as Record<string, unknown>;
      if (sessionUserData.phoneNumber) setPhoneNumber(String(sessionUserData.phoneNumber));
      if (sessionUserData.gender) setGender(String(sessionUserData.gender));
      if (sessionUserData.location) setLocation(String(sessionUserData.location));

      fetch("/api/user/profile")
        .then((res) => res.json())
        .then((data) => {
          if (data?.user) {
            if (data.user.name) setName(data.user.name);
            if (data.user.image) setAvatarUrl(data.user.image);
            if (data.user.phoneNumber) setPhoneNumber(data.user.phoneNumber);
            if (data.user.gender) setGender(data.user.gender);
            if (data.user.location) setLocation(data.user.location);
          }
        })
        .catch(() => {
          // silently fallback to session
        })
        .finally(() => {
          setIsLoadingProfile(false);
        });
    }
  }, [session]);

  // Handle direct file upload via avatar corner camera icon
  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file (PNG, JPG, WEBP)");
      return;
    }

    if (file.size > 16 * 1024 * 1024) {
      toast.error("Image file size must be smaller than 16MB");
      return;
    }

    setIsUploadingPhoto(true);
    const toastId = toast.loading("Uploading photo to ImgBB...");
    try {
      const uploadedUrl = await uploadToImgBB(file);
      setAvatarUrl(uploadedUrl);

      // Save to database & session
      await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: uploadedUrl }),
      });

      await authClient.updateUser({
        image: uploadedUrl,
      });

      toast.success("Avatar updated successfully!", { id: toastId });
      router.refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to upload photo";
      toast.error(msg, { id: toastId });
    } finally {
      setIsUploadingPhoto(false);
      e.target.value = "";
    }
  };

  // Handle profile form submit
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    setIsSaving(true);
    try {
      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phoneNumber: phoneNumber.trim(),
          gender,
          location: location.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to update profile");
      }

      await authClient.updateUser({
        name: name.trim(),
      });

      toast.success("Profile updated successfully!");
      router.refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to update profile";
      toast.error(msg);
    } finally {
      setIsSaving(false);
    }
  };

  if (isPending || !session?.user || isLoadingProfile) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-xs text-muted-foreground font-medium">
          Loading your profile...
        </p>
      </div>
    );
  }

  const user = session.user;
  const userRole = (user as { role?: string })?.role || "Member";

  return (
    <div className="w-full min-h-[calc(100vh-130px)] bg-surface/50 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Back Link & Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Collector Account</span>
          </div>
        </div>

        {/* Profile Card */}
        <div className="relative rounded-3xl bg-white border border-border shadow-sm overflow-hidden p-6 sm:p-8">
          {/* Top Decorative Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

          {/* Header with Avatar and Basic Info */}
          <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-border">
            {/* Avatar with Camera Icon Overlay on Corner */}
            <div className="relative group">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md ring-2 ring-accent/40 bg-primary-dark shrink-0">
                <Image
                  src={avatarUrl}
                  alt={name || "User Avatar"}
                  fill
                  sizes="96px"
                  priority
                  className="object-cover"
                />
                {isUploadingPhoto && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <Loader2 className="w-6 h-6 text-accent animate-spin" />
                  </div>
                )}
              </div>

              {/* Corner Camera Button (Direct file picker trigger) */}
              <label
                className={`absolute bottom-0 right-0 p-2 rounded-full bg-primary hover:bg-primary-dark text-white border-2 border-white shadow-md cursor-pointer transition-transform hover:scale-110 flex items-center justify-center ${
                  isUploadingPhoto ? "pointer-events-none opacity-60" : ""
                }`}
                title="Change Avatar Photo"
              >
                <Camera className="w-4 h-4" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  disabled={isUploadingPhoto}
                  className="hidden"
                />
              </label>
            </div>

            <div className="text-center sm:text-left space-y-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="font-heading font-extrabold text-2xl text-primary tracking-tight">
                  {name || "User Profile"}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-accent-soft text-primary border border-accent/30">
                  {userRole}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{user.email}</p>
              <p className="text-[11px] text-muted-foreground/80">
                Click the camera icon on your avatar to upload a new profile picture.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSaveProfile} className="space-y-4 pt-6">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-foreground uppercase tracking-wider">
                Full Name
              </label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-surface border border-border rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Email Address (Read-only) */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider">
                  Email Address
                </label>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full bg-surface/70 border border-border rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-muted-foreground cursor-not-allowed"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-foreground uppercase tracking-wider">
                Phone Number
              </label>
              <div className="relative flex items-center">
                <Phone className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+880 1700-000000"
                  className="w-full bg-surface border border-border rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Gender & Location Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Gender */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-surface border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 cursor-pointer"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider">
                  Location / City
                </label>
                <div className="relative flex items-center">
                  <MapPin className="w-4 h-4 text-muted-foreground absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Dhaka, Bangladesh"
                    className="w-full bg-surface border border-border rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                disabled={isSaving}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Saving Changes...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
