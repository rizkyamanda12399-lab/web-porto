import Heading from "@/components/fragments/Heading";
import Image from "next/image";
import { skills1, skills2 } from "./constant";
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

            <div className="flex xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                {/* Profile Card */}
                <div className="w-fit">
                    <ProfileCard
                        name="M Rayhan Fuadi, S.Kom"
                        title="UI/UX Designer & Frontend Developer"
                        handle="@rayhanfuadi"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="/ehan.png"
                        showUserInfo={true}
                        enableTilt={true}
                        onContactClick={() => console.log('Contact clicked')}
                    />
                </div>

                {/* Skill */}
                <div className="grid xl:gap-[32px] lg:gap-[24px] gap-[16px]">
                    <div className="grid xl:justify-start lg:justify-start justify-center xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                        {/* icon */}
                        <div className="grid grid-cols-3 lg:grid-cols-8 xl:grid-cols-8 gap-4">
                            {skills1.map((item, index) => (
                                <div key={index}>
                                    <AnimatedContent>
                                        <div className="grid justify-center items-center xl:w-[180px] xl:h-[180px] lg:w-[130px] lg:h-[130px] w-[90px] h-[90px] border-[1px] border-gray xl:rounded-[32px] lg:rounded-[24px] rounded-[16px] cursor-pointer hover:border-primary hover:border-[2px] group">

                                            <div className="grid gap-2 group">
                                                <div className="flex justify-center">
                                                    <Image src={item.img} alt="" width={80} height={80} className="xl:w-[80px] xl:h-[80px] lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] filter-gray group-hover:filter-green transition-all duration-300" />
                                                </div>
                                                <p className="text-center text-gray group-hover:text-primary xl:text-[16px] lg:text-[16px] text-[12px]">{item.name}</p>
                                            </div>
                                        </div>
                                    </AnimatedContent>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 lg:grid-cols-8 xl:grid-cols-8 gap-4">
                            {skills2.map((item, index) => (
                                <div key={index} >
                                    <AnimatedContent>
                                        <div className="grid justify-center items-center xl:w-[180px] xl:h-[180px] lg:w-[130px] lg:h-[130px] w-[90px] h-[90px] border-[1px] border-gray xl:rounded-[32px] lg:rounded-[24px] rounded-[16px] cursor-pointer hover:border-primary hover:border-[2px] group">
                                            <div className="grid gap-2 group">
                                                <div className="flex justify-center">
                                                    <Image src={item.img} alt="" width={80} height={80} className="xl:w-[80px] xl:h-[80px] lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] filter-gray group-hover:filter-green transition-all duration-300" />
                                                </div>
                                                <p className="text-center text-gray group-hover:text-primary xl:text-[16px] lg:text-[16px] text-[12px]">{item.name}</p>
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