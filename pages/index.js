import { useState, useEffect } from "react";
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
