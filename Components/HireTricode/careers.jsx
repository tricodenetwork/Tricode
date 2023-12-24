import Image from "next/image";
import { useState, useEffect } from "react";
import { careers } from "../../Data/data";

export default function Careers() {
  return (
    <>
      <section className="w-full justify-center items-center" id="careers">
        <div className="px-3 md:p-[4vh] py-[4vh] bg-[#92BE82] flex flex-wrap justify-center items-start gap-8">
          {careers.map((careers_info, i) => (
            <div className="w-[21em] py-5 bg-white rounded-[5px] shadow justify-center items-center flex">
              <div className="text-neutral-700 text-base md:text-[18px] font-semibold font-['Poppins']">
                {careers_info.tittle}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
