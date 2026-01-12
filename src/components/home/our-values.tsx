import React from "react";
import { Truck, ShieldCheck, RefreshCcw, Headphones } from "lucide-react";

const ValueProps: React.FC = () => {
  const props = [
    {
      icon: <Truck size={24} />,
      title: "Free Delivery",
      description:
        "Get your streetwear fast and free, with no extra shipping costs on all orders.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "100% Secure Payment",
      description:
        "Shop with confidence using encrypted, safe, and trusted payment methods.",
    },
    {
      icon: <RefreshCcw size={24} />,
      title: "30 Days Return",
      description:
        "Not the perfect fit? No worries. Return or exchange hassle-free within 30 days.",
    },
    {
      icon: <Headphones size={24} />,
      title: "24/7 Support",
      description: "Got questions? Our team is here for you anytime, anywhere.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-24 border-t border-gray-100">
      <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
        <div className="flex-1">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Why Shop With Us?
          </h2>
          <p className="text-gray-500 max-w-sm">
            We've got you covered with hassle-free shopping, top-tier service,
            and guarantees that keep you confident in every purchase.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {props.map((p, i) => (
          <div key={i} className="flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-gray-400 border border-gray-100">
              {p.icon}
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-2">
              {p.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
