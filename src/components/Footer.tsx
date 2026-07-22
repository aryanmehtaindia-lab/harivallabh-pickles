import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-maroon text-white pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #C9A94E 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Harivallabh" width={48} height={48} className="rounded-full bg-white/10 p-0.5" />
              <div>
                <h4 className="font-bold text-golden tracking-wide">HARIVALLABH</h4>
                <p className="text-[10px] text-white/50 tracking-widest uppercase">Pure Taste • Homemade Trust</p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">Authentic Gujarati homemade products crafted with devotion since generations.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-golden text-sm uppercase tracking-wider mb-4">Navigate</h5>
            <div className="space-y-2.5">
              {[
                { href: "/products", label: "All Products" },
                { href: "/categories", label: "Categories" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-white/50 hover:text-golden transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h5 className="font-bold text-golden text-sm uppercase tracking-wider mb-4">Shop</h5>
            <div className="space-y-2.5">
              {[
                { href: "/categories/pickles", label: "🫙 Pickles" },
                { href: "/categories/wafers", label: "🥔 Wafers" },
                { href: "/categories/mukhwas", label: "🌿 Mukhwas" },
                { href: "/categories/papad", label: "🫓 Papad" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-white/50 hover:text-golden transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold text-golden text-sm uppercase tracking-wider mb-4">Reach Us</h5>
            <div className="space-y-3 text-sm text-white/50">
              <p className="flex items-center gap-2"><span className="text-golden">📞</span> +91 98257 31877</p>
              <p className="flex items-center gap-2"><span className="text-golden">📧</span> info@harivallabh.in</p>
              <p className="flex items-center gap-2"><span className="text-golden">📍</span> Ahmedabad, Gujarat</p>
              <a
                href="https://wa.me/919825731877"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-700/20 text-green-400 px-4 py-2 rounded-full text-xs font-medium hover:bg-green-700/30 transition-colors mt-2"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">&copy; 2025 Harivallabh. All rights reserved.</p>
          <p className="text-white/20 text-xs">Made with ❤️ in Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}
