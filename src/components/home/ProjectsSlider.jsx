"use client";

import { projects } from "@/utils/data";
import { getPlaceholderColor } from "@/utils/helpers";
import SectionHeader from "@/components/ui/SectionHeader";
import Slider from "@/components/ui/Slider";

export default function ProjectsSlider() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Projects & our products"
          subtitle="Projects and programs developed by Dotcom"
        />

        <Slider
          items={projects}
          slidesToShow={4}
          gap={20}
          renderItem={(project, index) => (
            <div className="group cursor-pointer">
              {/* Image */}
              <div
                className={`w-full aspect-video rounded-xl bg-gradient-to-br ${getPlaceholderColor(index)} flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all duration-300`}
              >
                <span className="text-white/30 text-lg font-bold px-4 text-center">
                  {project.name}
                </span>
              </div>
              {/* Info */}
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}