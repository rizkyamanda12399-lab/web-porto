/* eslint-disable @typescript-eslint/no-unused-vars */
"use clint"

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
}

const getRotationTarget = (rotation: number, increment: number) => rotation + increment;

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true
) => ({
  from: from,
  to: from + 360,
  ease: "linear",
  duration: duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 120,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);

  const rotateTo = (rotation: number, duration: number, scale: number = 1) => {
    controls.start({
      rotate: rotation,
      scale,
      transition: {
        ease: "linear",
        duration,
        repeat: 0,
      },
    });
  };


  // useEffect(() => {
  //   controls.start({
  //     rotate: currentRotation + 3000,
  //     scale: 1,
  //     transition: getTransition(spinDuration, currentRotation),
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [spinDuration, controls, onHover, text]);

  useEffect(() => {
    rotateTo(getRotationTarget(currentRotation, 3000), spinDuration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinDuration, onHover, text]);

  const handleHoverStart = () => {
    if (!onHover) return;
    switch (onHover) {
      case "slowDown":
        // controls.start({
        //   rotate: currentRotation + 360,
        //   scale: 1,
        //   transition: getTransition(spinDuration * 2, currentRotation),
        // });
        rotateTo(getRotationTarget(currentRotation, 360), spinDuration * 2);
        break;
      case "speedUp":
        // controls.start({
        //   rotate: currentRotation + 360,
        //   scale: 1,
        //   transition: getTransition(spinDuration / 4, currentRotation),
        // });
        rotateTo(getRotationTarget(currentRotation, 360), spinDuration / 4);
        break;
      case "pause":
        controls.start({
          rotate: currentRotation,
          scale: 1,
          transition: {
            rotate: { type: "spring", damping: 20, stiffness: 300 },
            scale: { type: "spring", damping: 20, stiffness: 300 },
          },
        });
        break;
      case "goBonkers":
        // controls.start({
        //   rotate: currentRotation + 360,
        //   scale: 0.95,
        //   transition: getTransition(spinDuration / 20, currentRotation),
        // });
        rotateTo(getRotationTarget(currentRotation, 360), spinDuration / 20, 0.95);
        break;
      default:
        break;
    }
  };

  const handleHoverEnd = () => {
    // controls.start({
    //   rotate: currentRotation + 3000,
    //   scale: 1,
    //   transition: getTransition(spinDuration, currentRotation),
    // });
    rotateTo(getRotationTarget(currentRotation, 3000), spinDuration, 1);
  };

  return (
    <motion.div
      initial={{ rotate: 0 }}
      className={`mx-auto rounded-full w-[267px] h-[267px] text-white font-black text-center cursor-pointer origin-center ${className}`}
      animate={controls}
      onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotation = (360 / letters.length) * i;
        const factor = Number((Math.PI / letters.length).toFixed(0));
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span
            key={i}
            className="absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;