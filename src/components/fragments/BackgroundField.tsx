
import dynamic from "next/dynamic";
import Image from "next/image"

const SplitText = dynamic(() => import("@/blocks/TextAnimations/SplitText/SplitText"), {
    ssr: false,
});

const BackgroundField = () => {
    return (
        <div className="">
            <div className="absolute hidden xl:grid lg:grid gap-[100px] xl:top-[150px] lg:top-[110px] xl:left-[1075px] lg:left-[866px] left-[600px]">
                <Image src="icon/diagonal-arrow.svg" alt="" width={32} height={32} />
                <div className="xl:text-[52px] lg:text-[44px] text-[24px] font-bold leading-[125%]">
                    <div className="">
                        <SplitText
                            text="Graphic Designer,"
                        />
                    </div>
                    <div className="">
                        <SplitText
                            text="UI Designer,"

                        />
                    </div>
                    <div className="flex gap-1 group cursor-pointer">
                        <SplitText
                            text="Social Media"

                        />
                        <div className="origin-top-left rotate-[8deg] group-hover:rotate-0 ease-in-out duration-300">
                            <SplitText
                                text="Specialist"
                                className="text-primary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundField


// import Image from "next/image"

// const BackgroundField = () => {
//     return (
//         <div className="">
//             <div className="bg-slate-100/20 absolute hidden xl:grid lg:grid gap-[100px] top-[150px] xl:left-[1275px] lg:left-[956px] left-[600px]">
//                 <Image src="icon/diagonal-arrow.svg" alt="" width={32} height={32} />
//                 <div className="xl:text-[52px] lg:text-[39px] text-[24px] font-normal leading-[125%]">
//                     <p>Freelance</p>
//                     <p>UI/UX Designer,</p>
//                     <div className="flex gap-5 group cursor-pointer">Front End
//                         <div className="origin-top-left rotate-[10deg] group-hover:rotate-0 ease-in-out duration-300 ">
//                             <span className="text-primary">Developer</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default BackgroundField