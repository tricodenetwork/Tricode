import React from "react";

const GreatText = () => {
  return (
    <div className='w-full flex space-y-4 mt-[33px] flex-col justify-between items-center '>
      <p className='medium text-[15px] text-grayText'>
        Your request has been successfully received.
      </p>
      <p className='medium w-[75%] text-center text-[12px] text-[#BDBDBD]'>
        Your new project will be reviewed and our team will contact you if we
        need more information.
      </p>
    </div>
  );
};

export default GreatText;
