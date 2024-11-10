import { getStatusClasses } from "@/lib/utils/helper";
import React from "react";

const Status = ({ item, style }) => {
  if (!item) {
    return null;
  }

  const status = item.status || item;
  const statusClasses = getStatusClasses(status);

  return (
    <div
      className={`${statusClasses} ${style} w-max px-2 capitalize flex items-center justify-center font-medium text-xs rounded-[4px]`}
    >
      {status}
    </div>
  );
};

export default Status;
