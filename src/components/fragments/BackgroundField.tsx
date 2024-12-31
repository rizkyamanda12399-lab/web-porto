
import Image from "next/image"

const BackgroundField = () => {
    return (
        <div className="">
            <div className="absolute hidden xl:grid lg:grid gap-[100px] xl:top-[150px] lg:top-[110px] xl:left-[1275px] lg:left-[1006px] left-[600px]">
                <Image src="icon/diagonal-arrow.svg" alt="" width={32} height={32} />
                <div className="xl:text-[52px] lg:text-[39px] text-[24px] font-normal leading-[125%]">
                    <p>Freelance,</p>
                    <p>UI/UX Designer,</p>
                    <div className="flex gap-5 group cursor-pointer">Front End
                        <div className="origin-top-left rotate-[10deg] group-hover:rotate-0 ease-in-out duration-300">
                            <span className="text-primary">Developer</span>
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