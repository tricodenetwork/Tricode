import Image from "next/image";
import { useState, useEffect } from "react";

export default function WhyTricode({ mobile }) {
  return (
    <>
      <section
        className="px-8 py-5 mx-auto w-full justify-center items-center"
        id="why"
      >
        <div className="text-center">
        <div className="w-[69px] h-[5px] text-center bg-binance_green justify-center items-center" />
          <span className="text-gray-900 text-[35px] font-normal font-['Inter'] leading-[55px]">
            Why{" "}
          </span>
          <span className="text-gray-900 text-[35px] font-bold font-['Inter'] leading-[55px]">
            Tricode?
          </span>
        </div>
      </section>
    </>
  );
}
