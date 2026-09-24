// Auto-generated comprehensive category and species catalog
export interface TCategoryItem {
  id: string;
  name: string;
  scientificName?: string;
  bengaliName?: string;
  categoryId: "indoor" | "bonsai" | "flowers" | "guppy" | "fighter" | "marine";
  categoryName: string;
  type: "plant" | "fish";
  image: string;
  description: string;
  careLevel: "Easy" | "Moderate" | "Advanced";
  lightOrWater: string;
  temperature: string;
  maintenance: {
    wateringOrWaterChange: string;
    soilOrSubstrate?: string;
    feedingOrFertilizer: string;
    pruningOrTankSize?: string;
    tips: string[];
  };
  tags: string[];
}

export interface TCategoryMeta {
  id: "indoor" | "bonsai" | "flowers" | "guppy" | "fighter" | "marine";
  slug: string;
  name: string;
  bengaliName: string;
  type: "plant" | "fish";
  badge: string;
  tagline: string;
  description: string;
  image: string;
  folder: string;
  itemCount: number;
}

export const CATEGORIES_META: TCategoryMeta[] = [
  {
    "id": "indoor",
    "slug": "indoor",
    "name": "Indoor Plants",
    "bengaliName": "ইনডোর প্ল্যান্টস",
    "type": "plant",
    "badge": "Air Purifying",
    "tagline": "Lush, shade-tolerant foliage & air-purifying natural greenery",
    "description": "Transform your home and workspace into a soothing sanctuary. Our indoor plants are acclimatized to indoor ambient lighting, requiring minimal fuss while effectively filtering airborne toxins.",
    "image": "/images/Plants/Indoor Plants/Monstera.jpg",
    "folder": "Plants/Indoor Plants",
    "itemCount": 51
  },
  {
    "id": "bonsai",
    "slug": "bonsai",
    "name": "Living Bonsai Art",
    "bengaliName": "বনসাই প্ল্যান্টস",
    "type": "plant",
    "badge": "Ancient Craft",
    "tagline": "Sculptured miniature trees embodying decades of botanical artistry",
    "description": "Centuries-old living art curated for modern spaces. From resilient dwarf Ficus to weeping jade and flowering species, each bonsai is trained in traditional Japanese and Chinese aesthetics.",
    "image": "/images/Plants/Bonsai Plant/B.jpg",
    "folder": "Plants/Bonsai Plant",
    "itemCount": 36
  },
  {
    "id": "flowers",
    "slug": "flowers",
    "name": "Flower Plants",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস",
    "type": "plant",
    "badge": "Vibrant Blooms",
    "tagline": "Exotic water lilies, garden blossoms & fragrant flowering varieties",
    "description": "Infuse your garden, balcony, or pond with vibrant color and natural perfume. Featuring rare tropical water lilies, star jasmines, roses, and multi-season flower varieties.",
    "image": "/images/Plants/Flowers Plant/Water Lily.jpg",
    "folder": "Plants/Flowers Plant",
    "itemCount": 114
  },
  {
    "id": "guppy",
    "slug": "guppy",
    "name": "Pureline Guppies",
    "bengaliName": "পিয়োরলাইন গাপ্পি",
    "type": "fish",
    "badge": "Champion Strains",
    "tagline": "High-grade pureline livebearers with striking delta and ribbon fins",
    "description": "Breeder-certified pureline strains raised in optimal mineral water. High vitality, dazzling dorsal displays, and robust genetics from 24K Full Gold to Albino Blue Topaz.",
    "image": "/images/Fish/Guppy/24k Gold.jpg",
    "folder": "Fish/Guppy",
    "itemCount": 46
  },
  {
    "id": "fighter",
    "slug": "fighter",
    "name": "Fighter / Betta",
    "bengaliName": "ফাইটার / বেটা ফিশ",
    "type": "fish",
    "badge": "Show Grade",
    "tagline": "Majestic Halfmoons, Alien Bettas, Dumbo Ears & Galaxy Kois",
    "description": "The jewel of the aquarium hobby. Individual specimen bettas with symmetrical finnage, vibrant chromatic patterns, and bold personalities conditioned for prime wellness.",
    "image": "/images/Fish/Fighter/Alien Betta Fish.jpg",
    "folder": "Fish/Fighter",
    "itemCount": 11
  },
  {
    "id": "marine",
    "slug": "marine",
    "name": "SeaWater Fish",
    "bengaliName": "সি ওয়াটার ফিশ",
    "type": "fish",
    "badge": "Reef Safe",
    "tagline": "Exquisite marine clownfish, vibrant tangs & saltwater reef specimens",
    "description": "Vibrant coral reef dwellers carefully quarantined and acclimatized to synthetic sea salt environments. Perfectly suited for reef aquariums and saltwater enthusiasts.",
    "image": "/images/Fish/SeaWater Fish/Nemo FIsh.jpg",
    "folder": "Fish/SeaWater Fish",
    "itemCount": 6
  }
];

