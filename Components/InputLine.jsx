import React from "react";

const InputLine = ({ placeholder, styles }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS
  return (
    <input
      type='text'
      placeholder={placeholder}
      className={`border-b-2 ${styles} pb-2 my-[20px] md:my-[10px] border-gray-400 focus:outline-none focus:border-b-2 focus:border-binance_green px-2 py-1`}
    />
  );
};

export default React.memo(InputLine);
