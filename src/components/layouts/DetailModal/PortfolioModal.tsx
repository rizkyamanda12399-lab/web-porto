"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface SlideItem {
  title: string;
  description: string;
  image: string;
  gif?: {
    gifImage1?: string;
    gifImage2?: string;
    gifImage3?: string;
    gifImage4?: string;
    gifImage5?: string;
    gifImage6?: string;
    gifImage7?: string;
  };
  href?: string;
  iconClick?: string;
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

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  if (!open) return null; // ⛔ hindari rendering saat modal tertutup

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      // klik di luar modal untuk menutup
      onClick={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
    >
      <div
        className="relative w-full xl:max-w-4xl lg:max-w-3xl max-w-xl xl:mx-auto lg:mx-auto mx-[20px] xl:p-6 lg:p-4 p-2 rounded-[20px] bg-indigo-200 border-[3px] border-white overflow-hidden"
      >
        {/* Tombol Close */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-3 right-3 text-black hover:bg-white/40 rounded-full p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#201e1e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
        </button>

        {/* Title dan Description */}
        <div className="space-y-2 mb-4">
          <h2 className="xl:text-[32px] text-black lg:text-[24px] text-[16px] font-semibold text-start">
            {slides[selectedIndex]?.title}
          </h2>
          <p className="xl:text-[16px] lg:text-[16px] text-[12px] text-black text-start">
            {slides[selectedIndex]?.description}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative bg-black/50 rounded-[16px]">
          <div className="overflow-hidden rounded-[16px]" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className="relative flex-[0_0_100%] w-fit overflow-hidden rounded-[16px]"
                >
                  <a href={slide.href}
                    className={`relative ${slide.href && ""} w-full h-full flex justify-center items-center`}
                    target="_blank"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={1162}
                      height={677}
                      className="h-auto w-full object-contain rounded-[16px]"
                    />
                    {slide.gif && (
                      <div className="absolute top-0 left-0 right-0 bottom-0 mb-[4%]">
                        <div className="relative h-full">
                          <div className="absolute bottom-0 pt-[22%] px-[22%] flex justify-center h-full xl:gap-[16px] lg:gap-[12px] gap-[8px]">
                            {slide.gif.gifImage1 && (
                              <Image
                                src={slide.gif.gifImage1}
                                alt=""
                                width={300}
                                height={800}
                                className="drop-shadow-xl xl:rounded-[8px] rounded-[4px]"
                              />
                            )}
                            {slide.gif.gifImage2 && (
                              <Image
                                src={slide.gif.gifImage2}
                                alt=""
                                width={300}
                                height={800}
                                className="drop-shadow-xl xl:rounded-[8px] rounded-[4px]"
                              />
                            )}
                            {slide.gif.gifImage3 && (
                              <Image
                                src={slide.gif.gifImage3}
                                alt=""
                                width={300}
                                height={800}
                                className="drop-shadow-xl xl:rounded-[8px] rounded-[4px]"
                              />
                            )}
                            {slide.gif.gifImage4 && (
                              <Image
                                src={slide.gif.gifImage4}
                                alt=""
                                width={300}
                                height={800}
                                className="drop-shadow-xl xl:rounded-[8px] rounded-[4px]"
                              />
                            )}
                            {slide.gif.gifImage5 && (
                              <Image
                                src={slide.gif.gifImage5}
                                alt=""
                                width={300}
                                height={800}
                                className="drop-shadow-xl xl:rounded-[8px] rounded-[4px]"
                              />
                            )}
                            {slide.gif.gifImage6 && (
                              <Image
                                src={slide.gif.gifImage6}
                                alt=""
                                width={300}
                                height={800}
                                className="drop-shadow-xl xl:rounded-[8px] rounded-[4px]"
                              />
                            )}
                            {slide.gif.gifImage7 && (
                              <Image
                                src={slide.gif.gifImage7}
                                alt=""
                                width={300}
                                height={800}
                                className="drop-shadow-xl xl:rounded-[8px] rounded-[4px]"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    {slide.iconClick && (
                      <div className="absolute flex justify-center items-center xl:h-full xl:w-full lg:w-full lg:h-full min-h-full  bottom-0 scale-90 hover:scale-100 transition-all ease-linear duration-150">
                        <a href={slide.href} className=" h-fit w-fit" target="_blank">
                          <Image
                            src={slide.iconClick}
                            alt=""
                            width={300}
                            height={800}
                            className="xl:h-[70%] lg:h-[70%] h-[60px] w-full xl:object-contain lg:object-contain object-cover rounded-[16px]"
                          />
                        </a>
                      </div>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Navigasi */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-[12px] p-2"
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
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-[12px] p-2"
          >
            <Image
              src="/icon/arrow-right.svg"
              alt="next"
              width={20}
              height={20}
            />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-[10px] h-[10px] rounded-full transition-all ${i === selectedIndex ? "bg-black" : "bg-black/30"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};