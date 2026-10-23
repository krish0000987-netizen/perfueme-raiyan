"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatINR, getWhatsAppLink } from "@/lib/config";

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<"cart" | "checkout">("cart");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "Madhya Pradesh",
    pincode: "",
    paymentMethod: "online",
  });
  const [orderPlacedNotice, setOrderPlacedNotice] = useState(false);

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 4999;
  const progressToFreeShipping = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  // Generate WhatsApp order message with items and total
  const orderItemsSummary = items
    .map(
      (item) =>
        `• ${item.name} (${item.selectedVariant.size}) x${item.quantity} — ${formatINR(
          item.selectedVariant.price * item.quantity
        )}`
    )
    .join("\n");

  const whatsappCheckoutText = `*New Order Request via Raiyaan Luxury*\n\n*Items:*\n${orderItemsSummary}\n\n*Total Amount:* ${formatINR(
    subtotal
  )}\n\nPlease assist me with delivery and payment details.`;

  const handleOnlineCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Live payment integration warning/confirmation
    setOrderPlacedNotice(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={() => {
          setIsCartOpen(false);
          setCheckoutStep("cart");
          setOrderPlacedNotice(false);
        }}
      />

      {/* Slide-over Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0D0D0D] border-l border-[rgba(200,164,93,0.3)] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-[rgba(200,164,93,0.2)] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#C8A45D]" />
              <h2 className="font-serif text-lg tracking-[0.15em] text-[#F7F3EB] uppercase">
                {checkoutStep === "cart" ? "Your Shopping Bag" : "Checkout Details"}
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#1A1A1A] border border-[rgba(200,164,93,0.3)] text-[#E4C77E]">
                {itemCount}
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setIsCartOpen(false);
                setCheckoutStep("cart");
                setOrderPlacedNotice(false);
              }}
              className="p-1.5 text-[#B9B4AA] hover:text-[#F7F3EB] transition-colors"
              aria-label="Close Shopping Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Progress */}
          {items.length > 0 && checkoutStep === "cart" && (
            <div className="px-5 py-3 bg-[#121212] border-b border-[rgba(200,164,93,0.15)] text-xs">
              <div className="flex justify-between text-[#B9B4AA] mb-1.5">
                <span>
                  {subtotal >= FREE_SHIPPING_THRESHOLD ? (
                    <span className="text-[#E4C77E] font-medium">
                      ✓ Complimentary Insured Delivery unlocked!
                    </span>
                  ) : (
                    <span>
                      Add <strong className="text-[#E4C77E]">{formatINR(remainingForFreeShipping)}</strong> more for Complimentary Delivery
                    </span>
                  )}
                </span>
                <span className="text-[#E4C77E] font-semibold">{progressToFreeShipping}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#1F1F1F] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C8A45D] to-[#E4C77E] transition-all duration-500"
                  style={{ width: `${progressToFreeShipping}%` }}
                />
              </div>
            </div>
          )}

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {orderPlacedNotice ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#171717] border border-[#C8A45D] flex items-center justify-center text-[#E4C77E]">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl tracking-[0.1em] text-[#F7F3EB] uppercase">
                  Order Request Received
                </h3>
                <p className="text-xs text-[#B9B4AA] leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong className="text-[#F7F3EB]">{formData.fullName}</strong>. Your order request for{" "}
                  <strong className="text-[#E4C77E]">{formatINR(subtotal)}</strong> has been registered.
                </p>
                <div className="p-4 bg-[#141414] border border-[rgba(200,164,93,0.2)] rounded text-xs text-left space-y-2">
                  <p className="text-[#E4C77E] font-semibold">Payment Gateway Note:</p>
                  <p className="text-[#B9B4AA]">
                    Live Indian payment gateways (Razorpay / UPI) are currently in test configuration. Our concierge will contact you at{" "}
                    <strong className="text-[#F7F3EB]">{formData.phone}</strong> to confirm dispatch and delivery details.
                  </p>
                </div>
                <div className="pt-4">
                  <a
                    href={getWhatsAppLink(
                      `Hello, I placed an online order request (Total: ${formatINR(subtotal)}) for ${formData.fullName}. Please confirm my order.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full py-3 px-4 rounded text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      clearCart();
                      setIsCartOpen(false);
                      setOrderPlacedNotice(false);
                      setCheckoutStep("cart");
                    }}
                    className="mt-3 text-xs text-[#B9B4AA] hover:text-[#F7F3EB] underline"
                  >
                    Clear Cart & Continue Shopping
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#141414] border border-[rgba(200,164,93,0.2)] flex items-center justify-center text-[#C8A45D]">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-lg tracking-[0.15em] text-[#F7F3EB] uppercase">
                  Your Bag is Empty
                </h3>
                <p className="text-xs text-[#B9B4AA] max-w-xs leading-relaxed">
                  Discover our timeless creations of rare Cambodian oud, pure attar oils, and signature extraits.
                </p>
                <Link
                  href="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="btn-gold py-2.5 px-6 rounded text-xs inline-block tracking-[0.15em]"
                >
                  Explore The Collection
                </Link>
              </div>
            ) : checkoutStep === "cart" ? (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-[#121212] border border-[rgba(200,164,93,0.18)] rounded-md transition-colors hover:border-[rgba(200,164,93,0.35)]"
                  >
                    {/* Item Image */}
                    <div className="relative w-20 h-20 bg-[#171717] rounded overflow-hidden shrink-0 border border-[rgba(200,164,93,0.15)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <Link
                            href={`/product/${item.slug}`}
                            onClick={() => setIsCartOpen(false)}
                            className="font-serif text-sm text-[#F7F3EB] hover:text-[#E4C77E] transition-colors"
                          >
                            {item.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-[#B9B4AA] hover:text-red-400 p-1 transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[10px] text-[#C8A45D] tracking-[0.1em] uppercase mt-0.5">
                          {item.selectedVariant.size} • {item.fragranceFamily}
                        </p>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[rgba(200,164,93,0.1)]">
                        <div className="flex items-center border border-[rgba(200,164,93,0.25)] rounded bg-[#171717]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-xs text-[#B9B4AA] hover:text-[#F7F3EB]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-[#F7F3EB]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-xs text-[#B9B4AA] hover:text-[#F7F3EB]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-semibold text-[#E4C77E]">
                            {formatINR(item.selectedVariant.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Checkout Form */
              <form id="checkout-form" onSubmit={handleOnlineCheckoutSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[rgba(200,164,93,0.15)]">
                  <span className="text-xs text-[#E4C77E] uppercase tracking-[0.1em]">
                    Shipping Destination (India)
                  </span>
                  <button
                    type="button"
                    onClick={() => setCheckoutStep("cart")}
                    className="text-xs text-[#B9B4AA] hover:text-[#F7F3EB] underline"
                  >
                    ← Edit Bag
                  </button>
                </div>

                <div>
                  <label className="block text-[11px] text-[#B9B4AA] uppercase tracking-[0.1em] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#141414] border border-[rgba(200,164,93,0.3)] rounded px-3 py-2 text-xs text-[#F7F3EB] focus:outline-none focus:border-[#E4C77E]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#B9B4AA] uppercase tracking-[0.1em] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="w-full bg-[#141414] border border-[rgba(200,164,93,0.3)] rounded px-3 py-2 text-xs text-[#F7F3EB] focus:outline-none focus:border-[#E4C77E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#B9B4AA] uppercase tracking-[0.1em] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full bg-[#141414] border border-[rgba(200,164,93,0.3)] rounded px-3 py-2 text-xs text-[#F7F3EB] focus:outline-none focus:border-[#E4C77E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-[#B9B4AA] uppercase tracking-[0.1em] mb-1">
                    Street Address & Apartment *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House / Flat No., Landmark, Street"
                    className="w-full bg-[#141414] border border-[rgba(200,164,93,0.3)] rounded px-3 py-2 text-xs text-[#F7F3EB] focus:outline-none focus:border-[#E4C77E]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[11px] text-[#B9B4AA] uppercase tracking-[0.1em] mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Indore"
                      className="w-full bg-[#141414] border border-[rgba(200,164,93,0.3)] rounded px-3 py-2 text-xs text-[#F7F3EB] focus:outline-none focus:border-[#E4C77E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#B9B4AA] uppercase tracking-[0.1em] mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-[#141414] border border-[rgba(200,164,93,0.3)] rounded px-3 py-2 text-xs text-[#F7F3EB] focus:outline-none focus:border-[#E4C77E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#B9B4AA] uppercase tracking-[0.1em] mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      placeholder="452002"
                      className="w-full bg-[#141414] border border-[rgba(200,164,93,0.3)] rounded px-3 py-2 text-xs text-[#F7F3EB] focus:outline-none focus:border-[#E4C77E]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <span className="block text-[11px] text-[#B9B4AA] uppercase tracking-[0.1em] mb-2">
                    Payment Method
                  </span>
                  <div className="space-y-2 text-xs">
                    <label className="flex items-center gap-2 p-2.5 bg-[#171717] border border-[#C8A45D]/40 rounded cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={formData.paymentMethod === "online"}
                        onChange={() => setFormData({ ...formData, paymentMethod: "online" })}
                        className="text-[#C8A45D]"
                      />
                      <div>
                        <p className="text-[#F7F3EB] font-medium">Online Payment / UPI / Cards (India)</p>
                        <p className="text-[10px] text-[#B9B4AA]">Secured processing through Razorpay</p>
                      </div>
                    </label>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && !orderPlacedNotice && (
            <div className="p-5 border-t border-[rgba(200,164,93,0.2)] bg-[#101010] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#B9B4AA]">
                  <span>Subtotal</span>
                  <span className="text-[#F7F3EB] font-medium">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#B9B4AA]">
                  <span>Estimated Shipping</span>
                  <span className="text-[#E4C77E]">
                    {subtotal >= FREE_SHIPPING_THRESHOLD ? "Complimentary" : "₹150 (Calculated at step)"}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#F7F3EB] pt-1.5 border-t border-[rgba(200,164,93,0.15)]">
                  <span>Grand Total</span>
                  <span className="text-[#E4C77E]">{formatINR(subtotal)}</span>
                </div>
              </div>

              {checkoutStep === "cart" ? (
                <div className="space-y-2 pt-1">
                  {/* Primary Checkout Button */}
                  <button
                    type="button"
                    onClick={() => setCheckoutStep("checkout")}
                    className="btn-gold w-full py-3 px-4 rounded text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Direct WhatsApp Order Option */}
                  <a
                    href={getWhatsAppLink(whatsappCheckoutText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded text-xs font-semibold uppercase tracking-[0.14em] bg-[#171717] border border-[rgba(200,164,93,0.35)] hover:border-[#E4C77E] text-[#E4C77E] flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order via WhatsApp Concierge</span>
                  </a>
                </div>
              ) : (
                <button
                  type="submit"
                  form="checkout-form"
                  className="btn-gold w-full py-3 px-4 rounded text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <span>Complete Order Request ({formatINR(subtotal)})</span>
                  <ShieldCheck className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
