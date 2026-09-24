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
  name = name.replace(/[-_ ]*(\(?\d+\)?)+$/g, '');
  name = name.replace(/[-_ ]+$/g, '');
  name = name.replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

  // Consolidation mappings
  if (name.includes('aglonema') || name.includes('aglaonema')) return 'aglaonema';
  if (name.includes('money plant')) return 'money plant';
  if (name.includes('coin plant')) return 'coin plant';
  if (name.includes('lucky bambo')) return 'lucky bamboo';
  if (name.includes('snak plant') || name.includes('snake plant')) return 'snake plant';
  if (name.includes('singinium') || name.includes('singunium')) return 'syngonium';
  if (name.includes('zz')) return 'zz plant';
  if (name.includes('calathea')) return 'calathea';
  if (name.includes('culius') || name.includes('coleus')) return 'coleus';
  if (name.includes('dump cane')) return 'dumb cane';
  if (name.includes('devils backbone') || name.includes("devil's backbone")) return "devil's backbone";
  if (name.includes('caladium') || name.includes('ক্যালডিয়াম')) return 'caladium';
  
  if (name.includes('nemo')) return 'nemo clownfish';
  if (name.includes('blue tang')) return 'blue tang';
  if (name.includes('yellow tang')) return 'yellow tang';

  if (name.includes('ficus benjamina')) return 'ficus benjamina';
  if (name.includes('ficus religiosa')) return 'ficus religiosa';
  if (name.includes('water lily')) return 'water lily';
  if (name.includes('alamanda') || name.includes('almanda')) return 'allamanda';
  if (name.includes('bely')) return 'beli jasmine';
  if (name.includes('dalia')) return 'dahlia';
  if (name.includes('marigold')) return 'marigold';
  if (name.includes('tube rose')) return 'tuberose';
  if (name.includes('stol poddo')) return 'confederate rose';
  if (name.includes('red moscow')) return 'red moscow guppy';
  if (name.includes('black moscow')) return 'black moscow guppy';
  if (name.includes('blue topaz')) return 'blue topaz guppy';
  if (name.includes('full gold') || name.includes('24k gold')) return '24k gold guppy';

  return name;
}

