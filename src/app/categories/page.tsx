import Link from "next/link";
import { categories, products } from "@/data/products";

export default function CategoriesPage() {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-maroon mb-1">Categories</h2>
      <p className="text-golden font-medium mb-8">અમારી કેટેગરી</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat.id).length;
          return (
            <Link href={`/categories/${cat.id}`} key={cat.id}>
              <div className="bg-warm-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 transform border border-golden/20">
                <div className="w-24 h-24 mx-auto rounded-full bg-cream border-2 border-golden/40 flex items-center justify-center mb-4">
                  <span className="text-5xl">{cat.emoji}</span>
                </div>
                <h4 className="text-xl font-bold text-maroon">{cat.nameEn}</h4>
                <p className="text-golden font-medium">{cat.nameGu}</p>
                <p className="text-sm text-foreground/60 mt-2">{count} products</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
