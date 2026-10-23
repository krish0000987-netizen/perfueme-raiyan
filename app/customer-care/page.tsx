"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG, getWhatsAppLink } from "@/lib/config";
import {
  ChevronDown,
  ShieldCheck,
  Truck,
  RotateCcw,
  Lock,
  FileText,
  Phone,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";

interface AccordionItem {
  id: string;
  category: string;
  question: string;
  answer: string | React.ReactNode;
}

const FAQ_ITEMS: AccordionItem[] = [
  {
    id: "order-how",
    category: "Ordering & Payment",
    question: "How do I place an order with Raiyaan Luxury?",
    answer:
      "You may place an order directly through our secure online shopping bag, or by speaking directly with our private WhatsApp Concierge. Simply select your desired fragrance and volume, add to bag, and complete the shipping details. Our concierge is also available to curate custom bespoke gift arrangements.",
  },
  {
    id: "payment-methods",
    category: "Ordering & Payment",
    question: "What payment methods are accepted in India?",
    answer:
      "We accept major Indian payment methods through our secure Razorpay integration, including UPI (Google Pay, PhonePe, Paytm), Net Banking across all major Indian banks, and Visa, Mastercard, and RuPay credit/debit cards.",
  },
  {
    id: "fragrance-concentration",
    category: "Product & Scent Guidance",
    question: "What is the concentration difference between your Extraits and Attars?",
    answer:
      "Our Extraits de Parfum contain between 30% to 35% pure fragrance oil blended in fine perfumer's alcohol for expansive sillage. Our Attars are 100% pure concentrated fragrance oils formulated completely without alcohol, designed to stay close to skin for intimate, all-day warmth.",
  },
  {
    id: "authentic-oud",
    category: "Product & Scent Guidance",
    question: "How do you source your agarwood (oud)?",
    answer:
      "We source genuine wild and sustainably cultivated Aquilaria agarwood from established distillers in Cambodia and Assam. Each batch undergoes slow distillation to capture the authentic, multi-layered resinous profile without synthetic stabilizers.",
  },
  {
    id: "shipping-timelines",
    category: "Delivery & Shipping",
    question: "How long does shipping take across India?",
    answer: (
      <div className="space-y-2">
        <p>
          Orders are hand-packaged at our boutique in Rajwada, Indore, and dispatched within 24–48 business hours via insured courier.
        </p>
        <p className="text-[#C8A45D]">
          Estimated transit times: Metro cities (Mumbai, Delhi NCR, Bangalore): 2–4 business days. Other states and regions: 4–6 business days.
        </p>
      </div>
    ),
  },
  {
    id: "tracking-orders",
    category: "Delivery & Shipping",
    question: "How will I track my parcel?",
    answer:
      "Upon dispatch, you will receive an SMS and email notification with an active tracking link from our courier partner (Bluedart / Delhivery). You can also share your order reference with our WhatsApp Concierge for live updates.",
  },
];

export default function CustomerCarePage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("order-how");
  const [activeTab, setActiveTab] = useState<"faq" | "shipping" | "returns" | "privacy" | "terms">("faq");

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="w-full bg-[#080808] text-[#F7F3EB]">
      {/* 1. Page Hero Banner */}
      <section className="relative h-[55vh] sm:h-[60vh] flex items-center justify-center overflow-hidden border-b border-[rgba(200,164,93,0.25)]">
        <Image
          src="/images/hero/hero-customer-care.jpg"
          alt="Raiyaan Luxury Customer Care & Policies"
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
              CLIENT SUPPORT & POLICIES
            </span>
            <span className="w-8 h-[1px] bg-[#C8A45D]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F3EB] uppercase tracking-wide">
            CUSTOMER CARE & POLICIES
          </h1>
          <p className="text-xs sm:text-base text-[#B9B4AA] max-w-xl mx-auto font-light leading-relaxed">
            Transparent information on our delivery standards, return guidelines, product care, and privacy commitments.
          </p>
        </div>
      </section>

      {/* Owner Review Alert Banner */}
      <div className="bg-[#141414] border-b border-[rgba(200,164,93,0.2)] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs text-[#E4C77E]">
          <AlertTriangle className="w-4 h-4 text-[#C8A45D] shrink-0" />
          <span>
            <strong>Note for Business Owner:</strong> All operational terms below (delivery timelines, return windows, courier partners) are configurable in settings prior to final deployment.
          </span>
        </div>
      </div>

      {/* 2. Navigation Tab Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 border-b border-[rgba(200,164,93,0.2)] pb-4">
          {[
            { id: "faq", label: "Frequently Asked Questions", icon: HelpCircle },
            { id: "shipping", label: "Shipping Policy", icon: Truck },
            { id: "returns", label: "Return & Refund Policy", icon: RotateCcw },
            { id: "privacy", label: "Privacy Policy", icon: Lock },
            { id: "terms", label: "Terms & Conditions", icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded text-xs uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-[#C8A45D] text-[#080808] font-semibold shadow-[0_0_15px_rgba(200,164,93,0.3)]"
                    : "bg-[#121212] border border-[rgba(200,164,93,0.2)] text-[#B9B4AA] hover:text-[#F7F3EB]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Tab Contents */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
        {/* TAB 1: FAQ ACCORDION */}
        {activeTab === "faq" && (
          <div className="space-y-4">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F7F3EB] uppercase tracking-wide">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-[#B9B4AA] mt-1 font-light">
                Find answers regarding orders, product specifications, and delivery.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openAccordion === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-[#121212] border border-[rgba(200,164,93,0.22)] rounded-md overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-sm sm:text-base font-serif text-[#F7F3EB] hover:text-[#E4C77E] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3 pr-4">
                        <span className="text-[10px] uppercase tracking-wider text-[#C8A45D] bg-[#1A1A1A] px-2 py-0.5 rounded font-sans shrink-0">
                          {item.category}
                        </span>
                        <span>{item.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#C8A45D] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#E4C77E]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#B9B4AA] font-light leading-relaxed border-t border-[rgba(200,164,93,0.12)] pt-3 animate-fadeIn">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: SHIPPING POLICY */}
        {activeTab === "shipping" && (
          <div id="shipping-policy" className="space-y-6 bg-[#111111] p-6 sm:p-10 rounded-lg border border-[rgba(200,164,93,0.2)] text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F7F3EB] uppercase tracking-wide">
              Shipping & Delivery Policy
            </h2>
            <div className="p-3 bg-[#171717] rounded border border-[rgba(200,164,93,0.25)] text-xs text-[#E4C77E]">
              <strong>Primary Market:</strong> India. Dispatched from Rajwada, Indore, Madhya Pradesh.
            </div>

            <section className="space-y-2">
              <h3 className="font-serif text-lg text-[#F7F3EB]">1. Processing & Handling</h3>
              <p>
                Every order of fine fragrance is treated with artisanal care. Orders placed before 1:00 PM IST on business days are processed within 24 to 48 hours. Each bottle undergoes a weight and nozzle seal inspection before receiving hand-applied security cellophane.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg text-[#F7F3EB]">2. Delivery Timelines</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Metro Cities (Indore, Mumbai, Delhi, Bengaluru, Hyderabad): 2 to 4 business days.</li>
                <li>Rest of India: 4 to 6 business days.</li>
                <li>Special remote locations may take up to 7–8 business days.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg text-[#F7F3EB]">3. Shipping Rates</h3>
              <p>
                We offer <strong>Complimentary Insured Shipping</strong> on all domestic orders valued at ₹4,999 and above. For orders under ₹4,999, a flat insured delivery fee of ₹150 applies at checkout.
              </p>
            </section>
          </div>
        )}

        {/* TAB 3: RETURN & REFUND POLICY */}
        {activeTab === "returns" && (
          <div id="return-policy" className="space-y-6 bg-[#111111] p-6 sm:p-10 rounded-lg border border-[rgba(200,164,93,0.2)] text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F7F3EB] uppercase tracking-wide">
              Return & Refund Policy
            </h2>

            <section className="space-y-2">
              <h3 className="font-serif text-lg text-[#F7F3EB]">1. Hygiene & Seal Integrity</h3>
              <p>
                Due to strict hygiene, cosmetic integrity, and dermatological guidelines governing haute perfumery, opened or sprayed flacons cannot be returned or refunded.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg text-[#F7F3EB]">2. Eligible Exchanges (7 Days)</h3>
              <p>
                You may request an exchange within 7 days of receiving your order, provided that the product remains completely unused, unopened, in its original black presentation box with the security cellophane intact.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg text-[#F7F3EB]">3. Damaged or Defective Deliveries</h3>
              <p>
                If your package arrives with glass breakage or pump malfunction, notify our concierge within 48 hours of delivery with photographic or unboxing video evidence. A prompt replacement will be dispatched at zero additional cost.
              </p>
            </section>
          </div>
        )}

        {/* TAB 4: PRIVACY POLICY */}
        {activeTab === "privacy" && (
          <div id="privacy-policy" className="space-y-6 bg-[#111111] p-6 sm:p-10 rounded-lg border border-[rgba(200,164,93,0.2)] text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F7F3EB] uppercase tracking-wide">
              Privacy Policy
            </h2>
            <p>
              Raiyaan Luxury is committed to preserving the privacy and confidentiality of your personal information.
            </p>

            <section className="space-y-2">
              <h3 className="font-serif text-lg text-[#F7F3EB]">1. Data Collected</h3>
              <p>
                We collect your name, delivery address, contact phone number, and email address solely for processing your orders, courier notifications, and responding to your enquiries.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg text-[#F7F3EB]">2. Payment Data Security</h3>
              <p>
                We never store raw credit card or debit card numbers on our servers. All financial transactions are processed securely through certified PCI-DSS compliant Indian payment gateways (Razorpay).
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg text-[#F7F3EB]">3. No Third-Party Reselling</h3>
              <p>
                We will never sell, rent, or trade your contact details with external advertising brokers.
              </p>
            </section>
          </div>
        )}

        {/* TAB 5: TERMS & CONDITIONS */}
        {activeTab === "terms" && (
          <div id="terms-and-conditions" className="space-y-6 bg-[#111111] p-6 sm:p-10 rounded-lg border border-[rgba(200,164,93,0.2)] text-xs sm:text-sm text-[#B9B4AA] leading-relaxed font-light">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F7F3EB] uppercase tracking-wide">
              Terms & Conditions
            </h2>
            <p>
              Welcome to Raiyaan Luxury. By browsing or purchasing from our platform, you agree to comply with the terms set forth herein.
            </p>

            <section className="space-y-2">
              <h3 className="font-serif text-lg text-[#F7F3EB]">1. Artisanal Natural Variations</h3>
              <p>
                Because our creations contain natural harvests of aged agarwood, botanical absolutes, and essential oils, subtle batch-to-batch color shifts are natural and indicate pure raw materials.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg text-[#F7F3EB]">2. Jurisdiction</h3>
              <p>
                These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts in Indore, Madhya Pradesh.
              </p>
            </section>
          </div>
        )}
      </section>

      {/* 4. Bottom Support CTA */}
      <section className="py-16 bg-[#0E0E0E] border-t border-[rgba(200,164,93,0.2)] text-center">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <Phone className="w-6 h-6 text-[#C8A45D] mx-auto" />
          <h3 className="font-serif text-2xl text-[#F7F3EB] uppercase tracking-wide">
            Still Have Questions?
          </h3>
          <p className="text-xs text-[#B9B4AA]">
            Our concierge team is available to assist you Monday through Saturday.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link href="/contact" className="btn-gold py-2.5 px-6 rounded text-xs tracking-wider font-semibold">
              Send an Enquiry
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline py-2.5 px-6 rounded text-xs tracking-wider"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
