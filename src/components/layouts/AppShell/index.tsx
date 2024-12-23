
type AppShellProps = {
    children: React.ReactNode
}

const AppShell = (props: AppShellProps) => {
    const { children } = props
    return (
        <main className="bg-dark text-white ">
            {children}
            <div className="text-2xl">Footer</div>
        </main>
    )
}

export default AppShell