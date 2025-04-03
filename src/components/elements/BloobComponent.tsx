import React, { useEffect } from 'react';

const BlobCursor: React.FC = () => {
    useEffect(() => {
        const cursor = document.querySelector('.blob') as HTMLElement;
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;
            if (cursor) {
                cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="blob fixed xl:w-[450px] lg:w-[450px] xl:h-[450px] lg:h-[450px] w-[250px] h-[250px] rounded-full bg-gradient-to-r from-green-400 via-indigo-400 to-pink-400 opacity-80 xl:blur-[150px] lg:blur-[150px] blur-[75px] transition-all ease-out duration-1000 left-0 top-0 transform translate-x-[-50%] translate-y-[-50%] pointer-events-none"></div>
    );
};

export default BlobCursor;
