import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SettingsNav = ({ Icon, name }) => {
  const route = useRouter();
  const routeName = route.pathname.split("/settings/").pop();
  const active = name.toLowerCase().includes(routeName.toLowerCase());

  return (
    <div className='w-full relative'>
      <div
        className={`flex ${
          active
            ? " bg-[#f2f2f2] hover:scale-110  cursor-pointer"
            : "bg-transparent"
        } pl-8 pr-4 w-full duration-300 justify-between items-center rounded-xl py-4`}
      >
        <div className='mr-4 w-[28px] flex justify-start items-center border-2 border-opacity-0 border-transparent h-[24px]'>
          <Icon active={active} />
        </div>
        <Link style={{ flex: 1 }} href={`${name.toLowerCase().split(" ")[0]}`}>
          <p
            style={{ fontSize: 16, fontFamily: "Poppins-SemiBold" }}
            className={`listitem  flex-1 hover:scale-110 relative hover:left-4 text-ash2 hover:text-[#d7d7d7] duration-200`}
          >
            {name}
          </p>
        </Link>
        <ArrowForwardIosIcon sx={{ fontSize: 18, color: "#aab2c8" }} />
      </div>
    </div>
  );
};

export default SettingsNav;
