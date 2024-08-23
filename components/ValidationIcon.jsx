import Image from "next/image";
import React from "react";

const ValidationIcon = ({ isError }) => {
  return (
    <Image
      width={16}
      height={16}
      src={
        isError
          ? "/assets/icons/mark_correct.svg"
          : "/assets/icons/mark_wrong.svg"
      }
      className=''
      alt='validate'
    />
  );
};

export default ValidationIcon;
