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
    <div className="overflow-hidden">

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative min-h-screen flex items-center gradient-hero mandala-bg">
        {/* Subtle mandala/pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
          backgroundImage: "radial-gradient(circle, #5B1616 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}></div>

        {/* Floating spice particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[8%] w-2 h-2 bg-red-400/30 rounded-full animate-float"></div>
          <div className="absolute top-[25%] right-[12%] w-3 h-3 bg-gold/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-[45%] left-[20%] w-2 h-2 bg-amber-400/20 rounded-full animate-float" style={{ animationDelay: "2.5s" }}></div>
          <div className="absolute top-[65%] right-[25%] w-2.5 h-2.5 bg-red-300/15 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-[35%] left-[75%] w-2 h-2 bg-gold/15 rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-[80%] left-[40%] w-1.5 h-1.5 bg-amber-300/20 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
        </div>

        {/* Gold line top */}
        <div className="absolute top-0 left-0 right-0 ornament-thick"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT — Text */}
          <div className="animate-fade-in-up">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-medium mb-6">Est. Since Generations</p>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-maroon leading-[1.15] mb-6">
              Crafted with Tradition,
              <br />
              <span className="text-gradient-gold">Blessed with Devotion.</span>
            </h1>

            <p className="font-display text-lg md:text-xl text-foreground/60 leading-relaxed mb-8 max-w-lg italic">
              Authentic homemade Swaminarayan pickles prepared using generations-old recipes, premium ingredients, and absolute purity.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/products" className="btn-gold-shimmer px-8 py-4 rounded-full text-sm uppercase tracking-wider">
                Shop Collection
              </Link>
              <Link href="/about" className="px-8 py-4 rounded-full text-sm uppercase tracking-wider border-2 border-maroon/20 text-maroon font-medium hover:border-gold hover:text-gold transition-all">
                Discover Our Story
              </Link>
            </div>

            {/* Social proof */}
            <div className="mb-6">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-gold text-lg">★★★★★</span>
                <span className="text-xs text-foreground/40 ml-2">Trusted by 5,000+ Happy Families</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {["Homemade", "No Preservatives", "Satvik", "Fast Delivery"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-[11px] text-foreground/50 font-medium px-3 py-1.5 rounded-full border border-gold/15 bg-ivory">
                  <span className="text-gold text-xs">✓</span> {badge}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Product showcase */}
          <div className="relative flex justify-center items-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
            {/* Rotating golden ring */}
            <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] border border-gold/10 rounded-full animate-spin-slow"></div>
            <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] border border-gold/5 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }}></div>

            {/* Main product image */}
            <div className="relative z-10">
              <Image
                src="/logo.png"
                alt="Harivallabh Pickles Premium Jar"
                width={300}
                height={300}
                className="rounded-3xl animate-glow"
                style={{ filter: "drop-shadow(0 20px 50px rgba(91,22,22,0.15))" }}
                priority
              />
            </div>

            {/* Floating ingredients around the jar */}
            <div className="absolute top-4 -right-4 text-3xl animate-float" style={{ animationDelay: "0s" }}>🥭</div>
            <div className="absolute -top-2 left-8 text-2xl animate-float" style={{ animationDelay: "1s" }}>🌶️</div>
            <div className="absolute bottom-8 -left-4 text-2xl animate-float" style={{ animationDelay: "2s" }}>🌿</div>
            <div className="absolute bottom-2 right-4 text-xl animate-float" style={{ animationDelay: "1.5s" }}>🫒</div>
            <div className="absolute top-1/2 -right-8 text-xl animate-float" style={{ animationDelay: "2.5s" }}>🧂</div>
            <div className="absolute top-1/3 -left-6 text-lg animate-float" style={{ animationDelay: "3s" }}>✨</div>
          </div>
        </div>

        {/* Gold line bottom */}
        <div className="absolute bottom-0 left-0 right-0 ornament-thick"></div>
      </section>

      {/* ═══════════ LUXURY STATISTICS ═══════════ */}
      <section className="py-16 px-6 gradient-maroon relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger-children reveal">
            {[
              { num: "25+", label: "Years Experience" },
              { num: "5000+", label: "Happy Families" },
              { num: "100%", label: "Homemade" },
              { num: "0%", label: "Artificial Preservatives" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl md:text-4xl text-gold font-bold">{stat.num}</p>
                <p className="text-white/50 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CATEGORY GRID ═══════════ */}
      <section className="py-24 px-6 bg-cream relative">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium mb-3">Our Collection</p>
            <h2 className="font-heading text-3xl md:text-4xl text-maroon">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger-children reveal">
            {categories.map((cat) => (
              <Link href={`/categories/${cat.id}`} key={cat.id}>
                <div className="bg-ivory rounded-2xl p-8 text-center card-luxury group cursor-pointer">
                  <div className="w-20 h-20 mx-auto rounded-full bg-cream border border-gold/15 flex items-center justify-center mb-5 group-hover:border-gold group-hover:scale-110 transition-all duration-500">
                    <span className="text-4xl">{cat.emoji}</span>
                  </div>
                  <h4 className="font-heading text-sm text-maroon font-medium tracking-wide">{cat.nameEn}</h4>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] text-gold uppercase tracking-wider">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ BESTSELLERS ═══════════ */}
      <section className="py-24 px-6 bg-ivory relative">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium mb-3">Most Loved</p>
            <h2 className="font-heading text-3xl md:text-4xl text-maroon">Bestsellers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children reveal">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-16 reveal">
            <Link href="/products" className="btn-gold-shimmer px-10 py-4 rounded-full text-sm uppercase tracking-wider inline-block">
              View All Pickles
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ INGREDIENTS STORY TIMELINE ═══════════ */}
      <section className="py-24 px-6 bg-cream relative overflow-hidden">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium mb-3">The Process</p>
            <h2 className="font-heading text-3xl md:text-4xl text-maroon">From Farm to Jar</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 reveal">
            {[
              { icon: "🌱", title: "Fresh Ingredients", step: "01" },
              { icon: "🏺", title: "Traditional Preparation", step: "02" },
              { icon: "☀️", title: "Sun Cured", step: "03" },
              { icon: "🤲", title: "Hand Packed", step: "04" },
              { icon: "🚚", title: "Delivered Fresh", step: "05" },
            ].map((item, i) => (
              <div key={item.title} className="flex flex-col items-center text-center flex-1">
                <div className="w-16 h-16 rounded-full bg-ivory border border-gold/20 flex items-center justify-center mb-3 relative">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="absolute -top-2 -right-2 text-[9px] bg-gold text-dark-maroon w-5 h-5 rounded-full flex items-center justify-center font-bold">{item.step}</span>
                </div>
                <p className="text-xs font-medium text-maroon">{item.title}</p>
                {i < 4 && <div className="hidden md:block w-12 h-px bg-gold/20 absolute"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SWAMINARAYAN PROMISE ═══════════ */}
      <section className="py-24 px-6 gradient-maroon relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="reveal">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold/70 font-medium mb-3">Our Sacred Commitment</p>
            <h2 className="font-heading text-3xl md:text-4xl text-gold mb-12">The Swaminarayan Promise</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 stagger-children reveal">
            {[
              { icon: "🚫🧅", label: "No Onion" },
              { icon: "🚫🧄", label: "No Garlic" },
              { icon: "🚫🎨", label: "No Artificial Color" },
              { icon: "🚫🧪", label: "No Preservatives" },
              { icon: "🙏", label: "Blessed Before Packing" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full border border-gold/20 bg-white/5 flex items-center justify-center mb-3">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <p className="text-[11px] text-white/70 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ BRAND STORY ═══════════ */}
      <section className="py-24 px-6 bg-ivory relative">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="bg-cream rounded-3xl p-12 text-center border border-gold/10">
              <Image src="/logo.png" alt="Harivallabh Heritage" width={250} height={250} className="mx-auto logo-blend" />
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium mb-4">Our Heritage</p>
            <h2 className="font-heading text-3xl md:text-4xl text-maroon mb-6">A Legacy of<br />Pure Taste</h2>
            <p className="font-display text-lg text-foreground/60 leading-relaxed italic mb-6">
              For generations, the women of our family have preserved the art of pickle-making — a tradition rooted in devotion, purity, and the flavors of Gujarat.
            </p>
            <p className="text-sm text-foreground/50 leading-relaxed mb-8">
              Every jar of Harivallabh carries the warmth of a grandmother&apos;s kitchen, the precision of time-tested recipes, and the blessings of Swaminarayan faith. We use only the freshest seasonal produce, cold-pressed mustard oil, and hand-ground spices.
            </p>
            <Link href="/about" className="text-gold text-sm font-medium uppercase tracking-wider hover:text-dark-gold transition-colors">
              Read Our Full Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-24 px-6 bg-cream relative">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium mb-3">What People Say</p>
            <h2 className="font-heading text-3xl md:text-4xl text-maroon">Customer Love</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children reveal">
            {[
              { name: "Priya Shah", city: "Ahmedabad", text: "The best homemade pickle I have ever tasted. Reminds me of my grandmother's recipe. Absolutely pure and authentic!", rating: 5 },
              { name: "Rajesh Patel", city: "Surat", text: "Ordered the Gol Keri and Chundo combo. Both were exceptional. The packaging was premium too. Will order again!", rating: 5 },
              { name: "Meena Joshi", city: "Mumbai", text: "Finally found a brand that makes truly satvik pickles without onion and garlic. The Aakhi Keri is to die for!", rating: 5 },
            ].map((review) => (
              <div key={review.name} className="bg-ivory rounded-2xl p-8 card-luxury">
                <div className="flex text-gold text-sm mb-4">{"★".repeat(review.rating)}</div>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-maroon flex items-center justify-center text-white text-xs font-bold">
                    {review.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-maroon">{review.name}</p>
                    <p className="text-[10px] text-foreground/40">{review.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA / NEWSLETTER ═══════════ */}
      <section className="py-24 px-6 bg-ivory relative">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium mb-3">Stay Connected</p>
          <h2 className="font-heading text-2xl md:text-3xl text-maroon mb-4">Join the Harivallabh Family</h2>
          <p className="text-sm text-foreground/50 mb-8">Get exclusive offers, new product launches, and traditional recipes delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3.5 rounded-full border border-gold/20 bg-cream text-sm focus:outline-none focus:border-gold transition-colors" />
            <button className="btn-gold-shimmer px-7 py-3.5 rounded-full text-sm uppercase tracking-wider whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-20 px-6 gradient-maroon relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        <div className="max-w-3xl mx-auto text-center relative z-10 reveal">
          <h3 className="font-heading text-2xl md:text-4xl text-gold mb-4">Ready to Taste Tradition?</h3>
          <p className="text-white/50 mb-10 text-base">12 authentic pickles. Free delivery on orders above ₹500.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-gold-shimmer px-10 py-4 rounded-full text-sm uppercase tracking-wider">
              Order Now
            </Link>
            <a href="https://wa.me/919825731877" target="_blank" rel="noopener noreferrer" className="border-2 border-gold/30 text-gold px-10 py-4 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-gold/10 transition-all">
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
