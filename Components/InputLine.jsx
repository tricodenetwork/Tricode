import React from "react";

const InputLine = ({ placeholder }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS
  return (
    <input
      type='text'
      placeholder={placeholder}
      className='border-b-2 pb-2 my-[20px] md:my-[10px] border-gray-400 focus:outline-none focus:border-b-2 focus:border-binance_green w-full px-2 py-1'
    />
  );
};

export default React.memo(InputLine);
