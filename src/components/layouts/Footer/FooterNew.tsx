import Heading from "@/components/fragments/Heading"
import Lanyard from "@/components/Lanyard/Lanyard";
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import ContactForm from "../ContactForm";

const FooterNew = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    const outerRef = useRef<HTMLDivElement>(null);
    const [outerWidth, setOuterWidth] = useState(0);

    useEffect(() => {
        if (outerRef.current) {
            setOuterWidth(outerRef.current.offsetWidth);
        }
    }, []);
    return (
        <div id="contact" className=" text-white xl:scroll-mt-[60px] lg:scroll-mt-[40px] scroll-mt-[20px]">
            <div className="w-full h-[1px] bg-primary"></div>
            <div className="grid xl:gap-[0px] lg:gap-[0px] gap-[32px] xl:py-[80px] lg:py-[60px] py-[40px]">
                <Heading src="contact" tittle="Contact" />
                <div className="relative grid grid-cols-2 xl:gap-[32px] lg:gap-[24px] gap-[16px]">
                    <div ref={outerRef} className="hidden xl:flex lg:flex relative justify-center w-full h-full col-span-1">
                        <div className="relative w-full h-[630px] overflow-y-clip"> {/* border border-white */}
                            <div
                                className="absolute left-0 top-[-200px]"
                                style={{ width: outerWidth }}
                            > {/* border border-indigo-600 */}
                                <div className="scale-[1]">
                                    <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="grid col-span-1 xl:hidden lg:hidden">
                    </div> */}
                    <div className="grid h-fit col-span-1 xl:gap-[32px] lg:gap-[24px] gap-[16px]">
                        <div className="xl:text-[32px] lg:text-[24px] text-[16px] border-b-[2px] border-primary w-fit h-fit">Menu</div>
                        <div className="xl:flex lg:flex flex xl:gap-[80px] lg:gap-[60px] w-full">
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
                        <div className="hidden xl:block lg:block">
                            <ContactForm />
                        </div>
                    </div>
                </div>


                <div className="grid col-span-1 xl:hidden lg:hidden">
                    <ContactForm />
                </div>

                <div className="flex justify-between mb-[80px] lg:mb-0 xl:mb-0 gap-[16px]">
                    <p className="xl:text-[24px] lg:text-[20px] text-[14px]">© 2024 Muhammad Rayhan Fuadi. All Right Reserved</p>
                    <div className="xl:flex lg:flex grid items-center xl:gap-[24px] lg:gap-[20px] gap-[14px] group">
                        <p className="xl:text-[24px] lg:text-[20px] text-[14px]">Social Media: </p>
                        <div className="flex items-center xl:gap-[24px] lg:gap-[20px] gap-[14px]">
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
        </div>
    )
}

export default FooterNew