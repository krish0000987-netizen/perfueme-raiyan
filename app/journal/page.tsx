"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { JOURNAL_ARTICLES } from "@/lib/journal";
import { ArrowRight, BookOpen, Search, Sparkles } from "lucide-react";

const CATEGORIES = [
  "All Articles",
  "Fragrance Mastery",
  "Oud Heritage",
  "Attars & Oils",
  "Style & Discovery",
];

export default function JournalIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredArticle = JOURNAL_ARTICLES[0];

  const filteredArticles = useMemo(() => {
    return JOURNAL_ARTICLES.filter((article) => {
      if (
        selectedCategory !== "All Articles" &&
        article.category !== selectedCategory
      ) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = article.title.toLowerCase().includes(q);
        const matchSubtitle = article.subtitle.toLowerCase().includes(q);
        const matchExcerpt = article.excerpt.toLowerCase().includes(q);
        return matchTitle || matchSubtitle || matchExcerpt;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-[#080808] text-[#F7F3EB]">
      {/* 1. Magazine Hero Banner */}
      <section className="relative h-[60vh] sm:h-[65vh] flex items-center justify-center overflow-hidden border-b border-[rgba(200,164,93,0.25)]">
        <Image
          src="/images/hero/hero-journal.jpg"
          alt="The Fragrance Journal Magazine"
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
              EDITORIAL & OLFACTIVE CULTURE
            </span>
            <span className="w-8 h-[1px] bg-[#C8A45D]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F3EB] uppercase tracking-wide">
            THE FRAGRANCE JOURNAL
          </h1>
          <p className="text-xs sm:text-base text-[#B9B4AA] max-w-xl mx-auto font-light leading-relaxed">
            Essays on olfactory architecture, ancient agarwood traditions, master notes, and the art of wearing fine perfume.
          </p>
        </div>
      </section>

      {/* 2. Featured Editorial Story */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 bg-[#101010] border border-[rgba(200,164,93,0.25)] rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-md overflow-hidden border border-[rgba(200,164,93,0.2)]">
              <Image
                src={featuredArticle.heroImage}
                alt={featuredArticle.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E4C77E] font-medium px-3 py-1 bg-[#171717] border border-[rgba(200,164,93,0.3)] rounded-full">
                Featured Masterclass
              </span>
              <span className="text-xs text-[#B9B4AA] block">
                {featuredArticle.publishedDate} • {featuredArticle.readTime}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F7F3EB] uppercase leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-xs text-[#C8A45D] tracking-wider uppercase font-medium">
                {featuredArticle.subtitle}
              </p>
              <p className="text-xs text-[#B9B4AA] leading-relaxed font-light">
                {featuredArticle.excerpt}
              </p>
              <div className="pt-2">
                <Link
                  href={`/journal/${featuredArticle.slug}`}
                  className="btn-gold py-2.5 px-6 rounded text-xs tracking-wider inline-flex items-center gap-2 font-medium"
                >
                  <span>Read Feature</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter & Search Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[rgba(200,164,93,0.18)]">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded text-xs tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#C8A45D] text-[#080808] font-semibold"
                    : "bg-[#141414] border border-[rgba(200,164,93,0.25)] text-[#B9B4AA] hover:text-[#F7F3EB]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#C8A45D] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays..."
              className="w-full bg-[#141414] border border-[rgba(200,164,93,0.25)] rounded pl-9 pr-3 py-2 text-xs text-[#F7F3EB] placeholder-[#B9B4AA]/60 focus:outline-none focus:border-[#E4C77E]"
            />
          </div>
        </div>
      </section>

      {/* 4. Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/journal/${article.slug}`}
              className="group bg-[#111111] border border-[rgba(200,164,93,0.2)] hover:border-[#E4C77E] rounded-md overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full bg-[#181818] overflow-hidden">
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

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-[#B9B4AA]/70 block mb-1">
                    {article.publishedDate} • {article.readTime}
                  </span>
                  <h3 className="font-serif text-xl text-[#F7F3EB] group-hover:text-[#E4C77E] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-[11px] text-[#C8A45D] uppercase tracking-wider mt-1 font-light">
                    {article.subtitle}
                  </p>
                  <p className="text-xs text-[#B9B4AA] line-clamp-3 mt-3 font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[rgba(200,164,93,0.12)] flex items-center justify-between text-xs text-[#E4C77E] font-medium">
                  <span>Read Full Essay</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
