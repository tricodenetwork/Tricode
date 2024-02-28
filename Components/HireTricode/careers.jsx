import Image from "next/image";
import { useState, useEffect } from "react";
import { careers } from "../../Data/data";

export default function Careers() {
  return (
    <>
      <section className='w-full justify-center  items-center' id='careers'>
        <div className='md:px-[4vh] py-[5vh] bg-[#92BE82] flex flex-wrap justify-center items-start gap-6'>
          {careers.map((careers_info, i) => (
            <div
              key={i + 1}
              className='w-[21em] py-5 bg-white hover:bg-binance_yellow hover:cursor-pointer hover:bg-opacity-20 duration-150 rounded-[5px] shadow justify-center items-center flex'
            >
              <div className='text-[#3d3b3b]  text-base md:text-[18px] semiBold'>
                {careers_info.tittle}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
