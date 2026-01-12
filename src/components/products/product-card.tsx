import { Product } from "@/types/types";
import React from "react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`} className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.badge && (
          <span
            className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
              product.badge === "SALE"
                ? "bg-black text-white"
                : product.badge === "DROP"
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-xl font-black uppercase tracking-tight mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center gap-3 font-bold">
          <span>${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
