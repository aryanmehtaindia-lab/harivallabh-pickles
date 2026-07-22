"use client";

import { products, categories } from "@/data/products";
import { useState } from "react";

export default function AdminProducts() {
  const [filterCat, setFilterCat] = useState("all");

  const filtered = filterCat === "all"
    ? products
    : products.filter((p) => p.category === filterCat);

  return (
    <div className="animate-fade-in-up">
      {/* Filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setFilterCat("all")}
          className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
            filterCat === "all" ? "gradient-maroon text-white shadow-md" : "bg-cream border border-golden/20 text-foreground/60 hover:border-golden"
          }`}
        >
          All ({products.length})
        </button>
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setFilterCat(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                filterCat === cat.id ? "gradient-maroon text-white shadow-md" : "bg-cream border border-golden/20 text-foreground/60 hover:border-golden"
              }`}
            >
              {cat.emoji} {cat.nameEn} ({count})
            </button>
          );
        })}
      </div>

      {/* Products Table */}
      <div className="glass rounded-xl overflow-hidden border-glow">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-golden/10 bg-cream/50">
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider text-foreground/40 font-semibold">Product</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider text-foreground/40 font-semibold">Category</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider text-foreground/40 font-semibold">Variants</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider text-foreground/40 font-semibold">Rating</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider text-foreground/40 font-semibold">Stock</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider text-foreground/40 font-semibold">Tags</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => {
                const totalStock = product.variants.reduce((sum, v) => sum + v.stock, 0);
                const lowStock = product.variants.some((v) => v.stock < 15);
                return (
                  <tr key={product.id} className="border-b border-golden/5 hover:bg-cream/30 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{product.emoji}</span>
                        <div>
                          <p className="font-bold text-maroon text-xs">{product.nameGu}</p>
                          <p className="text-[10px] text-foreground/50">{product.nameEn}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-xs text-foreground/60">{product.categoryGu}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="space-y-0.5">
                        {product.variants.map((v) => (
                          <p key={v.size} className="text-[10px] text-foreground/60">
                            {v.size} — <span className="font-medium text-golden">₹{v.price}</span>
                          </p>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <span className="text-golden text-xs">★</span>
                        <span className="text-xs font-medium">{product.rating}</span>
                        <span className="text-[10px] text-foreground/30">({product.reviewCount})</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        lowStock ? "bg-red-50 text-red-500" : "bg-green-50 text-green-600"
                      }`}>
                        {totalStock} units
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-1 flex-wrap">
                        {product.tags.map((tag) => (
                          <span key={tag} className="text-[9px] bg-maroon/5 text-maroon/70 px-1.5 py-0.5 rounded font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-4 flex gap-4 text-xs text-foreground/40">
        <span>Total: {filtered.length} products</span>
        <span>•</span>
        <span className="text-red-400">
          Low stock: {filtered.filter((p) => p.variants.some((v) => v.stock < 15)).length} items
        </span>
      </div>
    </div>
  );
}
