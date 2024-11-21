"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
// import close from "../../assets/accordionclose.svg";

const Accordion = ({
  color,
  accordionId,
  question,
  answer,
  isOpen,
  toggleAccordion,
  arrowUp,
  arrowDown,
  // Businesses,
  // including,
}) => {
  return (
    <div
      className={`flex w-full duration-300 flex-col text-${color} border-b py-6 gap-3 justify-start items-start`}
    >
      <div
        onClick={() => toggleAccordion(accordionId)}
        className="w-full   cursor-pointer flex flex-row justify-between items-center"
      >
        <p className={`w-full text-black text-xl Poppins-SemiBold`}>
          {question}
        </p>
        <div className="flex mr-auto justify-end items-end">
          {isOpen ? (
            <div className="">
              <FaMinus />
            </div>
          ) : (
            <div className="">
              <FaPlus />
            </div>
          )}
        </div>
      </div>
      {/* <div className='flex flex-col bord text-black justify-center items-center'> */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="flex flex-col w-full rounded-md justify-center items-start"
          >
            <p className="text-zinc-500 text-base Poppins-Medium px-2">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
      {/* </div> */}
    </div>
  );
};

export default Accordion;
