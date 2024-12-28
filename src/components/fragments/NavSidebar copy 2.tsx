import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

type NavSidebarProps = {
    aboutRef: React.RefObject<HTMLDivElement | null>;
    introduceRef: React.RefObject<HTMLDivElement | null>;
    resumeRef: React.RefObject<HTMLDivElement | null>;
    skillsRef: React.RefObject<HTMLDivElement | null>;
    portfolioRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
};

const NavSidebar: React.FC<NavSidebarProps> = ({
    aboutRef,
    introduceRef,
    resumeRef,
    skillsRef,
    portfolioRef,
    contactRef,
}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const router = useRouter()
    const NavIcons = [
        { href: "#introduce", icon: "/icon/home.svg", alt: "Home", ref: introduceRef },
        { href: "#about", icon: "/icon/about.svg", alt: "About", ref: aboutRef },
        { href: "#resume", icon: "/icon/resume.svg", alt: "Resume", ref: resumeRef },
        { href: "#skills", icon: "/icon/skills.svg", alt: "Skills", ref: skillsRef },
        { href: "#portfolio", icon: "/icon/portfolio.svg", alt: "Portfolio", ref: portfolioRef },
        { href: "#contact", icon: "/icon/contact.svg", alt: "Contact", ref: contactRef },
    ]

    const handleScrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            console.log("Scrolling to:", ref.current.offsetTop);
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: "smooth",
            });
        } else {
            console.log("Ref is null");
        }
    };

    return (
        <div className="">
            <div className="fixed xl:right-[80px] lg:right-[60px] xl:top-1/2 lg:top-1/2 xl:transform lg:transform xl:-translate-y-1/2 lg:-translate-y-1/2 z-50 bottom-[24px] left-1/2 xl:left-1/2 xl:translate-x-1/2 transform -translate-x-1/2 xl:bottom-auto lg:bottom-auto w-full flex xl:justify-end lg:justify-end justify-center bg-slate-500">
                <div className="w-fit flex xl:flex-col lg:flex-col flex-row gap-6 xl:px-[24px] xl:py-[36px] px-[36px] py-[24px] border border-white-1 rounded-full shadow-lg bg-white/10 backdrop-blur-lg">
                    {NavIcons.map((item) => (
                        <div
                            key={item.href}
                            className={`filter-white hover:filter-green transition-all duration-300 cursor-pointer ${router.pathname === item.href ? "filter-green" : ""
                                }`}
                            onClick={() => handleScrollToSection(item.ref)}
                        >
                            <Image
                                className="xl:w-[32px] xl:h-[32px] w-[24px] h-[24px]"
                                src={item.icon}
                                alt={item.alt}
                                width={32}
                                height={32}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavSidebar