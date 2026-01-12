import React from "react";
import { Product } from "@/types/types";
import ProductCard from "../products/product-card";

const products: Product[] = [
  {
    id: "1",
    name: "Shadow Drip",
    description:
      "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
    price: 79,
    originalPrice: 99,
    badge: "SALE",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    slug: "shadow-drip",
  },
  {
    id: "2",
    name: "Urban Phantom",
    description:
      "Urban Phantom — An oversized hoodie with graphics and a stealthy aesthetic inspired by city nights.",
    price: 99,
    originalPrice: 120,
    badge: "DROP",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    slug: "urban-phantom",
  },
  {
    id: "3",
    name: "Neon Rebellion",
    description:
      "A statement piece with vibrant neon details and bold graphics for a standout look in any setting.",
    price: 89,
    originalPrice: 110,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800",
    slug: "neon-rebellion",
  },
];

const NewDrops: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">
          New Drops
        </h2>
        <p className="text-gray-500 max-w-lg leading-relaxed">
          Stand out with our latest collection—bold designs, premium fabrics,
          and street-ready fits. Once they&apos;re gone, they&apos;re gone.
          Don&apos;t miss out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default NewDrops;
