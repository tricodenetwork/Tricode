import React from "react";

const Payment = () => {
  return (
    <div className='flex-1 flex-col  max-h-max w-[88%] self-center py-10  flex justify-start  rounded-md mr-5 '>
      <div>
        <h6 style={{ fontSize: 24 }} className='text-black mb-4 semiBold'>
          Payment Information
        </h6>
        <p style={{ fontSize: 16 }} className='regular mb-7 text-[#999999]'>
          Paying and communicating through Tricode helps ensure that you’re
          protected under our Terms of Service, Privacy Policy, cancellation and
          refund policies, satisfaction guarantee, and other safeguards. It also
          makes it easy to find and reference important session details like
          session overviews, progress tracking, reliable communication, and
          other useful information.
        </p>
      </div>
      <div className=' border-b-2 border-ash2 border-opacity-30 pb-5'>
        <h6 style={{ fontSize: 24 }} className='text-black mb-4 semiBold'>
          Saved Cards
        </h6>
        <div className='bg-[#f2f2f2] relative flex py-2 rounded-md my-5 justify-between px-2 '>
          <p style={{ fontSize: 16 }} className='regular text-[#8c8888]'>
            4418-2646-2815-2673
          </p>
          <p style={{ fontSize: 16 }} className='regular text-[#8c8888]'>
            5/23
          </p>
          <p style={{ fontSize: 16 }} className='regular text-[#8c8888]'>
            758
          </p>
          <p
            style={{ fontSize: 12 }}
            className='self-center duration-75 semiBold hover:scale-110 hover:opacity-50 cursor-pointer absolute -right-12 text-[#c71a1a]'
          >
            Delete
          </p>
        </div>
      </div>
      <div className='my-4'>
        <p style={{ fontSize: 18 }} className='light mb-3'>
          Add New Card +
        </p>
        <p style={{ fontSize: 18 }} className='regular mb-1 text-[#8c8888]'>
          Card Holders Name
        </p>
        <input
          type='text'
          className='w-[270px] px-2 py-1 border outline-ash rounded-md'
        />
      </div>
      <div className='my-4  border-b-2 border-ash2 border-opacity-30 pb-10 w-full'>
        <p style={{ fontSize: 18 }} className='light mb-3'>
          Card Details
        </p>
        <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0  justify-between w-full '>
          <div>
            <p style={{ fontSize: 18 }} className='regular mb-1 text-[#8c8888]'>
              Card Number
            </p>
            <input
              type='text'
              className='w-[270px] px-2 py-1 border outline-ash rounded-md'
            />
          </div>
          <div>
            <p style={{ fontSize: 18 }} className='regular mb-1 text-[#8c8888]'>
              MM/YY
            </p>
            <input
              type='text'
              className='w-[70px] px-2 py-1 border outline-ash rounded-md'
            />
          </div>
          <div className='relative flex flex-col'>
            <p style={{ fontSize: 18 }} className='regular mb-1 text-[#8c8888]'>
              CVV
            </p>
            <input
              type='text'
              className='w-[70px] px-2 py-1 border outline-ash rounded-md'
            />
            <p
              style={{ fontSize: 12 }}
              className='semiBold hover:scale-110  duration-75 hover:opacity-50 cursor-pointer absolute top-[55%] right-0 lg:-right-12 text-[#288893]'
            >
              Save
            </p>
          </div>
        </div>
      </div>
      <div>
        <h6 style={{ fontSize: 24 }} className='text-black mb-4 semiBold'>
          Push Notifications
        </h6>
        <p style={{ fontSize: 16 }} className='regular mb-7 text-[#999999]'>
          Receive new messages, scheduling requests, and other reminders related
          to workinging with Tricode.
        </p>
        <div className='flex space-x-7'>
          <div className='flex'>
            <input
              id='emailOption'
              className='mr-3 bg-binance_brightash'
              type='radio'
              name='contactMethod'
            />
            <label
              htmlFor='emailOption'
              style={{ fontSize: 16 }}
              className='light text-black'
            >
              Email
            </label>
          </div>
          <div className='flex'>
            <input
              id='textOption'
              className='mr-3 bg-binance_brightash'
              type='radio'
              name='contactMethod'
            />
            <label
              htmlFor='textOption'
              style={{ fontSize: 16 }}
              className='light text-black'
            >
              Text Message
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
