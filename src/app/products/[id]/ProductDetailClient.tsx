"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailClient() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="py-24 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-cream border border-golden/20 flex items-center justify-center mb-4">
          <span className="text-4xl">🫙</span>
        </div>
        <h2 className="text-2xl font-bold text-maroon">Product not found</h2>
        <Link href="/products" className="text-golden hover:underline mt-2 inline-block">← Back to products</Link>
      </div>
    );
  }

  const variant = product.variants[selectedVariant];
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        productId: product.id,
        nameEn: product.nameEn,
        nameGu: product.nameGu,
        size: variant.size,
        price: variant.price,
        emoji: product.emoji,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <nav className="text-xs mb-8 text-foreground/40 font-medium">
        <Link href="/" className="hover:text-maroon transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-maroon transition-colors">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-maroon">{product.nameEn}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="glass rounded-3xl p-12 text-center flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-golden/5 rounded-full -translate-y-12 translate-x-12"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-maroon/5 rounded-full translate-y-10 -translate-x-10"></div>
          <span className="text-[140px] animate-float drop-shadow-lg">{product.emoji}</span>
          <div className="flex gap-2 mt-6">
            {product.tags.map((tag) => (
              <span key={tag} className="bg-maroon/90 text-white text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">{tag}</span>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up">
          <span className="text-xs uppercase tracking-wider text-golden font-semibold">{product.categoryGu}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-maroon leading-tight mt-1">{product.nameGu}</h1>
          <h2 className="text-lg text-foreground/60 mt-1">{product.nameEn}</h2>

          <div className="flex items-center gap-3 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < Math.round(product.rating) ? 'text-golden' : 'text-gray-200'}`}>★</span>
              ))}
            </div>
            <span className="text-sm text-foreground/50">{product.rating} · {product.reviewCount} reviews</span>
          </div>

          <div className="mt-6 p-4 glass rounded-xl inline-block">
            <span className="text-3xl font-bold text-maroon">₹{variant.price}</span>
            <span className="text-foreground/40 ml-2 text-sm">/ {variant.size}</span>
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-wider text-foreground/50 font-semibold mb-3">Select Size</p>
            <div className="flex flex-wrap gap-3">
              {product.variants.map((v, i) => (
                <button key={v.size} onClick={() => { setSelectedVariant(i); setQuantity(1); }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${i === selectedVariant ? "gradient-maroon text-white shadow-lg shadow-maroon/20" : "bg-cream border border-golden/20 text-foreground hover:border-golden"}`}>
                  {v.size} — ₹{v.price}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-wider text-foreground/50 font-semibold mb-3">Quantity</p>
            <div className="flex items-center gap-3">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-xl border border-golden/20 text-lg font-bold hover:bg-cream transition-colors flex items-center justify-center">−</button>
              <span className="text-xl font-bold w-10 text-center">{quantity}</span>
              <button onClick={() => setQuantity(Math.min(variant.stock, quantity + 1))} className="w-10 h-10 rounded-xl border border-golden/20 text-lg font-bold hover:bg-cream transition-colors flex items-center justify-center">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart}
            className={`w-full mt-8 py-4 rounded-xl font-bold text-lg transition-all btn-hover ${added ? "bg-olive-green text-white" : "gradient-maroon text-white shadow-lg shadow-maroon/20"}`}>
            <span className="relative z-10">{added ? "✓ Added to Cart!" : `🛒 Add to Cart — ₹${variant.price * quantity}`}</span>
          </button>

          <div className="mt-10 space-y-4">
            <div className="glass rounded-xl p-5">
              <h4 className="font-bold text-maroon text-sm mb-2">📝 Description</h4>
              <p className="text-sm text-foreground/70">{product.descriptionGu}</p>
              <p className="text-sm text-foreground/50 mt-2">{product.descriptionEn}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="glass rounded-xl p-4">
                <h4 className="font-bold text-maroon text-xs mb-1">🧂 Ingredients</h4>
                <p className="text-[11px] text-foreground/60">{product.ingredients}</p>
              </div>
              <div className="glass rounded-xl p-4">
                <h4 className="font-bold text-maroon text-xs mb-1">📅 Shelf Life</h4>
                <p className="text-[11px] text-foreground/60">{product.shelfLife}</p>
              </div>
              <div className="glass rounded-xl p-4">
                <h4 className="font-bold text-maroon text-xs mb-1">🏠 Storage</h4>
                <p className="text-[11px] text-foreground/60">{product.storageInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <div className="ornament-line mb-12"></div>
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-golden font-semibold mb-2">You May Also Like</p>
            <h3 className="text-2xl font-bold text-maroon">Similar Products</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (<ProductCard key={p.id} product={p} />))}
          </div>
        </div>
      )}
    </div>
  );
}
