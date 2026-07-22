"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useOrders } from "@/context/OrderContext";

export default function CheckoutPage() {
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "Gujarat",
    pincode: "",
    paymentMethod: "upi",
  });

  const delivery = totalPrice >= 500 ? 0 : 50;
  const total = totalPrice + delivery;

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="py-24 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-cream border border-golden/20 flex items-center justify-center mb-4">
          <span className="text-4xl">🛒</span>
        </div>
        <h2 className="text-2xl font-bold text-maroon">Nothing to checkout</h2>
        <Link href="/products" className="text-golden hover:underline mt-2 inline-block">Browse Products →</Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="py-20 text-center max-w-lg mx-auto px-4 animate-scale-in">
        <div className="w-24 h-24 mx-auto rounded-full bg-olive-green/10 border-2 border-olive-green/30 flex items-center justify-center mb-6">
          <span className="text-5xl">🎉</span>
        </div>
        <h2 className="text-3xl font-bold text-maroon">Order Placed!</h2>
        <p className="text-foreground/60 mt-2">Thank you, {form.name}!</p>
        
        <div className="glass rounded-2xl p-6 mt-8 text-left space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-foreground/50">Order ID</span>
            <span className="font-bold text-maroon">{orderId}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground/50">Amount</span>
            <span className="font-bold text-golden">₹{total}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground/50">Payment</span>
            <span className="font-medium">{form.paymentMethod === "cod" ? "Cash on Delivery" : "Online (Confirmed)"}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground/50">Delivery</span>
            <span className="font-medium text-xs">{form.address}, {form.city} - {form.pincode}</span>
          </div>
        </div>

        <div className="glass rounded-xl p-4 mt-4 flex items-center gap-3 text-left">
          <span className="text-2xl">📱</span>
          <div>
            <p className="text-xs text-foreground/50">Confirmation sent to</p>
            <p className="text-sm font-medium text-maroon">{form.mobile}</p>
          </div>
        </div>

        <Link href="/" className="inline-block mt-8 gradient-maroon text-white px-8 py-3 rounded-full font-semibold btn-hover shadow-lg shadow-maroon/20">
          <span className="relative z-10">← Back to Home</span>
        </Link>
      </div>
    );
  }

  const handleSubmit = () => {
    if (step === 1) {
      if (!form.name || !form.mobile || !form.email || !form.address || !form.city || !form.pincode) {
        alert("Please fill all required fields");
        return;
      }
      if (!/^\d{6}$/.test(form.pincode)) {
        alert("Please enter a valid 6-digit pincode");
        return;
      }
      if (!/^\d{10}$/.test(form.mobile.replace(/\s/g, ""))) {
        alert("Please enter a valid 10-digit mobile number");
        return;
      }
      setStep(2);
    } else {
      const id = addOrder({
        customer: {
          name: form.name,
          mobile: form.mobile,
          email: form.email,
          address: form.address,
          city: form.city,
          state: form.state,
          pincode: form.pincode,
        },
        items: items.map((item) => ({
          productId: item.productId,
          nameEn: item.nameEn,
          nameGu: item.nameGu,
          size: item.size,
          price: item.price,
          quantity: item.quantity,
          emoji: item.emoji,
        })),
        subtotal: totalPrice,
        delivery,
        total,
        paymentMethod: form.paymentMethod,
      });
      setOrderId(id);
      setOrderPlaced(true);
      clearCart();
    }
  };

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-maroon">Checkout</h2>
          <p className="text-golden font-medium text-sm">Step {step} of 2 — {step === 1 ? "Delivery" : "Payment"}</p>
        </div>
        {step === 2 && (
          <button onClick={() => setStep(1)} className="text-sm text-maroon/60 hover:text-maroon transition-colors">
            ← Back to delivery
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="flex gap-2 mb-10">
        <div className="flex-1 relative">
          <div className="h-1.5 rounded-full bg-maroon"></div>
          <p className="text-[10px] text-maroon font-medium mt-1">📦 Delivery</p>
        </div>
        <div className="flex-1 relative">
          <div className={`h-1.5 rounded-full transition-all duration-500 ${step >= 2 ? "bg-maroon" : "bg-golden/20"}`}></div>
          <p className={`text-[10px] font-medium mt-1 ${step >= 2 ? "text-maroon" : "text-foreground/30"}`}>💳 Payment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 1 ? (
            <div className="glass rounded-2xl p-6 animate-fade-in-up">
              <h3 className="font-bold text-maroon text-lg mb-5 flex items-center gap-2">
                <span className="text-golden">📦</span> Delivery Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-foreground/50 font-medium block mb-1.5">Full Name *</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-golden/20 bg-cream/50 focus:outline-none focus:border-golden focus:bg-warm-white transition-all text-sm" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs text-foreground/50 font-medium block mb-1.5">Mobile Number *</label>
                  <input type="tel" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-golden/20 bg-cream/50 focus:outline-none focus:border-golden focus:bg-warm-white transition-all text-sm" placeholder="9825731877" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs text-foreground/50 font-medium block mb-1.5">Email *</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-golden/20 bg-cream/50 focus:outline-none focus:border-golden focus:bg-warm-white transition-all text-sm" placeholder="email@example.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs text-foreground/50 font-medium block mb-1.5">Address *</label>
                  <textarea value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-golden/20 bg-cream/50 focus:outline-none focus:border-golden focus:bg-warm-white transition-all text-sm resize-none" placeholder="House/Flat, Street, Area" rows={2} />
                </div>
                <div>
                  <label className="text-xs text-foreground/50 font-medium block mb-1.5">City *</label>
                  <input type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-golden/20 bg-cream/50 focus:outline-none focus:border-golden focus:bg-warm-white transition-all text-sm" placeholder="Ahmedabad" />
                </div>
                <div>
                  <label className="text-xs text-foreground/50 font-medium block mb-1.5">State</label>
                  <input type="text" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-golden/20 bg-cream/50 focus:outline-none focus:border-golden focus:bg-warm-white transition-all text-sm" />
                </div>
                <div>
                  <label className="text-xs text-foreground/50 font-medium block mb-1.5">Pincode *</label>
                  <input type="text" value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-golden/20 bg-cream/50 focus:outline-none focus:border-golden focus:bg-warm-white transition-all text-sm" placeholder="380001" maxLength={6} />
                </div>
              </div>
            </div>
          ) : (
            <div className="glass rounded-2xl p-6 animate-fade-in-up">
              <h3 className="font-bold text-maroon text-lg mb-5 flex items-center gap-2">
                <span className="text-golden">💳</span> Payment Method
              </h3>
              <div className="space-y-3">
                {[
                  { id: "upi", label: "UPI (GPay, PhonePe, Paytm)", icon: "📱", desc: "Instant payment" },
                  { id: "card", label: "Credit / Debit Card", icon: "💳", desc: "Visa, Mastercard, RuPay" },
                  { id: "netbanking", label: "Net Banking", icon: "🏦", desc: "All major banks" },
                  { id: "cod", label: "Cash on Delivery", icon: "💵", desc: "Pay when you receive" },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                      form.paymentMethod === method.id
                        ? "glass border-2 border-maroon/30 shadow-md"
                        : "border border-golden/10 hover:border-golden/30 hover:bg-cream/50"
                    }`}
                  >
                    <input type="radio" name="payment" value={method.id} checked={form.paymentMethod === method.id}
                      onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })} className="accent-maroon w-4 h-4" />
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <span className="font-medium text-foreground text-sm">{method.label}</span>
                      <p className="text-[11px] text-foreground/40">{method.desc}</p>
                    </div>
                  </label>
                ))}
              </div>

              {/* Delivery Summary */}
              <div className="mt-6 p-4 bg-cream/50 rounded-xl border border-golden/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-foreground/50">Delivering to</p>
                    <p className="text-sm font-medium text-maroon">{form.name} • {form.city} - {form.pincode}</p>
                  </div>
                  <button onClick={() => setStep(1)} className="text-golden text-xs font-medium hover:underline">Change</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="glass rounded-2xl p-6 h-fit sticky top-24 border-glow">
          <h3 className="font-bold text-maroon text-lg mb-5">Summary</h3>
          <div className="space-y-2.5 mb-5 max-h-40 overflow-y-auto pr-2">
            {items.map((item) => (
              <div key={`${item.productId}-${item.size}`} className="flex justify-between text-sm items-center">
                <span className="text-foreground/60 text-xs flex items-center gap-1.5">
                  <span>{item.emoji}</span> {item.nameEn} <span className="text-foreground/30">×{item.quantity}</span>
                </span>
                <span className="font-medium text-xs">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-golden/20 pt-4 space-y-2.5 text-sm">
            <div className="flex justify-between text-foreground/50">
              <span>Subtotal</span>
              <span className="text-foreground">₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-foreground/50">
              <span>Delivery</span>
              <span className={delivery === 0 ? "text-olive-green font-medium" : ""}>
                {delivery === 0 ? "✓ FREE" : `₹${delivery}`}
              </span>
            </div>
            <div className="border-t border-golden/20 pt-3 flex justify-between items-center">
              <span className="font-bold text-maroon">Total</span>
              <span className="font-bold text-maroon text-2xl">₹{total}</span>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full mt-6 gradient-maroon text-white py-3.5 rounded-xl font-bold btn-hover shadow-lg shadow-maroon/20"
          >
            <span className="relative z-10">
              {step === 1 ? "Continue to Payment →" : `Pay ₹${total}`}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
