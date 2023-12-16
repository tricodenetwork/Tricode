import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import useFunctions from "@/hooks/useFunctions";
import Marq from "./techStack";

export default function Home() {
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
      <section className="h-[700px] overflow-hidden" id="hero">
        <div>
          <img
            className="h-screen sm:h-[80vh] w-full"
            src="/assets/images/black-background.png"
          />
        </div>
        <div className="absolute mx-[3vw] top-[30vh] md:bottom-[30vh]">
          <div className="header relative max-w-max">
            <span className="text-white text-[53px] font-extrabold font-['Inter'] leading-[71px]">
              Build{" "}
            </span>
            <span className="text-white text-[53px] font-normal font-['Inter'] leading-[71px]">
              with
            </span>
            <span className="text-white text-[53px] font-extrabold font-['Inter'] leading-[71px]">
              {" "}
            </span>
            <span className="text-binance_green text-[53px] font-extrabold font-['Inter'] leading-[71px]">
              Tricode
            </span>
          </div>
          <div className="text-white text-lg font-normal font-['Inter'] leading-9">
            The Future of Remote Collaborative space.
          </div>
          <div
            className={`flex justify-between space-x-4 mt-[0vh] md:space-x-6 md:mt-[3vh]`}
          >
            <button className="font-medium hover:bg-opacity-70 hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-black px-[7vw] py-[1.5vh] rounded-lg bg-binance_green text-white">
              HIRE
            </button>
            <button className="font-medium hover:bg-opacity-70 hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-binance_green px-[7vw] py-[1.5vh] rounded-lg bg-black text-white">
              JOIN
            </button>
          </div>
        </div>
        <div className="absolute top-[23vh] right-[5vw]">
          <Image
            loader={imageLoader}
            width={!mobile ? 400 : 200}
            height={700}
            src="/assets/lottie/amico.png"
            alt="hand"
          />
        </div>
        <div className="absolute top-[63vh] mx-3 w-full overflow-hidden">
          <Marq />
        </div>
      </section>
    </>
  );
}
