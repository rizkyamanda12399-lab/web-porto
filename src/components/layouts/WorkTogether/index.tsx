const WorkTogether = () => {
    return (
        <div>
            <div className="w-ful xl:h-screen lg:h-screen h-[100%] grid justify-center items-center">
                <div className="grid xl:gap-[40px] lg:gap-[30px] gap-[20px]">
                    <div className="grid xl:leading-[96px] lg:leading-[72px] leading-[54px]">
                        <h1 className="text-center xl:text-[80px] lg:text-[60px] text-[32px] font-normal">Let’s Make Great</h1>
                        <h1 className="text-center xl:text-[80px] lg:text-[60px] text-[32px] font-normal">Work Together!</h1>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-fit border border-white-1 border-white xl:text-[32px] lg:text-[24px] text-[16px] xl:px-[32px] lg:px-[24px] px-[24px] xl:py-[16px] lg:py-[24px] py-[16px] hover:bg-gray/70 transition ease-in duration-300 rounded-full">Start Discuss</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkTogether