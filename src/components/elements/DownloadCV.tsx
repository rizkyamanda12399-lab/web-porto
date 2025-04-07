import { FileUser } from 'lucide-react'
import React from 'react'

const DownloadCV = () => {
    return (
        <>
            <a href="/CV_MuhammadRayhanFuadi.pdf"
                download
                className="flex items-center gap-3 py-4 px-8 w-fit border border-[#158048] hover:bg-[#158048] text-white rounded-full xl:text-xl lg:text-lg text-sm uppercase font-normal transition-all duration-300 ease-in-out"
            >
                <FileUser
                    size={20}
                    strokeWidth={1.5}
                />
                Download CV
            </a>
        </>
    )
}

export default DownloadCV
