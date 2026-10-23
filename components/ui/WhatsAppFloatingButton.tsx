"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { getWhatsAppLink } from "@/lib/config";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppFloatingButton() {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(true);

  // If on a product page, elevate higher to avoid obscuring the mobile sticky add-to-cart bar
  const isProductPage = pathname?.startsWith("/product/");

  return (
    <aside
      aria-label="Direct WhatsApp Concierge"
      className={`fixed z-40 transition-all duration-300 ${
        isProductPage ? "bottom-20 sm:bottom-8 right-4 sm:right-8" : "bottom-6 sm:bottom-8 right-4 sm:right-8"
      }`}
    >
      <div className="relative flex items-center group">
        {/* Subtle Luxury Tooltip / Message Bubble */}
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 bg-[#121212]/95 backdrop-blur-md border border-[rgba(200,164,93,0.35)] rounded-full text-xs text-[#F7F3EB] shadow-[0_4px_20px_rgba(0,0,0,0.8)] animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-medium tracking-wide">Inquire on WhatsApp</span>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-[#B9B4AA] hover:text-white ml-1 p-0.5"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Floating Button */}
        <a
          href={getWhatsAppLink(
            "Hello Raiyaan Luxury Concierge, I would like to inquire about your fragrance collection and bespoke services."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#111111] border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-[0_4px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95"
          aria-label="Chat with Raiyaan Luxury Concierge on WhatsApp"
        >
          {/* Pulsing Beacon Indicator */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366]" />
          </span>

          {/* WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12c0 1.984.531 3.844 1.453 5.469L2 22l4.672-1.438A9.91 9.91 0 0 0 12.031 22c5.516 0 10-4.484 10-10s-4.484-10-10-10zm0 18.297c-1.703 0-3.328-.469-4.734-1.297l-.344-.203-3.156.969.984-3.078-.219-.359a8.21 8.21 0 0 1-1.281-4.328c0-4.563 3.719-8.281 8.281-8.281 4.563 0 8.281 3.719 8.281 8.281 0 4.563-3.719 8.297-8.281 8.297zm4.547-6.203c-.25-.125-1.469-.719-1.703-.797-.219-.094-.375-.125-.531.125-.156.25-.609.797-.75.953-.141.156-.281.172-.531.047-.25-.125-1.062-.391-2.016-1.25-.75-.672-1.25-1.5-1.391-1.75-.141-.25-.016-.391.109-.516.109-.109.25-.281.375-.422.125-.141.172-.25.25-.422.078-.172.047-.328-.016-.453-.063-.125-.531-1.281-.734-1.75-.188-.453-.391-.391-.531-.391h-.453c-.156 0-.422.063-.641.312-.219.25-.844.828-.844 2.016s.859 2.344.984 2.5c.125.156 1.703 2.609 4.125 3.656.578.25 1.031.406 1.391.516.594.188 1.125.156 1.547.094.469-.078 1.469-.609 1.672-1.203.219-.594.219-1.094.156-1.203-.063-.109-.219-.172-.469-.297z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
