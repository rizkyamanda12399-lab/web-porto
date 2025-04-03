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
        <div className="blob fixed w-[450px] h-[450px] rounded-full bg-gradient-to-r from-green-300 via-indigo-300 to-pink-300 blur-[150px] opacity-70 transition-all ease-out duration-1000 left-0 top-0 transform translate-x-[-50%] translate-y-[-50%] pointer-events-none"></div>
    );
};

export default BlobCursor;