export const CATEGORY_ITEMS: TCategoryItem[] = [
  {
    "id": "indoor-1",
    "name": "Aglonema 2",
    "scientificName": "Aglonema 2 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #1",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Aglonema-2.jpg",
    "description": "A prime, hand-selected specimen of Aglonema 2 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-2",
    "name": "Aglonema",
    "scientificName": "Aglonema Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #2",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Aglonema.jpg",
    "description": "A prime, hand-selected specimen of Aglonema representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-3",
    "name": "Aloe Vera",
    "scientificName": "Aloe Vera Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #3",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Aloe Vera.jpg",
    "description": "A prime, hand-selected specimen of Aloe Vera representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-4",
    "name": "Anthurium",
    "scientificName": "Anthurium Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #4",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Anthurium.jpg",
    "description": "A prime, hand-selected specimen of Anthurium representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Gentle Filtered Shade / Medium Indirect Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Keep soil evenly moist using filtered or rainwater; needs 60%+ humidity",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "High Humidity",
      "Exotic"
    ]
  },
  {
    "id": "indoor-5",
    "name": "Bunny ears cactus",
    "scientificName": "Bunny ears cactus Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #5",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Bunny ears cactus.jpg",
    "description": "A prime, hand-selected specimen of Bunny ears cactus representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight to Bright Light (4-6 hrs)",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water sparingly every 12-18 days; soil must dry completely",
      "soilOrSubstrate": "Gritty cactus and succulent potting mix with coarse sand",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "Succulent",
      "Low Water"
    ]
  },
  {
    "id": "indoor-6",
    "name": "Buterfly",
    "scientificName": "Buterfly Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #6",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Buterfly.jpg",
    "description": "A prime, hand-selected specimen of Buterfly representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-7",
    "name": "Calathea 1",
    "scientificName": "Calathea 1 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #7",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Calathea-1.jpg",
    "description": "A prime, hand-selected specimen of Calathea 1 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Gentle Filtered Shade / Medium Indirect Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Keep soil evenly moist using filtered or rainwater; needs 60%+ humidity",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "High Humidity",
      "Exotic"
    ]
  },
  {
    "id": "indoor-8",
    "name": "Calathea2",
    "scientificName": "Calathea2 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #8",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Calathea2.jpg",
    "description": "A prime, hand-selected specimen of Calathea2 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Gentle Filtered Shade / Medium Indirect Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Keep soil evenly moist using filtered or rainwater; needs 60%+ humidity",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "High Humidity",
      "Exotic"
    ]
  },
  {
    "id": "indoor-9",
    "name": "Coin Plants (1)",
    "scientificName": "Coin Plants (1) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #9",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Coin Plants- (1).jpg",
    "description": "A prime, hand-selected specimen of Coin Plants (1) representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-10",
    "name": "Coin Plants (2)",
    "scientificName": "Coin Plants (2) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #10",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Coin Plants- (2).jpg",
    "description": "A prime, hand-selected specimen of Coin Plants (2) representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-11",
    "name": "Coin Plants (3)",
    "scientificName": "Coin Plants (3) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #11",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Coin Plants- (3).jpg",
    "description": "A prime, hand-selected specimen of Coin Plants (3) representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-12",
    "name": "Coin Plants (4)",
    "scientificName": "Coin Plants (4) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #12",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Coin Plants- (4).jpg",
    "description": "A prime, hand-selected specimen of Coin Plants (4) representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-13",
    "name": "Croton Golden Dust Plant",
    "scientificName": "Croton Golden Dust Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #13",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Croton Golden Dust Plant.jpg",
    "description": "A prime, hand-selected specimen of Croton Golden Dust Plant representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-14",
    "name": "Culius",
    "scientificName": "Culius Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #14",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Culius.jpg",
    "description": "A prime, hand-selected specimen of Culius representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-15",
    "name": "Culius2",
    "scientificName": "Culius2 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #15",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Culius2.jpg",
    "description": "A prime, hand-selected specimen of Culius2 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-16",
    "name": "Culius3",
    "scientificName": "Culius3 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #16",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Culius3.jpg",
    "description": "A prime, hand-selected specimen of Culius3 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-17",
    "name": "Devil's Backbone 1",
    "scientificName": "Devil's Backbone 1 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #17",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Devil's Backbone-1.jpg",
    "description": "A prime, hand-selected specimen of Devil's Backbone 1 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-18",
    "name": "Devil's Backbone",
    "scientificName": "Devil's Backbone Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #18",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Devil's Backbone.jpg",
    "description": "A prime, hand-selected specimen of Devil's Backbone representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-19",
    "name": "Dump cane 1",
    "scientificName": "Dump cane 1 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #19",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Dump cane-1.jpg",
    "description": "A prime, hand-selected specimen of Dump cane 1 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-20",
    "name": "Dump cane 2",
    "scientificName": "Dump cane 2 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #20",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Dump cane-2.jpg",
    "description": "A prime, hand-selected specimen of Dump cane 2 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-21",
    "name": "e6b100c7ae1b52080379a42bcf3cbfe8",
    "scientificName": "e6b100c7ae1b52080379a42bcf3cbfe8 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #21",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/e6b100c7ae1b52080379a42bcf3cbfe8.jpg",
    "description": "A prime, hand-selected specimen of e6b100c7ae1b52080379a42bcf3cbfe8 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-22",
    "name": "Jade Plant",
    "scientificName": "Jade Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #22",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Jade Plant.jpg",
    "description": "A prime, hand-selected specimen of Jade Plant representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight to Bright Light (4-6 hrs)",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water sparingly every 12-18 days; soil must dry completely",
      "soilOrSubstrate": "Gritty cactus and succulent potting mix with coarse sand",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "Succulent",
      "Low Water"
    ]
  },
  {
    "id": "indoor-23",
    "name": "Lucky Bambo",
    "scientificName": "Lucky Bambo Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #23",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Lucky Bambo.jpg",
    "description": "A prime, hand-selected specimen of Lucky Bambo representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-24",
    "name": "Lucky Bamboo plant Golden",
    "scientificName": "Lucky Bamboo plant Golden Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #24",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Lucky Bamboo plant Golden.jpg",
    "description": "A prime, hand-selected specimen of Lucky Bamboo plant Golden representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Can grow in clean water (change weekly) or moist potting soil",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "Feng Shui",
      "Water Loving"
    ]
  },
  {
    "id": "indoor-25",
    "name": "Lucky Bamboo plant green",
    "scientificName": "Lucky Bamboo plant green Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #25",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Lucky Bamboo plant green.jpg",
    "description": "A prime, hand-selected specimen of Lucky Bamboo plant green representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Can grow in clean water (change weekly) or moist potting soil",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "Feng Shui",
      "Water Loving"
    ]
  },
  {
    "id": "indoor-26",
    "name": "Lucky bambos",
    "scientificName": "Lucky bambos Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #26",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Lucky bambos.jpg",
    "description": "A prime, hand-selected specimen of Lucky bambos representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-27",
    "name": "Money Plant 1",
    "scientificName": "Money Plant 1 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #27",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Money Plant-1.jpg",
    "description": "A prime, hand-selected specimen of Money Plant 1 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-28",
    "name": "Money Plant 2",
    "scientificName": "Money Plant 2 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #28",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Money Plant-2.jpg",
    "description": "A prime, hand-selected specimen of Money Plant 2 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-29",
    "name": "Money Plants 2",
    "scientificName": "Money Plants 2 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #29",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Money Plants-2.jpg",
    "description": "A prime, hand-selected specimen of Money Plants 2 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-30",
    "name": "Money Plants",
    "scientificName": "Money Plants Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #30",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Money Plants.jpg",
    "description": "A prime, hand-selected specimen of Money Plants representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-31",
    "name": "Monstera",
    "scientificName": "Monstera Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #31",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Monstera.jpg",
    "description": "A prime, hand-selected specimen of Monstera representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "Climber",
      "Large Leaf"
    ]
  },
  {
    "id": "indoor-32",
    "name": "Peace Lily",
    "scientificName": "Peace Lily Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #32",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Peace Lily.jpg",
    "description": "A prime, hand-selected specimen of Peace Lily representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-33",
    "name": "Pencil cactus plant",
    "scientificName": "Pencil cactus plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #33",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Pencil cactus plant.jpg",
    "description": "A prime, hand-selected specimen of Pencil cactus plant representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight to Bright Light (4-6 hrs)",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water sparingly every 12-18 days; soil must dry completely",
      "soilOrSubstrate": "Gritty cactus and succulent potting mix with coarse sand",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "Succulent",
      "Low Water"
    ]
  },
  {
    "id": "indoor-34",
    "name": "Philodendron",
    "scientificName": "Philodendron Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #34",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Philodendron.jpg",
    "description": "A prime, hand-selected specimen of Philodendron representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "Climber",
      "Large Leaf"
    ]
  },
  {
    "id": "indoor-35",
    "name": "Purple Heart",
    "scientificName": "Purple Heart Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #35",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Purple Heart.jpg",
    "description": "A prime, hand-selected specimen of Purple Heart representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-36",
    "name": "Reo Plant",
    "scientificName": "Reo Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #36",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Reo Plant.jpg",
    "description": "A prime, hand-selected specimen of Reo Plant representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-37",
    "name": "Rubber Plannt",
    "scientificName": "Rubber Plannt Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #37",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Rubber Plannt.jpg",
    "description": "A prime, hand-selected specimen of Rubber Plannt representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-38",
    "name": "Singinium",
    "scientificName": "Singinium Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #38",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Singinium.jpg",
    "description": "A prime, hand-selected specimen of Singinium representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-39",
    "name": "Singunium 2",
    "scientificName": "Singunium 2 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #39",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Singunium-2.jpg",
    "description": "A prime, hand-selected specimen of Singunium 2 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-40",
    "name": "Snak plant Mini",
    "scientificName": "Snak plant Mini Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #40",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Snak plant-Mini.jpg",
    "description": "A prime, hand-selected specimen of Snak plant Mini representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-41",
    "name": "Snak plant",
    "scientificName": "Snak plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #41",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Snak plant.jpg",
    "description": "A prime, hand-selected specimen of Snak plant representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-42",
    "name": "Succulent plant1",
    "scientificName": "Succulent plant1 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #42",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Succulent plant1.jpg",
    "description": "A prime, hand-selected specimen of Succulent plant1 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight to Bright Light (4-6 hrs)",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water sparingly every 12-18 days; soil must dry completely",
      "soilOrSubstrate": "Gritty cactus and succulent potting mix with coarse sand",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "Succulent",
      "Low Water"
    ]
  },
  {
    "id": "indoor-43",
    "name": "U 2",
    "scientificName": "U 2 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #43",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/U-2.jpg",
    "description": "A prime, hand-selected specimen of U 2 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-44",
    "name": "u",
    "scientificName": "u Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #44",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/u.jpg",
    "description": "A prime, hand-selected specimen of u representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-45",
    "name": "u3",
    "scientificName": "u3 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #45",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/u3.jpg",
    "description": "A prime, hand-selected specimen of u3 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-46",
    "name": "u7",
    "scientificName": "u7 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #46",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/u7.jpg",
    "description": "A prime, hand-selected specimen of u7 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-47",
    "name": "u8",
    "scientificName": "u8 Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #47",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/u8.jpg",
    "description": "A prime, hand-selected specimen of u8 representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-48",
    "name": "Zebrina",
    "scientificName": "Zebrina Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #48",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Zebrina.jpg",
    "description": "A prime, hand-selected specimen of Zebrina representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "indoor-49",
    "name": "ZZ Plant",
    "scientificName": "ZZ Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #49",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/ZZ Plant.jpg",
    "description": "A prime, hand-selected specimen of ZZ Plant representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Tolerates Low Light to High Indirect Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Extremely drought tolerant; water once every 2-3 weeks",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "Beginner Friendly",
      "Hardy"
    ]
  },
  {
    "id": "indoor-50",
    "name": "ZZ",
    "scientificName": "ZZ Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #50",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/ZZ.jpg",
    "description": "A prime, hand-selected specimen of ZZ representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Tolerates Low Light to High Indirect Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Extremely drought tolerant; water once every 2-3 weeks",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier",
      "Beginner Friendly",
      "Hardy"
    ]
  },
  {
    "id": "indoor-51",
    "name": "ক্যালডিয়াম (Caladium)",
    "scientificName": "ক্যালডিয়াম (Caladium) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস #51",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/ক্যালডিয়াম (Caladium).jpg",
    "description": "A prime, hand-selected specimen of ক্যালডিয়াম (Caladium) representing our highest health and aesthetic standards in the Indoor Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C (65°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water every 5-7 days; let top 2 inches dry out",
      "soilOrSubstrate": "Well-draining potting mix with perlite, peat moss & orchid bark",
      "feedingOrFertilizer": "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer",
      "pruningOrTankSize": "Prune yellowing leaves at base with sanitized shears",
      "tips": [
        "Keep away from direct cold AC vents or dry heating sources.",
        "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
        "Ensure pot has drainage holes to prevent root rot."
      ]
    },
    "tags": [
      "Indoor",
      "Foliage",
      "Air Purifier"
    ]
  },
  {
    "id": "bonsai-1",
    "name": "Amm 2",
    "scientificName": "Amm 2 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #1",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Amm-2.jpg",
    "description": "A prime, hand-selected specimen of Amm 2 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-2",
    "name": "Amm",
    "scientificName": "Amm Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #2",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Amm.jpg",
    "description": "A prime, hand-selected specimen of Amm representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-3",
    "name": "B",
    "scientificName": "B Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #3",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/B.jpg",
    "description": "A prime, hand-selected specimen of B representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-4",
    "name": "Bagan Bilash",
    "scientificName": "Bagan Bilash Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #4",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Bagan Bilash.jpg",
    "description": "A prime, hand-selected specimen of Bagan Bilash representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-5",
    "name": "China bot 1",
    "scientificName": "China bot 1 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #5",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/China bot-1.jpg",
    "description": "A prime, hand-selected specimen of China bot 1 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-6",
    "name": "Crishnachura",
    "scientificName": "Crishnachura Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #6",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Crishnachura.jpg",
    "description": "A prime, hand-selected specimen of Crishnachura representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-7",
    "name": "Deshi 1",
    "scientificName": "Deshi 1 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #7",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Deshi-1.jpg",
    "description": "A prime, hand-selected specimen of Deshi 1 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-8",
    "name": "Deshi 2",
    "scientificName": "Deshi 2 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #8",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Deshi-2.jpg",
    "description": "A prime, hand-selected specimen of Deshi 2 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-9",
    "name": "Ficus benjamina 1",
    "scientificName": "Ficus benjamina 1 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #9",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Ficus benjamina-1.jpg",
    "description": "A prime, hand-selected specimen of Ficus benjamina 1 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Ficus",
      "Hardy Bonsai"
    ]
  },
  {
    "id": "bonsai-10",
    "name": "Ficus benjamina 2",
    "scientificName": "Ficus benjamina 2 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #10",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Ficus benjamina-2.jpg",
    "description": "A prime, hand-selected specimen of Ficus benjamina 2 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Ficus",
      "Hardy Bonsai"
    ]
  },
  {
    "id": "bonsai-11",
    "name": "Ficus benjamina 3",
    "scientificName": "Ficus benjamina 3 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #11",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Ficus benjamina-3.jpg",
    "description": "A prime, hand-selected specimen of Ficus benjamina 3 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Ficus",
      "Hardy Bonsai"
    ]
  },
  {
    "id": "bonsai-12",
    "name": "Ficus benjamina 4",
    "scientificName": "Ficus benjamina 4 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #12",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Ficus benjamina-4.jpg",
    "description": "A prime, hand-selected specimen of Ficus benjamina 4 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Ficus",
      "Hardy Bonsai"
    ]
  },
  {
    "id": "bonsai-13",
    "name": "Ficus benjamina 5",
    "scientificName": "Ficus benjamina 5 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #13",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Ficus benjamina-5.jpg",
    "description": "A prime, hand-selected specimen of Ficus benjamina 5 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Ficus",
      "Hardy Bonsai"
    ]
  },
  {
    "id": "bonsai-14",
    "name": "Ficus benjamina",
    "scientificName": "Ficus benjamina Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #14",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Ficus benjamina.jpg",
    "description": "A prime, hand-selected specimen of Ficus benjamina representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Ficus",
      "Hardy Bonsai"
    ]
  },
  {
    "id": "bonsai-15",
    "name": "Ficus religiosa অশ্বত্থ গাছ 0",
    "scientificName": "Ficus religiosa অশ্বত্থ গাছ 0 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #15",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Ficus religiosa -অশ্বত্থ গাছ-0.jpg",
    "description": "A prime, hand-selected specimen of Ficus religiosa অশ্বত্থ গাছ 0 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Ficus",
      "Hardy Bonsai"
    ]
  },
  {
    "id": "bonsai-16",
    "name": "Ficus religiosa অশ্বত্থ গাছ 1",
    "scientificName": "Ficus religiosa অশ্বত্থ গাছ 1 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #16",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Ficus religiosa-অশ্বত্থ গাছ-1.jpg",
    "description": "A prime, hand-selected specimen of Ficus religiosa অশ্বত্থ গাছ 1 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Ficus",
      "Hardy Bonsai"
    ]
  },
  {
    "id": "bonsai-17",
    "name": "Ficus religiosa অশ্বত্থ গাছ 2",
    "scientificName": "Ficus religiosa অশ্বত্থ গাছ 2 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #17",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Ficus religiosa-অশ্বত্থ গাছ-2.jpg",
    "description": "A prime, hand-selected specimen of Ficus religiosa অশ্বত্থ গাছ 2 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Ficus",
      "Hardy Bonsai"
    ]
  },
  {
    "id": "bonsai-18",
    "name": "Jade 1",
    "scientificName": "Jade 1 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #18",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Jade-1.jpg",
    "description": "A prime, hand-selected specimen of Jade 1 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Succulent Bonsai"
    ]
  },
  {
    "id": "bonsai-19",
    "name": "Jade 2",
    "scientificName": "Jade 2 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #19",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Jade-2.jpg",
    "description": "A prime, hand-selected specimen of Jade 2 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Succulent Bonsai"
    ]
  },
  {
    "id": "bonsai-20",
    "name": "Jade 3",
    "scientificName": "Jade 3 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #20",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Jade-3.jpg",
    "description": "A prime, hand-selected specimen of Jade 3 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Succulent Bonsai"
    ]
  },
  {
    "id": "bonsai-21",
    "name": "Joba 3",
    "scientificName": "Joba 3 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #21",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Joba-3.jpg",
    "description": "A prime, hand-selected specimen of Joba 3 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-22",
    "name": "Joba",
    "scientificName": "Joba Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #22",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Joba.jpg",
    "description": "A prime, hand-selected specimen of Joba representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-23",
    "name": "Kamranga 1",
    "scientificName": "Kamranga 1 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #23",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Kamranga-1.jpg",
    "description": "A prime, hand-selected specimen of Kamranga 1 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-24",
    "name": "Kamranga 2",
    "scientificName": "Kamranga 2 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #24",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Kamranga-2.jpg",
    "description": "A prime, hand-selected specimen of Kamranga 2 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-25",
    "name": "Krinasura 1",
    "scientificName": "Krinasura 1 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #25",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Krinasura-1.jpg",
    "description": "A prime, hand-selected specimen of Krinasura 1 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-26",
    "name": "Lojja boti 2",
    "scientificName": "Lojja boti 2 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #26",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Lojja boti-2.jpg",
    "description": "A prime, hand-selected specimen of Lojja boti 2 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-27",
    "name": "Lojja Boti",
    "scientificName": "Lojja Boti Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #27",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Lojja Boti.jpg",
    "description": "A prime, hand-selected specimen of Lojja Boti representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-28",
    "name": "Pakur 1",
    "scientificName": "Pakur 1 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #28",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Pakur-1.jpg",
    "description": "A prime, hand-selected specimen of Pakur 1 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-29",
    "name": "Pakur 2",
    "scientificName": "Pakur 2 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #29",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Pakur-2.jpg",
    "description": "A prime, hand-selected specimen of Pakur 2 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-30",
    "name": "Pakur 3",
    "scientificName": "Pakur 3 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #30",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Pakur-3.jpg",
    "description": "A prime, hand-selected specimen of Pakur 3 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-31",
    "name": "Pakur 5",
    "scientificName": "Pakur 5 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #31",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Pakur-5.jpg",
    "description": "A prime, hand-selected specimen of Pakur 5 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-32",
    "name": "Pakur 6",
    "scientificName": "Pakur 6 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #32",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Pakur-6.jpg",
    "description": "A prime, hand-selected specimen of Pakur 6 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-33",
    "name": "Rongon 1",
    "scientificName": "Rongon 1 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #33",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Rongon-1.jpg",
    "description": "A prime, hand-selected specimen of Rongon 1 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-34",
    "name": "Rongon 2",
    "scientificName": "Rongon 2 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #34",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Rongon-2.jpg",
    "description": "A prime, hand-selected specimen of Rongon 2 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-35",
    "name": "Rongon 4",
    "scientificName": "Rongon 4 Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #35",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Rongon-4.jpg",
    "description": "A prime, hand-selected specimen of Rongon 4 representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "bonsai-36",
    "name": "Tetul ta",
    "scientificName": "Tetul ta Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস #36",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Tetul-ta.jpg",
    "description": "A prime, hand-selected specimen of Tetul ta representing our highest health and aesthetic standards in the Living Bonsai Art collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C (60°F - 86°F)",
    "maintenance": {
      "wateringOrWaterChange": "Check daily; water deeply when topsoil feels slightly dry",
      "soilOrSubstrate": "Traditional Bonsai blend (Akadama, pumice, and black lava rock)",
      "feedingOrFertilizer": "Slow-release organic bonsai fertilizer pellets every 4-6 weeks",
      "pruningOrTankSize": "Pinch new shoots and wire branches carefully in autumn/spring",
      "tips": [
        "Never allow the rootball to completely dry out.",
        "Rotate tree weekly to ensure symmetrical sunlight absorption.",
        "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
      ]
    },
    "tags": [
      "Bonsai",
      "Artisanal",
      "Dwarf Tree",
      "Living Sculpture"
    ]
  },
  {
    "id": "flowers-1",
    "name": "Alamanda 2",
    "scientificName": "Alamanda 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #1",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Alamanda-2.jpg",
    "description": "A prime, hand-selected specimen of Alamanda 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-2",
    "name": "Alamanda 3",
    "scientificName": "Alamanda 3 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #2",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Alamanda-3.jpg",
    "description": "A prime, hand-selected specimen of Alamanda 3 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-3",
    "name": "Alamanda",
    "scientificName": "Alamanda Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #3",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Alamanda.jpg",
    "description": "A prime, hand-selected specimen of Alamanda representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-4",
    "name": "Almanda",
    "scientificName": "Almanda Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #4",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Almanda.jpg",
    "description": "A prime, hand-selected specimen of Almanda representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-5",
    "name": "Bagan Bilash",
    "scientificName": "Bagan Bilash Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #5",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Bagan-Bilash.jpg",
    "description": "A prime, hand-selected specimen of Bagan Bilash representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-6",
    "name": "Bely 1",
    "scientificName": "Bely 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #6",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Bely-1.jpg",
    "description": "A prime, hand-selected specimen of Bely 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Intense Fragrance",
      "Night Blooming"
    ]
  },
  {
    "id": "flowers-7",
    "name": "Bely 2",
    "scientificName": "Bely 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #7",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Bely-2.jpg",
    "description": "A prime, hand-selected specimen of Bely 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Intense Fragrance",
      "Night Blooming"
    ]
  },
  {
    "id": "flowers-8",
    "name": "Bely",
    "scientificName": "Bely Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #8",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Bely.jpg",
    "description": "A prime, hand-selected specimen of Bely representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Intense Fragrance",
      "Night Blooming"
    ]
  },
  {
    "id": "flowers-9",
    "name": "Camelia",
    "scientificName": "Camelia Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #9",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Camelia.jpg",
    "description": "A prime, hand-selected specimen of Camelia representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-10",
    "name": "Chameli 1",
    "scientificName": "Chameli 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #10",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Chameli-1.jpg",
    "description": "A prime, hand-selected specimen of Chameli 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-11",
    "name": "Champa চাঁপা",
    "scientificName": "Champa চাঁপা Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #11",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Champa- চাঁপা .jpg",
    "description": "A prime, hand-selected specimen of Champa চাঁপা representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-12",
    "name": "China Togor 1",
    "scientificName": "China Togor 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #12",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/China-Togor-1.png",
    "description": "A prime, hand-selected specimen of China Togor 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-13",
    "name": "Chondro Mollika চন্দ্রমল্লিকা",
    "scientificName": "Chondro Mollika চন্দ্রমল্লিকা Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #13",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Chondro-Mollika-চন্দ্রমল্লিকা.jpg",
    "description": "A prime, hand-selected specimen of Chondro Mollika চন্দ্রমল্লিকা representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-14",
    "name": "Daisy",
    "scientificName": "Daisy Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #14",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Daisy.jpg",
    "description": "A prime, hand-selected specimen of Daisy representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-15",
    "name": "Dalia 0",
    "scientificName": "Dalia 0 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #15",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Dalia-0.jpg",
    "description": "A prime, hand-selected specimen of Dalia 0 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-16",
    "name": "Dalia 1",
    "scientificName": "Dalia 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #16",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Dalia-1.jpg",
    "description": "A prime, hand-selected specimen of Dalia 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-17",
    "name": "Dalia 10",
    "scientificName": "Dalia 10 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #17",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Dalia-10.jpg",
    "description": "A prime, hand-selected specimen of Dalia 10 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-18",
    "name": "Dalia 3",
    "scientificName": "Dalia 3 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #18",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Dalia-3.jpg",
    "description": "A prime, hand-selected specimen of Dalia 3 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-19",
    "name": "Dalia 4",
    "scientificName": "Dalia 4 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #19",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Dalia-4.jpg",
    "description": "A prime, hand-selected specimen of Dalia 4 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-20",
    "name": "Dulon Chapa 1",
    "scientificName": "Dulon Chapa 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #20",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Dulon Chapa-1.jpg",
    "description": "A prime, hand-selected specimen of Dulon Chapa 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-21",
    "name": "Ficus benjamina 1",
    "scientificName": "Ficus benjamina 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #21",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Ficus benjamina-1.jpg",
    "description": "A prime, hand-selected specimen of Ficus benjamina 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-22",
    "name": "Gondhoraj 1",
    "scientificName": "Gondhoraj 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #22",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Gondhoraj-1.jpg",
    "description": "A prime, hand-selected specimen of Gondhoraj 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-23",
    "name": "Gondhoraj 2",
    "scientificName": "Gondhoraj 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #23",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Gondhoraj-2.jpg",
    "description": "A prime, hand-selected specimen of Gondhoraj 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-24",
    "name": "HasnaHena 1",
    "scientificName": "HasnaHena 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #24",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/HasnaHena-1.jpg",
    "description": "A prime, hand-selected specimen of HasnaHena 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-25",
    "name": "HasnaHena 2",
    "scientificName": "HasnaHena 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #25",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/HasnaHena-2.jpg",
    "description": "A prime, hand-selected specimen of HasnaHena 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-26",
    "name": "Joba 0",
    "scientificName": "Joba 0 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #26",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Joba-0.jpg",
    "description": "A prime, hand-selected specimen of Joba 0 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-27",
    "name": "Jui (জুঁই) Star Jasmine 1",
    "scientificName": "Jui (জুঁই) Star Jasmine 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #27",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Jui (জুঁই)-Star Jasmine-1.jpg",
    "description": "A prime, hand-selected specimen of Jui (জুঁই) Star Jasmine 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Intense Fragrance",
      "Night Blooming"
    ]
  },
  {
    "id": "flowers-28",
    "name": "Jui (জুঁই) Star Jasmine",
    "scientificName": "Jui (জুঁই) Star Jasmine Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #28",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Jui (জুঁই)-Star Jasmine.jpg",
    "description": "A prime, hand-selected specimen of Jui (জুঁই) Star Jasmine representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Intense Fragrance",
      "Night Blooming"
    ]
  },
  {
    "id": "flowers-29",
    "name": "Kameni 1",
    "scientificName": "Kameni 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #29",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kameni-1.jpg",
    "description": "A prime, hand-selected specimen of Kameni 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Intense Fragrance",
      "Night Blooming"
    ]
  },
  {
    "id": "flowers-30",
    "name": "Kameni 2",
    "scientificName": "Kameni 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #30",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kameni-2.jpg",
    "description": "A prime, hand-selected specimen of Kameni 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Intense Fragrance",
      "Night Blooming"
    ]
  },
  {
    "id": "flowers-31",
    "name": "Kameni 3",
    "scientificName": "Kameni 3 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #31",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kameni-3.jpg",
    "description": "A prime, hand-selected specimen of Kameni 3 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Intense Fragrance",
      "Night Blooming"
    ]
  },
  {
    "id": "flowers-32",
    "name": "Kat Gulap 0",
    "scientificName": "Kat Gulap 0 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #32",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kat-Gulap-0.jpg",
    "description": "A prime, hand-selected specimen of Kat Gulap 0 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Fragrant",
      "Rose"
    ]
  },
  {
    "id": "flowers-33",
    "name": "Kat Gulap",
    "scientificName": "Kat Gulap Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #33",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kat-Gulap.jpg",
    "description": "A prime, hand-selected specimen of Kat Gulap representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Fragrant",
      "Rose"
    ]
  },
  {
    "id": "flowers-34",
    "name": "Kata Mukut 1",
    "scientificName": "Kata Mukut 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #34",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kata Mukut-1.jpg",
    "description": "A prime, hand-selected specimen of Kata Mukut 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-35",
    "name": "Kata Mukut 2",
    "scientificName": "Kata Mukut 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #35",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kata Mukut-2.jpg",
    "description": "A prime, hand-selected specimen of Kata Mukut 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-36",
    "name": "Kata Mukut 3",
    "scientificName": "Kata Mukut 3 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #36",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kata Mukut-3.jpg",
    "description": "A prime, hand-selected specimen of Kata Mukut 3 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-37",
    "name": "Kochuri pana",
    "scientificName": "Kochuri pana Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #37",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kochuri pana.jpg",
    "description": "A prime, hand-selected specimen of Kochuri pana representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-38",
    "name": "Kodom 1",
    "scientificName": "Kodom 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #38",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kodom-1.jpg",
    "description": "A prime, hand-selected specimen of Kodom 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-39",
    "name": "Kolaboti 1",
    "scientificName": "Kolaboti 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #39",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kolaboti-1.jpg",
    "description": "A prime, hand-selected specimen of Kolaboti 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-40",
    "name": "Kolaboti 2",
    "scientificName": "Kolaboti 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #40",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kolaboti-2.jpg",
    "description": "A prime, hand-selected specimen of Kolaboti 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-41",
    "name": "Kolaboti 3",
    "scientificName": "Kolaboti 3 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #41",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kolaboti-3.jpg",
    "description": "A prime, hand-selected specimen of Kolaboti 3 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-42",
    "name": "Kolke Kobori 1",
    "scientificName": "Kolke Kobori 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #42",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kolke Kobori-1.jpg",
    "description": "A prime, hand-selected specimen of Kolke Kobori 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-43",
    "name": "Kolke Kobori",
    "scientificName": "Kolke Kobori Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #43",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kolke-Kobori.jpg",
    "description": "A prime, hand-selected specimen of Kolke Kobori representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-44",
    "name": "kosmos",
    "scientificName": "kosmos Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #44",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/kosmos.jpg",
    "description": "A prime, hand-selected specimen of kosmos representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-45",
    "name": "Krishno Chura 1",
    "scientificName": "Krishno Chura 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #45",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Krishno Chura-1.jpg",
    "description": "A prime, hand-selected specimen of Krishno Chura 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-46",
    "name": "Krishno Chura 2",
    "scientificName": "Krishno Chura 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #46",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Krishno Chura-2.jpg",
    "description": "A prime, hand-selected specimen of Krishno Chura 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-47",
    "name": "KunjoLota",
    "scientificName": "KunjoLota Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #47",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/KunjoLota.jpg",
    "description": "A prime, hand-selected specimen of KunjoLota representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-48",
    "name": "Lanka Joba 1",
    "scientificName": "Lanka Joba 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #48",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lanka Joba-1.jpg",
    "description": "A prime, hand-selected specimen of Lanka Joba 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-49",
    "name": "Lantana camera 1",
    "scientificName": "Lantana camera 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #49",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lantana camera-1.jpg",
    "description": "A prime, hand-selected specimen of Lantana camera 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-50",
    "name": "Lantana camera 5",
    "scientificName": "Lantana camera 5 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #50",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lantana camera-5.jpg",
    "description": "A prime, hand-selected specimen of Lantana camera 5 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-51",
    "name": "Lantana camera 9",
    "scientificName": "Lantana camera 9 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #51",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lantana camera-9.jpg",
    "description": "A prime, hand-selected specimen of Lantana camera 9 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-52",
    "name": "Lantana camera",
    "scientificName": "Lantana camera Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #52",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lantana camera.jpg",
    "description": "A prime, hand-selected specimen of Lantana camera representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-53",
    "name": "Lantana camera 2",
    "scientificName": "Lantana camera 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #53",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lantana camera_2.jpg",
    "description": "A prime, hand-selected specimen of Lantana camera 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-54",
    "name": "Lily 1",
    "scientificName": "Lily 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #54",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lily-1.jpg",
    "description": "A prime, hand-selected specimen of Lily 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-55",
    "name": "Lily 2",
    "scientificName": "Lily 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #55",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lily-2.jpg",
    "description": "A prime, hand-selected specimen of Lily 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-56",
    "name": "Lojjaboti 2",
    "scientificName": "Lojjaboti 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #56",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lojjaboti-2.jpg",
    "description": "A prime, hand-selected specimen of Lojjaboti 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-57",
    "name": "LojjaBoti",
    "scientificName": "LojjaBoti Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #57",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/LojjaBoti.jpg",
    "description": "A prime, hand-selected specimen of LojjaBoti representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-58",
    "name": "Lotus পদ্ম (Podmo)",
    "scientificName": "Lotus পদ্ম (Podmo) Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #58",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lotus-পদ্ম (Podmo).jpg",
    "description": "A prime, hand-selected specimen of Lotus পদ্ম (Podmo) representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight (6+ hours for prolific blooming)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Submerged aquatic setting; water depth 25cm - 50cm above crown",
      "soilOrSubstrate": "Heavy clay aquatic planting soil capped with sand or gravel",
      "feedingOrFertilizer": "Slow-release aquatic fertilizer tablets pushed into root clay monthly",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Position container in still water away from turbulent fountain spray.",
        "Remove decaying underwater leaves regularly to keep water clear."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Aquatic",
      "Water Lily",
      "Pond Flora"
    ]
  },
  {
    "id": "flowers-59",
    "name": "Madhubi Lota",
    "scientificName": "Madhubi Lota Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #59",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Madhubi-Lota.jpg",
    "description": "A prime, hand-selected specimen of Madhubi Lota representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-60",
    "name": "MariGold 1",
    "scientificName": "MariGold 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #60",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/MariGold-1.jpg",
    "description": "A prime, hand-selected specimen of MariGold 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-61",
    "name": "MariGold 2",
    "scientificName": "MariGold 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #61",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/MariGold-2.jpg",
    "description": "A prime, hand-selected specimen of MariGold 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-62",
    "name": "MariGold",
    "scientificName": "MariGold Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #62",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/MariGold.jpg",
    "description": "A prime, hand-selected specimen of MariGold representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-63",
    "name": "Noyon Tara 1",
    "scientificName": "Noyon Tara 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #63",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Noyon Tara-1.jpg",
    "description": "A prime, hand-selected specimen of Noyon Tara 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-64",
    "name": "Noyon Tara",
    "scientificName": "Noyon Tara Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #64",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Noyon Tara.jpg",
    "description": "A prime, hand-selected specimen of Noyon Tara representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-65",
    "name": "Oprajita 0",
    "scientificName": "Oprajita 0 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #65",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Oprajita-0.jpg",
    "description": "A prime, hand-selected specimen of Oprajita 0 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-66",
    "name": "Oprajita 1",
    "scientificName": "Oprajita 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #66",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Oprajita-1.jpg",
    "description": "A prime, hand-selected specimen of Oprajita 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-67",
    "name": "Oprajita 2",
    "scientificName": "Oprajita 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #67",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Oprajita-2.jpg",
    "description": "A prime, hand-selected specimen of Oprajita 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-68",
    "name": "Oprajita",
    "scientificName": "Oprajita Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #68",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Oprajita.jpg",
    "description": "A prime, hand-selected specimen of Oprajita representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-69",
    "name": "Palash Tree",
    "scientificName": "Palash Tree Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #69",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Palash_Tree.jpg",
    "description": "A prime, hand-selected specimen of Palash Tree representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-70",
    "name": "petunia plant",
    "scientificName": "petunia plant Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #70",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/petunia plant.jpg",
    "description": "A prime, hand-selected specimen of petunia plant representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-71",
    "name": "Polash 1",
    "scientificName": "Polash 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #71",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Polash-1.jpg",
    "description": "A prime, hand-selected specimen of Polash 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-72",
    "name": "Polash",
    "scientificName": "Polash Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #72",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Polash.jpg",
    "description": "A prime, hand-selected specimen of Polash representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-73",
    "name": "Ponika পানিকা ফুল",
    "scientificName": "Ponika পানিকা ফুল Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #73",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Ponika-পানিকা ফুল.jpg",
    "description": "A prime, hand-selected specimen of Ponika পানিকা ফুল representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-74",
    "name": "Poppy 1",
    "scientificName": "Poppy 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #74",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Poppy-1.jpg",
    "description": "A prime, hand-selected specimen of Poppy 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-75",
    "name": "Poppy 2",
    "scientificName": "Poppy 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #75",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Poppy-2.jpg",
    "description": "A prime, hand-selected specimen of Poppy 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-76",
    "name": "Poppy 3",
    "scientificName": "Poppy 3 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #76",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Poppy-3.jpg",
    "description": "A prime, hand-selected specimen of Poppy 3 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-77",
    "name": "Portulica 1",
    "scientificName": "Portulica 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #77",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Portulica-1.jpg",
    "description": "A prime, hand-selected specimen of Portulica 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-78",
    "name": "Portulica 2",
    "scientificName": "Portulica 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #78",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Portulica-2.jpg",
    "description": "A prime, hand-selected specimen of Portulica 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-79",
    "name": "Rain lily 2",
    "scientificName": "Rain lily 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #79",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rain-lily-2.jpg",
    "description": "A prime, hand-selected specimen of Rain lily 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-80",
    "name": "Rain lily",
    "scientificName": "Rain lily Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #80",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rain-lily.jpg",
    "description": "A prime, hand-selected specimen of Rain lily representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-81",
    "name": "Rongon 2",
    "scientificName": "Rongon 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #81",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rongon-2.jpg",
    "description": "A prime, hand-selected specimen of Rongon 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-82",
    "name": "Rongon 3",
    "scientificName": "Rongon 3 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #82",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rongon-3.jpg",
    "description": "A prime, hand-selected specimen of Rongon 3 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-83",
    "name": "Rongon 4",
    "scientificName": "Rongon 4 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #83",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rongon-4.jpg",
    "description": "A prime, hand-selected specimen of Rongon 4 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-84",
    "name": "Rongon",
    "scientificName": "Rongon Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #84",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rongon.jpg",
    "description": "A prime, hand-selected specimen of Rongon representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-85",
    "name": "Rose 0",
    "scientificName": "Rose 0 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #85",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rose-0.jpg",
    "description": "A prime, hand-selected specimen of Rose 0 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Fragrant",
      "Rose"
    ]
  },
  {
    "id": "flowers-86",
    "name": "Rose 2",
    "scientificName": "Rose 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #86",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rose-2.jpg",
    "description": "A prime, hand-selected specimen of Rose 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Fragrant",
      "Rose"
    ]
  },
  {
    "id": "flowers-87",
    "name": "Shiuly",
    "scientificName": "Shiuly Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #87",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Shiuly.jpg",
    "description": "A prime, hand-selected specimen of Shiuly representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-88",
    "name": "shonda maloti",
    "scientificName": "shonda maloti Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #88",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/shonda maloti.jpg",
    "description": "A prime, hand-selected specimen of shonda maloti representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-89",
    "name": "STOL PODDO CONFEDERATE ROSE",
    "scientificName": "STOL PODDO CONFEDERATE ROSE Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #89",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/STOL PODDO-CONFEDERATE ROSE.jpg",
    "description": "A prime, hand-selected specimen of STOL PODDO CONFEDERATE ROSE representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight (6+ hours for prolific blooming)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Submerged aquatic setting; water depth 25cm - 50cm above crown",
      "soilOrSubstrate": "Heavy clay aquatic planting soil capped with sand or gravel",
      "feedingOrFertilizer": "Slow-release aquatic fertilizer tablets pushed into root clay monthly",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Position container in still water away from turbulent fountain spray.",
        "Remove decaying underwater leaves regularly to keep water clear."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Aquatic",
      "Water Lily",
      "Pond Flora"
    ]
  },
  {
    "id": "flowers-90",
    "name": "Stol Poddo",
    "scientificName": "Stol Poddo Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #90",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Stol Poddo.jpg",
    "description": "A prime, hand-selected specimen of Stol Poddo representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight (6+ hours for prolific blooming)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Submerged aquatic setting; water depth 25cm - 50cm above crown",
      "soilOrSubstrate": "Heavy clay aquatic planting soil capped with sand or gravel",
      "feedingOrFertilizer": "Slow-release aquatic fertilizer tablets pushed into root clay monthly",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Position container in still water away from turbulent fountain spray.",
        "Remove decaying underwater leaves regularly to keep water clear."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Aquatic",
      "Water Lily",
      "Pond Flora"
    ]
  },
  {
    "id": "flowers-91",
    "name": "Sunflower",
    "scientificName": "Sunflower Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #91",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Sunflower.jpg",
    "description": "A prime, hand-selected specimen of Sunflower representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-92",
    "name": "Tube Rose রাজনীগন্ধা 1",
    "scientificName": "Tube Rose রাজনীগন্ধা 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #92",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Tube Rose-রাজনীগন্ধা-1.jpg",
    "description": "A prime, hand-selected specimen of Tube Rose রাজনীগন্ধা 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Fragrant",
      "Rose"
    ]
  },
  {
    "id": "flowers-93",
    "name": "Tube Rose রাজনীগন্ধা 2",
    "scientificName": "Tube Rose রাজনীগন্ধা 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #93",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Tube Rose-রাজনীগন্ধা-2.jpg",
    "description": "A prime, hand-selected specimen of Tube Rose রাজনীগন্ধা 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Fragrant",
      "Rose"
    ]
  },
  {
    "id": "flowers-94",
    "name": "Tube Rose রাজনীগন্ধা",
    "scientificName": "Tube Rose রাজনীগন্ধা Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #94",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Tube Rose-রাজনীগন্ধা.jpg",
    "description": "A prime, hand-selected specimen of Tube Rose রাজনীগন্ধা representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Fragrant",
      "Rose"
    ]
  },
  {
    "id": "flowers-95",
    "name": "Tulip 1",
    "scientificName": "Tulip 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #95",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Tulip-1.jpg",
    "description": "A prime, hand-selected specimen of Tulip 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-96",
    "name": "UNKnown 1",
    "scientificName": "UNKnown 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #96",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/UNKnown-1.jpg",
    "description": "A prime, hand-selected specimen of UNKnown 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-97",
    "name": "UNKnown 2",
    "scientificName": "UNKnown 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #97",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/UNKnown-2.jpg",
    "description": "A prime, hand-selected specimen of UNKnown 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-98",
    "name": "Water Lily 1",
    "scientificName": "Water Lily 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #98",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Water Lily-1.jpg",
    "description": "A prime, hand-selected specimen of Water Lily 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight (6+ hours for prolific blooming)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Submerged aquatic setting; water depth 25cm - 50cm above crown",
      "soilOrSubstrate": "Heavy clay aquatic planting soil capped with sand or gravel",
      "feedingOrFertilizer": "Slow-release aquatic fertilizer tablets pushed into root clay monthly",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Position container in still water away from turbulent fountain spray.",
        "Remove decaying underwater leaves regularly to keep water clear."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Aquatic",
      "Water Lily",
      "Pond Flora"
    ]
  },
  {
    "id": "flowers-99",
    "name": "Water Lily 2",
    "scientificName": "Water Lily 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #99",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Water Lily-2.jpg",
    "description": "A prime, hand-selected specimen of Water Lily 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight (6+ hours for prolific blooming)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Submerged aquatic setting; water depth 25cm - 50cm above crown",
      "soilOrSubstrate": "Heavy clay aquatic planting soil capped with sand or gravel",
      "feedingOrFertilizer": "Slow-release aquatic fertilizer tablets pushed into root clay monthly",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Position container in still water away from turbulent fountain spray.",
        "Remove decaying underwater leaves regularly to keep water clear."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Aquatic",
      "Water Lily",
      "Pond Flora"
    ]
  },
  {
    "id": "flowers-100",
    "name": "Water Lily",
    "scientificName": "Water Lily Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #100",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Water Lily.jpg",
    "description": "A prime, hand-selected specimen of Water Lily representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight (6+ hours for prolific blooming)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Submerged aquatic setting; water depth 25cm - 50cm above crown",
      "soilOrSubstrate": "Heavy clay aquatic planting soil capped with sand or gravel",
      "feedingOrFertilizer": "Slow-release aquatic fertilizer tablets pushed into root clay monthly",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Position container in still water away from turbulent fountain spray.",
        "Remove decaying underwater leaves regularly to keep water clear."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony",
      "Aquatic",
      "Water Lily",
      "Pond Flora"
    ]
  },
  {
    "id": "flowers-101",
    "name": "Zinnia 2",
    "scientificName": "Zinnia 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #101",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Zinnia -2.jpg",
    "description": "A prime, hand-selected specimen of Zinnia 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-102",
    "name": "Zinnia 1",
    "scientificName": "Zinnia 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #102",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Zinnia-1.jpg",
    "description": "A prime, hand-selected specimen of Zinnia 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-103",
    "name": "চন্দ্রপ্রভা সোনাপাতি ফুল 1",
    "scientificName": "চন্দ্রপ্রভা সোনাপাতি ফুল 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #103",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/চন্দ্রপ্রভা-সোনাপাতি ফুল-1.jpg",
    "description": "A prime, hand-selected specimen of চন্দ্রপ্রভা সোনাপাতি ফুল 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-104",
    "name": "চন্দ্রপ্রভা সোনাপাতি ফুল 2",
    "scientificName": "চন্দ্রপ্রভা সোনাপাতি ফুল 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #104",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/চন্দ্রপ্রভা-সোনাপাতি ফুল-2.jpg",
    "description": "A prime, hand-selected specimen of চন্দ্রপ্রভা সোনাপাতি ফুল 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-105",
    "name": "চন্দ্রমল্লিকা 1",
    "scientificName": "চন্দ্রমল্লিকা 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #105",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/চন্দ্রমল্লিকা -1.jpg",
    "description": "A prime, hand-selected specimen of চন্দ্রমল্লিকা 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-106",
    "name": "জারবেরা (Gerbera) African Daisy",
    "scientificName": "জারবেরা (Gerbera) African Daisy Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #106",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/জারবেরা (Gerbera) African Daisy.jpg",
    "description": "A prime, hand-selected specimen of জারবেরা (Gerbera) African Daisy representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-107",
    "name": "নীল ঘন্টা Bush Clock Vine",
    "scientificName": "নীল ঘন্টা Bush Clock Vine Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #107",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/নীল ঘন্টা  Bush Clock Vine .jpg",
    "description": "A prime, hand-selected specimen of নীল ঘন্টা Bush Clock Vine representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-108",
    "name": "পটপটি রুয়েলিয়া ফুল",
    "scientificName": "পটপটি রুয়েলিয়া ফুল Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #108",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/পটপটি -রুয়েলিয়া ফুল.jpg",
    "description": "A prime, hand-selected specimen of পটপটি রুয়েলিয়া ফুল representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-109",
    "name": "বকুল ফুল Bakul Flower 1",
    "scientificName": "বকুল ফুল Bakul Flower 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #109",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/বকুল ফুল -Bakul Flower-1.jpg",
    "description": "A prime, hand-selected specimen of বকুল ফুল Bakul Flower 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-110",
    "name": "ভৃঙ্গরাজ Singapore Daisy Sphagneticola calendulacea",
    "scientificName": "ভৃঙ্গরাজ Singapore Daisy Sphagneticola calendulacea Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #110",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/ভৃঙ্গরাজ-Singapore Daisy-Sphagneticola calendulacea.jpg",
    "description": "A prime, hand-selected specimen of ভৃঙ্গরাজ Singapore Daisy Sphagneticola calendulacea representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-111",
    "name": "মোরগঝুঁটি ফুল 2",
    "scientificName": "মোরগঝুঁটি ফুল 2 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #111",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/মোরগঝুঁটি ফুল-2.jpg",
    "description": "A prime, hand-selected specimen of মোরগঝুঁটি ফুল 2 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-112",
    "name": "মোরগঝুঁটি ফুল",
    "scientificName": "মোরগঝুঁটি ফুল Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #112",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/মোরগঝুঁটি ফুল.jpg",
    "description": "A prime, hand-selected specimen of মোরগঝুঁটি ফুল representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-113",
    "name": "সোনালু বাঁদর লাঠি",
    "scientificName": "সোনালু বাঁদর লাঠি Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #113",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/সোনালু-বাঁদর লাঠি .jpg",
    "description": "A prime, hand-selected specimen of সোনালু বাঁদর লাঠি representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "flowers-114",
    "name": "সোনালু বাঁদর লাঠি 1",
    "scientificName": "সোনালু বাঁদর লাঠি 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস #114",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/সোনালু-বাঁদর লাঠি-1 .jpg",
    "description": "A prime, hand-selected specimen of সোনালু বাঁদর লাঠি 1 representing our highest health and aesthetic standards in the Flower Plants collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C (68°F - 93°F)",
    "maintenance": {
      "wateringOrWaterChange": "Water daily during warm months; keep soil consistently hydrated",
      "soilOrSubstrate": "Rich, loamy organic soil amended with compost and cow manure",
      "feedingOrFertilizer": "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks",
      "pruningOrTankSize": "Trim old flower stems down to first healthy leaf node",
      "tips": [
        "Deadhead wilted blooms promptly to trigger fresh bud formation.",
        "Ensure good airflow around stems to prevent powdery mildew.",
        "Mulch base of plant to preserve root moisture during peak summer."
      ]
    },
    "tags": [
      "Floral",
      "Flowering",
      "Outdoor & Balcony"
    ]
  },
  {
    "id": "guppy-1",
    "name": "24k Gold",
    "scientificName": "24k Gold Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #1",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/24k Gold.jpg",
    "description": "A prime, hand-selected specimen of 24k Gold representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Metallic Strain",
      "Show Grade"
    ]
  },
  {
    "id": "guppy-2",
    "name": "Albino Blue Topaz Guppy 1",
    "scientificName": "Albino Blue Topaz Guppy 1 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #2",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Blue Topaz Guppy-1.jpg",
    "description": "A prime, hand-selected specimen of Albino Blue Topaz Guppy 1 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Albino Strain",
      "Exotic"
    ]
  },
  {
    "id": "guppy-3",
    "name": "Albino Blue Topaz Guppy 2",
    "scientificName": "Albino Blue Topaz Guppy 2 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #3",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Blue Topaz Guppy-2.jpg",
    "description": "A prime, hand-selected specimen of Albino Blue Topaz Guppy 2 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Albino Strain",
      "Exotic"
    ]
  },
  {
    "id": "guppy-4",
    "name": "Albino Blue Topaz Guppy",
    "scientificName": "Albino Blue Topaz Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #4",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Blue Topaz Guppy.jpg",
    "description": "A prime, hand-selected specimen of Albino Blue Topaz Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Albino Strain",
      "Exotic"
    ]
  },
  {
    "id": "guppy-5",
    "name": "Albino Red Koi Guppy",
    "scientificName": "Albino Red Koi Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #5",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Red Koi Guppy.jpg",
    "description": "A prime, hand-selected specimen of Albino Red Koi Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Albino Strain",
      "Exotic"
    ]
  },
  {
    "id": "guppy-6",
    "name": "Albino Red Moscow Guppy",
    "scientificName": "Albino Red Moscow Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #6",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Red-Moscow-Guppy.jpg",
    "description": "A prime, hand-selected specimen of Albino Red Moscow Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Albino Strain",
      "Exotic"
    ]
  },
  {
    "id": "guppy-7",
    "name": "Albino Snakeskin Guppy",
    "scientificName": "Albino Snakeskin Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #7",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Snakeskin Guppy.jpg",
    "description": "A prime, hand-selected specimen of Albino Snakeskin Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Albino Strain",
      "Exotic"
    ]
  },
  {
    "id": "guppy-8",
    "name": "Albino Blue Ribbon fin Female Guppy",
    "scientificName": "Albino Blue Ribbon fin Female Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #8",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino-Blue-Ribbon-fin-Female-Guppy.jpg",
    "description": "A prime, hand-selected specimen of Albino Blue Ribbon fin Female Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Albino Strain",
      "Exotic"
    ]
  },
  {
    "id": "guppy-9",
    "name": "Black Metal Lace Guppy",
    "scientificName": "Black Metal Lace Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #9",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Black Metal Lace Guppy.jpg",
    "description": "A prime, hand-selected specimen of Black Metal Lace Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-10",
    "name": "Black MetalGuppy",
    "scientificName": "Black MetalGuppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #10",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Black MetalGuppy.jpg",
    "description": "A prime, hand-selected specimen of Black MetalGuppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-11",
    "name": "Black Moscow Guppy",
    "scientificName": "Black Moscow Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #11",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Black-Moscow Guppy.jpg",
    "description": "A prime, hand-selected specimen of Black Moscow Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-12",
    "name": "Black Moscow Guppy 1",
    "scientificName": "Black Moscow Guppy 1 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #12",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Black-Moscow-Guppy-1.jpg.png",
    "description": "A prime, hand-selected specimen of Black Moscow Guppy 1 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-13",
    "name": "Black Moscow Guppy",
    "scientificName": "Black Moscow Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #13",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Black-Moscow-Guppy.jpg",
    "description": "A prime, hand-selected specimen of Black Moscow Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-14",
    "name": "Blue Dragon Ribbon",
    "scientificName": "Blue Dragon Ribbon Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #14",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Blue Dragon Ribbon.jpg",
    "description": "A prime, hand-selected specimen of Blue Dragon Ribbon representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Long Fin",
      "Dumbo Ear"
    ]
  },
  {
    "id": "guppy-15",
    "name": "Blue Grass Guppy",
    "scientificName": "Blue Grass Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #15",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Blue Grass Guppy.jpg",
    "description": "A prime, hand-selected specimen of Blue Grass Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-16",
    "name": "blue head samurai guppy",
    "scientificName": "blue head samurai guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #16",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/blue head samurai guppy.jpg",
    "description": "A prime, hand-selected specimen of blue head samurai guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-17",
    "name": "Blue Moscow Guppy",
    "scientificName": "Blue Moscow Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #17",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Blue-Moscow-Guppy.jpg",
    "description": "A prime, hand-selected specimen of Blue Moscow Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-18",
    "name": "Dumbo Musaic",
    "scientificName": "Dumbo Musaic Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #18",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Dumbo Musaic.jpg",
    "description": "A prime, hand-selected specimen of Dumbo Musaic representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Long Fin",
      "Dumbo Ear"
    ]
  },
  {
    "id": "guppy-19",
    "name": "Full Gold Guppy 1",
    "scientificName": "Full Gold Guppy 1 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #19",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Full Gold Guppy-1.jpg",
    "description": "A prime, hand-selected specimen of Full Gold Guppy 1 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Metallic Strain",
      "Show Grade"
    ]
  },
  {
    "id": "guppy-20",
    "name": "FULL GOLD Guppy",
    "scientificName": "FULL GOLD Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #20",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/FULL GOLD Guppy.jpg",
    "description": "A prime, hand-selected specimen of FULL GOLD Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Metallic Strain",
      "Show Grade"
    ]
  },
  {
    "id": "guppy-21",
    "name": "Gold Dust Moly",
    "scientificName": "Gold Dust Moly Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #21",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Gold Dust Moly.jpg",
    "description": "A prime, hand-selected specimen of Gold Dust Moly representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Metallic Strain",
      "Show Grade"
    ]
  },
  {
    "id": "guppy-22",
    "name": "Gold Lace Snakeskin",
    "scientificName": "Gold Lace Snakeskin Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #22",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Gold Lace Snakeskin.jpg",
    "description": "A prime, hand-selected specimen of Gold Lace Snakeskin representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Metallic Strain",
      "Show Grade"
    ]
  },
  {
    "id": "guppy-23",
    "name": "Green Dragon",
    "scientificName": "Green Dragon Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #23",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Green Dragon.jpg",
    "description": "A prime, hand-selected specimen of Green Dragon representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-24",
    "name": "Green Moscow Guppy",
    "scientificName": "Green Moscow Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #24",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Green-Moscow-Guppy.jpg",
    "description": "A prime, hand-selected specimen of Green Moscow Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-25",
    "name": "HB Red Rose",
    "scientificName": "HB Red Rose Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #25",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/HB Red Rose.jpg",
    "description": "A prime, hand-selected specimen of HB Red Rose representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-26",
    "name": "Koi Txido Guppy 1",
    "scientificName": "Koi Txido Guppy 1 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #26",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Koi Txido Guppy-1.jpg",
    "description": "A prime, hand-selected specimen of Koi Txido Guppy 1 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-27",
    "name": "Koi Txido Guppy",
    "scientificName": "Koi Txido Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #27",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Koi Txido Guppy.jpg",
    "description": "A prime, hand-selected specimen of Koi Txido Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-28",
    "name": "Purple Mosaic Guppy",
    "scientificName": "Purple Mosaic Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #28",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Purple Mosaic Guppy.jpg",
    "description": "A prime, hand-selected specimen of Purple Mosaic Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-29",
    "name": "Red Dragon",
    "scientificName": "Red Dragon Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #29",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Dragon.jpg",
    "description": "A prime, hand-selected specimen of Red Dragon representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-30",
    "name": "Red Gragon",
    "scientificName": "Red Gragon Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #30",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Gragon.jpg",
    "description": "A prime, hand-selected specimen of Red Gragon representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-31",
    "name": "Red Moscow 1",
    "scientificName": "Red Moscow 1 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #31",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Moscow-1.jpg",
    "description": "A prime, hand-selected specimen of Red Moscow 1 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-32",
    "name": "Red Moscow 2",
    "scientificName": "Red Moscow 2 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #32",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Moscow-2.jpg",
    "description": "A prime, hand-selected specimen of Red Moscow 2 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-33",
    "name": "Red Moscow 3",
    "scientificName": "Red Moscow 3 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #33",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Moscow-3.jpg",
    "description": "A prime, hand-selected specimen of Red Moscow 3 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-34",
    "name": "Red Moscow",
    "scientificName": "Red Moscow Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #34",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Moscow.jpg",
    "description": "A prime, hand-selected specimen of Red Moscow representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-35",
    "name": "Red Tail Platinum Dumbo Ear",
    "scientificName": "Red Tail Platinum Dumbo Ear Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #35",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Tail Platinum Dumbo Ear.jpg.png",
    "description": "A prime, hand-selected specimen of Red Tail Platinum Dumbo Ear representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Long Fin",
      "Dumbo Ear"
    ]
  },
  {
    "id": "guppy-36",
    "name": "Ribbon Guppy",
    "scientificName": "Ribbon Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #36",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Ribbon Guppy.jpg",
    "description": "A prime, hand-selected specimen of Ribbon Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Long Fin",
      "Dumbo Ear"
    ]
  },
  {
    "id": "guppy-37",
    "name": "RTP Dumbo Ear 1",
    "scientificName": "RTP Dumbo Ear 1 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #37",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/RTP Dumbo Ear-1.jpg",
    "description": "A prime, hand-selected specimen of RTP Dumbo Ear 1 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Long Fin",
      "Dumbo Ear"
    ]
  },
  {
    "id": "guppy-38",
    "name": "RTP Dumbo Ear 2",
    "scientificName": "RTP Dumbo Ear 2 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #38",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/RTP Dumbo Ear-2.jpg",
    "description": "A prime, hand-selected specimen of RTP Dumbo Ear 2 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful",
      "Long Fin",
      "Dumbo Ear"
    ]
  },
  {
    "id": "guppy-39",
    "name": "Santa claus guppy 1",
    "scientificName": "Santa claus guppy 1 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #39",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Santa claus guppy-1.jpg",
    "description": "A prime, hand-selected specimen of Santa claus guppy 1 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-40",
    "name": "Shanta Cluse Guppy",
    "scientificName": "Shanta Cluse Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #40",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Shanta Cluse Guppy.jpg",
    "description": "A prime, hand-selected specimen of Shanta Cluse Guppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-41",
    "name": "Snow White Gyuppy",
    "scientificName": "Snow White Gyuppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #41",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Snow White Gyuppy.jpg",
    "description": "A prime, hand-selected specimen of Snow White Gyuppy representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-42",
    "name": "tuxedo koi guppies",
    "scientificName": "tuxedo koi guppies Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #42",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/tuxedo-koi-guppies.png",
    "description": "A prime, hand-selected specimen of tuxedo koi guppies representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-43",
    "name": "un 1",
    "scientificName": "un 1 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #43",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/un-1.jpg",
    "description": "A prime, hand-selected specimen of un 1 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-44",
    "name": "White Toxido 1",
    "scientificName": "White Toxido 1 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #44",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/White Toxido-1.jpg",
    "description": "A prime, hand-selected specimen of White Toxido 1 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-45",
    "name": "White Toxido 2",
    "scientificName": "White Toxido 2 Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #45",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/White Toxido-2.jpg",
    "description": "A prime, hand-selected specimen of White Toxido 2 representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "guppy-46",
    "name": "White Toxido",
    "scientificName": "White Toxido Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি #46",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/White Toxido.jpg",
    "description": "A prime, hand-selected specimen of White Toxido representing our highest health and aesthetic standards in the Pureline Guppies collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C (75°F - 82°F)",
    "maintenance": {
      "wateringOrWaterChange": "20-25% weekly water changes with aged conditioned water",
      "soilOrSubstrate": "Dark inert sand or bare-bottom breeding tank setup",
      "feedingOrFertilizer": "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily",
      "pruningOrTankSize": "Minimum 10-15 gallon community or species tank",
      "tips": [
        "Perform a 20-25% water change weekly using dechlorinated water.",
        "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
        "Keep 2-3 females per male to avoid over-harassment."
      ]
    },
    "tags": [
      "Livebearer",
      "Pureline Guppy",
      "Peaceful"
    ]
  },
  {
    "id": "fighter-1",
    "name": "Alien Betta Fish",
    "scientificName": "Alien Betta Fish Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ #1",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Alien Betta Fish.jpg",
    "description": "A prime, hand-selected specimen of Alien Betta Fish representing our highest health and aesthetic standards in the Fighter / Betta collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C (77°F - 84°F)",
    "maintenance": {
      "wateringOrWaterChange": "25-30% weekly water change with gentle siphon",
      "soilOrSubstrate": "Smooth gravel, dark sand, or planted substrate",
      "feedingOrFertilizer": "Premium betta micropellets, frozen bloodworms, live mosquito larvae (once or twice daily)",
      "pruningOrTankSize": "Minimum 5-gallon heated, low-flow filtered aquarium",
      "tips": [
        "House only ONE male betta per tank; males will fight to the death.",
        "Use an aquarium heater; bettas become lethargic and prone to disease below 24°C.",
        "Add dried Indian Almond (Catappa) leaves to release beneficial antibacterial tannins."
      ]
    },
    "tags": [
      "Betta Splendens",
      "Show Grade",
      "Labyrinth Fish",
      "Wild Hybrid",
      "Alien Strain"
    ]
  },
  {
    "id": "fighter-2",
    "name": "Betta Dumbo Lavender",
    "scientificName": "Betta Dumbo Lavender Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ #2",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Betta Dumbo Lavender.jpg",
    "description": "A prime, hand-selected specimen of Betta Dumbo Lavender representing our highest health and aesthetic standards in the Fighter / Betta collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C (77°F - 84°F)",
    "maintenance": {
      "wateringOrWaterChange": "25-30% weekly water change with gentle siphon",
      "soilOrSubstrate": "Smooth gravel, dark sand, or planted substrate",
      "feedingOrFertilizer": "Premium betta micropellets, frozen bloodworms, live mosquito larvae (once or twice daily)",
      "pruningOrTankSize": "Minimum 5-gallon heated, low-flow filtered aquarium",
      "tips": [
        "House only ONE male betta per tank; males will fight to the death.",
        "Use an aquarium heater; bettas become lethargic and prone to disease below 24°C.",
        "Add dried Indian Almond (Catappa) leaves to release beneficial antibacterial tannins."
      ]
    },
    "tags": [
      "Betta Splendens",
      "Show Grade",
      "Labyrinth Fish"
    ]
  },
  {
    "id": "fighter-3",
    "name": "Betta Red Dragon",
    "scientificName": "Betta Red Dragon Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ #3",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Betta Red Dragon.jpg",
    "description": "A prime, hand-selected specimen of Betta Red Dragon representing our highest health and aesthetic standards in the Fighter / Betta collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C (77°F - 84°F)",
    "maintenance": {
      "wateringOrWaterChange": "25-30% weekly water change with gentle siphon",
      "soilOrSubstrate": "Smooth gravel, dark sand, or planted substrate",
      "feedingOrFertilizer": "Premium betta micropellets, frozen bloodworms, live mosquito larvae (once or twice daily)",
      "pruningOrTankSize": "Minimum 5-gallon heated, low-flow filtered aquarium",
      "tips": [
        "House only ONE male betta per tank; males will fight to the death.",
        "Use an aquarium heater; bettas become lethargic and prone to disease below 24°C.",
        "Add dried Indian Almond (Catappa) leaves to release beneficial antibacterial tannins."
      ]
    },
    "tags": [
      "Betta Splendens",
      "Show Grade",
      "Labyrinth Fish"
    ]
  },
  {
    "id": "fighter-4",
    "name": "Betta Red Snow Dragon",
    "scientificName": "Betta Red Snow Dragon Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ #4",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Betta Red Snow Dragon.jpg",
    "description": "A prime, hand-selected specimen of Betta Red Snow Dragon representing our highest health and aesthetic standards in the Fighter / Betta collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C (77°F - 84°F)",
    "maintenance": {
      "wateringOrWaterChange": "25-30% weekly water change with gentle siphon",
      "soilOrSubstrate": "Smooth gravel, dark sand, or planted substrate",
      "feedingOrFertilizer": "Premium betta micropellets, frozen bloodworms, live mosquito larvae (once or twice daily)",
      "pruningOrTankSize": "Minimum 5-gallon heated, low-flow filtered aquarium",
      "tips": [
        "House only ONE male betta per tank; males will fight to the death.",
        "Use an aquarium heater; bettas become lethargic and prone to disease below 24°C.",
        "Add dried Indian Almond (Catappa) leaves to release beneficial antibacterial tannins."
      ]
    },
    "tags": [
      "Betta Splendens",
      "Show Grade",
      "Labyrinth Fish"
    ]
  },
  {
    "id": "fighter-5",
    "name": "Blue Rim Betta Fish",
    "scientificName": "Blue Rim Betta Fish Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ #5",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Blue Rim Betta Fish.jpg",
    "description": "A prime, hand-selected specimen of Blue Rim Betta Fish representing our highest health and aesthetic standards in the Fighter / Betta collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C (77°F - 84°F)",
    "maintenance": {
      "wateringOrWaterChange": "25-30% weekly water change with gentle siphon",
      "soilOrSubstrate": "Smooth gravel, dark sand, or planted substrate",
      "feedingOrFertilizer": "Premium betta micropellets, frozen bloodworms, live mosquito larvae (once or twice daily)",
      "pruningOrTankSize": "Minimum 5-gallon heated, low-flow filtered aquarium",
      "tips": [
        "House only ONE male betta per tank; males will fight to the death.",
        "Use an aquarium heater; bettas become lethargic and prone to disease below 24°C.",
        "Add dried Indian Almond (Catappa) leaves to release beneficial antibacterial tannins."
      ]
    },
    "tags": [
      "Betta Splendens",
      "Show Grade",
      "Labyrinth Fish"
    ]
  },
  {
    "id": "fighter-6",
    "name": "Candy Betta Fish",
    "scientificName": "Candy Betta Fish Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ #6",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Candy Betta Fish.jpg",
    "description": "A prime, hand-selected specimen of Candy Betta Fish representing our highest health and aesthetic standards in the Fighter / Betta collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C (77°F - 84°F)",
    "maintenance": {
      "wateringOrWaterChange": "25-30% weekly water change with gentle siphon",
      "soilOrSubstrate": "Smooth gravel, dark sand, or planted substrate",
      "feedingOrFertilizer": "Premium betta micropellets, frozen bloodworms, live mosquito larvae (once or twice daily)",
      "pruningOrTankSize": "Minimum 5-gallon heated, low-flow filtered aquarium",
      "tips": [
        "House only ONE male betta per tank; males will fight to the death.",
        "Use an aquarium heater; bettas become lethargic and prone to disease below 24°C.",
        "Add dried Indian Almond (Catappa) leaves to release beneficial antibacterial tannins."
      ]
    },
    "tags": [
      "Betta Splendens",
      "Show Grade",
      "Labyrinth Fish"
    ]
  },
  {
    "id": "fighter-7",
    "name": "half moon betta fish",
    "scientificName": "half moon betta fish Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ #7",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/half-moon betta fish.jpg",
    "description": "A prime, hand-selected specimen of half moon betta fish representing our highest health and aesthetic standards in the Fighter / Betta collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C (77°F - 84°F)",
    "maintenance": {
      "wateringOrWaterChange": "25-30% weekly water change with gentle siphon",
      "soilOrSubstrate": "Smooth gravel, dark sand, or planted substrate",
      "feedingOrFertilizer": "Premium betta micropellets, frozen bloodworms, live mosquito larvae (once or twice daily)",
      "pruningOrTankSize": "Minimum 5-gallon heated, low-flow filtered aquarium",
      "tips": [
        "House only ONE male betta per tank; males will fight to the death.",
        "Use an aquarium heater; bettas become lethargic and prone to disease below 24°C.",
        "Add dried Indian Almond (Catappa) leaves to release beneficial antibacterial tannins."
      ]
    },
    "tags": [
      "Betta Splendens",
      "Show Grade",
      "Labyrinth Fish",
      "Halfmoon",
      "180 Spread"
    ]
  },
  {
    "id": "fighter-8",
    "name": "Koi Betta fish",
    "scientificName": "Koi Betta fish Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ #8",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Koi Betta fish.jpg",
    "description": "A prime, hand-selected specimen of Koi Betta fish representing our highest health and aesthetic standards in the Fighter / Betta collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C (77°F - 84°F)",
    "maintenance": {
      "wateringOrWaterChange": "25-30% weekly water change with gentle siphon",
      "soilOrSubstrate": "Smooth gravel, dark sand, or planted substrate",
      "feedingOrFertilizer": "Premium betta micropellets, frozen bloodworms, live mosquito larvae (once or twice daily)",
      "pruningOrTankSize": "Minimum 5-gallon heated, low-flow filtered aquarium",
      "tips": [
        "House only ONE male betta per tank; males will fight to the death.",
        "Use an aquarium heater; bettas become lethargic and prone to disease below 24°C.",
        "Add dried Indian Almond (Catappa) leaves to release beneficial antibacterial tannins."
      ]
    },
    "tags": [
      "Betta Splendens",
      "Show Grade",
      "Labyrinth Fish",
      "Galaxy Koi",
      "Marbled"
    ]
  },
  {
    "id": "fighter-9",
    "name": "Red Koi Galaxy) Betta",
    "scientificName": "Red Koi Galaxy) Betta Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ #9",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Red Koi Galaxy) Betta.jpg",
    "description": "A prime, hand-selected specimen of Red Koi Galaxy) Betta representing our highest health and aesthetic standards in the Fighter / Betta collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C (77°F - 84°F)",
    "maintenance": {
      "wateringOrWaterChange": "25-30% weekly water change with gentle siphon",
      "soilOrSubstrate": "Smooth gravel, dark sand, or planted substrate",
      "feedingOrFertilizer": "Premium betta micropellets, frozen bloodworms, live mosquito larvae (once or twice daily)",
      "pruningOrTankSize": "Minimum 5-gallon heated, low-flow filtered aquarium",
      "tips": [
        "House only ONE male betta per tank; males will fight to the death.",
        "Use an aquarium heater; bettas become lethargic and prone to disease below 24°C.",
        "Add dried Indian Almond (Catappa) leaves to release beneficial antibacterial tannins."
      ]
    },
    "tags": [
      "Betta Splendens",
      "Show Grade",
      "Labyrinth Fish",
      "Galaxy Koi",
      "Marbled"
    ]
  },
  {
    "id": "fighter-10",
    "name": "Rose tail",
    "scientificName": "Rose tail Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ #10",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Rose tail.jpg",
    "description": "A prime, hand-selected specimen of Rose tail representing our highest health and aesthetic standards in the Fighter / Betta collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C (77°F - 84°F)",
    "maintenance": {
      "wateringOrWaterChange": "25-30% weekly water change with gentle siphon",
      "soilOrSubstrate": "Smooth gravel, dark sand, or planted substrate",
      "feedingOrFertilizer": "Premium betta micropellets, frozen bloodworms, live mosquito larvae (once or twice daily)",
      "pruningOrTankSize": "Minimum 5-gallon heated, low-flow filtered aquarium",
      "tips": [
        "House only ONE male betta per tank; males will fight to the death.",
        "Use an aquarium heater; bettas become lethargic and prone to disease below 24°C.",
        "Add dried Indian Almond (Catappa) leaves to release beneficial antibacterial tannins."
      ]
    },
    "tags": [
      "Betta Splendens",
      "Show Grade",
      "Labyrinth Fish"
    ]
  },
  {
    "id": "fighter-11",
    "name": "Unknown 1",
    "scientificName": "Unknown 1 Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ #11",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Unknown-1.jpg",
    "description": "A prime, hand-selected specimen of Unknown 1 representing our highest health and aesthetic standards in the Fighter / Betta collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C (77°F - 84°F)",
    "maintenance": {
      "wateringOrWaterChange": "25-30% weekly water change with gentle siphon",
      "soilOrSubstrate": "Smooth gravel, dark sand, or planted substrate",
      "feedingOrFertilizer": "Premium betta micropellets, frozen bloodworms, live mosquito larvae (once or twice daily)",
      "pruningOrTankSize": "Minimum 5-gallon heated, low-flow filtered aquarium",
      "tips": [
        "House only ONE male betta per tank; males will fight to the death.",
        "Use an aquarium heater; bettas become lethargic and prone to disease below 24°C.",
        "Add dried Indian Almond (Catappa) leaves to release beneficial antibacterial tannins."
      ]
    },
    "tags": [
      "Betta Splendens",
      "Show Grade",
      "Labyrinth Fish"
    ]
  },
  {
    "id": "marine-1",
    "name": "Blue Tang 1",
    "scientificName": "Blue Tang 1 Specimen",
    "bengaliName": "সি ওয়াটার ফিশ #1",
    "categoryId": "marine",
    "categoryName": "SeaWater Fish",
    "image": "/images/Fish/SeaWater Fish/Blue Tang-1.jpg",
    "description": "A prime, hand-selected specimen of Blue Tang 1 representing our highest health and aesthetic standards in the SeaWater Fish collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Marine Saltwater (Specific Gravity 1.022 - 1.026, pH 8.1 - 8.4)",
    "temperature": "24°C - 26.5°C (75°F - 80°F)",
    "maintenance": {
      "wateringOrWaterChange": "10-15% bi-weekly saltwater water change",
      "soilOrSubstrate": "Aragonite live reef sand and cured porous live rock",
      "feedingOrFertilizer": "Enriched mysis shrimp, marine flakes, chopped seafood & dried nori seaweed daily",
      "pruningOrTankSize": "Minimum 30-75 gallon marine aquarium with protein skimmer",
      "tips": [
        "Use reverse osmosis (RO/DI) water mixed with high-grade marine reef salt.",
        "Maintain active protein skimming and strong water circulation.",
        "Check salinity and ammonia levels regularly with a reliable refractometer."
      ]
    },
    "tags": [
      "Marine",
      "Saltwater",
      "Reef Safe",
      "Herbivore",
      "Tang Surgeonfish"
    ]
  },
  {
    "id": "marine-2",
    "name": "Blue Tang",
    "scientificName": "Blue Tang Specimen",
    "bengaliName": "সি ওয়াটার ফিশ #2",
    "categoryId": "marine",
    "categoryName": "SeaWater Fish",
    "image": "/images/Fish/SeaWater Fish/Blue Tang.jpg",
    "description": "A prime, hand-selected specimen of Blue Tang representing our highest health and aesthetic standards in the SeaWater Fish collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Marine Saltwater (Specific Gravity 1.022 - 1.026, pH 8.1 - 8.4)",
    "temperature": "24°C - 26.5°C (75°F - 80°F)",
    "maintenance": {
      "wateringOrWaterChange": "10-15% bi-weekly saltwater water change",
      "soilOrSubstrate": "Aragonite live reef sand and cured porous live rock",
      "feedingOrFertilizer": "Enriched mysis shrimp, marine flakes, chopped seafood & dried nori seaweed daily",
      "pruningOrTankSize": "Minimum 30-75 gallon marine aquarium with protein skimmer",
      "tips": [
        "Use reverse osmosis (RO/DI) water mixed with high-grade marine reef salt.",
        "Maintain active protein skimming and strong water circulation.",
        "Check salinity and ammonia levels regularly with a reliable refractometer."
      ]
    },
    "tags": [
      "Marine",
      "Saltwater",
      "Reef Safe",
      "Herbivore",
      "Tang Surgeonfish"
    ]
  },
  {
    "id": "marine-3",
    "name": "Nemo FIsh 2",
    "scientificName": "Nemo FIsh 2 Specimen",
    "bengaliName": "সি ওয়াটার ফিশ #3",
    "categoryId": "marine",
    "categoryName": "SeaWater Fish",
    "image": "/images/Fish/SeaWater Fish/Nemo FIsh-2.jpg",
    "description": "A prime, hand-selected specimen of Nemo FIsh 2 representing our highest health and aesthetic standards in the SeaWater Fish collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Marine Saltwater (Specific Gravity 1.022 - 1.026, pH 8.1 - 8.4)",
    "temperature": "24°C - 26.5°C (75°F - 80°F)",
    "maintenance": {
      "wateringOrWaterChange": "10-15% bi-weekly saltwater water change",
      "soilOrSubstrate": "Aragonite live reef sand and cured porous live rock",
      "feedingOrFertilizer": "Enriched mysis shrimp, marine flakes, chopped seafood & dried nori seaweed daily",
      "pruningOrTankSize": "Minimum 30-75 gallon marine aquarium with protein skimmer",
      "tips": [
        "Use reverse osmosis (RO/DI) water mixed with high-grade marine reef salt.",
        "Maintain active protein skimming and strong water circulation.",
        "Check salinity and ammonia levels regularly with a reliable refractometer."
      ]
    },
    "tags": [
      "Marine",
      "Saltwater",
      "Reef Safe",
      "Clownfish",
      "Anemone Symbiont"
    ]
  },
  {
    "id": "marine-4",
    "name": "Nemo FIsh 3",
    "scientificName": "Nemo FIsh 3 Specimen",
    "bengaliName": "সি ওয়াটার ফিশ #4",
    "categoryId": "marine",
    "categoryName": "SeaWater Fish",
    "image": "/images/Fish/SeaWater Fish/Nemo FIsh-3.jpg",
    "description": "A prime, hand-selected specimen of Nemo FIsh 3 representing our highest health and aesthetic standards in the SeaWater Fish collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Marine Saltwater (Specific Gravity 1.022 - 1.026, pH 8.1 - 8.4)",
    "temperature": "24°C - 26.5°C (75°F - 80°F)",
    "maintenance": {
      "wateringOrWaterChange": "10-15% bi-weekly saltwater water change",
      "soilOrSubstrate": "Aragonite live reef sand and cured porous live rock",
      "feedingOrFertilizer": "Enriched mysis shrimp, marine flakes, chopped seafood & dried nori seaweed daily",
      "pruningOrTankSize": "Minimum 30-75 gallon marine aquarium with protein skimmer",
      "tips": [
        "Use reverse osmosis (RO/DI) water mixed with high-grade marine reef salt.",
        "Maintain active protein skimming and strong water circulation.",
        "Check salinity and ammonia levels regularly with a reliable refractometer."
      ]
    },
    "tags": [
      "Marine",
      "Saltwater",
      "Reef Safe",
      "Clownfish",
      "Anemone Symbiont"
    ]
  },
  {
    "id": "marine-5",
    "name": "Nemo FIsh",
    "scientificName": "Nemo FIsh Specimen",
    "bengaliName": "সি ওয়াটার ফিশ #5",
    "categoryId": "marine",
    "categoryName": "SeaWater Fish",
    "image": "/images/Fish/SeaWater Fish/Nemo FIsh.jpg",
    "description": "A prime, hand-selected specimen of Nemo FIsh representing our highest health and aesthetic standards in the SeaWater Fish collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Marine Saltwater (Specific Gravity 1.022 - 1.026, pH 8.1 - 8.4)",
    "temperature": "24°C - 26.5°C (75°F - 80°F)",
    "maintenance": {
      "wateringOrWaterChange": "10-15% bi-weekly saltwater water change",
      "soilOrSubstrate": "Aragonite live reef sand and cured porous live rock",
      "feedingOrFertilizer": "Enriched mysis shrimp, marine flakes, chopped seafood & dried nori seaweed daily",
      "pruningOrTankSize": "Minimum 30-75 gallon marine aquarium with protein skimmer",
      "tips": [
        "Use reverse osmosis (RO/DI) water mixed with high-grade marine reef salt.",
        "Maintain active protein skimming and strong water circulation.",
        "Check salinity and ammonia levels regularly with a reliable refractometer."
      ]
    },
    "tags": [
      "Marine",
      "Saltwater",
      "Reef Safe",
      "Clownfish",
      "Anemone Symbiont"
    ]
  },
  {
    "id": "marine-6",
    "name": "Yellow Tang",
    "scientificName": "Yellow Tang Specimen",
    "bengaliName": "সি ওয়াটার ফিশ #6",
    "categoryId": "marine",
    "categoryName": "SeaWater Fish",
    "image": "/images/Fish/SeaWater Fish/Yellow Tang.jpg",
    "description": "A prime, hand-selected specimen of Yellow Tang representing our highest health and aesthetic standards in the SeaWater Fish collection. Conditioned and nurtured in ideal environmental parameters.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Marine Saltwater (Specific Gravity 1.022 - 1.026, pH 8.1 - 8.4)",
    "temperature": "24°C - 26.5°C (75°F - 80°F)",
    "maintenance": {
      "wateringOrWaterChange": "10-15% bi-weekly saltwater water change",
      "soilOrSubstrate": "Aragonite live reef sand and cured porous live rock",
      "feedingOrFertilizer": "Enriched mysis shrimp, marine flakes, chopped seafood & dried nori seaweed daily",
      "pruningOrTankSize": "Minimum 30-75 gallon marine aquarium with protein skimmer",
      "tips": [
        "Use reverse osmosis (RO/DI) water mixed with high-grade marine reef salt.",
        "Maintain active protein skimming and strong water circulation.",
        "Check salinity and ammonia levels regularly with a reliable refractometer."
      ]
    },
    "tags": [
      "Marine",
      "Saltwater",
      "Reef Safe",
      "Herbivore",
      "Tang Surgeonfish"
    ]
  }
];

export function getCategoryById(id: string): TCategoryMeta | undefined {
  return CATEGORIES_META.find((c) => c.id === id || c.slug === id);
}

export function getItemsByCategory(categoryId: string): TCategoryItem[] {
  return CATEGORY_ITEMS.filter((item) => item.categoryId === categoryId);
}

export function getItemById(id: string): TCategoryItem | undefined {
  return CATEGORY_ITEMS.find((item) => item.id === id);
}
