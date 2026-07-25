import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { OrderProvider } from "@/context/OrderContext";
import { AuthProvider } from "@/context/AuthContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HARIVALLABH | Pure Taste. Homemade Trust.",
  description: "Authentic Gujarati homemade Pickles, Wafers, Mukhwas & Papad. ભક્તિ, શુદ્ધતા અને પરંપરાગત સ્વાદનો સંગમ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-cream">
        <AuthProvider>
          <OrderProvider>
            <CartProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </CartProvider>
          </OrderProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
