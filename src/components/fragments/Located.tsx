import DecryptedText from "@/blocks/TextAnimations/DecryptedText/DecryptedText"
import Image from "next/image"

const Located = () => {

    const desc = [
        {
            text: "Located",
            speed: 50,
            characters: "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
        },
        {
            text: "in the",
            speed: 100,
            characters: "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
        },
        {
            text: "Indonesia",
            speed: 150,
            characters: "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
        }
    ]

    return (
        <div className="absolute hidden xl:block xl:left-0 xl:top-1/2 xl:transform xl:-translate-y-1/2 lg:block lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 z-50">
            <div className="flex gap-x-[36px] items-center bg-gray py-[23px] xl:pl-[80px] lg:pl-[60px] pr-[23px] rounded-r-full">
                <div className="text-[26px] font-semibold leading-7">
                    {/* <p>Located</p>
                    <p>in the</p>
                    <p>Indonesia</p> */}
                    {desc.map((item, index) => (
                        <div className="" key={index}>
                            <DecryptedText
                                text={item.text}
                                animateOn="view"
                                speed={item.speed}
                                maxIterations={20}
                                characters={item.characters}
                                className="revealed"
                                parentClassName="all-letters"
                                encryptedClassName="encrypted"
                                revealDirection="start"
                            />
                        </div>
                    ))}
                </div>
                <div className="bg-dark overflow-clip rounded-full p-[18px]">
                    <Image src="icon/globe.svg" alt="" width={54} height={54} />
                </div>
            </div>
        </div>
    )
}

export default Located