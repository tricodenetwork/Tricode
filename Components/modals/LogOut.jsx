import { baseUrl } from "@/config/config";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const LogOut = () => {
  const router = useRouter();
  const leave = async () => {
    await signOut({ callbackUrl: `${baseUrl}/auth/login` });
  };

  return (
    <div className='flex w-[438px] h-[515px] flex-col justify-center items-center space-y-3'>
      <p className='medium text-2xl text-grayText'>Log Out</p>
      <p className='medium text-[16px] text-[#bdbdbd]'>
        Do you really want to log out?
      </p>
      <div className='space-x-[20px]'>
        <button
          onClick={() => router.back()}
          className='w-[145px] h-[37px] border border-binance_green bg-white hover:bg-binance_green duration-300 hover:text-white text-binance_green rounded-3xl'
        >
          No
        </button>
        <button
          onClick={leave}
          className='w-[145px] h-[37px] border hover:scale-110 border-binance_green hover:bg-white hover:text-binance_green duration-300 bg-binance_green text-white rounded-3xl'
        >
          Yes, Log me out
        </button>
      </div>
    </div>
  );
};

export default LogOut;
