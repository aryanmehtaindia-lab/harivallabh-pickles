"use client";

import { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [tasteFilter, setTasteFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  let filtered = [...products].filter((p) => {
    const matchesSearch =
      p.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      p.descriptionEn.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "all" || p.category === categoryFilter;
    const matchesTaste = tasteFilter === "all" || p.taste === tasteFilter;
    return matchesSearch && matchesCategory && matchesTaste;
  });

  if (sortBy === "price-low") filtered.sort((a, b) => a.variants[0].price - b.variants[0].price);
  if (sortBy === "price-high") filtered.sort((a, b) => b.variants[0].price - a.variants[0].price);
  if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
  if (sortBy === "popular") filtered.sort((a, b) => b.reviewCount - a.reviewCount);

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-golden font-semibold mb-2">Our Collection</p>
        <h2 className="text-3xl md:text-4xl font-bold text-maroon">All Products</h2>
        <p className="text-golden/80 font-medium mt-1">12 Authentic Handcrafted Pickles</p>
      </div>

      {/* Filters */}
      <div className="glass rounded-2xl p-5 mb-8 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[220px]">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30">🔍</span>
          <input
            type="text"
            placeholder="Search pickles, wafers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-golden/20 bg-cream/50 focus:outline-none focus:border-golden focus:bg-warm-white text-sm transition-all"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-golden/20 bg-cream/50 text-sm focus:outline-none focus:border-golden cursor-pointer"
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.emoji} {c.nameEn}</option>
          ))}
        </select>
        <select
          value={tasteFilter}
          onChange={(e) => setTasteFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-golden/20 bg-cream/50 text-sm focus:outline-none focus:border-golden cursor-pointer"
        >
          <option value="all">All Tastes</option>
          <option value="Spicy">🌶️ Spicy</option>
          <option value="Sweet">🍯 Sweet</option>
          <option value="Traditional">🏺 Traditional</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-golden/20 bg-cream/50 text-sm focus:outline-none focus:border-golden cursor-pointer"
        >
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
        </select>
      </div>

      {/* Results count */}
      <p className="text-xs text-foreground/40 mb-6 font-medium">{filtered.length} products found</p>

      {/* Product Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 glass rounded-2xl">
          <div className="w-20 h-20 mx-auto rounded-full bg-cream border border-golden/20 flex items-center justify-center mb-4">
            <span className="text-4xl">🔍</span>
          </div>
          <p className="text-lg font-bold text-maroon">No products found</p>
          <p className="text-sm text-foreground/50 mt-1">Try adjusting your filters or search term</p>
          <button onClick={() => { setSearch(""); setCategoryFilter("all"); setTasteFilter("all"); }} className="mt-4 text-golden text-sm font-medium hover:underline">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
