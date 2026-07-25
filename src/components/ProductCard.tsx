"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-ivory rounded-2xl overflow-hidden card-luxury h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative bg-gradient-to-br from-cream to-ivory p-8 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/3 rounded-full -translate-y-8 translate-x-8"></div>
          {product.tags[0] && (
            <span className="absolute top-3 left-3 bg-maroon text-white text-[8px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-widest z-10">
              {product.tags[0]}
            </span>
          )}
          <div className="w-28 h-28 mx-auto group-hover:scale-110 transition-transform duration-700">
            <Image src={product.image} alt={product.nameEn} width={112} height={112} className="object-contain logo-blend rounded-xl" />
          </div>
        </div>

        {/* Info */}
        <div className="p-6 flex-1 flex flex-col">
          <h4 className="font-heading text-sm font-semibold text-maroon tracking-wide">{product.nameEn}</h4>
          <p className="text-[11px] text-foreground/40 mt-1 mb-3 line-clamp-2">{product.descriptionEn}</p>

          <div className="flex items-center gap-1 mb-4">
            <span className="text-gold text-xs">{"★".repeat(Math.round(product.rating))}</span>
            <span className="text-[9px] text-foreground/30">({product.reviewCount})</span>
          </div>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gold/10">
            <div>
              <span className="text-lg font-bold text-maroon">₹{defaultVariant.price}</span>
              <span className="text-[9px] text-foreground/30 ml-1">/ {defaultVariant.size}</span>
            </div>
            <button
              onClick={handleAdd}
              className={`px-4 py-2 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                added
                  ? "bg-olive-green text-white"
                  : "btn-gold-shimmer hover:scale-105"
              }`}
            >
              {added ? "✓ Added" : "Add to Cart"}
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
