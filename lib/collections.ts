import { Collection } from "./types";
import { PRODUCTS } from "./products";

export const COLLECTIONS: Collection[] = [
  {
    id: "col-signature",
    slug: "the-signature-collection",
    title: "The Signature Collection",
    subtitle: "The Quintessence of Raiyaan Luxury",
    description:
      "Our most celebrated creations, embodying the pinnacle of artisanal craftsmanship, high oil concentrations, and transcendent presence.",
    heroImage: "/images/collections/collection-signature.jpg",
    featuredProductSlugs: [
      "the-gate-of-heaven",
      "royal-santal-attar",
      "nocturne-rose",
      "cuir-imperial",
      "coffret-prestige-discovery-set"
    ],
    categoryBadge: "Signature"
  },
  {
    id: "col-oud",
    slug: "the-oud-collection",
    title: "The Oud Collection",
    subtitle: "Sacred Woods & Rare Resins",
    description:
      "A tribute to the liquid gold of Arabian and Indian perfumery. Sourced from aged agarwood forests, distilled with meticulous care, and blended into masterworks.",
    heroImage: "/images/collections/collection-oud.jpg",
    featuredProductSlugs: [
      "the-gate-of-heaven",
      "oud-imperial",
      "dehn-al-oud-cambodi"
    ],
    categoryBadge: "Noble Woods"
  },
  {
    id: "col-amber",
    slug: "amber-nights",
    title: "Amber Nights",
    subtitle: "Sensual Warmth & Balsamic Depth",
    description:
      "Hypnotic, warm compositions centered on rich benzoin, Madagascar vanilla, tonka bean, and golden amber resins crafted for evening allure.",
    heroImage: "/images/collections/collection-amber.jpg",
    featuredProductSlugs: [
      "celestial-amber",
      "nocturne-rose"
    ],
    categoryBadge: "Oriental & Amber"
  },
  {
    id: "col-gifting",
    slug: "the-gift-collection",
    title: "The Gift Collection",
    subtitle: "Refinement in Every Detail",
    description:
      "Exceptional presentation boxes lined in black velvet, bespoke coffrets, and sets designed to make every milestone unforgettable.",
    heroImage: "/images/collections/collection-gifting.jpg",
    featuredProductSlugs: [
      "coffret-prestige-discovery-set",
      "the-gate-of-heaven"
    ],
    categoryBadge: "Prestige Gifting"
  },
  {
    id: "col-essentials",
    slug: "everyday-essentials",
    title: "Everyday Essentials",
    subtitle: "Effortless Elegance for Daily Life",
    description:
      "Versatile, sophisticated fragrances crafted for day-to-day distinction, from fresh coastal citrus to creamy sandalwood attar.",
    heroImage: "/images/collections/collection-fresh.jpg",
    featuredProductSlugs: [
      "aqua-solaris",
      "royal-santal-attar",
      "oud-imperial",
      "celestial-amber"
    ],
    categoryBadge: "Day & Evening"
  }
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function getProductsForCollection(slug: string) {
  const collection = getCollectionBySlug(slug);
  if (!collection) return [];
  return PRODUCTS.filter((p) => collection.featuredProductSlugs.includes(p.slug));
}
