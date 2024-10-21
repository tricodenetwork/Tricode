import { useState, useEffect } from "react";
import Navbar from "@/components/navbar_components/Navbar";
import Hero from "@/components/Hero/hero";
import HireTricode from "@/components/HireTricode/hire";
import JoinTricode from "@/components/HireTricode/join";
import Careers from "@/components/HireTricode/careers";
import WhyTricode from "@/components/WhyTricode/index";
import OurServices from "@/components/OurServices/index";
import OurNewsletter from "@/components/OurNewsletter/index";
import Footer from "@/components/Footer/index";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Connect from "@/components/HireTricode/connect";
import Platform from "@/components/platform/Platform";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);
  const { data: session } = useSession();
  // console.log("session:", session);

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
  const mobile = screenWidth < 798;

  return (
    <>
      <Head>
        <title>Tricode Remote Workstation </title>
        <meta
          name='description'
          content="As a distinguished Software and Hardware development firm, we stand prepared to address all your technological requirements. Our expertise spans from crafting mobile applications to developing sophisticated websites and robust software programs. Simply articulate your vision, and we'll transform it into reality with our adept team of professionals."
        />
      </Head>
      <Navbar />
      {/* <main className='relative'> */}
      <Hero />
      <Connect />
      <HireTricode mobile={mobile} />
      <WhyTricode />
      <JoinTricode mobile={mobile} />
      {/* <Careers /> */}
      <OurServices />
      <Platform />
      <OurNewsletter />
      <Footer />
      {/* </main> */}
    </>
  );
}
