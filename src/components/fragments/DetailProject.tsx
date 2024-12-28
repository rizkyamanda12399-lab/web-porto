import React from "react"

type DetailProjectProps = {
    headline: string,
    colorPrimary: string,
    tittle: string,
    desc: string,
    img: React.ReactNode,
    src: React.ReactNode,
}

const DetailProject = (props: DetailProjectProps) => {
    const { headline, tittle, colorPrimary, desc, img, src } = props

    return (
        <div className="grid xl:gap-[24px] lg:gap-[20px] gap-[16px]">
            <h2 className="xl:text-[40px] lg:text-[32px] text-[24px] font-normal">{headline}</h2>
            <div className="grid xl:grid-cols-12 lg:grid-cols-12 xl:gap-[32px] lg:gap-[24px] gap-[16px]">
                <div className={`grid items-start xl:col-span-3 lg:col-span-3 col-span-12 xl:p-[40px] lg:p-[30px] p-[20px] ${colorPrimary} xl:rounded-[32px] lg:rounded-[32px] rounded-[20px] xl:order-first lg:order-first order-last`}>
                    <div className="grid xl:gap-[24px] lg:gap-[20px] gap-[16px]">
                        <div className="xl:text-[60px] lg:text-[40px] text-[24px] font-light">{tittle}</div>
                        <p className="xl:text-[20px] lg:text-[20px] text-[16px] text-justify">{desc}</p>
                    </div>
                </div>
                <div className="relative overflow-hidden grid xl:col-span-9 lg:col-span-9 col-span-12 bg-indigo-600 xl:rounded-[32px] lg:rounded-[32px] rounded-[20px] cursor-pointer group">
                    {img}
                    <div className="absolute flex xl:gap-[14px] gap-[6px] invisible group-hover:visible xl:left-[24px] xl:bottom-[40px] lg:left-[20px] lg:bottom-[30px] left-[10px] bottom-[20px] object-contain">
                        {src}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProject