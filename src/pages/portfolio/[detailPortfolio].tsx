import { useRouter } from "next/router"

const DetailPortfolio = () => {
    const { query } = useRouter()
    // console.log(router)

    return (
        <div>
            <h1 className="text-3xl">Detail Portfolio</h1>
            <p>This is Detail Portfolio: {query.detailPortfolio} </p>
        </div>
    )
}

export default DetailPortfolio