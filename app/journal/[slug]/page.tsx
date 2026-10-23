import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { JOURNAL_ARTICLES, getArticleBySlug } from "@/lib/journal";
import { ChevronRight, ArrowLeft, Clock, Calendar, User, Sparkles } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    return {
      title: "Article Not Found | Raiyaan Luxury",
    };
  }

  return {
    title: `${article.title} | Raiyaan Luxury Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.heroImage,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function JournalArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = JOURNAL_ARTICLES.filter((a) =>
    article.relatedArticlesSlugs.includes(a.slug)
  );

  return (
    <article className="w-full bg-[#080808] text-[#F7F3EB] pt-8 pb-28">
      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <nav className="flex items-center gap-2 text-xs text-[#B9B4AA] font-light" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E4C77E] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C8A45D]" />
          <Link href="/journal" className="hover:text-[#E4C77E] transition-colors">
            Fragrance Journal
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C8A45D]" />
          <span className="text-[#E4C77E] truncate font-medium">{article.title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 text-center space-y-4">
        <div className="inline-flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#E4C77E] font-medium px-3 py-1 bg-[#141414] border border-[rgba(200,164,93,0.3)] rounded-full">
            {article.category}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-[#F7F3EB] uppercase tracking-wide leading-tight">
          {article.title}
        </h1>

        <p className="text-xs sm:text-sm text-[#C8A45D] uppercase tracking-wider font-light">
          {article.subtitle}
        </p>

        <div className="flex items-center justify-center gap-6 text-xs text-[#B9B4AA] pt-2">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#C8A45D]" />
            {article.publishedDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
            {article.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#C8A45D]" />
            {article.author}
          </span>
        </div>
      </header>

      {/* Large Hero Photography */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-[rgba(200,164,93,0.3)] shadow-2xl">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12 leading-relaxed text-sm sm:text-base text-[#B9B4AA] font-light">
        {/* Intro Excerpt Blockquote */}
        <div className="p-6 sm:p-8 bg-[#101010] border-l-2 border-[#C8A45D] rounded-r-md text-base sm:text-lg text-[#F7F3EB] font-serif italic">
          &ldquo;{article.excerpt}&rdquo;
        </div>

        {/* Structured Headings & Paragraphs */}
        {article.content.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F7F3EB] tracking-wide uppercase pt-4 border-t border-[rgba(200,164,93,0.15)]">
              {sec.heading}
            </h2>
            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}

        {/* Signature Signoff */}
        <div className="pt-8 border-t border-[rgba(200,164,93,0.2)] flex items-center justify-between">
          <div>
            <p className="font-serif text-lg text-[#F7F3EB]">Raiyaan Fragrance Atelier</p>
            <p className="text-xs text-[#C8A45D] uppercase tracking-wider">The Gate of Heaven • Rajwada, Indore</p>
          </div>
          <Link
            href="/journal"
            className="btn-gold-outline py-2 px-4 rounded text-xs tracking-wider inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <aside className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-[rgba(200,164,93,0.2)]">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F3EB] uppercase tracking-wide mb-8 text-center">
            Related Olfactive Reflections
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/journal/${rel.slug}`}
                className="group bg-[#111111] border border-[rgba(200,164,93,0.2)] hover:border-[#E4C77E] rounded-md p-5 transition-colors flex gap-4"
              >
                <div className="relative w-24 h-24 rounded overflow-hidden shrink-0 bg-[#161616]">
                  <Image src={rel.heroImage} alt="" fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-[#C8A45D] uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="font-serif text-base text-[#F7F3EB] group-hover:text-[#E4C77E] transition-colors truncate mt-1">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#B9B4AA] line-clamp-2 mt-1 font-light">
                    {rel.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </article>
  );
}
