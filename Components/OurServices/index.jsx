import Image from "next/image";
import { useState, useEffect } from "react";
import Card from "./card";
import OurClients from "./OurClients";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function OurServices({ mobile }) {
  return (
    <section
      className=' lg:px-8 overflow-hidden py-5 mt-12 lg:mx-auto w-full justify-center items-center'
      id='services'
    >
      <div className='text-center px-[5vw] mx-auto w-full justify-center items-center'>
        <hr className='w-[69px] h-[5px] mx-auto my-5 text-center bg-binance_green justify-center items-center' />
        <span
          style={inter.style}
          className='text-gray-900 text-2xl md:text-[35px] font-normal leading-[55px]'
        >
          Our{" "}
        </span>
        <span
          style={inter.style}
          className='text-gray-900 text-2xl md:text-[35px] font-bold leading-[55px]'
        >
          Services
        </span>
      </div>
      <Card />
      <OurClients />
    </section>
  );
}
