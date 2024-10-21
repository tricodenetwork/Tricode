import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlueLink = ({ href, text }) => {
  const { font } = useFonts();
  return (
    <Link
      href={href}
      className='flex hover:-translate-x-2 duration-150 gap-4 items-center'
    >
      <p
        style={font.style}
        className='text-[#2563EB] text-xs  lg:text-sm font-medium'
      >
        {text}
      </p>
      <Image
        src={"/assets/icons/right_arr_blue.svg"}
        width={24}
        height={24}
        alt='arr'
      />
    </Link>
  );
};

export default BlueLink;
