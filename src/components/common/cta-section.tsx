import React from "react";
import { ArrowRight } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="relative h-[600px] rounded-[40px] overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=2000')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
            Join the movement.
            <br />
            Wear the Future.
          </h2>
          <p className="text-gray-200 mb-12 max-w-lg">
            Streetwear designed for those who break the mold. Limited drops,
            bold designs, and premium quality—don't miss out.
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-full flex items-center gap-3 font-black uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors shadow-2xl">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowRight size={16} />
            </span>
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
