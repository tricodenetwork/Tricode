import Image from "next/image";
import { useState, useEffect } from "react";
import { WhyTricode } from "../../Data/data";

export default function OurClients() {
  return (
    <>
      <section className="w-full justify-center items-center" id="ourClients">
        <div className="flex px-1 md:p-[2vh] py-[3vh] flex flex-wrap justify-center items-start gap-8 md:gap-12">
          <div className="justify-center items-center">
            <div className="text-center text-binance_green text-2xl md:text-4xl font-bold font-['Istok Web']">
              782
            </div>
            <div className="text-center text-zinc-600 text-xs md:text-base font-bold font-['Istok Web']">
              WORLDWIDE CUSTOMERS
            </div>
          </div>
          <div className="justify-center items-center">
            <div className="text-center text-binance_green text-2xl md:text-4xl font-bold font-['Istok Web']">
              12K
            </div>
            <div className="text-center text-zinc-600 text-xs md:text-base font-bold font-['Istok Web']">
              PROJECTS DONE
            </div>
          </div>
          <div className="justify-center items-center">
            <div className="text-center text-binance_green text-2xl md:text-4xl font-bold font-['Istok Web']">
              5K
            </div>
            <div className="text-center text-zinc-600 text-xs md:text-base font-bold font-['Istok Web']">
              IT PRODUCTS
            </div>
          </div>
          <div className="justify-center items-center">
            <div className="text-center text-binance_green text-2xl md:text-4xl font-bold font-['Istok Web']">
              $890K
            </div>
            <div className="text-center text-zinc-600 text-xs md:text-base font-bold font-['Istok Web']">
              AMOUNT SPEND
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center space-x-4 mt-[0vh] md:space-x-6 md:mt-[3vh]`}
        >
          <button className="font-medium hover:bg-opacity-70 hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-black px-[7vw] py-[1.5vh] rounded-lg bg-binance_green text-white">
            HIRE
          </button>
          <button className="font-medium hover:bg-opacity-70 hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-binance_green px-[7vw] py-[1.5vh] rounded-lg bg-black text-white">
            JOIN
          </button>
        </div>
      </section>
    </>
  );
}
