import Image from "next/image"

const NavSidebar = () => {
    return (
        <div className="">
            <div className="">
                <div className="sticky float-end right-0 bg-slate-800">
                    <div className="w-fit xl:grid flex xl:gap-[24px] xl:px-[24px] xl:py-[36px] border border-white-1 rounded-full">
                        <div className="">
                            <Image src="/icon/home.svg" alt="" width={24} height={24} />
                        </div>
                        <div className="">
                            <Image src="/icon/about.svg" alt="" width={24} height={24} />
                        </div>
                        <div className="">
                            <Image src="/icon/resume.svg" alt="" width={24} height={24} />
                        </div>
                        <div className="">
                            <Image src="/icon/skills.svg" alt="" width={24} height={24} />
                        </div>
                        <div className="">
                            <Image src="/icon/portfolio.svg" alt="" width={24} height={24} />
                        </div>
                        <div className="">
                            <Image src="/icon/contact.svg" alt="" width={24} height={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavSidebar