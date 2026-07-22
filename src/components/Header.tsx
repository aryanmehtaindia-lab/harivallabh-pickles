"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (totalItems > 0) {
      setCartBounce(true);
      const timer = setTimeout(() => setCartBounce(false), 400);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "glass shadow-lg" : "bg-warm-white border-b border-golden/20"
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image src="/logo.png" alt="Harivallabh" width={48} height={48} className="rounded-full transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 rounded-full bg-golden/20 scale-0 group-hover:scale-100 transition-transform"></div>
          </div>
          <div>
            <h1 className="text-lg font-bold text-maroon tracking-wide">HARIVALLABH</h1>
            <p className="text-[10px] text-golden font-medium tracking-widest uppercase hidden sm:block">Pure Taste • Homemade Trust</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "/categories", label: "Categories" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/admin", label: "Admin" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-maroon transition-colors rounded-full hover:bg-maroon/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/cart" className={`relative gradient-maroon text-white px-5 py-2.5 rounded-full text-sm font-medium btn-hover shadow-md ${cartBounce ? 'animate-cart-bounce' : ''}`}>
            <span className="relative z-10 flex items-center gap-1.5">
              🛒 <span className="hidden sm:inline">Cart</span>
            </span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-golden text-dark-maroon text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md animate-scale-in">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-cream flex items-center justify-center text-maroon border border-golden/20"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-warm-white/95 backdrop-blur-lg border-t border-golden/20 px-4 py-4 space-y-1 animate-fade-in-up">
          {[
            { href: "/", label: "Home", icon: "🏠" },
            { href: "/products", label: "Products", icon: "🫙" },
            { href: "/categories", label: "Categories", icon: "📂" },
            { href: "/about", label: "About", icon: "ℹ️" },
            { href: "/contact", label: "Contact", icon: "📞" },
            { href: "/admin", label: "Admin", icon: "🔐" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-cream hover:text-maroon transition-all"
            >
              <span>{link.icon}</span>
              <span className="font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
