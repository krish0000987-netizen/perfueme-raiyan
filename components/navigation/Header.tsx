"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Heart, Menu, X, ChevronRight, MessageCircle } from "lucide-react";
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
      if (window.scrollY > 20) {
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
      <div className="w-full bg-[#080808] border-b border-[rgba(200,164,93,0.22)] py-1.5 sm:py-2 px-3 sm:px-4 text-center transition-all overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <span className="hidden md:inline-block text-[10px] text-[#B9B4AA] tracking-[0.15em] shrink-0">
            HAUTE PARFUMERIE • RAJWADA, INDORE
          </span>

          <div className="flex-1 text-center font-medium text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-[0.18em] uppercase text-[#E4C77E] truncate">
            {BRAND_CONFIG.announcements[announcementIdx]}
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[10px] tracking-[0.14em] text-[#B9B4AA] shrink-0">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#5bf594] flex items-center gap-1 transition-colors font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              <span>WHATSAPP CONCIERGE</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[rgba(200,164,93,0.28)] shadow-[0_10px_30px_rgba(0,0,0,0.85)] py-2.5 sm:py-3"
            : "bg-[#080808]/85 backdrop-blur-sm border-b border-[rgba(200,164,93,0.18)] py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center shrink-0 mr-1">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 -ml-1 text-[#E4C77E] hover:text-white transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo & Wordmark (Fixed layout & zero overlap) */}
            <div className="flex-1 lg:flex-none flex items-center justify-center lg:justify-start shrink-0 min-w-max mr-0 lg:mr-6 xl:mr-10 select-none z-10">
              <Link href="/" className="inline-block group focus:outline-none">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="font-serif text-xl sm:text-2xl lg:text-[22px] xl:text-[25px] 2xl:text-[27px] tracking-[0.2em] xl:tracking-[0.24em] font-medium text-[#F7F3EB] group-hover:text-[#E4C77E] transition-colors uppercase leading-none whitespace-nowrap">
                    RAIYAAN
                  </span>
                  <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mt-1 sm:mt-1.5 whitespace-nowrap">
                    <span className="text-[7.5px] sm:text-[8px] lg:text-[8.5px] tracking-[0.22em] text-[#C8A45D] uppercase font-light">
                      LUXURY
                    </span>
                    <span className="inline-block w-1 h-1 rounded-full bg-[#C8A45D]/70" />
                    <span className="text-[7px] sm:text-[7.5px] lg:text-[8px] tracking-[0.16em] text-[#B9B4AA] uppercase font-light">
                      THE GATE OF HEAVEN
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-5 2xl:space-x-7 flex-1 justify-center shrink min-w-0">
              {BRAND_CONFIG.navigation.slice(0, 8).map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-[11px] xl:text-[11.5px] 2xl:text-[12px] tracking-[0.12em] xl:tracking-[0.15em] uppercase transition-all py-1 font-medium whitespace-nowrap ${
                      isActive
                        ? "text-[#E4C77E]"
                        : "text-[#B9B4AA] hover:text-[#F7F3EB]"
                    }`}
                  >
                    {item.name}
                    {item.badge && (
                      <span className="hidden xl:inline-block ml-1 text-[8px] px-1.5 py-0.2 rounded-full border border-[rgba(200,164,93,0.5)] text-[#E4C77E] font-normal uppercase">
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
            <div className="flex items-center space-x-1.5 sm:space-x-2.5 xl:space-x-3 shrink-0">
              {/* WhatsApp Button (Mobile & Desktop) */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/35 text-[#25D366] text-[11px] font-medium transition-all shadow-[0_0_10px_rgba(37,211,102,0.12)] shrink-0"
                aria-label="Direct WhatsApp Concierge"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12c0 1.984.531 3.844 1.453 5.469L2 22l4.672-1.438A9.91 9.91 0 0 0 12.031 22c5.516 0 10-4.484 10-10s-4.484-10-10-10zm0 18.297c-1.703 0-3.328-.469-4.734-1.297l-.344-.203-3.156.969.984-3.078-.219-.359a8.21 8.21 0 0 1-1.281-4.328c0-4.563 3.719-8.281 8.281-8.281 4.563 0 8.281 3.719 8.281 8.281 0 4.563-3.719 8.297-8.281 8.297zm4.547-6.203c-.25-.125-1.469-.719-1.703-.797-.219-.094-.375-.125-.531.125-.156.25-.609.797-.75.953-.141.156-.281.172-.531.047-.25-.125-1.062-.391-2.016-1.25-.75-.672-1.25-1.5-1.391-1.75-.141-.25-.016-.391.109-.516.109-.109.25-.281.375-.422.125-.141.172-.25.25-.422.078-.172.047-.328-.016-.453-.063-.125-.531-1.281-.734-1.75-.188-.453-.391-.391-.531-.391h-.453c-.156 0-.422.063-.641.312-.219.25-.844.828-.844 2.016s.859 2.344.984 2.5c.125.156 1.703 2.609 4.125 3.656.578.25 1.031.406 1.391.516.594.188 1.125.156 1.547.094.469-.078 1.469-.609 1.672-1.203.219-.594.219-1.094.156-1.203-.063-.109-.219-.172-.469-.297z" />
                </svg>
                <span className="hidden xl:inline">WhatsApp</span>
              </a>

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
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#0D0D0D] border-r border-[rgba(200,164,93,0.3)] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[rgba(200,164,93,0.2)]">
                <div>
                  <span className="font-serif text-xl tracking-[0.2em] font-medium text-[#F7F3EB]">
                    RAIYAAN
                  </span>
                  <p className="text-[8.5px] tracking-[0.25em] text-[#C8A45D] uppercase">
                    THE GATE OF HEAVEN
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#B9B4AA] hover:text-[#E4C77E]"
                  aria-label="Close Navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Direct WhatsApp Callout in Drawer */}
              <div className="mt-4 mb-4 p-3 bg-[#141414] border border-[#25D366]/30 rounded-lg">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded bg-[#25D366] text-[#080808] font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12c0 1.984.531 3.844 1.453 5.469L2 22l4.672-1.438A9.91 9.91 0 0 0 12.031 22c5.516 0 10-4.484 10-10s-4.484-10-10-10zm0 18.297c-1.703 0-3.328-.469-4.734-1.297l-.344-.203-3.156.969.984-3.078-.219-.359a8.21 8.21 0 0 1-1.281-4.328c0-4.563 3.719-8.281 8.281-8.281 4.563 0 8.281 3.719 8.281 8.281 0 4.563-3.719 8.297-8.281 8.297zm4.547-6.203c-.25-.125-1.469-.719-1.703-.797-.219-.094-.375-.125-.531.125-.156.25-.609.797-.75.953-.141.156-.281.172-.531.047-.25-.125-1.062-.391-2.016-1.25-.75-.672-1.25-1.5-1.391-1.75-.141-.25-.016-.391.109-.516.109-.109.25-.281.375-.422.125-.141.172-.25.25-.422.078-.172.047-.328-.016-.453-.063-.125-.531-1.281-.734-1.75-.188-.453-.391-.391-.531-.391h-.453c-.156 0-.422.063-.641.312-.219.25-.844.828-.844 2.016s.859 2.344.984 2.5c.125.156 1.703 2.609 4.125 3.656.578.25 1.031.406 1.391.516.594.188 1.125.156 1.547.094.469-.078 1.469-.609 1.672-1.203.219-.594.219-1.094.156-1.203-.063-.109-.219-.172-.469-.297z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Drawer Links */}
              <nav className="space-y-1">
                {BRAND_CONFIG.navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between px-3.5 py-3 text-xs sm:text-sm tracking-[0.14em] uppercase rounded-md transition-colors ${
                        isActive
                          ? "bg-[rgba(200,164,93,0.15)] text-[#E4C77E] font-medium border border-[rgba(200,164,93,0.25)]"
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
            <div className="pt-6 border-t border-[rgba(200,164,93,0.2)] mt-6 text-center space-y-2">
              <p className="text-[11px] text-[#E4C77E] font-medium tracking-wide">
                Rajwada, Indore, Madhya Pradesh
              </p>
              <p className="text-[10px] text-[#B9B4AA]/70">
                Phone: {BRAND_CONFIG.contact.phoneDisplay}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
