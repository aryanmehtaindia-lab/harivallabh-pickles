"use client";

import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();
  const featured = products.filter((p) => p.tags.includes("Bestseller")).slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-28 px-4 text-center overflow-hidden gradient-hero">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-golden/5 rounded-full blur-[80px] animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-maroon/3 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-golden/[0.02] rounded-full blur-[120px]"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "linear-gradient(#7B1E1E 1px, transparent 1px), linear-gradient(90deg, #7B1E1E 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div>
        </div>

        <div className="ornament-line absolute top-0 left-0 right-0"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Logo — blended with background, no white box */}
          <div className="animate-scale-in mb-10">
            <Image
              src="/logo.png"
              alt="Harivallabh Pickles"
              width={200}
              height={200}
              className="mx-auto logo-blend animate-glow rounded-3xl"
              priority
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-maroon mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Homemade Goodness,
            <br />
            <span className="text-gradient-gold">Authentic Taste</span>
          </h2>

          <p className="text-lg md:text-xl text-golden/90 font-medium mb-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            ભક્તિ, શુદ્ધતા અને પરંપરાગત સ્વાદનો સંગમ
          </p>
          <p className="text-sm md:text-base text-foreground/40 mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            ♦ 12 Authentic Pickles ♦ Made with Love, Tradition & Quality Ingredients
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Link href="/products" className="gradient-maroon text-white px-9 py-4 rounded-full font-bold text-lg btn-hover shadow-xl shadow-maroon/20">
              <span className="relative z-10">🍯 Browse All 12 Pickles</span>
            </Link>
            <a href="https://wa.me/919825731877?text=Hi%20Harivallabh!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" className="bg-warm-white text-maroon px-9 py-4 rounded-full font-bold text-lg border-2 border-golden/30 hover:border-golden hover:shadow-lg transition-all">
              💬 Order on WhatsApp
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex justify-center gap-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <p className="text-2xl font-bold text-maroon">12+</p>
              <p className="text-[10px] text-foreground/40 uppercase tracking-wider">Varieties</p>
            </div>
            <div className="w-px bg-golden/20"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-maroon">100%</p>
              <p className="text-[10px] text-foreground/40 uppercase tracking-wider">Vegetarian</p>
            </div>
            <div className="w-px bg-golden/20"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-maroon">0</p>
              <p className="text-[10px] text-foreground/40 uppercase tracking-wider">Preservatives</p>
            </div>
          </div>
        </div>

        <div className="ornament-line absolute bottom-0 left-0 right-0"></div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4 bg-warm-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children reveal">
            {[
              { emoji: "🙏", gu: "શુદ્ધ શાકાહારી", en: "100% Pure Vegetarian" },
              { emoji: "🏠", gu: "ઘરેલુ બનાવટ", en: "Handcrafted at Home" },
              { emoji: "🌿", gu: "કોઈ પ્રિઝર્વેટિવ નહિ", en: "Zero Preservatives" },
              { emoji: "🚚", gu: "ઘરે ડિલિવરી", en: "Pan-India Delivery" },
            ].map((badge) => (
              <div key={badge.en} className="glass rounded-2xl p-6 text-center magnetic">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-cream border border-golden/20 flex items-center justify-center mb-3 group-hover:animate-pulse-gold">
                  <span className="text-2xl">{badge.emoji}</span>
                </div>
                <p className="text-sm font-semibold text-maroon">{badge.gu}</p>
                <p className="text-[11px] text-foreground/40 mt-0.5">{badge.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-cream relative overflow-hidden">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-[10px] uppercase tracking-[0.4em] text-golden font-semibold mb-3">Explore Our Range</p>
            <h3 className="text-3xl md:text-4xl font-bold text-maroon">Pickle Categories</h3>
            <p className="text-golden/80 font-medium mt-1">અમારી કેટેગરી</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger-children reveal">
            {categories.map((cat) => (
              <Link href={`/categories/${cat.id}`} key={cat.id}>
                <div className="bg-warm-white rounded-2xl p-7 text-center card-hover border-glow magnetic group">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-cream to-light-cream border border-golden/20 flex items-center justify-center mb-4 group-hover:border-golden group-hover:shadow-lg transition-all duration-500">
                    <span className="text-4xl group-hover:scale-125 transition-transform duration-500">{cat.emoji}</span>
                  </div>
                  <h4 className="text-base font-bold text-maroon">{cat.nameEn}</h4>
                  <p className="text-sm text-golden/80 font-medium">{cat.nameGu}</p>
                  <div className="mt-3 h-0 group-hover:h-6 overflow-hidden transition-all duration-300">
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
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-[10px] uppercase tracking-[0.4em] text-golden font-semibold mb-3">Most Loved</p>
            <h3 className="text-3xl md:text-4xl font-bold text-maroon">Bestsellers</h3>
            <p className="text-golden/80 font-medium mt-1">અમારા બેસ્ટસેલર</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 stagger-children reveal">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-14 reveal">
            <Link href="/products" className="inline-flex items-center gap-2 gradient-maroon text-white px-9 py-4 rounded-full font-bold btn-hover shadow-xl shadow-maroon/15">
              <span className="relative z-10">View All 12 Pickles →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Harivallabh */}
      <section className="py-20 px-4 bg-warm-white relative overflow-hidden">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden/3 rounded-full blur-[100px]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14 reveal">
            <p className="text-[10px] uppercase tracking-[0.4em] text-golden font-semibold mb-3">Our Promise</p>
            <h3 className="text-3xl md:text-4xl font-bold text-maroon">Why Harivallabh?</h3>
            <p className="text-golden/80 font-medium mt-1">શા માટે હરિવલ્લભ?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children reveal">
            {[
              { emoji: "🕉️", title: "Devotion", gu: "ભક્તિ", desc: "Every jar is prepared with prayer and spiritual intention." },
              { emoji: "✨", title: "Purity", gu: "શુદ્ધતા", desc: "Only natural ingredients. No chemicals, no shortcuts." },
              { emoji: "🏺", title: "Tradition", gu: "પરંપરા", desc: "Recipes perfected over generations of Gujarati heritage." },
            ].map((value) => (
              <div key={value.title} className="glass rounded-2xl p-8 text-center card-hover magnetic">
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-maroon flex items-center justify-center mb-5 shadow-lg shadow-maroon/20">
                  <span className="text-3xl">{value.emoji}</span>
                </div>
                <h5 className="font-bold text-maroon text-lg">{value.title}</h5>
                <p className="text-golden text-sm font-medium mb-2">{value.gu}</p>
                <p className="text-sm text-foreground/50 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 gradient-maroon relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #C9A94E 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        <div className="max-w-3xl mx-auto text-center relative z-10 reveal">
          <h3 className="text-2xl md:text-4xl font-bold text-golden mb-4">Ready to taste tradition?</h3>
          <p className="text-white/60 mb-10 text-lg">12 authentic pickles. Free delivery on orders above ₹500.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-golden text-dark-maroon px-9 py-4 rounded-full font-bold hover:bg-light-golden transition-all shadow-lg hover:shadow-2xl hover:scale-105">
              🛒 Order Now
            </Link>
            <a href="https://wa.me/919825731877" target="_blank" rel="noopener noreferrer" className="border-2 border-golden/50 text-golden px-9 py-4 rounded-full font-bold hover:bg-golden/10 transition-all hover:scale-105">
              💬 WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
