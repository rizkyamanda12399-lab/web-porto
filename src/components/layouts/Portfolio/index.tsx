import DetailProject from "@/components/fragments/DetailProject"
import Heading from "@/components/fragments/Heading"
import Image from "next/image"

const Portfolio = () => {
    const project1 = [
        {
            src: "/icon/php.svg",
        },
        {
            src: "/icon/laravel.svg",
        },
        {
            src: "/icon/bootstrap.svg",
        },
        {
            src: "/icon/mysql.svg",
        },
        {
            src: "/icon/figma.svg",
        },
        {
            src: "/icon/ai.svg",
        },
        {
            src: "/icon/ps.svg",
        },
    ]

    const project2 = [
        {
            src: "/icon/html.svg",
        },
        {
            src: "/icon/css.svg",
        },
        {
            src: "/icon/js.svg",
        },
        {
            src: "/icon/tailwind.svg",
        },
        {
            src: "/icon/figma.svg",
        },
        {
            src: "/icon/ai.svg",
        },
        {
            src: "/icon/ps.svg",
        },
    ]

    const project3 = [
        {
            src: "/icon/figma.svg",
        },
        {
            src: "/icon/ai.svg",
        },
        {
            src: "/icon/ps.svg",
        },
    ]

    const project4 = [
        {
            src: "/icon/react.svg",
        },
        {
            src: "/icon/js.svg",
        },
        {
            src: "/icon/tailwind.svg",
        },
        {
            src: "/icon/node.svg",
        },
        {
            src: "/icon/express.svg",
        },
    ]

    const project5 = [
        {
            src: "/icon/html.svg",
        },
        {
            src: "/icon/tailwind.svg",
        },
        {
            src: "/icon/js.svg",
        },
        {
            src: "/icon/figma.svg",
        },
    ]

    const project6 = [
        {
            src: "/icon/figma.svg",
        },
        {
            src: "/icon/ai.svg",
        },
        {
            src: "/icon/ps.svg",
        },
    ]

    const project7 = [
        {
            src: "/icon/figma.svg",
        },
        {
            src: "/icon/ai.svg",
        },
        {
            src: "/icon/ps.svg",
        },
    ]

    return (
        <div className="grid xl:gap-[32px] lg:gap-[24px] gap-[16px]">
            <div className="grid xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                <Heading src="portfolio" tittle="Portfolio" />
                <div className="xl:text-[60px] lg:text-[40px] text-[36px] font-light xl:leading-[72px] lg:leading-[54px]">My Recent<span className="text-primary"> Project</span></div>
                {/* Portfolio */}
                <div className="grid xl:gap-[80px] lg:gap-[60px] gap-[40px]">
                    <a href="https://puskur.kemdikbud.go.id/" target="_blank">
                        <DetailProject
                            headline="Kemdikbud - Laman Pusat Kurikulum dan Pembelajaran"
                            colorPrimary="bg-puskur-gradient"
                            tittle="Puskurjar"
                            desc="Develop UI/UX designs for the Curriculum and Learning Center website. Develop actions on the website or web application using programming languages ​​such as PHP, Bootstrap 5, MySQL, etc. Involved in bug fixing on functionality, performance, and design issues with PHP. Create programs and code that support the website database, server, and other applications that may be on it"
                            img="/project/puskurjar.png"
                            src={project1.map((item, index) => (
                                <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 p-[12px] rounded-full">
                                    <Image src={item.src} alt="" width={36} height={36} />
                                </div>
                            ))}
                        />
                    </a>

                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-11 lg:col-span-11 col-span-12 w-full h-[1px] bg-primary"></div>
                    </div>

                    <a href="https://laman-puskur-kontributor.vercel.app/" target="_blank">
                        <DetailProject
                            headline="Kemdikbud - Laman Pusat Kurikulum dan Pembelajaran"
                            colorPrimary="bg-kontrib-gradient"
                            tittle="Kontributor"
                            desc="Develop UI/UX designs for the Curriculum and Learning Center website. Develop actions on the website or web application using programming languages ​​such as HTML, Javascript, Tailwind CSS, etc. Involved in bug fixing of functionality, performance, and design issues with JavaScript, HTML, and CSS. Create programs and code that support the website database, server, and other applications it may contain"
                            img="/project/kontrib.png"
                            src={project2.map((item, index) => (
                                <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 p-[12px] rounded-full">
                                    <Image src={item.src} alt="" width={36} height={36} />
                                </div>
                            ))}
                        />
                    </a>

                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-11 lg:col-span-11 col-span-12 w-full h-[1px] bg-primary"></div>
                    </div>

                    <a href="https://balaimediakebudayaan.kemdikbud.go.id/" target="_blank">
                        <DetailProject
                            headline="Kemdikbud - Laman Balai Media Kebudayaan"
                            colorPrimary="bg-bmk-gradient"
                            tittle="BMK"
                            desc="Developing interface design and user experience for the website of Balai Media Budaya of the Ministry of Culture, Research and Technology. Collaborating with government teams and website development experts"
                            img="/project/bmk.png"
                            src={project3.map((item, index) => (
                                <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 p-[12px] rounded-full">
                                    <Image src={item.src} alt="" width={36} height={36} />
                                </div>
                            ))}
                        />
                    </a>

                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-11 lg:col-span-11 col-span-12 w-full h-[1px] bg-primary"></div>
                    </div>

                    <a href="https://react-js-ehan08.vercel.app/" target="_blank">
                        <DetailProject
                            headline="Harisenin.com - Chill Movie App"
                            colorPrimary="bg-chill-gradient"
                            tittle="Chill Movie"
                            desc="Developing a movie website using React JS, Tailwind CSS, Node JS, and Express JS. Implementing API integration to Design, Develop, and Maintain RESTful APIs to enable system interactions. Implementing atomic design principles, state management using react-redux. implementing login authentication using google. Creating a movie website for a final project as a full stack web developer"
                            img="/project/chillMovie.png"
                            src={project4.map((item, index) => (
                                <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 p-[12px] rounded-full">
                                    <Image src={item.src} alt="" width={36} height={36} />
                                </div>
                            ))}
                        />
                    </a>

                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-11 lg:col-span-11 col-span-12 w-full h-[1px] bg-primary"></div>
                    </div>

                    <a href="https://to-do-list-ehan.vercel.app/" target="_blank">
                        <DetailProject
                            headline="Harisenin.com - To Do List App"
                            colorPrimary="bg-todolist-gradient"
                            tittle="To Do List"
                            desc="Develop UI/UX Design for to do list application using Figma. Develop to do list application using HTML, Tailwind CSS, and Javascript. Create state management using javascript which is saved into local storage of user's device"
                            img="/project/to-do-list.png"
                            src={project5.map((item, index) => (
                                <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 p-[12px] rounded-full">
                                    <Image src={item.src} alt="" width={36} height={36} />
                                </div>
                            ))}
                        />
                    </a>

                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-11 lg:col-span-11 col-span-12 w-full h-[1px] bg-primary"></div>
                    </div>

                    <a href="https://www.figma.com/proto/KVOQABv46rjFmhzRlpgcIj/PADI?page-id=274%3A876&node-id=274-877&viewport=618%2C754%2C0.15&t=yzuu2fAg9WhqZsTA-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=274%3A877" target="_blank">
                        <DetailProject
                            headline="College Project - Study Connections"
                            colorPrimary="bg-study-gradient"
                            tittle="Study Conn"
                            desc="Truant behavior often occurs in students from junior high school to college. Based on research by Mogulescu and Segal in a journal made by Minarni in 2017, the research noted that 75-85% of delinquent teenagers are teenagers who have a habit of skipping school or missing school very often. So the purpose of this application was created to connect information from the agency with the student's family in order to get information in real time"
                            img="/project/study.png"
                            src={project6.map((item, index) => (
                                <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 p-[12px] rounded-full">
                                    <Image src={item.src} alt="" width={36} height={36} />
                                </div>
                            ))}
                        />
                    </a>

                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-11 lg:col-span-11 col-span-12 w-full h-[1px] bg-primary"></div>
                    </div>

                    <a href="https://www.figma.com/proto/iCMLsSWqEYshtBvN5fRJfM/PORTFOLIO?page-id=0%3A1&node-id=398-18447&viewport=-701%2C-138%2C0.14&t=Aaq302Ejf2YFRNto-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=398%3A18447" target="_blank">
                        <DetailProject
                            headline="Learning Project - Hokben"
                            colorPrimary="bg-hokben-gradient"
                            tittle="Hokben"
                            desc="Sometimes everyone has a different point of view. This time I was using the HokBen application. I felt that in the HokBen application there were several displays that needed to be adjusted for me, yes, this is back to my personal point of view. Therefore, I re-designed the HokBen application which I think needs to be adjusted or updated"
                            img="/project/hokben.png"
                            src={project7.map((item, index) => (
                                <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 p-[12px] rounded-full">
                                    <Image src={item.src} alt="" width={36} height={36} />
                                </div>
                            ))}
                        />
                    </a>

                </div>

            </div>
        </div>
    )
}


export default Portfolio