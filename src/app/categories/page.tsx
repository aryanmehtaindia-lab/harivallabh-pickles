"use client";

import Link from "next/link";
import { categories, products } from "@/data/products";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CategoriesPage() {
  useScrollReveal();

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12 reveal">
        <p className="text-[10px] uppercase tracking-[0.4em] text-golden font-semibold mb-3">Browse By Type</p>
        <h2 className="text-3xl md:text-4xl font-bold text-maroon">Pickle Categories</h2>
        <p className="text-golden/80 font-medium mt-1">અમારી કેટેગરી</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children reveal">
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat.id).length;
          return (
            <Link href={`/categories/${cat.id}`} key={cat.id}>
              <div className="bg-warm-white rounded-2xl p-8 text-center card-hover border-glow magnetic h-full">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-cream border-2 border-golden/20 flex items-center justify-center mb-5">
                  <span className="text-5xl">{cat.emoji}</span>
                </div>
                <h4 className="text-xl font-bold text-maroon">{cat.nameEn}</h4>
                <p className="text-golden font-medium">{cat.nameGu}</p>
                <p className="text-sm text-foreground/40 mt-2">{count} varieties</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
