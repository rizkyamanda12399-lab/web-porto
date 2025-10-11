import BlobCursor from "@/components/elements/BloobComponent"
import Head from "next/head"

type AppShellProps = {
    children: React.ReactNode
}

const AppShell = (props: AppShellProps) => {
    const { children } = props
    return (
        <main className="bg-dark text-white">
            <div className="z-10 group">
                <BlobCursor />
            </div>
            <Head>
                <title>Rizky Amanda</title>
            </Head>
            {children}
        </main>
    )
}

export default AppShell