import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function GraySquare() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const gradientRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    // console.log(screenHeight, screenWidth);

    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const animateGradient = () => {
      const gradient = gradientRef.current;
      if (gradient) {
        gradient.setAttribute("fx", "50%");
        gradient.setAttribute("fy", "50%");

        const animate = () => {
          const posX = Math.sin(Date.now() / 1000) * 50 + 50; // Example animation calculation
          const posY = Math.cos(Date.now() / 1000) * 50 + 50; // Example animation calculation

          gradient.setAttribute("fx", `${posX}%`);
          gradient.setAttribute("fy", `${posY}%`);

          requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      }
    };
    animateGradient();
  }, []);
  const size = Math.round(screenWidth);
  const sizeY = 0.88 * screenHeight;
  const sizeY2 = screenHeight;
  const points = `0,0 ${size},0 ${size},${0.75 * sizeY} ${
    0.8 * size
  },${sizeY} 0,${sizeY}`;
  const points2 = `0,${0.6 * sizeY2} ${
    0.55 * size
  },0 ${size},${0} ${size},${sizeY2} 0,${sizeY2}`;

  return (
    <svg
      className=' -z-10 h-full'
      width='100%'
      // className='mt-[150vh]'
    >
      <polygon
        // points={`0,0 ${size},0 100,50 50,100 0,${sizeY}`}
        points={points2}
        fill='url(#fade-gradient)'
        stroke='black'
        strokeWidth='0'
        strokeLinejoin='round'
        // transform='scale(1, -1)'
      />
      <defs>
        <radialGradient
          id='fade-gradient'
          cx='50%'
          cy='50%'
          r='90%'
          fx='50%'
          fy='50%'
          ref={gradientRef}
        >
          <stop offset='0%' stopColor='gray' />
          <stop offset='100%' stopColor='transparent' />
        </radialGradient>
      </defs>
      <motion.text
        // animate={{ fontSize: [15, 24] }}
        transition={{ duration: 5 }}
        x={0.68 * size}
        y={0.1 * sizeY2}
        fontSize={30}
        fontFamily={"Inter, sans-serif"}
        fontWeight={700}
        fill='white'
      >
        {"< About Us/>"}
      </motion.text>
      <motion.text
        // animate={{ fontSize: [15, 24] }}
        transition={{ duration: 5 }}
        x={0.08 * size}
        y={0.6 * sizeY2}
        fontSize={30}
        fontFamily={"Inter, sans-serif"}
        fontWeight={700}
        fill='white'
      >
        {"< Our Network/>"}
      </motion.text>
      <motion.text
        // animate={{ fontSize: [15, 24] }}
        transition={{ duration: 5 }}
        x={0.7 * size}
        y={0.65 * sizeY2}
        fontSize={30}
        fontFamily={"Inter, sans-serif"}
        fontWeight={700}
        fill='white'
      >
        {"< Our Goal/>"}
      </motion.text>
    </svg>
  );
}
