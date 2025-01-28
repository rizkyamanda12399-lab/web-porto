import AnimatedContent from "@/components/elements/Reactbits/AnimatedContent";
import BlurText from "@/components/elements/Reactbits/BlurText";
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

    const textIntroduce = [
        {
            text: "Hi, What's going on?",
            delay: 50,
        },
        {
            text: "Regrads from Ehan, Front",
            delay: 100,
        },
        {
            text: "End Developer and Designer",
            delay: 150,
        },
    ]

    return (
        <div>
            <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
            >

                <div id="introduce" className="grid xl:grid-cols-12 lg:grid-cols-12 gap-[32px] xl:scroll-mt-[60px] lg:scroll-mt-[40px] scroll-mt-[20px]">
                    <div className="grid xl:col-span-8 lg:col-span-8 xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                        <Heading src="home" tittle="Introduce" />
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
                        {/* <div className="xl:text-[80px] lg:text-[60px] text-[32px] font-light xl:leading-[96px] lg:leading-[72px]">
                        <p>Hi, What&apos;s going on?</p>
                        <p>Regrads from Ehan, Front</p>
                        <p>End Developer and Designer</p>
                    </div> */}
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
            </AnimatedContent>
        </div>
    )
}

export default Introduce