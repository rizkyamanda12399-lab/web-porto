import Image from "next/image"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const NavSidebar = () => {
    const NavIcons = [
        { href: "introduce", icon: "/icon/home.svg", alt: "Home" },
        { href: "about", icon: "/icon/about.svg", alt: "About" },
        { href: "resume", icon: "/icon/resume.svg", alt: "Resume" },
        { href: "portfolio", icon: "/icon/portfolio.svg", alt: "Portfolio" },
        { href: "skills", icon: "/icon/skills.svg", alt: "Skills" },
        { href: "contact", icon: "/icon/contact.svg", alt: "Contact" },
    ]

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <div className="xl:sticky lg:sticky fixed xl:right-[80px] lg:right-[60px] xl:top-1/2 lg:top-1/2 xl:transform lg:transform xl:-translate-y-1/2 lg:-translate-y-1/2 z-50 bottom-[24px] left-1/2 transform -translate-x-1/2 w-full flex justify-center mx-auto">
            <div className="w-fit flex xl:flex-col lg:flex-col flex-row gap-6 xl:px-[24px] lg:px-[24px] xl:py-[36px] lg:py-[36px] px-[36px] py-[24px] border border-white-1 rounded-full shadow-lg bg-white/10 backdrop-blur-lg">
                {NavIcons.map((item, index) => (
                    <>
                        <TooltipProvider delayDuration={30}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div
                                        key={index}
                                        className={`filter-white hover:filter-green transition-all duration-300 cursor-pointer`}
                                        onClick={() => handleScroll(item.href)}
                                    >
                                        <Image
                                            className="xl:w-[32px] xl:h-[32px] w-[24px] h-[24px]"
                                            src={item.icon}
                                            alt={item.alt}
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-white font-semibold">{item.alt}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </>
                ))}

            </div>
        </div>
    )
}

export default NavSidebar