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
      <section className='w-full justify-center items-center'>
        <div className='flex flex-col px-1 md:p-[4vh] py-[3vh] justify-center items-start gap-8'>
          {OurServices.map((info, i) => (
            <div
              key={(i + 1).toString()}
              className='flex w-full mb-5 gap-4 md:gap-12 justify-between items-center'
            >
              <div className=''>
                <img
                  className='w-[20vh] h-[10vh] md:w-[40vh] md:h-[30vh]'
                  src={info.img}
                  alt=''
                />
              </div>
              <div
                style={{ ...getColor(info.id, info.tittle) }}
                className='flex flex-col gap-3 w-[35em] md:w-full lg:w-[50%] h-[180px] md:h-[280px] py-5 px-4 bg-neutral-50 border border-zinc-200 justify-center items-start rounded-r-[30px]'
              >
                <div className='text-black font-bold text-sm md:text-[25px] leading-[30px]'>
                  {info.tittle}
                </div>
                <div className='text-slate-600 text-xs md:text-sm w-full'>
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
