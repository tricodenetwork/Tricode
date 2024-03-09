import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { IconWifi } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import { IconWand } from "@tabler/icons-react";
import HireCard from "./card";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["cyrillic-ext", "latin"] });

export default function Connect({ mobile }) {
  return (
    <section
      className='lg:pb-[10px] px-8 xl:px-[3vh] py-10 w-full bg-gradient-to-b lg:bg-gradient-to-r from-stone-100 to-[#BBD2B3] overflow-hidden justify-center items-center'
      id='intro'
    >
      <div
        className={`flex flex-col lg:flex-row gap-7 sm:gap-12 lg:gap-3 justify-center lg:justify-between items-center w-full py-7`}
      >
        <button className='flex flex-col-reverse lg:flex-row gap-3 justify-center items-center'>
          <div className='text-center justify-center items-center'>
            <div className='text-gray-900 text-2xl semiBold'>Connect</div>
            <div
              style={font.style}
              className='w-[206px] text-gray-900 text-sm font-normal  leading-normal'
            >
              Connect with us to get your ideas to reality
            </div>
          </div>
          <div className='relative w-[78px]  flex items-center justify-center h-[78px] p-3'>
            <div className='w-[78px] h-[78px] bg-[#222222] absolute opacity-[0.14] rounded-[30px] '></div>
            <Image
              width={37.44}
              height={37.44}
              src='/assets/icons/airdrop.svg'
              className='z-10'
              alt='icons'
            />
          </div>
        </button>

        <img
          src='/assets/icons/sideLine.svg'
          className='lg:w-[6rem] xl:w-auto hidden lg:flex'
          alt=''
        />

        <button className='flex flex-col-reverse lg:flex-row gap-3 justify-center items-center'>
          <div className='text-center justify-center items-center'>
            <div className='text-gray-900 text-2xl semiBold'>Collaborate</div>
            <div
              style={font.style}
              className='w-[206px] text-gray-900 text-sm font-normal  leading-normal'
            >
              Collaborate with a team to get solutions to any question
            </div>
          </div>
          <div className='relative w-[78px]  flex items-center justify-center h-[78px] p-3'>
            <div className='w-[78px] h-[78px] bg-[#222222] absolute opacity-[0.14] rounded-[30px] '></div>
            <Image
              width={37.44}
              height={37.44}
              src='/assets/icons/share.svg'
              className='z-10'
              alt='icons'
            />
          </div>
        </button>

        <img
          src='/assets/icons/sideLine.svg'
          className='lg:w-[6rem] xl:w-auto hidden lg:flex'
          alt=''
        />

        <button className='flex flex-col-reverse lg:flex-row gap-3 justify-center items-center'>
          <div className='text-center justify-center items-center'>
            <div className='text-gray-900 text-2xl semiBold'>Create</div>
            <div
              style={font.style}
              className='w-[206px] text-gray-900 text-sm font-normalleading-normal'
            >
              Create immediately and iterate quickly
            </div>
          </div>
          <div className='relative w-[78px]  flex items-center justify-center h-[78px] p-3'>
            <div className='w-[78px] h-[78px] bg-[#222222] absolute opacity-[0.14] rounded-[30px] '></div>
            <Image
              width={37}
              height={37}
              src='/assets/icons/like.svg'
              className='z-10'
              alt='icons'
            />
          </div>
        </button>
      </div>
    </section>
  );
}
