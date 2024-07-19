import React from "react";

const Status = ({ item, style }) => {
  console.log("item", typeof item);
  if (!item) {
    return;
  }
  if (item.status) {
    return (
      <div
        className={` ${
          item.status.toLowerCase() == "Completed".toLowerCase()
            ? "text-binance_green bg-binance_green/25"
            : item.status.toLowerCase() == "Paused".toLowerCase()
            ? "text-appRed bg-appRed/25"
            : item.status.toLowerCase() == "Pending".toLowerCase()
            ? "text-appRed bg-appRed/25"
            : item.status.toLowerCase() == "Planned".toLowerCase()
            ? "text-slate-600 bg-slate-600/25"
            : item?.status?.toLowerCase().includes("Awaiting".toLowerCase())
            ? "text-purple-800 bg-purple-800/25"
            : item.status.toLowerCase() == "Started".toLowerCase()
            ? "text-cyan-400"
            : item.status.toLowerCase() == "Ongoing".toLowerCase()
            ? "text-amber-500 bg-amber-400/25"
            : ""
        } ${style} w-max px-2 capitalize flex items-center justify-center  font-medium text-xs rounded-[4px]`}
      >
        {item.status}
      </div>
    );
  } else if (item) {
    return (
      <div
        className={` ${
          item?.toLowerCase() == "Completed".toLowerCase()
            ? "text-binance_green bg-binance_green/25"
            : item?.toLowerCase() == "Paused".toLowerCase()
            ? "text-appRed bg-appRed/25"
            : item?.toLowerCase() == "Pending".toLowerCase()
            ? "text-appRed bg-appRed/25"
            : item?.toLowerCase() == "Planned".toLowerCase()
            ? "text-slate-600 bg-slate-600/25"
            : item?.toLowerCase().includes("Awaiting".toLowerCase())
            ? "text-purple-800 bg-purple-800/25"
            : item?.toLowerCase() == "Started".toLowerCase()
            ? "text-cyan-400"
            : item?.toLowerCase() == "Ongoing".toLowerCase()
            ? "text-amber-500 bg-amber-400/25"
            : ""
        } ${style} w-max px-2 capitalize flex items-center justify-center  font-medium text-xs rounded-[4px]`}
      >
        {item}
      </div>
    );
  }
};

export default Status;
