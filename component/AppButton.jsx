import Link from "next/link";
import React from "react";

const AppButton = ({ dark = true, href, title, style, action }) => {
  if (href) {
    return (
      <Link
        href={href}
        style={style}
        className={
          dark
            ? "  border-binance_green active:scale-90 regular text-binance_green hover:bg-binance_green hover:text-white duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border"
            : "  border-binance_green active:scale-90 regular text-binance_white bg-binance_green hover:bg-white hover:text-binance_green duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border"
        }
      >
        {title}
      </Link>
    );
  }
  if (action) {
    return (
      <button
        onClick={action}
        style={style}
        className={
          dark
            ? "  border-binance_green active:scale-90 regular text-binance_green hover:bg-binance_green hover:text-white duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border"
            : "  border-binance_green active:scale-90 regular text-binance_white bg-binance_green hover:bg-white hover:text-binance_green duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border"
        }
      >
        {title}
      </button>
    );
  }
};

export default AppButton;
