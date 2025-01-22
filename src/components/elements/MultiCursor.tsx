import { useEffect, useState } from "react";
import { motion } from "framer-motion"

interface Cursor {
    size: number;
    color: string;
    delay: number;
}


const MultiCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });

    const [isMoving, setIsMoving] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
            setIsMoving(true);

            // Reset moving state after 100ms of inactivity
            clearTimeout(timeout);
            timeout = setTimeout(() => setIsMoving(false), 100);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timeout);
        };
    }, []);

    const cursors: Cursor[] = [
        { size: 16, color: "bg-red-500", delay: 0 },
        { size: 16, color: "bg-blue-500", delay: 0.01 },
        { size: 16, color: "bg-green-500", delay: 0.02 },
        { size: 16, color: "bg-yellow-500", delay: 0.03 },
    ];

    return (
        <div className="relative w-full h-screen bg-slate-900 overflow-hidden">
            {cursors.map((cursor, index) => (
                <motion.div
                    key={index}
                    className={`absolute rounded-full ${cursor.color} ${isMoving ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        width: cursor.size,
                        height: cursor.size,
                        willChange: "transform",
                    }}
                    animate={{
                        x: mousePosition.x - cursor.size / 2,
                        y: mousePosition.y - cursor.size / 2,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 15,
                        delay: cursor.delay,
                    }}
                />
            ))}
        </div>
    )
}

export default MultiCursor