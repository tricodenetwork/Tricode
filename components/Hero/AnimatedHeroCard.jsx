import React from "react";
import { motion, AnimiatePresence } from "framer-motion";

const Departments = [
  { title: "UI Design", score: 9 },
  { title: "Development", score: 7 },
  { title: "Copywriting", score: 6 },
];

const SingleElement = ({ title, score }) => {
  const width = (score / 10) * 100;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      className='flex flex-col gap-[2px] sm:gap-3 mb-[4px] sm:mb-[14px]'
    >
      <div className='flex justify-between items-center'>
        <h6 className='text-[4px] sm:text-[10px] regular text-app_black2'>
          {title}
        </h6>
        <p className='text-[3px] sm:text-[5px]'>{`${score}/10`}</p>
      </div>
      <div className='w-full h-[2px] rounded-full bg-app_black2'>
        <motion.div
          animate={{ width: `${width}%` }}
          initial={{ width: "0%" }}
          transition={{ duration: 2, delay: 3 }}
          className={`bg-app_light_green rounded-full h-full`}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const AnimatedHeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, staggerChildren: 1 }}
      className='bg-white w-[100%] blur-[.3px]  h-[100%] px-[9px] sm:px-[18px] py-[7px] sm:py-[14px] rounded-lg'
    >
      <h6 className='medium text-[6px] sm:text-sm  text-app_black2 mb-[4px] sm:mb-[18px]'>
        Task Progress
      </h6>
      <div className='flex-1  flex px-[3px] flex-col justify-between '>
        {Departments.map((item) => {
          return (
            <SingleElement
              title={item.title}
              score={item.score}
              key={item.title}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default AnimatedHeroCard;
