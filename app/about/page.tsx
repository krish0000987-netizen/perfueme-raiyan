import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Eye, Award } from "lucide-react";
import { BRAND_CONFIG, getWhatsAppLink } from "@/lib/config";

export const metadata = {
  title: "About Us | Raiyaan Luxury — The Gate of Heaven",
  description:
    "A World of Fragrance. A Signature of Your Own. Learn the philosophy and artisanal principles behind Raiyaan Luxury.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#080808] text-[#F7F3EB]">
      {/* 1. Page Hero Banner */}
      <section className="relative h-[65vh] sm:h-[75vh] flex items-center justify-center overflow-hidden border-b border-[rgba(200,164,93,0.25)]">
        <Image
          src="/images/hero/hero-about.jpg"
          alt="Raiyaan Luxury Atelier & Philosophy"
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
              THE MAISON & PHILOSOPHY
            </span>
            <span className="w-8 h-[1px] bg-[#C8A45D]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F3EB] uppercase tracking-wide leading-tight">
            A WORLD OF FRAGRANCE. <br />
            <span className="gold-gradient-pure">A SIGNATURE OF YOUR OWN.</span>
          </h1>
          <p className="text-xs sm:text-base text-[#B9B4AA] max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to Raiyaan Luxury. Situated in the historic heart of Rajwada, Indore, we curate and craft fine fragrances that bridge the classic nobility of Arabian oud with the elegance of modern haute parfumerie.
          </p>
        </div>
      </section>

      {/* 2. Brand Introduction & Meaning behind Raiyaan Luxury */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#C8A45D]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#E4C77E] font-medium">
                THE MEANING OF RAIYAAN
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide">
              The Gate of Heaven
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#B9B4AA] font-light leading-relaxed">
              <p>
                In classical Arabic lexicon, <em>Ar-Rayyan</em> symbolizes a celestial gateway characterized by lushness, eternal refreshment, and divine abundance. For Raiyaan Luxury, this name embodies our pursuit: creating olfactory experiences so profound and transporting that they elevate the everyday into the sublime.
              </p>
              <p>
                We believe that a truly great fragrance does not disguise who you are; it illuminates you. It becomes an indelible signature that lingers gracefully in memories, celebrations, and intimate moments.
              </p>
            </div>

            {/* Configurable Owner Note Banner */}
            <div className="p-4 bg-[#141414] border border-[rgba(200,164,93,0.2)] rounded text-xs text-[#B9B4AA] space-y-1">
              <p className="text-[#E4C77E] font-medium">Boutique Location:</p>
              <p>
                {BRAND_CONFIG.address.full}
              </p>
              <p className="text-[10px] text-[#B9B4AA]/70 pt-1">
                (Private showroom visits and bespoke fragrance consultations available by concierge appointment)
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[rgba(200,164,93,0.3)] shadow-2xl">
            <Image
              src="/images/brand/ingredients.jpg"
              alt="Raw Agarwood and Amber Resin craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 3. The Gate of Heaven Brand Philosophy */}
      <section className="py-20 bg-[#0E0E0E] border-y border-[rgba(200,164,93,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-[#C8A45D]">
              CORE TENETS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-1">
              Our Fragrance Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-[#B9B4AA] mt-3 font-light leading-relaxed">
              We reject mass-produced shortcuts and superficial trends. Our creations are anchored in three enduring commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#141414] border border-[rgba(200,164,93,0.22)] rounded-md space-y-3">
              <span className="font-mono text-xl text-[#C8A45D] font-semibold">01</span>
              <h3 className="font-serif text-xl text-[#F7F3EB]">Authentic Raw Materials</h3>
              <p className="text-xs text-[#B9B4AA] leading-relaxed font-light">
                We prioritize high-grade natural botanicals, aged Cambodian agarwood, pure Mysore-style sandalwood, and Damask rose absolute. Each batch reflects genuine botanical nuance.
              </p>
            </div>

            <div className="p-8 bg-[#141414] border border-[rgba(200,164,93,0.22)] rounded-md space-y-3">
              <span className="font-mono text-xl text-[#C8A45D] font-semibold">02</span>
              <h3 className="font-serif text-xl text-[#F7F3EB]">Extraordinary Concentration</h3>
              <p className="text-xs text-[#B9B4AA] leading-relaxed font-light">
                Where ordinary commercial sprays contain only 8% to 15% fragrance oil, our Extraits de Parfum are formulated at 30% to 35%, and our Attars are 100% pure concentrated oil.
              </p>
            </div>

            <div className="p-8 bg-[#141414] border border-[rgba(200,164,93,0.22)] rounded-md space-y-3">
              <span className="font-mono text-xl text-[#C8A45D] font-semibold">03</span>
              <h3 className="font-serif text-xl text-[#F7F3EB]">Transparency & Respect</h3>
              <p className="text-xs text-[#B9B4AA] leading-relaxed font-light">
                We believe in honest perfumery. We clearly disclose our ingredients, safety parameters, notes pyramid, and concentration tiers so you know precisely what touches your skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quality & Product Transparency */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-lg overflow-hidden border border-[rgba(200,164,93,0.3)] shadow-2xl order-2 lg:order-1">
            <Image
              src="/images/brand/craftsmanship.jpg"
              alt="Ornate crystal attar flacon craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#E4C77E] font-medium">
                CRAFT & QUALITY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide">
              Product Transparency
            </h2>

            <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
              Fine fragrance is an intimate craft. Every Raiyaan Luxury bottle is filled with meticulous precision, aged to allow raw oils to macerate into harmonious unity, and inspected before being encased in its bespoke presentation box.
            </p>

            <div className="space-y-3 pt-2 text-xs text-[#B9B4AA]">
              <div className="p-3.5 bg-[#141414] rounded border border-[rgba(200,164,93,0.18)]">
                <strong className="text-[#F7F3EB] block mb-0.5">Cruelty-Free & IFRA Compliant:</strong>
                Formulated safely without animal testing and aligned with international dermatological guidelines.
              </div>
              <div className="p-3.5 bg-[#141414] rounded border border-[rgba(200,164,93,0.18)]">
                <strong className="text-[#F7F3EB] block mb-0.5">Pure Attar Oil Standards:</strong>
                Our pure attars contain 0% alcohol and no synthetic fillers, delivering gentle skin nourishment.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Customer Experience & Concierge */}
      <section className="py-20 bg-[#0B0B0B] border-t border-[rgba(200,164,93,0.2)]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <HeartHandshake className="w-8 h-8 text-[#C8A45D] mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide">
            The Concierge Experience
          </h2>
          <p className="text-xs sm:text-sm text-[#B9B4AA] leading-relaxed max-w-xl mx-auto font-light">
            Whether you are curating a personal signature wardrobe, selecting an anniversary gift, or seeking an authentic Cambodian oud, our private WhatsApp concierge is dedicated to your assistance.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/shop"
              className="btn-gold py-3.5 px-8 rounded text-xs tracking-[0.16em] font-medium"
            >
              Explore All Fragrances
            </Link>
            <a
              href={getWhatsAppLink("Hello Raiyaan Luxury concierge, I would like to learn more about your fragrance creations.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline py-3.5 px-6 rounded text-xs tracking-[0.16em] font-medium"
            >
              Connect with Concierge
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
