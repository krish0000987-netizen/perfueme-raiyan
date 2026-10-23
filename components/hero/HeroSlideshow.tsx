"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

interface SlideData {
  id: number;
  image: string;
  subheading: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    image: "/images/hero/hero-slide-1.jpg",
    subheading: "HAUTE PARFUMERIE • THE GATE OF HEAVEN",
    headline: "THE ESSENCE OF ETERNITY",
    description: "Discover fragrances that leave an unforgettable impression, crafted with rare botanicals and precious resins.",
    ctaText: "EXPLORE THE COLLECTION",
    ctaLink: "/shop",
    secondaryCtaText: "DISCOVER THE MAISON",
    secondaryCtaLink: "/about",
  },
  {
    id: 2,
    image: "/images/hero/hero-slide-2.jpg",
    subheading: "PRECIOUS AGARWOOD & AMBER RESINS",
    headline: "WHERE OUD MEETS OPULENCE",
    description: "Explore the depth and character of sophisticated fragrance, slow-distilled from aged wild Aquilaria forests.",
    ctaText: "DISCOVER OUD & ATTARS",
    ctaLink: "/attars-oud",
    secondaryCtaText: "VIEW OUD CATALOG",
    secondaryCtaLink: "/shop?family=Woody+%26+Oud",
  },
  {
    id: 3,
    image: "/images/hero/hero-slide-3.jpg",
    subheading: "ARTISANAL EXTRAITS & FLORAL MUSK",
    headline: "FIND YOUR SIGNATURE",
    description: "A fragrance for every mood, moment, and memory. Velvety Damask roses steeped in midnight incense.",
    ctaText: "SHOP PERFUMES",
    ctaLink: "/perfumes",
    secondaryCtaText: "THE JOURNAL",
    secondaryCtaLink: "/journal",
  },
  {
    id: 4,
    image: "/images/hero/hero-slide-4.jpg",
    subheading: "PRESTIGE COFFRETS & BESPOKE PACKAGING",
    headline: "GIVE THE EXTRAORDINARY",
    description: "Make every occasion unforgettable with fine fragrance presented in black piano lacquer and velvet cases.",
    ctaText: "EXPLORE GIFTING",
    ctaLink: "/collections",
    secondaryCtaText: "DISCOVERY SET",
    secondaryCtaLink: "/product/coffret-prestige-discovery-set",
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // 3-second automatic transition as required
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full h-[85vh] sm:h-[90vh] lg:h-[92vh] overflow-hidden bg-[#080808] select-none"
      aria-label="Fragrance Slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Stack */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Slide Background Image with subtle zoom */}
            <div className={`relative w-full h-full transition-transform duration-[4000ms] ease-out ${
              isActive ? "scale-105" : "scale-100"
            }`}>
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                priority={index === 0}
                className="object-cover object-center brightness-90"
                sizes="100vw"
              />
            </div>

            {/* Dark Controlled Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/45 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/40 to-transparent" />

            {/* Slide Text Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
                <div className="max-w-2xl space-y-5 animate-fadeIn">
                  {/* Subheading with gold accent */}
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-[#C8A45D]" />
                    <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#E4C77E] font-medium">
                      {slide.subheading}
                    </span>
                  </div>

                  {/* Headline */}
                  <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F3EB] font-normal tracking-[0.08em] uppercase leading-[1.15]">
                    {slide.headline}
                  </h1>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#B9B4AA] leading-relaxed max-w-xl font-light">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="pt-3 flex flex-wrap gap-4 items-center">
                    <Link
                      href={slide.ctaLink}
                      className="btn-gold py-3.5 px-7 rounded text-xs tracking-[0.16em] inline-flex items-center gap-2 font-medium"
                    >
                      <span>{slide.ctaText}</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </Link>

                    {slide.secondaryCtaText && slide.secondaryCtaLink && (
                      <Link
                        href={slide.secondaryCtaLink}
                        className="btn-gold-outline py-3.5 px-6 rounded text-xs tracking-[0.16em] font-medium"
                      >
                        {slide.secondaryCtaText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Manual Slide Controls: Previous / Next Arrows */}
      <div className="absolute bottom-10 right-6 sm:right-12 z-20 flex items-center gap-3">
        <button
          type="button"
          onClick={prevSlide}
          className="p-3 rounded-full bg-[#141414]/80 backdrop-blur-sm border border-[rgba(200,164,93,0.3)] text-[#B9B4AA] hover:text-[#E4C77E] hover:border-[#E4C77E] transition-all"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="p-3 rounded-full bg-[#141414]/80 backdrop-blur-sm border border-[rgba(200,164,93,0.3)] text-[#B9B4AA] hover:text-[#E4C77E] hover:border-[#E4C77E] transition-all"
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="p-3 rounded-full bg-[#141414]/80 backdrop-blur-sm border border-[rgba(200,164,93,0.3)] text-[#B9B4AA] hover:text-[#E4C77E] hover:border-[#E4C77E] transition-all"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators: Number & Progress Line */}
      <div className="absolute bottom-10 left-6 sm:left-12 z-20 flex items-center gap-4 text-xs font-mono tracking-widest text-[#B9B4AA]">
        <span className="text-[#E4C77E] font-semibold">0{currentSlide + 1}</span>
        <div className="w-24 sm:w-32 h-[2px] bg-white/20 relative rounded-full overflow-hidden">
          <div
            className="absolute top-0 bottom-0 left-0 bg-[#E4C77E] transition-all duration-300"
            style={{
              width: `${((currentSlide + 1) / HERO_SLIDES.length) * 100}%`,
            }}
          />
        </div>
        <span>0{HERO_SLIDES.length}</span>
      </div>
    </section>
  );
}
