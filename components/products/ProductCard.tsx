"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { Product } from "@/lib/types";
import { formatINR } from "@/lib/config";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, openQuickView, toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(product.slug);

  const defaultVariant = product.variants[0];

  return (
    <div className="group relative bg-[#121212] border border-[rgba(200,164,93,0.2)] hover:border-[rgba(200,164,93,0.5)] rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.7)] flex flex-col justify-between">
      {/* Top Image Container */}
      <div className="relative aspect-square w-full bg-[#171717] overflow-hidden">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images.primary}
            alt={product.images.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isBestseller && (
            <span className="text-[9px] uppercase tracking-[0.16em] font-semibold px-2 py-0.5 rounded bg-[#C8A45D] text-[#080808]">
              Bestseller
            </span>
          )}
          {product.isArtisanal && (
            <span className="text-[9px] uppercase tracking-[0.16em] font-medium px-2 py-0.5 rounded bg-[#171717]/90 border border-[rgba(200,164,93,0.4)] text-[#E4C77E]">
              Artisanal
            </span>
          )}
          {product.isNewLaunch && (
            <span className="text-[9px] uppercase tracking-[0.16em] font-medium px-2 py-0.5 rounded bg-white/10 backdrop-blur-sm border border-white/20 text-[#F7F3EB]">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.slug);
          }}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#121212]/80 backdrop-blur-sm border border-[rgba(200,164,93,0.25)] text-[#B9B4AA] hover:text-[#E4C77E] hover:border-[#E4C77E] transition-all"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wishlisted ? "fill-[#C8A45D] text-[#C8A45D]" : ""
            }`}
          />
        </button>

        {/* Hover Quick Actions */}
        <div className="absolute inset-x-3 bottom-3 z-10 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            type="button"
            onClick={() => openQuickView(product)}
            className="flex-1 py-2 px-3 rounded bg-[#1A1A1A]/90 backdrop-blur-sm border border-[rgba(200,164,93,0.3)] hover:border-[#E4C77E] text-[11px] uppercase tracking-[0.12em] text-[#E4C77E] flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
          <button
            type="button"
            onClick={() => addItem(product, defaultVariant, 1)}
            className="btn-gold py-2 px-3 rounded text-[11px] flex items-center justify-center gap-1.5"
            aria-label={`Add ${product.name} to bag`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Fragrance Family & Concentration */}
          <div className="flex items-center justify-between text-[10px] tracking-[0.14em] uppercase text-[#B9B4AA]/80 mb-1">
            <span>{product.fragranceFamily}</span>
            <span>{product.variants[0]?.size}</span>
          </div>

          {/* Product Title */}
          <Link href={`/product/${product.slug}`} className="block group-hover:text-[#E4C77E] transition-colors">
            <h3 className="font-serif text-lg sm:text-xl text-[#F7F3EB] font-medium tracking-wide">
              {product.name}
            </h3>
          </Link>

          {/* Key Olfactive Notes Preview */}
          <p className="text-[11px] text-[#B9B4AA] line-clamp-1 mt-1 font-light">
            Notes: {[...product.notes.top, ...product.notes.heart].slice(0, 3).join(", ")}
          </p>
        </div>

        {/* Bottom Price & Link */}
        <div className="pt-3 mt-3 border-t border-[rgba(200,164,93,0.14)] flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold text-[#E4C77E]">
              {formatINR(product.basePrice)}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-[#B9B4AA]/60 line-through">
                {formatINR(product.compareAtPrice)}
              </span>
            )}
          </div>

          <span className="text-[10px] uppercase tracking-[0.12em] text-[#C8A45D] group-hover:translate-x-0.5 transition-transform">
            Discover →
          </span>
        </div>
      </div>
    </div>
  );
}
