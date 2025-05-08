import DetailProject from "@/components/fragments/DetailProject"
import Heading from "@/components/fragments/Heading"
import Image from "next/image"
import { Bmk, BmkIcon, ChillMovie, ChillMovieIcon, Hokben, HokbenIcon, Kontributor, KontributorIcon, Nuha, NuhaIcon, Puskur, PuskurIcon, StudyConnections, StudyConnectionsIcon, Todolist, TodolistIcon } from "./constants"

const Portfolio = () => {

    return (
        <div id="portfolio" className="grid xl:gap-[32px] lg:gap-[24px] gap-[16px] xl:scroll-mt-[60px] lg:scroll-mt-[40px] scroll-mt-[20px]">
            <div className="grid xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                <Heading src="portfolio" tittle="Portfolio" />
                <div className="xl:text-[60px] lg:text-[40px] text-[36px] font-light xl:leading-[72px] lg:leading-[54px]">My Recent<span className="text-primary"> Project</span></div>
                {/* Portfolio */}
                <div className="grid xl:gap-[80px] lg:gap-[60px] gap-[40px]">
                    <DetailProject
                        headline="Kemdikbud - Laman Pusat Kurikulum dan Pembelajaran"
                        job="UI/UX Designer & Frontend Developer"
                        colorPrimary="bg-puskur-gradient"
                        tittle="Puskurjar"
                        desc="Develop UI/UX designs for the Curriculum and Learning Center website. Develop actions on the website or web application using programming languages ​​such as PHP, Bootstrap 5, MySQL, etc. Involved in bug fixing on functionality, performance, and design issues with PHP. Create programs and code that support the website database, server, and other applications that may be on it"
                        img={Puskur.map((item, index) => (
                            <a key={index} href={item.href} target="_blank">
                                <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.src} alt="" width={1163} height={677} />
                            </a>
                        ))}
                        src={PuskurIcon.map((item, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 xl:p-[12px] lg:p-[12px] p-[8px] rounded-full w-fit h-fit">
                                <Image className="xl:w-[36px] xl:h-[36px] lg:w-[36px] lg:h-[36px] w-[18px] h-[18px]" src={item.src} alt="" width={36} height={36} />
                            </div>
                        ))}
                    />

                    <div className="w-full h-[1px] bg-primary"></div>

                    <DetailProject
                        headline="Kemdikbud - Laman Pusat Kurikulum dan Pembelajaran"
                        job="UI/UX Designer & Frontend Developer"
                        colorPrimary="bg-kontrib-gradient"
                        tittle="Kontributor"
                        desc="Develop UI/UX designs for the Curriculum and Learning Center website. Develop actions on the website or web application using programming languages ​​such as HTML, Javascript, Tailwind CSS, etc. Involved in bug fixing of functionality, performance, and design issues with JavaScript, HTML, and CSS. Create programs and code that support the website database, server, and other applications it may contain"
                        img={Kontributor.map((item, index) => (
                            <a key={index} href={item.href} target="_blank">
                                <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.src} alt="" width={1163} height={677} />
                            </a>
                        ))}
                        src={KontributorIcon.map((item, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 xl:p-[12px] lg:p-[12px] p-[8px] rounded-full w-fit h-fit">
                                <Image className="xl:w-[36px] xl:h-[36px] lg:w-[36px] lg:h-[36px] w-[18px] h-[18px]" src={item.src} alt="" width={36} height={36} />
                            </div>
                        ))}
                    />

                    <div className="w-full h-[1px] bg-primary"></div>

                    <DetailProject
                        headline="Kemdikbud - Laman Balai Media Kebudayaan"
                        job="UI/UX Designer"
                        colorPrimary="bg-bmk-gradient"
                        tittle="BMK"
                        desc="Developing interface design and user experience for the website of Balai Media Budaya of the Ministry of Culture, Research and Technology. Collaborating with government teams and website development experts"
                        img={Bmk.map((item, index) => (
                            <a key={index} href={item.href} target="_blank">
                                <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.src} alt="" width={1163} height={677} />
                            </a>
                        ))}
                        src={BmkIcon.map((item, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 xl:p-[12px] lg:p-[12px] p-[8px] rounded-full w-fit h-fit">
                                <Image className="xl:w-[36px] xl:h-[36px] lg:w-[36px] lg:h-[36px] w-[18px] h-[18px]" src={item.src} alt="" width={36} height={36} />
                            </div>
                        ))}
                    />

                    <div className="w-full h-[1px] bg-primary"></div>

                    <DetailProject
                        headline="Harisenin.com - Chill Movie App"
                        job="Fullstack Developer"
                        colorPrimary="bg-chill-gradient"
                        tittle="Chill Movie"
                        desc="Developing a movie website using React JS, Tailwind CSS, Node JS, and Express JS. Implementing API integration to Design, Develop, and Maintain RESTful APIs to enable system interactions. Implementing atomic design principles, state management using react-redux. implementing login authentication using google. Creating a movie website for a final project as a full stack web developer"
                        img={ChillMovie.map((item, index) => (
                            <a key={index} href={item.href} target="_blank">
                                <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.src} alt="" width={1163} height={677} />
                            </a>
                        ))}
                        src={ChillMovieIcon.map((item, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 xl:p-[12px] lg:p-[12px] p-[8px] rounded-full w-fit h-fit">
                                <Image className="xl:w-[36px] xl:h-[36px] lg:w-[36px] lg:h-[36px] w-[18px] h-[18px]" src={item.src} alt="" width={36} height={36} />
                            </div>
                        ))}
                    />

                    <div className="w-full h-[1px] bg-primary"></div>

                    <DetailProject
                        headline="Harisenin.com - To Do List App"
                        job="Frontend Developer"
                        colorPrimary="bg-todolist-gradient"
                        tittle="To Do List"
                        desc="Develop UI/UX Design for to do list application using Figma. Develop to do list application using HTML, Tailwind CSS, and Javascript. Create state management using javascript which is saved into local storage of user's device"
                        img={Todolist.map((item, index) => (
                            <a key={index} href={item.href} target="_blank">
                                <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.src} alt="" width={1163} height={677} />
                            </a>
                        ))}
                        src={TodolistIcon.map((item, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 xl:p-[12px] lg:p-[12px] p-[8px] rounded-full w-fit h-fit">
                                <Image className="xl:w-[36px] xl:h-[36px] lg:w-[36px] lg:h-[36px] w-[18px] h-[18px]" src={item.src} alt="" width={36} height={36} />
                            </div>
                        ))}
                    />

                    <div className="w-full h-[1px] bg-primary"></div>

                    <DetailProject
                        headline="College Project - Study Connections"
                        job="UI/UX Designer"
                        colorPrimary="bg-study-gradient"
                        tittle="Study Conn"
                        desc="Truant behavior often occurs in students from junior high school to college. Based on research by Mogulescu and Segal in a journal made by Minarni in 2017, the research noted that 75-85% of delinquent teenagers are teenagers who have a habit of skipping school or missing school very often. So the purpose of this application was created to connect information from the agency with the student's family in order to get information in real time"
                        img={StudyConnections.map((item, index) => (
                            <a key={index} href={item.href} target="_blank">
                                <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.src} alt="" width={1163} height={677} />
                            </a>
                        ))}
                        src={StudyConnectionsIcon.map((item, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 xl:p-[12px] lg:p-[12px] p-[8px] rounded-full w-fit h-fit">
                                <Image className="xl:w-[36px] xl:h-[36px] lg:w-[36px] lg:h-[36px] w-[18px] h-[18px]" src={item.src} alt="" width={36} height={36} />
                            </div>
                        ))}
                    />

                    <div className="w-full h-[1px] bg-primary"></div>

                    <DetailProject
                        headline="Learning Project - Hokben"
                        job="UI/UX Designer"
                        colorPrimary="bg-hokben-gradient"
                        tittle="Hokben"
                        desc="Sometimes everyone has a different point of view. This time I was using the HokBen application. I felt that in the HokBen application there were several displays that needed to be adjusted for me, yes, this is back to my personal point of view. Therefore, I re-designed the HokBen application which I think needs to be adjusted or updated"
                        img={Hokben.map((item, index) => (
                            <a key={index} href={item.href} target="_blank">
                                <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.src} alt="" width={1163} height={677} />
                            </a>
                        ))}
                        src={HokbenIcon.map((item, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 xl:p-[12px] lg:p-[12px] p-[8px] rounded-full w-fit h-fit">
                                <Image className="xl:w-[36px] xl:h-[36px] lg:w-[36px] lg:h-[36px] w-[18px] h-[18px]" src={item.src} alt="" width={36} height={36} />
                            </div>
                        ))}
                    />

                    <DetailProject
                        headline="Nuha Care Website Company"
                        job="UI/UX Designer"
                        colorPrimary="bg-nuha-gradient"
                        tittle="Nuha Care"
                        desc="When I worked as a Frontend Developer at PT Data Integrasi Inovasi. My team was pursuing a new Sprint, namely to completely update the company website. In this sprint, I was assigned to handle the UI/UX Designer for the website by my Product Manager."
                        img={Nuha.map((item, index) => (
                            <a key={index} href={item.href} target="_blank">
                                <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.src} alt="" width={1163} height={677} />
                            </a>
                        ))}
                        src={NuhaIcon.map((item, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 xl:p-[12px] lg:p-[12px] p-[8px] rounded-full w-fit h-fit">
                                <Image className="xl:w-[36px] xl:h-[36px] lg:w-[36px] lg:h-[36px] w-[18px] h-[18px]" src={item.src} alt="" width={36} height={36} />
                            </div>
                        ))}
                    />

                </div>

            </div>
        </div>
    )
}


export default Portfolio