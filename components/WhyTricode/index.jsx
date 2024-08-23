import Image from "next/image";
import { useState, useEffect } from "react";
import Card from "@/components/WhyTricode/card";
import Solution_banner from "./banner";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function WhyTricode({ mobile }) {
  return (
    <>
      <section
        className='px-[5vw] py-5 mt-12 mx-auto w-full justify-center items-center'
        id='why'
      >
        <div className='text-center mx-auto w-full justify-center items-center'>
          <hr className='w-[69px] h-[5px] mx-auto my-5 text-center bg-binance_green justify-center items-center' />
          <span
            style={inter.style}
            className='text-[#1a202c] text-2xl md:text-[35px] font-normal leading-[55px]'
          >
            Why{" "}
          </span>
          <span
            style={inter.style}
            className='text-[#1a202c] text-2xl md:text-[35px] font-bold leading-[55px]'
          >
            Tricode?
          </span>
        </div>
        <div className='w-full flex flex-col'>
          <Card />
        </div>
      </section>
      <Solution_banner />
    </>
  );
}
