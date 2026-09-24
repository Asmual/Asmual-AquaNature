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

function normalizeKey(filename) {
  let name = filename.replace(/\.(jpg|jpeg|png|webp)(\.(jpg|png))?$/i, '');
  // normalize number suffixes: -1, -2, - (1), _2, (1), etc.
  name = name.replace(/[-_ ]*(\(?\d+\)?)+$/g, '');
  name = name.replace(/[-_ ]+$/g, '');
  name = name.replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

  // Special aliases to consolidate identical plants
  if (name.includes('aglonema') || name.includes('aglaonema')) return 'aglaonema';
  if (name.includes('money plant')) return 'money plant';
  if (name.includes('coin plant')) return 'coin plant';
  if (name.includes('lucky bambo')) return 'lucky bamboo';
  if (name.includes('snak plant') || name.includes('snake plant')) return 'snake plant';
  if (name.includes('singinium') || name.includes('singunium')) return 'syngonium';
  if (name.includes('zz')) return 'zz plant';
  if (name.includes('calathea')) return 'calathea';
  if (name.includes('culius') || name.includes('coleus')) return 'coleus';
  if (name.includes('dump cane')) return 'dumb cane dieffenbachia';
  if (name.includes('devils backbone') || name.includes("devil's backbone")) return "devil's backbone";
  
  if (name.includes('nemo')) return 'nemo clownfish';
  if (name.includes('blue tang')) return 'blue tang';
  if (name.includes('yellow tang')) return 'yellow tang';

  if (name.includes('ficus benjamina')) return 'ficus benjamina';
  if (name.includes('ficus religiosa')) return 'ficus religiosa peepal';
  if (name.includes('water lily')) return 'water lily';
  if (name.includes('alamanda') || name.includes('almanda')) return 'allamanda';
  if (name.includes('bely')) return 'beli arabian jasmine';
  if (name.includes('dalia')) return 'dahlia';
  if (name.includes('marigold')) return 'marigold';
  if (name.includes('tube rose')) return 'tuberose rajnigandha';
  if (name.includes('stol poddo')) return 'confederate rose stol poddo';
  if (name.includes('red moscow')) return 'red moscow guppy';
  if (name.includes('black moscow')) return 'black moscow guppy';
  if (name.includes('blue topaz')) return 'albino blue topaz guppy';
  if (name.includes('full gold') || name.includes('24k gold')) return '24k full gold guppy';

  return name;
}

function formatTitle(key, sampleFile) {
  // Common clean mappings
  const map = {
    'aglaonema': 'Aglaonema (Chinese Evergreen)',
    'money plant': 'Money Plant (Golden Pothos)',
    'coin plant': 'Coin Plant (Pilea Peperomioides)',
    'lucky bamboo': 'Lucky Bamboo (Dracaena Sanderiana)',
    'snake plant': 'Snake Plant (Sansevieria)',
    'syngonium': 'Syngonium (Arrowhead Plant)',
    'zz plant': 'ZZ Plant (Zamioculcas Zamiifolia)',
    'calathea': 'Calathea (Peacock Plant)',
    'coleus': 'Coleus (Painted Nettle)',
    'dumb cane dieffenbachia': 'Dumb Cane (Dieffenbachia)',
    "devil's backbone": "Devil's Backbone (Euphorbia)",
    'nemo clownfish': 'Nemo Ocellaris Clownfish',
    'blue tang': 'Pacific Blue Tang (Regal Tang)',
    'yellow tang': 'Yellow Tang (Hawaiian Surgeonfish)',
    'ficus benjamina': 'Ficus Benjamina Bonsai',
    'ficus religiosa peepal': 'Ficus Religiosa (Peepal) Bonsai',
    'water lily': 'Exotic Water Lily (Shapla)',
    'allamanda': 'Allamanda (Golden Trumpet)',
    'beli arabian jasmine': 'Beli (Arabian Jasmine)',
    'dahlia': 'Dahlia Flower',
    'marigold': 'Marigold (Genda Flower)',
    'tuberose rajnigandha': 'Tuberose (Rajnigandha)',
    'confederate rose stol poddo': 'Confederate Rose (Sthol Poddo)',
    'red moscow guppy': 'Red Moscow Pureline Guppy',
    'black moscow guppy': 'Black Moscow Pureline Guppy',
    'albino blue topaz guppy': 'Albino Blue Topaz Guppy',
    '24k full gold guppy': '24K Full Gold Pureline Guppy',
  };

  if (map[key]) return map[key];

  // Capitalize words cleanly
  let cleaned = sampleFile.replace(/\.(jpg|jpeg|png|webp)(\.(jpg|png))?$/i, '');
  cleaned = cleaned.replace(/[-_ ]*(\(?\d+\)?)+$/g, '');
  cleaned = cleaned.replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
  return cleaned
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function getItemSpecs(catId, title, key) {
  const t = (title + ' ' + key).toLowerCase();

  if (catId === 'indoor') {
    let care = "Easy";
    let light = "Bright Indirect to Medium Light";
    let temp = "18°C - 28°C";
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
    let temp = "16°C - 30°C";
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
    let temp = "20°C - 34°C";
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
    let temp = "24°C - 28°C";
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
    let temp = "25°C - 29°C";
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
    let temp = "24°C - 26.5°C";
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
  const files = fs.readdirSync(dirPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

  // Group files by normalized key
  const groups = {};
  files.forEach(file => {
    const key = normalizeKey(file);
    if (!groups[key]) {
      groups[key] = {
        key,
        sampleFile: file,
        files: [],
      };
    }
    groups[key].files.push(file);
  });

  const groupKeys = Object.keys(groups);
  groupKeys.forEach((key, index) => {
    const group = groups[key];
    const title = formatTitle(key, group.sampleFile);
    const specs = getItemSpecs(cat.id, title, key);

    const imagePaths = group.files.map(f => `/images/${cat.folder}/${f}`);
    const id = `${cat.id}-${index + 1}`;

    allItems.push({
      id,
      name: title,
      scientificName: `${title} Specimen`,
      bengaliName: `${cat.bengaliName} • ${title}`,
      categoryId: cat.id,
      categoryName: cat.name,
      image: imagePaths[0],
      images: imagePaths,
      description: `A prime, hand-selected specimen of ${title} with ${imagePaths.length} verified showcase photos in our ${cat.name} collection. Nurtured in ideal conditions with certified vitality.`,
      ...specs
    });
  });
});

console.log(`Generated ${allItems.length} unique cards across 6 categories.`);

// Update item count in categoriesMeta
categoriesMeta.forEach(cat => {
  cat.itemCount = allItems.filter(item => item.categoryId === cat.id).length;
});

const fileContent = `// Auto-generated comprehensive category and species catalog with multi-image support
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
