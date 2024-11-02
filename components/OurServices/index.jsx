import { Inter } from "next/font/google";
import Card from "./card";
import useFonts from "@/hooks/useFonts";

export default function OurServices({ mobile }) {
  const { font } = useFonts();

  return (
    <section
      className=' flex flex-col relative gap-[5%] sm:flex-row h-screen  overflow-hidden  lg:px-8 py-5 my-12 lg:mx-auto w-full justify-center items-center'
      id='services'
    >
      <div className='bg-binance_green absolute sm:hidden flex self-center rounded-full w-[550px] h-[550px] -z-50' />

      <div className='px-[5vw]  sm:w-1/2 flex gap-2 flex-col justify-center'>
        <h6
          style={font.style}
          className='text-white sm:text-app_black text-center sm:text-left text-2xl lg:text-[56px] leading-normal font-extrabold '
        >
          All the cool features
        </h6>
        <p
          style={font.style}
          className='text-center sm:text-left text-sm font-light sm:text-[20px] text-white sm:text-app_black leading-none'
        >
          Explore Powerful Features Unlock a suite of advanced tools designed to
          streamline your workflow and enhance productivity. From seamless
          integration to intuitive design, our features empower you to work
          smarter and achieve more with ease.
        </p>
      </div>
      <Card />
      {/* <OurClients /> */}
    </section>
  );
}
