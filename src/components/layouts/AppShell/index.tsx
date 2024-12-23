import Footer from "../Footer"

type AppShellProps = {
    children: React.ReactNode
}

const AppShell = (props: AppShellProps) => {
    const { children } = props
    return (
        <main className="bg-dark text-white ">
            {children}
            <Footer />
        </main>
    )
}

export default AppShell