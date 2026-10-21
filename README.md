# 🌿 Asmual Aqua Nature — Botanical & Aquatic Living Encyclopedia

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7.6-green?style=for-the-badge&logo=mongodb&logoColor=white)
![Better Auth](https://img.shields.io/badge/Better_Auth-1.7-indigo?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)

<p align="center">
  <strong>An open, non-commercial scientific archive and living botanical-aquatic encyclopedia designed for hobbyists, horticulturists, aquascapers, and nature enthusiasts.</strong>
</p>

<p align="center">
  <a href="#-project-vision--philosophy">Vision</a> •
  <a href="#-key-features">Key Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-directory-structure">Project Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-taxonomy--data-architecture">Taxonomy & Data</a> •
  <a href="#-future-technology-roadmap">Future Roadmap</a> •
  <a href="#-license">License</a>
</p>

</div>

---

## 📖 Project Vision & Philosophy

**Asmual Aqua Nature** is dedicated to cataloging and preserving comprehensive botanical and aquatic wisdom. Unlike commercial e-commerce websites, this project is built with a strictly educational and informational mission:

1. **100% Non-Commercial Living Archive:** No carts, no checkouts, no sales pressure. Every specimen profile exists purely to inform, educate, and empower keepers.
2. **Bilingual Nomenclature Standard:** Every specimen is cataloged with its standardized English common name, scientific binomial nomenclature (*italicized Latin*), and authentic Bengali name (`English Name (বাংলা নাম)`).
3. **Rigorous Husbandry Protocols:** Providing scientifically verified care metrics — from water chemistry (pH, GH, temperature) and light requirements to specialized potting soil substrates, pruning cycles, and balanced nutrition schedules.

---

## ✨ Key Features

### 1. Unified Single-Row Responsive Navbar
- **Sleek Single-Tier Design:** Clean, modern header uniting the brand identity, primary navigation links (`Home`, `Fishes`, `Plants`, `Categories`, `About Us`, `Contact`), and dynamic utility controls in a single streamlined row.
- **Interactive Multi-Level Dropdowns:** Dedicated `Fishes` and `Plants` dropdowns equipped with smooth `180°` rotating chevron arrows supporting both mouse-hover and touch-click triggers.
- **Instant Dropdown Live Search:** Clicking the header search icon smoothly expands a full-width search input directly below the navbar. Features debounced real-time matching across English names, Bengali names, scientific taxonomy, and categories with direct clickable navigation to specimen profiles.
- **Clean Mobile Hamburger Drawer:** Includes a compact single-line user status bar (avatar + username + role badge), immediate logout/login button, and collapsible accordion menus designed to keep navigation visible above the fold on all mobile viewports.

### 2. Full-Screen Cinematic Hero Section
- Dynamic nature banner (`/images/Hero-Banner.png`) overlaid with rich dark emerald gradient masks for optimal legibility.
- Engaging educational callouts, quick category navigation buttons, and trust metrics highlighting certified taxonomy and non-commercial integrity.

### 3. Dedicated Specimen Showcase Pages (`/item/[id]`)
- **Direct Deep-Linking:** Specimen cards across categories route directly to independent, pre-rendered encyclopedic profile pages (`/item/[id]`).
- **High-Definition Multi-Image Gallery:** Interactive image showcase featuring main display zoom, thumbnail strip switching, and full-resolution lightbox examination.
- **Scientific Taxonomy & Origin Badges:** Family classification, regional heritage in Bangladesh, care difficulty rating (`Easy` | `Moderate` | `Advanced`), and blooming/breeding cycles.
- **Comprehensive Maintenance Guide:** Structured protocols for light exposure, water parameters, soil/substrate chemistry, fertilizer schedules, and expert keeping tips.
- **Related Specimen Recommendations:** Automated category cross-referencing showing related flora and fauna from the same department.

### 4. 6 Core Specialized Departments (`/category/[slug]`)
- **Fighter / Betta Fish (`/category/fighter`):** Halfmoons, Crown Tails, Alien Betta Strains, Dumbo Ears, and Giant Plakats.
- **Guppy Strains (`/category/guppy`):** Pureline 24K Full Gold, Albino Blue Topaz, Dumbo Mosaic, and Black Moscow purelines.
- **Marine & Saltwater Reef (`/category/marine`):** Clownfish varieties, Blue Tangs, Coral Beauty Angelfish, and reef invertebrates.
- **Indoor Foliage (`/category/indoor`):** Air-purifying Monsteras, Calatheas, Aglaonemas, and Philodendrons.
- **Ancient Bonsai Living Art (`/category/bonsai`):** Miniature Ficus, Chinese Banyan, Jade Bonsai, and braided Pachira trees.
- **Flowers & Aquatic Flora (`/category/flowers`):** Tropical Water Lilies (*Nymphaea*), Sacred Lotus (*Nelumbo nucifera*), and Arabian Jasmines.

### 5. Secure Authentication & Member Profiles
- **Better-Auth Integration:** Next-generation session-based authentication backed by MongoDB.
- **Social & Credentials Authentication:** Secure email/password flows with password hashing and session cookies.
- **ImgBB Cloud Image Hosting:** Fast direct cloud image upload integration for member profile avatars.
- **Member Dashboard (`/profile`):** Personalized user portal for managing account settings, contact data, and profile pictures.

---

## 🛠️ Tech Stack

### Frontend & Architecture
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.3.5` | React framework with App Router, Turbopack, and SSG/SSR |
| **React** | `19.2.8` | Core UI library utilizing modern hooks and concurrent features |
| **TypeScript** | `^5.0` | Strict static type definitions across catalog models and API contracts |
| **Tailwind CSS** | `^4.0` | Utility-first styling engine with customized brand color palettes |
| **Motion** | `^13.4.0` | Hardware-accelerated animations and interactive micro-interactions |
| **Lucide React** | `^1.47.0` | Comprehensive botanical, aquatic, and navigation iconography |
| **Sonner** | `^2.0.8` | Toast notification system for authentication and user actions |
| **React Hook Form** | `^7.88.0` | Performant form state handling with minimal re-renders |
| **Zod** | `^4.6.5` | Schema declaration and data validation |

### Backend, Database & Services
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **MongoDB Native Driver** | `^7.6.0` | Scalable NoSQL document database connection pooling |
| **Mongoose** | `^9.10.1` | Object Data Modeling (ODM) library for MongoDB |
| **Better-Auth** | `^1.7.5` | Comprehensive authentication framework with session management |
| **ImgBB API** | `v1` | External image storage and CDN hosting for user avatars |
| **TanStack React Query** | `^5.103.1` | Asynchronous state caching and data synchronization |

---

## 📁 Directory Structure

```text
Asmual-Aqua-Nature/
├── Asmual-AquaNature/                 # Primary Next.js Application Root
│   ├── public/                        # Static Public Assets
│   │   ├── images/                    # Categorized Specimen Image Assets
│   │   │   ├── Fish/                  # Fighter, Guppy, Marine specimen photos
│   │   │   ├── Plants/                # Bonsai, Flower, Indoor plant photos
│   │   │   ├── Hero-Banner.png        # Homepage Hero showcase background
│   │   │   ├── main-logo.png          # High-resolution brand logo
│   │   │   └── default-avatar.svg     # Fallback user avatar placeholder
│   │   └── favicon.ico                # Website browser icon
│   │
│   ├── src/
│   │   ├── app/                       # Next.js 16 App Router Directory
│   │   │   ├── (auth)/                # Route Group: Authentication Pages
│   │   │   │   ├── login/page.tsx     # Member Sign In page
│   │   │   │   └── register/page.tsx  # Member Registration page
│   │   │   │
│   │   │   ├── (public)/              # Route Group: Public Facing Pages
│   │   │   │   ├── layout.tsx         # Persistent Layout (Navbar + Footer)
│   │   │   │   ├── page.tsx           # Home Page (Hero Section)
│   │   │   │   ├── about/page.tsx     # Mission & Heritage Documentation
│   │   │   │   ├── contact/page.tsx   # Botanical Advisory & Contact Form
│   │   │   │   ├── profile/page.tsx   # Member Profile & Settings
│   │   │   │   ├── category/          # Category Catalog Hub
│   │   │   │   │   ├── page.tsx       # All 6 Departments Grid
│   │   │   │   │   └── [slug]/        # Department Specimen Listing (SSG)
│   │   │   │   └── item/[id]/         # Dedicated Specimen Detail Page (SSG)
│   │   │   │
│   │   │   ├── api/                   # Server API Route Handlers
│   │   │   │   ├── auth/[...all]/     # Better-Auth Handler (login, session, OAuth)
│   │   │   │   └── user/profile/      # Profile Information Update API
│   │   │   │
│   │   │   ├── globals.css            # Tailwind CSS v4 directives & theme variables
│   │   │   └── layout.tsx             # Root HTML layout with Geist font loading
│   │   │
│   │   ├── components/                # Modular Reusable React Components
│   │   │   ├── category/              # Category filter pills & item cards
│   │   │   ├── home/                  # Homepage Hero section & catalog components
│   │   │   ├── item/                  # Multi-image zoom gallery & care guide tabs
│   │   │   └── shared/                # Navbar, Footer, Logo, Section Heading
│   │   │
│   │   ├── data/                      # Structured Data Records
│   │   │   └── categories.ts          # Master taxonomy dataset (170+ specimens)
│   │   │
│   │   ├── lib/                       # Utility Libraries & Service Clients
│   │   │   ├── auth.ts                # Server-side Better Auth initialization
│   │   │   ├── auth-client.ts         # Client-side Better Auth React hooks
│   │   │   ├── imgbb.ts               # ImgBB image upload API client
│   │   │   ├── mongodb.ts             # Cached MongoDB client connection helper
│   │   │   ├── utils.ts               # Tailwind class merger (cn)
│   │   │   └── validations/           # Zod form & request validation schemas
│   │   │
│   │   └── types/                     # Global TypeScript interfaces & types
│   │
│   ├── .env.example                   # Environment configuration template
│   ├── .gitignore                     # Git exclusion rules (private notes, builds)
│   ├── next.config.ts                 # Next.js build & image domain configuration
│   ├── package.json                   # Project dependencies and script declarations
│   ├── postcss.config.mjs             # Tailwind CSS PostCSS plugin configuration
│   └── tsconfig.json                  # TypeScript compiler settings & path aliases
│
└── README.md                          # Comprehensive Project Documentation
```

---

## 🚀 Getting Started

Follow these instructions to get a local development copy up and running.

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v20.x` or later (LTS recommended)
- **Package Manager**: `npm` (v10+), `pnpm`, or `yarn`
- **MongoDB**: Local MongoDB instance or free cloud cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/Asmual/Asmual-Aqua-Nature.git
cd Asmual-Aqua-Nature/Asmual-AquaNature
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the `Asmual-AquaNature` directory by copying `.env.example`:

```bash
cp .env.example .env.local
```

Fill in the necessary configuration keys:

```env
# Better Auth Configuration
BETTER_AUTH_SECRET=your_generated_secret_key_minimum_32_characters
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# Database Configuration
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/aquanature?retryWrites=true&w=majority

# Cloud Image Upload (ImgBB)
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key
NEXT_PUBLIC_IMGBB_API_URL=https://api.imgbb.com/1/upload

# Optional Google OAuth Keys
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser. Turbopack will compile the pages with lightning speed.

### 5. Build for Production

To test the production build with static pre-rendering across all 170+ dynamic specimen pages:

```bash
npm run build
npm run start
```

---

## 🧬 Taxonomy & Data Architecture

Every specimen cataloged in `src/data/categories.ts` conforms strictly to the TypeScript interface `TCategoryItem`:

```typescript
export interface TCategoryItem {
  id: string;                                                // Unique slug identifier (e.g. "indoor-1")
  name: string;                                              // Standard English title
  bengaliName?: string;                                      // Authentic Bengali name (বাংলা নাম)
  scientificName?: string;                                   // Binomial nomenclature (e.g. "Monstera deliciosa")
  regionalName?: string;                                     // Regional colloquial name in Bangladesh
  bloomingSeason?: string;                                   // Flowering or breeding period
  sunlightOrShade?: string;                                  // Light intensity requirements
  categoryId: "indoor" | "bonsai" | "flowers" | 
              "guppy" | "fighter" | "marine";                // Department affiliation
  categoryName: string;                                      // Department human-readable label
  type: "plant" | "fish";                                    // High-level domain partition
  image: string;                                             // Primary showcase image
  images: string[];                                          // High-res photo gallery array
  description: string;                                       // Detailed biological narrative
  careLevel: "Easy" | "Moderate" | "Advanced";               // Husbandry difficulty tier
  lightOrWater: string;                                      // Quick parameter metric
  temperature: string;                                       // Temperature tolerance range (°C / °F)
  maintenance: {
    wateringOrWaterChange: string;                           // Irrigation or water renewal frequency
    soilOrSubstrate?: string;                                // Porous substrate or aquarium gravel formula
    feedingOrFertilizer: string;                             // Nutrition & fertilization protocol
    pruningOrTankSize?: string;                              // Pruning rules or minimum tank dimensions
    tips: string[];                                          // Expert keeper suggestions
  };
  tags: string[];                                            // Search keywords & taxonomical tags
}
```

---

## 🔮 Future Technology Roadmap

To transform **Asmual Aqua Nature** into the world's premier digital biological sanctuary, the following technological milestones are planned:

### Phase 1: Progressive Web App (PWA) & Offline Encyclopedia
- **Service Workers & Cache Storage:** Implementation of `@serwist/next` (modern Next.js PWA framework) with IndexedDB client-side data persistence.
- **Offline Field Mode:** Allowing gardeners, field botanists, and fish breeders to look up care guides without an internet connection in nurseries or remote hatcheries.

### Phase 2: AI Botanical & Aquatic Diagnostic Assistant
- **Gemini 2.5 Flash Vision / TensorFlow.js:** Instant image diagnostic tool where keepers upload photos of a discolored leaf, pest infestation, or fish skin anomaly (fin rot, white spot/ich, velvet disease).
- **Automated Care Recommendations:** Intelligent matching with organic treatment remedies, quarantine steps, and soil conditioning advice.

### Phase 3: Interactive Husbandry Calculators
- **Aquarium Water Chemistry Calculator:** Real-time computation of pH, GH, KH, and CO2 saturation based on water test inputs.
- **Customized Potting Soil Ratio Engine:** Customized substrate recipes (Perlite, Cocopeat, Vermiculite, Biochar, Leaf Mold) generated by selecting plant genus and local climate humidity.
- **Tank Volume & Biocapacitive Load Calculator:** Helps aquarists determine optimal stocking density and filter flow rates.

### Phase 4: Hybrid Relational Database & Semantic Vector Search
- **PostgreSQL + pgvector with Drizzle ORM:** Transitioning to hybrid document-relational models enabling natural language semantic vector search (*"Show me schooling peaceful blue fish that thrive in 7.8 pH hard water"*).
- **Community Field Notes & Observations:** Verified keepers can contribute blooming timestamps, local water parameters, and high-resolution photo logs under moderated review.

### Phase 5: Real-Time WebSockets & Global i18n
- **Live Q&A Sessions:** WebSocket integration (Socket.io / Pusher) for interactive live aquascaping and bonsai workshops with master keepers.
- **Full Localization (Next-Intl):** End-to-end multi-language support toggling effortlessly between English and বাংলা across every page.

---

## 💻 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack at `localhost:3000` |
| `npm run build` | Compiles and builds the production bundle with static page generation |
| `npm run start` | Runs the compiled production application |
| `npm run lint` | Runs Next.js ESLint checks to enforce code quality |

---

## 🛡️ License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Author & Acknowledgments

- **Concept & Development:** [Asmual](https://github.com/Asmual)
- **Project Repository:** [Asmual-Aqua-Nature](https://github.com/Asmual/Asmual-Aqua-Nature)
- **Special Thanks:** All urban gardeners, aquatic hobbyists, and environmental custodians dedicated to preserving living flora and aquatic species.

<div align="center">
  <sub>Preserving Nature's Heritage Through Verified Botanical & Aquatic Knowledge 🌿🐠</sub>
</div>
