import DownloadCV from "@/components/elements/DownloadCV";
import AnimatedContent from "@/components/elements/Reactbits/AnimatedContent";
import DecryptedText from "@/components/elements/Reactbits/DecryptedText";
import ShinyText from "@/components/elements/Reactbits/ShinyText";
import Heading from "@/components/fragments/Heading"

const About = () => {

    const textAbout = [
        {
            text: "Helping brands stand out in the",
            characters: "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
            speed: 30,
        },
        {
            text: "digital age. Together we will set",
            characters: "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
            speed: 50,
        },
        {
            text: "products that fit the target. ",
            characters: "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
            speed: 70,
        },
        {
            text: "Without further ado, let's discuss!",
            characters: "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
            speed: 100,
        },
    ]

    return (
        <div id="about" className="grid gap-[40px] xl:scroll-mt-[60px] lg:scroll-mt-[40px] scroll-mt-[20px]">
            <Heading src="about" tittle="About" />
            <AnimatedContent
                direction="vertical"
                reverse={false}
            >
                <div className="grid lg:grid-cols-12 gap-[40px]">
                    <div className="grid col-span-7 xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                        <div className="xl:text-[60px] lg:text-[45px] text-[28px] font-light xl:leading-[72px] lg:leading-[54px]">
                            {textAbout.map((item, index) => (
                                <div key={index}>
                                    <DecryptedText
                                        text={item.text}
                                        animateOn="view"
                                        speed={item.speed}
                                        maxIterations={20}
                                        characters={item.characters}
                                        className="revealed"
                                        parentClassName="all-letters"
                                        encryptedClassName="encrypted"
                                    />
                                </div>
                            ))}

                            {/* <p>Helping brands stand out in the</p>
                        <p>digital age. Together we will set</p>
                        <p>products that fit the target. </p>
                        <p>Without further ado, let&apos;s discuss!</p> */}
                        </div>
                    </div>
                    <div className="relative grid col-span-5 justify-center items-start gap-6 group">
                        <div className="border-l-2 flex flex-col border-gray pl-4 xl:text-[32px] lg:text-[24px] text-[16px] font-light xl:leading-[130%] lg:leading-[130&] text-gray">
                            <ShinyText text="My combination of passions for UI," disabled={false} speed={3} className='custom-class' />
                            <ShinyText text="code & interaction puts me in a unique" disabled={false} speed={3} className='custom-class' />
                            <ShinyText text="place in the front end developer field." disabled={false} speed={3} className='custom-class' />
                        </div>
                        <DownloadCV />
                    </div>
                </div>
            </AnimatedContent>
        </div>
    )
}

export default About;