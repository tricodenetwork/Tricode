
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import useFunctions from "@/hooks/useFunctions";
import Navbar from "@/components/navbar_components/Navbar";
import Hero from "@/components/Hero/hero";
import HireTricode from "@/components/HireTricode/hire";
import JoinTricode from "@/components/HireTricode/join";
import Careers from "@/components/HireTricode/careers";
import WhyTricode from "@/components/WhyTricode/index";
import OurServices from "@/components/OurServices/index";
// import Image from "next/image";
// import Square from "@/components/Square";
// import Lottie from "lottie-react";
// import greenLady from "@/public/assets/lottie/greenlady.json";
// import GraySquare from "@/components/GraySquare";
// import { motion } from "framer-motion";

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
      <Navbar />
      <main className='relative'>
        <Hero />
        <HireTricode mobile={mobile} />
        <JoinTricode mobile={mobile} />
        <Careers />
        <WhyTricode />
        <OurServices />

        <section id='intro' className='h-full'>
          {/* <Lottie src={"../public/assets/lottie/greenlady.json"} /> */}
          {/* 
          <Lottie
            className="relative  md:bottom-[15vh] left-[64vw]  md:left-[57vw]  w-[35vw] md:w-[15vw]"
            animationData={greenLady}
            loop={true}
          /> */}
        </section>

        <section id='footer' className='mt-[20vh] relative justify-center'>
          <div className='px-[2vw] flex justify-between mb-[15vh]'>
            <p className='text-black text-sm'>&copy; 2023 tricode.pro</p>
            <div className='w-[30vw]  flex justify-around'>
              <LinkedInIcon />
              <InstagramIcon />
              <TwitterIcon />
              <GitHubIcon />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
