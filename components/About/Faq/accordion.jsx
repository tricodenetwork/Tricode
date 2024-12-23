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
}) => {
  return (
    <div className='flex w-[90vw] lg:max-w-[80vw] duration-300 flex-col text-black pt-2 my-2 justify-center'>
      <button
        onClick={() => toggleAccordion(accordionId)}
        className='border-stone-300 border-t w-full cursor-pointer flex flex-row  p-5 space-x-3 rounded-md justify-between items-center'
      >
        <p className={`text-base md:text-[18.687px] `}>{question}</p>
        <div>
          {isOpen ? (
            <Image
              width={16}
              height={9}
              src='/assets/icons/right.svg'
              className='rotate-[90deg]'
              alt=''
            />
          ) : (
            <Image width={16} height={9} src='/assets/icons/right.svg' alt='' />
          )}
        </div>
      </button>
      {/* <div className='flex flex-col bord text-black justify-center items-center'> */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0 }}
            animate={{ height: 100, opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
            className='bg-stone-100 flex mt-2 flex-col  w-full bg-opacity-30 rounded-md justify-center items-center'
            id='content'
          >
            <p className=' text-sm md:text-[15.29px] p-2 '>
              {isOpen ? answer : ""}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {/* </div> */}
    </div>
  );
};

export default Accordion;
