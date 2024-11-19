import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const MenuList = ({ Icon, name, isOpen, show }) => {
  const route = useRouter();
  const routeName = route.pathname.split("/").pop();
  const active =
    name === "Dashboard" && route.pathname === "/"
      ? true
      : routeName.toLowerCase().includes(name.toLowerCase());
  const projectId = route?.query?.projectId;

  return (
    <div className='w-full  flex items-center  min-h-[8vh] relative'>
      <div
        className={`w-[4px]  ${
          isOpen && active ? "bg-white lg:bg-binance_green" : ""
        } rounded-sm bg-binance_green h-[95%] ${
          active ? "flex" : "hidden"
        } absolute -left-[2px] self`}
      ></div>
      <div
        className={`flex ${isOpen ? "flex" : "hidden"} ${
          isOpen && active ? "bg-white lg:bg-binance_green" : ""
        } ${
          active
            ? " bg-binance_green hover:scale-110  cursor-pointer shadow-sm shadow-binance_brightash"
            : "bg-transparent"
        } px-2 w-[85%] max-w-[250px] duration-300 flex items-center justify-start ml-[1vw] rounded-lg pl-[1.5vw] py-4`}
      >
        <div className='mr-4 w-[28px] hidden lg:flex justify-start items-center border-2 border-opacity-0 border-transparent h-[24px]'>
          <Icon active={active} />
        </div>
        {name == "Logout" ? (
          <button onClick={show}>
            <p
              className={`listitem hover:scale-110 hover:text-[#d7d7d7]  duration-200 ${
                active
                  ? "text-binance_green lg:text-white"
                  : "text-binance_green"
              } ${isOpen && active ? "text-binance_green lg:text-white" : ""} ${
                isOpen && !active ? "text-white lg:text-binance_green" : ""
              }`}
            >
              {name}
            </p>
          </button>
        ) : (
          <Link
            href={
              name.toLowerCase() == "dashboard" ? "/" : `/${name.toLowerCase()}`
            }
          >
            <p
              className={`listitem hover:scale-110 hover:text-[#d7d7d7]  duration-200 ${
                active
                  ? "text-binance_green lg:text-white"
                  : "text-binance_green"
              } ${isOpen && active ? "text-binance_green lg:text-white" : ""} ${
                isOpen && !active ? "text-white lg:text-binance_green" : ""
              }`}
            >
              {name}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenuList;
