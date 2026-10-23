import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { Sparkles, ArrowRight, Sun, Moon, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Fine Perfumes & Extraits de Parfum | Raiyaan Luxury",
  description:
    "Explore The Art of Fine Perfumery by Raiyaan Luxury. Discover high-concentration Extraits and Eaux de Parfum, from velvety roses to smoky woods.",
};

export default function PerfumesPage() {
  const perfumes = PRODUCTS.filter(
    (p) => p.category === "Perfume" || p.productType === "Extrait de Parfum" || p.productType === "Eau de Parfum"
  );

  const daytimePerfumes = perfumes.filter(
    (p) => p.slug === "aqua-solaris" || p.slug === "royal-santal-attar" || p.slug === "celestial-amber"
  );

  const eveningPerfumes = perfumes.filter(
    (p) => p.slug === "the-gate-of-heaven" || p.slug === "oud-imperial" || p.slug === "nocturne-rose" || p.slug === "cuir-imperial"
  );

  return (
    <div className="w-full bg-[#080808] text-[#F7F3EB]">
      {/* 1. Page Hero Banner */}
      <section className="relative h-[65vh] sm:h-[70vh] flex items-center justify-center overflow-hidden border-b border-[rgba(200,164,93,0.25)]">
        <Image
          src="/images/hero/hero-perfumes.jpg"
          alt="The Art of Fine Perfumery"
          fill
          priority
          className="object-cover brightness-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/85 via-transparent to-[#080808]/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#C8A45D]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#E4C77E] font-medium">
              HAUTE PARFUMERIE COLLECTION
            </span>
            <span className="w-8 h-[1px] bg-[#C8A45D]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F3EB] uppercase tracking-wide">
            THE ART OF FINE PERFUMERY
          </h1>
          <p className="text-xs sm:text-base text-[#B9B4AA] max-w-xl mx-auto font-light leading-relaxed">
            Explore distinctive fragrances crafted to complement your individuality. Hand-poured with oil concentrations up to 35% for an indelible presence.
          </p>
          <div className="pt-2">
            <a
              href="#perfume-catalog"
              className="btn-gold py-3 px-7 rounded text-xs tracking-[0.16em] font-medium inline-block"
            >
              Discover The Flacons
            </a>
          </div>
        </div>
      </section>

      {/* 2. Daytime vs. Evening Discovery Guide */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[rgba(200,164,93,0.18)]">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C8A45D]">
            TEMPORAL HARMONY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-2">
            Daytime & Evening Discovery
          </h2>
          <p className="text-xs text-[#B9B4AA] mt-2 font-light">
            Match your scent to the circadian rhythm of your day and the surrounding temperature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Daytime Card */}
          <div className="p-8 bg-[#111111] border border-[rgba(200,164,93,0.22)] rounded-lg space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[rgba(200,164,93,0.3)] flex items-center justify-center text-[#E4C77E]">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#F7F3EB]">Daytime Radiance</h3>
                <span className="text-[10px] text-[#C8A45D] tracking-[0.14em] uppercase">Fresh, Citrus & Creamy Woods</span>
              </div>
            </div>
            <p className="text-xs text-[#B9B4AA] leading-relaxed font-light">
              Lighter, vibrant accords featuring Calabrian bergamot, neroli, sea salt, and smooth sandalwood that energize and uplift without overwhelming close spaces.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-4">
              {daytimePerfumes.slice(0, 2).map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="p-3 bg-[#171717] rounded border border-[rgba(200,164,93,0.15)] hover:border-[#E4C77E] transition-colors"
                >
                  <p className="font-serif text-sm text-[#F7F3EB] truncate">{p.name}</p>
                  <p className="text-[10px] text-[#C8A45D] mt-0.5">{p.fragranceFamily}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Evening Card */}
          <div className="p-8 bg-[#111111] border border-[rgba(200,164,93,0.22)] rounded-lg space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[rgba(200,164,93,0.3)] flex items-center justify-center text-[#E4C77E]">
                <Moon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#F7F3EB]">Evening Opulence</h3>
                <span className="text-[10px] text-[#C8A45D] tracking-[0.14em] uppercase">Smoky Woods, Velvet Rose & Leather</span>
              </div>
            </div>
            <p className="text-xs text-[#B9B4AA] leading-relaxed font-light">
              Deep, dramatic compositions built upon rare agarwood, incense smoke, saffron, and animalic leather that blossom under starlight and intimate gatherings.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-4">
              {eveningPerfumes.slice(0, 2).map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="p-3 bg-[#171717] rounded border border-[rgba(200,164,93,0.15)] hover:border-[#E4C77E] transition-colors"
                >
                  <p className="font-serif text-sm text-[#F7F3EB] truncate">{p.name}</p>
                  <p className="text-[10px] text-[#C8A45D] mt-0.5">{p.fragranceFamily}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Perfume Catalog */}
      <section id="perfume-catalog" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-[#C8A45D] font-medium">
              EAUX DE PARFUM & EXTRAITS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-1">
              The Perfume Collection
            </h2>
          </div>
          <p className="text-xs text-[#B9B4AA] mt-2 sm:mt-0">
            {perfumes.length} Curated Perfume Flacons Available
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Fragrance Discovery CTA */}
      <section className="py-20 bg-[#101010] border-t border-[rgba(200,164,93,0.2)] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <Sparkles className="w-8 h-8 text-[#C8A45D] mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide">
            Not Certain Which Perfume Suits You?
          </h2>
          <p className="text-xs sm:text-sm text-[#B9B4AA] max-w-md mx-auto font-light leading-relaxed">
            Acquire our Coffret Prestige to experience five travel flacons, or speak directly with our private fragrance concierge.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/product/coffret-prestige-discovery-set"
              className="btn-gold py-3 px-6 rounded text-xs tracking-[0.16em] font-medium"
            >
              Order Discovery Set
            </Link>
            <Link
              href="/contact"
              className="btn-gold-outline py-3 px-6 rounded text-xs tracking-[0.16em] font-medium"
            >
              Contact Atelier
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
