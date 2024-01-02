import React, { useState } from "react";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import InputLine from "../InputLine";
const FilterComponent = ({ items, placeholder }) => {
  const [open, setOpen] = useState(false);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpen(false);
      }}
    >
      <div className='flex items-center max-w-max relative'>
        {open && (
          <motion.div
            animate={{ height: ["0px", "120px"] }}
            className='w-full h-[120px] z-10 absolute border scrollbar-hide bg-slate-700 overflow-y-scroll'
          >
            {items?.map((item, index) => (
              <p
                key={index.toString()}
                style={{ fontSize: 14 }}
                className='regular border-b py-2 mb-2 px-2 text-[#aab2c8]'
              >
                {item}
              </p>
            ))}
          </motion.div>
        )}
        <input
          type='text'
          placeholder={placeholder}
          className={`custom-input w-[100px] text-binance_green  mr-2 regular text-xs lg:text-[14px] focus:outline-none focus:border-b-2 focus:border-binance_green px-2 py-1`}
        />
        {/* <InputLine
          styles={"bg-transparent border-opacity-0 custom-input w-[100px] text-binance_green  mr-2 regular text-[14px]"}
          placeholder={placeholder}
        /> */}
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`absolute ${
            open ? "rotate-180 z-20" : "rotate-0"
          } duration-200 right-[2px]`}
        >
          <KeyboardArrowDownOutlinedIcon
            sx={{
              fontSize: 24,
              cursor: "pointer",
              color: "#38a312",
            }}
          />
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default FilterComponent;
