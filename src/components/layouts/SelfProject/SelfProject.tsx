import Experience from "@/components/elements/Experience"
import dynamic from "next/dynamic";

const SelftProject = () => {
    const AnimatedContent = dynamic(() => import("@/blocks/Animations/AnimatedContent/AnimatedContent"), {
        ssr: false,
    });
    const jobMix = [
        {
            id: 1,
            tittle: "Designing user interfaces and user experiences that are easy to use as information media for Curriculum and Learning Center websites",
        },
        {
            id: 2,
            tittle: "As a UI/UX Designer, developing Curriculum Pages and Learning Centers from the Ministry of Education, Culture, Research and  Technology",
        },
        {
            id: 3,
            tittle: "Developed the actions on a website or web applications using programming languages such as PHP, Bootstrap 5 etc",
        },
        {
            id: 4,
            tittle: "Involved with bug fixing on functionality, performance and designing issues with JavaScript, HTML and CSS",
        },
        {
            id: 5,
            tittle: "Created the programs and code that power the website’s databases, server, and any other applications it could contain",
        },
    ]
    const toolsMix1 = [
        {
            tools: "HTML",
        },
        {
            tools: "CSS",
        },
        {
            tools: "JavaScript",
        },
        {
            tools: "PHP",
        },
        {
            tools: "Laravel",
        },
        {
            tools: "Tailwind CSS",
        },
    ]
    const toolsMix2 = [
        {
            tools: "Bootstrap 5",
        },
        {
            tools: "MySql",
        },
        {
            tools: "Figma",
        },
        {
            tools: "Adobe Illustrator",
        },
        {
            tools: "Adobe Photoshop",
        },
        {
            tools: "Canva",
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
            tools: "HTML",
        },
        {
            tools: "CSS",
        },
        {
            tools: "JavaScript",
        },
    ]
    const toolsFull2 = [
        {
            tools: "Tailwind CSS",
        },
        {
            tools: "React JS",
        },
        {
            tools: "Next JS",
        }
    ]

    return (
        <div>
            <div className="grid w-full xl:gap-[40px] lg:gap-[30px] gap-[16px]">
                <h2 className="xl:text-[60px] lg:text-[45px] text-[36px] font-light xl:leading-[72px] lg:leading-[54px]">Self Project</h2>
                <AnimatedContent>
                    <Experience tittle="Front End Developer & UI/UX Designer" place="Freelance"
                        li={jobMix.map((li) => (
                            <li key={li.id}>{li.tittle}</li>
                        ))}
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
                    <Experience tittle="FullStack Web Developer" place="Harisenin.com"
                        li={jobFull.map((li) => (
                            <li key={li.id}>{li.tittle}</li>
                        ))}
                        li2={toolsFull1.map((li, index) => (
                            <li key={index}>{li.tools}</li>
                        ))}
                        li3={toolsFull2.map((li, index) => (
                            <li key={index}>{li.tools}</li>
                        ))}
                    />
                </AnimatedContent>

            </div>
        </div>
    )
}

export default SelftProject