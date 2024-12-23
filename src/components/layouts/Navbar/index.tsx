const Navbar = () => {
    return (
        <>
            <div className="lg:py-[40px] flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/icon/copyright.svg" alt="" className="w-[24px] h-[24px]" />
                    <p className="xl:text-[24px] lg:text-[18px] text-[14px] font-normal">Code by Ehan</p>
                </div>
                <div className="flex gap-4">
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