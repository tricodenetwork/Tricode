import AuthComponent from "@/components/AuthComponent";
import Link from "next/link";
import InputLine from "@/components/InputLine";
import { useState } from "react";
import Sidebar from "@/Components/layouts/Sidebar";
import Image from "next/image";

const Index = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      <div className='flex min-h-screen  items-center'>
        <Sidebar Header="Welcome Back" />
        <div className='bg-midorang mx-auto login min-h-max flex flex-col px-3 justify-center items-center'>
          <h3>Forgot password?</h3>
          <div className="mt-5">
            <div class="text-black text-left text-xl font-bold">Choose how you want to log in</div>
            <div className="flex w-[100%] mt-3 bg-neutral-100 rounded-[10px] justify-between items-center border border-zinc-300">
              <div className="px-5 py-[5px]">
                <div className="text-black text-lg font-semibold">Send an email to</div>
                <input
                  type='text'
                  placeholder="Email"
                  className='border-b-2 bg-neutral-100 border-gray-400 focus:outline-none focus:border-b-2 focus:border-binance_green w-full'
                />
              </div>
              <Link href='/sms-verification'>
                <div className="w-[106px] h-[82px] md:h-[90px] bg-zinc-300 rounded-tr-[10px] justify-center items-center rounded-br-[10px] border border-zinc-300">
                  <div className="w-9 h-9 m-7">
                    <Image
                      alt='logo'
                      width={80}
                      height={40}
                      quality={100}
                      className='w-[10vw]'
                      src='/assets/icons/arrow-right-alt.svg'
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex w-[100%] mt-3 bg-neutral-100 rounded-[10px] justify-between items-center border border-zinc-300">
              <div className="px-5 py-[5px]">
                <div className="text-black text-lg font-semibold">Send a message to</div>
                <input
                  type='number'
                  placeholder="Phone number"
                  className='border-b-2 bg-neutral-100 border-gray-400 focus:outline-none focus:border-b-2 focus:border-binance_green w-full'
                />
              </div>
              <Link href='/sms-verification'>
                <div className="w-[106px] h-[82px] md:h-[90px] bg-zinc-300 rounded-tr-[10px] justify-center items-center rounded-br-[10px] border border-zinc-300">
                  <div className="w-9 h-9 m-7">
                    <Image
                      alt='logo'
                      width={80}
                      height={40}
                      quality={100}
                      className='w-[10vw]'
                      src='/assets/icons/arrow-right-alt.svg'
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
