import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Loading = ({ loading }) => {
  const dotVariants = {
    start: {
      x: "-100%",
      opacity: 0.5,
    },
    end: {
      x: "100%",
      opacity: 1,
    },
  };
  return (
    <div>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial='start'
            animate='end'
            transition={{
              duration: 1,
              staggerChildren: 0.5,
              delayChildren: 0.3,
            }}
            className={`w-full h-[95%] rounded-md text-center  bg-[rgb(248,255,233)]`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                variants={dotVariants}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className={`inline-block w-3 h-3 m-2 rounded-full bg-binance_green`}
              ></motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loading;
