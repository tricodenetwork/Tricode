import React from "react";
import SearchComponent from "../editor/SearchComponent";
import Image from "next/image";

const AddTalentsComponent = () => {
  return (
    <div className='w-[294px] absolute -right-[25%] z-20 bg-white top-4 shad rounded-lg h-[385px]'>
      <SearchComponent />
      <div className='px-6'>
        <div className='flex items-center gap-5 my-4 justify-start '>
          <div className='w-[32px] relative h-[32px]'>
            <Image
              src={"/assets/images/team.png"}
              fill
              alt='profile_pic'
              className='object-cover'
            />
          </div>
          <div className=''>
            <p className='capitalize medium'>Janet Doe</p>
            <p className='regular text-xs text-[#666666]'>UI/UX Designer</p>
          </div>
          <div className='w-[18px] absolute right-4 h-[18px]'>
            <Image src={"/assets/icons/arr.svg"} alt='arr' fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTalentsComponent;
