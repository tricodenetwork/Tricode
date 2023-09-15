import React from "react";
import { useRouter } from "next/router";

const Button = ({ Action, styles }) => {
  return (
    <div
      className={`${styles} rounded-3xl button py-2 cursor-pointer bg-binance_green text-center`}
    >
      {Action}
    </div>
  );
};

export default Button;

export function BackButton(params) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className=' border-[#38A312] font-bold text-[#38A312] rounded-full border px-8 py-2'
    >
      Back
    </button>
  );
}
