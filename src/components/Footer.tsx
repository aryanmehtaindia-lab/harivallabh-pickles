import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="gradient-maroon text-white pt-20 pb-8 px-6 relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)", backgroundSize: "25px 25px" }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="Harivallabh" width={44} height={44} className="rounded-full bg-white/10 p-0.5" />
              <div>
                <h4 className="font-heading text-sm font-semibold text-gold tracking-wider">HARIVALLABH</h4>
                <p className="text-[8px] text-white/40 uppercase tracking-widest">Pure Taste • Homemade Trust</p>
              </div>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">Authentic Indian pickles crafted with devotion, tradition, and the finest natural ingredients.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Navigate</h5>
            <div className="space-y-2.5">
              {["/products", "/categories", "/about", "/contact"].map((href) => (
                <Link key={href} href={href} className="block text-xs text-white/40 hover:text-gold transition-colors capitalize">
                  {href.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h5 className="font-heading text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Shop</h5>
            <div className="space-y-2.5">
              {["Traditional Pickles", "Spicy Pickles", "Sweet & Tangy", "Special Varieties"].map((cat) => (
                <p key={cat} className="text-xs text-white/40">{cat}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-heading text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Reach Us</h5>
            <div className="space-y-2.5 text-xs text-white/40">
              <p>📞 +91 98257 31877</p>
              <p>📧 info@harivallabh.in</p>
              <p>📍 Ahmedabad, Gujarat</p>
              <a href="https://wa.me/919825731877" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-green-400/80 hover:text-green-400 transition-colors">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="ornament-line mb-8"></div>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-[10px] text-white/30 uppercase tracking-wider">
          <span>✅ FSSAI Certified</span>
          <span>🔒 SSL Secure</span>
          <span>🇮🇳 Made in India</span>
          <span>💳 Secure Payments</span>
        </div>

        <div className="text-center">
          <p className="text-white/20 text-[10px] tracking-wider">&copy; 2025 Harivallabh Pickles. All rights reserved. Made with ❤️ in Gujarat, India.</p>
        </div>
      </div>
    </footer>
  );
}
