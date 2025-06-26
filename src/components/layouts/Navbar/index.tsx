import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import Reveal from "@/components/elements/Reveal";
import Image from "next/image"

const Navbar = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const menu = [
        {
            tittle: "Home",
            href: "introduce",
        },
        {
            tittle: "Work",
            href: "portfolio",
        },
        {
            tittle: "About",
            href: "about",
        },
        {
            tittle: "Contact",
            href: "contact",
        },
    ]

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
                            threshold={0.2}
                            rootMargin="-50px" onLetterAnimationComplete={undefined}
                        />
                    </div>

                </div>
                <div className="hidden xl:flex lg:flex md:flex gap-4">
                    {menu.map((item, index) => (
                        <div key={index} className="grid gap-1 px-3 py-1 group cursor-pointer" onClick={() => handleScroll(`${item.href}`)}>
                            <div className="xl:text-[24px] lg:text-[18px] text-[14px] font-normal">{item.tittle}</div>
                            <span className="invisible group-hover:visible h-[2px] bg-primary"></span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar