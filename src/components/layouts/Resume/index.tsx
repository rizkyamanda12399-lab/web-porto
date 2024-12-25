import Experience from "@/components/elements/Experience"
import Heading from "@/components/fragments/Heading"

const Resume = () => {
    const jobUiux = [
        {
            id: 1,
            tittle: "Collaborating with the design team to create 15 wireframe designs for web and mobile applications",
        },
        {
            id: 2,
            tittle: "Successfully creating 8 prototypes and providing clear instructions on “how to use each part of the website” including any design  specifications and guidelines",
        },
        {
            id: 3,
            tittle: "Conducting regular quality assurance checks to ensure that the UI kit is up-to-date and functioning properly",
        },
        {
            id: 4,
            tittle: "Research 6+ design trends and techniques regularly every month",
        },
    ]
    const toolsUiux1 = [
        {
            tools: "Figma",
        },
        {
            tools: "Adobe Illustrator",
        },
    ]
    const toolsUiux2 = [
        {
            tools: "Adobe Photoshop",
        },
        {
            tools: "Canva",
        },
    ]

    const jobFront = [
        {
            id: 1,
            tittle: "Developing websites that comply with the accessibility standards, policies and procedures",
        },
        {
            id: 2,
            tittle: "Developing and managed web accessibility testing plans and processes, including setting up and configuring tools",
        },
        {
            id: 3,
            tittle: "Developing the websites using JavaScript, HTML, Tailwind CSS, React JS, Bootstrap 5 and PHP",
        },
    ]
    const toolsFront1 = [
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
    ]
    const toolsFront2 = [
        {
            tools: "Laravel",
        },
        {
            tools: "Bootstrap 5",
        },
        {
            tools: "Tailwind CSS",
        },
        {
            tools: "MySQL",
        },
    ]

    return (
        <div className="">
            <div className="grid w-full xl:gap-[40px] lg:gap-[30px] gap-[16px]">
                <Heading src="resume" tittle="Resume" />
                <h2 className="xl:text-[60px] lg:text-[45px] text-[36px] font-light xl:leading-[72px] lg:leading-[54px]">Experience</h2>

                <Experience tittle="UI/UX Designer" place="CV Rumah Software RDN (Feb 2023 - Jul 2023)"
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

                <div className="grid grid-cols-12">
                    <div className="xl:col-span-11 lg:col-span-11 col-span-12 w-full h-[1px] bg-primary"></div>
                </div>

                <Experience tittle="Front End Developer" place="CV Rumah Software RDN (Jul 2023 - Feb 2024)"
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

            </div>
        </div>
    )
}

export default Resume