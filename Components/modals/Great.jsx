import React from "react";
import GreatText from "./GreatText";
const Great = () => {
  return (
    <div className='w-[438px] bg-binance_ash flex flex-col justify-between items-center relative h-[429px]'>
      <div className='flex flex-col justify-between items-center mt-[64px]'>
        <div
          id='Image_div'
          className='flex mb-[10px] items-center justify-center max-w-max max-h-max relative'
        >
          <img className='z-10' src='/assets/icons/Vector.png' alt='Circle' />
          <img
            className='absolute'
            src='/assets/icons/Vector-1.png'
            alt='Checkmark'
          />
        </div>
        <p className='medium text-dark_blue text-[24px]'>Great!</p>
        <GreatText />
      </div>
      <div
        style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
        className='w-full flex justify-center items-center h-[64px] bg-[#e0e0e0]'
      >
        <button
          style={{ borderRadius: 50 }}
          className='w-[145px] h-[37px] text-binance_green bg-white border border-binance_green '
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Great;
