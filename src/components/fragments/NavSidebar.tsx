import Image from "next/image"

const NavSidebar = () => {
    return (
        <div className="">
            <div className="fixed xl:right-[80px] lg:right-[60px] xl:top-1/2 lg:top-1/2 xl:transform lg:transform xl:-translate-y-1/2 lg:-translate-y-1/2 z-50 bottom-[60px]">
                <div className="w-fit flex xl:flex-col gap-6 xl:px-[24px] xl:py-[36px] px-[36px] py-[24px] border border-white-1 rounded-full shadow-lg">
                    <div className="filter-white hover:filter-green transition-all duration-300 cursor-pointer">
                        <Image className="!w-[32px] !h-[32px]" src="/icon/home.svg" alt="Home" width={32} height={32} />
                    </div>
                    <div className="filter-white hover:filter-green transition-all duration-300 cursor-pointer">
                        <Image className="!w-[32px] !h-[32px]" src="/icon/about.svg" alt="About" width={32} height={32} />
                    </div>
                    <div className="filter-white hover:filter-green transition-all duration-300 cursor-pointer">
                        <Image className="!w-[32px] !h-[32px]" src="/icon/resume.svg" alt="Resume" width={32} height={32} />
                    </div>
                    <div className="filter-white hover:filter-green transition-all duration-300 cursor-pointer">
                        <Image className="!w-[32px] !h-[32px]" src="/icon/skills.svg" alt="Skills" width={32} height={32} />
                    </div>
                    <div className="filter-white hover:filter-green transition-all duration-300 cursor-pointer">
                        <Image className="!w-[32px] !h-[32px]" src="/icon/portfolio.svg" alt="Portfolio" width={32} height={32} />
                    </div>
                    <div className="filter-white hover:filter-green transition-all duration-300 cursor-pointer">
                        <Image className="!w-[32px] !h-[32px]" src="/icon/contact.svg" alt="Contact" width={32} height={32} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavSidebar