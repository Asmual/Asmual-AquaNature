// Auto-generated comprehensive category and species catalog with multi-image support
export interface TCategoryItem {
  id: string;
  name: string;
  scientificName?: string;
  bengaliName?: string;
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
    "name": "Aglaonema (Chinese Evergreen)",
    "scientificName": "Aglaonema (Chinese Evergreen) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Aglaonema (Chinese Evergreen)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Aglonema-2.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Aglonema-2.jpg",
      "/images/Plants/Indoor Plants/Aglonema.jpg"
    ],
    "description": "A prime, hand-selected specimen of Aglaonema (Chinese Evergreen) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Aloe Vera",
    "scientificName": "Aloe Vera Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Aloe Vera",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Aloe Vera.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Aloe Vera.jpg"
    ],
    "description": "A prime, hand-selected specimen of Aloe Vera with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Anthurium",
    "scientificName": "Anthurium Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Anthurium",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Anthurium.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Anthurium.jpg"
    ],
    "description": "A prime, hand-selected specimen of Anthurium with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Bunny Ears Cactus",
    "scientificName": "Bunny Ears Cactus Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Bunny Ears Cactus",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Bunny ears cactus.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Bunny ears cactus.jpg"
    ],
    "description": "A prime, hand-selected specimen of Bunny Ears Cactus with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Buterfly",
    "scientificName": "Buterfly Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Buterfly",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Buterfly.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Buterfly.jpg"
    ],
    "description": "A prime, hand-selected specimen of Buterfly with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Calathea (Peacock Plant)",
    "scientificName": "Calathea (Peacock Plant) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Calathea (Peacock Plant)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Calathea-1.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Calathea-1.jpg",
      "/images/Plants/Indoor Plants/Calathea2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Calathea (Peacock Plant) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Coin Plant (Pilea Peperomioides)",
    "scientificName": "Coin Plant (Pilea Peperomioides) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Coin Plant (Pilea Peperomioides)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Coin Plants- (1).jpg",
    "images": [
      "/images/Plants/Indoor Plants/Coin Plants- (1).jpg",
      "/images/Plants/Indoor Plants/Coin Plants- (2).jpg",
      "/images/Plants/Indoor Plants/Coin Plants- (3).jpg",
      "/images/Plants/Indoor Plants/Coin Plants- (4).jpg"
    ],
    "description": "A prime, hand-selected specimen of Coin Plant (Pilea Peperomioides) with 4 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Croton Golden Dust Plant",
    "scientificName": "Croton Golden Dust Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Croton Golden Dust Plant",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Croton Golden Dust Plant.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Croton Golden Dust Plant.jpg"
    ],
    "description": "A prime, hand-selected specimen of Croton Golden Dust Plant with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Coleus (Painted Nettle)",
    "scientificName": "Coleus (Painted Nettle) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Coleus (Painted Nettle)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Culius.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Culius.jpg",
      "/images/Plants/Indoor Plants/Culius2.jpg",
      "/images/Plants/Indoor Plants/Culius3.jpg"
    ],
    "description": "A prime, hand-selected specimen of Coleus (Painted Nettle) with 3 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Devil's Backbone (Euphorbia)",
    "scientificName": "Devil's Backbone (Euphorbia) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Devil's Backbone (Euphorbia)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Devil's Backbone-1.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Devil's Backbone-1.jpg",
      "/images/Plants/Indoor Plants/Devil's Backbone.jpg"
    ],
    "description": "A prime, hand-selected specimen of Devil's Backbone (Euphorbia) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Dumb Cane (Dieffenbachia)",
    "scientificName": "Dumb Cane (Dieffenbachia) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Dumb Cane (Dieffenbachia)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Dump cane-1.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Dump cane-1.jpg",
      "/images/Plants/Indoor Plants/Dump cane-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Dumb Cane (Dieffenbachia) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "E6b100c7ae1b52080379a42bcf3cbfe",
    "scientificName": "E6b100c7ae1b52080379a42bcf3cbfe Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • E6b100c7ae1b52080379a42bcf3cbfe",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/e6b100c7ae1b52080379a42bcf3cbfe8.jpg",
    "images": [
      "/images/Plants/Indoor Plants/e6b100c7ae1b52080379a42bcf3cbfe8.jpg"
    ],
    "description": "A prime, hand-selected specimen of E6b100c7ae1b52080379a42bcf3cbfe with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Jade Plant",
    "scientificName": "Jade Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Jade Plant",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Jade Plant.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Jade Plant.jpg"
    ],
    "description": "A prime, hand-selected specimen of Jade Plant with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Lucky Bamboo (Dracaena Sanderiana)",
    "scientificName": "Lucky Bamboo (Dracaena Sanderiana) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Lucky Bamboo (Dracaena Sanderiana)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Lucky Bambo.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Lucky Bambo.jpg",
      "/images/Plants/Indoor Plants/Lucky Bamboo plant Golden.jpg",
      "/images/Plants/Indoor Plants/Lucky Bamboo plant green.jpg",
      "/images/Plants/Indoor Plants/Lucky bambos.jpg"
    ],
    "description": "A prime, hand-selected specimen of Lucky Bamboo (Dracaena Sanderiana) with 4 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Money Plant (Golden Pothos)",
    "scientificName": "Money Plant (Golden Pothos) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Money Plant (Golden Pothos)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Money Plant-1.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Money Plant-1.jpg",
      "/images/Plants/Indoor Plants/Money Plant-2.jpg",
      "/images/Plants/Indoor Plants/Money Plants-2.jpg",
      "/images/Plants/Indoor Plants/Money Plants.jpg"
    ],
    "description": "A prime, hand-selected specimen of Money Plant (Golden Pothos) with 4 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Monstera",
    "scientificName": "Monstera Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Monstera",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Monstera.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Monstera.jpg"
    ],
    "description": "A prime, hand-selected specimen of Monstera with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Peace Lily",
    "scientificName": "Peace Lily Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Peace Lily",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Peace Lily.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Peace Lily.jpg"
    ],
    "description": "A prime, hand-selected specimen of Peace Lily with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Pencil Cactus Plant",
    "scientificName": "Pencil Cactus Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Pencil Cactus Plant",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Pencil cactus plant.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Pencil cactus plant.jpg"
    ],
    "description": "A prime, hand-selected specimen of Pencil Cactus Plant with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Philodendron",
    "scientificName": "Philodendron Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Philodendron",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Philodendron.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Philodendron.jpg"
    ],
    "description": "A prime, hand-selected specimen of Philodendron with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Purple Heart",
    "scientificName": "Purple Heart Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Purple Heart",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Purple Heart.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Purple Heart.jpg"
    ],
    "description": "A prime, hand-selected specimen of Purple Heart with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Reo Plant",
    "scientificName": "Reo Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Reo Plant",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Reo Plant.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Reo Plant.jpg"
    ],
    "description": "A prime, hand-selected specimen of Reo Plant with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Rubber Plannt",
    "scientificName": "Rubber Plannt Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Rubber Plannt",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Rubber Plannt.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Rubber Plannt.jpg"
    ],
    "description": "A prime, hand-selected specimen of Rubber Plannt with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Syngonium (Arrowhead Plant)",
    "scientificName": "Syngonium (Arrowhead Plant) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Syngonium (Arrowhead Plant)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Singinium.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Singinium.jpg",
      "/images/Plants/Indoor Plants/Singunium-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Syngonium (Arrowhead Plant) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Snake Plant (Sansevieria)",
    "scientificName": "Snake Plant (Sansevieria) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Snake Plant (Sansevieria)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Snak plant-Mini.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Snak plant-Mini.jpg",
      "/images/Plants/Indoor Plants/Snak plant.jpg"
    ],
    "description": "A prime, hand-selected specimen of Snake Plant (Sansevieria) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Succulent Plant",
    "scientificName": "Succulent Plant Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Succulent Plant",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Succulent plant1.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Succulent plant1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Succulent Plant with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "U",
    "scientificName": "U Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • U",
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
    "description": "A prime, hand-selected specimen of U with 5 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "id": "indoor-27",
    "name": "Zebrina",
    "scientificName": "Zebrina Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • Zebrina",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/Zebrina.jpg",
    "images": [
      "/images/Plants/Indoor Plants/Zebrina.jpg"
    ],
    "description": "A prime, hand-selected specimen of Zebrina with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "ZZ Plant (Zamioculcas Zamiifolia)",
    "scientificName": "ZZ Plant (Zamioculcas Zamiifolia) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • ZZ Plant (Zamioculcas Zamiifolia)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/ZZ Plant.jpg",
    "images": [
      "/images/Plants/Indoor Plants/ZZ Plant.jpg",
      "/images/Plants/Indoor Plants/ZZ.jpg"
    ],
    "description": "A prime, hand-selected specimen of ZZ Plant (Zamioculcas Zamiifolia) with 2 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "ক্যালডিয়াম (Caladium)",
    "scientificName": "ক্যালডিয়াম (Caladium) Specimen",
    "bengaliName": "ইনডোর প্ল্যান্টস • ক্যালডিয়াম (Caladium)",
    "categoryId": "indoor",
    "categoryName": "Indoor Plants",
    "image": "/images/Plants/Indoor Plants/ক্যালডিয়াম (Caladium).jpg",
    "images": [
      "/images/Plants/Indoor Plants/ক্যালডিয়াম (Caladium).jpg"
    ],
    "description": "A prime, hand-selected specimen of ক্যালডিয়াম (Caladium) with 1 verified showcase photos in our Indoor Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Amm",
    "scientificName": "Amm Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Amm",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Amm-2.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Amm-2.jpg",
      "/images/Plants/Bonsai Plant/Amm.jpg"
    ],
    "description": "A prime, hand-selected specimen of Amm with 2 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "B",
    "scientificName": "B Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • B",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/B.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/B.jpg"
    ],
    "description": "A prime, hand-selected specimen of B with 1 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "id": "bonsai-3",
    "name": "Bagan Bilash",
    "scientificName": "Bagan Bilash Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Bagan Bilash",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Bagan Bilash.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Bagan Bilash.jpg"
    ],
    "description": "A prime, hand-selected specimen of Bagan Bilash with 1 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "China Bot",
    "scientificName": "China Bot Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • China Bot",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/China bot-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/China bot-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of China Bot with 1 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Crishnachura",
    "scientificName": "Crishnachura Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Crishnachura",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Crishnachura.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Crishnachura.jpg"
    ],
    "description": "A prime, hand-selected specimen of Crishnachura with 1 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Deshi",
    "scientificName": "Deshi Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Deshi",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Deshi-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Deshi-1.jpg",
      "/images/Plants/Bonsai Plant/Deshi-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Deshi with 2 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Ficus Benjamina Bonsai",
    "scientificName": "Ficus Benjamina Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Ficus Benjamina Bonsai",
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
    "description": "A prime, hand-selected specimen of Ficus Benjamina Bonsai with 6 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Ficus Religiosa (Peepal) Bonsai",
    "scientificName": "Ficus Religiosa (Peepal) Bonsai Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Ficus Religiosa (Peepal) Bonsai",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Ficus religiosa -অশ্বত্থ গাছ-0.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Ficus religiosa -অশ্বত্থ গাছ-0.jpg",
      "/images/Plants/Bonsai Plant/Ficus religiosa-অশ্বত্থ গাছ-1.jpg",
      "/images/Plants/Bonsai Plant/Ficus religiosa-অশ্বত্থ গাছ-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Ficus Religiosa (Peepal) Bonsai with 3 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Jade",
    "scientificName": "Jade Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Jade",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Jade-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Jade-1.jpg",
      "/images/Plants/Bonsai Plant/Jade-2.jpg",
      "/images/Plants/Bonsai Plant/Jade-3.jpg"
    ],
    "description": "A prime, hand-selected specimen of Jade with 3 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Joba",
    "scientificName": "Joba Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Joba",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Joba-3.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Joba-3.jpg",
      "/images/Plants/Bonsai Plant/Joba.jpg"
    ],
    "description": "A prime, hand-selected specimen of Joba with 2 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Kamranga",
    "scientificName": "Kamranga Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Kamranga",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Kamranga-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Kamranga-1.jpg",
      "/images/Plants/Bonsai Plant/Kamranga-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Kamranga with 2 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Krinasura",
    "scientificName": "Krinasura Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Krinasura",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Krinasura-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Krinasura-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Krinasura with 1 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Lojja Boti",
    "scientificName": "Lojja Boti Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Lojja Boti",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Lojja boti-2.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Lojja boti-2.jpg",
      "/images/Plants/Bonsai Plant/Lojja Boti.jpg"
    ],
    "description": "A prime, hand-selected specimen of Lojja Boti with 2 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Pakur",
    "scientificName": "Pakur Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Pakur",
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
    "description": "A prime, hand-selected specimen of Pakur with 5 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Rongon",
    "scientificName": "Rongon Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Rongon",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Rongon-1.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Rongon-1.jpg",
      "/images/Plants/Bonsai Plant/Rongon-2.jpg",
      "/images/Plants/Bonsai Plant/Rongon-4.jpg"
    ],
    "description": "A prime, hand-selected specimen of Rongon with 3 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Tetul Ta",
    "scientificName": "Tetul Ta Specimen",
    "bengaliName": "বনসাই প্ল্যান্টস • Tetul Ta",
    "categoryId": "bonsai",
    "categoryName": "Living Bonsai Art",
    "image": "/images/Plants/Bonsai Plant/Tetul-ta.jpg",
    "images": [
      "/images/Plants/Bonsai Plant/Tetul-ta.jpg"
    ],
    "description": "A prime, hand-selected specimen of Tetul Ta with 1 verified showcase photos in our Living Bonsai Art collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Allamanda (Golden Trumpet)",
    "scientificName": "Allamanda (Golden Trumpet) Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Allamanda (Golden Trumpet)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Alamanda-2.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Alamanda-2.jpg",
      "/images/Plants/Flowers Plant/Alamanda-3.jpg",
      "/images/Plants/Flowers Plant/Alamanda.jpg",
      "/images/Plants/Flowers Plant/Almanda.jpg"
    ],
    "description": "A prime, hand-selected specimen of Allamanda (Golden Trumpet) with 4 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Bagan Bilash",
    "scientificName": "Bagan Bilash Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Bagan Bilash",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Bagan-Bilash.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Bagan-Bilash.jpg"
    ],
    "description": "A prime, hand-selected specimen of Bagan Bilash with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Beli (Arabian Jasmine)",
    "scientificName": "Beli (Arabian Jasmine) Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Beli (Arabian Jasmine)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Bely-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Bely-1.jpg",
      "/images/Plants/Flowers Plant/Bely-2.jpg",
      "/images/Plants/Flowers Plant/Bely.jpg"
    ],
    "description": "A prime, hand-selected specimen of Beli (Arabian Jasmine) with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Camelia",
    "scientificName": "Camelia Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Camelia",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Camelia.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Camelia.jpg"
    ],
    "description": "A prime, hand-selected specimen of Camelia with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Chameli",
    "scientificName": "Chameli Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Chameli",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Chameli-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Chameli-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Chameli with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Champa চাঁপা",
    "scientificName": "Champa চাঁপা Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Champa চাঁপা",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Champa- চাঁপা .jpg",
    "images": [
      "/images/Plants/Flowers Plant/Champa- চাঁপা .jpg"
    ],
    "description": "A prime, hand-selected specimen of Champa চাঁপা with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "China Togor",
    "scientificName": "China Togor Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • China Togor",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/China-Togor-1.png",
    "images": [
      "/images/Plants/Flowers Plant/China-Togor-1.png"
    ],
    "description": "A prime, hand-selected specimen of China Togor with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Chondro Mollika চন্দ্রমল্লিকা",
    "scientificName": "Chondro Mollika চন্দ্রমল্লিকা Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Chondro Mollika চন্দ্রমল্লিকা",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Chondro-Mollika-চন্দ্রমল্লিকা.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Chondro-Mollika-চন্দ্রমল্লিকা.jpg"
    ],
    "description": "A prime, hand-selected specimen of Chondro Mollika চন্দ্রমল্লিকা with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Daisy",
    "scientificName": "Daisy Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Daisy",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Daisy.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Daisy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Daisy with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Dahlia Flower",
    "scientificName": "Dahlia Flower Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Dahlia Flower",
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
    "description": "A prime, hand-selected specimen of Dahlia Flower with 5 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Dulon Chapa",
    "scientificName": "Dulon Chapa Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Dulon Chapa",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Dulon Chapa-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Dulon Chapa-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Dulon Chapa with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Ficus Benjamina Bonsai",
    "scientificName": "Ficus Benjamina Bonsai Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Ficus Benjamina Bonsai",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Ficus benjamina-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Ficus benjamina-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Ficus Benjamina Bonsai with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Gondhoraj",
    "scientificName": "Gondhoraj Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Gondhoraj",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Gondhoraj-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Gondhoraj-1.jpg",
      "/images/Plants/Flowers Plant/Gondhoraj-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Gondhoraj with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "HasnaHena",
    "scientificName": "HasnaHena Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • HasnaHena",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/HasnaHena-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/HasnaHena-1.jpg",
      "/images/Plants/Flowers Plant/HasnaHena-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of HasnaHena with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Joba",
    "scientificName": "Joba Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Joba",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Joba-0.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Joba-0.jpg"
    ],
    "description": "A prime, hand-selected specimen of Joba with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Jui (জুঁই) Star Jasmine",
    "scientificName": "Jui (জুঁই) Star Jasmine Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Jui (জুঁই) Star Jasmine",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Jui (জুঁই)-Star Jasmine-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Jui (জুঁই)-Star Jasmine-1.jpg",
      "/images/Plants/Flowers Plant/Jui (জুঁই)-Star Jasmine.jpg"
    ],
    "description": "A prime, hand-selected specimen of Jui (জুঁই) Star Jasmine with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Kameni",
    "scientificName": "Kameni Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Kameni",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kameni-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kameni-1.jpg",
      "/images/Plants/Flowers Plant/Kameni-2.jpg",
      "/images/Plants/Flowers Plant/Kameni-3.jpg"
    ],
    "description": "A prime, hand-selected specimen of Kameni with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Kat Gulap",
    "scientificName": "Kat Gulap Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Kat Gulap",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kat-Gulap-0.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kat-Gulap-0.jpg",
      "/images/Plants/Flowers Plant/Kat-Gulap.jpg"
    ],
    "description": "A prime, hand-selected specimen of Kat Gulap with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Kata Mukut",
    "scientificName": "Kata Mukut Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Kata Mukut",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kata Mukut-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kata Mukut-1.jpg",
      "/images/Plants/Flowers Plant/Kata Mukut-2.jpg",
      "/images/Plants/Flowers Plant/Kata Mukut-3.jpg"
    ],
    "description": "A prime, hand-selected specimen of Kata Mukut with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Kochuri Pana",
    "scientificName": "Kochuri Pana Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Kochuri Pana",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kochuri pana.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kochuri pana.jpg"
    ],
    "description": "A prime, hand-selected specimen of Kochuri Pana with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Kodom",
    "scientificName": "Kodom Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Kodom",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kodom-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kodom-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Kodom with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Kolaboti",
    "scientificName": "Kolaboti Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Kolaboti",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kolaboti-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kolaboti-1.jpg",
      "/images/Plants/Flowers Plant/Kolaboti-2.jpg",
      "/images/Plants/Flowers Plant/Kolaboti-3.jpg"
    ],
    "description": "A prime, hand-selected specimen of Kolaboti with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Kolke Kobori",
    "scientificName": "Kolke Kobori Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Kolke Kobori",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Kolke Kobori-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Kolke Kobori-1.jpg",
      "/images/Plants/Flowers Plant/Kolke-Kobori.jpg"
    ],
    "description": "A prime, hand-selected specimen of Kolke Kobori with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Kosmos",
    "scientificName": "Kosmos Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Kosmos",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/kosmos.jpg",
    "images": [
      "/images/Plants/Flowers Plant/kosmos.jpg"
    ],
    "description": "A prime, hand-selected specimen of Kosmos with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Krishno Chura",
    "scientificName": "Krishno Chura Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Krishno Chura",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Krishno Chura-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Krishno Chura-1.jpg",
      "/images/Plants/Flowers Plant/Krishno Chura-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Krishno Chura with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "KunjoLota",
    "scientificName": "KunjoLota Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • KunjoLota",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/KunjoLota.jpg",
    "images": [
      "/images/Plants/Flowers Plant/KunjoLota.jpg"
    ],
    "description": "A prime, hand-selected specimen of KunjoLota with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Lanka Joba",
    "scientificName": "Lanka Joba Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Lanka Joba",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lanka Joba-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Lanka Joba-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Lanka Joba with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Lantana Camera",
    "scientificName": "Lantana Camera Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Lantana Camera",
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
    "description": "A prime, hand-selected specimen of Lantana Camera with 5 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Lily",
    "scientificName": "Lily Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Lily",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lily-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Lily-1.jpg",
      "/images/Plants/Flowers Plant/Lily-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Lily with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Lojjaboti",
    "scientificName": "Lojjaboti Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Lojjaboti",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lojjaboti-2.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Lojjaboti-2.jpg",
      "/images/Plants/Flowers Plant/LojjaBoti.jpg"
    ],
    "description": "A prime, hand-selected specimen of Lojjaboti with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Lotus পদ্ম (Podmo)",
    "scientificName": "Lotus পদ্ম (Podmo) Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Lotus পদ্ম (Podmo)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Lotus-পদ্ম (Podmo).jpg",
    "images": [
      "/images/Plants/Flowers Plant/Lotus-পদ্ম (Podmo).jpg"
    ],
    "description": "A prime, hand-selected specimen of Lotus পদ্ম (Podmo) with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Madhubi Lota",
    "scientificName": "Madhubi Lota Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Madhubi Lota",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Madhubi-Lota.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Madhubi-Lota.jpg"
    ],
    "description": "A prime, hand-selected specimen of Madhubi Lota with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Marigold (Genda Flower)",
    "scientificName": "Marigold (Genda Flower) Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Marigold (Genda Flower)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/MariGold-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/MariGold-1.jpg",
      "/images/Plants/Flowers Plant/MariGold-2.jpg",
      "/images/Plants/Flowers Plant/MariGold.jpg"
    ],
    "description": "A prime, hand-selected specimen of Marigold (Genda Flower) with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Noyon Tara",
    "scientificName": "Noyon Tara Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Noyon Tara",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Noyon Tara-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Noyon Tara-1.jpg",
      "/images/Plants/Flowers Plant/Noyon Tara.jpg"
    ],
    "description": "A prime, hand-selected specimen of Noyon Tara with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Oprajita",
    "scientificName": "Oprajita Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Oprajita",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Oprajita-0.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Oprajita-0.jpg",
      "/images/Plants/Flowers Plant/Oprajita-1.jpg",
      "/images/Plants/Flowers Plant/Oprajita-2.jpg",
      "/images/Plants/Flowers Plant/Oprajita.jpg"
    ],
    "description": "A prime, hand-selected specimen of Oprajita with 4 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Palash Tree",
    "scientificName": "Palash Tree Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Palash Tree",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Palash_Tree.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Palash_Tree.jpg"
    ],
    "description": "A prime, hand-selected specimen of Palash Tree with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Petunia Plant",
    "scientificName": "Petunia Plant Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Petunia Plant",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/petunia plant.jpg",
    "images": [
      "/images/Plants/Flowers Plant/petunia plant.jpg"
    ],
    "description": "A prime, hand-selected specimen of Petunia Plant with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Polash",
    "scientificName": "Polash Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Polash",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Polash-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Polash-1.jpg",
      "/images/Plants/Flowers Plant/Polash.jpg"
    ],
    "description": "A prime, hand-selected specimen of Polash with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Ponika পানিকা ফুল",
    "scientificName": "Ponika পানিকা ফুল Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Ponika পানিকা ফুল",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Ponika-পানিকা ফুল.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Ponika-পানিকা ফুল.jpg"
    ],
    "description": "A prime, hand-selected specimen of Ponika পানিকা ফুল with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Poppy",
    "scientificName": "Poppy Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Poppy",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Poppy-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Poppy-1.jpg",
      "/images/Plants/Flowers Plant/Poppy-2.jpg",
      "/images/Plants/Flowers Plant/Poppy-3.jpg"
    ],
    "description": "A prime, hand-selected specimen of Poppy with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Portulica",
    "scientificName": "Portulica Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Portulica",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Portulica-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Portulica-1.jpg",
      "/images/Plants/Flowers Plant/Portulica-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Portulica with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Rain Lily",
    "scientificName": "Rain Lily Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Rain Lily",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rain-lily-2.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Rain-lily-2.jpg",
      "/images/Plants/Flowers Plant/Rain-lily.jpg"
    ],
    "description": "A prime, hand-selected specimen of Rain Lily with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Rongon",
    "scientificName": "Rongon Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Rongon",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rongon-2.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Rongon-2.jpg",
      "/images/Plants/Flowers Plant/Rongon-3.jpg",
      "/images/Plants/Flowers Plant/Rongon-4.jpg",
      "/images/Plants/Flowers Plant/Rongon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Rongon with 4 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Rose",
    "scientificName": "Rose Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Rose",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Rose-0.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Rose-0.jpg",
      "/images/Plants/Flowers Plant/Rose-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of Rose with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Shiuly",
    "scientificName": "Shiuly Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Shiuly",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Shiuly.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Shiuly.jpg"
    ],
    "description": "A prime, hand-selected specimen of Shiuly with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "id": "flowers-46",
    "name": "Shonda Maloti",
    "scientificName": "Shonda Maloti Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Shonda Maloti",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/shonda maloti.jpg",
    "images": [
      "/images/Plants/Flowers Plant/shonda maloti.jpg"
    ],
    "description": "A prime, hand-selected specimen of Shonda Maloti with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Confederate Rose (Sthol Poddo)",
    "scientificName": "Confederate Rose (Sthol Poddo) Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Confederate Rose (Sthol Poddo)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/STOL PODDO-CONFEDERATE ROSE.jpg",
    "images": [
      "/images/Plants/Flowers Plant/STOL PODDO-CONFEDERATE ROSE.jpg",
      "/images/Plants/Flowers Plant/Stol Poddo.jpg"
    ],
    "description": "A prime, hand-selected specimen of Confederate Rose (Sthol Poddo) with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "id": "flowers-48",
    "name": "Sunflower",
    "scientificName": "Sunflower Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Sunflower",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Sunflower.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Sunflower.jpg"
    ],
    "description": "A prime, hand-selected specimen of Sunflower with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Tuberose (Rajnigandha)",
    "scientificName": "Tuberose (Rajnigandha) Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Tuberose (Rajnigandha)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Tube Rose-রাজনীগন্ধা-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Tube Rose-রাজনীগন্ধা-1.jpg",
      "/images/Plants/Flowers Plant/Tube Rose-রাজনীগন্ধা-2.jpg",
      "/images/Plants/Flowers Plant/Tube Rose-রাজনীগন্ধা.jpg"
    ],
    "description": "A prime, hand-selected specimen of Tuberose (Rajnigandha) with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Tulip",
    "scientificName": "Tulip Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Tulip",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Tulip-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Tulip-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Tulip with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "UNKnown",
    "scientificName": "UNKnown Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • UNKnown",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/UNKnown-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/UNKnown-1.jpg",
      "/images/Plants/Flowers Plant/UNKnown-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of UNKnown with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Exotic Water Lily (Shapla)",
    "scientificName": "Exotic Water Lily (Shapla) Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Exotic Water Lily (Shapla)",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Water Lily-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Water Lily-1.jpg",
      "/images/Plants/Flowers Plant/Water Lily-2.jpg",
      "/images/Plants/Flowers Plant/Water Lily.jpg"
    ],
    "description": "A prime, hand-selected specimen of Exotic Water Lily (Shapla) with 3 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Zinnia",
    "scientificName": "Zinnia Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • Zinnia",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/Zinnia -2.jpg",
    "images": [
      "/images/Plants/Flowers Plant/Zinnia -2.jpg",
      "/images/Plants/Flowers Plant/Zinnia-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Zinnia with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "চন্দ্রপ্রভা সোনাপাতি ফুল",
    "scientificName": "চন্দ্রপ্রভা সোনাপাতি ফুল Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • চন্দ্রপ্রভা সোনাপাতি ফুল",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/চন্দ্রপ্রভা-সোনাপাতি ফুল-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/চন্দ্রপ্রভা-সোনাপাতি ফুল-1.jpg",
      "/images/Plants/Flowers Plant/চন্দ্রপ্রভা-সোনাপাতি ফুল-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of চন্দ্রপ্রভা সোনাপাতি ফুল with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "চন্দ্রমল্লিকা",
    "scientificName": "চন্দ্রমল্লিকা Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • চন্দ্রমল্লিকা",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/চন্দ্রমল্লিকা -1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/চন্দ্রমল্লিকা -1.jpg"
    ],
    "description": "A prime, hand-selected specimen of চন্দ্রমল্লিকা with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "জারবেরা (Gerbera) African Daisy",
    "scientificName": "জারবেরা (Gerbera) African Daisy Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • জারবেরা (Gerbera) African Daisy",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/জারবেরা (Gerbera) African Daisy.jpg",
    "images": [
      "/images/Plants/Flowers Plant/জারবেরা (Gerbera) African Daisy.jpg"
    ],
    "description": "A prime, hand-selected specimen of জারবেরা (Gerbera) African Daisy with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "নীল ঘন্টা Bush Clock Vine",
    "scientificName": "নীল ঘন্টা Bush Clock Vine Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • নীল ঘন্টা Bush Clock Vine",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/নীল ঘন্টা  Bush Clock Vine .jpg",
    "images": [
      "/images/Plants/Flowers Plant/নীল ঘন্টা  Bush Clock Vine .jpg"
    ],
    "description": "A prime, hand-selected specimen of নীল ঘন্টা Bush Clock Vine with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "পটপটি রুয়েলিয়া ফুল",
    "scientificName": "পটপটি রুয়েলিয়া ফুল Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • পটপটি রুয়েলিয়া ফুল",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/পটপটি -রুয়েলিয়া ফুল.jpg",
    "images": [
      "/images/Plants/Flowers Plant/পটপটি -রুয়েলিয়া ফুল.jpg"
    ],
    "description": "A prime, hand-selected specimen of পটপটি রুয়েলিয়া ফুল with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "বকুল ফুল Bakul Flower",
    "scientificName": "বকুল ফুল Bakul Flower Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • বকুল ফুল Bakul Flower",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/বকুল ফুল -Bakul Flower-1.jpg",
    "images": [
      "/images/Plants/Flowers Plant/বকুল ফুল -Bakul Flower-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of বকুল ফুল Bakul Flower with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "ভৃঙ্গরাজ Singapore Daisy Sphagneticola Calendulacea",
    "scientificName": "ভৃঙ্গরাজ Singapore Daisy Sphagneticola Calendulacea Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • ভৃঙ্গরাজ Singapore Daisy Sphagneticola Calendulacea",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/ভৃঙ্গরাজ-Singapore Daisy-Sphagneticola calendulacea.jpg",
    "images": [
      "/images/Plants/Flowers Plant/ভৃঙ্গরাজ-Singapore Daisy-Sphagneticola calendulacea.jpg"
    ],
    "description": "A prime, hand-selected specimen of ভৃঙ্গরাজ Singapore Daisy Sphagneticola Calendulacea with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "মোরগঝুঁটি ফুল",
    "scientificName": "মোরগঝুঁটি ফুল Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • মোরগঝুঁটি ফুল",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/মোরগঝুঁটি ফুল-2.jpg",
    "images": [
      "/images/Plants/Flowers Plant/মোরগঝুঁটি ফুল-2.jpg",
      "/images/Plants/Flowers Plant/মোরগঝুঁটি ফুল.jpg"
    ],
    "description": "A prime, hand-selected specimen of মোরগঝুঁটি ফুল with 2 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "সোনালু বাঁদর লাঠি",
    "scientificName": "সোনালু বাঁদর লাঠি Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • সোনালু বাঁদর লাঠি",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/সোনালু-বাঁদর লাঠি .jpg",
    "images": [
      "/images/Plants/Flowers Plant/সোনালু-বাঁদর লাঠি .jpg"
    ],
    "description": "A prime, hand-selected specimen of সোনালু বাঁদর লাঠি with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "সোনালু বাঁদর লাঠি 1",
    "scientificName": "সোনালু বাঁদর লাঠি 1 Specimen",
    "bengaliName": "ফ্লাওয়ার প্ল্যান্টস • সোনালু বাঁদর লাঠি 1",
    "categoryId": "flowers",
    "categoryName": "Flower Plants",
    "image": "/images/Plants/Flowers Plant/সোনালু-বাঁদর লাঠি-1 .jpg",
    "images": [
      "/images/Plants/Flowers Plant/সোনালু-বাঁদর লাঠি-1 .jpg"
    ],
    "description": "A prime, hand-selected specimen of সোনালু বাঁদর লাঠি 1 with 1 verified showcase photos in our Flower Plants collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "24K Full Gold Pureline Guppy",
    "scientificName": "24K Full Gold Pureline Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • 24K Full Gold Pureline Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/24k Gold.jpg",
    "images": [
      "/images/Fish/Guppy/24k Gold.jpg",
      "/images/Fish/Guppy/Full Gold Guppy-1.jpg",
      "/images/Fish/Guppy/FULL GOLD Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of 24K Full Gold Pureline Guppy with 3 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Albino Blue Topaz Guppy",
    "scientificName": "Albino Blue Topaz Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Albino Blue Topaz Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Blue Topaz Guppy-1.jpg",
    "images": [
      "/images/Fish/Guppy/Albino Blue Topaz Guppy-1.jpg",
      "/images/Fish/Guppy/Albino Blue Topaz Guppy-2.jpg",
      "/images/Fish/Guppy/Albino Blue Topaz Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Albino Blue Topaz Guppy with 3 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Albino Red Koi Guppy",
    "scientificName": "Albino Red Koi Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Albino Red Koi Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Red Koi Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Albino Red Koi Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Albino Red Koi Guppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Red Moscow Pureline Guppy",
    "scientificName": "Red Moscow Pureline Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Red Moscow Pureline Guppy",
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
    "description": "A prime, hand-selected specimen of Red Moscow Pureline Guppy with 5 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Albino Snakeskin Guppy",
    "scientificName": "Albino Snakeskin Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Albino Snakeskin Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino Snakeskin Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Albino Snakeskin Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Albino Snakeskin Guppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Albino Blue Ribbon Fin Female Guppy",
    "scientificName": "Albino Blue Ribbon Fin Female Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Albino Blue Ribbon Fin Female Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Albino-Blue-Ribbon-fin-Female-Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Albino-Blue-Ribbon-fin-Female-Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Albino Blue Ribbon Fin Female Guppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Black Metal Lace Guppy",
    "scientificName": "Black Metal Lace Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Black Metal Lace Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Black Metal Lace Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Black Metal Lace Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Black Metal Lace Guppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Black MetalGuppy",
    "scientificName": "Black MetalGuppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Black MetalGuppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Black MetalGuppy.jpg",
    "images": [
      "/images/Fish/Guppy/Black MetalGuppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Black MetalGuppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Black Moscow Pureline Guppy",
    "scientificName": "Black Moscow Pureline Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Black Moscow Pureline Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Black-Moscow Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Black-Moscow Guppy.jpg",
      "/images/Fish/Guppy/Black-Moscow-Guppy-1.jpg.png",
      "/images/Fish/Guppy/Black-Moscow-Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Black Moscow Pureline Guppy with 3 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Blue Dragon Ribbon",
    "scientificName": "Blue Dragon Ribbon Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Blue Dragon Ribbon",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Blue Dragon Ribbon.jpg",
    "images": [
      "/images/Fish/Guppy/Blue Dragon Ribbon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Blue Dragon Ribbon with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Blue Grass Guppy",
    "scientificName": "Blue Grass Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Blue Grass Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Blue Grass Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Blue Grass Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Blue Grass Guppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Blue Head Samurai Guppy",
    "scientificName": "Blue Head Samurai Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Blue Head Samurai Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/blue head samurai guppy.jpg",
    "images": [
      "/images/Fish/Guppy/blue head samurai guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Blue Head Samurai Guppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Blue Moscow Guppy",
    "scientificName": "Blue Moscow Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Blue Moscow Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Blue-Moscow-Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Blue-Moscow-Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Blue Moscow Guppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Dumbo Musaic",
    "scientificName": "Dumbo Musaic Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Dumbo Musaic",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Dumbo Musaic.jpg",
    "images": [
      "/images/Fish/Guppy/Dumbo Musaic.jpg"
    ],
    "description": "A prime, hand-selected specimen of Dumbo Musaic with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Gold Dust Moly",
    "scientificName": "Gold Dust Moly Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Gold Dust Moly",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Gold Dust Moly.jpg",
    "images": [
      "/images/Fish/Guppy/Gold Dust Moly.jpg"
    ],
    "description": "A prime, hand-selected specimen of Gold Dust Moly with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Gold Lace Snakeskin",
    "scientificName": "Gold Lace Snakeskin Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Gold Lace Snakeskin",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Gold Lace Snakeskin.jpg",
    "images": [
      "/images/Fish/Guppy/Gold Lace Snakeskin.jpg"
    ],
    "description": "A prime, hand-selected specimen of Gold Lace Snakeskin with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Green Dragon",
    "scientificName": "Green Dragon Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Green Dragon",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Green Dragon.jpg",
    "images": [
      "/images/Fish/Guppy/Green Dragon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Green Dragon with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Green Moscow Guppy",
    "scientificName": "Green Moscow Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Green Moscow Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Green-Moscow-Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Green-Moscow-Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Green Moscow Guppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "HB Red Rose",
    "scientificName": "HB Red Rose Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • HB Red Rose",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/HB Red Rose.jpg",
    "images": [
      "/images/Fish/Guppy/HB Red Rose.jpg"
    ],
    "description": "A prime, hand-selected specimen of HB Red Rose with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Koi Txido Guppy",
    "scientificName": "Koi Txido Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Koi Txido Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Koi Txido Guppy-1.jpg",
    "images": [
      "/images/Fish/Guppy/Koi Txido Guppy-1.jpg",
      "/images/Fish/Guppy/Koi Txido Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Koi Txido Guppy with 2 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Purple Mosaic Guppy",
    "scientificName": "Purple Mosaic Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Purple Mosaic Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Purple Mosaic Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Purple Mosaic Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Purple Mosaic Guppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Red Dragon",
    "scientificName": "Red Dragon Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Red Dragon",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Dragon.jpg",
    "images": [
      "/images/Fish/Guppy/Red Dragon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Red Dragon with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Red Gragon",
    "scientificName": "Red Gragon Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Red Gragon",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Gragon.jpg",
    "images": [
      "/images/Fish/Guppy/Red Gragon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Red Gragon with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Red Tail Platinum Dumbo Ear",
    "scientificName": "Red Tail Platinum Dumbo Ear Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Red Tail Platinum Dumbo Ear",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Red Tail Platinum Dumbo Ear.jpg.png",
    "images": [
      "/images/Fish/Guppy/Red Tail Platinum Dumbo Ear.jpg.png"
    ],
    "description": "A prime, hand-selected specimen of Red Tail Platinum Dumbo Ear with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Ribbon Guppy",
    "scientificName": "Ribbon Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Ribbon Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Ribbon Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Ribbon Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Ribbon Guppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "RTP Dumbo Ear",
    "scientificName": "RTP Dumbo Ear Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • RTP Dumbo Ear",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/RTP Dumbo Ear-1.jpg",
    "images": [
      "/images/Fish/Guppy/RTP Dumbo Ear-1.jpg",
      "/images/Fish/Guppy/RTP Dumbo Ear-2.jpg"
    ],
    "description": "A prime, hand-selected specimen of RTP Dumbo Ear with 2 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Santa Claus Guppy",
    "scientificName": "Santa Claus Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Santa Claus Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Santa claus guppy-1.jpg",
    "images": [
      "/images/Fish/Guppy/Santa claus guppy-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Santa Claus Guppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Shanta Cluse Guppy",
    "scientificName": "Shanta Cluse Guppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Shanta Cluse Guppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Shanta Cluse Guppy.jpg",
    "images": [
      "/images/Fish/Guppy/Shanta Cluse Guppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Shanta Cluse Guppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Snow White Gyuppy",
    "scientificName": "Snow White Gyuppy Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Snow White Gyuppy",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/Snow White Gyuppy.jpg",
    "images": [
      "/images/Fish/Guppy/Snow White Gyuppy.jpg"
    ],
    "description": "A prime, hand-selected specimen of Snow White Gyuppy with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Tuxedo Koi Guppies",
    "scientificName": "Tuxedo Koi Guppies Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Tuxedo Koi Guppies",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/tuxedo-koi-guppies.png",
    "images": [
      "/images/Fish/Guppy/tuxedo-koi-guppies.png"
    ],
    "description": "A prime, hand-selected specimen of Tuxedo Koi Guppies with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Un",
    "scientificName": "Un Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • Un",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/un-1.jpg",
    "images": [
      "/images/Fish/Guppy/un-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Un with 1 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "White Toxido",
    "scientificName": "White Toxido Specimen",
    "bengaliName": "পিয়োরলাইন গাপ্পি • White Toxido",
    "categoryId": "guppy",
    "categoryName": "Pureline Guppies",
    "image": "/images/Fish/Guppy/White Toxido-1.jpg",
    "images": [
      "/images/Fish/Guppy/White Toxido-1.jpg",
      "/images/Fish/Guppy/White Toxido-2.jpg",
      "/images/Fish/Guppy/White Toxido.jpg"
    ],
    "description": "A prime, hand-selected specimen of White Toxido with 3 verified showcase photos in our Pureline Guppies collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Alien Betta Fish",
    "scientificName": "Alien Betta Fish Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Alien Betta Fish",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Alien Betta Fish.jpg",
    "images": [
      "/images/Fish/Fighter/Alien Betta Fish.jpg"
    ],
    "description": "A prime, hand-selected specimen of Alien Betta Fish with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Betta Dumbo Lavender",
    "scientificName": "Betta Dumbo Lavender Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Betta Dumbo Lavender",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Betta Dumbo Lavender.jpg",
    "images": [
      "/images/Fish/Fighter/Betta Dumbo Lavender.jpg"
    ],
    "description": "A prime, hand-selected specimen of Betta Dumbo Lavender with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Betta Red Dragon",
    "scientificName": "Betta Red Dragon Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Betta Red Dragon",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Betta Red Dragon.jpg",
    "images": [
      "/images/Fish/Fighter/Betta Red Dragon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Betta Red Dragon with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Betta Red Snow Dragon",
    "scientificName": "Betta Red Snow Dragon Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Betta Red Snow Dragon",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Betta Red Snow Dragon.jpg",
    "images": [
      "/images/Fish/Fighter/Betta Red Snow Dragon.jpg"
    ],
    "description": "A prime, hand-selected specimen of Betta Red Snow Dragon with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Blue Rim Betta Fish",
    "scientificName": "Blue Rim Betta Fish Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Blue Rim Betta Fish",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Blue Rim Betta Fish.jpg",
    "images": [
      "/images/Fish/Fighter/Blue Rim Betta Fish.jpg"
    ],
    "description": "A prime, hand-selected specimen of Blue Rim Betta Fish with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Candy Betta Fish",
    "scientificName": "Candy Betta Fish Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Candy Betta Fish",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Candy Betta Fish.jpg",
    "images": [
      "/images/Fish/Fighter/Candy Betta Fish.jpg"
    ],
    "description": "A prime, hand-selected specimen of Candy Betta Fish with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
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
    "id": "fighter-7",
    "name": "Half Moon Betta Fish",
    "scientificName": "Half Moon Betta Fish Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Half Moon Betta Fish",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/half-moon betta fish.jpg",
    "images": [
      "/images/Fish/Fighter/half-moon betta fish.jpg"
    ],
    "description": "A prime, hand-selected specimen of Half Moon Betta Fish with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Koi Betta Fish",
    "scientificName": "Koi Betta Fish Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Koi Betta Fish",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Koi Betta fish.jpg",
    "images": [
      "/images/Fish/Fighter/Koi Betta fish.jpg"
    ],
    "description": "A prime, hand-selected specimen of Koi Betta Fish with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Red Koi Galaxy) Betta",
    "scientificName": "Red Koi Galaxy) Betta Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Red Koi Galaxy) Betta",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Red Koi Galaxy) Betta.jpg",
    "images": [
      "/images/Fish/Fighter/Red Koi Galaxy) Betta.jpg"
    ],
    "description": "A prime, hand-selected specimen of Red Koi Galaxy) Betta with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Rose Tail",
    "scientificName": "Rose Tail Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Rose Tail",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Rose tail.jpg",
    "images": [
      "/images/Fish/Fighter/Rose tail.jpg"
    ],
    "description": "A prime, hand-selected specimen of Rose Tail with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Unknown",
    "scientificName": "Unknown Specimen",
    "bengaliName": "ফাইটার / বেটা ফিশ • Unknown",
    "categoryId": "fighter",
    "categoryName": "Fighter / Betta",
    "image": "/images/Fish/Fighter/Unknown-1.jpg",
    "images": [
      "/images/Fish/Fighter/Unknown-1.jpg"
    ],
    "description": "A prime, hand-selected specimen of Unknown with 1 verified showcase photos in our Fighter / Betta collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Pacific Blue Tang (Regal Tang)",
    "scientificName": "Pacific Blue Tang (Regal Tang) Specimen",
    "bengaliName": "সি ওয়াটার ফিশ • Pacific Blue Tang (Regal Tang)",
    "categoryId": "marine",
    "categoryName": "SeaWater Fish",
    "image": "/images/Fish/SeaWater Fish/Blue Tang-1.jpg",
    "images": [
      "/images/Fish/SeaWater Fish/Blue Tang-1.jpg",
      "/images/Fish/SeaWater Fish/Blue Tang.jpg"
    ],
    "description": "A prime, hand-selected specimen of Pacific Blue Tang (Regal Tang) with 2 verified showcase photos in our SeaWater Fish collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Nemo Ocellaris Clownfish",
    "scientificName": "Nemo Ocellaris Clownfish Specimen",
    "bengaliName": "সি ওয়াটার ফিশ • Nemo Ocellaris Clownfish",
    "categoryId": "marine",
    "categoryName": "SeaWater Fish",
    "image": "/images/Fish/SeaWater Fish/Nemo FIsh-2.jpg",
    "images": [
      "/images/Fish/SeaWater Fish/Nemo FIsh-2.jpg",
      "/images/Fish/SeaWater Fish/Nemo FIsh-3.jpg",
      "/images/Fish/SeaWater Fish/Nemo FIsh.jpg"
    ],
    "description": "A prime, hand-selected specimen of Nemo Ocellaris Clownfish with 3 verified showcase photos in our SeaWater Fish collection. Nurtured in ideal conditions with certified vitality.",
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
    "name": "Yellow Tang (Hawaiian Surgeonfish)",
    "scientificName": "Yellow Tang (Hawaiian Surgeonfish) Specimen",
    "bengaliName": "সি ওয়াটার ফিশ • Yellow Tang (Hawaiian Surgeonfish)",
    "categoryId": "marine",
    "categoryName": "SeaWater Fish",
    "image": "/images/Fish/SeaWater Fish/Yellow Tang.jpg",
    "images": [
      "/images/Fish/SeaWater Fish/Yellow Tang.jpg"
    ],
    "description": "A prime, hand-selected specimen of Yellow Tang (Hawaiian Surgeonfish) with 1 verified showcase photos in our SeaWater Fish collection. Nurtured in ideal conditions with certified vitality.",
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
