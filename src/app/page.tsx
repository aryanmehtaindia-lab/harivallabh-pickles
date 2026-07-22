"use client";

import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = products.filter((p) => p.tags.includes("Bestseller")).slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden gradient-hero">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-golden/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-maroon/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-golden/3 rounded-full blur-[100px]"></div>
          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #7B1E1E 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        </div>

        {/* Top ornament */}
        <div className="ornament-line absolute top-0 left-0 right-0"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in-up">
            <Image src="/logo.png" alt="Harivallabh Pickles" width={160} height={160} className="mx-auto mb-8 drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-maroon mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Homemade Goodness,
            <br />
            <span className="text-gradient-gold">Authentic Taste</span>
          </h2>
          
          <p className="text-lg md:text-xl text-golden/90 font-medium mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            ભક્તિ, શુદ્ધતા અને પરંપરાગત સ્વાદનો સંગમ
          </p>
          <p className="text-sm md:text-base text-foreground/50 mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Premium Gujarati Pickles • Wafers • Mukhwas • Papad
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link href="/products" className="gradient-maroon text-white px-8 py-4 rounded-full font-bold text-lg btn-hover shadow-xl shadow-maroon/20 hover:shadow-2xl hover:shadow-maroon/30 transition-shadow">
              <span className="relative z-10">🍯 Browse Products</span>
            </Link>
            <Link href="/categories" className="bg-warm-white text-maroon px-8 py-4 rounded-full font-bold text-lg border-2 border-golden/30 hover:border-golden hover:bg-cream transition-all shadow-lg">
              📂 View Categories
            </Link>
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="ornament-line absolute bottom-0 left-0 right-0"></div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 px-4 bg-warm-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "🙏", gu: "શુદ્ધ શાકાહારી", en: "100% Pure Vegetarian" },
              { emoji: "🏠", gu: "ઘરેલુ બનાવટ", en: "Handcrafted at Home" },
              { emoji: "🌿", gu: "કોઈ પ્રિઝર્વેટિવ નહિ", en: "Zero Preservatives" },
              { emoji: "🚚", gu: "ઘરે ડિલિવરી", en: "Pan-India Delivery" },
            ].map((badge, i) => (
              <div key={badge.en} className="glass rounded-xl p-5 text-center card-hover" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 mx-auto rounded-full bg-cream border border-golden/30 flex items-center justify-center mb-3">
                  <span className="text-xl">{badge.emoji}</span>
                </div>
                <p className="text-sm font-semibold text-maroon">{badge.gu}</p>
                <p className="text-[11px] text-foreground/50 mt-0.5">{badge.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 ornament-line"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-golden font-semibold mb-2">Explore</p>
            <h3 className="text-3xl md:text-4xl font-bold text-maroon">Our Categories</h3>
            <p className="text-golden/80 font-medium mt-1">અમારી કેટેગરી</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <Link href={`/categories/${cat.id}`} key={cat.id}>
                <div className="bg-warm-white rounded-2xl p-6 text-center card-hover border-glow group" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-cream to-light-cream border border-golden/20 flex items-center justify-center mb-4 group-hover:animate-pulse-gold transition-all">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{cat.emoji}</span>
                  </div>
                  <h4 className="text-lg font-bold text-maroon">{cat.nameEn}</h4>
                  <p className="text-sm text-golden/80 font-medium">{cat.nameGu}</p>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-maroon/60 font-medium">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 gradient-section relative">
        <div className="absolute top-0 left-0 right-0 ornament-line"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-golden font-semibold mb-2">Most Loved</p>
            <h3 className="text-3xl md:text-4xl font-bold text-maroon">Bestsellers</h3>
            <p className="text-golden/80 font-medium mt-1">અમારા બેસ્ટસેલર</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center gap-2 gradient-maroon text-white px-8 py-3 rounded-full font-semibold btn-hover shadow-lg shadow-maroon/15">
              <span className="relative z-10">View All Products →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Harivallabh */}
      <section className="py-20 px-4 bg-warm-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 ornament-line"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden/3 rounded-full blur-[100px]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-golden font-semibold mb-2">Our Values</p>
            <h3 className="text-3xl md:text-4xl font-bold text-maroon">Why Harivallabh?</h3>
            <p className="text-golden/80 font-medium mt-1">શા માટે હરિવલ્લભ?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: "🕉️", title: "Devotion", gu: "ભક્તિ", desc: "Every product is crafted with prayer and mindful intention, embodying spiritual values in every jar." },
              { emoji: "✨", title: "Purity", gu: "શુદ્ધતા", desc: "Only the finest natural ingredients. No shortcuts, no chemicals — just nature's own flavors." },
              { emoji: "🏺", title: "Tradition", gu: "પરંપરા", desc: "Recipes perfected over generations, preserving the authentic taste of Gujarat's culinary heritage." },
            ].map((value, i) => (
              <div key={value.title} className="glass rounded-2xl p-8 text-center card-hover" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-maroon flex items-center justify-center mb-4 shadow-lg shadow-maroon/20">
                  <span className="text-3xl">{value.emoji}</span>
                </div>
                <h5 className="font-bold text-maroon text-lg">{value.title}</h5>
                <p className="text-golden text-sm font-medium mb-2">{value.gu}</p>
                <p className="text-sm text-foreground/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 gradient-maroon relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #C9A94E 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-golden mb-3">Ready to taste tradition?</h3>
          <p className="text-white/70 mb-8">Order now and get free delivery on orders above ₹500</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-golden text-dark-maroon px-8 py-3 rounded-full font-bold hover:bg-light-golden transition-colors shadow-lg">
              Order Now
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="border-2 border-golden/50 text-golden px-8 py-3 rounded-full font-bold hover:bg-golden/10 transition-colors">
              💬 WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
