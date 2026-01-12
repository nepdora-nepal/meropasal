import React from "react";
import { ArrowRight } from "lucide-react";

const StorySection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-32 flex flex-col md:flex-row gap-16 items-start">
      <div className="flex-1">
        <p className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">
          Streetwear with a Story
        </p>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
          Wear the Movement,
          <br />
          Break the Mold.
        </h2>
      </div>
      <div className="flex-1 text-gray-500 space-y-6 md:pt-10">
        <p className="leading-relaxed">
          Born from the pulse of the streets, our brand is a tribute to the
          rebels, the dreamers, and the rule-breakers who shape the culture.
          Inspired by the raw energy of city life—graffiti-covered alleys,
          underground music scenes, and late-night skate sessions—we craft
          streetwear that speaks to individuality and self-expression.
        </p>
        <p className="leading-relaxed">
          Born from the pulse of the streets, our brand is a tribute to the
          rebels, the dreamers, and the rule-breakers who shape the culture.
          Inspired by the raw energy of city life—graffiti-covered alleys,
          underground music scenes, and late-night skate sessions—we craft
          streetwear that speaks to individuality and self-expression.
        </p>
        <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors self-start mt-4">
          <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
            <ArrowRight size={14} />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest">
            Get it now
          </span>
        </button>
      </div>
    </section>
  );
};

export default StorySection;
