import { talents } from "@/Data/data";
import Image from "next/image";
import React from "react";

const TeamMembers = ({ team }) => {
  return (
    <div className='w-[40%] h-[60px] relative  flex items-center'>
      {team?.map((item, index) => {
        return (
          <div
            key={index.toString()}
            className='w-[41.25px]   absolute h-[38px]'
          >
            <Image
              style={{ left: index * 30, zIndex: index }}
              src={item?.image ?? "/assets/images/team.png"}
              className={`object-cover bg-cover border-white border-2 rounded-full`}
              fill
              alt='profile'
            />
          </div>
        );
      })}
      {team?.length > 5 && (
        <div
          style={{ left: team?.length * 30, zIndex: team?.length }}
          className='text-binance_green border-white border-2 font-medium text-[15px] leading-normal w-[41.25px] rounded-full bg-[#EAFFE2] flex items-center justify-center absolute h-[38px]'
        >
          {`+${team.length - 5}`}
        </div>
      )}
    </div>
  );
};

export default TeamMembers;
