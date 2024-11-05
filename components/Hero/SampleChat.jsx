import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const chatVariants = [
  { name: "Ada", message: "Amazing Work! 👋🏽" },
  { name: "Cheng", message: "Keep it up! 👍" },
  { name: "Tom", message: "Fantastic effort! 💯" },
  { name: "David", message: "Great job, team! 🚀" },
];

const SampleChat = () => {
  const [currentChat, setCurrentChat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChat((prev) => (prev + 1) % chatVariants.length);
    }, 4000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex absolute top-[14%] left-[6%] sm:left-[2%] items-center gap-1 sm:gap-3'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentChat} // key to re-trigger animation on chat change
          initial={{ scale: 0 }}
          animate={{ scale: 1 }} // "pop" effect animation
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 300,
          }}
          className='w-[16px] h-[16px] sm:w-[32.6px] sm:h-[32.6px] relative'
        >
          <Image
            fill
            alt={chatVariants[currentChat].name}
            className='rounded-full border border-app_light_green'
            src={`/assets/profile_pics/${chatVariants[
              currentChat
            ].name.toLowerCase()}.png`}
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        key={currentChat} // key to re-trigger animation on message change
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "max-content" }}
        transition={{ delay: 0.5 }}
        className='bg-white regular flex justify-center items-center rounded-full w-max px-[2px] sm:px-2 h-max py-[2px] sm:h-[28px]'
      >
        <motion.span
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className='text-[4px] sm:text-[12px] text-app_light_green mr-1 sm:mr-2'
        >
          {chatVariants[currentChat].name}
        </motion.span>
        <motion.span
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2 }}
          className='text-[4px] sm:text-[12px] text-app_black2'
        >
          {chatVariants[currentChat].message}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default SampleChat;
