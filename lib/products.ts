import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "prod-gate-of-heaven",
    slug: "the-gate-of-heaven",
    name: "The Gate of Heaven",
    tagline: "The Pinnacle of Haute Parfumerie — An Unforgettable Presence",
    shortDescription:
      "Our definitive signature masterpiece. An intoxicating fusion of rare Cambodian oud, radiant saffron, velvet Turkish rose, and sacred golden frankincense.",
    fullDescription: [
      "The Gate of Heaven represents the zenith of Raiyaan Luxury's artisanal vision. Conceived as an olfactive portal to celestial realms, this transcendent Extrait de Parfum blends the legendary depth of aged wild agarwood with celestial floral and resinous accords.",
      "The scent unfurls with a luminous opening of saffron and Italian bergamot, leading seamlessly into an opulent heart of Bulgarian rose and sacred olibanum. The drydown reveals an indelible base of pure Cambodian oud, ambergris, and golden resin that lingers on skin and fabric for hours.",
      "Hand-bottled in our bespoke octagonal flacon crafted from heavy obsidian glass, finished with an intricately engraved 24k gold filigree crest and crowned with a heavy metallic cap."
    ],
    category: "Perfume",
    productType: "Extrait de Parfum",
    fragranceFamily: "Woody & Oud",
    gender: "Unisex",
    concentration: "Extrait de Parfum (35% Fragrance Oil Concentration)",
    volume: "100ml / 3.4 fl. oz",
    notes: {
      top: ["Imperial Saffron", "Calabrian Bergamot", "Nutmeg Aril"],
      heart: ["Bulgarian Rose Absolute", "Royal Frankincense", "Smoked Labdanum"],
      base: ["Aged Cambodian Oud", "Golden Ambergris", "Ebony Wood", "Benzoin"]
    },
    seasonRecommendation: ["Autumn", "Winter", "Cool Evenings"],
    occasion: "Gala Evenings, Formal Celebrations & Memorable Encounters",
    sillage: "Extremely Long-Lasting",
    applicationInstructions: [
      "Mist 2 to 3 sprays onto warm pulse points: inner wrists, base of the throat, and behind ears.",
      "Allow the fragrance to dry naturally without rubbing, preserving the delicate top and heart accords.",
      "For elevated longevity, apply following an unscented moisturizer or coordinate with our unscented attar base."
    ],
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citronellol, Geraniol, Coumarin, Eugenol, Benzyl Benzoate, Cinnamyl Alcohol, Farnesol.",
    packagingDetails:
      "Housed in a custom black rigid presentation case lined with velvet, including a certificate of artisanal authenticity.",
    images: {
      primary: "/images/products/gate-of-heaven.jpg",
      gallery: [
        "/images/products/gate-of-heaven.jpg",
        "/images/hero/hero-slide-1.jpg",
        "/images/brand/flagship.jpg"
      ],
      alt: "Raiyaan Luxury The Gate of Heaven signature perfume bottle with gold filigree and black marble"
    },
    variants: [
      {
        id: "var-goh-50",
        size: "50ml",
        volume: "50ml / 1.7 fl. oz",
        price: 5490,
        compareAtPrice: 6200,
        sku: "RL-GOH-50",
        stockQuantity: 24
      },
      {
        id: "var-goh-100",
        size: "100ml",
        volume: "100ml / 3.4 fl. oz",
        price: 8990,
        compareAtPrice: 9900,
        sku: "RL-GOH-100",
        stockQuantity: 18
      }
    ],
    basePrice: 5490,
    compareAtPrice: 6200,
    stockQuantity: 42,
    isFeatured: true,
    isBestseller: true,
    isNewLaunch: false,
    isArtisanal: true,
    collections: ["the-signature-collection", "the-oud-collection"],
    seoTitle: "The Gate of Heaven Extrait de Parfum | Raiyaan Luxury",
    seoDescription:
      "Experience The Gate of Heaven, the signature luxury fragrance by Raiyaan Luxury. Hand-crafted with aged Cambodian oud, saffron, and velvet Bulgarian rose.",
    faqs: [
      {
        question: "How long does The Gate of Heaven last on skin?",
        answer:
          "Due to its concentrated 35% Extrait formulation, The Gate of Heaven routinely offers 12 to 16+ hours of skin longevity, lingering gently on garments for days."
      },
      {
        question: "Is this fragrance suitable for all seasons?",
        answer:
          "While it radiates most magnificently in temperate and cool weather or evening events, a single light spray delivers an intoxicating presence in air-conditioned atmospheres year-round."
      }
    ]
  },
  {
    id: "prod-oud-imperial",
    slug: "oud-imperial",
    name: "Oud Imperial",
    tagline: "Aged Assam Agarwood Wrapped in Spiced Cedar & Warm Amber",
    shortDescription:
      "An authoritative woody composition. Smoked cedarwood, pink pepper, and aged Assam agarwood grounded by warm black amber and polished leather.",
    fullDescription: [
      "Oud Imperial is an ode to the regal traditions of noble perfumery. It commands attention without raising its voice, relying on exquisite balance rather than overwhelming pungency.",
      "Spicy top notes of pink pepper and freshly cracked cardamom give way to a heart of dark cedarwood and birch smoke. The foundation is rooted in dark Assam agarwood resin, bourbon vanilla, and supple leather."
    ],
    category: "Perfume",
    productType: "Eau de Parfum",
    fragranceFamily: "Woody & Oud",
    gender: "Unisex",
    concentration: "Eau de Parfum (22% Fragrance Concentration)",
    volume: "100ml / 3.4 fl. oz",
    notes: {
      top: ["Madagascar Pink Pepper", "Green Cardamom", "Nutmeg"],
      heart: ["Atlas Cedarwood", "Birch Smoke", "Leather Accord"],
      base: ["Assam Agarwood", "Black Amber", "Haitian Vetiver", "Bourbon Vanilla"]
    },
    seasonRecommendation: ["Autumn", "Winter", "Year-round Evenings"],
    occasion: "Executive Presence, Evening Dinners & Black Tie Gatherings",
    sillage: "Intense",
    applicationInstructions: [
      "Apply to clean, moisturized skin at pulse points.",
      "Two to three measured sprays provide an all-day trail."
    ],
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua, Alpha-Isomethyl Ionone, Limonene, Linalool, Isoeugenol, Cinnamal.",
    packagingDetails:
      "Heavy charcoal glass flacon with a brushed gold metal label plaque and textured gold cap.",
    images: {
      primary: "/images/products/oud-imperial.jpg",
      gallery: [
        "/images/products/oud-imperial.jpg",
        "/images/hero/hero-slide-2.jpg"
      ],
      alt: "Raiyaan Oud Imperial Eau de Parfum bottle with brushed gold plate and oud chips"
    },
    variants: [
      {
        id: "var-oi-50",
        size: "50ml",
        volume: "50ml / 1.7 fl. oz",
        price: 3890,
        compareAtPrice: 4400,
        sku: "RL-OI-50",
        stockQuantity: 35
      },
      {
        id: "var-oi-100",
        size: "100ml",
        volume: "100ml / 3.4 fl. oz",
        price: 6490,
        compareAtPrice: 7200,
        sku: "RL-OI-100",
        stockQuantity: 28
      }
    ],
    basePrice: 3890,
    compareAtPrice: 4400,
    stockQuantity: 63,
    isFeatured: true,
    isBestseller: true,
    isNewLaunch: false,
    isArtisanal: false,
    collections: ["the-oud-collection", "everyday-essentials"],
    seoTitle: "Oud Imperial Eau de Parfum | Raiyaan Luxury",
    seoDescription:
      "Discover Oud Imperial by Raiyaan Luxury. A commanding blend of aged agarwood, cedarwood, and black amber.",
    faqs: [
      {
        question: "Is this perfume strong or animalic?",
        answer:
          "Oud Imperial is refined and woody rather than animalic. It emphasizes dry cedar, resinous agarwood, and smooth spices for a deeply sophisticated profile."
      }
    ]
  },
  {
    id: "prod-royal-santal",
    slug: "royal-santal-attar",
    name: "Royal Santal Attar",
    tagline: "Pure Concentrated Perfume Oil — Creamy Sandalwood & Amber",
    shortDescription:
      "Alcohol-free pure perfume oil. Distilled Mysore-character sandalwood harmonized with crushed green cardamom, white musk, and golden liquid amber.",
    fullDescription: [
      "Royal Santal Attar embodies the ancient heritage of Indian and Arabian oil perfumery. Formulated entirely without alcohol, this concentrated oil warms gently on your pulse points, creating an intimate, hypnotic scent bubble.",
      "The fragrance centers upon luscious, creamy sandalwood enriched with a subtle aromatic lift of cardamom and nutmeg, anchored by golden amber droplets and silken musk."
    ],
    category: "Attar",
    productType: "Attar Oil",
    fragranceFamily: "Attars & Concentrated Oils",
    gender: "Unisex",
    concentration: "100% Concentrated Pure Perfume Oil (Alcohol-Free)",
    volume: "12ml / 0.4 fl. oz (1 Tola)",
    notes: {
      top: ["Crushed Cardamom Pods", "Nutmeg", "Sweet Orange Rind"],
      heart: ["Creamy Sandalwood Heart", "Golden Frankincense", "Heliotrope"],
      base: ["Aged Amber Resin", "Cashmere Wood", "Pure White Musk"]
    },
    seasonRecommendation: ["Spring", "Summer", "Autumn", "Winter"],
    occasion: "Meditation, Daily Rituals, Layering & Intimate Evenings",
    sillage: "Moderate",
    applicationInstructions: [
      "Unscrew the ornate crown stopper and utilize the polished glass dip rod.",
      "Touch a drop of attar to your inner wrist.",
      "Gently touch wrists together and lightly dab behind your ears, jawline, and collarbone.",
      "Never rub aggressively, as friction breaks delicate aromatic molecules."
    ],
    ingredients:
      "Concentrated Perfume Oil, Santalum Album Accord, Dipropylene Glycol, Natural Essential Oils.",
    packagingDetails:
      "Faceted round crystal flacon encased in ornate 24k gold filigree scrollwork with a royal crown cap and glass applicator wand.",
    images: {
      primary: "/images/products/royal-santal.jpg",
      gallery: [
        "/images/products/royal-santal.jpg",
        "/images/products/dehnal-oud-cambodi.jpg"
      ],
      alt: "Raiyaan Royal Santal Attar concentrated perfume oil bottle in crystal and gold filigree"
    },
    variants: [
      {
        id: "var-rs-3",
        size: "3ml (Quarter Tola)",
        volume: "3ml / 0.1 fl. oz",
        price: 1990,
        sku: "RL-RS-3",
        stockQuantity: 40
      },
      {
        id: "var-rs-12",
        size: "12ml (One Tola)",
        volume: "12ml / 0.4 fl. oz",
        price: 4990,
        compareAtPrice: 5600,
        sku: "RL-RS-12",
        stockQuantity: 22
      }
    ],
    basePrice: 1990,
    compareAtPrice: 5600,
    stockQuantity: 62,
    isFeatured: true,
    isBestseller: true,
    isNewLaunch: false,
    isArtisanal: true,
    collections: ["the-signature-collection", "everyday-essentials"],
    seoTitle: "Royal Santal Attar Concentrated Perfume Oil | Raiyaan Luxury",
    seoDescription:
      "Experience Royal Santal Attar by Raiyaan Luxury. Pure, alcohol-free concentrated perfume oil with creamy sandalwood, cardamom, and golden amber.",
    faqs: [
      {
        question: "Can I layer Royal Santal Attar with my spray perfume?",
        answer:
          "Yes! Applying a small touch of Royal Santal Attar to your wrists before misting with an Eau de Parfum creates an extraordinary foundation that extends scent longevity by hours."
      }
    ]
  },
  {
    id: "prod-celestial-amber",
    slug: "celestial-amber",
    name: "Celestial Amber",
    tagline: "Luminous Benzoin, Warm Tonka & Madagascar Bourbon Vanilla",
    shortDescription:
      "A radiant oriental elixer glowing with warm amber resin, Sicilian blood orange, roasted tonka bean, and velvety bourbon vanilla.",
    fullDescription: [
      "Celestial Amber is warmth captured in crystal. Like liquid sunlight caught in dusk, this inviting Eau de Parfum caresses the senses with sensual sweetness and dark balsamic undertones.",
      "The brightness of sun-kissed citrus gives way to an intoxicating heart of melted benzoin and dry labdanum, cushioned on an enveloping bed of smoky tonka and vanilla."
    ],
    category: "Perfume",
    productType: "Eau de Parfum",
    fragranceFamily: "Amber & Oriental",
    gender: "Unisex",
    concentration: "Eau de Parfum (24% Fragrance Oil Concentration)",
    volume: "100ml / 3.4 fl. oz",
    notes: {
      top: ["Sicilian Blood Orange", "Bergamot", "Cinnamon Zest"],
      heart: ["Warm Benzoin Tears", "Amber Resin", "Smoked Labdanum"],
      base: ["Roasted Tonka Bean", "Madagascar Bourbon Vanilla", "Sandalwood"]
    },
    seasonRecommendation: ["Autumn", "Winter", "Cool Spring Evenings"],
    occasion: "Romantic Evenings, Festive Celebrations & Intimate Gatherings",
    sillage: "Intense",
    applicationInstructions: [
      "Mist evenly over pulse points and fabric scarf for exceptional longevity.",
      "Allow to warm naturally on skin."
    ],
    ingredients:
      "Alcohol Denat., Parfum, Aqua, Coumarin, Linalool, Limonene, Benzyl Cinnamate, Eugenol.",
    packagingDetails:
      "Heavy square beveled crystal bottle filled with glowing amber liquid, polished gold collar, and metallic gold base plaque.",
    images: {
      primary: "/images/products/celestial-amber.jpg",
      gallery: [
        "/images/products/celestial-amber.jpg",
        "/images/hero/hero-slide-2.jpg"
      ],
      alt: "Raiyaan Celestial Amber Eau de Parfum beveled crystal bottle with golden elixir"
    },
    variants: [
      {
        id: "var-ca-50",
        size: "50ml",
        volume: "50ml / 1.7 fl. oz",
        price: 3690,
        sku: "RL-CA-50",
        stockQuantity: 30
      },
      {
        id: "var-ca-100",
        size: "100ml",
        volume: "100ml / 3.4 fl. oz",
        price: 5990,
        compareAtPrice: 6700,
        sku: "RL-CA-100",
        stockQuantity: 25
      }
    ],
    basePrice: 3690,
    compareAtPrice: 6700,
    stockQuantity: 55,
    isFeatured: true,
    isBestseller: false,
    isNewLaunch: true,
    isArtisanal: false,
    collections: ["amber-nights", "everyday-essentials"],
    seoTitle: "Celestial Amber Eau de Parfum | Raiyaan Luxury",
    seoDescription:
      "Discover Celestial Amber by Raiyaan Luxury. A warm, luminous blend of golden amber, bourbon vanilla, and roasted tonka bean.",
    faqs: [
      {
        question: "Is this perfume overly sweet?",
        answer:
          "No, the sweetness of vanilla and tonka is counterbalanced by crisp blood orange and balsamic resins, delivering sophisticated richness rather than sugary heaviness."
      }
    ]
  },
  {
    id: "prod-nocturne-rose",
    slug: "nocturne-rose",
    name: "Nocturne Rose Extrait",
    tagline: "Velvet Crimson Rose Steeped in Smoked Incense & Dark Woods",
    shortDescription:
      "An enigmatic gothic floral. Deep Damask rose absolute shrouded in sacred church incense, blackcurrant, dark patchouli, and sensual cashmere musk.",
    fullDescription: [
      "Nocturne Rose rejects the conventional powdery rose archetype, presenting instead an intense, nocturnal blossom gathered in the shadows of midnight.",
      "The top opens with luscious blackcurrant nectar and pink pepper, giving way to an intense, velvety Turkish rose absolute steeped in Frankincense smoke, grounded by Indonesian patchouli and dark musk."
    ],
    category: "Perfume",
    productType: "Extrait de Parfum",
    fragranceFamily: "Floral & Musk",
    gender: "Unisex",
    concentration: "Extrait de Parfum (30% Fragrance Oil Concentration)",
    volume: "100ml / 3.4 fl. oz",
    notes: {
      top: ["Blackcurrant Nectar", "Pink Peppercorn", "Dewy Violet Leaves"],
      heart: ["Turkish Damask Rose Absolute", "Somali Frankincense", "Heliotrope"],
      base: ["Dark Indonesian Patchouli", "Cashmere Musk", "Birch Amber"]
    },
    seasonRecommendation: ["Autumn", "Winter", "Spring Evenings"],
    occasion: "Nocturnal Soirées, Date Nights & Avant-Garde Style",
    sillage: "Intense",
    applicationInstructions: [
      "Two sprays to the collarbone and wrists are sufficient for a hypnotic 14-hour presence."
    ],
    ingredients:
      "Alcohol Denat., Parfum, Aqua, Citronellol, Geraniol, Eugenol, Benzyl Alcohol, Farnesol.",
    packagingDetails:
      "Deep smoked ruby-black glass flacon with polished gold cap and gilded script label, presented on black satin.",
    images: {
      primary: "/images/products/nocturne-rose.jpg",
      gallery: [
        "/images/products/nocturne-rose.jpg",
        "/images/hero/hero-slide-3.jpg"
      ],
      alt: "Raiyaan Nocturne Rose Extrait perfume bottle on dark slate with velvet rose petals"
    },
    variants: [
      {
        id: "var-nr-50",
        size: "50ml",
        volume: "50ml / 1.7 fl. oz",
        price: 4490,
        compareAtPrice: 5000,
        sku: "RL-NR-50",
        stockQuantity: 20
      },
      {
        id: "var-nr-100",
        size: "100ml",
        volume: "100ml / 3.4 fl. oz",
        price: 7290,
        compareAtPrice: 8200,
        sku: "RL-NR-100",
        stockQuantity: 15
      }
    ],
    basePrice: 4490,
    compareAtPrice: 5000,
    stockQuantity: 35,
    isFeatured: true,
    isBestseller: false,
    isNewLaunch: true,
    isArtisanal: true,
    collections: ["the-signature-collection", "amber-nights"],
    seoTitle: "Nocturne Rose Extrait de Parfum | Raiyaan Luxury",
    seoDescription:
      "Shop Nocturne Rose Extrait by Raiyaan Luxury. An enigmatic blend of dark Turkish rose, sacred incense, and Indonesian patchouli.",
    faqs: [
      {
        question: "Is Nocturne Rose suitable for men?",
        answer:
          "Absolutely. The smoky incense, blackcurrant, and dark patchouli lend this fragrance an alluring unisex depth adored equally by men and women."
      }
    ]
  },
  {
    id: "prod-dehnal-oud-cambodi",
    slug: "dehn-al-oud-cambodi",
    name: "Dehn Al Oud Cambodi",
    tagline: "Pure Artisanal Cambodian Agarwood Oil — The Liquid Gold of Perfumery",
    shortDescription:
      "Undiluted, authentic concentrated attar oil extracted from mature wild Cambodian agarwood trees. Deep, woody, honeyed, and resinous.",
    fullDescription: [
      "Dehn Al Oud Cambodi is the crown jewel of Arabian perfumery. Sourced from wild agarwood trees aged over decades, this concentrated oil is slow-distilled using artisanal hydro-distillation techniques.",
      "Upon application, it releases an earthy, rich balsam that evolves into warm leather, sweet dried fruit nuance, and majestic smoky woods that last beyond 24 hours on skin."
    ],
    category: "Oud",
    productType: "Attar Oil",
    fragranceFamily: "Attars & Concentrated Oils",
    gender: "Unisex",
    concentration: "100% Pure Concentrated Oud Oil (Undiluted, Alcohol-Free)",
    volume: "3ml / 1 Tola",
    notes: {
      top: ["Aged Resinous Bark", "Honeyed Wild Fruit"],
      heart: ["Smoked Leather", "Dark Balsam", "Incense Smoke"],
      base: ["Noble Agarwood Heart", "Ancient Earth", "Deep Sweet Amber"]
    },
    seasonRecommendation: ["Year-round Tradition", "Special Ceremonies", "Winter"],
    occasion: "Prestigious Celebrations, Weddings, Friday Prayers & Heritage Moments",
    sillage: "Extremely Long-Lasting",
    applicationInstructions: [
      "Dip the glass rod lightly into the oil.",
      "Touch a micro-droplet to the inner wrist or back of the hand.",
      "Warm gently with opposing wrist and touch lightly to the beard, collar, or scarf."
    ],
    ingredients: "100% Pure Wild Aquilaria Crassna (Cambodian Agarwood) Oil.",
    packagingDetails:
      "Handmade ornate crystal tola flacon with 24k gold filigree Arabic calligraphy and jeweled crystal stopper, nestled in a hardwood velvet box.",
    images: {
      primary: "/images/products/dehnal-oud-cambodi.jpg",
      gallery: [
        "/images/products/dehnal-oud-cambodi.jpg",
        "/images/hero/hero-slide-2.jpg"
      ],
      alt: "Raiyaan Dehn Al Oud Cambodi pure attar tola bottle with gold Arabic calligraphy"
    },
    variants: [
      {
        id: "var-doc-3",
        size: "3ml (Quarter Tola)",
        volume: "3ml / 0.1 fl. oz",
        price: 6990,
        compareAtPrice: 7800,
        sku: "RL-DOC-3",
        stockQuantity: 12
      },
      {
        id: "var-doc-12",
        size: "12ml (One Tola)",
        volume: "12ml / 0.4 fl. oz",
        price: 22990,
        compareAtPrice: 26000,
        sku: "RL-DOC-12",
        stockQuantity: 6
      }
    ],
    basePrice: 6990,
    compareAtPrice: 7800,
    stockQuantity: 18,
    isFeatured: true,
    isBestseller: true,
    isNewLaunch: false,
    isArtisanal: true,
    collections: ["the-oud-collection"],
    seoTitle: "Dehn Al Oud Cambodi Pure Attar Oil | Raiyaan Luxury",
    seoDescription:
      "Discover authentic Dehn Al Oud Cambodi pure concentrated attar oil by Raiyaan Luxury. Rare wild Cambodian agarwood.",
    faqs: [
      {
        question: "Is this 100% pure agarwood oil?",
        answer:
          "Yes, this is genuine concentrated Cambodian agarwood oil produced without synthetic stabilizers, solvents, or alcohol."
      }
    ]
  },
  {
    id: "prod-cuir-imperial",
    slug: "cuir-imperial",
    name: "Cuir Imperial",
    tagline: "Full-Grain Tuscan Leather, Golden Saffron & Smoked Birch",
    shortDescription:
      "A dark, opulent leather fragrance. Saffron threads, wild raspberry, and smoked birch tar intertwined with rich leather and warm amber.",
    fullDescription: [
      "Cuir Imperial captures the aroma of bespoke leather goods in an Italian atelier bathed in afternoon sunlight. It exudes masculine confidence, sophistication, and unyielding distinction.",
      "A burst of rare saffron and tart red berries contrasts with the dark heart of birch smoke and thyme, settling into an unforgettable base of velvety suede and golden amber."
    ],
    category: "Perfume",
    productType: "Eau de Parfum",
    fragranceFamily: "Woody & Oud",
    gender: "Unisex",
    concentration: "Eau de Parfum (25% Fragrance Oil Concentration)",
    volume: "100ml / 3.4 fl. oz",
    notes: {
      top: ["Golden Saffron", "Wild Raspberry", "French Thyme"],
      heart: ["Smoked Birch Tar", "Jasmine Petals", "Olibanum"],
      base: ["Tuscan Leather", "Black Suede", "Amber Resin", "Cedar"]
    },
    seasonRecommendation: ["Autumn", "Winter", "Year-round Evenings"],
    occasion: "Bespoke Suiting, Executive Meetings & Confident Evenings",
    sillage: "Intense",
    applicationInstructions: [
      "Spray 2 times to the chest and 1 to each wrist for a commanding aura."
    ],
    ingredients:
      "Alcohol Denat., Parfum, Aqua, Saffron Extract, Linalool, Limonene, Evernia Prunastri.",
    packagingDetails:
      "Glossy black cylindrical glass flacon with diamond-knurled gold collar and gold monogram cap.",
    images: {
      primary: "/images/products/cuir-imperial.jpg",
      gallery: [
        "/images/products/cuir-imperial.jpg",
        "/images/products/safari-leather.jpg"
      ],
      alt: "Raiyaan Cuir Imperial perfume bottle on full grain leather with saffron threads"
    },
    variants: [
      {
        id: "var-ci-50",
        size: "50ml",
        volume: "50ml / 1.7 fl. oz",
        price: 3990,
        sku: "RL-CI-50",
        stockQuantity: 28
      },
      {
        id: "var-ci-100",
        size: "100ml",
        volume: "100ml / 3.4 fl. oz",
        price: 6690,
        compareAtPrice: 7400,
        sku: "RL-CI-100",
        stockQuantity: 20
      }
    ],
    basePrice: 3990,
    compareAtPrice: 7400,
    stockQuantity: 48,
    isFeatured: false,
    isBestseller: true,
    isNewLaunch: false,
    isArtisanal: false,
    collections: ["the-signature-collection", "everyday-essentials"],
    seoTitle: "Cuir Imperial Leather Perfume | Raiyaan Luxury",
    seoDescription:
      "Explore Cuir Imperial by Raiyaan Luxury. A prestigious fragrance featuring Tuscan leather, saffron, and smoked birch tar.",
    faqs: []
  },
  {
    id: "prod-aqua-solaris",
    slug: "aqua-solaris",
    name: "Aqua Solaris",
    tagline: "Sunlit Mediterranean Citrus, Salty Sea Breeze & Mineral Ambergris",
    shortDescription:
      "An invigorating high-luxury marine citrus. Calabrian bergamot, orange blossom, sea spray, and sun-bleached driftwood warmed by mineral ambergris.",
    fullDescription: [
      "Aqua Solaris is a breath of crisp Mediterranean elegance. Designed for warmer climates and daytime brilliance, it captures the scent of golden sunbeams dancing over azure coastal waters.",
      "Zesty bergamot, green mandarin, and neroli shimmer on top, leading into a refreshing marine heart of sea salt and rosemary, anchored by driftwood and clean musk."
    ],
    category: "Perfume",
    productType: "Eau de Parfum",
    fragranceFamily: "Fresh & Aquatic",
    gender: "Unisex",
    concentration: "Eau de Parfum (20% Fragrance Oil Concentration)",
    volume: "100ml / 3.4 fl. oz",
    notes: {
      top: ["Calabrian Bergamot", "Green Mandarin", "Neroli Blossoms"],
      heart: ["Ocean Spray Accord", "Rosemary", "Marine Cedar"],
      base: ["Mineral Ambergris", "Sun-Bleached Driftwood", "White Musk"]
    },
    seasonRecommendation: ["Spring", "Summer", "Warm Days"],
    occasion: "Morning Freshness, Resort Leisure, Golf & Daily Office Elegance",
    sillage: "Moderate",
    applicationInstructions: [
      "Spray liberally over neck, shoulders, and linen shirts for daytime radiance."
    ],
    ingredients:
      "Alcohol Denat., Parfum, Aqua, Limonene, Linalool, Citral, Geraniol.",
    packagingDetails:
      "Crystal ocean-blue gradient flacon with polished gold side plates and heavy gold stopper.",
    images: {
      primary: "/images/products/aqua-solaris.jpg",
      gallery: [
        "/images/products/aqua-solaris.jpg",
        "/images/hero/hero-slide-3.jpg"
      ],
      alt: "Raiyaan Aqua Solaris luxury perfume bottle with ocean blue gradient and gold details"
    },
    variants: [
      {
        id: "var-as-50",
        size: "50ml",
        volume: "50ml / 1.7 fl. oz",
        price: 3290,
        sku: "RL-AS-50",
        stockQuantity: 32
      },
      {
        id: "var-as-100",
        size: "100ml",
        volume: "100ml / 3.4 fl. oz",
        price: 5290,
        compareAtPrice: 5900,
        sku: "RL-AS-100",
        stockQuantity: 24
      }
    ],
    basePrice: 3290,
    compareAtPrice: 5900,
    stockQuantity: 56,
    isFeatured: false,
    isBestseller: true,
    isNewLaunch: true,
    isArtisanal: false,
    collections: ["everyday-essentials"],
    seoTitle: "Aqua Solaris Fresh Citrus Perfume | Raiyaan Luxury",
    seoDescription:
      "Discover Aqua Solaris by Raiyaan Luxury. Fresh Mediterranean bergamot, marine accords, and mineral ambergris.",
    faqs: []
  },
  {
    id: "prod-coffret-prestige",
    slug: "coffret-prestige-discovery-set",
    name: "Coffret Prestige Discovery Set",
    tagline: "Five Masterpiece Fragrances Presented in a Black Lacquered Keepsake Box",
    shortDescription:
      "The definitive luxury gift. Contains 5 x 10ml travel flacons featuring The Gate of Heaven, Oud Imperial, Celestial Amber, Nocturne Rose, and Cuir Imperial.",
    fullDescription: [
      "The Coffret Prestige is designed for the fragrance connoisseur who refuses to compromise. Presented in a hand-polished black lacquered presentation case lined with midnight velvet, each 10ml spray flacon is crafted with a gleaming gold atomizer.",
      "Explore the breadth of Raiyaan Luxury's signature compositions, transition between scents for day and evening, or present an unforgettable gesture of refinement to someone extraordinary."
    ],
    category: "Gift Set",
    productType: "Gift Set",
    fragranceFamily: "Woody & Oud",
    gender: "Unisex",
    concentration: "Extrait de Parfum & Eau de Parfum Assortment",
    volume: "5 x 10ml (50ml Total)",
    notes: {
      top: ["Saffron", "Calabrian Bergamot", "Madagascar Pink Pepper"],
      heart: ["Bulgarian Rose", "Cambodian Oud", "Smoked Labdanum"],
      base: ["Assam Agarwood", "Ambergris", "Madagascar Vanilla"]
    },
    seasonRecommendation: ["Year-round", "All Seasons"],
    occasion: "Gifting, Luxury Travel, Discovery & Anniversaries",
    sillage: "Extremely Long-Lasting",
    applicationInstructions: [
      "Enjoy individual travel atomizers on the go or layer complementary scents."
    ],
    ingredients: "Refer to individual fragrance cards included inside the presentation box.",
    packagingDetails:
      "Handcrafted wooden case with piano-black lacquer finish, gold metal hinges, gold foil embossed Raiyaan crest, and soft velvet fitted mold.",
    images: {
      primary: "/images/products/coffret-prestige.jpg",
      gallery: [
        "/images/products/coffret-prestige.jpg",
        "/images/hero/hero-slide-4.jpg"
      ],
      alt: "Raiyaan Coffret Prestige luxury discovery set with 5 perfume flacons in black lacquered box"
    },
    variants: [
      {
        id: "var-cp-box",
        size: "Complete Set (5 x 10ml)",
        volume: "50ml Total",
        price: 5990,
        compareAtPrice: 6900,
        sku: "RL-CP-5X10",
        stockQuantity: 30
      }
    ],
    basePrice: 5990,
    compareAtPrice: 6900,
    stockQuantity: 30,
    isFeatured: true,
    isBestseller: true,
    isNewLaunch: false,
    isArtisanal: true,
    collections: ["the-gift-collection", "the-signature-collection"],
    seoTitle: "Coffret Prestige Discovery Gift Set | Raiyaan Luxury",
    seoDescription:
      "Discover the Coffret Prestige Gift Set by Raiyaan Luxury. Five signature luxury perfumes in a black lacquered velvet keepsake box.",
    faqs: [
      {
        question: "Can I choose which perfumes go into the set?",
        answer:
          "The Coffret Prestige comes curated with our five most acclaimed signature creations: The Gate of Heaven, Oud Imperial, Celestial Amber, Nocturne Rose, and Cuir Imperial."
      }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isFeatured);
}

export function getBestsellers(): Product[] {
  return PRODUCTS.filter((p) => p.isBestseller);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductsByFamily(family: string): Product[] {
  return PRODUCTS.filter((p) => p.fragranceFamily.toLowerCase().includes(family.toLowerCase()));
}
