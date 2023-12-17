import Image from "next/image";
import { useState, useEffect } from "react";

export default function JoinTricode({ mobile }) {
  return (
    <>
      <section
        className="px-8 py-5 w-full justify-center items-center"
        id="join"
      >
        <div className="justify-center items-center w-full mt-12 gap-[19vh] inline-flex">
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <div className="text-binance_green text-3xl md:text-5xl font-semibold font-['Poppins'] tracking-wide">
              Join Tricode
            </div>
            <div className="text-zinc-500 text-base font-['Poppins'] leading-6 tracking-tight">
              Get a partner who understands the dynamic world of technology and
              innovation.  Tricode is your gateway to harnessing the full
              potential of cutting-edge tech solutions.
            </div>
            <button className="font-medium mt-9 hover:bg-opacity-70 hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-binance_green px-[7vw] py-[1.5vh] rounded-lg bg-black text-white">
              JOIN
            </button>
          </div>
          <div className="">
            <img className="w-[70vh] h-[40vh]" src="/assets/lottie/join.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
