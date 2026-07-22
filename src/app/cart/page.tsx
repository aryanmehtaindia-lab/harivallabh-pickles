"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const delivery = totalPrice >= 500 ? 0 : 50;
  const total = totalPrice + delivery;

  if (items.length === 0) {
    return (
      <div className="py-24 text-center max-w-lg mx-auto px-4">
        <div className="w-24 h-24 mx-auto rounded-full bg-cream border border-golden/20 flex items-center justify-center mb-6">
          <span className="text-5xl">🛒</span>
        </div>
        <h2 className="text-2xl font-bold text-maroon">Your cart is empty</h2>
        <p className="text-foreground/50 mt-2 mb-8">Time to add some homemade goodness!</p>
        <Link href="/products" className="gradient-maroon text-white px-8 py-3 rounded-full font-semibold btn-hover shadow-lg shadow-maroon/20">
          <span className="relative z-10">🍯 Browse Products</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-maroon">Shopping Cart</h2>
          <p className="text-golden font-medium text-sm">{totalItems} items</p>
        </div>
        <Link href="/products" className="text-sm text-maroon/60 hover:text-maroon transition-colors flex items-center gap-1">
          ← Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-3">
          {items.map((item, i) => (
            <div
              key={`${item.productId}-${item.size}`}
              className="glass rounded-xl p-5 flex items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-cream border border-golden/20 flex items-center justify-center shrink-0">
                <span className="text-3xl">{item.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-maroon text-sm truncate">{item.nameGu}</h4>
                <p className="text-xs text-foreground/50">{item.nameEn} • {item.size}</p>
                <p className="text-golden font-bold text-sm mt-0.5">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                  className="w-8 h-8 rounded-lg border border-golden/20 text-sm font-bold hover:bg-cream transition-colors flex items-center justify-center"
                >
                  −
                </button>
                <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                  className="w-8 h-8 rounded-lg border border-golden/20 text-sm font-bold hover:bg-cream transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>
              <div className="text-right shrink-0">
                <p className="font-bold text-maroon">₹{item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.productId, item.size)}
                  className="text-red-400 text-[10px] hover:text-red-600 transition-colors mt-0.5 font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="glass rounded-2xl p-6 h-fit sticky top-24 border-glow">
          <h3 className="font-bold text-maroon text-lg mb-5">Order Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-foreground/60">
              <span>Subtotal ({totalItems} items)</span>
              <span className="font-medium text-foreground">₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-foreground/60">
              <span>Delivery</span>
              <span className={`font-medium ${delivery === 0 ? 'text-olive-green' : 'text-foreground'}`}>
                {delivery === 0 ? "✓ FREE" : `₹${delivery}`}
              </span>
            </div>
            {totalPrice < 500 && (
              <div className="bg-golden/10 rounded-lg p-3 text-xs text-golden font-medium">
                💡 Add ₹{500 - totalPrice} more for free delivery
                <div className="w-full bg-golden/20 rounded-full h-1.5 mt-2">
                  <div className="bg-golden rounded-full h-1.5 transition-all" style={{ width: `${Math.min((totalPrice / 500) * 100, 100)}%` }}></div>
                </div>
              </div>
            )}
            <div className="border-t border-golden/20 pt-4 flex justify-between items-center">
              <span className="font-bold text-maroon">Total</span>
              <span className="font-bold text-maroon text-2xl">₹{total}</span>
            </div>
          </div>
          <Link
            href="/checkout"
            className="block text-center mt-6 gradient-maroon text-white py-3.5 rounded-full font-bold btn-hover shadow-lg shadow-maroon/20"
          >
            <span className="relative z-10">Proceed to Checkout →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
