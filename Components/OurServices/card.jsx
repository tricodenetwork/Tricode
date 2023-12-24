import Image from "next/image";
import { useState, useEffect } from "react";
import { WhyTricode } from "../../Data/data";

export default function Card() {
  return (
    <>
      <section className="w-full justify-center items-center">
        <div className="px-3 md:p-[4vh] py-[3vh] flex flex-wrap justify-center items-start gap-8">
          {WhyTricode.map((info, i) => (
            <div className="flex gap-3 w-[25em] md:w-[25em] py-5 px-4 bg-neutral-50 border border-zinc-200 justify-center items-start">
              <img className="w-[52px] h-12" src={info.img} alt="" />
              <div className="font-['Poppins']">
                <div className="text-black font-bold text-base md:text-xl">
                  {info.tittle}
                </div>
                <div className="text-slate-600 text-xs md:text-sm w-full">
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
