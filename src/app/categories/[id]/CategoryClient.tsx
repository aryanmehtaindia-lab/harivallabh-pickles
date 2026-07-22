"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CategoryClient() {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id);
  const categoryProducts = products.filter((p) => p.category === id);

  if (!category) {
    return (
      <div className="py-20 text-center">
        <span className="text-6xl">📂</span>
        <h2 className="text-2xl font-bold text-maroon mt-4">Category not found</h2>
        <Link href="/categories" className="text-golden hover:underline mt-2 inline-block">← Back to categories</Link>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <nav className="text-xs mb-4 text-foreground/40 font-medium">
        <Link href="/" className="hover:text-maroon transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/categories" className="hover:text-maroon transition-colors">Categories</Link>
        <span className="mx-2">/</span>
        <span className="text-maroon">{category.nameEn}</span>
      </nav>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-cream border-2 border-golden/30 flex items-center justify-center">
          <span className="text-3xl">{category.emoji}</span>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-maroon">{category.nameEn}</h2>
          <p className="text-golden font-medium">{category.nameGu} • {categoryProducts.length} products</p>
        </div>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass rounded-2xl">
          <span className="text-6xl">🫙</span>
          <p className="text-lg text-maroon mt-4 font-medium">Coming soon!</p>
          <p className="text-sm text-foreground/50">Products for this category will be added shortly.</p>
        </div>
      )}
    </div>
  );
}
