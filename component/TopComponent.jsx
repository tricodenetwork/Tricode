import Image from "next/image";
import React from "react";

const TopComponent = ({ item }) => {
  return (
    <div className='w-max flex-1 rounded-[8px] hover:cursor-pointer bg-gradient-to-tr bg-opacity-10 from-[#efefef] hover:scale-95 hover:from-appBlue hover:to-binance_green duration-100 ease-in to-appOrange/50 flex h-auto '>
      <div className='flex-1 flex px-[1vw] m-[1px] h-[133px] items-center rounded-[6px] bg-white'>
        <div className=' relative h-[48px] 2xl:w-[56px] w-[48px] 2xl:h-[56px]'>
          <Image fill className='mx-auto' alt='icon' src={item.icon} />
        </div>
        <div className='flex mx-auto flex-col'>
          <p className='semiBold text-xl 2xl:text-2xl'>{item.num}</p>
          <p className='text-grayText text-sm 2xl:text-base text-nowrap regular'>
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopComponent;
