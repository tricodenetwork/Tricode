import React from "react";

const LogOut = () => {
  return (
    <div className='flex w-[438px] h-[515px] flex-col justify-center items-center space-y-3'>
      <p className='medium text-2xl text-grayText'>Log Out</p>
      <p className='medium text-[16px] text-[#bdbdbd]'>
        Do you really want to log out?
      </p>
      <div className='space-x-[20px]'>
        <button className='w-[145px] h-[37px] border border-binance_green bg-white text-binance_green rounded-3xl'>
          No
        </button>
        <button className='w-[145px] h-[37px] border border-binance_green bg-binance_green text-white rounded-3xl'>
          Yes, Log me out
        </button>
      </div>
    </div>
  );
};

export default LogOut;
