import Image from "next/image";
import { useState, useEffect } from "react";
import Card from "./card";

export default function OurServices({ mobile }) {
  return (
    <>
      <section
        className="px-8 py-5 mx-auto w-full justify-center items-center"
        id="services"
      >
        <div className="text-center mx-auto w-full justify-center items-center">
          <hr className="w-[69px] h-[5px] mx-auto my-5 text-center bg-binance_green justify-center items-center" />
          <span className="text-gray-900 text-2xl md:text-[35px] font-normal font-['Inter'] leading-[55px]">
            Our{" "}
          </span>
          <span className="text-gray-900 text-2xl md:text-[35px] font-bold font-['Inter'] leading-[55px]">
            Services
          </span>
        </div>
        <Card />
      </section>
    </>
  );
}
