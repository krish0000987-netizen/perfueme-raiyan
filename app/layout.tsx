import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { QuickViewModal } from "@/components/products/QuickViewModal";
import { SearchModal } from "@/components/navigation/SearchModal";
import { ToastNotification } from "@/components/ui/ToastNotification";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { BRAND_CONFIG } from "@/lib/config";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raiyaanluxury.com"),
  title: {
    template: "%s | Raiyaan Luxury — The Gate of Heaven",
    default: "Raiyaan Luxury — The Gate of Heaven | Niche Perfumes, Attars & Oud",
  },
  description:
    "An internationally renowned niche perfumery embodying the sophistication of Parisian haute parfumerie, the timeless depth of Arabian oud, and an uncompromising dedication to bespoke craftsmanship.",
  keywords: [
    "Raiyaan Luxury",
    "The Gate of Heaven",
    "Luxury Perfume India",
    "Pure Oud Oil",
    "Artisanal Attar",
    "Cambodian Oud",
    "Niche Fragrance House",
    "Indore Perfume House",
  ],
  authors: [{ name: "Raiyaan Luxury" }],
  openGraph: {
    title: "Raiyaan Luxury — The Gate of Heaven",
    description:
      "Exclusive Haute Parfumerie, Pure Cambodian Oud, and Concentrated Attars. Crafted for Eternity.",
    url: "https://raiyaanluxury.com",
    siteName: "Raiyaan Luxury",
    images: [
      {
        url: "/images/hero/hero-slide-1.jpg",
        width: 1200,
        height: 630,
        alt: "Raiyaan Luxury Flagship Perfume Flacon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#F7F3EB] font-sans selection:bg-[#C8A45D] selection:text-[#080808]">
        <CartProvider>
          {/* Top Announcement Bar & Sticky Main Header */}
          <Header />

          {/* Page Body */}
          <main className="flex-1 w-full">{children}</main>

          {/* Footer Across All Pages */}
          <Footer />

          {/* Global Interactive Overlays */}
          <CartDrawer />
          <QuickViewModal />
          <SearchModal />
          <ToastNotification />
          <WhatsAppFloatingButton />
        </CartProvider>
      </body>
    </html>
  );
}
