import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState, CSSProperties } from 'react';
import { easeCubicOut } from 'd3-ease';

type SplitTextProps = {
    text?: string;
    className?: string;
    delay?: number;
    animationFrom?: Partial<CSSProperties>;
    animationTo?: Partial<CSSProperties>;
    threshold?: number;
    rootMargin?: string;
    textAlign?: CSSProperties['textAlign'];
    onLetterAnimationComplete?: () => void;
};

const SplitText: React.FC<SplitTextProps> = ({
    text = '',
    className = '',
    delay = 100,
    animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    onLetterAnimationComplete,
}) => {
    const letters = text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement | null>(null);
    const animatedCount = useRef(0);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current!);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        letters.length,
        letters.map((_, i) => ({
            from: animationFrom,
            to: inView
                ? async (next: (props: Partial<CSSProperties>) => Promise<void>) => {
                    await next(animationTo);
                    animatedCount.current += 1;
                    if (animatedCount.current === letters.length && onLetterAnimationComplete) {
                        onLetterAnimationComplete();
                    }
                }
                : animationFrom,
            delay: i * delay,
            config: { easing: easeCubicOut },
        }))
    );

    return (
        <p
            ref={ref}
            className={`split-parent overflow-hidden inline ${className}`}
            style={{ textAlign }}
        >
            {springs.map((props, index) => (
                <animated.span
                    key={index}
                    style={{
                        ...props,
                        transform: props.transform?.to((value) => value),
                        opacity: props.opacity?.to((value) => value),
                    }}
                    className="inline-block transform transition-opacity will-change-transform"
                >
                    {letters[index] === ' ' ? '\u00A0' : letters[index]}
                </animated.span>
            ))}
        </p>
    );
};

export default SplitText;
