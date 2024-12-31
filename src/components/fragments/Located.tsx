import Image from "next/image"

const Located = () => {
    return (
        <div className="absolute hidden xl:block xl:left-0 xl:top-1/2 xl:transform xl:-translate-y-1/2 lg:block lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 z-50">
            <div className="flex gap-x-[36px] items-center bg-gray py-[23px] xl:pl-[80px] lg:pl-[60px] pr-[23px] rounded-r-full">
                <div className="text-[26px] font-semibold leading-7">
                    <p>Located</p>
                    <p>in the</p>
                    <p>Indonesia</p>
                </div>
                <div className="bg-dark rounded-full p-[18px]">
                    <Image src="icon/globe.svg" alt="" width={54} height={54} />
                </div>
            </div>
        </div>
    )
}

export default Located