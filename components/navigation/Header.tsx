"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Heart, Menu, X, ChevronRight } from "lucide-react";
import { BRAND_CONFIG, getWhatsAppLink } from "@/lib/config";
import { useCart } from "@/lib/cart-context";

export function Header() {
  const pathname = usePathname();
  const { itemCount, setIsCartOpen, wishlist, setIsSearchOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementIdx, setAnnouncementIdx] = useState(0);

  // Rotate announcement messages
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIdx((prev) => (prev + 1) % BRAND_CONFIG.announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Sticky header background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* 1. Announcement Bar */}
      <div className="w-full bg-[#080808] border-b border-[rgba(200,164,93,0.22)] py-2 px-4 text-center text-xs tracking-[0.2em] uppercase text-[#E4C77E] transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden md:inline-block text-[10px] text-[#B9B4AA] tracking-[0.15em]">
            HAUTE PARFUMERIE • INDORE, INDIA
          </span>
          <div className="flex-1 text-center font-medium animate-fadeIn">
            {BRAND_CONFIG.announcements[announcementIdx]}
          </div>
          <div className="hidden md:flex items-center gap-4 text-[10px] tracking-[0.15em] text-[#B9B4AA]">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4C77E] transition-colors"
            >
              WHATSAPP CONCIERGE
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[rgba(200,164,93,0.28)] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3"
            : "bg-[#080808]/80 backdrop-blur-sm border-b border-[rgba(200,164,93,0.15)] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#E4C77E] hover:text-white transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo & Wordmark */}
            <div className="flex-1 lg:flex-initial text-center lg:text-left">
              <Link href="/" className="inline-block group">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] font-medium text-[#F7F3EB] group-hover:text-[#E4C77E] transition-colors uppercase">
                    RAIYAAN
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] tracking-[0.35em] text-[#C8A45D] uppercase font-light">
                      LUXURY
                    </span>
                    <span className="inline-block w-1 h-1 rounded-full bg-[#C8A45D]/60" />
                    <span className="text-[8px] tracking-[0.3em] text-[#B9B4AA] uppercase font-light">
                      THE GATE OF HEAVEN
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {BRAND_CONFIG.navigation.slice(0, 8).map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-[12px] tracking-[0.16em] uppercase transition-all py-1.5 font-medium ${
                      isActive
                        ? "text-[#E4C77E]"
                        : "text-[#B9B4AA] hover:text-[#F7F3EB]"
                    }`}
                  >
                    {item.name}
                    {item.badge && (
                      <span className="ml-1 text-[8px] px-1.5 py-0.2 rounded-full border border-[rgba(200,164,93,0.5)] text-[#E4C77E] font-normal uppercase">
                        {item.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A45D]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#B9B4AA] hover:text-[#E4C77E] transition-colors"
                aria-label="Search Fragrances"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                href="/shop?filter=wishlist"
                className="relative p-2 text-[#B9B4AA] hover:text-[#E4C77E] transition-colors"
                aria-label="View Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#C8A45D] text-[#080808] font-bold text-[9px] flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Icon with Live Count */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-[#B9B4AA] hover:text-[#E4C77E] transition-colors flex items-center"
                aria-label="Open Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#E4C77E] text-[#080808] font-bold text-[9px] flex items-center justify-center rounded-full shadow-[0_0_8px_rgba(200,164,93,0.6)]">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#0F0F0F] border-r border-[rgba(200,164,93,0.3)] p-6 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[rgba(200,164,93,0.2)]">
                <div>
                  <span className="font-serif text-xl tracking-[0.2em] font-medium text-[#F7F3EB]">
                    RAIYAAN
                  </span>
                  <p className="text-[9px] tracking-[0.25em] text-[#C8A45D] uppercase">
                    THE GATE OF HEAVEN
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#B9B4AA] hover:text-[#E4C77E]"
                  aria-label="Close Navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="mt-6 space-y-1">
                {BRAND_CONFIG.navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between px-3 py-3 text-sm tracking-[0.15em] uppercase rounded-md transition-colors ${
                        isActive
                          ? "bg-[rgba(200,164,93,0.15)] text-[#E4C77E] font-medium"
                          : "text-[#B9B4AA] hover:text-[#F7F3EB] hover:bg-white/5"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="w-4 h-4 text-[#C8A45D]/60" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer Information */}
            <div className="pt-6 border-t border-[rgba(200,164,93,0.2)]">
              <p className="text-xs text-[#B9B4AA] mb-2">Concierge Assistance:</p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2.5 px-4 text-center rounded text-xs font-semibold uppercase tracking-[0.15em] bg-[#171717] border border-[rgba(200,164,93,0.3)] text-[#E4C77E] hover:border-[#E4C77E] transition-colors"
              >
                Chat via WhatsApp
              </a>
              <p className="text-[10px] text-[#B9B4AA]/70 mt-3 text-center">
                Rajwada, Indore, Madhya Pradesh
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
