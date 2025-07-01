"use client";

import React, { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  threshold?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 50,
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`inline-block overflow-hidden whitespace-pre-wrap ${className}`}
    >
      {Array.from(text).map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            transition: "all 0.4s ease",
            transitionDelay: `${(delay! * i) / 1000}s`,
            transform: inView ? "translateY(0)" : "translateY(40px)",
            opacity: inView ? 1 : 0,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
