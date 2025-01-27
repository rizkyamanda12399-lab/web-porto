
import Image from "next/image"
import Reveal from "../elements/Reveal";
import SplitText from "../elements/SplitText.jsx";

const BackgroundField = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="">
            <div className="absolute hidden xl:grid lg:grid gap-[100px] xl:top-[150px] lg:top-[110px] xl:left-[1275px] lg:left-[1006px] left-[600px]">
                <Reveal>
                    <Image src="icon/diagonal-arrow.svg" alt="" width={32} height={32} />
                </Reveal>
                <div className="xl:text-[52px] lg:text-[39px] text-[24px] font-normal leading-[125%]">
                    <div className="">
                        <SplitText
                            text="Freelance,"
                            className="xl:text-[52px] lg:text-[39px] text-[24px] font-normal leading-[125%]"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </div>
                    <div className="">
                        <SplitText
                            text="UI/UX Designer,"
                            className="xl:text-[52px] lg:text-[39px] text-[24px] font-normal leading-[125%]"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </div>
                    <div className="flex gap-3 group cursor-pointer">
                        <SplitText
                            text="Front End"
                            className="xl:text-[52px] lg:text-[39px] text-[24px] font-normal leading-[125%]"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                        <div className="origin-top-left rotate-[8deg] group-hover:rotate-0 ease-in-out duration-300">
                            <Reveal>
                                <span className="text-primary">Developer</span>
                            </Reveal>
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