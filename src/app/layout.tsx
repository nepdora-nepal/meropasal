import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/contexts/CartContext";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CTASection from "@/components/common/cta-section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sales CRM - Modern Solutions for Your Business",
  description:
    "Your ultimate solution for managing sales and customer relationships with cutting-edge technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >
        <QueryProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <CTASection />
            <Footer />
            <Toaster />
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
