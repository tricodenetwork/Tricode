import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Solution_banner() {
  return (
    <>
      <section className='relative mt-[5vh]  overflow-hidden' id='hero'>
        <div>
          <img
            className='h-[184px] md:h-[458px] w-full'
            src='/assets/images/solution_banner.png'
          />
        </div>
        <div className='flex flex-row ml-5 md:ml-12 absolute justify-start items-start top-[5vh] md:top-[16vh]'>
          <div className='flex flex-col mx-auto items-center md:items-start'>
            <div
              style={inter.style}
              className='w-[164px] md:w-[531px] text-white text-xs md:text-[35px] font-medium  md:leading-[55px]'
            >
              Hire the best tech solutions from around the world!
            </div>
            <div className={`flex justify-start mt-[2vh] md:mt-[3vh] w-full`}>
              <Link
                href={"/auth/register"}
                className='Bold hover:bg-opacity-70 flex justify-center hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-black px-[7vw] py-[1.5vh] rounded-lg bg-white text-black'
              >
                <button>Hire</button>
              </Link>
              {/* <button className="font-medium hover:bg-opacity-70 hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-binance_green px-[7vw] py-[1.5vh] rounded-lg bg-black text-white">
                JOIN
              </button> */}
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
