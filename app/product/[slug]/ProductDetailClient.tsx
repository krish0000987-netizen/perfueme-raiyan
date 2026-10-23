"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, ProductVariant } from "@/lib/types";
import { formatINR, getWhatsAppLink } from "@/lib/config";
import { useCart } from "@/lib/cart-context";
import { ProductCard } from "@/components/products/ProductCard";
import {
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const { addItem, toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(product.slug);

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<string>("overview");

  // Accordion state for info sections
  const [expandedSection, setExpandedSection] = useState<string | null>("notes");

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const currentPrice = selectedVariant.price;
  const comparePrice = selectedVariant.compareAtPrice;

  const currentImage =
    product.images.gallery[activeImageIdx] || product.images.primary;

  return (
    <div className="w-full bg-[#080808] text-[#F7F3EB] pt-6 pb-28">
      {/* 1. Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center gap-2 text-xs text-[#B9B4AA] font-light" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E4C77E] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C8A45D]" />
          <Link href="/shop" className="hover:text-[#E4C77E] transition-colors">
            Shop All
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C8A45D]" />
          <span className="text-[#B9B4AA]">{product.category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#C8A45D]" />
          <span className="text-[#E4C77E] font-medium">{product.name}</span>
        </nav>
      </div>

      {/* 2. Main Product Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Gallery & Zoom Showcase */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full bg-[#121212] rounded-lg overflow-hidden border border-[rgba(200,164,93,0.3)] shadow-2xl group">
              <Image
                src={currentImage}
                alt={product.images.alt}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Wishlist Button on Image */}
              <button
                type="button"
                onClick={() => toggleWishlist(product.slug)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#0D0D0D]/80 backdrop-blur-sm border border-[rgba(200,164,93,0.3)] text-[#B9B4AA] hover:text-[#E4C77E] hover:border-[#E4C77E] transition-colors"
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart
                  className={`w-5 h-5 ${
                    wishlisted ? "fill-[#C8A45D] text-[#C8A45D]" : ""
                  }`}
                />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            {product.images.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-20 h-20 rounded-md overflow-hidden border transition-all shrink-0 bg-[#141414] ${
                      activeImageIdx === idx
                        ? "border-[#E4C77E] shadow-[0_0_12px_rgba(200,164,93,0.5)] ring-1 ring-[#E4C77E]"
                        : "border-[rgba(200,164,93,0.2)] opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Buy Box */}
          <div className="space-y-6">
            {/* Badges & Family */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[rgba(200,164,93,0.4)] text-[#E4C77E] bg-[#141414]">
                {product.fragranceFamily}
              </span>
              <span className="text-xs text-[#B9B4AA]">
                SKU: <span className="font-mono text-[#F7F3EB]">{selectedVariant.sku}</span>
              </span>
            </div>

            {/* Product Title & Tagline */}
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F7F3EB] uppercase tracking-wide">
                {product.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#C8A45D] tracking-[0.14em] uppercase mt-2 font-medium">
                {product.concentration} • {product.gender}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 bg-[#111111] border border-[rgba(200,164,93,0.22)] rounded-md">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-semibold text-[#E4C77E]">
                  {formatINR(currentPrice)}
                </span>
                {comparePrice && (
                  <span className="text-base text-[#B9B4AA]/60 line-through">
                    {formatINR(comparePrice)}
                  </span>
                )}
                <span className="text-xs text-[#B9B4AA]">
                  (Inclusive of GST & all Indian taxes)
                </span>
              </div>
              <p className="text-[11px] text-[#E4C77E] mt-1.5 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                <span>Complimentary insured shipping on orders above ₹4,999 across India</span>
              </p>
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="space-y-2.5 pt-2">
                <label className="block text-xs uppercase tracking-[0.14em] text-[#E4C77E] font-medium">
                  Flacon Volume & Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 rounded text-xs border tracking-wider transition-all ${
                        selectedVariant.id === v.id
                          ? "border-[#E4C77E] bg-[rgba(200,164,93,0.18)] text-[#E4C77E] font-medium shadow-[0_0_10px_rgba(200,164,93,0.2)]"
                          : "border-[rgba(200,164,93,0.25)] text-[#B9B4AA] hover:border-[#E4C77E]"
                      }`}
                    >
                      <span>{v.size}</span>
                      <span className="ml-2 text-[10px] text-[#C8A45D]">
                        ({formatINR(v.price)})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Purchase Actions */}
            <div className="pt-3 space-y-4">
              <div className="flex gap-4">
                {/* Quantity */}
                <div className="flex items-center border border-[rgba(200,164,93,0.3)] rounded bg-[#141414] px-3 py-2">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 text-sm text-[#B9B4AA] hover:text-[#F7F3EB]"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-semibold text-[#F7F3EB]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity(
                        Math.min(selectedVariant.stockQuantity, quantity + 1)
                      )
                    }
                    className="px-2 text-sm text-[#B9B4AA] hover:text-[#F7F3EB]"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="btn-gold flex-1 py-3.5 px-6 rounded text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    Add to Bag • {formatINR(currentPrice * quantity)}
                  </span>
                </button>
              </div>

              {/* Direct WhatsApp Concierge Order Button */}
              <a
                href={getWhatsAppLink(
                  `Hello Raiyaan Luxury Concierge, I would like to inquire about ordering ${product.name} (${selectedVariant.size}) priced at ${formatINR(currentPrice)}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded text-xs font-semibold uppercase tracking-[0.14em] bg-[#141414] border border-[rgba(200,164,93,0.3)] hover:border-[#E4C77E] text-[#E4C77E] flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire / Order via WhatsApp Concierge</span>
              </a>
            </div>

            {/* Inventory & Authenticity Guarantees */}
            <div className="pt-4 border-t border-[rgba(200,164,93,0.16)] grid grid-cols-2 gap-3 text-xs text-[#B9B4AA]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
                <span>Stock: {selectedVariant.stockQuantity} flacons remaining</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C8A45D]" />
                <span>100% Authentic Artisanal Formulation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. The 10 Product Information Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[rgba(200,164,93,0.2)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8A45D]">
              HAUTE PARFUMERIE SPECIFICATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-1">
              Fragrance Dossier
            </h2>
          </div>

          <div className="space-y-4">
            {/* 1. Product Overview */}
            <div className="p-6 bg-[#111111] border border-[rgba(200,164,93,0.2)] rounded-md">
              <h3 className="font-serif text-xl text-[#E4C77E] mb-3 uppercase tracking-wider">
                1. Product Overview
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
                {product.fullDescription.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* 2. Fragrance Notes Pyramid */}
            <div className="p-6 bg-[#111111] border border-[rgba(200,164,93,0.2)] rounded-md">
              <h3 className="font-serif text-xl text-[#E4C77E] mb-4 uppercase tracking-wider">
                2. Olfactory Pyramid (Notes)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-[#161616] border border-[rgba(200,164,93,0.15)] rounded">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A45D] font-medium block mb-2">
                    Top Notes (0-20 min)
                  </span>
                  <ul className="text-xs text-[#F7F3EB] space-y-1">
                    {product.notes.top.map((note, i) => (
                      <li key={i}>• {note}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#161616] border border-[rgba(200,164,93,0.15)] rounded">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A45D] font-medium block mb-2">
                    Heart Notes (20 min - 4 hr)
                  </span>
                  <ul className="text-xs text-[#F7F3EB] space-y-1">
                    {product.notes.heart.map((note, i) => (
                      <li key={i}>• {note}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#161616] border border-[rgba(200,164,93,0.15)] rounded">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A45D] font-medium block mb-2">
                    Base Notes (4-18+ hr)
                  </span>
                  <ul className="text-xs text-[#F7F3EB] space-y-1">
                    {product.notes.base.map((note, i) => (
                      <li key={i}>• {note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Fragrance Family & Character */}
            <div className="p-6 bg-[#111111] border border-[rgba(200,164,93,0.2)] rounded-md space-y-2">
              <h3 className="font-serif text-xl text-[#E4C77E] uppercase tracking-wider">
                3. Fragrance Family & Profile
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed">
                <strong className="text-[#F7F3EB]">Classification:</strong> {product.fragranceFamily}
                <br />
                <strong className="text-[#F7F3EB]">Sillage & Projection:</strong> {product.sillage}
                <br />
                <strong className="text-[#F7F3EB]">Recommended Season:</strong>{" "}
                {product.seasonRecommendation.join(", ")}
                <br />
                <strong className="text-[#F7F3EB]">Occasion:</strong> {product.occasion}
              </p>
            </div>

            {/* 4. Concentration and Volume */}
            <div className="p-6 bg-[#111111] border border-[rgba(200,164,93,0.2)] rounded-md space-y-2">
              <h3 className="font-serif text-xl text-[#E4C77E] uppercase tracking-wider">
                4. Concentration & Flacon Volume
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed">
                <strong className="text-[#F7F3EB]">Concentration:</strong> {product.concentration}
                <br />
                <strong className="text-[#F7F3EB]">Available Sizes:</strong>{" "}
                {product.variants.map((v) => `${v.size} (${v.volume})`).join(" or ")}
              </p>
            </div>

            {/* 5. Application Instructions */}
            <div className="p-6 bg-[#111111] border border-[rgba(200,164,93,0.2)] rounded-md space-y-2">
              <h3 className="font-serif text-xl text-[#E4C77E] uppercase tracking-wider">
                5. How to Apply
              </h3>
              <ul className="text-xs sm:text-sm text-[#B9B4AA] space-y-1.5 list-disc list-inside font-light">
                {product.applicationInstructions.map((inst, i) => (
                  <li key={i}>{inst}</li>
                ))}
              </ul>
            </div>

            {/* 6. Ingredients and Allergen Information */}
            <div className="p-6 bg-[#111111] border border-[rgba(200,164,93,0.2)] rounded-md space-y-2">
              <h3 className="font-serif text-xl text-[#E4C77E] uppercase tracking-wider">
                6. Ingredients & Allergen Transparency
              </h3>
              <p className="text-xs text-[#B9B4AA] font-mono leading-relaxed bg-[#151515] p-3 rounded border border-[rgba(200,164,93,0.12)]">
                {product.ingredients}
              </p>
              <p className="text-[11px] text-[#B9B4AA]/70">
                Crafted in accordance with IFRA (International Fragrance Association) safety standards. For sensitive skin, perform a patch test prior to broader wear.
              </p>
            </div>

            {/* 7. Packaging Details */}
            <div className="p-6 bg-[#111111] border border-[rgba(200,164,93,0.2)] rounded-md space-y-2">
              <h3 className="font-serif text-xl text-[#E4C77E] uppercase tracking-wider">
                7. Packaging & Presentation
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed">
                {product.packagingDetails}
              </p>
            </div>

            {/* 8. Shipping & Delivery */}
            <div className="p-6 bg-[#111111] border border-[rgba(200,164,93,0.2)] rounded-md space-y-2">
              <h3 className="font-serif text-xl text-[#E4C77E] uppercase tracking-wider">
                8. Shipping, Delivery & Returns
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed">
                Dispatched from our boutique at Rajwada, Indore. We utilize specialized insured temperature-controlled couriers across all tier 1 and tier 2 cities in India. Delivery typically occurs within 3 to 6 business days. Due to the personal hygiene nature of fine fragrance, unopened flacons with unbroken security cellophane are eligible for exchange within 7 days.
              </p>
            </div>

            {/* 9. Frequently Asked Questions */}
            {product.faqs && product.faqs.length > 0 && (
              <div className="p-6 bg-[#111111] border border-[rgba(200,164,93,0.2)] rounded-md space-y-4">
                <h3 className="font-serif text-xl text-[#E4C77E] uppercase tracking-wider">
                  9. Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {product.faqs.map((f, i) => (
                    <div key={i} className="p-3 bg-[#151515] rounded">
                      <p className="text-xs font-semibold text-[#F7F3EB]">{f.question}</p>
                      <p className="text-xs text-[#B9B4AA] mt-1 font-light">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Section 10: Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(200,164,93,0.2)]">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D]">
                COMPLEMENTARY CREATIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-1">
                You May Also Admire
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs text-[#E4C77E] hover:underline uppercase tracking-wider"
            >
              Shop All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* 5. Mobile Sticky Add-to-Cart Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0E0E0E]/95 backdrop-blur-md border-t border-[rgba(200,164,93,0.3)] p-3 px-4 flex items-center justify-between shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
        <div>
          <p className="font-serif text-sm text-[#F7F3EB] truncate max-w-[150px]">
            {product.name}
          </p>
          <p className="text-xs font-semibold text-[#E4C77E]">
            {formatINR(currentPrice * quantity)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={getWhatsAppLink(`Hello Raiyaan Luxury Concierge, I would like to order ${product.name} (${selectedVariant.size}) priced at ${formatINR(currentPrice)}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center"
            aria-label="Order on WhatsApp"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12c0 1.984.531 3.844 1.453 5.469L2 22l4.672-1.438A9.91 9.91 0 0 0 12.031 22c5.516 0 10-4.484 10-10s-4.484-10-10-10zm0 18.297c-1.703 0-3.328-.469-4.734-1.297l-.344-.203-3.156.969.984-3.078-.219-.359a8.21 8.21 0 0 1-1.281-4.328c0-4.563 3.719-8.281 8.281-8.281 4.563 0 8.281 3.719 8.281 8.281 0 4.563-3.719 8.297-8.281 8.297zm4.547-6.203c-.25-.125-1.469-.719-1.703-.797-.219-.094-.375-.125-.531.125-.156.25-.609.797-.75.953-.141.156-.281.172-.531.047-.25-.125-1.062-.391-2.016-1.25-.75-.672-1.25-1.5-1.391-1.75-.141-.25-.016-.391.109-.516.109-.109.25-.281.375-.422.125-.141.172-.25.25-.422.078-.172.047-.328-.016-.453-.063-.125-.531-1.281-.734-1.75-.188-.453-.391-.391-.531-.391h-.453c-.156 0-.422.063-.641.312-.219.25-.844.828-.844 2.016s.859 2.344.984 2.5c.125.156 1.703 2.609 4.125 3.656.578.25 1.031.406 1.391.516.594.188 1.125.156 1.547.094.469-.078 1.469-.609 1.672-1.203.219-.594.219-1.094.156-1.203-.063-.109-.219-.172-.469-.297z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={handleAddToCart}
            className="btn-gold py-2.5 px-4 sm:px-5 rounded text-xs font-semibold flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
}
