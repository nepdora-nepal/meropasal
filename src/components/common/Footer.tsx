import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-black tracking-tighter mb-6 uppercase">
              Velora
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Pushing the boundaries of modern streetwear since 2024. Designed
              for the culture, built for the streets.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-colors font-bold text-xs">
                IG
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-colors font-bold text-xs">
                TW
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-colors font-bold text-xs">
                FB
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8">
              Shop
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>
                <a href="#" className="hover:text-black">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Hoodies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>
                <a href="#" className="hover:text-black">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8">
              Newsletter
            </h4>
            <p className="text-sm text-gray-500 mb-6">
              Stay ahead of the game. Get notified on new drops and exclusive
              offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-100 border-none rounded-full px-6 py-3 text-sm focus:ring-1 focus:ring-black flex-1 outline-none"
              />
              <button className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
          <p>© 2024 Velora Collective. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>Powered by React</span>
            <span>Designed with Passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
