import React from "react";

const Pay = ({ active = false }) => {
  let color = !active ? "#101828" : "white";

  return (
    <svg
      width='24'
      height='18'
      viewBox='0 0 24 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 7H23M3 1H21C22.1046 1 23 1.89543 23 3V15C23 16.1046 22.1046 17 21 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1Z'
        stroke='#AAB2C8'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Pay;
