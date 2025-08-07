import Experience from "@/components/elements/Experience"
import Heading from "@/components/fragments/Heading"
import dynamic from "next/dynamic";
import { DescDataIntegrasi, jobFront, jobUiux, toolsDataIntegrasi1, toolsDataIntegrasi2, toolsFront1, toolsFront2, toolsUiux1, toolsUiux2 } from "./constant";

const Resume = () => {
    const AnimatedContent = dynamic(() => import("@/blocks/Animations/AnimatedContent/AnimatedContent"), {
        ssr: false,
    });


    return (
        <div className="">
            <div id="resume" className="grid w-full xl:gap-[40px] lg:gap-[30px] gap-[16px] xl:scroll-mt-[60px] lg:scroll-mt-[40px] scroll-mt-[20px]">
                <Heading src="resume" tittle="Resume" />
                <h2 className="xl:text-[60px] lg:text-[45px] text-[36px] font-light xl:leading-[72px] lg:leading-[54px]">Experience</h2>
                <AnimatedContent>
                    <Experience tittle="UI/UX Designer" place="CV Rumah Software RDN (Feb 2022 - Jul 2023)"
                        li={jobUiux.map((li) => (
                            <li key={li.id}>{li.tittle}</li>
                        ))}
                        li2={toolsUiux1.map((li, index) => (
                            <li key={index}>{li.tools}</li>
                        ))}
                        li3={toolsUiux2.map((li, index) => (
                            <li key={index}>{li.tools}</li>
                        ))}
                    />
                </AnimatedContent>

                <AnimatedContent>
                    <div className="w-full h-[1px] bg-primary"></div>
                </AnimatedContent>

                <AnimatedContent>
                    <Experience tittle="Front End Developer" place="CV Rumah Software RDN (Aug 2023 - Jul 2024)"
                        li={jobFront.map((li) => (
                            <li key={li.id}>{li.tittle}</li>
                        ))}
                        li2={toolsFront1.map((li, index) => (
                            <li key={index}>{li.tools}</li>
                        ))}
                        li3={toolsFront2.map((li, index) => (
                            <li key={index}>{li.tools}</li>
                        ))}
                    />
                </AnimatedContent>

                <AnimatedContent>
                    <div className="w-full h-[1px] bg-primary"></div>
                </AnimatedContent>

                <AnimatedContent>
                    <Experience tittle="Front End Developer" place="PT. Data Integrasi Inovasi (Jan 2025 - Mar 2025)"
                        li={DescDataIntegrasi.map((li) => (
                            <li key={li.id}>{li.tittle}</li>
                        ))}
                        li2={toolsDataIntegrasi1.map((li, index) => (
                            <li key={index}>{li.tools}</li>
                        ))}
                        li3={toolsDataIntegrasi2.map((li, index) => (
                            <li key={index}>{li.tools}</li>
                        ))}
                    />
                </AnimatedContent>

            </div>
        </div>
    )
}

export default Resume