import HeroBanner from "@/components/home/HeroBanner";
import BestOffers from "@/components/home/BestOffers";
import StoreContents from "@/components/home/StoreContents";
import ProjectsSlider from "@/components/home/ProjectsSlider";
import VideoChannelSlider from "@/components/home/VideoChannelSlider";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Banner / Slider */}
      <HeroBanner />

      {/* 2. Best Offers Section */}
      <BestOffers />

      {/* 3. Store Contents Section */}
      <StoreContents />

      {/* 4. Projects & Our Products Slider */}
      <ProjectsSlider />

      {/* 5. Store Video Channel Slider */}
      <VideoChannelSlider />
    </>
  );
}