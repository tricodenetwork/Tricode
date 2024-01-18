import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import useFunctions from "@/hooks/useFunctions";
import Navbar from "@/Components/navbar_components/Navbar";
import Hero from "@/Components/Hero/hero";
import HireTricode from "@/Components/HireTricode/hire";
import JoinTricode from "@/Components/HireTricode/join";
import Careers from "@/Components/HireTricode/careers";
import WhyTricode from "@/Components/WhyTricode/index";
import OurServices from "@/Components/OurServices/index";
import OurNewsletter from "@/Components/OurNewsletter/index";
import Footer from "@/Components/Footer/index";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const { data: session } = useSession();
  console.log("session:", session);

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
        <OurNewsletter />
        <Footer />

        <section id='intro' className='h-full'>
          {/* <Lottie src={"../public/assets/lottie/greenlady.json"} /> */}
          {/* 
          <Lottie
            className="relative  md:bottom-[15vh] left-[64vw]  md:left-[57vw]  w-[35vw] md:w-[15vw]"
            animationData={greenLady}
            loop={true}
          /> */}
        </section>
      </main>
    </>
  );
}
