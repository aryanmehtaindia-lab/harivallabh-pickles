import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-8 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Image src="/logo.png" alt="Harivallabh" width={150} height={150} className="mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-maroon mb-1">About Harivallabh</h2>
        <p className="text-golden font-medium">અમારા વિશે</p>
      </div>

      <div className="space-y-8">
        <div className="bg-warm-white rounded-2xl p-8 border border-golden/20">
          <h3 className="text-xl font-bold text-maroon mb-3">Our Story</h3>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Harivallabh is more than just a brand — it&apos;s a tradition carried forward with devotion and love. Founded on the principles of purity, authenticity, and the rich culinary heritage of Gujarat, we bring you homemade products that taste just like the ones made in a Gujarati kitchen.
          </p>
          <p className="text-foreground/60 leading-relaxed">
            હરિવલ્લભ એ માત્ર એક બ્રાન્ડ નથી — તે ભક્તિ અને પ્રેમ સાથે આગળ ધપાવેલી પરંપરા છે. શુદ્ધતા, અધિકૃતતા અને ગુજરાતના સમૃદ્ધ રાંધણ વારસાના સિદ્ધાંતો પર સ્થાપિત, અમે તમને ઘરેલુ ઉત્પાદનો લાવીએ છીએ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-cream rounded-xl p-6 border border-golden/20 text-center">
            <span className="text-4xl">🕉️</span>
            <h4 className="font-bold text-maroon mt-3">ભક્તિ (Devotion)</h4>
            <p className="text-sm text-foreground/60 mt-2">Every recipe is made with devotion and mindful preparation, following Swaminarayan values of purity.</p>
          </div>
          <div className="bg-cream rounded-xl p-6 border border-golden/20 text-center">
            <span className="text-4xl">✨</span>
            <h4 className="font-bold text-maroon mt-3">શુદ્ધતા (Purity)</h4>
            <p className="text-sm text-foreground/60 mt-2">We use only pure, natural ingredients. No preservatives, no artificial colors, no chemicals — just pure goodness.</p>
          </div>
          <div className="bg-cream rounded-xl p-6 border border-golden/20 text-center">
            <span className="text-4xl">🏺</span>
            <h4 className="font-bold text-maroon mt-3">પરંપરા (Tradition)</h4>
            <p className="text-sm text-foreground/60 mt-2">Recipes passed down through generations, maintaining the authentic taste that Gujarati families love.</p>
          </div>
        </div>

        <div className="bg-warm-white rounded-2xl p-8 border border-golden/20">
          <h3 className="text-xl font-bold text-maroon mb-3">What We Offer</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="text-center">
              <span className="text-3xl">🫙</span>
              <p className="text-sm font-medium text-maroon mt-2">Pickles</p>
              <p className="text-xs text-foreground/60">Mango, Lemon, Chilli, Mixed & more</p>
            </div>
            <div className="text-center">
              <span className="text-3xl">🥔</span>
              <p className="text-sm font-medium text-maroon mt-2">Wafers</p>
              <p className="text-xs text-foreground/60">Masala & Plain potato wafers</p>
            </div>
            <div className="text-center">
              <span className="text-3xl">🌿</span>
              <p className="text-sm font-medium text-maroon mt-2">Mukhwas</p>
              <p className="text-xs text-foreground/60">Premium mouth freshener mixes</p>
            </div>
            <div className="text-center">
              <span className="text-3xl">🫓</span>
              <p className="text-sm font-medium text-maroon mt-2">Papad</p>
              <p className="text-xs text-foreground/60">Handmade spiced papads</p>
            </div>
          </div>
        </div>

        <div className="bg-maroon rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold text-golden mb-2">Our Promise</h3>
          <p className="text-white/80 text-lg">
            &quot;Homemade Goodness, Authentic Taste&quot; — this isn&apos;t just a tagline. It&apos;s our commitment to you.
          </p>
        </div>
      </div>
    </div>
  );
}
