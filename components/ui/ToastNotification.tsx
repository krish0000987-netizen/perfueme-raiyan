"use client";

import React from "react";
import { useCart } from "@/lib/cart-context";
import { Sparkles } from "lucide-react";

export function ToastNotification() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="bg-[#141414] border border-[#C8A45D] text-[#F7F3EB] px-4 py-3 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-[#C8A45D]/20 flex items-center justify-center text-[#E4C77E] shrink-0">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-medium tracking-wide">{toastMessage}</span>
      </div>
    </div>
  );
}
