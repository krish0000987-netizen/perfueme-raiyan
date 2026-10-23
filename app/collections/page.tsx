"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COLLECTIONS, getProductsForCollection } from "@/lib/collections";
import { ProductCard } from "@/components/products/ProductCard";
import { ArrowRight, Sparkles, Layers } from "lucide-react";

export default function CollectionsPage() {
  const [activeCollectionSlug, setActiveCollectionSlug] = useState<string>(
    COLLECTIONS[0].slug
  );

  const activeCollection =
    COLLECTIONS.find((c) => c.slug === activeCollectionSlug) || COLLECTIONS[0];
  const activeProducts = getProductsForCollection(activeCollection.slug);

  return (
    <div className="w-full bg-[#080808] text-[#F7F3EB]">
      {/* 1. Page Hero Banner */}
      <section className="relative h-[60vh] sm:h-[65vh] flex items-center justify-center overflow-hidden border-b border-[rgba(200,164,93,0.25)]">
        <Image
          src="/images/hero/hero-collections.jpg"
          alt="Curated Fragrance Collections by Raiyaan Luxury"
          fill
          priority
          className="object-cover brightness-65"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/55 to-black/35" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#C8A45D]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#E4C77E] font-medium">
              CURATED OLFACTIVE HOUSES
            </span>
            <span className="w-8 h-[1px] bg-[#C8A45D]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F3EB] uppercase tracking-wide">
            THE COLLECTIONS
          </h1>
          <p className="text-xs sm:text-base text-[#B9B4AA] max-w-xl mx-auto font-light leading-relaxed">
            Thematic assemblies crafted around distinct moods, rare raw materials, and occasions. Explore our signature masterpieces and noble oud selections.
          </p>
        </div>
      </section>

      {/* 2. Collection Showcase Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C8A45D]">
            THEMATIC ARCHIVES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-1">
            Choose a Collection to Explore
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((col) => {
            const products = getProductsForCollection(col.slug);
            const isSelected = activeCollectionSlug === col.slug;

            return (
              <div
                key={col.id}
                onClick={() => {
                  setActiveCollectionSlug(col.slug);
                  // Smooth scroll to listing
                  document
                    .getElementById("collection-products")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`group cursor-pointer rounded-lg overflow-hidden border transition-all duration-300 bg-[#121212] flex flex-col justify-between ${
                  isSelected
                    ? "border-[#E4C77E] shadow-[0_0_25px_rgba(200,164,93,0.25)] ring-1 ring-[#E4C77E]"
                    : "border-[rgba(200,164,93,0.2)] hover:border-[#E4C77E]"
                }`}
              >
                <div className="relative aspect-[16/11] w-full bg-[#1A1A1A] overflow-hidden">
                  <Image
                    src={col.heroImage}
                    alt={col.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent" />

                  <div className="absolute top-3 left-3 bg-[#080808]/85 backdrop-blur-sm border border-[rgba(200,164,93,0.3)] px-2.5 py-0.5 rounded text-[9px] uppercase tracking-[0.14em] text-[#E4C77E]">
                    {col.categoryBadge}
                  </div>

                  <div className="absolute top-3 right-3 bg-[#080808]/85 backdrop-blur-sm border border-[rgba(200,164,93,0.3)] px-2 py-0.5 rounded text-[10px] text-[#F7F3EB]">
                    {products.length} {products.length === 1 ? "Fragrance" : "Fragrances"}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-[#F7F3EB] group-hover:text-[#E4C77E] transition-colors">
                      {col.title}
                    </h3>
                    <p className="text-[11px] text-[#C8A45D] uppercase tracking-[0.12em] mt-1">
                      {col.subtitle}
                    </p>
                    <p className="text-xs text-[#B9B4AA] mt-3 line-clamp-3 font-light leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[rgba(200,164,93,0.14)] flex items-center justify-between text-xs text-[#E4C77E] font-medium">
                    <span>{isSelected ? "Currently Viewing" : "Explore Range"}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Dedicated Selected Collection Listing */}
      <section
        id="collection-products"
        className="py-20 sm:py-24 bg-[#0B0B0B] border-t border-[rgba(200,164,93,0.22)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[rgba(200,164,93,0.2)] pb-6">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-[#C8A45D]">
                ACTIVE COLLECTION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-1">
                {activeCollection.title}
              </h2>
              <p className="text-xs text-[#B9B4AA] mt-2 max-w-xl font-light">
                {activeCollection.description}
              </p>
            </div>
            <span className="text-xs text-[#E4C77E] mt-4 md:mt-0 font-medium">
              Showing all {activeProducts.length} fragrances in this archive
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
