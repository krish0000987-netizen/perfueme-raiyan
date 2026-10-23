"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { FragranceFamily, ProductType } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { Filter, SlidersHorizontal, ChevronRight, Search, X, Check } from "lucide-react";

const FAMILIES: FragranceFamily[] = [
  "Woody & Oud",
  "Amber & Oriental",
  "Fresh & Aquatic",
  "Floral & Musk",
  "Sweet & Gourmand",
  "Attars & Concentrated Oils",
];

const TYPES: ProductType[] = [
  "Extrait de Parfum",
  "Eau de Parfum",
  "Attar Oil",
  "Gift Set",
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialFamily = searchParams.get("family") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialFilter = searchParams.get("filter") || "";

  const { wishlist } = useCart();

  const [selectedFamily, setSelectedFamily] = useState<string>(initialFamily);
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [showWishlistOnly, setShowWishlistOnly] = useState(initialFilter === "wishlist");

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Wishlist check
      if (showWishlistOnly && !wishlist.includes(product.slug)) {
        return false;
      }

      // Fragrance family check
      if (selectedFamily && product.fragranceFamily !== selectedFamily) {
        return false;
      }

      // Product Type check
      if (selectedType && product.productType !== selectedType) {
        return false;
      }

      // Category check from URL
      if (initialCategory && product.category.toLowerCase() !== initialCategory.toLowerCase()) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesNotes = [...product.notes.top, ...product.notes.heart, ...product.notes.base].some(
          (n) => n.toLowerCase().includes(q)
        );
        if (!matchesName && !matchesNotes) return false;
      }

      // Price Range filter
      if (selectedPriceRange === "under-4000" && product.basePrice >= 4000) return false;
      if (selectedPriceRange === "4000-7000" && (product.basePrice < 4000 || product.basePrice > 7000))
        return false;
      if (selectedPriceRange === "above-7000" && product.basePrice <= 7000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.basePrice - b.basePrice;
      if (sortBy === "price-desc") return b.basePrice - a.basePrice;
      if (sortBy === "newest") return (b.isNewLaunch ? 1 : 0) - (a.isNewLaunch ? 1 : 0);
      // default: featured
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [
    selectedFamily,
    selectedType,
    selectedPriceRange,
    searchQuery,
    sortBy,
    showWishlistOnly,
    wishlist,
    initialCategory,
  ]);

  const resetFilters = () => {
    setSelectedFamily("");
    setSelectedType("");
    setSelectedPriceRange("all");
    setSearchQuery("");
    setShowWishlistOnly(false);
  };

  const hasActiveFilters =
    Boolean(selectedFamily) ||
    Boolean(selectedType) ||
    selectedPriceRange !== "all" ||
    Boolean(searchQuery) ||
    showWishlistOnly;

  return (
    <div className="min-h-screen bg-[#080808] text-[#F7F3EB] pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#B9B4AA] mb-8 font-light" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E4C77E] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C8A45D]" />
          <span className="text-[#E4C77E] font-medium">Shop All Fragrances</span>
          {showWishlistOnly && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span className="text-[#F7F3EB]">Your Wishlist</span>
            </>
          )}
        </nav>

        {/* Premium Title & Editorial Introduction */}
        <div className="border-b border-[rgba(200,164,93,0.2)] pb-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C8A45D] font-medium">
                THE COMPLETE BOTANICAL REGISTRY
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#F7F3EB] uppercase tracking-wide mt-2">
                {showWishlistOnly ? "Your Curated Wishlist" : "Shop All Fragrances"}
              </h1>
              <p className="text-xs sm:text-sm text-[#B9B4AA] mt-3 font-light leading-relaxed">
                Explore our full spectrum of fine fragrance. From 35% concentration extraits de parfum and pure alcohol-free attar oils to rare Cambodian agarwood extracts.
              </p>
            </div>

            {/* Catalog Count Indicator */}
            <div className="text-xs text-[#E4C77E] bg-[#141414] border border-[rgba(200,164,93,0.25)] px-4 py-2 rounded self-start md:self-auto">
              Showing <strong className="text-white">{filteredProducts.length}</strong> of {PRODUCTS.length} Fragrances
            </div>
          </div>
        </div>

        {/* Toolbar: Search, Sort, and Mobile Filter Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#121212] p-4 rounded-md border border-[rgba(200,164,93,0.18)]">
          {/* Search Field */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#C8A45D] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or note..."
              className="w-full bg-[#1A1A1A] border border-[rgba(200,164,93,0.25)] rounded pl-9 pr-8 py-2 text-xs text-[#F7F3EB] placeholder-[#B9B4AA]/60 focus:outline-none focus:border-[#E4C77E]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#B9B4AA] hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Mobile Filter Button */}
            <button
              type="button"
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 bg-[#1A1A1A] border border-[rgba(200,164,93,0.3)] rounded text-xs text-[#E4C77E]"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters {hasActiveFilters && "•"}</span>
            </button>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 text-xs text-[#B9B4AA]">
              <span className="hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#1A1A1A] border border-[rgba(200,164,93,0.25)] text-[#F7F3EB] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#E4C77E]"
              >
                <option value="featured">Featured Masterpieces</option>
                <option value="newest">New Releases</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6 bg-[#0E0E0E] p-6 rounded-md border border-[rgba(200,164,93,0.2)] h-fit">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(200,164,93,0.18)]">
              <span className="font-serif text-base text-[#F7F3EB] uppercase tracking-wider">
                Refine Selection
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-[11px] text-[#C8A45D] hover:underline"
                >
                  Reset All
                </button>
              )}
            </div>

            {/* Wishlist quick toggle */}
            <div>
              <label className="flex items-center gap-2.5 text-xs text-[#B9B4AA] cursor-pointer hover:text-[#F7F3EB]">
                <input
                  type="checkbox"
                  checked={showWishlistOnly}
                  onChange={(e) => setShowWishlistOnly(e.target.checked)}
                  className="rounded border-[rgba(200,164,93,0.4)] text-[#C8A45D] focus:ring-[#C8A45D] bg-[#141414]"
                />
                <span>Show Saved Wishlist ({wishlist.length})</span>
              </label>
            </div>

            {/* Fragrance Families */}
            <div className="space-y-2.5 pt-3 border-t border-[rgba(200,164,93,0.14)]">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#E4C77E] font-medium block">
                Fragrance Family
              </span>
              <div className="space-y-1.5 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedFamily("")}
                  className={`block w-full text-left py-1 transition-colors ${
                    !selectedFamily ? "text-[#E4C77E] font-medium" : "text-[#B9B4AA] hover:text-[#F7F3EB]"
                  }`}
                >
                  All Families
                </button>
                {FAMILIES.map((family) => (
                  <button
                    key={family}
                    type="button"
                    onClick={() => setSelectedFamily(selectedFamily === family ? "" : family)}
                    className={`flex items-center justify-between w-full py-1 text-left transition-colors ${
                      selectedFamily === family
                        ? "text-[#E4C77E] font-medium"
                        : "text-[#B9B4AA] hover:text-[#F7F3EB]"
                    }`}
                  >
                    <span>{family}</span>
                    {selectedFamily === family && <Check className="w-3.5 h-3.5 text-[#C8A45D]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Type / Concentration */}
            <div className="space-y-2.5 pt-3 border-t border-[rgba(200,164,93,0.14)]">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#E4C77E] font-medium block">
                Concentration & Type
              </span>
              <div className="space-y-1.5 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedType("")}
                  className={`block w-full text-left py-1 transition-colors ${
                    !selectedType ? "text-[#E4C77E] font-medium" : "text-[#B9B4AA] hover:text-[#F7F3EB]"
                  }`}
                >
                  All Types
                </button>
                {TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(selectedType === type ? "" : type)}
                    className={`flex items-center justify-between w-full py-1 text-left transition-colors ${
                      selectedType === type
                        ? "text-[#E4C77E] font-medium"
                        : "text-[#B9B4AA] hover:text-[#F7F3EB]"
                    }`}
                  >
                    <span>{type}</span>
                    {selectedType === type && <Check className="w-3.5 h-3.5 text-[#C8A45D]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Ranges */}
            <div className="space-y-2.5 pt-3 border-t border-[rgba(200,164,93,0.14)]">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#E4C77E] font-medium block">
                Price (INR)
              </span>
              <div className="space-y-1.5 text-xs text-[#B9B4AA]">
                {[
                  { id: "all", label: "All Prices" },
                  { id: "under-4000", label: "Under ₹4,000" },
                  { id: "4000-7000", label: "₹4,000 to ₹7,000" },
                  { id: "above-7000", label: "Above ₹7,000" },
                ].map((item) => (
                  <label key={item.id} className="flex items-center gap-2 cursor-pointer hover:text-[#F7F3EB]">
                    <input
                      type="radio"
                      name="price-filter"
                      checked={selectedPriceRange === item.id}
                      onChange={() => setSelectedPriceRange(item.id)}
                      className="text-[#C8A45D] bg-[#141414] border-[rgba(200,164,93,0.3)]"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid (3 columns on desktop) */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="p-16 text-center bg-[#101010] border border-[rgba(200,164,93,0.2)] rounded-md space-y-4">
                <SlidersHorizontal className="w-10 h-10 text-[#C8A45D] mx-auto opacity-70" />
                <h3 className="font-serif text-2xl text-[#F7F3EB]">No Fragrances Found</h3>
                <p className="text-xs sm:text-sm text-[#B9B4AA] max-w-md mx-auto">
                  No products matched your exact filter combination. Try clearing your filters to explore our full fragrance collection.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="btn-gold py-2.5 px-6 rounded text-xs uppercase tracking-wider"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0F0F0F] border-l border-[rgba(200,164,93,0.3)] p-6 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(200,164,93,0.2)] mb-6">
              <span className="font-serif text-lg text-[#F7F3EB]">Filters</span>
              <button
                type="button"
                onClick={() => setIsMobileFiltersOpen(false)}
                className="p-1 text-[#B9B4AA] hover:text-[#F7F3EB]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Filters Content */}
            <div className="space-y-6 text-xs">
              <div>
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#E4C77E] font-medium block mb-2">
                  Fragrance Family
                </span>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setSelectedFamily("")}
                    className={`block w-full text-left py-1 ${!selectedFamily ? "text-[#E4C77E] font-medium" : "text-[#B9B4AA]"}`}
                  >
                    All Families
                  </button>
                  {FAMILIES.map((family) => (
                    <button
                      key={family}
                      type="button"
                      onClick={() => setSelectedFamily(selectedFamily === family ? "" : family)}
                      className={`block w-full text-left py-1 ${selectedFamily === family ? "text-[#E4C77E] font-medium" : "text-[#B9B4AA]"}`}
                    >
                      {family}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(200,164,93,0.15)]">
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#E4C77E] font-medium block mb-2">
                  Price
                </span>
                <div className="space-y-2 text-[#B9B4AA]">
                  {[
                    { id: "all", label: "All Prices" },
                    { id: "under-4000", label: "Under ₹4,000" },
                    { id: "4000-7000", label: "₹4,000 to ₹7,000" },
                    { id: "above-7000", label: "Above ₹7,000" },
                  ].map((item) => (
                    <label key={item.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={selectedPriceRange === item.id}
                        onChange={() => setSelectedPriceRange(item.id)}
                        className="text-[#C8A45D]"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[rgba(200,164,93,0.2)] flex gap-3">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="flex-1 py-2.5 border border-[rgba(200,164,93,0.3)] rounded text-[#B9B4AA]"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="btn-gold flex-1 py-2.5 rounded font-semibold"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080808] text-center pt-24 text-xs text-[#E4C77E]">Loading Fragrance Boutique...</div>}>
      <ShopContent />
    </Suspense>
  );
}
