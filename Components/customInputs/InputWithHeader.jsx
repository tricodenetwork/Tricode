import React from "react";

const InputWithHeader = ({ placeholder, header }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS
  return (
    <div className='mb-1'>
      <p className='light text-ash2'>{header}</p>
      <input
        type='text'
        placeholder={placeholder}
        style={{ fontSize: 16, color: "black" }}
        className='bg-white rounded-sm semiBold pb-2 my-[20px] md:my-[5px]  focus:outline-none focus:border-b-2 focus:border-binance_green w-[85%] px-2 py-1'
      />
    </div>
  );
};

export default React.memo(InputWithHeader);
