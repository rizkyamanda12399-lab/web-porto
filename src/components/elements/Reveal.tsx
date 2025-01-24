import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

interface Props {
    children: React.ReactNode;
}

const Reveal = ({ children }: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])

    const transition = {
        duration: 2,
        delay: 1,
        default: { type: "spring" },
        opacity: { ease: "linear" }
    }

    return (
        <div ref={ref} className="">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={transition}
            >
                {children}
            </motion.div>
        </div >
    )
}

export default Reveal