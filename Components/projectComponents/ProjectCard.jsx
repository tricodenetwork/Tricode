import { talents } from "@/Data/data";
import Image from "next/image";
import React from "react";

const ProjectCard = ({ items }) => {
  return (
    <div className=' w-[450px] xxl:w-[506px] h-max mb-[5vh] shadow-[0px_4px_4px] shadow-black/25  rounded-[15px] p-[2.5%] flex flex-col '>
      {/* Title */}
      <div className='border-b border-black pb-[1.5vh] w-full flex justify-between'>
        <div className='flex gap-[.5vw] items-center'>
          <h3 className='font-bold text-xl xxl:text-2xl text-[#1b1b1b]'>
            {items.name}
          </h3>
          <Image
            src={"/assets/icons/edit2.svg"}
            alt='edit'
            width={25}
            height={24.28}
          />
        </div>
        <div
          className={` ${
            items.status == "Completed".toLowerCase()
              ? "text-binance_green bg-binance_green/25"
              : items.status == "Paused"
              ? "text-appRed bg-appRed/25"
              : items.status.includes("Awaiting")
              ? "text-purple-800 bg-purple-800/25"
              : items.status == "Started"
              ? "text-cyan-400"
              : items.status == "Ongoing"
              ? "text-amber-500 bg-amber-400/25"
              : ""
          } mr-[3%] w-max px-2 capitalize flex items-center justify-center  font-medium text-xs rounded-[4px]`}
        >
          {items.status}
        </div>
      </div>
      {/* Description */}
      <p className='text-black font-medium text-[13px] leading-snug mt-[4%]'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quas
        excepturi dolorum aliquam ad dolor consequatur, omnis illo laudantium
        praesentium repudiandae vero sapiente eum modi, dolore eos ut dolores
        voluptatibus?
      </p>
      {/* DEtails */}
      <div className='w-full mt-[4%] flex items-center justify-between'>
        <div className='flex items-center gap-[.5vw]'>
          <Image
            src={"/assets/icons/hourglass.svg"}
            width={10.82}
            height={17}
            alt='glass'
          />
          <p className='font-medium text-sm text-binance_green uppercase'>
            08 APRIL 2024
          </p>
        </div>
        <div className='flex items-center gap-[.5vw]'>
          <Image
            src={"/assets/icons/folder.svg"}
            width={19.89}
            height={20.32}
            alt='folder'
          />
          <p className='font-medium text-sm text-grayText'>5 Milestones</p>
        </div>
      </div>
      {/* Talents */}
      <div className='w-[40%] h-[60px] mt-[4%] relative  flex items-center'>
        {talents.map((items, index) => {
          return (
            <div
              key={index.toString()}
              className='w-[41.25px]   absolute h-[38px]'
            >
              <Image
                style={{ left: index * 30, zIndex: index }}
                src={`/assets/images/${items}`}
                className={`object-cover border-white border-2 rounded-full`}
                fill
                alt='profile'
              />
            </div>
          );
        })}
        <div
          style={{ left: talents.length * 30, zIndex: talents.length }}
          className='text-binance_green border-white border-2 font-medium text-[15px] leading-normal w-[41.25px] rounded-full bg-[#EAFFE2] flex items-center justify-center absolute h-[38px]'
        >
          {" "}
          +2
        </div>
      </div>
      {/* View Project */}
      <div className='border-b cursor-pointer hover:text-binance_green/80 hover:border-binance_green mt-[4%] border-black pb-1 text-grayText font-medium text-sm w-max '>
        View Project
      </div>
    </div>
  );
};

export default ProjectCard;
