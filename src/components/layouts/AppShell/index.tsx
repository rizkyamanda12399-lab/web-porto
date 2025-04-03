// import TextCursor from "@/components/elements/Reactbits/TextCursor"
import BlobCursor from "@/components/elements/BloobComponent"
import Head from "next/head"

type AppShellProps = {
    children: React.ReactNode
}

const AppShell = (props: AppShellProps) => {
    const { children } = props
    return (
        <main className="bg-dark text-white ">
            <div className="z-10">
                <BlobCursor />
            </div>
            {/* <div className="absolute w-full h-full z-50">
                <TextCursor
                    text="Hello!"
                    delay={0.01}
                    spacing={80}
                    followMouseDirection={true}
                    randomFloat={true}
                    exitDuration={0.3}
                    removalInterval={20}
                    maxPoints={10}
                />
            </div> */}
            <Head>
                <title>Ehan Portfolio</title>
            </Head>
            {children}
        </main>
    )
}

export default AppShell