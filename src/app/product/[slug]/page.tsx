"use client";

import React, { useState } from "react";
import {
  Star,
  ShoppingCart,
  Facebook,
  Twitter,
  Instagram,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const ProductDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Product Info");
  const [selectedSize, setSelectedSize] = useState("Standard");
  const [selectedColor, setSelectedColor] = useState("Black");

  // In a real app, we would fetch product data based on params.slug
  // For now, we'll use static data but display the slug to show it's dynamic
  const slug = params?.slug as string;

  const mainImage =
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800";
  const thumbnails = [
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=300",
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=301",
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=302",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Product Detail Header */}
      <div className="bg-[#111] text-white py-24 text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
          Product Detail
        </h1>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-black text-white py-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase">
          <Link href="/" className="hover:opacity-60 transition-opacity">
            Home
          </Link>
          <span className="opacity-40">||</span>
          <span className="text-gray-400">Product Detail</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
              <img
                src={mainImage}
                alt="Shadow Drip"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {thumbnails.map((thumb, idx) => (
                <div
                  key={idx}
                  className="aspect-square bg-gray-100 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">
                {slug ? slug.replace(/-/g, " ") : "Shadow Drip"}
              </h2>
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} fill="currentColor" />
                ))}
              </div>
              <div className="text-3xl font-black mb-6">$ 89.00 USD</div>
              <p className="text-gray-500 leading-relaxed text-sm">
                A sleek and minimalist hoodie crafted with dark, understated
                tones and subtle reflective accents that catch the light with
                movement. Designed for an effortless street vibe, it blends
                comfort with style, offering a versatile look that&apos;s both
                modern and refined. Perfect for everyday wear, this piece
                delivers a laid-back aesthetic while maintaining an edge of
                urban sophistication.
              </p>
            </div>

            {/* Size Selector */}
            <div className="space-y-4">
              <span className="block text-sm font-bold uppercase tracking-widest">
                Size
              </span>
              <div className="flex flex-wrap gap-2">
                {["Small", "Standard", "Large", "Extra Large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="space-y-4">
              <span className="block text-sm font-bold uppercase tracking-widest">
                Color
              </span>
              <div className="flex gap-2">
                {["White", "Black"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-8 py-2 rounded-full text-xs font-bold transition-all ${
                      selectedColor === color
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="flex items-center gap-4 pt-4">
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-20 bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 font-bold text-center outline-none focus:border-black"
              />
              <button className="flex-1 bg-black text-white py-4 rounded-full flex items-center justify-center gap-3 font-black uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>

            {/* Social Share */}
            <div className="flex gap-3 pt-6">
              {[Globe, Facebook, Twitter, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-32">
          <div className="flex justify-center gap-4 mb-12">
            {["Product Info", "Description", "Reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-4 rounded-lg text-sm font-bold transition-all shadow-sm ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-white text-gray-900 border border-gray-100 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-[2rem] p-12">
            <h3 className="text-3xl font-black uppercase tracking-tight mb-8">
              Product Features
            </h3>
            <div className="space-y-0 divide-y divide-gray-200">
              {[
                { label: "Fabric Type", value: "100% Cotton" },
                { label: "Fit Style", value: "Regular Fit" },
                { label: "Neckline", value: "Crew Neck" },
                { label: "Sleeve Length", value: "Half Sleeve" },
                { label: "Pattern", value: "Solid Color" },
                { label: "Finish", value: "Soft-touch Fabric" },
                { label: "Care Instructions", value: "Machine Wash Cold" },
              ].map((feature, i) => (
                <div key={i} className="flex justify-between py-5 text-sm">
                  <span className="text-gray-400 font-medium uppercase tracking-widest text-[11px]">
                    {feature.label}
                  </span>
                  <span className="text-black font-bold uppercase">
                    {feature.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">
              Subscribe to our
              <br />
              Newsletter Now!
            </h2>
            <p className="text-gray-500 text-sm">
              Get top Framer components, exclusive freebies, and expert tips
              delivered to your inbox weekly.
            </p>
          </div>
          <div className="w-full max-w-xl space-y-4">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your E-mail"
                className="flex-1 bg-white rounded-full px-8 py-4 outline-none border border-transparent focus:border-black transition-all"
              />
              <button className="bg-black text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center lg:text-left">
              Weekly newsletter. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
