const Located = () => {
    return (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-40">
            <div className="flex gap-x-[36px] items-center bg-gray py-[23px] xl:pl-[80px] lg:pl-[60px] pr-[23px] rounded-r-full">
                <div className="text-[26px] font-semibold leading-7">
                    <p>Located</p>
                    <p>in the</p>
                    <p>Indonesia</p>
                </div>
                <div className="bg-dark rounded-full p-[18px]">
                    <img src="icon/globe.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Located