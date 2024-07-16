import React from "react";

const Status = ({ item, style }) => {
  return (
    <div
      className={` ${
        item.status == "Completed".toLowerCase()
          ? "text-binance_green bg-binance_green/25"
          : item.status == "Paused"
          ? "text-appRed bg-appRed/25"
          : item.status == "Pending"
          ? "text-appRed bg-appRed/25"
          : item.status == "Planned"
          ? "text-slate-600 bg-slate-600/25"
          : item?.status?.includes("Awaiting")
          ? "text-purple-800 bg-purple-800/25"
          : item.status == "Started"
          ? "text-cyan-400"
          : item.status == "Ongoing"
          ? "text-amber-500 bg-amber-400/25"
          : ""
      } ${style} w-max px-2 capitalize flex items-center justify-center  font-medium text-xs rounded-[4px]`}
    >
      {item.status}
    </div>
  );
};

export default Status;
