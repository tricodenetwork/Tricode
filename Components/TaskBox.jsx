import Image from "next/image";
import React from "react";

const TaskBox = ({ style = "bg-[#FCDFDF]", heading = "To Do" }) => {
  return (
    <div className={`w-[30%] ${style} p-6 h-[600px]   rounded-3xl`}>
      <h4 className='semiBold w-full mb-6 text-center  text-2xl text-[#1b1b1b]'>
        {heading}
      </h4>
      <div className='h-auto flex flex-col justify-between w-full shadow-[0px_4px_4px_#0000000d] bg-white rounded-[20px] p-6'>
        <div className='flex  items-center justify-between'>
          <p className='text-[#666666] text-xs'>#PMM100</p>
          <Image
            src={"/assets/icons/menu.svg"}
            width={20}
            height={20}
            alt='menu'
            className='relative left-2'
          />
        </div>
        <h6 className='text-[#1b1b1b] text-sm Bold mt-[2px] mb-2'>
          Update documentation based on feedback
        </h6>
        <p className='text-[#1b1b1b] text-xs'>
          Complete the prototyping of the designed mobile screens
        </p>
        <div className='flex items-center mt-6 justify-between'>
          <Image
            src={"/assets/images/prof.svg"}
            alt='manager'
            width={21.71}
            height={20}
          />
          <div className='flex gap-[7.33px] relative left-4  items-center'>
            <Image
              src={"/assets/icons/message_small.svg"}
              alt='message'
              width={13.33}
              height={13.33}
            />
            <p className='text-[#bdbdbd] text-xs'>4</p>
          </div>
          <p className='text-[#666666]  regular text-xs'>15/04/2024</p>
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
