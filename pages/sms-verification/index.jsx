import AuthComponent from "@/components/AuthComponent";
import Link from "next/link";
import InputLine from "@/components/InputLine";
import { useState } from "react";
import Sidebar from "@/Components/layouts/Sidebar";
import Button from "@/components/Button";

const Index = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      <div className='flex min-h-screen  items-center'>
        <Sidebar Header="Welcome Back" />
        <div className='bg-midorang mx-auto login min-h-max flex flex-col px-3 justify-center items-center'>
          <h3>SMS Verification</h3>
          <div className="mt-5">
            <div className="w-[424px] text-zinc-500 text-lg font-normal">A text message with a six digit verification code has been sent to your phone number ending in X  X  X  X  X  X 6 0 9 7</div>
            <input
              type='text'
              placeholder="code"
              className='border-b-2 mt-3 bg-neutral-100 border-gray-400 focus:outline-none focus:border-b-2 focus:border-binance_green w-full'
            />
            <div class="text-binance_green mt-3 text-sm md:text-xl font-semibold">Send another code</div>
            <div className='w-full mt-4'>
              <Button styles={"w-[60%] md:w-full mx-auto"} Action={"Continue"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
