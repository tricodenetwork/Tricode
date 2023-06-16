import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const MobileSquare = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const gradientRef = useRef(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
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
  const sizeY2 = 0.88 * screenHeight;
  const points = `0,0 ${size},0 ${size},${sizeY} ${size},${sizeY} 0,${sizeY}`;
  const points2 = `0,${0.4 * sizeY2} ${
    0.55 * size
  },0 ${size},${0} ${size},${sizeY2} 0,${sizeY2}`;

  return (
    <>
      <motion.svg
        className='absolute left-0   -z-10 h-full top-[9vh]'
        width='100%'
      >
        <polygon
          // points={`0,0 ${size},0 100,50 50,100 0,${sizeY}`}
          points={points}
          fill='black'
          stroke='black'
          strokeWidth='0'
          strokeLinejoin='round'
        />
        {/* <motion.text
      // animate={{ fontSize: [15, 24] }}
      transition={{ duration: 5 }}
      x='10'
      y='50'
      fontSize={45}
      fontFamily={"Inter, sans-serif"}
      fontWeight={700}
      fill='white'
      lineHeight='42.44px'
    >
      WELCOME TO TRICODE
    </motion.text> */}
      </motion.svg>
      <svg
        className='absolute left-0  -z-10 h-full top-[121.4vh]'
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
          x={0.55 * size}
          y={0.1 * sizeY2}
          fontSize={22}
          fontFamily={"Inter, sans-serif"}
          fontWeight={700}
          fill='white'
        >
          {"< About Us />"}
        </motion.text>
        <motion.text
          // animate={{ fontSize: [15, 24] }}
          transition={{ duration: 5 }}
          x={0.3 * size}
          y={0.12 * sizeY2}
          width={0.5 * size}
          fontSize={17}
          fontFamily={"Inter, sans-serif"}
          fontWeight={400}
          fill='white'
        >
          <tspan x={0.38 * size} dy='1.5em'>
            Tricode is a recruitment platform
          </tspan>
          <tspan x={0.38 * size} dy='1.5em'>
            for talents in the tech industry,
          </tspan>
          <tspan x={0.38 * size} dy='1.5em'>
            we are focused on providing
          </tspan>
          <tspan x={0.38 * size} dy='1.5em'>
            technical workforce for our
          </tspan>
          <tspan x={0.38 * size} dy='1.5em'>
            partners and clients with brilliant
          </tspan>
          <tspan x={0.38 * size} dy='1.5em'>
            ideas.
          </tspan>
        </motion.text>
      </svg>
    </>
  );
};

export default MobileSquare;
