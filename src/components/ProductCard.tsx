"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const defaultVariant = product.variants[0];

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      productId: product.id,
      nameEn: product.nameEn,
      nameGu: product.nameGu,
      size: defaultVariant.size,
      price: defaultVariant.price,
      emoji: product.emoji,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link href={`/products/${product.id}`} className="block group">
      <div className="bg-warm-white rounded-2xl overflow-hidden border-glow card-hover h-full flex flex-col">
        {/* Product Image Area */}
        <div className="relative bg-gradient-to-br from-cream to-light-cream p-8 text-center border-b border-golden/10 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-golden/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-maroon/5 rounded-full translate-y-6 -translate-x-6"></div>
          
          {product.tags[0] && (
            <span className="absolute top-3 left-3 bg-maroon/90 text-white text-[10px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider backdrop-blur-sm">
              {product.tags[0]}
            </span>
          )}
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300 inline-block animate-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
            {product.emoji}
          </span>
        </div>

        {/* Product Info */}
        <div className="p-5 flex-1 flex flex-col">
          <h4 className="font-bold text-maroon text-base leading-tight">{product.nameGu}</h4>
          <p className="text-xs text-foreground/50 mt-0.5 mb-2">{product.nameEn}</p>
          
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-xs ${i < Math.round(product.rating) ? 'text-golden' : 'text-gray-200'}`}>★</span>
              ))}
            </div>
            <span className="text-[10px] text-foreground/40">({product.reviewCount})</span>
          </div>

          {/* Price + Add */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-golden/10">
            <div>
              <span className="text-lg font-bold text-maroon">₹{defaultVariant.price}</span>
              <span className="text-[10px] text-foreground/40 ml-1">/ {defaultVariant.size}</span>
            </div>
            <button
              onClick={handleAdd}
              className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 overflow-hidden ${
                added
                  ? "bg-olive-green text-white scale-95"
                  : "gradient-maroon text-white hover:shadow-lg hover:shadow-maroon/20 hover:scale-105"
              }`}
            >
              <span className={`inline-flex items-center gap-1 transition-all ${added ? 'animate-scale-in' : ''}`}>
                {added ? "✓ Added!" : "🛒 Add"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
