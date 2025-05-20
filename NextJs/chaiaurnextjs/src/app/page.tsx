import Image from "next/image";
import HeroSection from "@/component/HeroSection"
import FeatureCourses from "@/component/FeatureCourses"
import StickyScrolPage from "@/component/StickyScrolPage"
import InfiniteScrolPage from "@/component/InfiniteScrolPage"
import CardHoverEfficet from "@/component/CardHoverEfficet"
import WavyBackgroundDemo from "@/component/WavyBackgroundDemo"

export default function Home() {
  return (
    <>
    <div className="flex items-center justify-center pt-4 min-h-screen flex-col">
     <HeroSection />
     <FeatureCourses />
     <StickyScrolPage />
     <InfiniteScrolPage />
     <CardHoverEfficet />
     <WavyBackgroundDemo />
    </div>
    </>
  );
}
