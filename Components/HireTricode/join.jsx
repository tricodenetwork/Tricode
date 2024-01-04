import Image from "next/image";
import { useState, useEffect } from "react";

export default function JoinTricode({ mobile }) {
  return (
    <>
      <section
        className="px-8 py-5 mb-8 w-full justify-center items-center"
        id="join"
      >
        <div className="flex flex-col md:flex-row justify-center items-center w-full mt-12 gap-4 md:gap-[19vh]">
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <div className="text-binance_green text-2xl md:text-6xl font-semibold font-['Poppins'] tracking-wide">
              Join Tricode
            </div>
            <div className="text-zinc-500 text-xs md:text-base leading-6 tracking-tight">
              Get a partner who understands the dynamic world of technology and
              innovation. <br/> Tricode is your gateway to harnessing the full
              potential of cutting-edge tech solutions.
            </div>
            <button className="font-bold mt-9 hover:bg-opacity-70 hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-binance_green px-[7vw] py-[1.5vh] rounded-lg bg-black text-white">
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
