"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { bestOffers } from "@/utils/data";
import { getPlaceholderColor } from "@/utils/helpers";
import SectionHeader from "@/components/ui/SectionHeader";

export default function BestOffers() {
  const router = useRouter();
  const [imagesError, setImagesError] = useState({});

  const handleImageError = (offerId) => {
    setImagesError((prev) => ({ ...prev, [offerId]: true }));
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="أفضل العروض"
          subtitle="اختتم فرصة العروض قبل الانقاذ"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestOffers.map((offer, index) => (
            <div
              key={offer.id}
              onClick={() => router.push(offer.link)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {imagesError[offer.id] ? (
                <div
                  className={`w-full h-full bg-gradient-to-br ${getPlaceholderColor(index)} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
                >
                  <span className="text-white/30 text-2xl font-bold">
                    {offer.alt}
                  </span>
                </div>
              ) : (
                <Image
                  src={offer.image}
                  alt={offer.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  onError={() => handleImageError(offer.id)}
                />
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
