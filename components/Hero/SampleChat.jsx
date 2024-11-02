import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SampleChat = () => {
  return (
    <div className='flex absolute top-[14%] left-[6%] sm:left-[2%] items-center gap-1 sm:gap-3'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 300,
        }}
        className='w-[16px] h-[16px] sm:w-[32.6px] sm:h-[32.6px] relative'
      >
        <Image
          fill
          alt='ada'
          className='rounded-full border border-app_light_green'
          src={"/assets/profile_pics/ada.png"}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "max-content" }}
        transition={{ delay: 0.5 }}
        className='bg-white  regular flex justify-center items-center rounded-full w-max px-[2px] sm:px-2 h-max py-[2px] sm:h-[28px]'
      >
        <motion.span
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className='text-[4px] sm:text-[12px] text-app_light_green mr-1 sm:mr-2'
        >
          Ada
        </motion.span>
        <motion.span
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2 }}
          className='text-[4px] sm:text-[12px] text-app_black2'
        >
          Amazing Work! 👋🏽
        </motion.span>
      </motion.div>
    </div>
  );
};

export default SampleChat;
