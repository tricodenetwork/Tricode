import React from "react";
import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className='flex flex-col justify-center  items-center w-full h-full'>
      <CircleLoader
        className='w-full'
        size={30}
        loading={!false}
        color='#38A312'
      />
      {/* <p className='medium lg:text-xl mt-5 text-binance_green'>Loading</p> */}
    </div>
  );
};

export default Loader;
