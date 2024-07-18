import { AnimatePresence, motion } from "framer-motion";

const Loading = ({ loading, length = 5 }) => {
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
    <div className=' w-full h-full'>
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
            className={`text-center rounded-3xl`}
          >
            {Array.from({ length: length }).map((_, i) => (
              <motion.div
                key={i}
                variants={dotVariants}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className={`inline-block w-2 h-2 m-1 rounded-full bg-binance_green`}
              ></motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loading;
