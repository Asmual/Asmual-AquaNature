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
  Calendar,
  Shield,
  Camera,
  Check,
  Loader2,
  Sparkles,
  ShoppingBag,
  Heart,
  ArrowLeft,
  Save,
  CheckCircle2,
  Upload,
} from "lucide-react";
import { useSession, authClient } from "@/lib/auth-client";
import { uploadToImgBB } from "@/lib/imgbb";

const AQUATIC_AVATARS = [
  {
    id: "default",
    name: "Aqua Mascot",
    src: "/images/default-avatar.svg",
    category: "Classic",
  },
  {
    id: "alien-betta",
    name: "Alien Betta",
    src: "/images/Fish/Fighter/Alien Betta Fish.jpg",
    category: "Betta",
  },
  {
    id: "gold-guppy",
    name: "24k Gold Guppy",
    src: "/images/Fish/Guppy/24k Gold.jpg",
    category: "Guppy",
  },
  {
    id: "nemo",
    name: "Nemo Clownfish",
    src: "/images/Fish/SeaWater Fish/Nemo FIsh.jpg",
    category: "Marine",
  },
  {
    id: "neon-tetra",
    name: "Neon Tetra",
    src: "/images/Fish/Mix fish/Neon Tetra.jpg",
    category: "Freshwater",
  },
  {
    id: "bonsai",
    name: "Living Bonsai",
    src: "/images/Plants/Bonsai Plant/B.jpg",
    category: "Flora",
  },
  {
    id: "water-lily",
    name: "Exotic Water Lily",
    src: "/images/Plants/Flowers Plant/Water Lily.jpg",
    category: "Flora",
  },
  {
    id: "monstera",
    name: "Lush Monstera",
    src: "/images/Plants/Indoor Plants/Monstera.jpg",
    category: "Indoor",
  },
];

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const [customName, setCustomName] = useState<string | null>(null);
  const [customPhone, setCustomPhone] = useState<string | null>(null);
  const [chosenAvatar, setChosenAvatar] = useState<string | null>(null);
  const [customAvatarUrl, setCustomAvatarUrl] = useState("");
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [isUpdatingAvatar, setIsUpdatingAvatar] = useState(false);
  const [isUploadingToImgBB, setIsUploadingToImgBB] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "avatar" | "settings">("overview");

  // Handle direct file upload to ImgBB
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

    setIsUploadingToImgBB(true);
    const toastId = toast.loading("Uploading photo to ImgBB...");
    try {
      const uploadedUrl = await uploadToImgBB(file);
      setCustomAvatarUrl(uploadedUrl);
      setChosenAvatar(uploadedUrl);
      toast.success("Image uploaded to ImgBB! Click 'Save New Avatar' to apply.", {
        id: toastId,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to upload image";
      toast.error(msg, { id: toastId });
    } finally {
      setIsUploadingToImgBB(false);
      e.target.value = "";
    }
  };

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending || !session?.user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-xs text-muted-foreground font-medium">
          Loading your aquatic profile...
        </p>
      </div>
    );
  }

  const user = session.user;
  const name = customName ?? (user.name || "");
  const phoneNumber = customPhone ?? ((user as { phoneNumber?: string })?.phoneNumber || "");
  const selectedAvatar = chosenAvatar ?? (user.image || "/images/default-avatar.svg");
  const userRole = (user as { role?: string })?.role || "Member";
  const userAvatar = user.image || "/images/default-avatar.svg";

  // Handle avatar update
  const handleSaveAvatar = async () => {
    const avatarToSave = customAvatarUrl.trim() || selectedAvatar;
    if (!avatarToSave) {
      toast.error("Please select an avatar or enter an image URL");
      return;
    }

    setIsUpdatingAvatar(true);
    try {
      const response = await authClient.updateUser({
        image: avatarToSave,
      });

      if (response?.error) {
        toast.error(response.error.message || "Failed to update avatar");
      } else {
        toast.success("Avatar updated successfully! Your new look is live.");
        setChosenAvatar(avatarToSave);
        router.refresh();
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Failed to update avatar";
      toast.error(errorMsg);
    } finally {
      setIsUpdatingAvatar(false);
    }
  };

  // Handle personal info update
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    setIsUpdatingProfile(true);
    try {
      const response = await authClient.updateUser({
        name: name.trim(),
      });

      if (response?.error) {
        toast.error(response.error.message || "Failed to update profile");
      } else {
        toast.success("Profile details updated successfully!");
        setCustomName(name.trim());
        router.refresh();
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Failed to update profile";
      toast.error(errorMsg);
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-surface/50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Back Link & Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Verified Collector Account</span>
          </div>
        </div>

        {/* 1. HERO PROFILE CARD */}
        <div className="relative rounded-3xl bg-white border border-border shadow-sm overflow-hidden p-6 sm:p-8">
          {/* Top Decorative Gradient Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-primary" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* User Avatar with Edit Trigger */}
            <div className="relative group">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg ring-2 ring-accent/40 bg-primary shrink-0">
                <Image
                  src={userAvatar}
                  alt={user.name || "User Avatar"}
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  priority
                  className="object-cover"
                />
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("avatar")}
                className="absolute bottom-0 right-0 p-2 rounded-full bg-primary hover:bg-primary-dark text-white border-2 border-white shadow-md transition-transform hover:scale-105"
                title="Change Avatar"
              >
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Profile Overview Details */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
                  {user.name}
                </h1>
                <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent text-primary self-center sm:self-auto">
                  {userRole}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center sm:justify-start gap-1.5">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>{user.email}</span>
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>
                    Member since {new Date(user.createdAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-accent" />
                  <span>Live Guarantee Active</span>
                </div>
              </div>
            </div>

            {/* Change Avatar CTA */}
            <div className="shrink-0">
              <button
                onClick={() => setActiveTab("avatar")}
                className="px-5 py-2.5 rounded-full bg-surface hover:bg-accent-soft border border-border hover:border-accent text-primary font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow-sm"
              >
                <Camera className="w-4 h-4 text-accent" />
                <span>Change Avatar</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-8 pt-4 border-t border-border flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "overview"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-surface text-muted-foreground hover:text-primary hover:bg-white"
              }`}
            >
              Account Overview
            </button>
            <button
              onClick={() => setActiveTab("avatar")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "avatar"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-surface text-muted-foreground hover:text-primary hover:bg-white"
              }`}
            >
              Change Avatar
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "settings"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-surface text-muted-foreground hover:text-primary hover:bg-white"
              }`}
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* 2. TAB CONTENT */}

        {/* TAB A: ACCOUNT OVERVIEW */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-border shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-primary">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-primary">
                Orders & Shipments
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Track live fish deliveries, water plants, and bonsai status with real-time oxygen packing dispatch alerts.
              </p>
              <Link
                href="/"
                className="inline-block text-xs font-bold text-primary hover:text-accent transition-colors underline decoration-accent"
              >
                Browse Shop →
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-danger">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-primary">
                Saved Wishlist
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Keep an eye on rare Betta drops, upcoming guppy strain imports, and seasonal blooming water lilies.
              </p>
              <Link
                href="#categories"
                className="inline-block text-xs font-bold text-primary hover:text-accent transition-colors underline decoration-accent"
              >
                View Collections →
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-base text-primary">
                Live Arrival Guarantee
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All pureline fish orders are packaged with oxygen cylinders and heat/cool insulation pads.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-accent">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Coverage Verified</span>
              </span>
            </div>
          </div>
        )}

        {/* TAB B: INTERACTIVE AVATAR SELECTOR */}
        {activeTab === "avatar" && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-border shadow-sm space-y-6">
            <div>
              <h2 className="font-heading font-extrabold text-xl text-primary tracking-tight">
                Select Your Aquatic Avatar
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Choose a handcrafted aquatic avatar or enter your custom image URL. Click Save to apply changes across your account.
              </p>
            </div>

            {/* Current Preview */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent shadow-md bg-primary shrink-0">
                <Image
                  src={customAvatarUrl.trim() || selectedAvatar}
                  alt="Avatar Preview"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-primary">Live Avatar Preview</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  This avatar will be displayed in your Navbar, profile, and reviews.
                </p>
              </div>
            </div>

            {/* Curated Aquatic Avatars Grid */}
            <div>
              <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-3">
                Curated Collection Avatars
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {AQUATIC_AVATARS.map((av) => {
                  const isChosen = selectedAvatar === av.src && !customAvatarUrl;
                  return (
                    <button
                      key={av.id}
                      type="button"
                      onClick={() => {
                        setChosenAvatar(av.src);
                        setCustomAvatarUrl("");
                      }}
                      className={`relative flex flex-col items-center p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isChosen
                          ? "border-accent ring-2 ring-accent/30 bg-accent-soft/40 shadow-sm"
                          : "border-border hover:border-accent/60 bg-white hover:bg-surface"
                      }`}
                    >
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-border shadow-inner bg-primary-dark">
                        <Image
                          src={av.src}
                          alt={av.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs font-bold text-primary mt-2 text-center">
                        {av.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {av.category}
                      </span>

                      {isChosen && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-accent text-primary flex items-center justify-center shadow">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Device Upload (Powered by ImgBB) */}
            <div className="pt-2 border-t border-border space-y-3">
              <label className="block text-xs font-semibold text-foreground">
                Upload Photo from Device (ImgBB Cloud Hosting)
              </label>
              <div className="p-4 rounded-2xl border-2 border-dashed border-border hover:border-accent bg-surface/50 text-center space-y-2.5 transition-colors">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-primary mb-1">
                    <Upload className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-xs font-bold text-primary">
                    Upload Your Own Avatar Picture
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Directly uploads to ImgBB and instantly sets your account avatar.
                  </p>
                </div>

                <div>
                  <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-xs font-semibold shadow-sm cursor-pointer transition-all duration-200">
                    {isUploadingToImgBB ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Uploading to ImgBB...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4" />
                        <span>Select Image File</span>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      disabled={isUploadingToImgBB}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Custom URL Input */}
            <div className="space-y-2 pt-2 border-t border-border">
              <label className="block text-xs font-semibold text-foreground">
                Or Use Custom Image URL
              </label>
              <input
                type="url"
                value={customAvatarUrl}
                onChange={(e) => setCustomAvatarUrl(e.target.value)}
                placeholder="https://example.com/your-avatar.jpg"
                className="w-full bg-surface border border-border rounded-[10px] px-3.5 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
              />
              <p className="text-[11px] text-muted-foreground">
                Supports direct image links from ImgBB, Cloudinary, Unsplash, Google, etc.
              </p>
            </div>

            {/* Save Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleSaveAvatar}
                disabled={isUpdatingAvatar}
                className="px-6 py-2.5 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isUpdatingAvatar ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span>Saving Avatar...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save New Avatar</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* TAB C: EDIT PROFILE SETTINGS */}
        {activeTab === "settings" && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-border shadow-sm space-y-6">
            <div>
              <h2 className="font-heading font-extrabold text-xl text-primary tracking-tight">
                Edit Profile Information
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Update your account display name and contact details.
              </p>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4 max-w-lg">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-foreground">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-muted-foreground absolute left-3 pointer-events-none" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-surface border border-border rounded-[10px] pl-9 pr-3.5 py-2 text-xs sm:text-sm text-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email (Read Only) */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-foreground">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-muted-foreground absolute left-3 pointer-events-none" />
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="w-full bg-surface/70 border border-border rounded-[10px] pl-9 pr-3.5 py-2 text-xs sm:text-sm text-muted-foreground cursor-not-allowed"
                  />
                </div>
                <p className="text-[10px] text-muted-foreground">
                  Email is linked to your authentication provider.
                </p>
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-foreground">
                  Phone Number
                </label>
                <div className="relative flex items-center">
                  <Phone className="w-4 h-4 text-muted-foreground absolute left-3 pointer-events-none" />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setCustomPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full bg-surface border border-border rounded-[10px] pl-9 pr-3.5 py-2 text-xs sm:text-sm text-foreground focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isUpdatingProfile}
                  className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isUpdatingProfile ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Saving Changes...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>Update Profile</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
