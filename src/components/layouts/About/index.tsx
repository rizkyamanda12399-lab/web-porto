import Heading from "@/components/fragments/Heading"
import React from "react";

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div>
            <div ref={ref} id="about" className="grid lg:grid-cols-12 gap-[40px]">
                <div className="grid col-span-6 xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                    <Heading src="about" tittle="About" />
                    <div className="xl:text-[60px] lg:text-[45px] text-[28px] font-light xl:leading-[72px] lg:leading-[54px]">
                        <p>Helping brands stand out in the</p>
                        <p>digital age. Together we will set</p>
                        <p>products that fit the target. </p>
                        <p>Without further ado, let&apos;s discuss!</p>
                    </div>
                </div>
                <div className="relative flex col-span-6 justify-center items-end xl:gap-[16px] group">
                    <div className="border-l-2 border-gray pl-4 xl:text-[32px] lg:text-[24px] text-[16px] font-light xl:leading-[130%] lg:leading-[130&] text-gray">
                        <p>My combination of passions for UI,
                            <span className="block">code & interaction puts me in a unique</span>
                            <span className="block">place in the front end developer field.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
})

About.displayName = "About";
export default About;