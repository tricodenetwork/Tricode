import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { IconWifi } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import { IconWand } from "@tabler/icons-react";
import HireCard from "./card";

export default function HireTricode({ mobile }) {
  return (
    <>
      <section
        className="px-8 py-5 w-full bg-gradient-to-l from-[#BBD2B3] to-stone-100 overflow-hidden justify-center items-center"
        id="intro"
      >
        <div className="px-[3vw] flex flex-col items-center border-b relative w-full md:py-5">
          <div
            className={`cButtons md:flex justify-between items-center w-full mx-[3vw]`}
          >
            <button>
              <IconWifi size={22} color="gray" stroke={2} />
              <p className={``}>Connect</p>
            </button>
            <button>
              <IconUsersGroup size={22} color="gray" stroke={2} />
              <p>Collaborate</p>
            </button>
            <button>
              <IconWand size={22} stroke={2} color="gray" />
              <p>Create</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-start items-center w-full mt-12 gap-4 md:gap-[19vh]">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-binance_green text-3xl md:text-5xl font-semibold font-['Poppins'] tracking-wide">
              Hire Tricode
            </div>
            <div className="text-zinc-500 text-base font-['Poppins'] leading-6 tracking-tight">
              Get a partner who understands the dynamic world of technology and
              innovation.  Tricode is your gateway to harnessing the full
              potential of cutting-edge tech solutions.
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
