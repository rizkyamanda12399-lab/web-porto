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
  gif?: string;
}

interface PortfolioModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  slides: SlideItem[];
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
  if (!open) return null;

  return (
    <div className="flex w-full px-[30px]">
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="xl:max-w-5xl lg:max-w-4xl xl:p-6 lg:p-4 p-2 xl:rounded-[32px] lg:rounded-[28px] rounded-[12px] bg-indigo-200 border-[3px] border-white ">
          <DialogHeader>
            <DialogTitle className="xl:text-[32px] lg:text-[24px] text-[16px] font-semibold text-start">
              {slides[selectedIndex]?.title}
            </DialogTitle>
            <DialogDescription className="xl:text-[16px] lg:text-[16px] text-[12px] text-black text-start">
              {slides[selectedIndex]?.description}
            </DialogDescription>
          </DialogHeader>

          {/* Carousel */}
          <div className="relative bg-black/50 xl:rounded-[28px] lg:rounded-[24px] rounded-[12px]">
            <div className="overflow-hidden xl:rounded-[28px] lg:rounded-[24px] rounded-[12px]" ref={emblaRef}>
              <div className="flex ">
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className="relative flex-[0_0_100%] items-center w-fit overflow-hidden xl:rounded-[28px] lg:rounded-[24px] rounded-[12px]"
                  >
                    <div className="relative w-full flex justify-center items-center">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={1162}
                        height={677}
                        className="h-auto w-full object-contain xl:rounded-[28px] lg:rounded-[24px] rounded-[12px]"
                      />
                      <div className="absolute bottom-0 scale-90">
                        <Image
                          src={slide.gif ? slide.gif : ""}
                          alt=''
                          width={300}
                          height={800}
                          className="h-auto w-full object-contain xl:rounded-[28px] lg:rounded-[24px] rounded-[12px]"
                        />
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tombol kiri-kanan di dalam bungkusan gambar */}
            <button
              onClick={scrollPrev}
              className="absolute xl:left-3 lg:left-2 left-1 sm:left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white xl:rounded-[32px] lg:rounded-[28px] rounded-[12px] p-2 sm:p-3"
            >
              <Image
                className="xl:w-[20px] lg:w-[16px] w-[12px] xl:h-[20px] lg:h-[16px] h-[12px]"
                src="/icon/arrow-left.svg"
                alt="prev"
                width={20}
                height={20}
              />
            </button>

            <button
              onClick={scrollNext}
              className="absolute xl:right-3 lg:right-2 right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 sm:p-3"
            >
              <Image
                className="xl:w-[20px] lg:w-[16px] w-[12px] xl:h-[20px] lg:h-[16px] h-[12px]"
                src="/icon/arrow-right.svg"
                alt="next"
                width={20}
                height={20}
              />
            </button>

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
            <div className="absolute flex justify-center w-full gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`xl:w-[12px] lg:w-[10px] w-[8px] xl:h-[12px] lg:h-[10px] h-[8px] rounded-full transition-all ${i === selectedIndex ? "bg-black" : "bg-black/[33%]"
                    }`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
