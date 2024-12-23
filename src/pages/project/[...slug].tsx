import { useRouter } from "next/router"


const Slug = () => {
    const { query } = useRouter()
    console.log(query)
    return (
        <>
            <div className="text-3xl">
                <h1>Detail Slug</h1>
            </div>
        </>
    )
}

export default Slug