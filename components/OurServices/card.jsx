import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { OurServices } from "../../Data/data";

const IndividualCard = ({ info }) => {
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
    console.log("inView", inView);

    if (!inView) {
      animation.start({
        x: -200,
        opacity: 0,
      });
      animationImg.start({
        x: +200,
        opacity: 0,
      });
    } else {
      animation.start({
        x: 0,
        opacity: 1,
      });
      animationImg.start({
        x: 0,
        opacity: 1,
      });
    }
  }, [inView, animation, animationImg]);
  return (
    <div
      ref={ref}
      key={info.id.toString()}
      className='flex w-full  mb-5 self-center mx-auto gap-4 md:gap-12 justify-between items-center'
    >
      <motion.div
        animate={animation}
        transition={{ duration: 0.6 }}
        className='w-[115px] h-[90px] lg:w-[394px] relative lg:h-[293px]'
      >
        <Image
          fill
          className='object-cover'
          src={info.img}
          alt='service_image'
        />
      </motion.div>
      <motion.div
        transition={{ duration: 0.6 }}
        animate={animationImg}
        style={{ ...getColor(info.id, info.tittle) }}
        className='flex flex-col  w-[60vw]  lg:w-[60%] h-[150px] sm:h-[129px] md:h-[200px] lg:h-[416px] py-6 lg:py-[150px] lg:px-[90px] px-3 md:px-6 bg-neutral-50 border border-zinc-200 justify-center items-start rounded-r-[8px] lg:rounded-r-[30px]'
      >
        <div className='text-black font-bold text-sm mb-[8px] lg:mb-[30px] md:text-[25px] leading-snug lg:leading-[30px]'>
          {info.tittle}
        </div>
        <div className='text-slate-600 text-xs md:text-sm lg:w-[70%]'>
          {info.descr}
        </div>
      </motion.div>
    </div>
  );
};

export default function Card() {
  return (
    <section className='w-full px-[5vw] justify-center flex flex-col  mt-[50px] items-center'>
      <div className='flex flex-col w-full lg:w-[85%] px-1 md:p-[4vh] self-center  py-[3vh] justify-center items-center gap-8'>
        {OurServices.map((info, i) => {
          return <IndividualCard key={i.toString()} info={info} />;
        })}
      </div>
    </section>
  );
}
