import Reveal from "@/components/elements/Reveal";
import SplitText from "@/components/elements/Reactbits/SplitText";
import Image from "next/image"

const Navbar = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <>
            <div className="container xl:flex lg:flex md:flex items-center justify-between xl:py-[40px] lg:py-[40px] py-[20px]">
                <div className="flex items-center gap-2">
                    <Reveal>
                        <Image className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]" src="/icon/copyright.svg" alt="" width={24} height={24} />
                    </Reveal>
                    <div className="xl:text-[24px] lg:text-[18px] text-[14px] font-normal">
                        <SplitText
                            text="Code by Ehan"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </div>

                </div>
                <div className="hidden xl:flex lg:flex md:flex gap-4">
                    <div className="grid gap-1 px-3 py-1 group cursor-pointer" onClick={() => handleScroll("introduce")}>
                        <div className="xl:text-[24px] lg:text-[18px] text-[14px] font-normal">Home</div>
                        <span className="invisible group-hover:visible h-[2px] bg-primary"></span>
                    </div>
                    <div className="grid gap-1 px-3 py-1 group cursor-pointer" onClick={() => handleScroll("portfolio")}>
                        <div className="xl:text-[24px] lg:text-[18px] text-[14px] font-normal">Work</div>
                        <span className="invisible group-hover:visible h-[2px] bg-primary"></span>
                    </div>
                    <div className="grid gap-1 px-3 py-1 group cursor-pointer" onClick={() => handleScroll("about")}>
                        <div className="xl:text-[24px] lg:text-[18px] text-[14px] font-normal">About</div>
                        <span className="invisible group-hover:visible h-[2px] bg-primary"></span>
                    </div>
                    <div className="grid gap-1 px-3 py-1 group cursor-pointer" onClick={() => handleScroll("contact")}>
                        <div className="xl:text-[24px] lg:text-[18px] text-[14px] font-normal">Contact</div>
                        <span className="invisible group-hover:visible h-[2px] bg-primary"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar