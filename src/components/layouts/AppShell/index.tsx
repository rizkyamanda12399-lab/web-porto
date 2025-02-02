import Head from "next/head"

type AppShellProps = {
    children: React.ReactNode
}

const AppShell = (props: AppShellProps) => {
    const { children } = props
    return (
        <main className="bg-dark text-white ">
            <Head>
                <title>Ehan Portfolio</title>
            </Head>
            {children}
        </main>
    )
}

export default AppShell