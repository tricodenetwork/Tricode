import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar_components/Navbar";
import Hero from "@/components/Hero/hero";
import HireTricode from "@/components/HireTricode/hire";
import JoinTricode from "@/components/HireTricode/join";
import Careers from "@/components/HireTricode/careers";
import WhyTricode from "@/components/WhyTricode/index";
import OurServices from "@/components/OurServices/index";
import OurNewsletter from "@/components/OurNewsletter/index";
import Footer from "@/components/Footer/index";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

import { useSession } from "next-auth/react";
import Head from "next/head";
import Connect from "@/components/HireTricode/connect";
import Platform from "@/components/platform/Platform";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/About/Faq/faqs";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);
  const { data: session } = useSession();
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef?.current?.minimize();
  };
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
      <JoinTricode mobile={mobile} />
      <WhyTricode />
      {/* <Careers /> */}
      <OurServices />
      <Platform />
      <Testimonials />
      <FAQs />
      <OurNewsletter />
      <Footer />
      <TawkMessengerReact
        propertyId='668d0c9cc3fb85929e3d25df'
        widgetId='1i2bfih3e'
        ref={tawkMessengerRef}
      />
      {/* </main> */}
    </>
  );
}
