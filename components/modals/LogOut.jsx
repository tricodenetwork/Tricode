import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
export const baseUrl =
  process.env.NODE_ENV == "production"
    ? "https://www.tricode.pro/"
    : "http://localhost:3000/";

const LogOut = () => {
  const router = useRouter();
  const leave = async () => {
    await signOut({ callbackUrl: `${baseUrl}auth/login` });
    router.replace(`${baseUrl}auth/login`);
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
          className='w-[145px] h-[37px] border hover:scale-90 active:scale-100 border-binance_green bg-white  duration-150  text-binance_green rounded-3xl'
        >
          No
        </button>
        <button
          onClick={leave}
          className='w-[145px] h-[37px] border hover:scale-90 active:scale-100 border-binance_green  duration-150 bg-binance_green text-white rounded-3xl'
        >
          Yes, Log me out
        </button>
      </div>
    </div>
  );
};

export default LogOut;
