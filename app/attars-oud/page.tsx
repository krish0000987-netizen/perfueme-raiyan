import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { Droplet, Sparkles, HelpCircle, Layers, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Attars & Oud Collection | Raiyaan Luxury",
  description:
    "The Soul of Oud by Raiyaan Luxury. Explore rare Cambodian agarwood, 100% alcohol-free concentrated attars, and sacred oriental perfume oils.",
};

export default function AttarsOudPage() {
  const attarAndOudProducts = PRODUCTS.filter(
    (p) =>
      p.category === "Attar" ||
      p.category === "Oud" ||
      p.fragranceFamily === "Attars & Concentrated Oils" ||
      p.fragranceFamily === "Woody & Oud"
  );

  const pureOudOils = PRODUCTS.filter(
    (p) => p.slug === "dehn-al-oud-cambodi" || p.slug === "royal-santal-attar"
  );

  const faqs = [
    {
      q: "What is the difference between an attar and a spray perfume?",
      a: "Traditional attars are 100% pure concentrated perfume oils formulated without alcohol. They react intimately with body warmth, creating a long-lasting, skin-close scent bubble rather than an alcohol-projected burst.",
    },
    {
      q: "How should pure oud attar be applied?",
      a: "Dip the glass rod applicator into the flacon, place a micro-droplet onto the inner wrist, gently touch both wrists together without friction, and dab lightly across the neck, collar, or beard.",
    },
    {
      q: "Can I layer attar with Eau de Parfum?",
      a: "Yes. In Arabian perfumery, layering an alcohol-free attar oil base under a spray perfume is the gold standard for achieving 16+ hours of projection and personalized complexity.",
    },
    {
      q: "Are your attars alcohol-free?",
      a: "Yes, all our attars, including Royal Santal and Dehn Al Oud Cambodi, are 100% alcohol-free concentrated oils.",
    },
  ];

  return (
    <div className="w-full bg-[#080808] text-[#F7F3EB]">
      {/* 1. Page Hero Banner */}
      <section className="relative h-[65vh] sm:h-[75vh] flex items-center justify-center overflow-hidden border-b border-[rgba(200,164,93,0.25)]">
        <Image
          src="/images/hero/hero-attars-oud.jpg"
          alt="The Soul of Oud and Arabian Attar"
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
              ORIENTAL PERFUMERY HERITAGE
            </span>
            <span className="w-8 h-[1px] bg-[#C8A45D]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F3EB] uppercase tracking-wide">
            THE SOUL OF OUD
          </h1>
          <p className="text-xs sm:text-base text-[#B9B4AA] max-w-2xl mx-auto font-light leading-relaxed">
            Explore rich woods, concentrated fragrance oils, and the timeless character of oriental perfumery. Pure Cambodian agarwood, Mysore sandalwood, and sacred golden amber.
          </p>
          <div className="pt-2">
            <a
              href="#attar-catalog"
              className="btn-gold py-3 px-7 rounded text-xs tracking-[0.16em] font-medium inline-block"
            >
              Explore Oils & Ouds
            </a>
          </div>
        </div>
      </section>

      {/* 2. Educational Ritual: How to Apply Attar */}
      <section className="py-20 bg-[#0F0F0F] border-b border-[rgba(200,164,93,0.18)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs tracking-[0.25em] uppercase text-[#C8A45D] font-medium">
              SACRED RITUAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-2">
              The Art of Attar Application
            </h2>
            <p className="text-xs text-[#B9B4AA] mt-2 font-light">
              Unlike spray perfumes, concentrated oils require mindfulness and gentle warmth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Dip the Glass Wand",
                desc: "Unscrew the ornate crown stopper and withdraw the polished glass rod applicator. A single micro-drop is sufficient.",
              },
              {
                step: "02",
                title: "Touch to Wrist",
                desc: "Touch the bead of oil to the warm pulse point of your inner wrist or the back of your hand.",
              },
              {
                step: "03",
                title: "Press, Never Rub",
                desc: "Gently touch wrists together. Avoid rubbing vigorously, which damages delicate volatile aromatic notes.",
              },
              {
                step: "04",
                title: "Dab Pulse Points",
                desc: "Lightly dab wrists behind your earlobes, base of throat, beard, or the collar of your garment.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="p-6 bg-[#141414] border border-[rgba(200,164,93,0.2)] rounded-md space-y-3"
              >
                <span className="font-mono text-2xl text-[#C8A45D] font-semibold">{s.step}</span>
                <h3 className="font-serif text-lg text-[#F7F3EB]">{s.title}</h3>
                <p className="text-xs text-[#B9B4AA] leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Layering Guide */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[rgba(200,164,93,0.18)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#C8A45D]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#E4C77E] font-medium">
                THE CONNOISSEUR TECHNIQUE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide">
              Fragrance Layering Suggestions
            </h2>
            <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
              Create an unrepeatable signature by layering pure concentrated attar oils with fine Eau de Parfum sprays. The oil locks onto your skin lipids, providing an anchor that extends projection for over 16 hours.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 bg-[#121212] border border-[rgba(200,164,93,0.2)] rounded">
                <p className="text-xs font-semibold text-[#E4C77E]">
                  Combo 1: Royal Santal Attar + Celestial Amber EDP
                </p>
                <p className="text-xs text-[#B9B4AA] mt-1 font-light">
                  Creamy sandalwood oil topped with golden tonka and bourbon vanilla. Result: A warm, hypnotic oriental halo.
                </p>
              </div>

              <div className="p-4 bg-[#121212] border border-[rgba(200,164,93,0.2)] rounded">
                <p className="text-xs font-semibold text-[#E4C77E]">
                  Combo 2: Dehn Al Oud Cambodi + Nocturne Rose Extrait
                </p>
                <p className="text-xs text-[#B9B4AA] mt-1 font-light">
                  Pure wild Cambodian agarwood grounded under velvet Turkish Damask rose and incense. Result: Regal Arabian opulence.
                </p>
              </div>
            </div>

            <Link
              href="/journal/the-art-of-fragrance-layering"
              className="inline-flex items-center gap-2 text-xs text-[#E4C77E] hover:underline uppercase tracking-wider font-medium pt-2"
            >
              <span>Read The Full Layering Masterclass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden border border-[rgba(200,164,93,0.3)] shadow-2xl">
            <Image
              src="/images/products/dehnal-oud-cambodi.jpg"
              alt="Dehn Al Oud Cambodi pure attar tola"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 4. Attars & Oud Products Catalog */}
      <section id="attar-catalog" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-[#C8A45D] font-medium">
              PURE OILS & AGARWOOD BLENDS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-1">
              Oud & Attar Flacons
            </h2>
          </div>
          <p className="text-xs text-[#B9B4AA] mt-2 sm:mt-0">
            {attarAndOudProducts.length} Artisanal Selections
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attarAndOudProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. Educational FAQ */}
      <section className="py-20 bg-[#0B0B0B] border-t border-[rgba(200,164,93,0.2)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <HelpCircle className="w-6 h-6 text-[#C8A45D] mx-auto mb-2" />
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F7F3EB] uppercase tracking-wide">
              Attar & Oud Knowledge Base
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#121212] border border-[rgba(200,164,93,0.2)] rounded-md space-y-2"
              >
                <h3 className="font-serif text-base text-[#F7F3EB] flex items-center gap-2">
                  <span className="text-[#E4C77E]">Q.</span> {faq.q}
                </h3>
                <p className="text-xs text-[#B9B4AA] leading-relaxed font-light pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
