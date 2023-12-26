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
        <div
          className={`flex flex-col md:flex-row gap-7 justify-center md:justify-between items-center border-b w-full py-7`}
        >
          <button className="flex flex-col-reverse md:flex-row gap-3 justify-center items-center">
            <div className="text-center justify-center items-center">
              <div className="text-gray-900 text-2xl font-semibold font-['Poppins']">
                Connect
              </div>
              <div className="w-[206px] text-gray-900 text-sm font-normal font-['Plus Jakarta Sans'] leading-normal">
                Connect with us to get your ideas to reality
              </div>
            </div>
            <img
              src="/assets/icons/airdrop.svg"
              className="bg-[#888484] p-3 rounded-[30px]"
              alt=""
            />
          </button>
          <button className="flex flex-col-reverse md:flex-row gap-3 justify-center items-center">
            <div className="text-center justify-center items-center">
              <div className="text-gray-900 text-2xl font-semibold font-['Poppins']">
                Collaborate
              </div>
              <div className="w-[206px] text-gray-900 text-sm font-normal font-['Plus Jakarta Sans'] leading-normal">
                Collaborate with a team to get solutions to any question
              </div>
            </div>
            <img
              src="/assets/icons/airdrop.svg"
              className="bg-[#888484] p-3 rounded-[30px]"
              alt=""
            />
          </button>
          <button className="flex flex-col-reverse md:flex-row gap-3 justify-center items-center">
            <div className="text-center justify-center items-center">
              <div className="text-gray-900 text-2xl font-semibold font-['Poppins']">
                Create
              </div>
              <div className="w-[206px] text-gray-900 text-sm font-normal font-['Plus Jakarta Sans'] leading-normal">
                Create immediately and iterate quickly
              </div>
            </div>
            <img
              src="/assets/icons/airdrop.svg"
              className="bg-[#888484] p-3 rounded-[30px]"
              alt=""
            />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-start items-center w-full mt-12 gap-4 md:gap-[19vh]">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-binance_green text-2xl md:text-6xl font-semibold font-['Poppins'] tracking-wide">
              Hire Tricode
            </div>
            <div className="text-zinc-500 text-xs md:text-base leading-6 tracking-tight">
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
