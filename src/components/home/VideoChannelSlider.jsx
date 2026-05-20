"use client";

import { videos } from "@/utils/data";
import { getPlaceholderColor } from "@/utils/helpers";
import SectionHeader from "@/components/ui/SectionHeader";
import Slider from "@/components/ui/Slider";
import { FiPlay } from "react-icons/fi";

export default function VideoChannelSlider() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Store Video Channel"
          subtitle="Video presentation of store products"
        />

        <Slider
          items={videos}
          slidesToShow={4}
          gap={20}
          renderItem={(video, index) => (
            <div className="group cursor-pointer">
              {/* Thumbnail */}
              <div
                className={`relative w-full aspect-video rounded-xl bg-gradient-to-br ${getPlaceholderColor(index)} flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all duration-300`}
              >
                {/* Play Button Overlay */}
                <div className="w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <FiPlay className="w-5 h-5 ml-0.5" />
                </div>
              </div>
              {/* Info */}
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}