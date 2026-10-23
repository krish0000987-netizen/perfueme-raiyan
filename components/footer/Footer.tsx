"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BRAND_CONFIG, getWhatsAppLink } from "@/lib/config";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError("");

    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterError("Please enter a valid email address.");
      return;
    }
    if (!newsletterConsent) {
      setNewsletterError("Please confirm your consent to receive newsletters.");
      return;
    }

    // In a live system this connects to your email service (e.g. Supabase, Resend or Klaviyo)
    setNewsletterSubmitted(true);
  };

  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-[rgba(200,164,93,0.25)] text-[#B9B4AA] pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Subtle background ambient gold accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#C8A45D]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[rgba(200,164,93,0.18)]">
          {/* Column 1: Brand Presence */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-2xl tracking-[0.25em] font-medium text-[#F7F3EB] group-hover:text-[#E4C77E] transition-colors uppercase">
                RAIYAAN
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] tracking-[0.35em] text-[#C8A45D] uppercase font-light">
                  LUXURY
                </span>
                <span className="inline-block w-1 h-1 rounded-full bg-[#C8A45D]" />
                <span className="text-[9px] tracking-[0.25em] text-[#B9B4AA] uppercase font-light">
                  THE GATE OF HEAVEN
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-[#B9B4AA] max-w-sm font-light">
              {BRAND_CONFIG.description}
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A45D] mt-0.5 shrink-0" />
                <span>{BRAND_CONFIG.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>
                  {BRAND_CONFIG.contact.phoneDisplay}{" "}
                  <span className="text-[10px] text-[#C8A45D] border border-[rgba(200,164,93,0.4)] px-1 py-0.2 rounded ml-1">
                    Subject to verification
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <a
                  href={`mailto:${BRAND_CONFIG.contact.email}`}
                  className="hover:text-[#E4C77E] transition-colors"
                >
                  {BRAND_CONFIG.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#171717] border border-[rgba(200,164,93,0.3)] hover:border-[#E4C77E] text-[#E4C77E] rounded text-xs uppercase tracking-[0.14em] font-medium transition-colors"
              >
                <span>WhatsApp Concierge</span>
                <Sparkles className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (All 10 Pages) */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#E4C77E] uppercase">
              The Collection
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-[#F7F3EB] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#F7F3EB] transition-colors">
                  Shop All Fragrances
                </Link>
              </li>
              <li>
                <Link href="/perfumes" className="hover:text-[#F7F3EB] transition-colors">
                  Perfumes & Extraits
                </Link>
              </li>
              <li>
                <Link href="/attars-oud" className="hover:text-[#F7F3EB] transition-colors">
                  Attars & Pure Oud
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-[#F7F3EB] transition-colors">
                  Curated Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Maison */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#E4C77E] uppercase">
              The Maison
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#F7F3EB] transition-colors">
                  About Raiyaan Luxury
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#F7F3EB] transition-colors">
                  Fragrance Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F7F3EB] transition-colors">
                  Contact & Concierge
                </Link>
              </li>
              <li>
                <Link href="/customer-care" className="hover:text-[#F7F3EB] transition-colors">
                  Customer Care & FAQ
                </Link>
              </li>
              <li>
                <Link href="/customer-care#shipping-policy" className="hover:text-[#F7F3EB] transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/customer-care#return-policy" className="hover:text-[#F7F3EB] transition-colors">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#E4C77E] uppercase">
              Exclusive Access
            </h3>
            <p className="text-xs text-[#B9B4AA] leading-relaxed">
              Subscribe to receive private invitations to limited-edition releases, artisanal harvests, and olfactive reflections.
            </p>

            {newsletterSubmitted ? (
              <div className="p-3 bg-[#171717] border border-[#C8A45D]/40 rounded text-xs text-[#E4C77E] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>Thank you. You are now inscribed into our private register.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-[#141414] border border-[rgba(200,164,93,0.3)] rounded px-3.5 py-2.5 text-xs text-[#F7F3EB] placeholder-[#B9B4AA]/50 focus:outline-none focus:border-[#E4C77E] transition-colors pr-10"
                    aria-label="Email for newsletter subscription"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#C8A45D] hover:text-[#E4C77E] p-1"
                    aria-label="Submit newsletter subscription"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                <label className="flex items-start gap-2 text-[11px] text-[#B9B4AA]/80 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={newsletterConsent}
                    onChange={(e) => setNewsletterConsent(e.target.checked)}
                    className="mt-0.5 rounded border-[rgba(200,164,93,0.4)] text-[#C8A45D] focus:ring-[#C8A45D] bg-[#141414]"
                  />
                  <span>I agree to receive Raiyaan Luxury newsletters and accept the privacy policy.</span>
                </label>

                {newsletterError && (
                  <p className="text-[11px] text-red-400">{newsletterError}</p>
                )}
              </form>
            )}

            <div className="pt-2 text-[11px] text-[#B9B4AA]/70 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
              <span>Discreet delivery across India • Verified Authenticity</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Payment Methods & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#B9B4AA]/70 space-y-4 md:space-y-0">
          <div>
            <p>
              © {currentYear} Raiyaan Luxury. The Gate of Heaven. All rights reserved.
            </p>
            <p className="text-[10px] text-[#B9B4AA]/50 mt-0.5">
              Rajwada, Indore, Madhya Pradesh, India.
            </p>
          </div>

          {/* Payment & Security Notice */}
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="text-[#C8A45D]">Accepted in India:</span>
            <span className="px-2 py-0.5 bg-[#171717] border border-[rgba(200,164,93,0.2)] rounded text-[10px]">
              UPI / NetBanking
            </span>
            <span className="px-2 py-0.5 bg-[#171717] border border-[rgba(200,164,93,0.2)] rounded text-[10px]">
              Visa / Mastercard
            </span>
            <span className="px-2 py-0.5 bg-[#171717] border border-[rgba(200,164,93,0.2)] rounded text-[10px]">
              Razorpay Secured
            </span>
          </div>

          {/* Policy Links */}
          <div className="flex items-center space-x-4 text-[11px]">
            <Link href="/customer-care#privacy-policy" className="hover:text-[#E4C77E] transition-colors">
              Privacy
            </Link>
            <span className="text-[#C8A45D]/40">•</span>
            <Link href="/customer-care#terms-and-conditions" className="hover:text-[#E4C77E] transition-colors">
              Terms
            </Link>
            <span className="text-[#C8A45D]/40">•</span>
            <Link href="/customer-care#shipping-policy" className="hover:text-[#E4C77E] transition-colors">
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