// Map key to English Name (বাংলা নাম)
const titleDictionary = {
  // Indoor Plants
  'aglaonema': 'Aglaonema (মানিপ্ল্যান্ট)',
  'aloe vera': 'Aloe Vera (অ্যালোভেরা)',
  'anthurium': 'Anthurium (অ্যান্থুরিয়াম)',
  'bunny ears cactus': 'Bunny Ears Cactus (বানি ইয়ার ক্যাকটাস)',
  'buterfly': 'Butterfly Plant (বাটারফ্লাই প্ল্যান্ট)',
  'calathea': 'Calathea (ক্যালাথিয়া)',
  'coin plant': 'Coin Plant (কয়েন প্ল্যান্ট)',
  'croton golden dust plant': 'Croton Golden Dust (ক্রোটন গোল্ডেন ডাস্ট)',
  'coleus': 'Coleus (কলিয়াস)',
  "devil's backbone": "Devil's Backbone (ডেভিলস ব্যাকবোন)",
  'dumb cane': 'Dumb Cane (ডাম্ব ক্যান)',
  'e6b100c7ae1b52080379a42bcf3cbfe': 'Variegated Ficus (ভ্যারিয়েগেটেড ফাইকাস)',
  'jade plant': 'Jade Plant (জেড প্ল্যান্ট)',
  'lucky bamboo': 'Lucky Bamboo (লাকি ব্যাম্বু)',
  'money plant': 'Money Plant (মানিপ্ল্যান্ট)',
  'monstera': 'Monstera Deliciosa (মনস্টেরা)',
  'peace lily': 'Peace Lily (পিস লিলি)',
  'pencil cactus plant': 'Pencil Cactus (পেন্সিল ক্যাকটাস)',
  'philodendron': 'Philodendron (ফিলোডেনড্রন)',
  'purple heart': 'Purple Heart (পার্পল হার্ট)',
  'reo plant': 'Reo Plant (রিও প্ল্যান্ট)',
  'rubber plannt': 'Rubber Plant (রাবার প্ল্যান্ট)',
  'syngonium': 'Syngonium (সিঙ্গোনিয়াম)',
  'snake plant': 'Snake Plant (স্নেক প্ল্যান্ট)',
  'succulent plant': 'Succulent (সাকুলেন্ট প্ল্যান্ট)',
  'u': 'Haworthia Succulent (হাওরথিয়া সাকুলেন্ট)',
  'zebrina': 'Zebrina Wandering Jew (জেব্রিনা)',
  'zz plant': 'ZZ Plant (জেডজেড প্ল্যান্ট)',
  'caladium': 'Caladium (ক্যালডিয়াম)',

  // Bonsai
  'amm': 'Mango Bonsai (আম বনসাই)',
  'b': 'Ficus Retusa Bonsai (ফাইকাস বনসাই)',
  'bagan bilash': 'Bougainvillea Bonsai (বাগান বিলাস বনসাই)',
  'china bot': 'China Banyan Bonsai (চীন বট বনসাই)',
  'crishnachura': 'Krishnachura Bonsai (কৃষ্ণচূড়া বনসাই)',
  'deshi': 'Deshi Banyan Bonsai (দেশি বট বনসাই)',
  'ficus benjamina': 'Ficus Benjamina (বেনজামিনা বনসাই)',
  'ficus religiosa': 'Ficus Religiosa (অশ্বত্থ বনসাই)',
  'jade': 'Jade Bonsai (জেড বনসাই)',
  'joba': 'Hibiscus Bonsai (জবা বনসাই)',
  'kamranga': 'Starfruit Bonsai (কামরাঙা বনসাই)',
  'krinasura': 'Royal Poinciana Bonsai (কৃষ্ণচূড়া বনসাই)',
  'lojja boti': 'Mimosa Bonsai (লজ্জাবতী বনসাই)',
  'pakur': 'Pakur Tree Bonsai (পাকুড় বনসাই)',
  'rongon': 'Ixora Bonsai (রঙ্গন বনসাই)',
  'tetul ta': 'Tamarind Bonsai (তেঁতুল বনসাই)',

  // Flowers Plant
  'allamanda': 'Allamanda (অ্যালমন্ডা ফুল)',
  'beli jasmine': 'Beli (বেলি ফুল)',
  'camelia': 'Camellia (ক্যামেলিয়া ফুল)',
  'chameli': 'Chameli (চামেলি ফুল)',
  'champa চাঁপা': 'Champa (চাঁপা ফুল)',
  'champa': 'Champa (চাঁপা ফুল)',
  'china togor': 'China Togor (চীন টগর ফুল)',
  'chondro mollika চন্দ্রমল্লিকা': 'Chrysanthemum (চন্দ্রমল্লিকা)',
  'daisy': 'Daisy (ডেইজি ফুল)',
  'dahlia': 'Dahlia (ডালিয়া ফুল)',
  'dulon chapa': 'Dolan Champa (দোলনচাঁপা)',
  'gondhoraj': 'Gardenia (গন্ধরাজ ফুল)',
  'hasnahena': 'Hasnahena (হাসনাহেনা)',
  'jui (জুঁই) star jasmine': 'Star Jasmine (জুঁই ফুল)',
  'jui': 'Star Jasmine (জুঁই ফুল)',
  'kameni': 'Kamini (কামিনী ফুল)',
  'kat gulap': 'Plumeria (কাঠগোলাপ)',
  'kata mukut': 'Crown of Thorns (কাঁটামুকুট)',
  'kochuri pana': 'Water Hyacinth (কচুরিপানা ফুল)',
  'kodom': 'Kadamba (কদম ফুল)',
  'kolaboti': 'Canna Lily (কলাবতী ফুল)',
  'kolke kobori': 'Yellow Oleander (কলকে করবী)',
  'kosmos': 'Cosmos (কসমস ফুল)',
  'krishno chura': 'Krishnachura (কৃষ্ণচূড়া)',
  'kunjolota': 'Cypress Vine (কুঞ্জলতা ফুল)',
  'lanka joba': 'Chili Hibiscus (লঙ্কা জবা)',
  'lantana camera': 'Lantana (ল্যান্টানা ফুল)',
  'lily': 'Lily (লিলি ফুল)',
  'lojjaboti': 'Mimosa (লজ্জাবতী ফুল)',
  'lotus পদ্ম (podmo)': 'Lotus (পদ্ম ফুল)',
  'lotus': 'Lotus (পদ্ম ফুল)',
  'madhubi lota': 'Madhavi Lata (মাধবীলতা)',
  'marigold': 'Marigold (গাঁদা ফুল)',
  'noyon tara': 'Periwinkle (নয়নতারা ফুল)',
  'oprajita': 'Butterfly Pea (অপরাজিতা ফুল)',
  'palash tree': 'Palash (পলাশ ফুল)',
  'petunia plant': 'Petunia (পেটুনিয়া ফুল)',
  'polash': 'Palash (পলাশ ফুল)',
  'ponika পানিকা ফুল': 'Ponika (পানিকা ফুল)',
  'poppy': 'Poppy (পপি ফুল)',
  'portulica': 'Portulaca (পর্তুলিকা / ঘাসফুল)',
  'rain lily': 'Rain Lily (রেইন লিলি)',
  'rose': 'Rose (গোলাপ ফুল)',
  'shiuly': 'Night Flowering Jasmine (শিউলি ফুল)',
  'shonda maloti': 'Four O Clock (সন্ধ্যামালতী)',
  'confederate rose': 'Confederate Rose (স্থলপদ্ম)',
  'sunflower': 'Sunflower (সূর্যমুখী ফুল)',
  'tuberose': 'Tuberose (রজনীগন্ধা)',
  'tulip': 'Tulip (টিউলিপ ফুল)',
  'unknown': 'Exotic Blossom (অপরিচিত সুন্দর ফুল)',
  'water lily': 'Water Lily (নীল শাপলা)',
  'zinnia': 'Zinnia (জিনিয়া ফুল)',
  'চন্দ্রপ্রভা সোনাপাতি ফুল': 'Yellow Bells (চন্দ্রপ্রভা সোনাপাতি)',
  'চন্দ্রমল্লিকা': 'Chrysanthemum (চন্দ্রমল্লিকা)',
  'জারবেরা (gerbera) african daisy': 'Gerbera (জারবেরা ফুল)',
  'নীল ঘন্টা bush clock vine': 'Bush Clock Vine (নীল ঘণ্টা ফুল)',
  'পটপটি রুয়েলিয়া ফুল': 'Ruellia (পটপটি ফুল)',
  'বকুল ফুল bakul flower': 'Spanish Cherry (বকুল ফুল)',
  'ভৃঙ্গরাজ singapore daisy sphagneticola calendulacea': 'Singapore Daisy (ভৃঙ্গরাজ ফুল)',
  'মোরগঝুঁটি ফুল': 'Cockscomb (মোরগঝুঁটি ফুল)',
  'সোনালু বাঁদর লাঠি': 'Golden Shower (সোনালু ফুল)',
  'সোনালু বাঁদর লাঠি 1': 'Golden Shower Tree (সোনালু ফুল)',

  // Guppy
  '24k gold guppy': '24K Full Gold Guppy (২৪কে ফুল গোল্ড গাপ্পি)',
  'blue topaz guppy': 'Albino Blue Topaz Guppy (অ্যালবিনো ব্লু টোপাজ গাপ্পি)',
  'albino red koi guppy': 'Albino Red Koi Guppy (অ্যালবিনো রেড কই গাপ্পি)',
  'red moscow guppy': 'Red Moscow Guppy (রেড মস্কো গাপ্পি)',
  'albino snakeskin guppy': 'Albino Snakeskin Guppy (অ্যালবিনো স্নেকস্কিন গাপ্পি)',
  'albino blue ribbon fin female guppy': 'Albino Blue Ribbon Guppy (অ্যালবিনো ব্লু রিবন গাপ্পি)',
  'black metal lace guppy': 'Black Metal Lace Guppy (ব্ল্যাক মেটাল লেইস গাপ্পি)',
  'black metalguppy': 'Black Metal Guppy (ব্ল্যাক মেটাল গাপ্পি)',
  'black moscow guppy': 'Black Moscow Guppy (ব্ল্যাক মস্কো গাপ্পি)',
  'blue dragon ribbon': 'Blue Dragon Ribbon Guppy (ব্লু ড্রাগন রিবন গাপ্পি)',
  'blue grass guppy': 'Blue Grass Guppy (ব্লু গ্রাস গাপ্পি)',
  'blue head samurai guppy': 'Blue Head Samurai Guppy (ব্লু হেড সামুরাই গাপ্পি)',
  'blue moscow guppy': 'Blue Moscow Guppy (ব্লু মস্কো গাপ্পি)',
  'dumbo musaic': 'Dumbo Mosaic Guppy (ডাম্বো মোজাইক গাপ্পি)',
  'gold dust moly': 'Gold Dust Molly (গোল্ড ডাস্ট মলি)',
  'gold lace snakeskin': 'Gold Lace Snakeskin Guppy (গোল্ড লেইস স্নেকস্কিন গাপ্পি)',
  'green dragon': 'Green Dragon Guppy (গ্রিন ড্রাগন গাপ্পি)',
  'green moscow guppy': 'Green Moscow Guppy (গ্রিন মস্কো গাপ্পি)',
  'hb red rose': 'HB Red Rose Guppy (এইচবি রেড রোজ গাপ্পি)',
  'koi txido guppy': 'Koi Tuxedo Guppy (কই টাক্সিডো গাপ্পি)',
  'purple mosaic guppy': 'Purple Mosaic Guppy (পার্পল মোজাইক গাপ্পি)',
  'red dragon': 'Red Dragon Guppy (রেড ড্রাগন গাপ্পি)',
  'red gragon': 'Red Dragon Dragon-Eye Guppy (রেড ড্রাগন গাপ্পি)',
  'red tail platinum dumbo ear': 'Red Tail Platinum Dumbo Ear (রেড টেইল ডাম্বো ইয়ার)',
  'ribbon guppy': 'Longfin Ribbon Guppy (লংফিন রিবন গাপ্পি)',
  'rtp dumbo ear': 'RTP Dumbo Ear Guppy (আরটিপি ডাম্বো ইয়ার গাপ্পি)',
  'santa claus guppy': 'Santa Claus Guppy (সান্তা ক্লজ গাপ্পি)',
  'shanta cluse guppy': 'Santa Claus Strain Guppy (সান্তা ক্লজ গাপ্পি)',
  'snow white gyuppy': 'Snow White Guppy (স্নো হোয়াইট গাপ্পি)',
  'tuxedo koi guppies': 'Tuxedo Koi Guppies (টাক্সিডো কই গাপ্পি)',
  'un': 'Platinum Cross Guppy (প্ল্যাটিনাম ক্রস গাপ্পি)',
  'white toxido': 'White Tuxedo Guppy (হোয়াইট টাক্সিডো গাপ্পি)',

  // Fighter / Betta
  'alien betta fish': 'Alien Betta Fish (এলিয়েন ফাইটার ফিশ)',
  'betta dumbo lavender': 'Dumbo Lavender Betta (ডাম্বো ল্যাভেন্ডার বেটা ফিশ)',
  'betta red dragon': 'Red Dragon Betta (রেড ড্রাগন ফাইটার ফিশ)',
  'betta red snow dragon': 'Red Snow Dragon Betta (রেড স্নো ড্রাগন বেটা ফিশ)',
  'blue rim betta fish': 'Blue Rim Betta (ব্লু রিম ফাইটার ফিশ)',
  'candy betta fish': 'Candy Koi Betta (ক্যান্ডি কই বেটা ফিশ)',
  'half moon betta fish': 'Halfmoon Betta (হাফমুন ফাইটার ফিশ)',
  'koi betta fish': 'Marble Koi Betta (মার্বেল কই ফাইটার ফিশ)',
  'red koi galaxy) betta': 'Red Koi Galaxy Betta (রেড কই গ্যালাক্সি বেটা ফিশ)',
  'rose tail': 'Rosetail Betta (রোজটেইল ফাইটার ফিশ)',

  // Marine / SeaWater Fish
  'nemo clownfish': 'Nemo Ocellaris Clownfish (নিমো ক্লাউনফিশ)',
  'blue tang': 'Pacific Blue Tang (প্যাসিফিক ব্লু ট্যাং)',
  'yellow tang': 'Yellow Tang Surgeonfish (ইয়েলো ট্যাং)',
};

