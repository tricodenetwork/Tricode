import React from "react";

const TableRow = ({ keyy, val }) => {
  return (
    <div id='table-row' className='flex  w-full justify-between'>
      <p className='medium w-[47%] text-start text-[16px] text-[#000000]'>
        {keyy}
      </p>
      <p className='medium w-[53%] text-start text-[16px] text-[#bdbdbd]'>
        {val}
      </p>
    </div>
  );
};

const GreatPayment = () => {
  return (
    <div className='w-[438px] flex flex-col justify-between items-center relative h-[515px]'>
      <div className='flex flex-col justify-between items-center mt-[48px]'>
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
        <div className='w-full flex space-y-4 mt-[17px] flex-col justify-between items-center '>
          <p className='medium text-[16px] text-grayText'>Payment successful</p>
          <p className='medium  flex flex-col text-center text-[12px] text-[#BDBDBD]'>
            <span>Your payment has been processed.</span>
            <span>The details of your transaction are below.</span>
          </p>
        </div>
      </div>
      <div
        id='Transaction'
        className='w-[289px] h-[95px]  flex flex-col justify-between'
      >
        <TableRow keyy={"Amount"} val={"£4000"} />
        <TableRow keyy={"Transaction ID"} val={"AB1234"} />
        <TableRow keyy={"Payment type"} val={"Debit/Credit Card"} />
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

export default GreatPayment;
