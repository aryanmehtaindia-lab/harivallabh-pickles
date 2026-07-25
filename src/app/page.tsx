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
      {/* ===== PREMIUM HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Cinematic background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/logo.png"
        >
          <source src="https://videos.pexels.com/video-files/5774801/5774801-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay on video */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-maroon/90 via-maroon/85 to-dark-maroon/92"></div>

        {/* Floating spice particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Red chilli flakes */}
          <div className="absolute top-[10%] left-[5%] w-3 h-3 bg-red-400/40 rounded-full animate-float blur-[1px]"></div>
          <div className="absolute top-[20%] right-[10%] w-2 h-2 bg-yellow-400/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-[40%] left-[15%] w-4 h-4 bg-golden/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-[60%] right-[20%] w-2 h-2 bg-orange-300/30 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute top-[30%] left-[70%] w-3 h-3 bg-red-300/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-[70%] left-[30%] w-2 h-2 bg-golden/30 rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-[15%] left-[50%] w-2 h-2 bg-amber-300/25 rounded-full animate-float" style={{ animationDelay: "2.5s" }}></div>
          <div className="absolute top-[80%] right-[40%] w-3 h-3 bg-red-400/20 rounded-full animate-float" style={{ animationDelay: "1.8s" }}></div>
          <div className="absolute top-[50%] left-[85%] w-2 h-2 bg-golden/25 rounded-full animate-float" style={{ animationDelay: "0.8s" }}></div>
          <div className="absolute top-[25%] left-[40%] w-1.5 h-1.5 bg-yellow-200/20 rounded-full animate-float" style={{ animationDelay: "3.5s" }}></div>

          {/* Larger floating orbs */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-golden/5 rounded-full blur-[60px] animate-float"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-golden/3 rounded-full blur-[80px] animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-amber-500/3 rounded-full blur-[70px] animate-float" style={{ animationDelay: "4s" }}></div>
        </div>

        {/* Swaminarayan-inspired mandir pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(201,169,78,0.3) 49px, rgba(201,169,78,0.3) 50px),
            repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(201,169,78,0.3) 49px, rgba(201,169,78,0.3) 50px)
          `,
          backgroundSize: "50px 50px"
        }}></div>

        {/* Arch/dome shapes (mandir silhouette) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] border-t-2 border-golden/5 rounded-t-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] border-t border-golden/3 rounded-t-full pointer-events-none"></div>

        {/* Golden line ornaments */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-golden/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-golden/60 to-transparent"></div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto relative z-10 text-center py-20">
          {/* Logo */}
          <div className="animate-scale-in mb-8">
            <div className="relative inline-block">
              <Image
                src="/logo.png"
                alt="Harivallabh Pickles"
                width={180}
                height={180}
                className="mx-auto rounded-3xl animate-glow drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 30px rgba(201,169,78,0.3))" }}
                priority
              />
              {/* Glow ring behind logo */}
              <div className="absolute inset-0 rounded-3xl border-2 border-golden/20 animate-pulse-gold -m-2"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Homemade Goodness,
            <br />
            <span className="text-gradient-gold">Authentic Taste</span>
          </h1>

          <p className="text-lg md:text-xl text-golden/80 font-medium mb-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Handcrafted Traditional Indian Pickles
          </p>
          <p className="text-sm md:text-base text-white/40 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            ♦ 12 Authentic Varieties ♦ Made with Love, Tradition & Quality Ingredients
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Link href="/products" className="bg-golden text-dark-maroon px-10 py-4 rounded-full font-bold text-lg btn-hover shadow-xl shadow-golden/30 hover:shadow-2xl hover:scale-105 transition-all">
              <span className="relative z-10">🛒 Order Now</span>
            </Link>
            <Link href="/products" className="border-2 border-golden/40 text-golden px-10 py-4 rounded-full font-bold text-lg hover:bg-golden/10 hover:border-golden transition-all hover:scale-105">
              🍯 Explore Collection
            </Link>
          </div>

          {/* Trust Badges — inline in hero */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            {[
              { icon: "🏠", label: "Homemade" },
              { icon: "🌿", label: "No Preservatives" },
              { icon: "✅", label: "FSSAI Certified" },
              { icon: "🚚", label: "Pan India Delivery" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-golden/15 bg-white/5 backdrop-blur-sm">
                <span className="text-lg">{badge.icon}</span>
                <span className="text-xs text-white/70 font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-golden/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-golden/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES SECTION (expanded) ===== */}
      <section className="py-14 px-4 bg-warm-white relative border-b border-golden/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 stagger-children reveal">
            {[
              { emoji: "🏠", title: "Homemade", sub: "Crafted in small batches with care" },
              { emoji: "🌿", title: "No Preservatives", sub: "100% natural ingredients only" },
              { emoji: "✅", title: "FSSAI Certified", sub: "Government approved & safe" },
              { emoji: "🚚", title: "Pan India Delivery", sub: "Free shipping above ₹500" },
            ].map((badge) => (
              <div key={badge.title} className="glass rounded-2xl p-6 text-center magnetic">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-cream border border-golden/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">{badge.emoji}</span>
                </div>
                <p className="text-sm font-semibold text-maroon">{badge.title}</p>
                <p className="text-[11px] text-foreground/40 mt-1">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="py-20 px-4 bg-cream relative overflow-hidden">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-[10px] uppercase tracking-[0.4em] text-golden font-semibold mb-3">Explore Our Range</p>
            <h3 className="text-3xl md:text-4xl font-bold text-maroon">Pickle Categories</h3>
            <p className="text-golden/80 font-medium mt-1">Find your perfect flavor</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger-children reveal">
            {categories.map((cat) => (
              <Link href={`/categories/${cat.id}`} key={cat.id}>
                <div className="bg-warm-white rounded-2xl p-7 text-center card-hover border-glow magnetic group">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-cream to-light-cream border border-golden/20 flex items-center justify-center mb-4 group-hover:border-golden group-hover:shadow-lg transition-all duration-500">
                    <span className="text-4xl group-hover:scale-125 transition-transform duration-500">{cat.emoji}</span>
                  </div>
                  <h4 className="text-base font-bold text-maroon">{cat.nameEn}</h4>
                  <div className="mt-3 h-0 group-hover:h-6 overflow-hidden transition-all duration-300">
                    <span className="text-xs text-maroon/60 font-medium">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-20 px-4 gradient-section relative">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-[10px] uppercase tracking-[0.4em] text-golden font-semibold mb-3">Most Loved</p>
            <h3 className="text-3xl md:text-4xl font-bold text-maroon">Bestsellers</h3>
            <p className="text-golden/80 font-medium mt-1">Our most popular pickles</p>
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

      {/* ===== WHY HARIVALLABH ===== */}
      <section className="py-20 px-4 bg-warm-white relative overflow-hidden">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden/3 rounded-full blur-[100px]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14 reveal">
            <p className="text-[10px] uppercase tracking-[0.4em] text-golden font-semibold mb-3">Our Promise</p>
            <h3 className="text-3xl md:text-4xl font-bold text-maroon">Why Choose Us?</h3>
            <p className="text-golden/80 font-medium mt-1">What makes Harivallabh special</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children reveal">
            {[
              { emoji: "🕉️", title: "Devotion", sub: "Made with prayer", desc: "Every jar is prepared with mindful intention and spiritual care." },
              { emoji: "✨", title: "Purity", sub: "All natural", desc: "Only the finest natural ingredients. Zero chemicals, zero shortcuts." },
              { emoji: "🏺", title: "Tradition", sub: "Family recipes", desc: "Recipes perfected over generations of Gujarati culinary heritage." },
            ].map((value) => (
              <div key={value.title} className="glass rounded-2xl p-8 text-center card-hover magnetic">
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-maroon flex items-center justify-center mb-5 shadow-lg shadow-maroon/20">
                  <span className="text-3xl">{value.emoji}</span>
                </div>
                <h5 className="font-bold text-maroon text-lg">{value.title}</h5>
                <p className="text-golden text-sm font-medium mb-2">{value.sub}</p>
                <p className="text-sm text-foreground/50 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
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
