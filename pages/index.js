import Image from "next/image";
import Square from "@/Components/Square";
import Navbar from "@/Components/navbar_components/Navbar";
import Hero from "@/Components/Hero/hero";
import Lottie from "lottie-react";
import greenLady from "@/public/assets/lottie/greenlady.json";
import { useState } from "react";
import { useEffect } from "react";
import GraySquare from "@/Components/GraySquare";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import useFunctions from "@/hooks/useFunctions";
import HireTricode from "@/Components/HireTricode/index";

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
      <main className="relative">
        <Hero />
        <HireTricode mobile={mobile} />

        <section id="intro" className="h-full">
          {/* <Lottie src={"../public/assets/lottie/greenlady.json"} /> */}
          {/* 
          <Lottie
            className="relative  md:bottom-[15vh] left-[64vw]  md:left-[57vw]  w-[35vw] md:w-[15vw]"
            animationData={greenLady}
            loop={true}
          /> */}
        </section>
        
        <motion.section
          className="relative top-[0vh]  overflow-hidden h-[100vh]"
          ref={ref}
          id="aboutUs"
        >
          <GraySquare />
          <motion.p
            animate={animation}
            style={{ lineHeight: 2 }}
            className="w-[50vw] absolute top-[14vh] right-[2vw] text-white text-[15px] md:text-[20px]"
          >
            TRICODE Network! We take great pride in being a distinguished
            platform that connects exceptional talents in the tech industry with
            organizations seeking to bring their visionary ideas to life. We
            unite top-notch developers for transformative projects that shape
            the future, fostering collaboration and positive impact for all.
            Join us to be part of something great.
            <button className="font-medium scale-50 hover:bg-opacity-70 hover:scale-[.55] transition ease-linear duration-150 shadow-sm shadow-secondary px-[7vw] py-[1.5vh] rounded-lg bg-black text-white">
              JOIN
            </button>
          </motion.p>
          <motion.p
            animate={animation2}
            className="w-[30vw] absolute top-[68vh] left-[2vw] bg-black p-2 rounded-sm text-white text-[17px]"
          >
            {`We foster a secure and inclusive <Developer /> community, connecting
          diverse skilled developers to collaborate on challenging projects,
          creating cutting-edge solutions in utility software, <Mechatronics />
          engineering, and humanitarian initiatives. Join our network platform
          to share ideas, knowledge, and resources, driving innovation and
          impacting the world positively.`}
          </motion.p>
          <motion.p
            animate={animation}
            className="w-[30vw] absolute top-[68vh] left-[58vw]  bg-black p-2 rounded-sm text-white text-[17px]"
          >
            {`
Our goal is to create sustainable technology innovations that help solve some of the most pressing challenges facing our world today, particularly those related to climate change and green energy. We believe that Tricode Network is well positioned to make a significant impact on the world of technology and beyond.
`}
          </motion.p>
        </motion.section>
        <section
          id="patners"
          className="mt-[40vh] pb-[5vh] relative h-[100vh] justify-center"
        >
          <p className="absolute text-[28px] text-white self-center w-full text-center mt-[2vh] font-semibold ">{`< Patners />`}</p>
          <Square />
          <div className="px-[5vw]">
            <Image
              width={200}
              height={80}
              quality={100}
              className="border-2 top-[20vh] bg-white right-[10vw] absolute w-[35vw]"
              src="/assets/images/switch.jpg"
              alt="switch"
            />

            <Image
              width={200}
              height={100}
              quality={100}
              alt="deltasciencenigeria"
              className=" border-2 top-[20vh] bg-white absolute w-[35vw]"
              src="/assets/images/dsn.png"
            />
          </div>
          <div className="px-[2vw] flex justify-between mb-[15vh]">
            <p className="text-black text-sm">&copy; 2023 tricode.pro</p>
            <div className="w-[30vw]  flex justify-around">
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
