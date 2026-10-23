"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Heart, ShoppingBag, Check, ShieldCheck, Sparkles } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/config";
import { ProductVariant } from "@/lib/types";

export function QuickViewModal() {
  const { quickViewProduct, closeQuickView, addItem, toggleWishlist, isWishlisted } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedVariant(quickViewProduct.variants[0]);
      setQuantity(1);
      setActiveImageIdx(0);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct || !selectedVariant) return null;

  const currentPrice = selectedVariant.price;
  const comparePrice = selectedVariant.compareAtPrice;
  const wishlisted = isWishlisted(quickViewProduct.slug);

  const handleAddToCart = () => {
    addItem(quickViewProduct, selectedVariant, quantity);
    closeQuickView();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={closeQuickView}
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center p-4">
        {/* Modal Container */}
        <div className="inline-block w-full max-w-4xl bg-[#111111] border border-[rgba(200,164,93,0.35)] rounded-lg text-left overflow-hidden shadow-2xl transform transition-all relative my-8">
          {/* Close button */}
          <button
            type="button"
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-20 p-2 text-[#B9B4AA] hover:text-[#F7F3EB] bg-[#171717]/80 rounded-full border border-[rgba(200,164,93,0.2)] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Product Images */}
            <div className="p-6 bg-[#0B0B0B] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[rgba(200,164,93,0.2)]">
              <div className="relative aspect-square w-full rounded-md overflow-hidden border border-[rgba(200,164,93,0.2)] bg-[#141414]">
                <Image
                  src={quickViewProduct.images.gallery[activeImageIdx] || quickViewProduct.images.primary}
                  alt={quickViewProduct.name}
                  fill
                  className="object-cover transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Thumbnails */}
              {quickViewProduct.images.gallery.length > 1 && (
                <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
                  {quickViewProduct.images.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-16 h-16 rounded overflow-hidden border transition-all shrink-0 ${
                        activeImageIdx === idx
                          ? "border-[#E4C77E] shadow-[0_0_8px_rgba(200,164,93,0.5)]"
                          : "border-[rgba(200,164,93,0.2)] opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Details & Controls */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Category & Family Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full border border-[rgba(200,164,93,0.3)] text-[#E4C77E]">
                    {quickViewProduct.fragranceFamily}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(quickViewProduct.slug)}
                    className="text-[#B9B4AA] hover:text-[#E4C77E] transition-colors p-1"
                    aria-label="Save to Wishlist"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        wishlisted ? "fill-[#C8A45D] text-[#C8A45D]" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Title */}
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#F7F3EB] tracking-wide">
                    {quickViewProduct.name}
                  </h2>
                  <p className="text-xs text-[#C8A45D] tracking-[0.1em] uppercase mt-1">
                    {quickViewProduct.concentration}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-semibold text-[#E4C77E]">
                    {formatINR(currentPrice)}
                  </span>
                  {comparePrice && (
                    <span className="text-sm text-[#B9B4AA] line-through">
                      {formatINR(comparePrice)}
                    </span>
                  )}
                  <span className="text-[10px] text-[#B9B4AA]">(Inclusive of all taxes)</span>
                </div>

                {/* Short Description */}
                <p className="text-xs text-[#B9B4AA] leading-relaxed">
                  {quickViewProduct.shortDescription}
                </p>

                {/* Notes Summary */}
                <div className="p-3 bg-[#151515] border border-[rgba(200,164,93,0.18)] rounded space-y-1.5 text-xs">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#C8A45D]">
                    Olfactory Pyramid
                  </p>
                  <div className="text-[11px] text-[#B9B4AA] space-y-0.5">
                    <p>
                      <strong className="text-[#F7F3EB]">Top:</strong> {quickViewProduct.notes.top.join(", ")}
                    </p>
                    <p>
                      <strong className="text-[#F7F3EB]">Heart:</strong> {quickViewProduct.notes.heart.join(", ")}
                    </p>
                    <p>
                      <strong className="text-[#F7F3EB]">Base:</strong> {quickViewProduct.notes.base.join(", ")}
                    </p>
                  </div>
                </div>

                {/* Variant Selection */}
                {quickViewProduct.variants.length > 1 && (
                  <div>
                    <label className="block text-[11px] text-[#B9B4AA] uppercase tracking-[0.12em] mb-2">
                      Select Flacon Volume
                    </label>
                    <div className="flex gap-2">
                      {quickViewProduct.variants.map((v) => (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setSelectedVariant(v)}
                          className={`px-3.5 py-1.5 rounded text-xs border tracking-wider transition-colors ${
                            selectedVariant.id === v.id
                              ? "border-[#E4C77E] bg-[rgba(200,164,93,0.15)] text-[#E4C77E] font-medium"
                              : "border-[rgba(200,164,93,0.25)] text-[#B9B4AA] hover:border-[#E4C77E]"
                          }`}
                        >
                          {v.size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[rgba(200,164,93,0.15)] space-y-3">
                <div className="flex gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[rgba(200,164,93,0.3)] rounded bg-[#171717] px-2 py-1">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2 text-sm text-[#B9B4AA] hover:text-[#F7F3EB]"
                    >
                      -
                    </button>
                    <span className="px-2 text-xs font-semibold text-[#F7F3EB]">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(selectedVariant.stockQuantity, quantity + 1))}
                      className="px-2 text-sm text-[#B9B4AA] hover:text-[#F7F3EB]"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="btn-gold flex-1 py-3 px-4 rounded text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag • {formatINR(currentPrice * quantity)}</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <Link
                    href={`/product/${quickViewProduct.slug}`}
                    onClick={closeQuickView}
                    className="text-[#E4C77E] hover:underline flex items-center gap-1 text-[11px] tracking-wider uppercase font-medium"
                  >
                    <span>View Full Details & Fragrance Chemistry</span>
                    <span>→</span>
                  </Link>
                  <span className="text-[11px] text-[#B9B4AA]/70 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C8A45D]" />
                    In Stock ({selectedVariant.stockQuantity})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
