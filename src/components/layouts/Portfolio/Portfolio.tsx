import DetailProject from "@/components/fragments/DetailProject";
import Heading from "@/components/fragments/Heading";
import Image from "next/image";
import { AllProjects, DetailProjects } from "./constants";
import { useState } from "react";
import { PortfolioModal } from "../DetailModal/PortfolioModal";
import { Slide, PortfolioItem } from "./types";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [selectedSlides, setSelectedSlides] = useState<Slide[]>([]);

  const handleOpenModal = (src: string) => {
    const project: PortfolioItem | undefined = AllProjects.find(
      (p) => p.src === src
    );
    if (project) {
      setSelectedSlides(project.slides);
      setOpen(true);
    } else {
      console.warn("Slides not found for:", src);
    }
  };

  return (
    <div
      id="portfolio"
      className="grid xl:gap-[32px] lg:gap-[24px] gap-[16px] xl:scroll-mt-[60px] lg:scroll-mt-[40px] scroll-mt-[20px]"
    >
      <div className="grid xl:gap-[40px] lg:gap-[30px] gap-[20px]">
        <Heading src="portfolio" tittle="Portfolio" />
        <div className="xl:text-[60px] lg:text-[40px] text-[36px] font-light xl:leading-[72px] lg:leading-[54px]">
          My Recent<span className="text-primary"> Project</span>
        </div>
        <PortfolioModal
          open={open}
          onOpenChange={setOpen}
          slides={selectedSlides}
        />
        {/* Portfolio */}
        <div className="grid xl:gap-[80px] lg:gap-[60px] gap-[40px]">
          {DetailProjects.map((project, index) => (
            <>
              <DetailProject
                key={index}
                headline={project.headline}
                job={project.job}
                colorPrimary={project.colorPrimary}
                tittle={project.tittle}
                desc={project.desc}
                img={project.img.map(
                  (item: { href: string; src: string }, idx: number) => (
                    <a
                      key={idx}
                      target="_blank"
                      onClick={() => handleOpenModal(item.src)}
                    >
                      <Image
                        className="w-full h-fit xl:h-[640px] relative top-[20px] object-contain transition-transform duration-500 group-hover:scale-105 "
                        src={item.src}
                        alt=""
                        width={600}
                        height={100}
                      />
                    </a>
                  )
                )}
                src={project.src.map((item: { src: string }, idx: number) => (
                  <div
                    key={idx}
                    className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 xl:p-[12px] lg:p-[12px] p-[8px] rounded-full w-fit h-fit"
                  >
                    <Image
                      className="xl:w-[36px] xl:h-[36px] lg:w-[36px] lg:h-[36px] w-[18px] h-[18px] object-contain"
                      src={item.src}
                      alt=""
                      width={36}
                      height={36}
                    />
                  </div>
                ))}
              />
              <div className="w-full h-[1px] bg-primary"></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
