import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/hero/HeroSlideshow";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS, getFeaturedProducts, getBestsellers } from "@/lib/products";
import { JOURNAL_ARTICLES } from "@/lib/journal";
import { Sparkles, ArrowRight, ShieldCheck, Compass, Droplet, Award, Gift } from "lucide-react";
import { formatINR, getWhatsAppLink } from "@/lib/config";

export const metadata = {
  title: "Raiyaan Luxury — The Gate of Heaven | Niche Perfumes, Attars & Oud",
  description:
    "Discover Raiyaan Luxury, the gate of heaven. Experience artisanal Cambodian oud, exquisite extraits de parfum, and pure concentrated attar oils crafted for eternity.",
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const bestsellers = getBestsellers().slice(0, 4);
  const journalPreview = JOURNAL_ARTICLES.slice(0, 3);

  const fragranceFamilies = [
    {
      name: "Woody & Oud",
      description: "Aged agarwood, smoked cedar, and deep earthy resins.",
      image: "/images/collections/family-woody-oud.jpg",
      href: "/shop?family=Woody+%26+Oud",
    },
    {
      name: "Amber & Oriental",
      description: "Warm benzoin, golden amber, and vanilla bourbon.",
      image: "/images/collections/family-amber-oriental.jpg",
      href: "/shop?family=Amber+%26+Oriental",
    },
    {
      name: "Fresh & Aquatic",
      description: "Calabrian bergamot, neroli, and marine mineral salt.",
      image: "/images/collections/family-fresh-aquatic.jpg",
      href: "/shop?family=Fresh+%26+Aquatic",
    },
    {
      name: "Floral & Musk",
      description: "Damask rose absolute, jasmine sambac, and silken musk.",
      image: "/images/collections/family-floral-musk.jpg",
      href: "/shop?family=Floral+%26+Musk",
    },
    {
      name: "Sweet & Gourmand",
      description: "Roasted tonka, warm almond, and golden honey nectar.",
      image: "/images/collections/family-sweet-gourmand.jpg",
      href: "/shop?family=Sweet+%26+Gourmand",
    },
    {
      name: "Attars & Concentrated Oils",
      description: "100% pure alcohol-free perfume oils and tolas.",
      image: "/images/collections/family-attars-oils.jpg",
      href: "/attars-oud",
    },
  ];

  return (
    <div className="w-full bg-[#080808]">
      {/* 1. Cinematic Hero Slideshow */}
      <HeroSlideshow />

      {/* 2. Signature Collection Section */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[rgba(200,164,93,0.2)] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#C8A45D]" />
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#E4C77E] font-medium">
                THE PINNACLE OF CRAFTSMANSHIP
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide">
              The Signature Collection
            </h2>
          </div>
          <Link
            href="/shop"
            className="mt-4 md:mt-0 text-xs text-[#E4C77E] hover:text-white uppercase tracking-[0.16em] inline-flex items-center gap-2 font-medium"
          >
            <span>View All Fragrances</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 3. Shop by Fragrance Family */}
      <section className="py-20 bg-[#0D0D0D] border-y border-[rgba(200,164,93,0.18)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-[0.25em] uppercase text-[#C8A45D] font-medium">
              EXPLORE OLFACTIVE UNIVERSES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-2">
              Shop by Fragrance Family
            </h2>
            <p className="text-xs sm:text-sm text-[#B9B4AA] mt-3 font-light leading-relaxed">
              Every scent family evokes distinct emotional moods, from contemplative woody ouds to luminous Mediterranean florals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fragranceFamilies.map((family) => (
              <Link
                key={family.name}
                href={family.href}
                className="group relative h-72 rounded-md overflow-hidden border border-[rgba(200,164,93,0.22)] hover:border-[#E4C77E] transition-all duration-500 shadow-lg"
              >
                <Image
                  src={family.image}
                  alt={family.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/50 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#E4C77E] font-medium mb-1">
                    Fragrance Family
                  </span>
                  <h3 className="font-serif text-2xl text-[#F7F3EB] group-hover:text-[#E4C77E] transition-colors">
                    {family.name}
                  </h3>
                  <p className="text-xs text-[#B9B4AA] mt-1.5 line-clamp-2 font-light">
                    {family.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-[#E4C77E] font-medium uppercase tracking-[0.14em]">
                    <span>Discover Scents</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brand Statement Section */}
      <section className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#C8A45D]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#E4C77E]">
              PHILOSOPHY OF THE MAISON
            </span>
            <span className="w-8 h-[1px] bg-[#C8A45D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F3EB] tracking-wide leading-tight uppercase">
            &ldquo;MORE THAN A FRAGRANCE. <br className="hidden sm:inline" />
            <span className="gold-gradient-pure">AN EXPRESSION OF YOU.&rdquo;</span>
          </h2>

          <p className="text-sm sm:text-base text-[#B9B4AA] leading-relaxed max-w-2xl mx-auto font-light">
            In an era of fleeting trends, Raiyaan Luxury creates fragrances meant to become permanent emblems of presence.
            Each flacon represents a dialogue between ancient oriental distillation and contemporary haute parfumerie —
            crafted with patience, authenticity, and an uncompromising respect for pure natural materials.
          </p>

          <div className="pt-4 flex justify-center items-center gap-6">
            <Link
              href="/about"
              className="btn-gold-outline py-3 px-8 rounded text-xs tracking-[0.16em] font-medium"
            >
              Read Our Brand Story
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#E4C77E] hover:underline uppercase tracking-[0.16em] font-medium"
            >
              Speak with Concierge →
            </a>
          </div>
        </div>
      </section>

      {/* 5. Bestselling Fragrances */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[rgba(200,164,93,0.18)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#C8A45D]" />
              <span className="text-xs tracking-[0.25em] uppercase text-[#E4C77E] font-medium">
                ACCLAIMED MASTERPIECES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide">
              Bestselling Creations
            </h2>
          </div>
          <Link
            href="/shop"
            className="mt-4 md:mt-0 text-xs text-[#E4C77E] hover:text-white uppercase tracking-[0.16em] inline-flex items-center gap-2"
          >
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. The Fragrance Experience: Three Editorial Columns */}
      <section className="py-20 bg-[#0F0F0F] border-y border-[rgba(200,164,93,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-[#C8A45D]">
              THE ART OF APPRECIATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-2">
              The Fragrance Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="p-8 bg-[#141414] border border-[rgba(200,164,93,0.22)] rounded-md space-y-4 hover:border-[#E4C77E] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#1C1C1C] border border-[rgba(200,164,93,0.3)] flex items-center justify-center text-[#E4C77E]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-[#F7F3EB] uppercase tracking-wide">
                Discover Your Scent
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
                Explore our curated olfactive families and interactive guidance to identify accords that resonate with your personal skin chemistry and lifestyle.
              </p>
              <Link
                href="/journal/how-to-choose-your-signature-fragrance"
                className="inline-block text-xs text-[#E4C77E] hover:underline uppercase tracking-wider"
              >
                Read Selection Guide →
              </Link>
            </div>

            {/* Column 2 */}
            <div className="p-8 bg-[#141414] border border-[rgba(200,164,93,0.22)] rounded-md space-y-4 hover:border-[#E4C77E] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#1C1C1C] border border-[rgba(200,164,93,0.3)] flex items-center justify-center text-[#E4C77E]">
                <Droplet className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-[#F7F3EB] uppercase tracking-wide">
                Explore Fine Ingredients
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
                From aged wild Aquilaria agarwood trees to Mysore-style sandalwood and Damask roses, we source pure aromatics without dilution.
              </p>
              <Link
                href="/journal/the-soul-of-oud-liquid-gold"
                className="inline-block text-xs text-[#E4C77E] hover:underline uppercase tracking-wider"
              >
                Explore Oud Origins →
              </Link>
            </div>

            {/* Column 3 */}
            <div className="p-8 bg-[#141414] border border-[rgba(200,164,93,0.22)] rounded-md space-y-4 hover:border-[#E4C77E] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#1C1C1C] border border-[rgba(200,164,93,0.3)] flex items-center justify-center text-[#E4C77E]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-[#F7F3EB] uppercase tracking-wide">
                Find Your Signature
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
                Experience high concentrations of 20% to 35% perfume oil that evolve seamlessly throughout the day and leave a lingering, unforgettable sillage.
              </p>
              <Link
                href="/shop"
                className="inline-block text-xs text-[#E4C77E] hover:underline uppercase tracking-wider"
              >
                Explore Extraits →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Featured Collection Cinematic Banner */}
      <section className="relative py-28 sm:py-36 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-slide-2.jpg"
            alt="Arabian Oud & Amber Collection"
            fill
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-5">
            <span className="text-xs uppercase tracking-[0.3em] text-[#E4C77E] font-medium">
              CURATED COLLECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F7F3EB] uppercase tracking-wide leading-tight">
              The Soul of Oud Collection
            </h2>
            <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
              Immerse yourself in authentic Arabian and Indian fragrance heritage. Slow-distilled agarwood oils, pure tolas, and deep balsamic accords designed for regal occasions.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/attars-oud"
                className="btn-gold py-3.5 px-7 rounded text-xs tracking-[0.16em] font-medium inline-flex items-center gap-2"
              >
                <span>Discover Oud & Attars</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/collections"
                className="btn-gold-outline py-3.5 px-6 rounded text-xs tracking-[0.16em] font-medium"
              >
                All Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Gift-Worthy Fragrances */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[rgba(200,164,93,0.3)] shadow-2xl">
            <Image
              src="/images/products/coffret-prestige.jpg"
              alt="Raiyaan Luxury Discovery Coffret Gift Set"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-[#C8A45D]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#E4C77E] font-medium">
                THE ART OF GIFTING
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide">
              Coffret Prestige Discovery Set
            </h2>

            <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
              Crafted in a hand-polished black lacquered keepsake case lined with midnight velvet, our Coffret Prestige contains five 10ml travel flacons of Raiyaan Luxury&apos;s most celebrated masterpieces.
            </p>

            <div className="p-4 bg-[#121212] border border-[rgba(200,164,93,0.2)] rounded space-y-2 text-xs">
              <p className="text-[#E4C77E] font-medium uppercase tracking-[0.1em]">
                Includes Five 10ml Signature Sprays:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-[#B9B4AA]">
                <li>• The Gate of Heaven</li>
                <li>• Oud Imperial</li>
                <li>• Celestial Amber</li>
                <li>• Nocturne Rose</li>
                <li className="col-span-2">• Cuir Imperial</li>
              </ul>
            </div>

            <div className="flex items-baseline gap-4 pt-2">
              <span className="text-2xl font-semibold text-[#E4C77E]">₹5,990</span>
              <span className="text-sm text-[#B9B4AA]/60 line-through">₹6,900</span>
              <span className="text-xs text-[#C8A45D]">Complimentary Luxury Gift Box</span>
            </div>

            <div className="pt-2 flex gap-4">
              <Link
                href="/product/coffret-prestige-discovery-set"
                className="btn-gold py-3 px-6 rounded text-xs tracking-[0.16em] font-medium"
              >
                Acquire Discovery Set
              </Link>
              <Link
                href="/collections"
                className="btn-gold-outline py-3 px-5 rounded text-xs tracking-[0.16em] font-medium"
              >
                View Gifting Range
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Fragrance Journal Preview */}
      <section className="py-20 bg-[#0C0C0C] border-t border-[rgba(200,164,93,0.18)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-[#C8A45D]">
                OLFACTIVE PERSPECTIVES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-1">
                The Fragrance Journal
              </h2>
            </div>
            <Link
              href="/journal"
              className="mt-4 md:mt-0 text-xs text-[#E4C77E] hover:text-white uppercase tracking-[0.16em] inline-flex items-center gap-2"
            >
              <span>Read All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journalPreview.map((article) => (
              <Link
                key={article.id}
                href={`/journal/${article.slug}`}
                className="group bg-[#141414] border border-[rgba(200,164,93,0.2)] hover:border-[#E4C77E] rounded-md overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full bg-[#1C1C1C] overflow-hidden">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#080808]/85 backdrop-blur-sm border border-[rgba(200,164,93,0.3)] px-2.5 py-0.5 rounded text-[9px] uppercase tracking-[0.14em] text-[#E4C77E]">
                    {article.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-[#B9B4AA]/70 block mb-1">
                      {article.publishedDate} • {article.readTime}
                    </span>
                    <h3 className="font-serif text-xl text-[#F7F3EB] group-hover:text-[#E4C77E] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#B9B4AA] line-clamp-2 mt-2 font-light">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[rgba(200,164,93,0.12)] flex items-center justify-between text-xs text-[#E4C77E] font-medium">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final Call to Action */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-[#080808] to-[#121212] text-center border-t border-[rgba(200,164,93,0.25)]">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C8A45D]">
            RAIYAAN LUXURY • INDORE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F7F3EB] uppercase tracking-wide leading-tight">
            Step Beyond The Gate of Heaven
          </h2>
          <p className="text-xs sm:text-sm text-[#B9B4AA] max-w-lg mx-auto font-light leading-relaxed">
            Begin your olfactory journey today. Discover signature perfumes, concentrated attars, and bespoke discovery sets.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/shop"
              className="btn-gold py-3.5 px-8 rounded text-xs tracking-[0.16em] font-medium inline-flex items-center gap-2"
            >
              <span>Explore The Boutique</span>
              <Sparkles className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
