import React from "react";
import { ArrowRight } from "lucide-react";

const FeatureGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Title Section */}
        <div className="lg:col-span-12 mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 max-w-xl">
            Ship your website quickly with Frameblox
          </h2>
          <p className="text-gray-500 max-w-xl">
            Use prebuilt templates and components for a professional, stunning
            look. Save time and focus on content with our user-friendly,
            customizable design solutions.
          </p>
        </div>

        {/* Big Left Image */}
        <div className="lg:col-span-7 h-[500px] overflow-hidden rounded-3xl relative group">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Feature"
          />
        </div>

        {/* Small Top Right Section */}
        <div className="lg:col-span-5 bg-black text-white p-12 rounded-3xl flex flex-col justify-end">
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">
            Built by the Streets, Made for You
          </h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            From the streets to your style—our journey is all about
            self-expression and rebellion. Join the movement.
          </p>
          <button className="flex items-center gap-2 group self-start">
            <span className="w-10 h-10 rounded-full border border-white flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
              <ArrowRight size={18} />
            </span>
            <span className="text-sm font-bold uppercase tracking-widest">
              Shop now
            </span>
          </button>
        </div>

        {/* Bottom Left Small Section */}
        <div className="lg:col-span-4 bg-gray-100 p-12 rounded-3xl flex flex-col justify-end">
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">
            Elevate Your Street Game
          </h3>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">
            From bold graphics to everyday essentials, explore our latest drops
            and signature pieces designed for the culture.
          </p>
          <button className="flex items-center gap-2 group self-start">
            <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowRight size={18} />
            </span>
            <span className="text-sm font-bold uppercase tracking-widest">
              Shop collections
            </span>
          </button>
        </div>

        {/* Bottom Right Wide Section */}
        <div className="lg:col-span-8 h-[400px] overflow-hidden rounded-3xl relative">
          <img
            src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=1200"
            className="w-full h-full object-cover"
            alt="Feature 2"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
