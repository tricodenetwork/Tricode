import React, { useState } from "react";
import SearchComponent from "../editor/SearchComponent";
import Image from "next/image";
import { motion } from "framer-motion";

const AddTalentsComponent = ({
  talents = [0, 1],
  addTalent,
  style = "absolute right-0 top-0 w-[25vw] max-h-[380px] overflow-y-scroll",
}) => {
  const [search, setSearch] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0, right: -50 }}
      animate={{ opacity: 1, right: 0 }}
      exit={{ opacity: 0, right: -50 }}
      transition={{ duration: 0.2 }}
      className={` ${style}  z-[100]  bg-white shad rounded-lg h-auto`}
    >
      <SearchComponent
        setSearch={setSearch}
        style='bg-white lg:w-[98%] mx-auto shadow-none border-b border-[#d4d4d4]'
      />
      <div className='overflow-y-scroll h-[88%]'>
        {talents
          .filter(
            (item) =>
              item?.name?.toLowerCase().includes(search.toLowerCase()) ||
              item?.dept?.toLowerCase().includes(search.toLowerCase())
          )
          .map((items, i) => (
            <button
              onClick={() => addTalent(items)}
              key={i.toString()}
              className='flex items-center z-[100] w-full hover:bg-slate-200 rounded-[4px] hover:cursor-pointer gap-7 p-4 justify-start '
            >
              <div className='w-[32px]  rounded-full  relative top-[2px] h-[32px]'>
                <Image
                  src={items.image ?? "/assets/images/team.png "}
                  fill
                  alt='profile_pic'
                  className='object-cover rounded-full relative '
                />
              </div>
              <div className='w-[80%] flex flex-col items-start'>
                <p title={items.name} className='capitalize medium'>
                  {items.name.toLowerCase()}
                </p>
                <p className='regular text-xs text-[#666666]'>{items.dept}</p>
              </div>
              <div className='w-[18px] relative  h-[18px]'>
                <Image src={"/assets/icons/arr.svg"} alt='arr' fill />
              </div>
            </button>
          ))}
      </div>
    </motion.div>
  );
};

export default AddTalentsComponent;
