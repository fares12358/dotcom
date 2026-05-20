"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { heroSlides } from "@/utils/data";
import { getPlaceholderColor } from "@/utils/helpers";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [imagesError, setImagesError] = useState({});

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= heroSlides.length - 1 ? 0 : prev + 1));
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? heroSlides.length - 1 : prev - 1));
  }, []);

  // Auto play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const handleImageError = (slideId) => {
    setImagesError((prev) => ({ ...prev, [slideId]: true }));
  };

  if (!heroSlides || heroSlides.length === 0) {
    return (
      <div className="w-full aspect-[16/5] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
        <span className="text-white/50 text-lg">Hero Banner</span>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/5] bg-gray-100 overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {imagesError[slide.id] ? (
            <div
              className={`w-full h-full bg-gradient-to-br ${getPlaceholderColor(index)} flex items-center justify-center`}
            >
              <span className="text-white/20 text-6xl font-bold tracking-widest">
                {slide.alt}
              </span>
            </div>
          ) : (
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              onError={() => handleImageError(slide.id)}
            />
          )}
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-all"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-all"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}