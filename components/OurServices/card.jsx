import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { OurServices } from "../../Data/data";

const IndividualCard = ({ info, index }) => {
  // Use a ref for each individual card item
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animationImg = useAnimation();

  const getColor = (id) => {
    if (id === 1) return { background: "#F8F6EC" };
    if (id === 2) return { background: "#E7DAED" };
    if (id === 3) return { background: "#F0FFF7" };
    return { background: "#FFF4F4" };
  };

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
      className='flex flex-col  m-[4%] bg-white min-w-[225px] min-h-[231px] w-[225px] h-[231px] shadow-[0px_0px_6px] shadow-app_black/25 rounded-[10px] justify-between pt-[2vh] pb-[1vh] items-start px-[3vw] sm:px-[1.5vw]'
    >
      <div className='w-[51px] h-[51px] flex items-center justify-center bg-[#EAEAEA] border-[0.5px] border-black/20 rounded-full lg:w-[51px] relative lg:h-[51px]'>
        <Image
          width={36}
          height={29}
          className='object-contain'
          src={info.img}
          alt='service_image'
        />
      </div>

      <div className='text-app_black flex items-center sm:h-[25%] font-medium mb-[8px] text-[18px] leading-snug'>
        {info.title}
      </div>
      <div className='text-slate-600  flex items-start h-[50%] text-sm  md:text-sm'>
        {info.descr}
      </div>
    </motion.div>
  );
};

export default function Card() {
  return (
    <section className='sm:w-1/2  w-[90%] scrollbar-hid relative sm:px-[5vw] justify-start sm:justify-center flex flex-row sm:flex-wrap overflow-x-scroll items-center'>
      <div className='bg-binance_green absolute hidden sm:flex self-center rounded-full w-[550px] h-[550px] -z-50' />
      {OurServices.map((info, i) => {
        return <IndividualCard key={i.toString()} info={info} index={i} />;
      })}
    </section>
  );
}
