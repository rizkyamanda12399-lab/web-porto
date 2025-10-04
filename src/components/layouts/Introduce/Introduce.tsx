import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";
import Heading from "@/components/fragments/Heading"
import dynamic from "next/dynamic";
import Image from "next/image"


const Introduce = () => {

    const AnimatedContent = dynamic(() => import("@/blocks/Animations/AnimatedContent/AnimatedContent"), {
        ssr: false,
    });

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    const textIntroduce = [
        {
            text: "Hi, What's going on? test",
            delay: 50,
        },
        {
            text: "Regards from Manda,, Front",
            delay: 100,
        },
        {
            text: "End Developer and Designer",
            delay: 150,
        },
    ]

    return (
        <div id="introduce" className="xl:scroll-mt-[60px] lg:scroll-mt-[40px] scroll-mt-[20px] xl:mt-[40px] lg:mt-[30px] mt-[20px]">
            <AnimatedContent className="grid xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                <Heading src="home" tittle="Introduce" />
                <div className="grid xl:grid-cols-12 lg:grid-cols-12 gap-[32px] ">
                    <div className="grid xl:col-span-8 lg:col-span-8 xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                        <div className="xl:text-[80px] lg:text-[60px] text-[32px] font-light xl:leading-[96px] lg:leading-[72px]">
                            {textIntroduce.map((item, index) => (
                                <div key={index}>
                                    <BlurText
                                        text={item.text}
                                        delay={item.delay}
                                        animateBy="words"
                                        direction="top"
                                        animationFrom={undefined} animationTo={undefined} onAnimationComplete={undefined}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative xl:col-span-4 lg:col-span-4 grid gap-10 justify-center items-center">
                        <div className="relative flex justify-center items-center cursor-pointer lg:scale-100 scale-75 group" onClick={() => handleScroll("portfolio")}>
                            <CircularText
                                text="SCROLL TO MY PROJECT ~ SCROLL TO MY PROJECT ~ "
                                onHover="goBonkers"
                                spinDuration={60}
                                className="text-[32px] font-semibold text-gray-500"
                            />
                            <div className="absolute group-hover:pointer-events-none">
                                <Image className="scale-[1.1] group-hover:scale-[0.9] ease-in-out duration-300" src="icon/down-arrow.svg" alt="" width={84} height={84} />
                            </div>
                        </div>
                    </div>

                </div>
            </AnimatedContent>
        </div>
    )
}

export default Introduce