function formatTitle(key, sampleFile) {
  if (titleDictionary[key]) return titleDictionary[key];

  let cleaned = sampleFile.replace(/\.(jpg|jpeg|png|webp)(\.(jpg|png))?$/i, '');
  cleaned = cleaned.replace(/[-_ ]*(\(?\d+\)?)+$/g, '');
  cleaned = cleaned.replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
  const eng = cleaned
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return `${eng} (${eng})`;
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

    if (t.includes('water lily') || t.includes('lotus') || t.includes('poddo') || t.includes('শাপলা')) {
      light = "Direct Sunlight (6+ hours for prolific blooming)";
      water = "Submerged aquatic setting; water depth 25cm - 50cm above crown";
      soil = "Heavy clay aquatic planting soil capped with sand or gravel";
      feed = "Slow-release aquatic fertilizer tablets pushed into root clay monthly";
      tips = [
        "Position container in still water away from turbulent fountain spray.",
        "Remove decaying underwater leaves regularly to keep water clear."
      ];
      tags.push("Aquatic", "Water Lily", "Pond Flora");
    } else if (t.includes('rose') || t.includes('gulap') || t.includes('গোলাপ')) {
      tags.push("Fragrant", "Rose");
    } else if (t.includes('jasmine') || t.includes('bely') || t.includes('jui') || t.includes('kameni') || t.includes('বেলি')) {
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
      scientificName: `${title.split(' (')[0]} Specimen`,
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
