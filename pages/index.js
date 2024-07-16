import { useState, useEffect } from "react";
// import useFunctions from "@/hooks/useFunctions";
import Navbar from "@/components/navbar_components/Navbar";
import Hero from "@/components/Hero/hero";
import HireTricode from "@/components/HireTricode/hire";
import JoinTricode from "@/components/HireTricode/join";
import Careers from "@/components/HireTricode/careers";
import WhyTricode from "@/components/WhyTricode/index";
import OurServices from "@/components/OurServices/index";
import OurNewsletter from "@/components/OurNewsletter/index";
import Footer from "@/components/Footer/index";
import { useSession, signIn, signOut } from "next-auth/react";

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
      <Navbar />
      {/* <main className='relative'> */}
      <Hero />
      <HireTricode mobile={mobile} />
      <JoinTricode mobile={mobile} />
      <Careers />
      <WhyTricode />
      <OurServices />
      <OurNewsletter />
      <Footer />
      {/* </main> */}
    </>
  );
}
