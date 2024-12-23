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

    return (
        <div className="grid xl:gap-[32px] lg:gap-[24px] gap-[16px]">
            <div className="grid xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                <Heading src="portfolio" tittle="Portfolio" />
                <div className="xl:text-[60px] lg:text-[40px] text-[24px] font-light xl:leading-[72px] lg:leading-[54px]">My Recent<span className="text-primary"> Project</span></div>
                {/* Portfolio */}
                <div className="grid xl:gap-[80px] lg:gap-[60px] gap-[40px]">
                    <DetailProject
                        headline="Kemdikbud - Laman Pusat Kurikulum dan Pembelajaran"
                        color1="puskur1"
                        color2="puskur2"
                        tittle="Puskurjar"
                        desc="Develop UI/UX designs for the Curriculum and Learning Center website. Develop actions on the website or web application using programming languages ​​such as PHP, Bootstrap 5, MySQL, etc. Involved in bug fixing on functionality, performance, and design issues with PHP. Create programs and code that support the website database, server, and other applications that may be on it."
                        img="/project/puskurjar.png"
                        src={project1.map((item, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 p-[12px] rounded-full">
                                <Image src={item.src} alt="" width={36} height={36} />
                            </div>
                        ))}
                    />

                    <div className="grid grid-cols-12">
                        <div className="col-span-11 w-full h-[1px] bg-primary"></div>
                    </div>

                    <DetailProject
                        headline="Kemdikbud - Laman Pusat Kurikulum dan Pembelajaran"
                        color1="9678F5"
                        color2="44366E"
                        tittle="Kontributor"
                        desc="Develop UI/UX designs for the Curriculum and Learning Center website. Develop actions on the website or web application using programming languages ​​such as HTML, Javascript, Tailwind CSS, etc. Involved in bug fixing of functionality, performance, and design issues with JavaScript, HTML, and CSS. Create programs and code that support the website database, server, and other applications it may contain."
                        img="/project/kontrib.png"
                        src={project2.map((item, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-[14px] border border-white border-opacity-40 p-[12px] rounded-full">
                                <Image src={item.src} alt="" width={36} height={36} />
                            </div>
                        ))}
                    />
                </div>

            </div>
        </div>
    )
}


export default Portfolio