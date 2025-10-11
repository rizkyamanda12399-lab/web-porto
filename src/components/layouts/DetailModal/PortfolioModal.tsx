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
      <DialogContent className="max-w-5xl p-6 xl:rounded-[32px] lg:rounded-[32px] rounded-[20px] bg-indigo-200 border-[3px] border-white mx-10px">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            {slides[selectedIndex]?.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {slides[selectedIndex]?.description}
          </DialogDescription>
        </DialogHeader>

        {/* Carousel */}
        <div className="relative bg-black/50 rounded-xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className="relative flex-[0_0_100%] items-center w-full h-fit  overflow-hidden rounded-xl"
                >
                  <div className="relative w-full flex justify-center items-center">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={1162}
                      height={677}
                      className="h-auto w-auto object-contain rounded-xl"
                    />

                    {/* Tombol kiri-kanan di dalam bungkusan gambar */}
                    <button
                      onClick={scrollPrev}
                      className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 sm:p-3"
                    >
                      <Image
                        src="/icon/arrow-left.svg"
                        alt="prev"
                        width={20}
                        height={20}
                      />
                    </button>

                    <button
                      onClick={scrollNext}
                      className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 sm:p-3"
                    >
                      <Image
                        src="/icon/arrow-right.svg"
                        alt="next"
                        width={20}
                        height={20}
                      />
                    </button>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          {/* <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full xl:p-6 lg:p-4 p-2"
          >
            <Image src="/icon/arrow-left.svg" alt="" width={16} height={16} className="xl:scale-[150%] lg:scale-[150%] scale-[100%]" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full xl:p-6 lg:p-4 p-2"
          >
            <Image src="/icon/arrow-right.svg" alt="" width={16} height={16} className="xl:scale-[150%] lg:scale-[150%] scale-[100%]" />
          </button> */}

          {/* Dots indicator */}
          <div className="absolute flex bottom-4">
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
