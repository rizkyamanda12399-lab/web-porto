/* eslint-disable @typescript-eslint/no-unused-vars */
import Experience from "@/components/elements/Experience"
import Experience2 from "@/components/elements/Experience2";
import dynamic from "next/dynamic";

const SelftProject = () => {
    const AnimatedContent = dynamic(() => import("@/blocks/Animations/AnimatedContent/AnimatedContent"), {
        ssr: false,
    });
    const jobMix = [
        {
            id: 1,
            tittle: "I've been working on a video editing and motion graphics project for a boutique. I’m edited it using Adobe Premiere and After Effects with a 9:16 ratio for an Instagram reels and tiktok post",
        },
        {
            id: 2,
            tittle: "I've been working on a video editing and motion graphics project for a boutique. I’m edited it using Adobe Premiere and After Effects with a 9:16 ratio for an Instagram reels and tiktok post",
        },
    ]
    const toolsMix1 = [
        {
            tools: "Adobe Premiere Pro",
        },
        {
            tools: "Adobe After Effects",
        },

    ]
    const toolsMix2 = [
        {
            tools: "Adobe Photoshop",
        },
        {
            tools: "Capcut",
        },

    ]

    const jobFull = [
        {
            id: 1,
            tittle: "Developing a film website using HTML, CSS, Javascript, Tailwind CSS, React JS, Node JS, Express JS",
        },
        {
            id: 2,
            tittle: "Creating a film website for final project as a full stack web developer",
        },
    ]
    const toolsFull1 = [
        {
            tools: "Adobe Photoshop",
        },
        {
            tools: "Adobe Illustration",
        },
    ]

    return (
        <div>
            <div className="grid w-full xl:gap-[40px] lg:gap-[30px] gap-[16px]">
                <h2 className="xl:text-[60px] lg:text-[45px] text-[36px] font-semibold xl:leading-[72px] lg:leading-[54px]">Self Project</h2>
                <AnimatedContent>
                    <Experience2 tittle="Content Development" place="Freelance"
                        li="I've been working on a video editing and motion graphics project for a boutique. I’m edited it using Adobe Premiere and After Effects with a 9:16 ratio for an Instagram reels and tiktok post. I'm very excited about this project because it allows me to explore the industrial fashion editing style, which falls into the formal category"
                        li2={toolsMix1.map((li, index) => (
                            <li key={index}>{li.tools}</li>
                        ))}
                        li3={toolsMix2.map((li, index) => (
                            <li key={index}>{li.tools}</li>
                        ))}
                    />
                </AnimatedContent>

                <AnimatedContent>
                    <div className="w-full h-[1px] bg-primary"></div>
                </AnimatedContent>

                <AnimatedContent>
                    <Experience2 tittle="Illustration" place="Freelance"
                        li="I worked on an illustration project for a band and music event that started with understanding the visual character and the message to be conveyed according to the merchandise needs. The final illustration is produced in print format on t-shirts and other merchandise."
                        li2={toolsFull1.map((li, index) => (
                            <li key={index}>{li.tools}</li>
                        ))}
                    />
                </AnimatedContent>

            </div>
        </div>
    )
}

export default SelftProject