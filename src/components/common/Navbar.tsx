import React from "react";
import { ShoppingCart, User, Search, Menu } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase">
        EXCLUSIVE GIFT ON ORDERS OVER $150
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a
            href="#"
            className="text-3xl font-black tracking-tighter leading-none"
          >
            VELORA
          </a>
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:opacity-50 transition-opacity">
              Home
            </a>
            <a href="#" className="hover:opacity-50 transition-opacity">
              Shop
            </a>
            <a href="#" className="hover:opacity-50 transition-opacity">
              About Us
            </a>
            <a href="#" className="hover:opacity-50 transition-opacity">
              Collection
            </a>
            <a href="#" className="hover:opacity-50 transition-opacity">
              Category
            </a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:scale-110 transition-transform">
            <Search size={20} strokeWidth={2.5} />
          </button>
          <button className="relative hover:scale-110 transition-transform">
            <ShoppingCart size={20} strokeWidth={2.5} />
            <span className="absolute -top-1.5 -right-2 bg-black text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <button className="hover:scale-110 transition-transform">
            <User size={20} strokeWidth={2.5} />
          </button>
          <button className="lg:hidden">
            <Menu size={24} strokeWidth={2.5} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
