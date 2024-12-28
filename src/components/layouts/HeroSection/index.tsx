
import Image from "next/image"
import Navbar from "../Navbar"
import Located from "@/components/fragments/Located"

const HeroSection = () => {
    return (
        <div className="relative">
            <div className="absolute w-full xl:h-[330px] lg:h-[234px] h-[120px] left-0 bottom-0 z-50 bg-gradient-to-t from-[#000C04] to-transparent overflow-hidden uppercase font-normal">
                <div className="absolute left-0 bottom-0 whitespace-nowrap w-full animate-scroll">
                    <h1 className="text-white xl:text-[250px] lg:text-[250px] text-[80px] leading-[125%]">
                        Front End Developer &nbsp; Front End Developer &nbsp; Front End Developer &nbsp;
                    </h1>
                    <h1 className="text-white xl:text-[250px] lg:text-[250px] text-[80px] leading-[125%]">
                        Front End Developer &nbsp; Front End Developer &nbsp; Front End Developer &nbsp;
                    </h1>
                    <h1 className="text-white xl:text-[250px] lg:text-[250px] text-[80px] leading-[125%]">
                        Front End Developer &nbsp; Front End Developer &nbsp; Front End Developer &nbsp;
                    </h1>
                    <h1 className="text-white xl:text-[250px] lg:text-[250px] text-[80px] leading-[125%]">
                        Front End Developer &nbsp; Front End Developer &nbsp; Front End Developer &nbsp;
                    </h1>
                </div>
            </div>
            <div className="relative xl:pt-[98px] lg:pt-[70px] pt-[36px]">
                <div className="absolute w-full left-0 top-0">
                    <Navbar />
                </div>
                <Located />

                <div className="">
                    <div className="absolute hidden xl:grid lg:grid gap-[100px] top-[150px] xl:left-[1180px] lg:left-[905px] left-[600px]">
                        <Image src="icon/diagonal-arrow.svg" alt="" width={32} height={32} />
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
                    {/* <img src="/ehan.png" alt="" className="xl:h-[830px] lg:h-[622px]" /> */}
                    <Image src={"/ehan.png"} alt="" width={595} height={830} />
                </div>
            </div>

        </div>
    )
}

export default HeroSection