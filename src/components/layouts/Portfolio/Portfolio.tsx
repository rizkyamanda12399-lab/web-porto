import DetailProject from "@/components/fragments/DetailProject"
import Heading from "@/components/fragments/Heading"
import Image from "next/image"
import { DetailProjects } from "./constants"

const Portfolio = () => {

    return (
        <div id="portfolio" className="grid xl:gap-[32px] lg:gap-[24px] gap-[16px] xl:scroll-mt-[60px] lg:scroll-mt-[40px] scroll-mt-[20px]">
            <div className="grid xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                <Heading src="portfolio" tittle="Portfolio" />
                <div className="xl:text-[60px] lg:text-[40px] text-[36px] font-light xl:leading-[72px] lg:leading-[54px]">My Recent<span className="text-primary"> Project</span></div>
                {/* Portfolio */}
                <div className="grid xl:gap-[80px] lg:gap-[60px] gap-[40px]">

                    {/* <DetailProject
                        headline="Kemdikbud - Laman Pusat Kurikulum dan Pembelajaran"
                        job="UI/UX Designer & Frontend Developer"
                        colorPrimary="bg-puskur-gradient"
                        tittle="Puskurjar"
                        desc="Develop UI/UX designs for the Curriculum and Learning Center website. Develop actions on the website or web application using programming languages ​​such as PHP, Bootstrap 5, MySQL, etc. Involved in bug fixing on functionality, performance, and design issues with PHP. Create programs and code that support the website database, server, and other applications that may be on it"
                        img={Puskur.map((item, index) => (
                            <a key={index} href={item.href} target="_blank">
                                <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.src} alt="" width={1163} height={677} />
                            </a>
                        ))}
                        src={PuskurIcon.map((item, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 xl:p-[12px] lg:p-[12px] p-[8px] rounded-full w-fit h-fit">
                                <Image className="xl:w-[36px] xl:h-[36px] lg:w-[36px] lg:h-[36px] w-[18px] h-[18px]" src={item.src} alt="" width={36} height={36} />
                            </div>
                        ))}
                    /> */}
                    {DetailProjects.map((project, index) => (
                        <>
                            <DetailProject
                                key={index}
                                headline={project.headline}
                                job={project.job}
                                colorPrimary={project.colorPrimary}
                                tittle={project.tittle}
                                desc={project.desc}
                                img={project.img.map((item: { href: string; src: string }, idx: number) => (
                                    <a key={idx} href={item.href} target="_blank">
                                        <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.src} alt="" width={1163} height={677} />
                                    </a>
                                ))}
                                src={project.src.map((item: { src: string }, idx: number) => (
                                    <div key={idx} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 xl:p-[12px] lg:p-[12px] p-[8px] rounded-full w-fit h-fit">
                                        <Image className="xl:w-[36px] xl:h-[36px] lg:w-[36px] lg:h-[36px] w-[18px] h-[18px]" src={item.src} alt="" width={36} height={36} />
                                    </div>
                                ))}
                            />
                            <div className="w-full h-[1px] bg-primary"></div>
                        </>
                    ))}

                </div>

            </div>
        </div>
    )
}


export default Portfolio