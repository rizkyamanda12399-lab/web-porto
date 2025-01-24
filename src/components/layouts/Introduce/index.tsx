import Heading from "@/components/fragments/Heading"
import Image from "next/image"

const Introduce = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    return (
        <div>
            <div id="introduce" className="grid xl:grid-cols-12 lg:grid-cols-12 gap-[32px] xl:scroll-mt-[60px] lg:scroll-mt-[40px] scroll-mt-[20px]">
                <div className="grid xl:col-span-8 lg:col-span-8 xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                    <Heading src="home" tittle="Introduce" />

                    <div className="xl:text-[80px] lg:text-[60px] text-[32px] font-light xl:leading-[96px] lg:leading-[72px]">
                        <p>Hi, What&apos;s going on?</p>
                        <p>Regrads from Ehan, Front</p>
                        <p>End Developer and Designer</p>
                    </div>
                </div>

                <div className="relative xl:col-span-4 lg:col-span-4 flex justify-center items-center">
                    <div className="relative flex justify-center items-center cursor-pointer lg:scale-100 scale-75" onClick={() => handleScroll("portfolio")}>
                        <Image className="animate-slowspin" src="icon/project-scroll.svg" alt="" width={267} height={267} />
                        <div className="absolute">
                            <Image className="" src="icon/down-arrow.svg" alt="" width={84} height={84} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Introduce