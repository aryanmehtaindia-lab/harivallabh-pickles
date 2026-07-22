"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-20 text-center max-w-lg mx-auto px-4">
        <span className="text-6xl">✅</span>
        <h2 className="text-2xl font-bold text-maroon mt-4">Message Sent!</h2>
        <p className="text-foreground/60 mt-2">We&apos;ll get back to you soon. Thank you, {form.name}!</p>
        <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", mobile: "", message: "" }); }} className="mt-6 text-golden hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-maroon mb-1">Contact Us</h2>
      <p className="text-golden font-medium mb-8">સંપર્ક કરો</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-warm-white rounded-xl p-6 border border-golden/20">
          <h3 className="font-bold text-maroon text-lg mb-4">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-foreground/70 block mb-1">Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-golden/30 bg-cream focus:outline-none focus:border-golden"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-foreground/70 block mb-1">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-golden/30 bg-cream focus:outline-none focus:border-golden"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="text-sm text-foreground/70 block mb-1">Mobile (optional)</label>
              <input
                type="tel"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-golden/30 bg-cream focus:outline-none focus:border-golden"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="text-sm text-foreground/70 block mb-1">Message *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-golden/30 bg-cream focus:outline-none focus:border-golden"
                rows={4}
                placeholder="How can we help you?"
              />
            </div>
            <button type="submit" className="w-full gradient-maroon text-white py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-warm-white rounded-xl p-6 border border-golden/20">
            <h3 className="font-bold text-maroon text-lg mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cream border border-golden/40 flex items-center justify-center">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <p className="font-medium text-maroon">Phone / WhatsApp</p>
                  <p className="text-sm text-foreground/60">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cream border border-golden/40 flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="font-medium text-maroon">Email</p>
                  <p className="text-sm text-foreground/60">info@harivallabh.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cream border border-golden/40 flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="font-medium text-maroon">Location</p>
                  <p className="text-sm text-foreground/60">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cream border border-golden/40 flex items-center justify-center">
                  <span className="text-xl">🕐</span>
                </div>
                <div>
                  <p className="font-medium text-maroon">Business Hours</p>
                  <p className="text-sm text-foreground/60">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream rounded-xl p-6 border border-golden/20">
            <h4 className="font-bold text-maroon mb-2">Quick Order via WhatsApp</h4>
            <p className="text-sm text-foreground/60 mb-3">Send us your order list directly on WhatsApp for faster processing!</p>
            <a
              href="https://wa.me/919876543210?text=Hi%20Harivallabh!%20I%20want%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
            >
              💬 Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
