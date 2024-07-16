import React from "react";

const SmallButton = ({ Action, styles }) => {
  return (
    <div
      className={`${styles} rounded-3xl  hover:bg-opacity-80 py-1 cursor-pointer text-center`}
    >
      {Action}
    </div>
  );
};

export default SmallButton;
