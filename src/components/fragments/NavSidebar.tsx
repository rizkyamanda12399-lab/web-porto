/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useEffect, useState } from "react";


const NavSidebar = () => {
    const [activeSection, setActiveSection] = useState<string>("");
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

    useEffect(() => {
        const handleScrollPosition = () => {
            const sectionOffsets = NavIcons.map((item) => {
                const el = document.getElementById(item.href);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return {
                        id: item.href,
                        top: rect.top,
                    };
                }
                return null;
            }).filter(Boolean) as { id: string; top: number }[];

            const visibleSection = sectionOffsets.find(
                (sec) => sec.top >= 0 && sec.top < window.innerHeight / 2
            );

            if (visibleSection && visibleSection.id !== activeSection) {
                setActiveSection(visibleSection.id);
            }
        };

        window.addEventListener("scroll", handleScrollPosition);
        return () => window.removeEventListener("scroll", handleScrollPosition);
    }, [activeSection]);

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
                                        className={`filter-white hover:filter-green transition-all duration-300 cursor-pointer ${activeSection === item.href ? "filter-green" : ""}`}
                                        onClick={() => handleScroll(item.href)}
                                    >
                                        <Image
                                            className="xl:w-[32px] xl:h-[32px] w-[24px] h-[24px]"
                                            src={
                                                activeSection === item.href
                                                    ? item.icon.replace(".svg", "2.svg") // icon aktif
                                                    : item.icon // icon default
                                            }
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