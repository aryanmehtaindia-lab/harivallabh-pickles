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
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass-nav shadow-lg rounded-b-2xl" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="Harivallabh" width={42} height={42} className="rounded-full group-hover:scale-110 transition-transform logo-blend" />
          <div>
            <h1 className="font-heading text-base font-semibold text-maroon tracking-wide">HARIVALLABH</h1>
            <p className="text-[8px] uppercase tracking-[0.2em] text-gold/70">Pure Taste • Homemade Trust</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Shop" },
            { href: "/categories", label: "Categories" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/admin", label: "Admin" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[12px] font-medium text-foreground/70 hover:text-maroon transition-colors rounded-full hover:bg-maroon/5 uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className={`relative btn-gold-shimmer px-5 py-2.5 rounded-full text-[11px] uppercase tracking-wider ${cartBounce ? 'animate-cart-bounce' : ''}`}
          >
            🛒 Cart
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-maroon text-white text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold animate-scale-in">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-ivory border border-gold/15 flex items-center justify-center text-maroon"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="lg:hidden glass-nav mx-4 mb-4 rounded-2xl px-4 py-5 space-y-1 animate-fade-in-up border border-gold/10">
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Shop" },
            { href: "/categories", label: "Categories" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/admin", label: "Admin" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-maroon hover:bg-cream rounded-xl transition-all uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
