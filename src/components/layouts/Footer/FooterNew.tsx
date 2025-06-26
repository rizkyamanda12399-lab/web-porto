import Heading from "@/components/fragments/Heading"
import Lanyard from "@/components/Lanyard/Lanyard";
import Image from "next/image"

const FooterNew = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div id="contact" className=" text-white xl:scroll-mt-[60px] lg:scroll-mt-[40px] scroll-mt-[20px]">
            <div className="w-full h-[1px] bg-primary"></div>
            <div className="grid xl:gap-[80px] lg:gap-[60px] gap-[32px] xl:py-[80px] lg:py-[60px] py-[40px]">
                <Heading src="contact" tittle="Contact" />
                <div className="grid grid-cols-3 xl:gap-[32px] lg:gap-[24px] gap-[16px]">
                    <div className="grid col-span-2">
                        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                    </div>
                    <div className="grid col-span-1 xl:gap-[32px] lg:gap-[24px] gap-[16px]">
                        <div className="xl:text-[32px] lg:text-[24px] text-[16px] border-b-[2px] border-primary w-fit h-fit">Menu</div>
                        <div className="xl:flex lg:flex grid xl:gap-[80px] lg:gap-[60px] ">
                            <div className="">
                                <ul className="list-disc pl-8 xl:text-[24px] lg:text-[20px] text-[14px] font-light">
                                    <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("introduce")}>Home</li>
                                    <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("about")}>About</li>
                                    <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("resume")}>Resume</li>
                                </ul>
                            </div>
                            <div className="">
                                <ul className="list-disc pl-8 xl:text-[24px] lg:text-[20px] text-[14px] font-light ">
                                    <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("skills")}>Skill</li>
                                    <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("portfolio")}>Portfolio</li>
                                    <li className="hover:text-primary cursor-pointer" onClick={() => handleScroll("contact")}>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mb-[80px] lg:mb-0 xl:mb-0">
                    <p className="xl:text-[24px] lg:text-[20px] text-[14px]">© 2024 Muhammad Rayhan Fuadi. All Right Reserved</p>
                    <div className="flex items-center xl:gap-[24px] lg:gap-[20px] gap-[14px] group">
                        <p className="xl:text-[24px] lg:text-[20px] text-[14px]">Social Media: </p>
                        <a href="https://github.com/rayhanfuadi" target="_blank">
                            <Image src="icon/github.svg" alt="" width={32} height={32} />
                        </a>
                        <a href="https://www.instagram.com/rayhanfuadi/" target="_blank">
                            <Image src="icon/instagram.svg" alt="" width={32} height={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/rayhan-fuadi-36321a134/" target="_blank">
                            <Image src="icon/linkedin.svg" alt="" width={32} height={32} />
                        </a>
                        <a href="https://wa.link/cuy3df" target="_blank">
                            <Image src="icon/wa.svg" alt="" width={32} height={32} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterNew