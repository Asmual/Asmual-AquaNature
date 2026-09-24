const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..', 'public', 'images');

const categoriesMeta = [
  {
    id: "indoor",
    slug: "indoor",
    name: "Indoor Plants",
    bengaliName: "ইনডোর প্ল্যান্টস",
    type: "plant",
    badge: "Air Purifying",
    tagline: "Lush, shade-tolerant foliage & air-purifying natural greenery",
    description: "Transform your home and workspace into a soothing sanctuary. Our indoor plants are acclimatized to indoor ambient lighting, requiring minimal fuss while effectively filtering airborne toxins.",
    image: "/images/Plants/Indoor Plants/Monstera.jpg",
    folder: "Plants/Indoor Plants",
  },
  {
    id: "bonsai",
    slug: "bonsai",
    name: "Living Bonsai Art",
    bengaliName: "বনসাই প্ল্যান্টস",
    type: "plant",
    badge: "Ancient Craft",
    tagline: "Sculptured miniature trees embodying decades of botanical artistry",
    description: "Centuries-old living art curated for modern spaces. From resilient dwarf Ficus to weeping jade and flowering species, each bonsai is trained in traditional Japanese and Chinese aesthetics.",
    image: "/images/Plants/Bonsai Plant/B.jpg",
    folder: "Plants/Bonsai Plant",
  },
  {
    id: "flowers",
    slug: "flowers",
    name: "Flower Plants",
    bengaliName: "ফ্লাওয়ার প্ল্যান্টস",
    type: "plant",
    badge: "Vibrant Blooms",
    tagline: "Exotic water lilies, garden blossoms & fragrant flowering varieties",
    description: "Infuse your garden, balcony, or pond with vibrant color and natural perfume. Featuring rare tropical water lilies, star jasmines, roses, and multi-season flower varieties.",
    image: "/images/Plants/Flowers Plant/Water Lily.jpg",
    folder: "Plants/Flowers Plant",
  },
  {
    id: "guppy",
    slug: "guppy",
    name: "Pureline Guppies",
    bengaliName: "পিয়োরলাইন গাপ্পি",
    type: "fish",
    badge: "Champion Strains",
    tagline: "High-grade pureline livebearers with striking delta and ribbon fins",
    description: "Breeder-certified pureline strains raised in optimal mineral water. High vitality, dazzling dorsal displays, and robust genetics from 24K Full Gold to Albino Blue Topaz.",
    image: "/images/Fish/Guppy/24k Gold.jpg",
    folder: "Fish/Guppy",
  },
  {
    id: "fighter",
    slug: "fighter",
    name: "Fighter / Betta",
    bengaliName: "ফাইটার / বেটা ফিশ",
    type: "fish",
    badge: "Show Grade",
    tagline: "Majestic Halfmoons, Alien Bettas, Dumbo Ears & Galaxy Kois",
    description: "The jewel of the aquarium hobby. Individual specimen bettas with symmetrical finnage, vibrant chromatic patterns, and bold personalities conditioned for prime wellness.",
    image: "/images/Fish/Fighter/Alien Betta Fish.jpg",
    folder: "Fish/Fighter",
  },
  {
    id: "marine",
    slug: "marine",
    name: "SeaWater Fish",
    bengaliName: "সি ওয়াটার ফিশ",
    type: "fish",
    badge: "Reef Safe",
    tagline: "Exquisite marine clownfish, vibrant tangs & saltwater reef specimens",
    description: "Vibrant coral reef dwellers carefully quarantined and acclimatized to synthetic sea salt environments. Perfectly suited for reef aquariums and saltwater enthusiasts.",
    image: "/images/Fish/SeaWater Fish/Nemo FIsh.jpg",
    folder: "Fish/SeaWater Fish",
  },
];

function cleanTitle(filename) {
  let name = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  name = name.replace(/\.(jpg|png)$/i, '');
  // Clean common noise
  name = name.replace(/[-_]/g, ' ');
  name = name.replace(/\s+/g, ' ').trim();
  return name;
}

