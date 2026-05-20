"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiHeart, FiShoppingCart, FiRefreshCw } from "react-icons/fi";
import { formatPrice, getDiscount, getPlaceholderColor } from "@/utils/helpers";

export default function ProductCard({ product, index = 0 }) {
  const router = useRouter();
  const discount = getDiscount(product.oldPrice, product.price);
  const color = getPlaceholderColor(index);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        {/* Product Image or Gradient Fallback */}
        {imgError ? (
          <div
            className={`w-full h-full bg-gradient-to-br ${color} flex items-center justify-center cursor-pointer`}
            onClick={() => router.push(`/product/${product.id}`)}
          >
            <span className="text-white/80 text-sm font-medium px-4 text-center leading-tight">
              {product.name}
            </span>
          </div>
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover cursor-pointer"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onClick={() => router.push(`/product/${product.id}`)}
            onError={() => setImgError(true)}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold rounded-md text-white ${
              product.badge === "SALE" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Discount Badge */}
        {discount && (
          <span className="absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded-md bg-orange-500 text-white">
            -{discount}%
          </span>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-2 right-10 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all opacity-0 group-hover:opacity-100">
          <FiHeart className="w-4 h-4" />
        </button>

        {/* Compare Button */}
        <button className="absolute bottom-14 right-2 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white transition-all opacity-0 group-hover:opacity-100">
          <FiRefreshCw className="w-3.5 h-3.5" />
        </button>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3 flex flex-col flex-1">
        <h3
          className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => router.push(`/product/${product.id}`)}
        >
          {product.name}
        </h3>
        <p className="text-xs text-gray-400 mb-2 line-clamp-1">{product.category}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-3 h-3 ${
                  star <= Math.round(parseFloat(product.rating))
                    ? "text-yellow-400"
                    : "text-gray-200"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[10px] text-gray-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-auto mb-3">
          <span className="text-lg font-bold text-blue-600">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          disabled={!product.inStock}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          <FiShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}