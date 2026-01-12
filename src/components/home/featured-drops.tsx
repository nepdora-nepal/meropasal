"use client";

import React, { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    title: "Urban Core Tank",
    description: "Minimalist fit for the modern explorer.",
    slug: "urban-core-tank",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
    title: "Shadow Overshirt",
    description: "Heavyweight canvas for the city grind.",
    slug: "shadow-overshirt",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
    title: "Cargo Rebellion",
    description: "Technical utility meets street style.",
    slug: "cargo-rebellion",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
    title: "Nightfall Hoodie",
    description: "Premium fleece for ultimate comfort.",
    slug: "nightfall-hoodie",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800",
    title: "Phantom Tee",
    description: "Oversized silhouette with reflective hits.",
    slug: "phantom-tee",
  },
];

const FeaturedDrops: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      containerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Featured Drops
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Exclusive designs, premium materials, and street-ready vibes—these
            must-have pieces are setting the trend. Get yours before
            they&apos;re gone!
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
            aria-label="Previous slide"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
            aria-label="Next slide"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="flex-none w-[85%] sm:w-[45%] lg:w-[31%] snap-start group"
          >
            <Link href={`/product/${item.slug}`}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] bg-gray-100">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDrops;
