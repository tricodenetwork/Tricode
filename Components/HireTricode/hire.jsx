import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { IconWifi } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import { IconWand } from "@tabler/icons-react";
import HireCard from "./card";
import Connect from "./connect";

export default function HireTricode({ mobile }) {
  return (
    <>
      <Connect />
      <section
        className="px-8 py-5 w-full bg-gradient-to-l from-[#BBD2B3] to-stone-100 overflow-hidden justify-center items-center"
        id="intro"
      >
        <div className="flex flex-col md:flex-row justify-start items-center w-full mt-12 mb-6 gap-4 md:gap-[19vh]">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-binance_green text-2xl md:text-6xl font-semibold font-['Poppins'] tracking-wide">
              Hire Tricode
            </div>
            <div className="text-zinc-500 text-xs md:text-base leading-6 tracking-tight">
              Get a partner who understands the dynamic world of technology and
              innovation. 
              <br /> Tricode is your gateway to harnessing the full potential of
              cutting-edge tech solutions.
            </div>
          </div>
          <div className="">
            <img src="/assets/lottie/bro.png" alt="" />
          </div>
        </div>
        <HireCard />
      </section>
    </>
  );
}
