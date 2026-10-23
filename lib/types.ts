export type FragranceFamily =
  | "Woody & Oud"
  | "Amber & Oriental"
  | "Fresh & Aquatic"
  | "Floral & Musk"
  | "Sweet & Gourmand"
  | "Attars & Concentrated Oils";

export type ProductType = "Eau de Parfum" | "Extrait de Parfum" | "Attar Oil" | "Gift Set";

export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface ProductVariant {
  id: string;
  size: string;
  volume: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  stockQuantity: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  category: "Perfume" | "Attar" | "Oud" | "Gift Set";
  productType: ProductType;
  fragranceFamily: FragranceFamily;
  gender: "Unisex" | "Masculine" | "Feminine";
  concentration: string;
  volume: string;
  notes: FragranceNotes;
  seasonRecommendation: string[];
  occasion: string;
  sillage: "Moderate" | "Intense" | "Extremely Long-Lasting";
  applicationInstructions: string[];
  ingredients: string;
  packagingDetails: string;
  images: {
    primary: string;
    gallery: string[];
    alt: string;
  };
  variants: ProductVariant[];
  basePrice: number;
  compareAtPrice?: number;
  stockQuantity: number;
  isFeatured: boolean;
  isBestseller: boolean;
  isNewLaunch: boolean;
  isArtisanal: boolean;
  collections: string[];
  seoTitle: string;
  seoDescription: string;
  faqs?: { question: string; answer: string }[];
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  featuredProductSlugs: string[];
  categoryBadge: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Fragrance Mastery" | "Oud Heritage" | "Attars & Oils" | "Style & Discovery";
  readTime: string;
  publishedDate: string;
  author: string;
  heroImage: string;
  excerpt: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
  relatedArticlesSlugs: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  fragranceFamily: string;
  concentration: string;
  selectedVariant: ProductVariant;
  quantity: number;
}
