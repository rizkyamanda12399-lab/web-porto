import Heading from "@/components/Fragments/Heading"
import Image from "next/image"

const Introduce = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-12 gap-[32px]">
                <div className="grid col-span-7 xl:gap-[40px] lg:gap-[30px]">
                    <Heading src="home" tittle="Introduce" />
                    <div className="xl:text-[80px] lg:text-[60px] text-[32px] font-light xl:leading-[96px] lg:leading-[72px]">
                        <p>Hi, What&apos;s going on?</p>
                        <p>Regrads from Ehan, Front</p>
                        <p>End Developer and Designer</p>
                    </div>
                </div>

                <div className="relative col-span-4 flex justify-center items-center">
                    <div className="relative flex justify-center items-center cursor-pointer">
                        <Image className="animate-slowspin" src="icon/project-scroll.svg" alt="" width={267} height={267} />
                        <div className="absolute">
                            <Image src="icon/down-arrow.svg" alt="" width={84} height={84} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Introduce