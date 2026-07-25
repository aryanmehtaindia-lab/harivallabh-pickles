"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem, FloatElement } from "@/components/motion/FadeIn";

export default function Home() {
  const featured = products.filter((p) => p.tags.includes("Bestseller")).slice(0, 6);

  return (
    <div className="overflow-hidden">

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen flex items-center gradient-hero mandala-bg">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
          backgroundImage: "radial-gradient(circle, #5B1616 1px, transparent 1px)", backgroundSize: "40px 40px"
        }}></div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { top: "15%", left: "8%", size: "w-2 h-2", color: "bg-red-400/30", delay: 0 },
            { top: "25%", left: "88%", size: "w-3 h-3", color: "bg-gold/20", delay: 1 },
            { top: "45%", left: "20%", size: "w-2 h-2", color: "bg-amber-400/20", delay: 2.5 },
            { top: "65%", left: "75%", size: "w-2.5 h-2.5", color: "bg-red-300/15", delay: 1.5 },
            { top: "80%", left: "40%", size: "w-1.5 h-1.5", color: "bg-gold/20", delay: 3 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className={`absolute ${p.size} ${p.color} rounded-full`}
              style={{ top: p.top, left: p.left }}
              animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="absolute top-0 left-0 right-0 ornament-thick"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left */}
          <div>
            <FadeIn delay={0.1}>
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-medium mb-6">Est. Since Generations</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-maroon leading-[1.15] mb-6">
                Crafted with Tradition,
                <br />
                <span className="text-gradient-gold">Blessed with Devotion.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-display text-lg md:text-xl text-foreground/60 leading-relaxed mb-8 max-w-lg italic">
                Authentic homemade Swaminarayan pickles prepared using generations-old recipes, premium ingredients, and absolute purity.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4 mb-10">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/products" className="btn-gold-shimmer px-8 py-4 rounded-full text-sm uppercase tracking-wider inline-block">
                    Shop Collection
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/about" className="px-8 py-4 rounded-full text-sm uppercase tracking-wider border-2 border-maroon/20 text-maroon font-medium hover:border-gold hover:text-gold transition-all inline-block">
                    Discover Our Story
                  </Link>
                </motion.div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mb-6">
                <span className="text-gold text-lg">★★★★★</span>
                <span className="text-xs text-foreground/40 ml-2">Trusted by 5,000+ Happy Families</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Homemade", "No Preservatives", "Satvik", "FSSAI Certified"].map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5 text-[11px] text-foreground/50 font-medium px-3 py-1.5 rounded-full border border-gold/15 bg-ivory">
                    <span className="text-gold text-xs">✓</span> {badge}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — Jar with floating ingredients */}
          <div className="relative flex justify-center items-center">
            <motion.div
              className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] border border-gold/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] border border-gold/5 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            <ScaleIn delay={0.4}>
              <Image
                src="/logo.png"
                alt="Harivallabh Premium Pickle Jar"
                width={280}
                height={280}
                className="rounded-3xl relative z-10"
                style={{ filter: "drop-shadow(0 20px 50px rgba(91,22,22,0.15))" }}
                priority
              />
            </ScaleIn>

            {/* Floating ingredients */}
            {[
              { emoji: "🥭", pos: "top-4 -right-4", delay: 0 },
              { emoji: "🌶️", pos: "-top-2 left-8", delay: 1 },
              { emoji: "🌿", pos: "bottom-8 -left-4", delay: 2 },
              { emoji: "🫒", pos: "bottom-2 right-8", delay: 1.5 },
              { emoji: "✨", pos: "top-1/3 -left-8", delay: 2.5 },
            ].map((item, i) => (
              <FloatElement key={i} delay={item.delay} className={`absolute ${item.pos} text-2xl md:text-3xl z-20`}>
                {item.emoji}
              </FloatElement>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 ornament-thick"></div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-9 border-2 border-gold/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2.5 bg-gold/50 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════ STATISTICS ═══════════ */}
      <section className="py-16 px-6 gradient-maroon relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "25+", label: "Years Experience" },
              { num: "5000+", label: "Happy Families" },
              { num: "100%", label: "Homemade" },
              { num: "0%", label: "Preservatives" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="font-heading text-3xl md:text-4xl text-gold font-bold">{stat.num}</p>
                <p className="text-white/50 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ CATEGORIES ═══════════ */}
      <section className="py-24 px-6 bg-cream relative">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium mb-3">Our Collection</p>
            <h2 className="font-heading text-3xl md:text-4xl text-maroon">Shop by Category</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <StaggerItem key={cat.id}>
                <Link href={`/categories/${cat.id}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-ivory rounded-2xl p-8 text-center card-luxury cursor-pointer group"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-cream border border-gold/15 flex items-center justify-center mb-5 group-hover:border-gold group-hover:scale-110 transition-all duration-500">
                      <span className="text-4xl">{cat.emoji}</span>
                    </div>
                    <h4 className="font-heading text-sm text-maroon font-medium tracking-wide">{cat.nameEn}</h4>
                    <motion.p
                      className="text-[10px] text-gold uppercase tracking-wider mt-2"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      Explore →
                    </motion.p>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ BESTSELLERS ═══════════ */}
      <section className="py-24 px-6 bg-ivory relative">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium mb-3">Most Loved</p>
            <h2 className="font-heading text-3xl md:text-4xl text-maroon">Bestsellers</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.3} className="text-center mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="/products" className="btn-gold-shimmer px-10 py-4 rounded-full text-sm uppercase tracking-wider inline-block">
                View All Pickles
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ PROCESS TIMELINE ═══════════ */}
      <section className="py-24 px-6 bg-cream relative">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium mb-3">The Process</p>
            <h2 className="font-heading text-3xl md:text-4xl text-maroon">From Farm to Jar</h2>
          </FadeIn>
          <StaggerContainer className="flex flex-col md:flex-row items-center justify-between gap-6">
            {[
              { icon: "🌱", title: "Fresh Ingredients", step: "01" },
              { icon: "🏺", title: "Traditional Prep", step: "02" },
              { icon: "☀️", title: "Sun Cured", step: "03" },
              { icon: "🤲", title: "Hand Packed", step: "04" },
              { icon: "🚚", title: "Delivered Fresh", step: "05" },
            ].map((item) => (
              <StaggerItem key={item.title} className="flex flex-col items-center text-center flex-1">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-16 h-16 rounded-full bg-ivory border border-gold/20 flex items-center justify-center mb-3 relative"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="absolute -top-2 -right-2 text-[9px] bg-gold text-dark-maroon w-5 h-5 rounded-full flex items-center justify-center font-bold">{item.step}</span>
                </motion.div>
                <p className="text-xs font-medium text-maroon">{item.title}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ SWAMINARAYAN PROMISE ═══════════ */}
      <section className="py-24 px-6 gradient-maroon relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold/70 font-medium mb-3">Sacred Commitment</p>
            <h2 className="font-heading text-3xl md:text-4xl text-gold mb-12">The Swaminarayan Promise</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: "🚫🧅", label: "No Onion" },
              { icon: "🚫🧄", label: "No Garlic" },
              { icon: "🚫🎨", label: "No Colors" },
              { icon: "🚫🧪", label: "No Preservatives" },
              { icon: "🙏", label: "Blessed" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full border border-gold/20 bg-white/5 flex items-center justify-center mb-3">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <p className="text-[11px] text-white/70 font-medium">{item.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-24 px-6 bg-ivory relative">
        <div className="ornament-line absolute top-0 left-0 right-0"></div>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium mb-3">Love Letters</p>
            <h2 className="font-heading text-3xl md:text-4xl text-maroon">Customer Reviews</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Priya Shah", city: "Ahmedabad", text: "The best homemade pickle I have ever tasted. Absolutely pure and authentic! Reminds me of my grandmother's kitchen." },
              { name: "Rajesh Patel", city: "Surat", text: "Ordered the Gol Keri and Chundo. Both were exceptional. Premium packaging too. Already placed my second order!" },
              { name: "Meena Joshi", city: "Mumbai", text: "Finally a brand making truly satvik pickles. No onion, no garlic. The Aakhi Keri is incredible!" },
            ].map((review) => (
              <StaggerItem key={review.name}>
                <motion.div whileHover={{ y: -6 }} className="bg-cream rounded-2xl p-8 card-luxury">
                  <div className="flex text-gold text-sm mb-4">★★★★★</div>
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
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-24 px-6 gradient-maroon relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <h3 className="font-heading text-2xl md:text-4xl text-gold mb-4">Ready to Taste Tradition?</h3>
            <p className="text-white/50 mb-10 text-base">12 authentic pickles. Free delivery on orders above ₹500.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link href="/products" className="btn-gold-shimmer px-10 py-4 rounded-full text-sm uppercase tracking-wider inline-block">
                  Order Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <a href="https://wa.me/919825731877" target="_blank" rel="noopener noreferrer" className="border-2 border-gold/30 text-gold px-10 py-4 rounded-full text-sm uppercase tracking-wider font-medium inline-block hover:bg-gold/10 transition-all">
                  WhatsApp Order
                </a>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
