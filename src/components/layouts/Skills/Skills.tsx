import Heading from "@/components/fragments/Heading";
import Image from "next/image";
import { AllSkills } from "./constant";
import dynamic from "next/dynamic";
import ProfileCard from "@/blocks/Components/ProfileCard/ProfileCard";

const Skills = () => {
    const AnimatedContent = dynamic(() => import("@/blocks/Animations/AnimatedContent/AnimatedContent"), {
        ssr: false,
    });
    return (
        <div id="skills" className="grid xl:gap-[40px] lg:gap-[30px] gap-[20px] xl:scroll-mt-[60px] lg:scroll-mt-[40px] scroll-mt-[20px]">
            <Heading src="skills" tittle="Skills" />
            <h1 className="xl:text-[60px] lg:text-[40px] text-[36px] font-light xl:leading-[72px] lg:leading-[54px]">My <span className="text-primary">Expertise</span></h1>

            <div className="grid justify-items-center w-full xl:flex lg:flex xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                {/* Profile Card */}
                <div className="w-fit">
                    <ProfileCard
                        name="M Rayhan Fuadi, S.Kom"
                        title="UI/UX Designer & Frontend Developer"
                        handle="rayhanfuadi"
                        status="Available"
                        contactText="Contact Me"
                        avatarUrl="/ehan.png"
                        showUserInfo={true}
                        enableTilt={true}
                        onContactClick={() => window.open("https://wa.link/cuy3df", "_blank")}
                    />
                </div>

                {/* Skill */}
                <div className="grid xl:gap-[32px] lg:gap-[24px] gap-[16px] items-center content-center align-items-center h-full">
                    <div className="grid xl:justify-start lg:justify-start justify-center xl:gap-[40px] lg:gap-[30px] gap-[20px] ">
                        {/* icon */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {AllSkills.map((item, index) => (
                                <div className="m-0 h-fit" key={index}>
                                    <AnimatedContent>
                                        <div className="grid justify-center items-center xl:w-[150px] xl:h-[150px] lg:w-[110px] lg:h-[110px] w-[70px] h-[70px] border-[1px] border-gray xl:rounded-[24px] lg:rounded-[24px] rounded-[16px] cursor-pointer hover:border-primary hover:border-[2px] group">
                                            <div className="grid gap-2 group">
                                                <div className="flex justify-center">
                                                    <Image src={item.img} alt="" width={80} height={80} className="xl:w-[60px] xl:h-[60px] lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] filter-gray group-hover:filter-green transition-all duration-300" />
                                                </div>
                                                <p className="text-center text-gray group-hover:text-primary xl:text-[16px] lg:text-[16px] text-[10px]">{item.name}</p>
                                            </div>
                                        </div>
                                    </AnimatedContent>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="col-span-1"></div>
                </div>
            </div>

        </div>
    );
}

export default Skills