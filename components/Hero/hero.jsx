import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import useFunctions from "@/hooks/useFunctions";
import Marq from "./techStack";
import { Inter, Poppins } from "next/font/google";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import AnimatedHeroCard from "./AnimatedHeroCard";
import SampleChat from "./SampleChat";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (imageLoaded) {
      animation.start("visible");
      animation2.start("visible");
    } else {
      animation.start("hidden");
      animation2.start("hidden");
    }
  }, [imageLoaded, animation, animation2]);

  const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 2.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section
      className='h-[100vh] bg-appGreen flex items-end pb-[7vh] lg:pb-[5vh] justify-center relative overflow-hidden'
      id='hero'
    >
      <div className='flex flex-col lg:flex-row w-full lg:w-[93vw] h-[80vh] lg:h-max justify-around lg:justify-between items-center'>
        <motion.div
          className='flex flex-col lg:h-[35%] relative items-center lg:items-start w-max'
          variants={containerVariants}
          initial='hidden'
          animate={animation}
        >
          <motion.h4
            variants={itemVariants}
            className='flex-col flex items-center lg:hidden'
          >
            <span className='flex gap-2'>
              <span className='semiBold text-3xl lg:text-[80px] lg:leading-[81px] leading-normal text-white'>
                Collaborate
              </span>
              <span className=''>
                <Typewriter
                  options={{
                    strings: [
                      "Globally",
                      "Remotely",
                      "Securely",
                      "Effortlesly",
                    ],
                    autoStart: true,
                    loop: true,
                    // skipAddStyles: true  ,
                    cursorClassName:
                      "text-app_light_green semiBold text-3xl leading-normal custom-cursor",
                    wrapperClassName:
                      "text-app_light_green semiBold text-3xl leading-normal",
                  }}
                />
              </span>
            </span>
            <span className='flex gap-2'>
              <span className='semiBold text-3xl lg:text-[80px] lg:leading-[81px] leading-normal text-white'>
                with
              </span>
              <span className='semiBold text-3xl lg:text-[80px] lg:leading-[81px] leading-normal text-white'>
                Tricode
              </span>
            </span>
          </motion.h4>
          <motion.div
            variants={itemVariants}
            className='hidden min-w-[40vw] lg:flex flex-col'
          >
            <span className='semiBold text-3xl lg:text-[80px] lg:leading-[81px] leading-normal text-white'>
              Collaborate
            </span>
            <h2 className='flex items-center'>
              <Typewriter
                options={{
                  strings: ["Globally", "Remotely", "Securely", "Effortlesly"],
                  autoStart: true,
                  loop: true,
                  // skipAddStyles: true  ,
                  cursorClassName:
                    "text-app_light_green text-[80px] leading-[81px] custom-cursor",
                  wrapperClassName:
                    "text-app_light_green semiBold text-[80px] leading-[81px]",
                }}
              />
              <span className='semiBold ml-2 text-3xl lg:text-[80px] lg:leading-[81px] leading-normal text-white'>
                with
              </span>
            </h2>
            <span className='semiBold text-3xl lg:text-[80px] lg:leading-[81px] leading-normal text-white'>
              Tricode
            </span>
          </motion.div>
          <motion.p
            variants={itemVariants}
            style={poppins.style}
            className='font-light w-[80%] max-w-[421px] mt-4 text-center sm:text-left text-white text-sm lg:text-lg leading-normal'
          >
            Join over 10,000 businesses using Tricode Pro for enhanced remote
            collaboration and see a 45% increase in productivity.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className='flex justify-center gap-4 lg:justify-start w-full mt-[4vh] self-center relative bottom-0'
          >
            <Link
              href={"/auth/register"}
              className='semiBold lg:w-[38%] flex justify-center w-[30%] mr-[16px] lg:mr-[22px] text-xs lg:text-base lg:Bold hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-black py-[1.5vh] rounded-lg bg-app_light_green text-white h-[54px]'
            >
              <button>Find Talent</button>
            </Link>
            <a
              href='/files/manual.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='semiBold lg:w-[38%]  justify-center w-[30%] text-xs lg:text-base lg:Bold hover:scale-110 transition ease-linear duration-150 shadow-s shadow-binance_green flex items-center rounded-lg bg-white text-app_light_green h-[54px]'
            >
              How It Works
            </a>
          </motion.div>
        </motion.div>

        <div className='w-[300px] lg:w-[633px] flex flex-col relative h-[50%] lg:h-[600px]'>
          <SampleChat />
          <div
            id='AnimatedCard'
            className='absolute top-[6.3%] -right-[2%] sm:right-[3%] sm:w-[27.7%] w-[31%] h-[31%]'
          >
            <AnimatedHeroCard />
          </div>
          <Image
            fill
            className='object-contain'
            quality={100}
            priority
            src='/assets/images/hero_image.png'
            alt='hand'
            onLoad={handleImageLoad}
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
            className='flex flex-row-reverse mx-auto sm:mx-0 self-center animate-pulse w-[85vw] sm:w-full justify-between absolute bottom-0'
            transition={{
              delay: 5,
              type: "spring",
              damping: 10,
              stiffness: 300,
            }}
          >
            <div className='w-[120px] h-[90px] sm:w-[180px] relative sm:h-[130px]'>
              <Image
                src={"/assets/images/tcp.png"}
                quality={100}
                fill
                className='bottom-[0%] right-[3%]'
                alt='tricode_project'
              />
            </div>
            <div className='w-[120px] h-[90px] sm:w-[226px] relative sm:h-[182px]'>
              <Image
                src={"/assets/profile_pics/avatars.png"}
                fill
                quality={100}
                className='bottom-[0%] object-contain left-[0%]'
                alt='avatars'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
