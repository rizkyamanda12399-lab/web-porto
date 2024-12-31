
import Image from "next/image"
import Navbar from "../Navbar"
import Located from "@/components/fragments/Located"
import BackgroundField from "@/components/fragments/BackgroundField"
import RunningText from "@/components/elements/RunningText"

const HeroSection = () => {
    return (
        <div className="relative">
            <RunningText />
            <div className="relative xl:pt-[98px] lg:pt-[70px] pt-[36px]">
                <div className="absolute w-full left-0 top-0">
                    <Navbar />
                </div>
                <Located />

                <div className="">
                    <BackgroundField />
                </div>

                <div className="flex justify-center items-center">
                    {/* <img src="/ehan.png" alt="" className="xl:h-[830px] lg:h-[622px]" /> */}
                    <Image className="xl:h-[830px] xl:w-[595px] lg:h-[622px] lg:w-[446px]" src={"/ehan.png"} alt="" width={1200} height={168} />
                </div>
            </div>

        </div>
    )
}

export default HeroSection