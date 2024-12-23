
import Navbar from "../Navbar"

const HeroSection = () => {
    return (
        <div className="relative">
            <div className="absolute w-full xl:h-[330px] lg:h-[234px] left-0 bottom-0 z-50 bg-gradient-to-t from-[#000C04] to-transparent">
            </div>
            <div className="relative xl:pt-[98px] lg:pt-[70px]">
                <div className="absolute w-full left-0 top-0">
                    <Navbar />
                </div>

                <div className="">
                    <div className="absolute grid gap-[100px] top-[150px] xl:left-[1180px] lg:left-[905px] left-[600px]">
                        <img src="icon/diagonal-arrow.svg" alt="" className="xl:w-[32px] xl:h-[32px] lg:w-[24px] lg:h-[24px]" />
                        <div className="xl:text-[52px] lg:text-[39px] text-[24px] font-normal leading-[125%]">
                            <p>Freelance</p>
                            <p>UI/UX Designer,</p>
                            <div className="flex gap-5 group cursor-pointer">Front End
                                <div className="origin-top-left rotate-[10deg] group-hover:rotate-0 ease-in-out duration-300 ">
                                    <span className="text-primary">Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img src="/ehan.png" alt="" className="xl:h-[830px] lg:h-[622px]" />
                </div>
            </div>

        </div>
    )
}

export default HeroSection