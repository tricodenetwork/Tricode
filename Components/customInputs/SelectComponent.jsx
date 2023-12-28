import React, { useState } from "react";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import InputLine from "../InputLine";
const SelectComponent = ({ items, placeholder }) => {
  const [open, setOpen] = useState(false);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpen(false);
      }}
    >
      <div className='flex items-center  max-w-max relative'>
        {open && (
          <motion.div
            animate={{ height: ["0px", "240px"] }}
            className='w-full h-[240px] z-10 absolute border scrollbar-hide bg-slate-700 overflow-y-scroll'
          >
            {items?.map((item) => (
              <p
                style={{ fontSize: 14 }}
                className='regular border-b py-2 mb-2 px-2 text-[#aab2c8]'
              >
                {item}
              </p>
            ))}
          </motion.div>
        )}
        <InputLine
          styles={"bg-transparent  mr-2 regular text-[16px]"}
          placeholder={placeholder}
        />
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`absolute ${
            open ? "rotate-180 z-20" : "rotate-0"
          } duration-200 right-[2px] self-center`}
        >
          <KeyboardArrowDownOutlinedIcon
            sx={{
              fontSize: 24,
              cursor: "pointer",
              color: "#aab2c8",
            }}
          />
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default SelectComponent;
