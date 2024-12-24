
type ExperienceProps = {
    tittle: string,
    place: string,
    li: React.ReactNode,
    li2: React.ReactNode,
    li3: React.ReactNode,
}

const Experience = (props: ExperienceProps) => {
    const { tittle, place, li, li2, li3 } = props

    return (
        <div>
            <div className="grid lg:grid-cols-12 ">
                {/* left experience */}
                <div className="grid col-span-6 xl:gap-4 lg:gap-3">
                    <div className="flex items-center xl:gap-4 lg:gap-3">
                        <h3 className="xl:text-[32px] lg:text-[24px] text-[24px] font-medium mr-2">{tittle}</h3>
                        <p className="text-gray font-bold xl:text-[16px] lg:text-[14px] text-[14px] border-l-2 border-gray xl:pl-4 lg:pl-3 pl-2">{place}</p>
                    </div>
                    <div className="">
                        <ul className="list-disc pl-8 text-gray leading-[170%] font-semibold">
                            {li}
                        </ul>
                    </div>
                </div>

                <div className="col-span-1"></div>

                {/* right work tools */}
                <div className="grid col-span-4">
                    <h3 className="xl:text-[32px] lg:text-[24px] text-[16px] font-medium">Work Tools</h3>
                    <div className="grid grid-cols-2 text-gray leading-[170%] font-semibold">
                        <div className="grid col-span-1">
                            <ul className="list-disc pl-4">
                                {li2}
                            </ul>
                        </div>
                        <div className="grid col-span-1">
                            <ul className="list-disc pl-4">
                                {li3}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
    )
}

export default Experience