function getItemSpecs(catId, title, filename) {
  const t = title.toLowerCase();

  if (catId === 'indoor') {
    let care = "Easy";
    let light = "Bright Indirect to Medium Light";
    let temp = "18°C - 28°C (65°F - 82°F)";
    let water = "Water every 5-7 days; let top 2 inches dry out";
    let soil = "Well-draining potting mix with perlite, peat moss & orchid bark";
    let feed = "Balanced houseplant liquid fertilizer (10-10-10) once a month in spring/summer";
    let tips = [
      "Keep away from direct cold AC vents or dry heating sources.",
      "Gently mist foliage or wipe leaves with a damp cloth to remove dust.",
      "Ensure pot has drainage holes to prevent root rot."
    ];
    let tags = ["Indoor", "Foliage", "Air Purifier"];

    if (t.includes('cactus') || t.includes('succulent') || t.includes('jade')) {
      care = "Easy";
      light = "Direct Sunlight to Bright Light (4-6 hrs)";
      water = "Water sparingly every 12-18 days; soil must dry completely";
      soil = "Gritty cactus and succulent potting mix with coarse sand";
      tags.push("Succulent", "Low Water");
    } else if (t.includes('calathea') || t.includes('anthurium')) {
      care = "Moderate";
      light = "Gentle Filtered Shade / Medium Indirect Light";
      water = "Keep soil evenly moist using filtered or rainwater; needs 60%+ humidity";
      tags.push("High Humidity", "Exotic");
    } else if (t.includes('bamboo')) {
      care = "Easy";
      water = "Can grow in clean water (change weekly) or moist potting soil";
      tags.push("Feng Shui", "Water Loving");
    } else if (t.includes('monstera') || t.includes('philodendron')) {
      tags.push("Climber", "Large Leaf");
    } else if (t.includes('snake') || t.includes('zz')) {
      care = "Easy";
      light = "Tolerates Low Light to High Indirect Light";
      water = "Extremely drought tolerant; water once every 2-3 weeks";
      tags.push("Beginner Friendly", "Hardy");
    }

    return {
      type: "plant",
      careLevel: care,
      lightOrWater: light,
      temperature: temp,
      maintenance: {
        wateringOrWaterChange: water,
        soilOrSubstrate: soil,
        feedingOrFertilizer: feed,
        pruningOrTankSize: "Prune yellowing leaves at base with sanitized shears",
        tips
      },
      tags
    };
  }

  if (catId === 'bonsai') {
    let care = "Moderate";
    let light = "Bright Morning Sun & Filtered Afternoon Light";
    let temp = "16°C - 30°C (60°F - 86°F)";
    let water = "Check daily; water deeply when topsoil feels slightly dry";
    let soil = "Traditional Bonsai blend (Akadama, pumice, and black lava rock)";
    let feed = "Slow-release organic bonsai fertilizer pellets every 4-6 weeks";
    let tips = [
      "Never allow the rootball to completely dry out.",
      "Rotate tree weekly to ensure symmetrical sunlight absorption.",
      "Prune new growth shoots back to 2 leaves to maintain sculpted canopy."
    ];
    let tags = ["Bonsai", "Artisanal", "Dwarf Tree"];

    if (t.includes('ficus')) {
      care = "Easy";
      tags.push("Ficus", "Hardy Bonsai");
    } else if (t.includes('jade')) {
      care = "Easy";
      tags.push("Succulent Bonsai");
    } else {
      tags.push("Living Sculpture");
    }

    return {
      type: "plant",
      careLevel: care,
      lightOrWater: light,
      temperature: temp,
      maintenance: {
        wateringOrWaterChange: water,
        soilOrSubstrate: soil,
        feedingOrFertilizer: feed,
        pruningOrTankSize: "Pinch new shoots and wire branches carefully in autumn/spring",
        tips
      },
      tags
    };
  }

  if (catId === 'flowers') {
    let care = "Easy";
    let light = "Full Sunlight (5-6+ hours daily)";
    let temp = "20°C - 34°C (68°F - 93°F)";
    let water = "Water daily during warm months; keep soil consistently hydrated";
    let soil = "Rich, loamy organic soil amended with compost and cow manure";
    let feed = "Bloom booster fertilizer (high potassium/phosphorus) every 2 weeks";
    let tips = [
      "Deadhead wilted blooms promptly to trigger fresh bud formation.",
      "Ensure good airflow around stems to prevent powdery mildew.",
      "Mulch base of plant to preserve root moisture during peak summer."
    ];
    let tags = ["Floral", "Flowering", "Outdoor & Balcony"];

    if (t.includes('water lily') || t.includes('lotus') || t.includes('poddo')) {
      light = "Direct Sunlight (6+ hours for prolific blooming)";
      water = "Submerged aquatic setting; water depth 25cm - 50cm above crown";
      soil = "Heavy clay aquatic planting soil capped with sand or gravel";
      feed = "Slow-release aquatic fertilizer tablets pushed into root clay monthly";
      tips = [
        "Position container in still water away from turbulent fountain spray.",
        "Remove decaying underwater leaves regularly to keep water clear."
      ];
      tags.push("Aquatic", "Water Lily", "Pond Flora");
    } else if (t.includes('rose') || t.includes('gulap')) {
      tags.push("Fragrant", "Rose");
    } else if (t.includes('jasmine') || t.includes('bely') || t.includes('jui') || t.includes('kameni')) {
      tags.push("Intense Fragrance", "Night Blooming");
    }

    return {
      type: "plant",
      careLevel: care,
      lightOrWater: light,
      temperature: temp,
      maintenance: {
        wateringOrWaterChange: water,
        soilOrSubstrate: soil,
        feedingOrFertilizer: feed,
        pruningOrTankSize: "Trim old flower stems down to first healthy leaf node",
        tips
      },
      tags
    };
  }

  if (catId === 'guppy') {
    let care = "Easy";
    let water = "Clean Freshwater (pH 7.0 - 8.0, TDS 180 - 300, GH 8 - 14)";
    let temp = "24°C - 28°C (75°F - 82°F)";
    let feed = "High protein micro-pellets, spirulina flakes, live baby brine shrimp & daphnia twice daily";
    let tips = [
      "Perform a 20-25% water change weekly using dechlorinated water.",
      "Use a sponge filter to prevent delicate fry and flowery delta tails from damage.",
      "Keep 2-3 females per male to avoid over-harassment."
    ];
    let tags = ["Livebearer", "Pureline Guppy", "Peaceful"];

    if (t.includes('albino') || t.includes('topaz')) {
      care = "Moderate";
      tags.push("Albino Strain", "Exotic");
    } else if (t.includes('gold') || t.includes('24k')) {
      tags.push("Metallic Strain", "Show Grade");
    } else if (t.includes('dumbo') || t.includes('ribbon')) {
      tags.push("Long Fin", "Dumbo Ear");
    }

    return {
      type: "fish",
      careLevel: care,
      lightOrWater: water,
      temperature: temp,
      maintenance: {
        wateringOrWaterChange: "20-25% weekly water changes with aged conditioned water",
        soilOrSubstrate: "Dark inert sand or bare-bottom breeding tank setup",
        feedingOrFertilizer: feed,
        pruningOrTankSize: "Minimum 10-15 gallon community or species tank",
        tips
      },
      tags
    };
  }

  if (catId === 'fighter') {
    let care = "Easy";
    let water = "Treated Freshwater (pH 6.5 - 7.5, Soft to Medium Hard)";
    let temp = "25°C - 29°C (77°F - 84°F)";
    let feed = "Premium betta micropellets, frozen bloodworms, live mosquito larvae (once or twice daily)";
    let tips = [
      "House only ONE male betta per tank; males will fight to the death.",
      "Use an aquarium heater; bettas become lethargic and prone to disease below 24°C.",
      "Add dried Indian Almond (Catappa) leaves to release beneficial antibacterial tannins."
    ];
    let tags = ["Betta Splendens", "Show Grade", "Labyrinth Fish"];

    if (t.includes('half') || t.includes('moon')) {
      tags.push("Halfmoon", "180 Spread");
    } else if (t.includes('alien')) {
      tags.push("Wild Hybrid", "Alien Strain");
    } else if (t.includes('koi') || t.includes('galaxy')) {
      tags.push("Galaxy Koi", "Marbled");
    }

    return {
      type: "fish",
      careLevel: care,
      lightOrWater: water,
      temperature: temp,
      maintenance: {
        wateringOrWaterChange: "25-30% weekly water change with gentle siphon",
        soilOrSubstrate: "Smooth gravel, dark sand, or planted substrate",
        feedingOrFertilizer: feed,
        pruningOrTankSize: "Minimum 5-gallon heated, low-flow filtered aquarium",
        tips
      },
      tags
    };
  }

  if (catId === 'marine') {
    let care = "Moderate";
    let water = "Marine Saltwater (Specific Gravity 1.022 - 1.026, pH 8.1 - 8.4)";
    let temp = "24°C - 26.5°C (75°F - 80°F)";
    let feed = "Enriched mysis shrimp, marine flakes, chopped seafood & dried nori seaweed daily";
    let tips = [
      "Use reverse osmosis (RO/DI) water mixed with high-grade marine reef salt.",
      "Maintain active protein skimming and strong water circulation.",
      "Check salinity and ammonia levels regularly with a reliable refractometer."
    ];
    let tags = ["Marine", "Saltwater", "Reef Safe"];

    if (t.includes('nemo') || t.includes('clown')) {
      care = "Easy";
      tags.push("Clownfish", "Anemone Symbiont");
    } else if (t.includes('tang')) {
      care = "Moderate";
      tags.push("Herbivore", "Tang Surgeonfish");
    }

    return {
      type: "fish",
      careLevel: care,
      lightOrWater: water,
      temperature: temp,
      maintenance: {
        wateringOrWaterChange: "10-15% bi-weekly saltwater water change",
        soilOrSubstrate: "Aragonite live reef sand and cured porous live rock",
        feedingOrFertilizer: feed,
        pruningOrTankSize: "Minimum 30-75 gallon marine aquarium with protein skimmer",
        tips
      },
      tags
    };
  }
}

const allItems = [];

categoriesMeta.forEach(cat => {
  const dirPath = path.join(base, cat.folder);
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);

  files.forEach((file, index) => {
    // Only image extensions
    if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) return;

    const title = cleanTitle(file);
    const specs = getItemSpecs(cat.id, title, file);
    // Relative image path encoded for web URL
    const imagePath = `/images/${cat.folder}/${file}`;

    const id = `${cat.id}-${index + 1}`;

    allItems.push({
      id,
      name: title,
      scientificName: `${title} Specimen`,
      bengaliName: `${cat.bengaliName} #${index + 1}`,
      categoryId: cat.id,
      categoryName: cat.name,
      image: imagePath,
      description: `A prime, hand-selected specimen of ${title} representing our highest health and aesthetic standards in the ${cat.name} collection. Conditioned and nurtured in ideal environmental parameters.`,
      ...specs
    });
  });
});

console.log(`Generated ${allItems.length} total items across 6 categories.`);

// Update item count in categoriesMeta
categoriesMeta.forEach(cat => {
  cat.itemCount = allItems.filter(item => item.categoryId === cat.id).length;
});

const fileContent = `// Auto-generated comprehensive category and species catalog
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

export const CATEGORIES_META: TCategoryMeta[] = ${JSON.stringify(categoriesMeta, null, 2)};

export const CATEGORY_ITEMS: TCategoryItem[] = ${JSON.stringify(allItems, null, 2)};

export function getCategoryById(id: string): TCategoryMeta | undefined {
  return CATEGORIES_META.find((c) => c.id === id || c.slug === id);
}

export function getItemsByCategory(categoryId: string): TCategoryItem[] {
  return CATEGORY_ITEMS.filter((item) => item.categoryId === categoryId);
}

export function getItemById(id: string): TCategoryItem | undefined {
  return CATEGORY_ITEMS.find((item) => item.id === id);
}
`;

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'categories.ts'),
  fileContent,
  'utf-8'
);
console.log('Saved to src/data/categories.ts successfully!');
