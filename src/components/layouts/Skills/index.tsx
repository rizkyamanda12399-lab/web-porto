import Heading from "@/components/fragments/Heading";
import Image from "next/image";

const Skills = () => {
    const skills1 = [
        {
            img: "icon/html.svg",
            name: "HTML"
        },
        {
            img: "icon/css.svg",
            name: "CSS"
        },
        {
            img: "icon/js.svg",
            name: "Javascript"
        },
        {
            img: "icon/php.svg",
            name: "PHP"
        },
        {
            img: "icon/node.svg",
            name: "Node JS"
        },
        {
            img: "icon/express.svg",
            name: "Express"
        },
        {
            img: "icon/react.svg",
            name: "React"
        },
        {
            img: "icon/react-native.svg",
            name: "React Native"
        },
    ]

    const skills2 = [
        {
            img: "icon/next.svg",
            name: "Next JS"
        },
        {
            img: "icon/bootstrap.svg",
            name: "Bootstrap 5"
        },
        {
            img: "icon/tailwind.svg",
            name: "Tailwind CSS"
        },
        {
            img: "icon/laravel.svg",
            name: "Laravel"
        },
        {
            img: "icon/mysql.svg",
            name: "MySQL"
        },
        {
            img: "icon/figma.svg",
            name: "Figma"
        },
        {
            img: "icon/ai.svg",
            name: "Illustrator"
        },
        {
            img: "icon/ps.svg",
            name: "Photoshop"
        },
    ]

    return (
        <div className="grid xl:gap-[40px] lg:gap-[30px] gap-[20px]">
            <Heading src="skills" tittle="Skills" />
            <h1 className="xl:text-[60px] lg:text-[40px] text-[36px] font-light xl:leading-[72px] lg:leading-[54px]">My <span className="text-primary">Expertise</span></h1>
            <div className="grid grid-cols-12 xl:gap-[32px] lg:gap-[24px] gap-[16px]">
                <div className="grid xl:col-span-11 lg:col-span-11 col-span-12 xl:justify-start lg:justify-start justify-center xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                    {/* icon */}
                    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
                        {skills1.map((item, index) => (
                            <div key={index} className="grid justify-center items-center xl:w-[180px] xl:h-[180px] lg:w-[180px] lg:h-[180px] w-[140px] h-[140px] border-[1px] border-gray rounded-[32px] cursor-pointer hover:border-primary hover:border-[2px] group">
                                <div className="grid gap-2 group">
                                    <Image src={item.img} alt="" width={80} height={80} className="filter-gray group-hover:filter-green transition-all duration-300" />
                                    <p className="text-center text-gray group-hover:text-primary">{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
                        {skills2.map((item, index) => (
                            <div key={index} className="grid justify-center items-center xl:w-[180px] xl:h-[180px] lg:w-[180px] lg:h-[180px] w-[140px] h-[140px] border-[1px] border-gray rounded-[32px] cursor-pointer hover:border-primary hover:border-[2px] group">
                                <div className="grid gap-2 group">
                                    <Image src={item.img} alt="" width={80} height={80} className="filter-gray group-hover:filter-green transition-all duration-300" />
                                    <p className="text-center text-gray group-hover:text-primary">{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="col-span-1"></div>
            </div>
        </div>
    );
}

export default Skills