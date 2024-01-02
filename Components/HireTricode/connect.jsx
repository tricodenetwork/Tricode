import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { IconWifi } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import { IconWand } from "@tabler/icons-react";
import HireCard from "./card";

export default function Connect({ mobile }) {
  return (
    <>
      <section
        className="md:mb-[0.5px] px-8 xl:px-[12vh] py-5 w-full bg-gradient-to-b md:bg-gradient-to-r from-stone-100 to-[#BBD2B3] overflow-hidden justify-center items-center"
        id="intro"
      >
        <div
          className={`flex flex-col md:flex-row gap-7 md:gap-3 justify-center md:justify-between items-center w-full py-7`}
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
              className="bg-gray-300 p-3 rounded-[30px]"
              alt=""
            />
          </button>

          <img
            src="/assets/icons/sideLine.svg"
            className="lg:w-[6rem] xl:w-auto hidden lg:flex"
            alt=""
          />

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
              src="/assets/icons/share.svg"
              className="bg-gray-300 p-3 rounded-[30px]"
              alt=""
            />
          </button>

          <img
            src="/assets/icons/sideLine.svg"
            className="lg:w-[6rem] xl:w-auto hidden lg:flex"
            alt=""
          />

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
              src="/assets/icons/like.svg"
              className="bg-gray-300 p-3 rounded-[30px]"
              alt=""
            />
          </button>
        </div>
      </section>
    </>
  );
}
