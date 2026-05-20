"use client";

import { useState, useRef, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Slider({
  children,
  items,
  renderItem,
  slidesToShow = 4,
  gap = 16,
  autoPlay = false,
  interval = 4000,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxIndex = Math.max(0, items.length - slidesToShow);
  const autoPlayRef = useRef(null);

  const next = useCallback(() => {
    setCurrentSlide((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentSlide((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Responsive slidesToShow
  const getSlidesToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 768) return 2;
      if (window.innerWidth < 1024) return 3;
    }
    return slidesToShow;
  };

  const itemWidth = `calc((100% - ${(getSlidesToShow() - 1) * gap}px) / ${getSlidesToShow()})`;

  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center py-16 text-gray-400">
        No items to display
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous"
      >
        <FiChevronLeft className="w-5 h-5" />
      </button>

      {/* Slides Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${currentSlide * (itemWidth + gap)}px)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className="flex-shrink-0"
              style={{ width: itemWidth }}
            >
              {renderItem ? renderItem(item, index) : children}
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next"
      >
        <FiChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}