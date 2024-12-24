import Image from "next/image"

const NavSidebar = () => {
    return (
        <div className="">
            <div className="fixed xl:right-[80px] xl:top-1/2 xl:transform xl:-translate-y-1/2 z-50 sm:bottom-[60px]">
                <div className="w-fit flex xl:flex-col gap-6 p-4 border border-white-1 rounded-full shadow-lg">
                    <div className="filter-white hover:filter-green transition-all duration-300 cursor-pointer">
                        <Image src="/icon/home.svg" alt="Home" width={24} height={24} />
                    </div>
                    <div className="filter-white hover:filter-green transition-all duration-300 cursor-pointer">
                        <Image src="/icon/about.svg" alt="About" width={24} height={24} />
                    </div>
                    <div className="filter-white hover:filter-green transition-all duration-300 cursor-pointer">
                        <Image src="/icon/resume.svg" alt="Resume" width={24} height={24} />
                    </div>
                    <div className="filter-white hover:filter-green transition-all duration-300 cursor-pointer">
                        <Image src="/icon/skills.svg" alt="Skills" width={24} height={24} />
                    </div>
                    <div className="filter-white hover:filter-green transition-all duration-300 cursor-pointer">
                        <Image src="/icon/portfolio.svg" alt="Portfolio" width={24} height={24} />
                    </div>
                    <div className="filter-white hover:filter-green transition-all duration-300 cursor-pointer">
                        <Image src="/icon/contact.svg" alt="Contact" width={24} height={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavSidebar