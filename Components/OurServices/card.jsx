import Image from "next/image";
import { useState, useEffect } from "react";
import { OurServices } from "../../Data/data";

export default function Card() {
  const getColor = (id) => {
    if (id === 1) return { background: "#F8F6EC" };
    if (id === 2) return { background: "#E7DAED" };
    if (id === 3) return { background: "#F0FFF7" };
    return { background: "#FFF4F4" };
  };

  return (
    <>
      <section className='w-full justify-center flex flex-col  mt-[50px] items-center'>
        <div className='flex flex-col w-full lg:w-[85%] px-1 md:p-[4vh] self-center  py-[3vh] justify-center items-center gap-8'>
          {OurServices.map((info, i) => (
            <div
              key={i + 1}
              className='flex w-full  mb-5 self-center mx-auto gap-4 md:gap-12 justify-between items-center'
            >
              <div className='w-[115px] h-[90px] lg:w-[394px] relative lg:h-[293px]'>
                <Image
                  fill
                  className='object-cover'
                  src={info.img}
                  alt='service_image'
                />
              </div>
              <div
                style={{ ...getColor(info.id, info.tittle) }}
                className='flex flex-col  w-[60vw]  lg:w-[60%] h-[129px] md:h-[200px] lg:h-[416px] py-6 lg:py-[150px] lg:px-[90px] px-3 md:px-6 bg-neutral-50 border border-zinc-200 justify-center items-start rounded-r-[8px] lg:rounded-r-[30px]'
              >
                <div className='text-black font-bold text-sm mb-[8px] lg:mb-[30px] md:text-[25px] leading-[30px]'>
                  {info.tittle}
                </div>
                <div className='text-slate-600 text-xs md:text-sm lg:w-[70%]'>
                  {info.descr}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
