import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import useFunctions from "@/hooks/useFunctions";
import Marq from "./techStack";

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
    <>
      <section className="h-screen relative overflow-hidden" id="hero">
        <div>
          <img
            className="h-screen w-full"
            src="/assets/images/black-background.png"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full mx-auto absolute justify-center md:justify-between items-center gap-[4vh] md:gap-[10vh] top-[16vh] md:top-[30vh] md:bottom-[30vh]">
          <div className="flex flex-col md:mx-12 items-center md:items-start w-full">
            <div className="header relative text-center md:text-start">
              <span className="text-white text-2xl sm:text-[53px] font-extrabold font-['Inter'] leading-[71px]">
                Build{" "}
              </span>
              <span className="text-white text-2xl sm:text-[53px] font-normal font-['Inter'] leading-[71px]">
                with
              </span>
              <span className="text-white text-2xl sm:text-[53px] font-extrabold font-['Inter'] leading-[71px]">
                {" "}
              </span>
              <span className="text-white text-2xl sm:text-[53px] font-extrabold font-['Inter'] leading-[71px]">
                Tricode
              </span>
            </div>
            <div className="text-white text-sm sm:text-lg font-normal font-['Inter']">
              The Future of Remote Collaborative space.
            </div>
            <div
              className={`flex md:justify-between space-x-4 mt-[2vh] sm:space-x-6 sm:mt-[3vh]`}
            >
              <button className="font-medium hover:bg-opacity-70 hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-black px-[7vw] py-[1.5vh] rounded-lg bg-binance_green text-white">
                HIRE
              </button>
              <button className="font-medium hover:bg-opacity-70 hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-binance_green px-[7vw] py-[1.5vh] rounded-lg bg-black text-white">
                JOIN
              </button>
            </div>
          </div>
          <Image
            loader={imageLoader}
            width={!mobile ? 400 : 200}
            height={700}
            className="w-[80%] sm:w-[60%] md:w-[400px] md:mr-12"
            src="/assets/lottie/amico.png"
            alt="hand"
          />
        </div>
        <div className="absolute bottom-5 mx-3 w-full overflow-hidden">
          <Marq />
        </div>
      </section>
    </>
  );
};

export default Home;
