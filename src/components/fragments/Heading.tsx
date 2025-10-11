import Image from "next/image"

type HeadingProps = {
    src: string,
    tittle: string
}

const Heading = (props: HeadingProps) => {
    const { src, tittle } = props

    return (
        <div>
            <div className="w-fit flex items-center gap-2 px-12 py-3 rounded-full border  border-white">
                <Image src={`/icon/${src}.svg`} alt="" width={40} height={40} />
                <p className="xl:text-xl lg:text-lg text-sm uppercase font-bold">{tittle}</p>
            </div>
        </div>
    )
}

export default Heading