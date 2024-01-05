import React from "react";

const Button = ({ Action, styles }) => {
  return (
    <button
      type="submit"
      className={`${styles} rounded-3xl button py-2 cursor-pointer bg-binance_green text-center`}
    >
      {Action}
    </button>
  );
};

export default Button;
