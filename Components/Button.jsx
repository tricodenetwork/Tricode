import React from "react";

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
