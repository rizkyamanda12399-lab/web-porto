
import Image from "next/image"
import Navbar from "../Navbar"
import BackgroundField from "@/components/fragments/BackgroundField"
// import RunningText from "@/components/elements/RunningText"
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity"

const HeroSection = () => {
    return (
        <div className="relative">
            {/* <RunningText /> */}
            <div className="absolute w-full xl:h-[330px] lg:h-[270px] h-[80px] left-0 bottom-0 z-50 bg-gradient-to-t from-[#000C04] to-transparent overflow-hidden uppercase font-normal">
                <ScrollVelocity
                    // texts={['', ' Rizky Amanda • ']}
                    texts={[' Rizky Amanda • ', '']}
                    velocity={150}
                    className="custom-scroll-text"
                />
            </div>
            <div className="relative xl:pt-[98px] lg:pt-[70px] pt-[36px]">
                <div className="absolute w-full left-0 top-0">
                    <Navbar />
                </div>
                {/* <Located /> */}

                <div className="">
                    <BackgroundField />
                </div>

                <div className="flex xl:justify-start lg:justify-start justify-center pt-[50px] xl:px-[180px] lg:px-[230px] md:px-[80px] px-[20px] items-center object-contain">
                    {/* <img src="/ehan.png" alt="" className="xl:h-[830px] lg:h-[622px]" /> */}
                    <Image className="scale-[125%] xl:h-[830px] xl:w-[595px] lg:h-[622px] lg:w-[446px] w-[200px] h-[544] object-contain" src={"/foto123.png"} alt="" width={800} height={400} />
                </div>
            </div>

        </div>
    )
}

export default HeroSection