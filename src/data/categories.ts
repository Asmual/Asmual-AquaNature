// Auto-generated comprehensive category and species catalog with multi-image support
export interface TCategoryItem {
  id: string;
  name: string;
  scientificName?: string;
  bengaliName?: string;
  regionalName?: string; // Regional name in Bangladesh (বাংলাদেশে আঞ্চলিক নাম)
  bloomingSeason?: string; // Blooming time or breeding season (ফুল ফোটার সময় / প্রজননকাল)
  sunlightOrShade?: string; // Sunlight vs shade requirement (সূর্যালোক ও আবহাওয়া)
  categoryId: "indoor" | "bonsai" | "flowers" | "guppy" | "fighter" | "marine";
  categoryName: string;
  type: "plant" | "fish";
  image: string;
  images: string[];
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
    "itemCount": 29
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
    "itemCount": 16
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
    "itemCount": 63
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
    "itemCount": 32
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
    "itemCount": 3
  }
];

export const CATEGORY_ITEMS: TCategoryItem[] = [
  {
    "id": "indoor-1",
    "name": "Aglaonema (মানিপ্ল্যান্ট)",
    "scientificName": "Aglaonema Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Aglaonema (মানিপ্ল্যান্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Aglonema-2.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Aglonema-2.jpg",
      "/images/Plants/Indoor Plants/Aglonema.jpg"
    ],
    "description": "A prime, hand-selected specimen of Aglaonema (মানিপ্ল্যান্ট) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "Aloe Vera (অ্যালোভেরা)",
    "scientificName": "Aloe Vera Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Aloe Vera (অ্যালোভেরা)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Aloe Vera.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Aloe Vera.jpg"
    ],
    "description": "A prime, hand-selected specimen of Aloe Vera (অ্যালোভেরা) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "Anthurium (অ্যান্থুরিয়াম)",
    "scientificName": "Anthurium Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Anthurium (অ্যান্থুরিয়াম)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Anthurium.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Anthurium.jpg"
    ],
    "description": "A prime, hand-selected specimen of Anthurium (অ্যান্থুরিয়াম) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Gentle Filtered Shade / Medium Indirect Light",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-4",
    "name": "Bunny Ears Cactus (বানি ইয়ার ক্যাকটাস)",
    "scientificName": "Bunny Ears Cactus Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Bunny Ears Cactus (বানি ইয়ার ক্যাকটাস)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Bunny ears cactus.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Bunny ears cactus.jpg"
    ],
    "description": "A prime, hand-selected specimen of Bunny Ears Cactus (বানি ইয়ার ক্যাকটাস) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight to Bright Light (4-6 hrs)",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-5",
    "name": "Butterfly Plant (বাটারফ্লাই প্ল্যান্ট)",
    "scientificName": "Butterfly Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Butterfly Plant (বাটারফ্লাই প্ল্যান্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Buterfly.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Buterfly.jpg"
    ],
    "description": "A prime, hand-selected specimen of Butterfly Plant (বাটারফ্লাই প্ল্যান্ট) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-6",
    "name": "Calathea (ক্যালাথিয়া)",
    "scientificName": "Calathea Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Calathea (ক্যালাথিয়া)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Calathea-1.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Calathea-1.jpg",
      "/images/Plants/Indoor Plants/Calathea2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Calathea (ক্যালাথিয়া) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Gentle Filtered Shade / Medium Indirect Light",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-7",
    "name": "Coin Plant (কয়েন প্ল্যান্ট)",
    "scientificName": "Coin Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Coin Plant (কয়েন প্ল্যান্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Coin Plants- (1).jpg",
    "images": [
      "/images/Plants/Indoor Plants/Coin Plants- (1).jpg",
      "/images/Plants/Indoor Plants/Coin Plants- (2).jpg",
      "/images/Plants/Indoor Plants/Coin Plants- (3).jpg",
      "/images/Plants/Indoor Plants/Coin Plants- (4).jpg"
    ],
    "description": "A prime, hand-selected specimen of Coin Plant (কয়েন প্ল্যান্ট) with 4 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-8",
    "name": "Croton Golden Dust (ক্রোটন গোল্ডেন ডাস্ট)",
    "scientificName": "Croton Golden Dust Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Croton Golden Dust (ক্রোটন গোল্ডেন ডাস্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Croton Golden Dust Plant.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Croton Golden Dust Plant.jpg"
    ],
    "description": "A prime, hand-selected specimen of Croton Golden Dust (ক্রোটন গোল্ডেন ডাস্ট) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-9",
    "name": "Coleus (কলিয়াস)",
    "scientificName": "Coleus Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Coleus (কলিয়াস)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Culius.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Culius.jpg",
      "/images/Plants/Indoor Plants/Culius2.jpg",
      "/images/Plants/Indoor Plants/Culius3.jpg"
    ],
    "description": "A prime, hand-selected specimen of Coleus (কলিয়াস) with 3 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "Devil's Backbone (ডেভিলস ব্যাকবোন)",
    "scientificName": "Devil's Backbone Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Devil's Backbone (ডেভিলস ব্যাকবোন)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Devil's Backbone-1.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Devil's Backbone-1.jpg",
      "/images/Plants/Indoor Plants/Devil's Backbone.jpg"
    ],
    "description": "A prime, hand-selected specimen of Devil's Backbone (ডেভিলস ব্যাকবোন) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "Dumb Cane (ডাম্ব ক্যান)",
    "scientificName": "Dumb Cane Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Dumb Cane (ডাম্ব ক্যান)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Dump cane-1.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Dump cane-1.jpg",
      "/images/Plants/Indoor Plants/Dump cane-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Dumb Cane (ডাম্ব ক্যান) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "Variegated Ficus (ভ্যারিয়েগেটেড ফাইকাস)",
    "scientificName": "Variegated Ficus Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Variegated Ficus (ভ্যারিয়েগেটেড ফাইকাস)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/e6b100c7ae1b52080379a42bcf3cbfe8.jpg",
    "images": [
      "/images/Plants/Indoor Plants/e6b100c7ae1b52080379a42bcf3cbfe8.jpg"
    ],
    "description": "A prime, hand-selected specimen of Variegated Ficus (ভ্যারিয়েগেটেড ফাইকাস) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "Jade Plant (জেড প্ল্যান্ট)",
    "scientificName": "Jade Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Jade Plant (জেড প্ল্যান্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Jade Plant.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Jade Plant.jpg"
    ],
    "description": "A prime, hand-selected specimen of Jade Plant (জেড প্ল্যান্ট) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight to Bright Light (4-6 hrs)",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-14",
    "name": "Lucky Bamboo (লাকি ব্যাম্বু)",
    "scientificName": "Lucky Bamboo Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Lucky Bamboo (লাকি ব্যাম্বু)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Lucky Bambo.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Lucky Bambo.jpg",
      "/images/Plants/Indoor Plants/Lucky Bamboo plant Golden.jpg",
      "/images/Plants/Indoor Plants/Lucky Bamboo plant green.jpg",
      "/images/Plants/Indoor Plants/Lucky bambos.jpg"
    ],
    "description": "A prime, hand-selected specimen of Lucky Bamboo (লাকি ব্যাম্বু) with 4 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-15",
    "name": "Money Plant (মানিপ্ল্যান্ট)",
    "scientificName": "Money Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Money Plant (মানিপ্ল্যান্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Money Plant-1.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Money Plant-1.jpg",
      "/images/Plants/Indoor Plants/Money Plant-2.jpg",
      "/images/Plants/Indoor Plants/Money Plants-2.jpg",
      "/images/Plants/Indoor Plants/Money Plants.jpg"
    ],
    "description": "A prime, hand-selected specimen of Money Plant (মানিপ্ল্যান্ট) with 4 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "Monstera Deliciosa (মনস্টেরা)",
    "scientificName": "Monstera Deliciosa Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Monstera Deliciosa (মনস্টেরা)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Monstera.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Monstera.jpg"
    ],
    "description": "A prime, hand-selected specimen of Monstera Deliciosa (মনস্টেরা) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-17",
    "name": "Peace Lily (পিস লিলি)",
    "scientificName": "Peace Lily Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Peace Lily (পিস লিলি)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Peace Lily.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Peace Lily.jpg"
    ],
    "description": "A prime, hand-selected specimen of Peace Lily (পিস লিলি) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "Pencil Cactus (পেন্সিল ক্যাকটাস)",
    "scientificName": "Pencil Cactus Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Pencil Cactus (পেন্সিল ক্যাকটাস)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Pencil cactus plant.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Pencil cactus plant.jpg"
    ],
    "description": "A prime, hand-selected specimen of Pencil Cactus (পেন্সিল ক্যাকটাস) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight to Bright Light (4-6 hrs)",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-19",
    "name": "Philodendron (ফিলোডেনড্রন)",
    "scientificName": "Philodendron Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Philodendron (ফিলোডেনড্রন)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Philodendron.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Philodendron.jpg"
    ],
    "description": "A prime, hand-selected specimen of Philodendron (ফিলোডেনড্রন) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-20",
    "name": "Purple Heart (পার্পল হার্ট)",
    "scientificName": "Purple Heart Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Purple Heart (পার্পল হার্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Purple Heart.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Purple Heart.jpg"
    ],
    "description": "A prime, hand-selected specimen of Purple Heart (পার্পল হার্ট) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "Reo Plant (রিও প্ল্যান্ট)",
    "scientificName": "Reo Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Reo Plant (রিও প্ল্যান্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Reo Plant.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Reo Plant.jpg"
    ],
    "description": "A prime, hand-selected specimen of Reo Plant (রিও প্ল্যান্ট) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "Rubber Plant (রাবার প্ল্যান্ট)",
    "scientificName": "Rubber Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Rubber Plant (রাবার প্ল্যান্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Rubber Plannt.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Rubber Plannt.jpg"
    ],
    "description": "A prime, hand-selected specimen of Rubber Plant (রাবার প্ল্যান্ট) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-23",
    "name": "Syngonium (সিঙ্গোনিয়াম)",
    "scientificName": "Syngonium Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Syngonium (সিঙ্গোনিয়াম)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Singinium.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Singinium.jpg",
      "/images/Plants/Indoor Plants/Singunium-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Syngonium (সিঙ্গোনিয়াম) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "Snake Plant (স্নেক প্ল্যান্ট)",
    "scientificName": "Snake Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Snake Plant (স্নেক প্ল্যান্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Snak plant-Mini.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Snak plant-Mini.jpg",
      "/images/Plants/Indoor Plants/Snak plant.jpg"
    ],
    "description": "A prime, hand-selected specimen of Snake Plant (স্নেক প্ল্যান্ট) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Tolerates Low Light to High Indirect Light",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-25",
    "name": "Succulent (সাকুলেন্ট প্ল্যান্ট)",
    "scientificName": "Succulent Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Succulent (সাকুলেন্ট প্ল্যান্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Succulent plant1.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Succulent plant1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Succulent (সাকুলেন্ট প্ল্যান্ট) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight to Bright Light (4-6 hrs)",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-26",
    "name": "Haworthia Succulent (হাওরথিয়া সাকুলেন্ট)",
    "scientificName": "Haworthia Succulent Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Haworthia Succulent (হাওরথিয়া সাকুলেন্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/U-2.jpg",
    "images": [
      "/images/Plants/Indoor Plants/U-2.jpg",
      "/images/Plants/Indoor Plants/u.jpg",
      "/images/Plants/Indoor Plants/u3.jpg",
      "/images/Plants/Indoor Plants/u7.jpg",
      "/images/Plants/Indoor Plants/u8.jpg"
    ],
    "description": "A prime, hand-selected specimen of Haworthia Succulent (হাওরথিয়া সাকুলেন্ট) with 5 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight to Bright Light (4-6 hrs)",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-27",
    "name": "Zebrina Wandering Jew (জেব্রিনা)",
    "scientificName": "Zebrina Wandering Jew Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Zebrina Wandering Jew (জেব্রিনা)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Zebrina.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Zebrina.jpg"
    ],
    "description": "A prime, hand-selected specimen of Zebrina Wandering Jew (জেব্রিনা) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "ZZ Plant (জেডজেড প্ল্যান্ট)",
    "scientificName": "ZZ Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • ZZ Plant (জেডজেড প্ল্যান্ট)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/ZZ Plant.jpg",
    "images": [
      "/images/Plants/Indoor Plants/ZZ Plant.jpg",
      "/images/Plants/Indoor Plants/ZZ.jpg"
    ],
    "description": "A prime, hand-selected specimen of ZZ Plant (জেডজেড প্ল্যান্ট) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Tolerates Low Light to High Indirect Light",
    "temperature": "18°C - 28°C",
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
    "id": "indoor-29",
    "name": "Caladium (ক্যালডিয়াম)",
    "scientificName": "Caladium Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Caladium (ক্যালডিয়াম)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/ক্যালডিয়াম (Caladium).jpg",
    "images": [
      "/images/Plants/Indoor Plants/ক্যালডিয়াম (Caladium).jpg"
    ],
    "description": "A prime, hand-selected specimen of Caladium (ক্যালডিয়াম) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Indirect to Medium Light",
    "temperature": "18°C - 28°C",
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
    "name": "Mango Bonsai (আম বনসাই)",
    "scientificName": "Mango Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Mango Bonsai (আম বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Amm-2.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Amm-2.jpg",
      "/images/Plants/Bonsai Plant/Amm.jpg"
    ],
    "description": "A prime, hand-selected specimen of Mango Bonsai (আম বনসাই) with 2 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "name": "Ficus Retusa Bonsai (ফাইকাস বনসাই)",
    "scientificName": "Ficus Retusa Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Ficus Retusa Bonsai (ফাইকাস বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/B.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/B.jpg"
    ],
    "description": "A prime, hand-selected specimen of Ficus Retusa Bonsai (ফাইকাস বনসাই) with 1 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "id": "bonsai-3",
    "name": "Bougainvillea Bonsai (বাগান বিলাস বনসাই)",
    "scientificName": "Bougainvillea Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Bougainvillea Bonsai (বাগান বিলাস বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Bagan Bilash.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Bagan Bilash.jpg"
    ],
    "description": "A prime, hand-selected specimen of Bougainvillea Bonsai (বাগান বিলাস বনসাই) with 1 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "name": "China Banyan Bonsai (চীন বট বনসাই)",
    "scientificName": "China Banyan Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • China Banyan Bonsai (চীন বট বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/China bot-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/China bot-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of China Banyan Bonsai (চীন বট বনসাই) with 1 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "name": "Krishnachura Bonsai (কৃষ্ণচূড়া বনসাই)",
    "scientificName": "Krishnachura Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Krishnachura Bonsai (কৃষ্ণচূড়া বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Crishnachura.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Crishnachura.jpg"
    ],
    "description": "A prime, hand-selected specimen of Krishnachura Bonsai (কৃষ্ণচূড়া বনসাই) with 1 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "name": "Deshi Banyan Bonsai (দেশি বট বনসাই)",
    "scientificName": "Deshi Banyan Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Deshi Banyan Bonsai (দেশি বট বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Deshi-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Deshi-1.jpg",
      "/images/Plants/Bonsai Plant/Deshi-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Deshi Banyan Bonsai (দেশি বট বনসাই) with 2 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "name": "Ficus Benjamina (বেনজামিনা বনসাই)",
    "scientificName": "Ficus Benjamina Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Ficus Benjamina (বেনজামিনা বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Ficus benjamina-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Ficus benjamina-1.jpg",
      "/images/Plants/Bonsai Plant/Ficus benjamina-2.jpg",
      "/images/Plants/Bonsai Plant/Ficus benjamina-3.jpg",
      "/images/Plants/Bonsai Plant/Ficus benjamina-4.jpg",
      "/images/Plants/Bonsai Plant/Ficus benjamina-5.jpg",
      "/images/Plants/Bonsai Plant/Ficus benjamina.jpg"
    ],
    "description": "A prime, hand-selected specimen of Ficus Benjamina (বেনজামিনা বনসাই) with 6 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "id": "bonsai-8",
    "name": "Ficus Religiosa (অশ্বত্থ বনসাই)",
    "scientificName": "Ficus Religiosa Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Ficus Religiosa (অশ্বত্থ বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Ficus religiosa -অশ্বত্থ গাছ-0.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Ficus religiosa -অশ্বত্থ গাছ-0.jpg",
      "/images/Plants/Bonsai Plant/Ficus religiosa-অশ্বত্থ গাছ-1.jpg",
      "/images/Plants/Bonsai Plant/Ficus religiosa-অশ্বত্থ গাছ-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Ficus Religiosa (অশ্বত্থ বনসাই) with 3 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "id": "bonsai-9",
    "name": "Jade Bonsai (জেড বনসাই)",
    "scientificName": "Jade Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Jade Bonsai (জেড বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Jade-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Jade-1.jpg",
      "/images/Plants/Bonsai Plant/Jade-2.jpg",
      "/images/Plants/Bonsai Plant/Jade-3.jpg"
    ],
    "description": "A prime, hand-selected specimen of Jade Bonsai (জেড বনসাই) with 3 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "id": "bonsai-10",
    "name": "Hibiscus Bonsai (জবা বনসাই)",
    "scientificName": "Hibiscus Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Hibiscus Bonsai (জবা বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Joba-3.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Joba-3.jpg",
      "/images/Plants/Bonsai Plant/Joba.jpg"
    ],
    "description": "A prime, hand-selected specimen of Hibiscus Bonsai (জবা বনসাই) with 2 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "id": "bonsai-11",
    "name": "Starfruit Bonsai (কামরাঙা বনসাই)",
    "scientificName": "Starfruit Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Starfruit Bonsai (কামরাঙা বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Kamranga-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Kamranga-1.jpg",
      "/images/Plants/Bonsai Plant/Kamranga-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Starfruit Bonsai (কামরাঙা বনসাই) with 2 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "id": "bonsai-12",
    "name": "Royal Poinciana Bonsai (কৃষ্ণচূড়া বনসাই)",
    "scientificName": "Royal Poinciana Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Royal Poinciana Bonsai (কৃষ্ণচূড়া বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Krinasura-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Krinasura-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Royal Poinciana Bonsai (কৃষ্ণচূড়া বনসাই) with 1 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "id": "bonsai-13",
    "name": "Mimosa Bonsai (লজ্জাবতী বনসাই)",
    "scientificName": "Mimosa Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Mimosa Bonsai (লজ্জাবতী বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Lojja boti-2.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Lojja boti-2.jpg",
      "/images/Plants/Bonsai Plant/Lojja Boti.jpg"
    ],
    "description": "A prime, hand-selected specimen of Mimosa Bonsai (লজ্জাবতী বনসাই) with 2 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "id": "bonsai-14",
    "name": "Pakur Tree Bonsai (পাকুড় বনসাই)",
    "scientificName": "Pakur Tree Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Pakur Tree Bonsai (পাকুড় বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Pakur-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Pakur-1.jpg",
      "/images/Plants/Bonsai Plant/Pakur-2.jpg",
      "/images/Plants/Bonsai Plant/Pakur-3.jpg",
      "/images/Plants/Bonsai Plant/Pakur-5.jpg",
      "/images/Plants/Bonsai Plant/Pakur-6.jpg"
    ],
    "description": "A prime, hand-selected specimen of Pakur Tree Bonsai (পাকুড় বনসাই) with 5 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "id": "bonsai-15",
    "name": "Ixora Bonsai (রঙ্গন বনসাই)",
    "scientificName": "Ixora Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Ixora Bonsai (রঙ্গন বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Rongon-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Rongon-1.jpg",
      "/images/Plants/Bonsai Plant/Rongon-2.jpg",
      "/images/Plants/Bonsai Plant/Rongon-4.jpg"
    ],
    "description": "A prime, hand-selected specimen of Ixora Bonsai (রঙ্গন বনসাই) with 3 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "id": "bonsai-16",
    "name": "Tamarind Bonsai (তেঁতুল বনসাই)",
    "scientificName": "Tamarind Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Tamarind Bonsai (তেঁতুল বনসাই)",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Tetul-ta.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Tetul-ta.jpg"
    ],
    "description": "A prime, hand-selected specimen of Tamarind Bonsai (তেঁতুল বনসাই) with 1 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Moderate",
    "lightOrWater": "Bright Morning Sun & Filtered Afternoon Light",
    "temperature": "16°C - 30°C",
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
    "name": "Allamanda (অ্যালমন্ডা ফুল)",
    "scientificName": "Allamanda Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Allamanda (অ্যালমন্ডা ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Alamanda-2.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Alamanda-2.jpg",
      "/images/Plants/Flowers Plant/Alamanda-3.jpg",
      "/images/Plants/Flowers Plant/Alamanda.jpg",
      "/images/Plants/Flowers Plant/Almanda.jpg"
    ],
    "description": "A prime, hand-selected specimen of Allamanda (অ্যালমন্ডা ফুল) with 4 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Bougainvillea Bonsai (বাগান বিলাস বনসাই)",
    "scientificName": "Bougainvillea Bonsai Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Bougainvillea Bonsai (বাগান বিলাস বনসাই)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Bagan-Bilash.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Bagan-Bilash.jpg"
    ],
    "description": "A prime, hand-selected specimen of Bougainvillea Bonsai (বাগান বিলাস বনসাই) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Beli (বেলি ফুল)",
    "scientificName": "Beli Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Beli (বেলি ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Bely-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Bely-1.jpg",
      "/images/Plants/Flowers Plant/Bely-2.jpg",
      "/images/Plants/Flowers Plant/Bely.jpg"
    ],
    "description": "A prime, hand-selected specimen of Beli (বেলি ফুল) with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-4",
    "name": "Camellia (ক্যামেলিয়া ফুল)",
    "scientificName": "Camellia Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Camellia (ক্যামেলিয়া ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Camelia.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Camelia.jpg"
    ],
    "description": "A prime, hand-selected specimen of Camellia (ক্যামেলিয়া ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Chameli (চামেলি ফুল)",
    "scientificName": "Chameli Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Chameli (চামেলি ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Chameli-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Chameli-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Chameli (চামেলি ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Champa (চাঁপা ফুল)",
    "scientificName": "Champa Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Champa (চাঁপা ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Champa- চাঁপা .jpg",
    "images": [
      "/images/Plants/Flowers Plant/Champa- চাঁপা .jpg"
    ],
    "description": "A prime, hand-selected specimen of Champa (চাঁপা ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-7",
    "name": "China Togor (চীন টগর ফুল)",
    "scientificName": "China Togor Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • China Togor (চীন টগর ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/China-Togor-1.png",
    "images": [
      "/images/Plants/Flowers Plant/China-Togor-1.png"
    ],
    "description": "A prime, hand-selected specimen of China Togor (চীন টগর ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-8",
    "name": "Chrysanthemum (চন্দ্রমল্লিকা)",
    "scientificName": "Chrysanthemum Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Chrysanthemum (চন্দ্রমল্লিকা)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Chondro-Mollika-চন্দ্রমল্লিকা.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Chondro-Mollika-চন্দ্রমল্লিকা.jpg"
    ],
    "description": "A prime, hand-selected specimen of Chrysanthemum (চন্দ্রমল্লিকা) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-9",
    "name": "Daisy (ডেইজি ফুল)",
    "scientificName": "Daisy Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Daisy (ডেইজি ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Daisy.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Daisy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Daisy (ডেইজি ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Dahlia (ডালিয়া ফুল)",
    "scientificName": "Dahlia Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Dahlia (ডালিয়া ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Dalia-0.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Dalia-0.jpg",
      "/images/Plants/Flowers Plant/Dalia-1.jpg",
      "/images/Plants/Flowers Plant/Dalia-10.jpg",
      "/images/Plants/Flowers Plant/Dalia-3.jpg",
      "/images/Plants/Flowers Plant/Dalia-4.jpg"
    ],
    "description": "A prime, hand-selected specimen of Dahlia (ডালিয়া ফুল) with 5 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Dolan Champa (দোলনচাঁপা)",
    "scientificName": "Dolan Champa Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Dolan Champa (দোলনচাঁপা)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Dulon Chapa-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Dulon Chapa-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Dolan Champa (দোলনচাঁপা) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Ficus Benjamina (বেনজামিনা বনসাই)",
    "scientificName": "Ficus Benjamina Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Ficus Benjamina (বেনজামিনা বনসাই)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Ficus benjamina-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Ficus benjamina-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Ficus Benjamina (বেনজামিনা বনসাই) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Gardenia (গন্ধরাজ ফুল)",
    "scientificName": "Gardenia Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Gardenia (গন্ধরাজ ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Gondhoraj-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Gondhoraj-1.jpg",
      "/images/Plants/Flowers Plant/Gondhoraj-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Gardenia (গন্ধরাজ ফুল) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Hasnahena (হাসনাহেনা)",
    "scientificName": "Hasnahena Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Hasnahena (হাসনাহেনা)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/HasnaHena-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/HasnaHena-1.jpg",
      "/images/Plants/Flowers Plant/HasnaHena-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Hasnahena (হাসনাহেনা) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Hibiscus Bonsai (জবা বনসাই)",
    "scientificName": "Hibiscus Bonsai Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Hibiscus Bonsai (জবা বনসাই)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Joba-0.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Joba-0.jpg"
    ],
    "description": "A prime, hand-selected specimen of Hibiscus Bonsai (জবা বনসাই) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Star Jasmine (জুঁই ফুল)",
    "scientificName": "Star Jasmine Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Star Jasmine (জুঁই ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Jui (জুঁই)-Star Jasmine-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Jui (জুঁই)-Star Jasmine-1.jpg",
      "/images/Plants/Flowers Plant/Jui (জুঁই)-Star Jasmine.jpg"
    ],
    "description": "A prime, hand-selected specimen of Star Jasmine (জুঁই ফুল) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-17",
    "name": "Kamini (কামিনী ফুল)",
    "scientificName": "Kamini Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Kamini (কামিনী ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kameni-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kameni-1.jpg",
      "/images/Plants/Flowers Plant/Kameni-2.jpg",
      "/images/Plants/Flowers Plant/Kameni-3.jpg"
    ],
    "description": "A prime, hand-selected specimen of Kamini (কামিনী ফুল) with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-18",
    "name": "Plumeria (কাঠগোলাপ)",
    "scientificName": "Plumeria Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Plumeria (কাঠগোলাপ)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kat-Gulap-0.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kat-Gulap-0.jpg",
      "/images/Plants/Flowers Plant/Kat-Gulap.jpg"
    ],
    "description": "A prime, hand-selected specimen of Plumeria (কাঠগোলাপ) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-19",
    "name": "Crown of Thorns (কাঁটামুকুট)",
    "scientificName": "Crown of Thorns Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Crown of Thorns (কাঁটামুকুট)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kata Mukut-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kata Mukut-1.jpg",
      "/images/Plants/Flowers Plant/Kata Mukut-2.jpg",
      "/images/Plants/Flowers Plant/Kata Mukut-3.jpg"
    ],
    "description": "A prime, hand-selected specimen of Crown of Thorns (কাঁটামুকুট) with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Water Hyacinth (কচুরিপানা ফুল)",
    "scientificName": "Water Hyacinth Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Water Hyacinth (কচুরিপানা ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kochuri pana.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kochuri pana.jpg"
    ],
    "description": "A prime, hand-selected specimen of Water Hyacinth (কচুরিপানা ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Kadamba (কদম ফুল)",
    "scientificName": "Kadamba Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Kadamba (কদম ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kodom-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kodom-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Kadamba (কদম ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Canna Lily (কলাবতী ফুল)",
    "scientificName": "Canna Lily Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Canna Lily (কলাবতী ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kolaboti-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kolaboti-1.jpg",
      "/images/Plants/Flowers Plant/Kolaboti-2.jpg",
      "/images/Plants/Flowers Plant/Kolaboti-3.jpg"
    ],
    "description": "A prime, hand-selected specimen of Canna Lily (কলাবতী ফুল) with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Yellow Oleander (কলকে করবী)",
    "scientificName": "Yellow Oleander Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Yellow Oleander (কলকে করবী)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kolke Kobori-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kolke Kobori-1.jpg",
      "/images/Plants/Flowers Plant/Kolke-Kobori.jpg"
    ],
    "description": "A prime, hand-selected specimen of Yellow Oleander (কলকে করবী) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Cosmos (কসমস ফুল)",
    "scientificName": "Cosmos Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Cosmos (কসমস ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/kosmos.jpg",
    "images": [
      "/images/Plants/Flowers Plant/kosmos.jpg"
    ],
    "description": "A prime, hand-selected specimen of Cosmos (কসমস ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Krishnachura (কৃষ্ণচূড়া)",
    "scientificName": "Krishnachura Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Krishnachura (কৃষ্ণচূড়া)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Krishno Chura-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Krishno Chura-1.jpg",
      "/images/Plants/Flowers Plant/Krishno Chura-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Krishnachura (কৃষ্ণচূড়া) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Cypress Vine (কুঞ্জলতা ফুল)",
    "scientificName": "Cypress Vine Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Cypress Vine (কুঞ্জলতা ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/KunjoLota.jpg",
    "images": [
      "/images/Plants/Flowers Plant/KunjoLota.jpg"
    ],
    "description": "A prime, hand-selected specimen of Cypress Vine (কুঞ্জলতা ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Chili Hibiscus (লঙ্কা জবা)",
    "scientificName": "Chili Hibiscus Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Chili Hibiscus (লঙ্কা জবা)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lanka Joba-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Lanka Joba-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Chili Hibiscus (লঙ্কা জবা) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-28",
    "name": "Lantana (ল্যান্টানা ফুল)",
    "scientificName": "Lantana Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Lantana (ল্যান্টানা ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lantana camera-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Lantana camera-1.jpg",
      "/images/Plants/Flowers Plant/Lantana camera-5.jpg",
      "/images/Plants/Flowers Plant/Lantana camera-9.jpg",
      "/images/Plants/Flowers Plant/Lantana camera.jpg",
      "/images/Plants/Flowers Plant/Lantana camera_2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Lantana (ল্যান্টানা ফুল) with 5 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-29",
    "name": "Lily (লিলি ফুল)",
    "scientificName": "Lily Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Lily (লিলি ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lily-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Lily-1.jpg",
      "/images/Plants/Flowers Plant/Lily-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Lily (লিলি ফুল) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-30",
    "name": "Mimosa (লজ্জাবতী ফুল)",
    "scientificName": "Mimosa Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Mimosa (লজ্জাবতী ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lojjaboti-2.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Lojjaboti-2.jpg",
      "/images/Plants/Flowers Plant/LojjaBoti.jpg"
    ],
    "description": "A prime, hand-selected specimen of Mimosa (লজ্জাবতী ফুল) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-31",
    "name": "Lotus (পদ্ম ফুল)",
    "scientificName": "Lotus Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Lotus (পদ্ম ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lotus-পদ্ম (Podmo).jpg",
    "images": [
      "/images/Plants/Flowers Plant/Lotus-পদ্ম (Podmo).jpg"
    ],
    "description": "A prime, hand-selected specimen of Lotus (পদ্ম ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight (6+ hours for prolific blooming)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-32",
    "name": "Madhavi Lata (মাধবীলতা)",
    "scientificName": "Madhavi Lata Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Madhavi Lata (মাধবীলতা)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Madhubi-Lota.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Madhubi-Lota.jpg"
    ],
    "description": "A prime, hand-selected specimen of Madhavi Lata (মাধবীলতা) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-33",
    "name": "Marigold (গাঁদা ফুল)",
    "scientificName": "Marigold Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Marigold (গাঁদা ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/MariGold-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/MariGold-1.jpg",
      "/images/Plants/Flowers Plant/MariGold-2.jpg",
      "/images/Plants/Flowers Plant/MariGold.jpg"
    ],
    "description": "A prime, hand-selected specimen of Marigold (গাঁদা ফুল) with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-34",
    "name": "Periwinkle (নয়নতারা ফুল)",
    "scientificName": "Periwinkle Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Periwinkle (নয়নতারা ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Noyon Tara-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Noyon Tara-1.jpg",
      "/images/Plants/Flowers Plant/Noyon Tara.jpg"
    ],
    "description": "A prime, hand-selected specimen of Periwinkle (নয়নতারা ফুল) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Butterfly Pea (অপরাজিতা ফুল)",
    "scientificName": "Butterfly Pea Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Butterfly Pea (অপরাজিতা ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Oprajita-0.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Oprajita-0.jpg",
      "/images/Plants/Flowers Plant/Oprajita-1.jpg",
      "/images/Plants/Flowers Plant/Oprajita-2.jpg",
      "/images/Plants/Flowers Plant/Oprajita.jpg"
    ],
    "description": "A prime, hand-selected specimen of Butterfly Pea (অপরাজিতা ফুল) with 4 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Palash (পলাশ ফুল)",
    "scientificName": "Palash Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Palash (পলাশ ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Palash_Tree.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Palash_Tree.jpg"
    ],
    "description": "A prime, hand-selected specimen of Palash (পলাশ ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Petunia (পেটুনিয়া ফুল)",
    "scientificName": "Petunia Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Petunia (পেটুনিয়া ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/petunia plant.jpg",
    "images": [
      "/images/Plants/Flowers Plant/petunia plant.jpg"
    ],
    "description": "A prime, hand-selected specimen of Petunia (পেটুনিয়া ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Palash (পলাশ ফুল)",
    "scientificName": "Palash Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Palash (পলাশ ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Polash-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Polash-1.jpg",
      "/images/Plants/Flowers Plant/Polash.jpg"
    ],
    "description": "A prime, hand-selected specimen of Palash (পলাশ ফুল) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Ponika (পানিকা ফুল)",
    "scientificName": "Ponika Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Ponika (পানিকা ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Ponika-পানিকা ফুল.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Ponika-পানিকা ফুল.jpg"
    ],
    "description": "A prime, hand-selected specimen of Ponika (পানিকা ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Poppy (পপি ফুল)",
    "scientificName": "Poppy Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Poppy (পপি ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Poppy-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Poppy-1.jpg",
      "/images/Plants/Flowers Plant/Poppy-2.jpg",
      "/images/Plants/Flowers Plant/Poppy-3.jpg"
    ],
    "description": "A prime, hand-selected specimen of Poppy (পপি ফুল) with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Portulaca (পর্তুলিকা / ঘাসফুল)",
    "scientificName": "Portulaca Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Portulaca (পর্তুলিকা / ঘাসফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Portulica-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Portulica-1.jpg",
      "/images/Plants/Flowers Plant/Portulica-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Portulaca (পর্তুলিকা / ঘাসফুল) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Rain Lily (রেইন লিলি)",
    "scientificName": "Rain Lily Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Rain Lily (রেইন লিলি)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rain-lily-2.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Rain-lily-2.jpg",
      "/images/Plants/Flowers Plant/Rain-lily.jpg"
    ],
    "description": "A prime, hand-selected specimen of Rain Lily (রেইন লিলি) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Ixora Bonsai (রঙ্গন বনসাই)",
    "scientificName": "Ixora Bonsai Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Ixora Bonsai (রঙ্গন বনসাই)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rongon-2.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Rongon-2.jpg",
      "/images/Plants/Flowers Plant/Rongon-3.jpg",
      "/images/Plants/Flowers Plant/Rongon-4.jpg",
      "/images/Plants/Flowers Plant/Rongon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Ixora Bonsai (রঙ্গন বনসাই) with 4 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Rose (গোলাপ ফুল)",
    "scientificName": "Rose Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Rose (গোলাপ ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rose-0.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Rose-0.jpg",
      "/images/Plants/Flowers Plant/Rose-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Rose (গোলাপ ফুল) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-45",
    "name": "Night Flowering Jasmine (শিউলি ফুল)",
    "scientificName": "Night Flowering Jasmine Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Night Flowering Jasmine (শিউলি ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Shiuly.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Shiuly.jpg"
    ],
    "description": "A prime, hand-selected specimen of Night Flowering Jasmine (শিউলি ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-46",
    "name": "Four O Clock (সন্ধ্যামালতী)",
    "scientificName": "Four O Clock Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Four O Clock (সন্ধ্যামালতী)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/shonda maloti.jpg",
    "images": [
      "/images/Plants/Flowers Plant/shonda maloti.jpg"
    ],
    "description": "A prime, hand-selected specimen of Four O Clock (সন্ধ্যামালতী) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Confederate Rose (স্থলপদ্ম)",
    "scientificName": "Confederate Rose Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Confederate Rose (স্থলপদ্ম)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/STOL PODDO-CONFEDERATE ROSE.jpg",
    "images": [
      "/images/Plants/Flowers Plant/STOL PODDO-CONFEDERATE ROSE.jpg",
      "/images/Plants/Flowers Plant/Stol Poddo.jpg"
    ],
    "description": "A prime, hand-selected specimen of Confederate Rose (স্থলপদ্ম) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-48",
    "name": "Sunflower (সূর্যমুখী ফুল)",
    "scientificName": "Sunflower Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Sunflower (সূর্যমুখী ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Sunflower.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Sunflower.jpg"
    ],
    "description": "A prime, hand-selected specimen of Sunflower (সূর্যমুখী ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Tuberose (রজনীগন্ধা)",
    "scientificName": "Tuberose Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Tuberose (রজনীগন্ধা)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Tube Rose-রাজনীগন্ধা-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Tube Rose-রাজনীগন্ধা-1.jpg",
      "/images/Plants/Flowers Plant/Tube Rose-রাজনীগন্ধা-2.jpg",
      "/images/Plants/Flowers Plant/Tube Rose-রাজনীগন্ধা.jpg"
    ],
    "description": "A prime, hand-selected specimen of Tuberose (রজনীগন্ধা) with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-50",
    "name": "Tulip (টিউলিপ ফুল)",
    "scientificName": "Tulip Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Tulip (টিউলিপ ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Tulip-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Tulip-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Tulip (টিউলিপ ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Exotic Blossom (অপরিচিত সুন্দর ফুল)",
    "scientificName": "Exotic Blossom Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Exotic Blossom (অপরিচিত সুন্দর ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/UNKnown-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/UNKnown-1.jpg",
      "/images/Plants/Flowers Plant/UNKnown-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Exotic Blossom (অপরিচিত সুন্দর ফুল) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Water Lily (নীল শাপলা)",
    "scientificName": "Water Lily Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Water Lily (নীল শাপলা)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Water Lily-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Water Lily-1.jpg",
      "/images/Plants/Flowers Plant/Water Lily-2.jpg",
      "/images/Plants/Flowers Plant/Water Lily.jpg"
    ],
    "description": "A prime, hand-selected specimen of Water Lily (নীল শাপলা) with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Direct Sunlight (6+ hours for prolific blooming)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-53",
    "name": "Zinnia (জিনিয়া ফুল)",
    "scientificName": "Zinnia Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Zinnia (জিনিয়া ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Zinnia -2.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Zinnia -2.jpg",
      "/images/Plants/Flowers Plant/Zinnia-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Zinnia (জিনিয়া ফুল) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Yellow Bells (চন্দ্রপ্রভা সোনাপাতি)",
    "scientificName": "Yellow Bells Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Yellow Bells (চন্দ্রপ্রভা সোনাপাতি)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/চন্দ্রপ্রভা-সোনাপাতি ফুল-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/চন্দ্রপ্রভা-সোনাপাতি ফুল-1.jpg",
      "/images/Plants/Flowers Plant/চন্দ্রপ্রভা-সোনাপাতি ফুল-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Yellow Bells (চন্দ্রপ্রভা সোনাপাতি) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Chrysanthemum (চন্দ্রমল্লিকা)",
    "scientificName": "Chrysanthemum Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Chrysanthemum (চন্দ্রমল্লিকা)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/চন্দ্রমল্লিকা -1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/চন্দ্রমল্লিকা -1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Chrysanthemum (চন্দ্রমল্লিকা) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Gerbera (জারবেরা ফুল)",
    "scientificName": "Gerbera Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Gerbera (জারবেরা ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/জারবেরা (Gerbera) African Daisy.jpg",
    "images": [
      "/images/Plants/Flowers Plant/জারবেরা (Gerbera) African Daisy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Gerbera (জারবেরা ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Bush Clock Vine (নীল ঘণ্টা ফুল)",
    "scientificName": "Bush Clock Vine Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Bush Clock Vine (নীল ঘণ্টা ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/নীল ঘন্টা  Bush Clock Vine .jpg",
    "images": [
      "/images/Plants/Flowers Plant/নীল ঘন্টা  Bush Clock Vine .jpg"
    ],
    "description": "A prime, hand-selected specimen of Bush Clock Vine (নীল ঘণ্টা ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Ruellia (পটপটি ফুল)",
    "scientificName": "Ruellia Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Ruellia (পটপটি ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/পটপটি -রুয়েলিয়া ফুল.jpg",
    "images": [
      "/images/Plants/Flowers Plant/পটপটি -রুয়েলিয়া ফুল.jpg"
    ],
    "description": "A prime, hand-selected specimen of Ruellia (পটপটি ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "id": "flowers-59",
    "name": "Spanish Cherry (বকুল ফুল)",
    "scientificName": "Spanish Cherry Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Spanish Cherry (বকুল ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/বকুল ফুল -Bakul Flower-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/বকুল ফুল -Bakul Flower-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Spanish Cherry (বকুল ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Singapore Daisy (ভৃঙ্গরাজ ফুল)",
    "scientificName": "Singapore Daisy Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Singapore Daisy (ভৃঙ্গরাজ ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/ভৃঙ্গরাজ-Singapore Daisy-Sphagneticola calendulacea.jpg",
    "images": [
      "/images/Plants/Flowers Plant/ভৃঙ্গরাজ-Singapore Daisy-Sphagneticola calendulacea.jpg"
    ],
    "description": "A prime, hand-selected specimen of Singapore Daisy (ভৃঙ্গরাজ ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Cockscomb (মোরগঝুঁটি ফুল)",
    "scientificName": "Cockscomb Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Cockscomb (মোরগঝুঁটি ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/মোরগঝুঁটি ফুল-2.jpg",
    "images": [
      "/images/Plants/Flowers Plant/মোরগঝুঁটি ফুল-2.jpg",
      "/images/Plants/Flowers Plant/মোরগঝুঁটি ফুল.jpg"
    ],
    "description": "A prime, hand-selected specimen of Cockscomb (মোরগঝুঁটি ফুল) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Golden Shower (সোনালু ফুল)",
    "scientificName": "Golden Shower Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Golden Shower (সোনালু ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/সোনালু-বাঁদর লাঠি .jpg",
    "images": [
      "/images/Plants/Flowers Plant/সোনালু-বাঁদর লাঠি .jpg"
    ],
    "description": "A prime, hand-selected specimen of Golden Shower (সোনালু ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "Golden Shower Tree (সোনালু ফুল)",
    "scientificName": "Golden Shower Tree Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Golden Shower Tree (সোনালু ফুল)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/সোনালু-বাঁদর লাঠি-1 .jpg",
    "images": [
      "/images/Plants/Flowers Plant/সোনালু-বাঁদর লাঠি-1 .jpg"
    ],
    "description": "A prime, hand-selected specimen of Golden Shower Tree (সোনালু ফুল) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
    "type": "plant",
    "careLevel": "Easy",
    "lightOrWater": "Full Sunlight (5-6+ hours daily)",
    "temperature": "20°C - 34°C",
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
    "name": "24K Full Gold Guppy (২৪কে ফুল গোল্ড গাপ্পি)",
    "scientificName": "24K Full Gold Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • 24K Full Gold Guppy (২৪কে ফুল গোল্ড গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/24k Gold.jpg",
    "images": [
      "/images/Fish/Guppy/24k Gold.jpg",
      "/images/Fish/Guppy/Full Gold Guppy-1.jpg",
      "/images/Fish/Guppy/FULL GOLD Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of 24K Full Gold Guppy (২৪কে ফুল গোল্ড গাপ্পি) with 3 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Albino Blue Topaz Guppy (অ্যালবিনো ব্লু টোপাজ গাপ্পি)",
    "scientificName": "Albino Blue Topaz Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Albino Blue Topaz Guppy (অ্যালবিনো ব্লু টোপাজ গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Blue Topaz Guppy-1.jpg",
    "images": [
      "/images/Fish/Guppy/Albino Blue Topaz Guppy-1.jpg",
      "/images/Fish/Guppy/Albino Blue Topaz Guppy-2.jpg",
      "/images/Fish/Guppy/Albino Blue Topaz Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Albino Blue Topaz Guppy (অ্যালবিনো ব্লু টোপাজ গাপ্পি) with 3 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Albino Red Koi Guppy (অ্যালবিনো রেড কই গাপ্পি)",
    "scientificName": "Albino Red Koi Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Albino Red Koi Guppy (অ্যালবিনো রেড কই গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Red Koi Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Albino Red Koi Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Albino Red Koi Guppy (অ্যালবিনো রেড কই গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Red Moscow Guppy (রেড মস্কো গাপ্পি)",
    "scientificName": "Red Moscow Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Red Moscow Guppy (রেড মস্কো গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Red-Moscow-Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Albino Red-Moscow-Guppy.jpg",
      "/images/Fish/Guppy/Red Moscow-1.jpg",
      "/images/Fish/Guppy/Red Moscow-2.jpg",
      "/images/Fish/Guppy/Red Moscow-3.jpg",
      "/images/Fish/Guppy/Red Moscow.jpg"
    ],
    "description": "A prime, hand-selected specimen of Red Moscow Guppy (রেড মস্কো গাপ্পি) with 5 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-5",
    "name": "Albino Snakeskin Guppy (অ্যালবিনো স্নেকস্কিন গাপ্পি)",
    "scientificName": "Albino Snakeskin Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Albino Snakeskin Guppy (অ্যালবিনো স্নেকস্কিন গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Snakeskin Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Albino Snakeskin Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Albino Snakeskin Guppy (অ্যালবিনো স্নেকস্কিন গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Albino Blue Ribbon Guppy (অ্যালবিনো ব্লু রিবন গাপ্পি)",
    "scientificName": "Albino Blue Ribbon Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Albino Blue Ribbon Guppy (অ্যালবিনো ব্লু রিবন গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino-Blue-Ribbon-fin-Female-Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Albino-Blue-Ribbon-fin-Female-Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Albino Blue Ribbon Guppy (অ্যালবিনো ব্লু রিবন গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Black Metal Lace Guppy (ব্ল্যাক মেটাল লেইস গাপ্পি)",
    "scientificName": "Black Metal Lace Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Black Metal Lace Guppy (ব্ল্যাক মেটাল লেইস গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Black Metal Lace Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Black Metal Lace Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Black Metal Lace Guppy (ব্ল্যাক মেটাল লেইস গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-8",
    "name": "Black Metal Guppy (ব্ল্যাক মেটাল গাপ্পি)",
    "scientificName": "Black Metal Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Black Metal Guppy (ব্ল্যাক মেটাল গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Black MetalGuppy.jpg",
    "images": [
      "/images/Fish/Guppy/Black MetalGuppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Black Metal Guppy (ব্ল্যাক মেটাল গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-9",
    "name": "Black Moscow Guppy (ব্ল্যাক মস্কো গাপ্পি)",
    "scientificName": "Black Moscow Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Black Moscow Guppy (ব্ল্যাক মস্কো গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Black-Moscow Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Black-Moscow Guppy.jpg",
      "/images/Fish/Guppy/Black-Moscow-Guppy-1.jpg.png",
      "/images/Fish/Guppy/Black-Moscow-Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Black Moscow Guppy (ব্ল্যাক মস্কো গাপ্পি) with 3 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Blue Dragon Ribbon Guppy (ব্লু ড্রাগন রিবন গাপ্পি)",
    "scientificName": "Blue Dragon Ribbon Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Blue Dragon Ribbon Guppy (ব্লু ড্রাগন রিবন গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Blue Dragon Ribbon.jpg",
    "images": [
      "/images/Fish/Guppy/Blue Dragon Ribbon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Blue Dragon Ribbon Guppy (ব্লু ড্রাগন রিবন গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-11",
    "name": "Blue Grass Guppy (ব্লু গ্রাস গাপ্পি)",
    "scientificName": "Blue Grass Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Blue Grass Guppy (ব্লু গ্রাস গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Blue Grass Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Blue Grass Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Blue Grass Guppy (ব্লু গ্রাস গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Blue Head Samurai Guppy (ব্লু হেড সামুরাই গাপ্পি)",
    "scientificName": "Blue Head Samurai Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Blue Head Samurai Guppy (ব্লু হেড সামুরাই গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/blue head samurai guppy.jpg",
    "images": [
      "/images/Fish/Guppy/blue head samurai guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Blue Head Samurai Guppy (ব্লু হেড সামুরাই গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Blue Moscow Guppy (ব্লু মস্কো গাপ্পি)",
    "scientificName": "Blue Moscow Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Blue Moscow Guppy (ব্লু মস্কো গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Blue-Moscow-Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Blue-Moscow-Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Blue Moscow Guppy (ব্লু মস্কো গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Dumbo Mosaic Guppy (ডাম্বো মোজাইক গাপ্পি)",
    "scientificName": "Dumbo Mosaic Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Dumbo Mosaic Guppy (ডাম্বো মোজাইক গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Dumbo Musaic.jpg",
    "images": [
      "/images/Fish/Guppy/Dumbo Musaic.jpg"
    ],
    "description": "A prime, hand-selected specimen of Dumbo Mosaic Guppy (ডাম্বো মোজাইক গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Gold Dust Molly (গোল্ড ডাস্ট মলি)",
    "scientificName": "Gold Dust Molly Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Gold Dust Molly (গোল্ড ডাস্ট মলি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Gold Dust Moly.jpg",
    "images": [
      "/images/Fish/Guppy/Gold Dust Moly.jpg"
    ],
    "description": "A prime, hand-selected specimen of Gold Dust Molly (গোল্ড ডাস্ট মলি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-16",
    "name": "Gold Lace Snakeskin Guppy (গোল্ড লেইস স্নেকস্কিন গাপ্পি)",
    "scientificName": "Gold Lace Snakeskin Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Gold Lace Snakeskin Guppy (গোল্ড লেইস স্নেকস্কিন গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Gold Lace Snakeskin.jpg",
    "images": [
      "/images/Fish/Guppy/Gold Lace Snakeskin.jpg"
    ],
    "description": "A prime, hand-selected specimen of Gold Lace Snakeskin Guppy (গোল্ড লেইস স্নেকস্কিন গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-17",
    "name": "Green Dragon Guppy (গ্রিন ড্রাগন গাপ্পি)",
    "scientificName": "Green Dragon Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Green Dragon Guppy (গ্রিন ড্রাগন গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Green Dragon.jpg",
    "images": [
      "/images/Fish/Guppy/Green Dragon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Green Dragon Guppy (গ্রিন ড্রাগন গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Green Moscow Guppy (গ্রিন মস্কো গাপ্পি)",
    "scientificName": "Green Moscow Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Green Moscow Guppy (গ্রিন মস্কো গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Green-Moscow-Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Green-Moscow-Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Green Moscow Guppy (গ্রিন মস্কো গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-19",
    "name": "HB Red Rose Guppy (এইচবি রেড রোজ গাপ্পি)",
    "scientificName": "HB Red Rose Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • HB Red Rose Guppy (এইচবি রেড রোজ গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/HB Red Rose.jpg",
    "images": [
      "/images/Fish/Guppy/HB Red Rose.jpg"
    ],
    "description": "A prime, hand-selected specimen of HB Red Rose Guppy (এইচবি রেড রোজ গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-20",
    "name": "Koi Tuxedo Guppy (কই টাক্সিডো গাপ্পি)",
    "scientificName": "Koi Tuxedo Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Koi Tuxedo Guppy (কই টাক্সিডো গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Koi Txido Guppy-1.jpg",
    "images": [
      "/images/Fish/Guppy/Koi Txido Guppy-1.jpg",
      "/images/Fish/Guppy/Koi Txido Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Koi Tuxedo Guppy (কই টাক্সিডো গাপ্পি) with 2 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-21",
    "name": "Purple Mosaic Guppy (পার্পল মোজাইক গাপ্পি)",
    "scientificName": "Purple Mosaic Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Purple Mosaic Guppy (পার্পল মোজাইক গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Purple Mosaic Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Purple Mosaic Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Purple Mosaic Guppy (পার্পল মোজাইক গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-22",
    "name": "Red Dragon Guppy (রেড ড্রাগন গাপ্পি)",
    "scientificName": "Red Dragon Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Red Dragon Guppy (রেড ড্রাগন গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Dragon.jpg",
    "images": [
      "/images/Fish/Guppy/Red Dragon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Red Dragon Guppy (রেড ড্রাগন গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-23",
    "name": "Red Dragon Dragon-Eye Guppy (রেড ড্রাগন গাপ্পি)",
    "scientificName": "Red Dragon Dragon-Eye Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Red Dragon Dragon-Eye Guppy (রেড ড্রাগন গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Gragon.jpg",
    "images": [
      "/images/Fish/Guppy/Red Gragon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Red Dragon Dragon-Eye Guppy (রেড ড্রাগন গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Red Tail Platinum Dumbo Ear (রেড টেইল ডাম্বো ইয়ার)",
    "scientificName": "Red Tail Platinum Dumbo Ear Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Red Tail Platinum Dumbo Ear (রেড টেইল ডাম্বো ইয়ার)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Tail Platinum Dumbo Ear.jpg.png",
    "images": [
      "/images/Fish/Guppy/Red Tail Platinum Dumbo Ear.jpg.png"
    ],
    "description": "A prime, hand-selected specimen of Red Tail Platinum Dumbo Ear (রেড টেইল ডাম্বো ইয়ার) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-25",
    "name": "Longfin Ribbon Guppy (লংফিন রিবন গাপ্পি)",
    "scientificName": "Longfin Ribbon Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Longfin Ribbon Guppy (লংফিন রিবন গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Ribbon Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Ribbon Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Longfin Ribbon Guppy (লংফিন রিবন গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-26",
    "name": "RTP Dumbo Ear Guppy (আরটিপি ডাম্বো ইয়ার গাপ্পি)",
    "scientificName": "RTP Dumbo Ear Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • RTP Dumbo Ear Guppy (আরটিপি ডাম্বো ইয়ার গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/RTP Dumbo Ear-1.jpg",
    "images": [
      "/images/Fish/Guppy/RTP Dumbo Ear-1.jpg",
      "/images/Fish/Guppy/RTP Dumbo Ear-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of RTP Dumbo Ear Guppy (আরটিপি ডাম্বো ইয়ার গাপ্পি) with 2 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "id": "guppy-27",
    "name": "Santa Claus Guppy (সান্তা ক্লজ গাপ্পি)",
    "scientificName": "Santa Claus Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Santa Claus Guppy (সান্তা ক্লজ গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Santa claus guppy-1.jpg",
    "images": [
      "/images/Fish/Guppy/Santa claus guppy-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Santa Claus Guppy (সান্তা ক্লজ গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Santa Claus Strain Guppy (সান্তা ক্লজ গাপ্পি)",
    "scientificName": "Santa Claus Strain Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Santa Claus Strain Guppy (সান্তা ক্লজ গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Shanta Cluse Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Shanta Cluse Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Santa Claus Strain Guppy (সান্তা ক্লজ গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Snow White Guppy (স্নো হোয়াইট গাপ্পি)",
    "scientificName": "Snow White Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Snow White Guppy (স্নো হোয়াইট গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Snow White Gyuppy.jpg",
    "images": [
      "/images/Fish/Guppy/Snow White Gyuppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Snow White Guppy (স্নো হোয়াইট গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Tuxedo Koi Guppies (টাক্সিডো কই গাপ্পি)",
    "scientificName": "Tuxedo Koi Guppies Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Tuxedo Koi Guppies (টাক্সিডো কই গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/tuxedo-koi-guppies.png",
    "images": [
      "/images/Fish/Guppy/tuxedo-koi-guppies.png"
    ],
    "description": "A prime, hand-selected specimen of Tuxedo Koi Guppies (টাক্সিডো কই গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Platinum Cross Guppy (প্ল্যাটিনাম ক্রস গাপ্পি)",
    "scientificName": "Platinum Cross Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Platinum Cross Guppy (প্ল্যাটিনাম ক্রস গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/un-1.jpg",
    "images": [
      "/images/Fish/Guppy/un-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Platinum Cross Guppy (প্ল্যাটিনাম ক্রস গাপ্পি) with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "White Tuxedo Guppy (হোয়াইট টাক্সিডো গাপ্পি)",
    "scientificName": "White Tuxedo Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • White Tuxedo Guppy (হোয়াইট টাক্সিডো গাপ্পি)",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/White Toxido-1.jpg",
    "images": [
      "/images/Fish/Guppy/White Toxido-1.jpg",
      "/images/Fish/Guppy/White Toxido-2.jpg",
      "/images/Fish/Guppy/White Toxido.jpg"
    ],
    "description": "A prime, hand-selected specimen of White Tuxedo Guppy (হোয়াইট টাক্সিডো গাপ্পি) with 3 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)",
    "temperature": "24°C - 28°C",
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
    "name": "Alien Betta Fish (এলিয়েন ফাইটার ফিশ)",
    "scientificName": "Alien Betta Fish Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Alien Betta Fish (এলিয়েন ফাইটার ফিশ)",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Alien Betta Fish.jpg",
    "images": [
      "/images/Fish/Fighter/Alien Betta Fish.jpg"
    ],
    "description": "A prime, hand-selected specimen of Alien Betta Fish (এলিয়েন ফাইটার ফিশ) with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C",
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
    "name": "Dumbo Lavender Betta (ডাম্বো ল্যাভেন্ডার বেটা ফিশ)",
    "scientificName": "Dumbo Lavender Betta Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Dumbo Lavender Betta (ডাম্বো ল্যাভেন্ডার বেটা ফিশ)",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Betta Dumbo Lavender.jpg",
    "images": [
      "/images/Fish/Fighter/Betta Dumbo Lavender.jpg"
    ],
    "description": "A prime, hand-selected specimen of Dumbo Lavender Betta (ডাম্বো ল্যাভেন্ডার বেটা ফিশ) with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C",
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
    "name": "Red Dragon Betta (রেড ড্রাগন ফাইটার ফিশ)",
    "scientificName": "Red Dragon Betta Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Red Dragon Betta (রেড ড্রাগন ফাইটার ফিশ)",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Betta Red Dragon.jpg",
    "images": [
      "/images/Fish/Fighter/Betta Red Dragon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Red Dragon Betta (রেড ড্রাগন ফাইটার ফিশ) with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C",
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
    "name": "Red Snow Dragon Betta (রেড স্নো ড্রাগন বেটা ফিশ)",
    "scientificName": "Red Snow Dragon Betta Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Red Snow Dragon Betta (রেড স্নো ড্রাগন বেটা ফিশ)",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Betta Red Snow Dragon.jpg",
    "images": [
      "/images/Fish/Fighter/Betta Red Snow Dragon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Red Snow Dragon Betta (রেড স্নো ড্রাগন বেটা ফিশ) with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C",
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
    "name": "Blue Rim Betta (ব্লু রিম ফাইটার ফিশ)",
    "scientificName": "Blue Rim Betta Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Blue Rim Betta (ব্লু রিম ফাইটার ফিশ)",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Blue Rim Betta Fish.jpg",
    "images": [
      "/images/Fish/Fighter/Blue Rim Betta Fish.jpg"
    ],
    "description": "A prime, hand-selected specimen of Blue Rim Betta (ব্লু রিম ফাইটার ফিশ) with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C",
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
    "name": "Candy Koi Betta (ক্যান্ডি কই বেটা ফিশ)",
    "scientificName": "Candy Koi Betta Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Candy Koi Betta (ক্যান্ডি কই বেটা ফিশ)",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Candy Betta Fish.jpg",
    "images": [
      "/images/Fish/Fighter/Candy Betta Fish.jpg"
    ],
    "description": "A prime, hand-selected specimen of Candy Koi Betta (ক্যান্ডি কই বেটা ফিশ) with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C",
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
    "id": "fighter-7",
    "name": "Halfmoon Betta (হাফমুন ফাইটার ফিশ)",
    "scientificName": "Halfmoon Betta Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Halfmoon Betta (হাফমুন ফাইটার ফিশ)",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/half-moon betta fish.jpg",
    "images": [
      "/images/Fish/Fighter/half-moon betta fish.jpg"
    ],
    "description": "A prime, hand-selected specimen of Halfmoon Betta (হাফমুন ফাইটার ফিশ) with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C",
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
    "name": "Marble Koi Betta (মার্বেল কই ফাইটার ফিশ)",
    "scientificName": "Marble Koi Betta Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Marble Koi Betta (মার্বেল কই ফাইটার ফিশ)",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Koi Betta fish.jpg",
    "images": [
      "/images/Fish/Fighter/Koi Betta fish.jpg"
    ],
    "description": "A prime, hand-selected specimen of Marble Koi Betta (মার্বেল কই ফাইটার ফিশ) with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C",
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
    "name": "Red Koi Galaxy Betta (রেড কই গ্যালাক্সি বেটা ফিশ)",
    "scientificName": "Red Koi Galaxy Betta Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Red Koi Galaxy Betta (রেড কই গ্যালাক্সি বেটা ফিশ)",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Red Koi Galaxy) Betta.jpg",
    "images": [
      "/images/Fish/Fighter/Red Koi Galaxy) Betta.jpg"
    ],
    "description": "A prime, hand-selected specimen of Red Koi Galaxy Betta (রেড কই গ্যালাক্সি বেটা ফিশ) with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C",
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
    "name": "Rosetail Betta (রোজটেইল ফাইটার ফিশ)",
    "scientificName": "Rosetail Betta Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Rosetail Betta (রোজটেইল ফাইটার ফিশ)",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Rose tail.jpg",
    "images": [
      "/images/Fish/Fighter/Rose tail.jpg"
    ],
    "description": "A prime, hand-selected specimen of Rosetail Betta (রোজটেইল ফাইটার ফিশ) with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C",
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
    "name": "Exotic Blossom (অপরিচিত সুন্দর ফুল)",
    "scientificName": "Exotic Blossom Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Exotic Blossom (অপরিচিত সুন্দর ফুল)",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Unknown-1.jpg",
    "images": [
      "/images/Fish/Fighter/Unknown-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Exotic Blossom (অপরিচিত সুন্দর ফুল) with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)",
    "temperature": "25°C - 29°C",
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
    "name": "Pacific Blue Tang (প্যাসিফিক ব্লু ট্যাং)",
    "scientificName": "Pacific Blue Tang Specimen",
    "bengaliName": "সি ওয়াটার ফিশ • Pacific Blue Tang (প্যাসিফিক ব্লু ট্যাং)",
    "categoryId": "marine",
    "categoryName": "SeaWater Fish",
    "image": "/images/Fish/SeaWater Fish/Blue Tang-1.jpg",
    "images": [
      "/images/Fish/SeaWater Fish/Blue Tang-1.jpg",
      "/images/Fish/SeaWater Fish/Blue Tang.jpg"
    ],
    "description": "A prime, hand-selected specimen of Pacific Blue Tang (প্যাসিফিক ব্লু ট্যাং) with 2 verified showcase photos in our SeaWater Fish collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Marine Saltwater (Specific Gravity 1.022 - 1.026, pH 8.1 - 8.4)",
    "temperature": "24°C - 26.5°C",
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
    "name": "Nemo Ocellaris Clownfish (নিমো ক্লাউনফিশ)",
    "scientificName": "Nemo Ocellaris Clownfish Specimen",
    "bengaliName": "সি ওয়াটার ফিশ • Nemo Ocellaris Clownfish (নিমো ক্লাউনফিশ)",
    "categoryId": "marine",
    "categoryName": "SeaWater Fish",
    "image": "/images/Fish/SeaWater Fish/Nemo FIsh-2.jpg",
    "images": [
      "/images/Fish/SeaWater Fish/Nemo FIsh-2.jpg",
      "/images/Fish/SeaWater Fish/Nemo FIsh-3.jpg",
      "/images/Fish/SeaWater Fish/Nemo FIsh.jpg"
    ],
    "description": "A prime, hand-selected specimen of Nemo Ocellaris Clownfish (নিমো ক্লাউনফিশ) with 3 verified showcase photos in our SeaWater Fish collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Easy",
    "lightOrWater": "Marine Saltwater (Specific Gravity 1.022 - 1.026, pH 8.1 - 8.4)",
    "temperature": "24°C - 26.5°C",
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
    "id": "marine-3",
    "name": "Yellow Tang Surgeonfish (ইয়েলো ট্যাং)",
    "scientificName": "Yellow Tang Surgeonfish Specimen",
    "bengaliName": "সি ওয়াটার ফিশ • Yellow Tang Surgeonfish (ইয়েলো ট্যাং)",
    "categoryId": "marine",
    "categoryName": "SeaWater Fish",
    "image": "/images/Fish/SeaWater Fish/Yellow Tang.jpg",
    "images": [
      "/images/Fish/SeaWater Fish/Yellow Tang.jpg"
    ],
    "description": "A prime, hand-selected specimen of Yellow Tang Surgeonfish (ইয়েলো ট্যাং) with 1 verified showcase photos in our SeaWater Fish collection. Nurtured in ideal conditions with certified vitality.",
    "type": "fish",
    "careLevel": "Moderate",
    "lightOrWater": "Marine Saltwater (Specific Gravity 1.022 - 1.026, pH 8.1 - 8.4)",
    "temperature": "24°C - 26.5°C",
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

/**
 * Returns authentic regional / colloquial name in Bangladesh (বাংলাদেশে প্রচলিত আঞ্চলিক নাম)
 */
export function getSpecimenRegionalName(item: TCategoryItem): string {
  if (item.regionalName && item.regionalName.trim()) {
    return item.regionalName;
  }

  const nameLower = item.name.toLowerCase();
  const descLower = item.description.toLowerCase();

  // Plant regional names in BD
  if (item.type === "plant") {
    if (nameLower.includes("water lily") || nameLower.includes("lily") || descLower.includes("water lily")) {
      return "শালুক / নীল পদ্ম / লাল শাপলা (জলজ ফুল)";
    }
    if (nameLower.includes("monstera") || descLower.includes("monstera")) {
      return "কাটা পাতা গাছ / সুইস চিজ প্ল্যান্ট";
    }
    if (nameLower.includes("aglaonema") || descLower.includes("aglaonema")) {
      return "চীনা চিরসবুজ / রঙিন পাতা বাহার";
    }
    if (nameLower.includes("sansevieria") || nameLower.includes("snake") || descLower.includes("snake plant")) {
      return "সাপের ফণা গাছ / স্নেক প্ল্যান্ট (বায়ু পরিশোধক)";
    }
    if (nameLower.includes("money plant") || nameLower.includes("pothos") || descLower.includes("money plant")) {
      return "মানিপ্ল্যান্ট / গোল্ডেন পোথোস লতা";
    }
    if (nameLower.includes("bonsai") || nameLower.includes("ficus") || descLower.includes("ficus")) {
      return "বট / পাকুড় / ডুমুর বনসাই বৃক্ষ";
    }
    if (nameLower.includes("rose") || descLower.includes("rose")) {
      return "দেশি ও বিদেশি হাইব্রিড গোলাপ";
    }
    if (nameLower.includes("jasmine") || nameLower.includes("beli") || descLower.includes("jasmine")) {
      return "বেলি ফুল / সুবাসিত জুঁই";
    }
    if (nameLower.includes("hibiscus") || nameLower.includes("jaba") || descLower.includes("hibiscus")) {
      return "রক্তজবা / পঞ্চমুখী ঝুমকো জবা";
    }
    if (nameLower.includes("bougainvillea") || descLower.includes("bougainvillea")) {
      return "বাগানবিলাস / রঙিন কাগজ ফুল";
    }
    if (nameLower.includes("jade") || descLower.includes("jade")) {
      return "লাকি জেদ ট্রি / ক্র্যাসুলা";
    }
    if (nameLower.includes("aloe") || descLower.includes("aloe")) {
      return "ঘৃতকুমারী / অ্যালোভেরা ভেষজ";
    }
    if (nameLower.includes("palm") || descLower.includes("areca")) {
      return "সুপারি পাম / এরিকা পাম গাছ";
    }
    if (nameLower.includes("fern") || descLower.includes("fern")) {
      return "ঢেঁকিশাক জাতীয় শোভাময় ফার্ন";
    }
    if (item.categoryId === "bonsai") {
      return "ক্ষুদ্রাকৃতি শিল্পিত জীবন্ত বনসাই";
    }
    if (item.categoryId === "flowers") {
      return "বাংলা ও গ্রীষ্মমণ্ডলীয় শোভাময় ফুল";
    }
    return "ইনডোর ও বারান্দার শোভাময় পাতা বাহার";
  }

  // Fish regional / trade names in BD
  if (item.type === "fish") {
    if (nameLower.includes("fighter") || nameLower.includes("betta") || descLower.includes("betta")) {
      return "সিয়ামিজ ফাইটার ফিশ / লড়াকু মাছ";
    }
    if (nameLower.includes("guppy") || descLower.includes("guppy")) {
      return "রংধনু মাছ / পিওরলাইন গাপ্পি";
    }
    if (nameLower.includes("clownfish") || nameLower.includes("nemo") || descLower.includes("clownfish")) {
      return "অ্যানিমোন ফিশ / ক্লাউনফিশ (নিমো মাছ)";
    }
    if (nameLower.includes("tang") || descLower.includes("tang")) {
      return "সার্জন ফিশ / সামুদ্রিক ইয়েলো ট্যাং";
    }
    if (item.categoryId === "marine") {
      return "সামুদ্রিক লবণাক্ত পানির প্রবাল মাছ";
    }
    return "অ্যাকুয়ারিয়ামের শোভাময় রঙিন মাছ";
  }

  return "বাংলাদেশে সংগৃহীত প্রাকৃতিক প্রজাতি";
}

/**
 * Returns blooming season for plants or breeding cycle for fishes (ফুল ফোটার সময় / প্রজননকাল)
 */
export function getSpecimenBloomingSeason(item: TCategoryItem): string {
  if (item.bloomingSeason && item.bloomingSeason.trim()) {
    return item.bloomingSeason;
  }

  const nameLower = item.name.toLowerCase();

  if (item.type === "plant") {
    if (item.categoryId === "flowers") {
      if (nameLower.includes("water lily") || nameLower.includes("lotus")) {
        return "বর্ষা ও শরৎকাল (জুন থেকে অক্টোবর)";
      }
      if (nameLower.includes("rose")) {
        return "শীত ও বসন্তকাল (নভেম্বর থেকে মার্চ)";
      }
      if (nameLower.includes("jasmine") || nameLower.includes("beli")) {
        return "গ্রীষ্ম ও বর্ষাকাল (এপ্রিল থেকে আগস্ট)";
      }
      return "বসন্ত ও গ্রীষ্মকাল (মার্চ থেকে সেপ্টেম্বর)";
    }

    if (item.categoryId === "bonsai") {
      return "বসন্তকালে নতুন কচি পাতা গজায় (সারা বছর চিরসবুজ রূপ)";
    }

    return "সারা বছর চিরসবুজ পত্রপল্লব (ইনডোর পাতা বাহার)";
  }

  // Fish breeding cycle
  if (item.type === "fish") {
    if (item.categoryId === "guppy") {
      return "সারা বছর সক্রিয় (প্রতি ২৮-৩৫ দিনে সরাসরি পোনা প্রসব)";
    }
    if (item.categoryId === "fighter") {
      return "গ্রীষ্ম ও বর্ষাকাল (পানির উপর বাবল নেস্ট বা ফেনার বাসা তৈরি করে ডিম দেয়)";
    }
    return "অনুকূল লবণাক্ততা ও রিফ পরিবেশে নির্দিষ্ট ঋতুতে";
  }

  return "গ্রীষ্মমণ্ডলীয় আবহাওয়া অনুযায়ী উপযুক্ত মৌসুমে";
}

/**
 * Returns sunlight & atmosphere needs (সূর্যালোক ও আবহাওয়া)
 */
export function getSpecimenSunlight(item: TCategoryItem): string {
  if (item.sunlightOrShade && item.sunlightOrShade.trim()) {
    return item.sunlightOrShade;
  }

  if (item.type === "plant") {
    if (item.categoryId === "flowers") {
      return "সরাসরি তীব্র সূর্যালোক (দৈনিক ৫-৬ ঘণ্টা উজ্জ্বল রোদ)";
    }
    if (item.categoryId === "bonsai") {
      return "সকালের মিষ্টি রোদ (৩-৪ ঘণ্টা) ও মুক্ত বাতাসযুক্ত স্থান";
    }
    if (item.categoryId === "indoor") {
      return "উজ্জ্বল পরোক্ষ আলো বা সেমি-শেড (সরাসরি কড়া রোদ এড়িয়ে চলুন)";
    }
  }

  if (item.type === "fish") {
    if (item.categoryId === "fighter") {
      return "মৃদু ছায়াযুক্ত আলো, শান্ত স্থির পানি (২৪°-২৮°C উষ্ণতা)";
    }
    if (item.categoryId === "guppy") {
      return "পরিমিত অ্যাকুয়ারিয়াম ডে-লাইট (৮-১০ ঘণ্টা) ও পরিষ্কার ফিল্টারড পানি";
    }
    if (item.categoryId === "marine") {
      return "হাই-স্পেকট্রাম কোরাল রিফ ব্লু-হোয়াইট LED লাইট ও লবণাক্ত পানি";
    }
  }

  return item.lightOrWater || "পরিমিত আলো ও অনুকূল প্রাকৃতিক পরিবেশ";
}

