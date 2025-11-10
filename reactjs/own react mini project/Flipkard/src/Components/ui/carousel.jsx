import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })] // 👈 Auto-play
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full max-w-10xl mx-auto">
      {/* Carousel viewport */}
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] border-0 shadow-none p-0 m-0 relative">
              <div className="p-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                {slide.caption && (
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                    {slide.caption}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Button */}
      <button
        size="icon"
        variant="secondary"
        className="absolute top-1/2 -left-10 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-5 h-5 text-gray-800" />
      </button>

      {/* Right Button */}
      <button
        size="icon"
        variant="secondary"
        className="absolute top-1/2 -right-10 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
        onClick={scrollNext}
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-3 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === selectedIndex ? "bg-primary w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
