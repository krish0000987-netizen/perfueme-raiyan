"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS } from "@/lib/products";
import { formatINR } from "@/lib/config";

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, openQuickView } = useCart();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isSearchOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsSearchOpen]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return PRODUCTS.filter((p) => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchFamily = p.fragranceFamily.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      const matchDescription = p.shortDescription.toLowerCase().includes(q);
      const matchNotes = [
        ...p.notes.top,
        ...p.notes.heart,
        ...p.notes.base,
      ].some((note) => note.toLowerCase().includes(q));

      return matchName || matchFamily || matchCategory || matchDescription || matchNotes;
    });
  }, [query]);

  const popularSearches = ["Cambodian Oud", "Rose", "Sandalwood", "Amber", "Extrait", "Saffron", "Attar"];

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="min-h-screen px-4 text-center flex flex-col items-center pt-16 sm:pt-24 p-4 relative z-10">
        <div className="w-full max-w-2xl bg-[#0F0F0F] border border-[rgba(200,164,93,0.35)] rounded-lg p-6 sm:p-8 text-left shadow-2xl relative">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-4 right-4 p-2 text-[#B9B4AA] hover:text-[#F7F3EB]"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Search Input Bar */}
          <div className="relative mb-6">
            <Search className="w-5 h-5 text-[#C8A45D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by perfume name, note (e.g. Saffron, Oud, Rose)..."
              className="w-full bg-[#171717] border border-[rgba(200,164,93,0.3)] rounded-md pl-11 pr-10 py-3.5 text-sm text-[#F7F3EB] placeholder-[#B9B4AA]/60 focus:outline-none focus:border-[#E4C77E] transition-colors"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#B9B4AA] hover:text-[#F7F3EB]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-[11px] uppercase tracking-[0.1em] text-[#B9B4AA]/80 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C8A45D]" /> Popular:
            </span>
            {popularSearches.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="text-xs px-2.5 py-1 rounded bg-[#171717] border border-[rgba(200,164,93,0.2)] text-[#B9B4AA] hover:text-[#E4C77E] hover:border-[#E4C77E] transition-colors"
              >
                {term}
              </button>
            ))}
          </div>

          {/* Search Results Display */}
          <div className="max-h-[50vh] overflow-y-auto space-y-3 pr-1">
            {query.trim() === "" ? (
              <div className="text-center py-8 text-xs text-[#B9B4AA]">
                Type a fragrance title or key ingredient to view live catalog results.
              </div>
            ) : searchResults.length === 0 ? (
              <div className="text-center py-8 space-y-2">
                <p className="font-serif text-lg text-[#F7F3EB]">No fragrances found</p>
                <p className="text-xs text-[#B9B4AA]">
                  We couldn&apos;t find any matches for &quot;{query}&quot;. Try exploring our fragrance families or collections.
                </p>
                <Link
                  href="/shop"
                  onClick={() => setIsSearchOpen(false)}
                  className="inline-block mt-3 text-xs text-[#E4C77E] hover:underline"
                >
                  View All Fragrances →
                </Link>
              </div>
            ) : (
              <div>
                <p className="text-[11px] uppercase tracking-[0.1em] text-[#C8A45D] mb-3">
                  Found {searchResults.length} {searchResults.length === 1 ? "Fragrance" : "Fragrances"}
                </p>
                <div className="space-y-2.5">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-3 bg-[#141414] border border-[rgba(200,164,93,0.18)] hover:border-[#E4C77E] rounded-md transition-all group"
                    >
                      <div className="relative w-14 h-14 bg-[#1A1A1A] rounded overflow-hidden shrink-0 border border-[rgba(200,164,93,0.15)]">
                        <Image
                          src={product.images.primary}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/product/${product.slug}`}
                          onClick={() => setIsSearchOpen(false)}
                          className="font-serif text-base text-[#F7F3EB] group-hover:text-[#E4C77E] transition-colors block truncate"
                        >
                          {product.name}
                        </Link>
                        <p className="text-[10px] text-[#B9B4AA] truncate mt-0.5">
                          {product.fragranceFamily} • {product.concentration}
                        </p>
                        <p className="text-[10px] text-[#C8A45D] truncate mt-0.5">
                          Notes: {[...product.notes.top, ...product.notes.heart].slice(0, 3).join(", ")}
                        </p>
                      </div>

                      <div className="text-right shrink-0 flex flex-col items-end gap-1.5">
                        <span className="text-xs font-semibold text-[#E4C77E]">
                          {formatINR(product.basePrice)}
                        </span>
                        <div className="flex gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              setIsSearchOpen(false);
                              openQuickView(product);
                            }}
                            className="text-[10px] px-2 py-0.5 bg-[#1C1C1C] text-[#B9B4AA] hover:text-[#F7F3EB] border border-[rgba(200,164,93,0.2)] rounded"
                          >
                            Quick View
                          </button>
                          <Link
                            href={`/product/${product.slug}`}
                            onClick={() => setIsSearchOpen(false)}
                            className="text-[10px] p-1 text-[#E4C77E] hover:text-white"
                            aria-label={`View ${product.name}`}
                          >
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
