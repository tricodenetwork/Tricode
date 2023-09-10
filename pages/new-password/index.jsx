import AuthComponent from "@/components/AuthComponent";
import Link from "next/link";
import InputLine from "@/components/InputLine";
import { useState } from "react";
import Sidebar from "@/Components/layouts/Sidebar";
import Image from "next/image";
import Button from "@/Components/Button";

const Index = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      <div className='flex min-h-screen  items-center'>
        <Sidebar Header="Welcome Back" />
        <div className='bg-midorang mx-auto login min-h-max flex flex-col px-3 justify-center items-center'>
          <h3>Set New password</h3>
          <div className="mt-5">
            <div class="text-black text-2xl font-semibold">Instruction:</div>
            <div class="relative">
              <div class="flex h-6 gap-3">
                <img src="/assets/icons/mark_correct.svg" alt="" className="w-4 h-4" />
                <div class="text-zinc-500 text-base font-normal">8-32 character</div>
              </div>

              <div class="flex h-6 gap-3">
                <img src="/assets/icons/mark_correct.svg" alt="" className="w-4 h-4" />
                <div class="text-zinc-500 text-base font-normal">One upper case</div>
              </div>

              <div class="flex h-6 gap-3">
                <img src="/assets/icons/mark_correct.svg" alt="" className="w-4 h-4" />
                <div class="text-zinc-500 text-base font-normal">One lower case</div>
              </div>

              <div class="flex h-6 gap-3">
                <img src="/assets/icons/mark_correct.svg" alt="" className="w-4 h-4" />
                <div class="text-zinc-500 text-base font-normal">One special character</div>
              </div>

              <div class="flex h-6 gap-3">
                <img src="/assets/icons/mark_wrong.svg" alt="" className="w-4 h-4" />
                <div class="text-zinc-500 text-base font-normal">One numeric character</div>
              </div>
            </div>

            <InputLine placeholder={"Password*"} />
            <InputLine placeholder={"Retype password*"} />
          </div>
          <div className='w-full mt-4'>
            <Button styles={"w-[60%] md:w-full mx-auto"} Action={"Continue"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
