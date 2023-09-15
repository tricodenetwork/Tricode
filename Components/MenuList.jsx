import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const MenuList = ({ Icon, name }) => {
  const route = useRouter();
  const routeName = route.pathname.split("/menu").pop();
  const active = routeName.toLowerCase() === name.toLowerCase();

  return (
    <div className='w-full relative'>
      <div
        className={`w-[4px] rounded-sm bg-binance_green h-[95%] ${
          active ? "flex" : "hidden"
        } absolute left-[2px] self`}
      ></div>
      <div
        className={`flex ${
          active
            ? " bg-binance_green hover:scale-110  cursor-pointer shadow-sm shadow-binance_brightash"
            : "bg-transparent"
        } px-2 w-[80%] duration-300 items-center ml-[3vw] rounded-lg pl-[2vw] py-4`}
      >
        <div className='mr-4 w-[28px] flex justify-start items-center border-2 border-opacity-0 border-transparent h-[24px]'>
          <Icon active={active} />
        </div>
        <Link href={`${name.toLowerCase()}`}>
          <p
            className={`listitem hover:scale-110 hover:text-[#d7d7d7] duration-200 ${
              active ? "text-white" : "text-binance_green"
            }`}
          >
            {name}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MenuList;
