import React from "react";
import { ArrowRight } from "lucide-react";

const ProductHighlight: React.FC = () => {
  return (
    <section className="bg-black text-white w-full py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
            Nightfall Oversized Hoodie
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
            A heavyweight, ultra-soft hoodie designed for comfort and style.
            Featuring a relaxed fit, subtle embroidered detailing, and a faded
            wash for that perfect worn-in look. Street-ready and built to stand
            out.
          </p>
          <div className="flex items-center gap-6 mb-12">
            <div className="text-4xl font-black">$89</div>
            <div className="text-xl text-gray-500 line-through">$120</div>
          </div>
          <button className="bg-white text-black px-10 py-4 rounded-full flex items-center gap-3 font-black uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowRight size={16} />
            </span>
            Shop Now
          </button>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1578932750294-f5001e65c1bb?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover"
              alt="Nightfall Hoodie"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden bg-white/10 hover:opacity-75 cursor-pointer border border-white/5 transition-opacity"
              >
                {/* Fixed invalid template literal arithmetic expression */}
                <img
                  src={`https://images.unsplash.com/photo-1578932750294-f5001e65c1bb?auto=format&fit=crop&q=80&w=300&v=${i}`}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
