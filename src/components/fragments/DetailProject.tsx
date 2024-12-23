import Image from "next/image"
import React from "react"

type DetailProjectProps = {
    headline: string,
    color1: string,
    color2: string,
    tittle: string,
    desc: string,
    img: string,
    src: React.ReactNode,
}

const DetailProject = (props: DetailProjectProps) => {
    const { headline, color1, color2, tittle, desc, img, src } = props

    return (
        <div className="grid xl:gap-[24px] lg:gap-[20px] gap-[16px]">
            <h2 className="xl:text-[40px] lg:text-[32px] text-[24px] font-normal">{headline}</h2>
            <div className="grid grid-cols-12 xl:gap-[32px] lg:gap-[24px] gap-[16px]">
                <div className={`grid items-start col-span-3 xl:p-[40px] bg-gradient-to-bl from-[${color1}] to-[${color2}] rounded-[32px]`}>
                    <div className="grid xl:gap-[24px] lg:gap-[20px] gap-[16px]">
                        <div className="xl:text-[60px] lg:text-[40px] text-[24px] font-light">{tittle}</div>
                        <p className="xl:text-[20px] lg:text-[20px] text-[16px] text-justify">{desc}</p>
                    </div>
                </div>
                <div className="relative overflow-hidden grid col-span-8 bg-indigo-600 rounded-[32px] cursor-pointer group">
                    <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={img} alt="" width={1163} height={677} />
                    <div className="absolute flex gap-[14px] invisible group-hover:visible left-[24px] bottom-[40px]">
                        {src}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProject