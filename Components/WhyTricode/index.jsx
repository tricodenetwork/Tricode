import Image from "next/image";
import { useState, useEffect } from "react";
import Card from "@/Components/WhyTricode/card";
import Solution_banner from "./banner";

export default function WhyTricode({ mobile }) {
  return (
    <>
      <section
        className="px-8 py-5 mx-auto w-full justify-center items-center"
        id="why"
      >
        <div className="text-center mx-auto w-full justify-center items-center">
          <hr className="w-[69px] h-[5px] mx-auto my-5 text-center bg-binance_green justify-center items-center"/>
          <span className="text-gray-900 text-2xl md:text-[35px] font-normal font-['Inter'] leading-[55px]">
            Why{" "}
          </span>
          <span className="text-gray-900 text-2xl md:text-[35px] font-bold font-['Inter'] leading-[55px]">
            Tricode?
          </span>
        </div>
        <Card />
      </section>
      <Solution_banner />
    </>
  );
}
