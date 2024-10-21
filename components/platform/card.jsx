import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { platform } from "../../Data/data";

const IndividualCard = ({ info, index, font }) => {
  // Use a ref for each individual card item
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animationImg = useAnimation();

  const getColor = () => {
    if (info.header === "New")
      return { background: "#DCFCE7", text: "#166534" };
    if (info.header === "Featured")
      return { background: "#F3E8FF", text: "'#6B21A8" };
    if (info.header === "Popular")
      return { background: "#DBEAFE", text: "#1E40AF" };
    return { background: "#FFF4F4" };
  };
  const color = getColor();

  useEffect(() => {
    if (!inView) {
      animation.start({
        x: index % 2 != 0 ? 10 : -10,
        opacity: 0,
      });
      animationImg.start({
        x: index % 2 != 0 ? 10 : -10,
        opacity: 0,
      });
    } else {
      animation.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, delay: index * 0.1 }, // Delay based on index
      });
      animationImg.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, delay: index * 0.2 }, // Delay based on index
      });
    }
  }, [inView, animation, animationImg, index]);

  return (
    <motion.div
      animate={animation}
      ref={ref}
      key={info.id.toString()}
      className='flex flex-col   m-[2%] bg-white min-w-[200px] min-h-[232px] w-[200px] h-[232px] shadow-[0px_0px_6px] shadow-app_black/25 rounded-[10px] justify-between pt-[2vh] pb-[1vh] items-start px-[3vw] sm:px-[1vw]'
    >
      <div
        style={{ backgroundColor: color.background, color: color.text }}
        className={`text-app_black ${font.className} flex items-center px-2 h-[24px] rounded-[4px] mb-[8px] text-sm leading-snug`}
      >
        {info.header}
      </div>

      <div
        style={font.style}
        className='text-app_black flex items-center sm:h-[25%] font-medium mb-[8px] text-[20px] leading-tight'
      >
        {info.title}
      </div>
      <div
        style={font.style}
        className='text-slate-600  flex items-start h-[50%] text-sm  md:text-sm'
      >
        {info.desc}
      </div>
    </motion.div>
  );
};

export default function Card({ font }) {
  return (
    <section className='sm:w-[55%] overflow-x-scroll  h-max  w-[96%] scrollbar-hid relative sm:px-[2vw] justify-start sm:justify-center flex flex-row sm:flex-wrap  items-center'>
      {/* <div className='bg-binance_green absolute hidden sm:flex self-center rounded-full w-[550px] h-[550px] -z-[10]' /> */}
      {platform.map((info, i) => {
        return (
          <IndividualCard key={info.id} info={info} font={font} index={i} />
        );
      })}
    </section>
  );
}
