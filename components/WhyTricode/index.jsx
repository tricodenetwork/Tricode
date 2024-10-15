import Card from "@/components/WhyTricode/card";
import { Inter } from "next/font/google";
import Solution_banner from "./banner";
import useFonts from "@/hooks/useFonts";
import HireCard from "../HireTricode/card";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function WhyTricode({ mobile }) {
  const { font } = useFonts();
  return (
    <>
      <section
        className='px-[5vw] py-5 mt-12 mx-auto w-full justify-center items-center'
        id='why'
      >
        <div className='text-center mx-auto w-full justify-center items-center'>
          <hr className='w-[69px] h-[5px] mx-auto my-5 text-center bg-binance_green justify-center items-center' />
          <h4
            style={font.style}
            className='text-app_black text-3xl lg:text-[56px] font-extrabold leading-normal lg:leading-[55px]'
          >
            Why Tricode?
          </h4>
          <p
            style={font.style}
            className='text-app_black mx-auto my-6 text-xs lg:text-lg text-center w-full lg:w-[65%] leading-6 tracking-tight'
          >
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </p>
        </div>
        <div className='w-full flex flex-col'>
          <Card />
        </div>
      </section>
      <div className='relative w-[80%] gap-4 lg:gap-0 rounded-[12px] mx-auto flex flex-col items-center lg:bg-none bg-gradient-to-r from-binance_green to-appGreen justify-center lg:w-full lg:p-[80px] h-max  py-[5%] lg:py-0 lg:h-[392px]'>
        <Image
          className='absolute hidden lg:block -z-50'
          priority
          src={"/assets/images/hire_bg.svg"}
          fill
          alt='bg'
        />
        <h4
          style={font.style}
          className='text-white w-full text-center text-2xl lg:text-[56px] font-extrabold leading-normal'
        >
          Hire the best talents
        </h4>
        <p
          style={font.style}
          className='text-white hidden lg:flex mx-auto lg:my-6 text-xs lg:text-lg text-center w-full lg:w-[75%] leading-6 tracking-tight'
        >
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
          pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis
          ac turpis at amet. Purus malesuada placerat arcu at enim elit in
          accumsan.
        </p>
        <button className='w-max gap-2  lg:gap-4  px-[4%] p-[2%]  bg-white flex items-center justify-center hover:translate-y-2 duration-150 rounded-[8px] shadow-[0px_0px_6px] shadow-black/10'>
          <p
            style={font.style}
            className='text-binance_green text-xs leading-normal lg:text-[24px] font-bold'
          >
            Sign Up Free
          </p>
          <Image
            src={"/assets/icons/right_arr_green.svg"}
            width={24}
            height={24}
            alt='arr'
            className='hidden lg:flex'
          />
        </button>
      </div>
    </>
  );
}
