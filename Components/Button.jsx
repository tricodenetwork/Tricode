import React from "react";
import { useRouter } from "next/router";

const Button = ({ Action, styles }) => {
  return (
    <button
      type='submit'
      className={`${styles} rounded-3xl button py-2 cursor-pointer bg-binance_green text-center`}
    >
      {Action}
    </button>
  );
};

export default Button;

export function BackButton(params) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className='  border-binance_green light text-binance_green hover:bg-binance_green hover:text-white duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border'
    >
      Back
    </button>
  );
}
