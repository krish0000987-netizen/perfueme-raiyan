"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG, getWhatsAppLink } from "@/lib/config";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, AlertCircle, HelpCircle, ShieldAlert } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "General Fragrance Enquiry",
    message: "",
    consent: false,
    botTrap: "", // anti-spam honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successData, setSuccessData] = useState<{ referenceId: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Spam honeypot check
    if (formData.botTrap) {
      return;
    }

    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMessage("Please enter a valid contact phone number.");
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage("Please describe your enquiry in at least 10 characters.");
      return;
    }
    if (!formData.consent) {
      setErrorMessage("Please confirm your consent to the privacy policy.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setSuccessData({ referenceId: data.referenceId });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#080808] text-[#F7F3EB]">
      {/* 1. Hero Section */}
      <section className="relative h-[55vh] sm:h-[60vh] flex items-center justify-center overflow-hidden border-b border-[rgba(200,164,93,0.25)]">
        <Image
          src="/images/hero/hero-contact.jpg"
          alt="Raiyaan Luxury Concierge Contact"
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
              PRIVATE CONCIERGE & ATELIER
            </span>
            <span className="w-8 h-[1px] bg-[#C8A45D]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F3EB] uppercase tracking-wide">
            LET US HELP YOU FIND YOUR SCENT
          </h1>
          <p className="text-xs sm:text-base text-[#B9B4AA] max-w-xl mx-auto font-light leading-relaxed">
            Our fragrance specialists are at your disposal for personalized scent recommendations, gifting consultations, and bespoke orders.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Inquiry Form */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Business Details & Verification Notice */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] font-medium">
                THE BOUTIQUE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EB] uppercase tracking-wide mt-1">
                Raiyaan Luxury
              </h2>
              <p className="text-xs text-[#C8A45D] uppercase tracking-[0.2em] font-light mt-0.5">
                The Gate of Heaven
              </p>
            </div>

            <div className="space-y-5 text-xs text-[#B9B4AA]">
              {/* Address */}
              <div className="flex items-start gap-3 p-4 bg-[#111111] border border-[rgba(200,164,93,0.2)] rounded-md">
                <MapPin className="w-5 h-5 text-[#C8A45D] mt-0.5 shrink-0" />
                <div>
                  <strong className="text-[#F7F3EB] block mb-1">Atelier & Showroom:</strong>
                  <p>{BRAND_CONFIG.address.street}, {BRAND_CONFIG.address.locality}</p>
                  <p>{BRAND_CONFIG.address.city}, {BRAND_CONFIG.address.state}, {BRAND_CONFIG.address.country}</p>
                </div>
              </div>

              {/* Phone with Verification Flag */}
              <div className="flex items-start gap-3 p-4 bg-[#111111] border border-[rgba(200,164,93,0.2)] rounded-md">
                <Phone className="w-5 h-5 text-[#C8A45D] mt-0.5 shrink-0" />
                <div>
                  <strong className="text-[#F7F3EB] block mb-1">Direct Telephone:</strong>
                  <p className="font-mono text-sm text-[#E4C77E]">
                    {BRAND_CONFIG.contact.phoneDisplay}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#C8A45D] mt-1.5 p-1 px-2 bg-[#1A1A1A] rounded border border-[rgba(200,164,93,0.3)]">
                    <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                    <span>Configured in central settings. Flagged for verification before public launch.</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 p-4 bg-[#111111] border border-[rgba(200,164,93,0.2)] rounded-md">
                <Mail className="w-5 h-5 text-[#C8A45D] mt-0.5 shrink-0" />
                <div>
                  <strong className="text-[#F7F3EB] block mb-1">Concierge Email:</strong>
                  <a
                    href={`mailto:${BRAND_CONFIG.contact.email}`}
                    className="text-[#E4C77E] hover:underline"
                  >
                    {BRAND_CONFIG.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 bg-[#121212] border border-[rgba(200,164,93,0.3)] rounded-md space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E4C77E] font-medium block">
                Instant Assistance
              </span>
              <h3 className="font-serif text-xl text-[#F7F3EB]">WhatsApp Concierge</h3>
              <p className="text-xs text-[#B9B4AA] leading-relaxed font-light">
                For prompt replies regarding current batch harvests, stock availability, or tracking an active order.
              </p>
              <a
                href={getWhatsAppLink("Hello Raiyaan Luxury Concierge, I would like to inquire about your fragrance collection.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full py-3 px-4 rounded text-xs font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#101010] border border-[rgba(200,164,93,0.25)] rounded-lg p-6 sm:p-10 shadow-2xl">
            {successData ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#171717] border border-[#C8A45D] flex items-center justify-center text-[#E4C77E]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#F7F3EB] uppercase tracking-wide">
                  Enquiry Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-[#B9B4AA] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Raiyaan Luxury. Your message has been logged under reference{" "}
                  <strong className="text-[#E4C77E] font-mono">{successData.referenceId}</strong>.
                  Our private concierge will review your enquiry and contact you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSuccessData(null);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      category: "General Fragrance Enquiry",
                      message: "",
                      consent: false,
                      botTrap: "",
                    });
                  }}
                  className="btn-gold-outline py-2.5 px-6 rounded text-xs tracking-wider font-medium mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl text-[#F7F3EB] uppercase tracking-wide">
                    Send a Private Message
                  </h3>
                  <p className="text-xs text-[#B9B4AA] mt-1 font-light">
                    Complete the dossier below to connect with our atelier team.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-950/60 border border-red-500/40 rounded flex items-center gap-2 text-xs text-red-200">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  name="botTrap"
                  value={formData.botTrap}
                  onChange={(e) => setFormData({ ...formData, botTrap: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.14em] text-[#B9B4AA] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Vikramaditya Rao"
                      className="w-full bg-[#161616] border border-[rgba(200,164,93,0.25)] rounded px-3.5 py-2.5 text-xs text-[#F7F3EB] focus:outline-none focus:border-[#E4C77E]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.14em] text-[#B9B4AA] mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="w-full bg-[#161616] border border-[rgba(200,164,93,0.25)] rounded px-3.5 py-2.5 text-xs text-[#F7F3EB] focus:outline-none focus:border-[#E4C77E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.14em] text-[#B9B4AA] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full bg-[#161616] border border-[rgba(200,164,93,0.25)] rounded px-3.5 py-2.5 text-xs text-[#F7F3EB] focus:outline-none focus:border-[#E4C77E]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.14em] text-[#B9B4AA] mb-1">
                      Enquiry Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#161616] border border-[rgba(200,164,93,0.25)] text-[#F7F3EB] rounded px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#E4C77E]"
                    >
                      <option value="General Fragrance Enquiry">General Fragrance Enquiry</option>
                      <option value="Scent Consultation">Scent Consultation / Recommendation</option>
                      <option value="Attar & Pure Oud Inquiries">Attar & Pure Oud Inquiries</option>
                      <option value="Prestige Gifting & Corporate">Prestige Gifting & Corporate</option>
                      <option value="Order Tracking & Dispatch">Order Tracking & Dispatch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.14em] text-[#B9B4AA] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the scent profile, notes, or assistance you require..."
                    className="w-full bg-[#161616] border border-[rgba(200,164,93,0.25)] rounded px-3.5 py-2.5 text-xs text-[#F7F3EB] focus:outline-none focus:border-[#E4C77E]"
                  />
                </div>

                <label className="flex items-start gap-2.5 text-xs text-[#B9B4AA] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded border-[rgba(200,164,93,0.4)] text-[#C8A45D] bg-[#141414]"
                  />
                  <span>
                    I consent to Raiyaan Luxury processing my details in accordance with the{" "}
                    <Link href="/customer-care#privacy-policy" className="text-[#E4C77E] underline">
                      privacy policy
                    </Link>.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full py-3.5 px-6 rounded text-xs font-semibold flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Dispatching Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Quick FAQ & Customer Care Links */}
      <section className="py-16 bg-[#0E0E0E] border-t border-[rgba(200,164,93,0.2)]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <HelpCircle className="w-7 h-7 text-[#C8A45D] mx-auto" />
          <h3 className="font-serif text-2xl text-[#F7F3EB] uppercase tracking-wide">
            Need Immediate Policy Answers?
          </h3>
          <p className="text-xs text-[#B9B4AA] max-w-md mx-auto">
            Find answers to frequently asked questions regarding insured shipping across India, returns policy, and fragrance care.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/customer-care"
              className="btn-gold-outline py-2.5 px-6 rounded text-xs tracking-wider"
            >
              Visit Customer Care Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
