/**
 * Global Application Types and Data Interfaces
 * Asmual-AquaNature / Aquatic Plantopedia
 */

export interface TUser {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role?: "user" | "admin";
  phoneNumber?: string;
  createdAt: Date | string;
  updatedAt?: Date | string;
}

export interface TCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
  featured?: boolean;
}

export interface TFish {
  id: string;
  name: string;
  scientificName?: string;
  category: "fighter" | "guppy" | "mix" | "seawater";
  price: number;
  discountPrice?: number;
  image: string;
  images?: string[];
  stock: number;
  temperament?: "Peaceful" | "Aggressive" | "Semi-Aggressive";
  waterType: "Freshwater" | "Saltwater" | "Brackish";
  description: string;
  rating?: number;
  ratingCount?: number;
  isHotDeal?: boolean;
}

export interface TPlant {
  id: string;
  name: string;
  category: "indoor" | "bonsai" | "flower" | "aquatic";
  price: number;
  discountPrice?: number;
  image: string;
  images?: string[];
  stock: number;
  lightRequirement?: "Low" | "Medium" | "High";
  careLevel?: "Easy" | "Moderate" | "Advanced";
  description: string;
  rating?: number;
  ratingCount?: number;
  isHotDeal?: boolean;
}

export type TProduct = (TFish | TPlant) & {
  type: "fish" | "plant" | "gear";
};

export interface TApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}
