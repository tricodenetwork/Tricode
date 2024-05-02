import React, { useState } from "react";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import InputLine from "../InputLine";
const SelectComponent = ({ items, placeholder, onChange }) => {
  const [open, setOpen] = useState(false);
  const [value, setVal] = useState("");
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpen(false);
      }}
    >
      <div className='flex items-center z-10   max-w-max relative'>
        {open && (
          <motion.div
            // animate={{ height: ["0%", "100%"] }}
            className='w-full h-max z-10 absolute -bottom-[290%] border scrollbar-hide bg-white overflow-y-scroll'
          >
            {items?.map((item, i) => (
              <p
                key={i.toString()}
                style={{ fontSize: 14 }}
                onClick={() => {
                  onChange(item);
                  setVal(item);
                  setOpen(false);
                }}
                className={`regular cursor-pointer border-b py-2 mb-2 px-2 text-binance_ash medium ${
                  item == "Completed"
                    ? "text-binance_green"
                    : item == "Paused"
                    ? "text-[#d9d9d9]"
                    : item == "Awaiting your review"
                    ? "text-purple-800"
                    : item == "Started"
                    ? "text-cyan-400"
                    : item == "Ongoing"
                    ? "text-amber-400"
                    : "text-gray-800"
                }`}
              >
                {item}
              </p>
            ))}
          </motion.div>
        )}
        <InputLine
          styles={`bg-transparent ${
            value == "Completed"
              ? "text-binance_green"
              : value == "Paused"
              ? "text-[#d9d9d9]"
              : value == "Awaiting your review"
              ? "text-purple-800"
              : value == "Started"
              ? "text-cyan-400"
              : value == "Ongoing"
              ? "text-amber-400"
              : "text-gray-800"
          }  mr-2 regular text-[16px]`}
          placeholder={placeholder}
          value={value}
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
