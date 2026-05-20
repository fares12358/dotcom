"use client";

import { useState, useMemo } from "react";
import { allProducts, filterCategories } from "@/utils/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/home/ProductCard";
import { FiFilter, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ITEMS_PER_PAGE = 12;

export default function StoreContents() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  // Pagination
  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return allProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  // Filter toggle
  const toggleFilter = (categoryId, productId) => {
    setSelectedFilters((prev) => {
      const key = `${categoryId}-${productId}`;
      const updated = { ...prev };
      if (updated[key]) {
        delete updated[key];
      } else {
        updated[key] = true;
      }
      return updated;
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="محتويات المتجر"
          subtitle="استمتع بتجربة تسوق مميزة مع متجرنا"
        />

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {paginatedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <FiChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  page === currentPage
                    ? "bg-blue-600 text-white shadow-md"
                    : "border border-gray-200 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* FAB - Filter Button */}
      <button
        onClick={() => setFilterOpen(true)}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center hover:bg-blue-700 transition-colors"
        aria-label="Open filter"
      >
        <FiFilter className="w-5 h-5" />
      </button>

      {/* Filter Sidebar Overlay */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setFilterOpen(false)}
          />

          {/* Sidebar */}
          <div className="relative w-80 max-w-[85vw] bg-white h-full overflow-y-auto shadow-2xl animate-slide-left">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between z-10">
              <h3 className="font-semibold text-gray-800">Filter Products</h3>
              <button
                onClick={() => setFilterOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-6">
              {filterCategories.map((category) => (
                <div key={category.id}>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {category.name}
                  </h4>
                  <div className="space-y-1.5 ml-3.5">
                    {category.products.map((product) => {
                      const key = `${category.id}-${product.id}`;
                      return (
                        <label
                          key={product.id}
                          className="flex items-center gap-2.5 py-1.5 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={!!selectedFilters[key]}
                            onChange={() => toggleFilter(category.id, product.id)}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                            {product.name}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes slideLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slideLeft 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}