import Heading from "@/components/Fragments/Heading";
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
        <div className="grid grid-cols-12 xl:gap-[32px] lg:gap-[24px] gap-[16px]">
            <div className="grid col-span-11 xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                <Heading src="skills" tittle="Skills" />
                <h1 className="xl:text-[60px] lg:text-[40px] text-[24px] font-light xl:leading-[72px] lg:leading-[54px]">My <span className="text-primary">Expertise</span></h1>
                {/* icon */}
                <div className="flex justify-between">
                    {skills1.map((item, index) => (
                        <div key={index} className="grid justify-center items-center w-[180px] h-[180px] border-[1px] border-gray rounded-[32px] cursor-pointer hover:border-primary hover:border-[2px] group">
                            <div className="grid gap-2 group">
                                <Image src={item.img} alt="" width={80} height={80} className="filter-gray group-hover:filter-green transition-all duration-300" />
                                <p className="text-center text-gray group-hover:text-primary">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between">
                    {skills2.map((item, index) => (
                        <div key={index} className="grid justify-center items-center w-[180px] h-[180px] border-[1px] border-gray rounded-[32px] cursor-pointer hover:border-primary hover:border-[2px] group">
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
    );
}

export default Skills