import React from 'react';
import { useRouter } from 'next/router';

const InputLine = ({ placeholder }) => {
  // --------------------------------------------VARIABLES
  const location = useRouter();
  const isRegister = location.pathname === `/register`;

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS
  return (
    <input
      type='text'
      placeholder={placeholder}
      className={`border-b-2 ${isRegister ? "my-[8px] md:my-[5px]" : "my-[20px] md:my-[10px] pb-2"}
      border-gray-400 focus:outline-none focus:border-b-2 
      focus:border-binance_green w-full px-2 py-1`}
    />
  );
};

export default React.memo(InputLine);
