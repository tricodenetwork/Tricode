import React from "react";
import { useRouter } from "next/router";
import Loading from "./Loading";

const Button = ({ Action, styles, click, isLoading }) => {
  if (isLoading) {
    return (
      <button
        onClick={click}
        type='submit'
        className={`${styles} rounded-3xl button hover:bg-binance_ash bg-opacity-30 border-binance_green border py-2 bg-binance_ash  cursor-wait`}
      >
        <Loading loading={isLoading} />
      </button>
    );
  } else {
    return (
      <button
        onClick={click}
        type='submit'
        className={`${styles} rounded-3xl button py-2 cursor-pointer hover:bg-white duration:300 hover:text-binance_green hover:border-binance_green border bg-binance_green text-center`}
      >
        {Action}
      </button>
    );
  }
};

export default Button;
