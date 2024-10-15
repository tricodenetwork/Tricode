import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import useFunctions from "@/hooks/useFunctions";
import Marq from "./techStack";
import { Inter, Poppins } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    console.log("inView", inView);

    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1.5, bounce: 0.3 },
      });
      animation2.start({
        scale: 1,
        opacity: 1,
        transition: { type: "tween", duration: 2.5 },
      });
    } else {
      animation.start({
        x: `100vw`,
      });
      animation2.start({
        scale: 0,
        opacity: 0,
      });
    }
  }, [inView, animation, animation2]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { imageLoader } = useFunctions();
  const mobile = screenWidth < 798;

  return (
    <section
      className='h-[100vh]  bg-appGreen   flex items-end pb-[7vh] lg:pb-[5vh] justify-center relative overflow-hidden'
      id='hero'
    >
      {/* <div className='w-full h-full -z-20 absolute top-0 bottom-0'>
        <Image
          fill
          className='object-cover hidden lg:flex'
          src='/assets/images/bg.svg'
          alt='background'
        />
        <Image
          fill
          className='object-cover flex lg:hidden'
          src='/assets/images/mobilebackground.svg'
          alt='background'
        />
      </div> */}
      <div className='flex flex-col lg:flex-row w-full lg:w-[93vw] h-[80vh] lg:h-max  justify-around   lg:justify-between items-center'>
        <div className='flex flex-col   lg:h-[35%] relative  items-center lg:items-start w-max'>
          <h4 className='flex-col flex items-center lg:hidden'>
            <span className='flex gap-2'>
              <span
                className={
                  "semiBold text-3xl lg:text-[80px] lg:leading-[81px] leading-normal text-white"
                }
              >
                Collaborate{" "}
              </span>
              <span className='text-app_light_green semiBold  text-3xl lg:text-[80px] lg:leading-[81px] leading-normal '>
                Globally
              </span>
            </span>
            <span className='flex gap-2'>
              <span
                className={
                  "semiBold text-3xl lg:text-[80px] lg:leading-[81px] leading-normal text-white"
                }
              >
                with{" "}
              </span>

              <span
                className={
                  "semiBold text-3xl lg:text-[80px] lg:leading-[81px] leading-normal text-white"
                }
              >
                Tricode
              </span>
            </span>
          </h4>
          <h4 className='hidden lg:flex flex-col'>
            <span
              className={
                "semiBold text-3xl lg:text-[80px] lg:leading-[81px] leading-normal text-white"
              }
            >
              Collaborate
            </span>
            <p>
              <span className='text-app_light_green semiBold  text-3xl lg:text-[80px] lg:leading-[81px] leading-normal '>
                Globally{" "}
              </span>
              <span
                className={
                  "semiBold text-3xl lg:text-[80px] lg:leading-[81px] leading-normal text-white"
                }
              >
                with
              </span>
            </p>

            <span
              className={
                "semiBold text-3xl lg:text-[80px] lg:leading-[81px] leading-normal text-white"
              }
            >
              Tricode
            </span>
          </h4>
          <p
            style={poppins.style}
            className='font-light w-[80%] max-w-[421px] mt-4 text-center text-white text-sm lg:text-lg  leading-normal '
          >
            Join over 10,000 businesses using Tricode Pro for enhanced remote
            collaboration and see a 45% increase in productivity.
          </p>
          <div
            className={`flex justify-center gap-4 lg:justify-start w-full mt-[4vh] self-center  relative bottom-0`}
          >
            <Link
              href={"/auth/register"}
              className=' semiBold lg:w-[38%] flex justify-center w-[30%] mr-[16px] lg:mr-[22px] text-xs lg:text-base lg:Bold  hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-black  py-[1.5vh] rounded-lg bg-app_light_green text-white h-[54px]'
            >
              <button>Find Talent</button>
            </Link>
            <Link
              href={"/auth/register"}
              className=' semiBold lg:w-[38%] flex justify-center w-[30%] text-xs lg:text-base lg:Bold  hover:scale-110 transition ease-linear duration-150 shadow-s shadow-binance_green  py-[1.5vh] rounded-lg bg-white text-app_light_green h-[54px]'
            >
              <button>How It Works</button>
            </Link>
          </div>
        </div>
        <div className='w-[300px] lg:w-[633px]  relative h-[50%] lg:h-[600px]'>
          <Image
            fill
            className=''
            quality={100}
            priority
            src='/assets/images/heros.svg'
            alt='hand'
          />
        </div>
      </div>
      {/* <div className='absolute bottom-5 mx-3 w-full overflow-hidden'>
        <Marq />
      </div> */}
    </section>
  );
};

export default Home;
