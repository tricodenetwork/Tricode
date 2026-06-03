import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Accordion = ({
  accordionId,
  question,
  answer,
  isOpen,
  toggleAccordion,
  Businesses,
  including,
  darkTheme = false,
}) => {
  return (
    <div className={`flex w-[90vw] lg:max-w-[80vw] duration-300 flex-col pt-2 my-2 justify-center ${darkTheme ? 'text-white' : 'text-black'}`}>
      <button
        onClick={() => toggleAccordion(accordionId)}
        className={`border-t w-full cursor-pointer flex flex-row p-5 space-x-3 rounded-md justify-between items-center ${darkTheme ? 'border-white/10' : 'border-stone-300'}`}
      >
        <p className={`text-base md:text-[18.687px] ${darkTheme ? 'text-gray-300' : 'text-black'}`}>{question}</p>
        <div>
          {isOpen ? (
            <Image
              width={16}
              height={9}
              src='/assets/icons/right.svg'
              className={`rotate-[90deg] ${darkTheme ? 'invert' : ''}`}
              alt=''
            />
          ) : (
            <Image width={16} height={9} src='/assets/icons/right.svg' className={darkTheme ? 'invert' : ''} alt='' />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className={`flex mt-2 flex-col w-full rounded-md justify-center items-center overflow-hidden ${darkTheme ? 'bg-white/5' : 'bg-stone-100 bg-opacity-30'}`}
            id='content'
          >
            <p className={`text-sm md:text-[15.29px] p-6 leading-relaxed ${darkTheme ? 'text-gray-400' : 'text-black'}`}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
