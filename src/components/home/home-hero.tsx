"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: "01",
    title: "COMMUNITY-DRIVEN",
    subtitle: "CULTURE",
    description:
      "Born from the streets, for the streets. We celebrate the rebels and dreamers who shape the future of urban lifestyle.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "02",
    title: "FUTURE-READY",
    subtitle: "FASHION",
    description:
      "From oversized silhouettes to innovative materials, we push the boundaries of modern streetwear while staying true to the culture.",
    image:
      "https://images.unsplash.com/photo-1578932750294-f5001e65c1bb?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "03",
    title: "ART MEETS",
    subtitle: "ATTITUDE",
    description:
      "Expression through apparel. Each piece is a canvas reflecting the raw energy of contemporary street art.",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "04",
    title: "BUILT FOR THE",
    subtitle: "STREETS",
    description:
      "Durable, high-quality fabrics and expert craftsmanship ensure every piece can handle the city grind while keeping you comfortable.",
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=2000",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 seconds per slide
    const interval = 50; // Update progress every 50ms
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative h-[90vh] min-h-[750px] w-full bg-[#1a1a1a] text-white overflow-hidden mx-auto max-w-[1440px] ">
      {/* Background Images with Crossfade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-4xl transition-all duration-700 ease-out transform">
          <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black leading-[0.8] tracking-tighter mb-8 uppercase select-none">
            {activeSlide.title}
            <br />
            {activeSlide.subtitle}
          </h1>

          <p className="text-base md:text-lg text-gray-200 max-w-lg mb-10 leading-relaxed font-medium">
            {activeSlide.description}
          </p>

          <div className="flex items-center gap-6 mb-16">
            <button className="bg-white text-black p-1.5 pr-8 rounded-full flex items-center gap-4 font-bold hover:bg-gray-100 transition-all uppercase text-xs tracking-widest group shadow-xl">
              <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white transition-transform group-hover:rotate-45">
                <ArrowRight size={18} />
              </span>
              Shop Now
            </button>
          </div>
        </div>

        {/* Carousel Indicators / Progress Bars */}
        <div className="absolute bottom-12 left-8 md:left-16 right-8 md:right-16 grid grid-cols-4 gap-8">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="group cursor-pointer"
              onClick={() => handleSlideChange(index)}
            >
              <div className="flex items-end justify-between mb-3">
                <span
                  className={`text-xs font-bold transition-colors ${
                    index === currentSlide ? "text-white" : "text-gray-400"
                  }`}
                >
                  {slide.id}
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest font-bold transition-colors hidden md:block ${
                    index === currentSlide ? "text-white" : "text-gray-400"
                  }`}
                >
                  {slide.title.split(" ")[0]} {slide.subtitle}
                </span>
              </div>
              <div className="relative h-[2px] w-full bg-white/20 overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full bg-white transition-all duration-100 ease-linear ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    width: index === currentSlide ? `${progress}%` : "0%",
                  }}
                />
              </div>
              <p
                className={`mt-3 text-[11px] font-medium transition-colors hidden lg:block ${
                  index === currentSlide ? "text-white" : "text-gray-500"
                }`}
              >
                {slide.title.charAt(0) + slide.title.slice(1).toLowerCase()}{" "}
                {slide.subtitle.toLowerCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
