"use client";

import * as React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import useEmblaCarousel from "embla-carousel-react";

interface SlideItem {
  title: string;
  description: string;
  image: string;
}

interface PortfolioModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  slides: SlideItem[]; // tiap slide berisi gambar, title, dan deskripsi
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  open,
  onOpenChange,
  slides,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  // update index saat slide berubah
  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            {slides[selectedIndex]?.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {slides[selectedIndex]?.description}
          </DialogDescription>
        </DialogHeader>

        {/* Carousel */}
        <div className="relative mt-6">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className="relative flex-[0_0_100%] h-[400px] sm:h-[500px] overflow-hidden rounded-xl"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
          >
            ‹
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
          >
            ›
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === selectedIndex ? "bg-black" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
