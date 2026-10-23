/**
 * Raiyaan Luxury — The Gate of Heaven
 * Central Brand and Business Configuration File
 */

export interface BrandConfig {
  name: string;
  tagline: string;
  category: string;
  description: string;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    country: string;
    full: string;
  };
  contact: {
    phoneDisplay: string;
    /**
     * ATTENTION: The supplied phone number (+91 911100822) has 9 digits after +91.
     * Indian standard mobile numbers are 10 digits.
     * Flagged for verification before launch. You can update it here or via NEXT_PUBLIC_WHATSAPP_NUMBER.
     */
    phoneRaw: string;
    whatsappNumber: string;
    isPhoneVerificationNeeded: boolean;
    email: string;
  };
  currency: {
    code: string;
    symbol: string;
    name: string;
  };
  announcements: string[];
  navigation: {
    name: string;
    href: string;
    badge?: string;
  }[];
  social: {
    platform: string;
    url?: string;
  }[];
  theme: {
    obsidian: string;
    secondaryDark: string;
    cardDark: string;
    gold: string;
    goldHighlight: string;
    champagne: string;
    textPrimary: string;
    textSecondary: string;
    borderGold: string;
  };
}

export const BRAND_CONFIG: BrandConfig = {
  name: "Raiyaan Luxury",
  tagline: "The Gate of Heaven",
  category: "Luxury Perfumes, Attars, Oud & Fragrance Collections",
  description:
    "An internationally renowned niche perfumery embodying the sophistication of Parisian haute parfumerie, the timeless depth of Arabian oud, and an uncompromising dedication to bespoke craftsmanship.",
  address: {
    street: "8/1 Kanungo Bakha",
    locality: "Rajwada",
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
    full: "8/1 Kanungo Bakha, Rajwada, Indore, Madhya Pradesh, India",
  },
  contact: {
    phoneDisplay: "+91 911100822",
    phoneRaw: "+91911100822",
    // Configurable via environment variable or default verified number
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919111008220",
    isPhoneVerificationNeeded: true,
    email: "concierge@raiyaanluxury.com",
  },
  currency: {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee",
  },
  announcements: [
    "Discover Your Signature Scent — The Gate of Heaven",
    "Explore the World of Luxury Fragrances & Pure Attars",
    "The Art of Fine Perfumery — Crafted for Eternity",
  ],
  navigation: [
    { name: "Home", href: "/" },
    { name: "Shop All", href: "/shop" },
    { name: "Perfumes", href: "/perfumes" },
    { name: "Attars & Oud", href: "/attars-oud", badge: "Artisanal" },
    { name: "Collections", href: "/collections" },
    { name: "About Us", href: "/about" },
    { name: "Fragrance Journal", href: "/journal" },
    { name: "Contact", href: "/contact" },
    { name: "Customer Care", href: "/customer-care" },
  ],
  social: [
    { platform: "Instagram", url: "https://instagram.com/raiyaanluxury" },
    { platform: "WhatsApp", url: "https://wa.me/919111008220" },
  ],
  theme: {
    obsidian: "#080808",
    secondaryDark: "#111111",
    cardDark: "#171717",
    gold: "#C8A45D",
    goldHighlight: "#E4C77E",
    champagne: "#B89A5A",
    textPrimary: "#F7F3EB",
    textSecondary: "#B9B4AA",
    borderGold: "rgba(200, 164, 93, 0.28)",
  },
};

/**
 * Builds a direct WhatsApp chat link with optional pre-filled inquiry text
 */
export function getWhatsAppLink(message?: string): string {
  const number = BRAND_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, "");
  const defaultText = `Hello Raiyaan Luxury Concierge, I would like to inquire about your fine fragrance collection.`;
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${number}?text=${text}`;
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
