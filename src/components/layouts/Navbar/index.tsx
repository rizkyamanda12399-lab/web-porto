import Image from "next/image"

const Navbar = () => {
    return (
        <>
            <div className="container xl:flex lg:flex md:flex items-center justify-between xl:py-[40px] lg:py-[40px] py-[20px]">
                <div className="flex items-center gap-2">
                    <Image className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]" src="/icon/copyright.svg" alt="" width={24} height={24} />
                    <p className="xl:text-[24px] lg:text-[18px] text-[14px] font-normal">Code by Ehan</p>
                </div>
                <div className="hidden xl:flex lg:flex md:flex gap-4">
                    <div className="grid gap-1 px-3 py-1 group cursor-pointer">
                        <div className="xl:text-[24px] lg:text-[18px] text-[14px] font-normal">Home</div>
                        <span className="invisible group-hover:visible h-[2px] bg-primary"></span>
                    </div>
                    <div className="grid gap-1 px-3 py-1 group cursor-pointer">
                        <div className="xl:text-[24px] lg:text-[18px] text-[14px] font-normal">Work</div>
                        <span className="invisible group-hover:visible h-[2px] bg-primary"></span>
                    </div>
                    <div className="grid gap-1 px-3 py-1 group cursor-pointer">
                        <div className="xl:text-[24px] lg:text-[18px] text-[14px] font-normal">About</div>
                        <span className="invisible group-hover:visible h-[2px] bg-primary"></span>
                    </div>
                    <div className="grid gap-1 px-3 py-1 group cursor-pointer">
                        <div className="xl:text-[24px] lg:text-[18px] text-[14px] font-normal">Contact</div>
                        <span className="invisible group-hover:visible h-[2px] bg-primary"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar