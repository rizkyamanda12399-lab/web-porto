"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  initialOpacity?: number;
  animateOpacity?: boolean;
  threshold?: number;
  durationMs?: number;
  delayMs?: number;
  className?: string;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 0,
  direction = "vertical",
  reverse = false,
  initialOpacity = 0,
  animateOpacity = true,
  threshold = 0.1,
  durationMs = 1500,
  delayMs = 0,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  const translateClass = (() => {
    const dir = direction === "horizontal" ? "x" : "y";
    const value = reverse ? `-${distance}` : `${distance}`;
    return !inView ? `translate-${dir}-[${value}px]` : "translate-x-0 translate-y-0";
  })();

  const opacityClass = animateOpacity ? (inView ? "opacity-100" : `opacity-${initialOpacity * 100}`) : "";

  const style = {
    transition: `all ${durationMs}ms ease-out ${delayMs}ms`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`will-change-transform transform ${translateClass} ${opacityClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
