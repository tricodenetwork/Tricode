import Image from "next/image";
import { useState, useEffect } from "react";
import { WhyTricode } from "../../Data/data";
import { Istok_Web } from "next/font/google";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const font = Istok_Web({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
});

const initialInfo = [
  { number: 0, targetNumber: 782, text: "WORLDWIDE CUSTOMERS" },
  { number: 0, targetNumber: 12, text: "PROJECTS DONE" },
  { number: 0, targetNumber: 5, text: "IT PRODUCTS" },
  { number: 0, targetNumber: 809, text: "AMOUNT SPEND" },
];

const incrementSpeed = 10; // milliseconds

export default function Card() {
  const [info, setInfo] = useState(initialInfo);
  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();

  useEffect(() => {
    const incrementNumbers = () => {
      setInfo((prevInfo) =>
        prevInfo.map((item) => {
          // Check if the number has reached its target
          if (item.number >= item.targetNumber) {
            return item; // Don't increment anymore
          }
          return {
            ...item,
            number: Math.min(item.number + 1, item.targetNumber), // Increment and clamp to target
          };
        })
      );
    };

    const intervalId = setInterval(() => {
      inView && incrementNumbers();
    }, incrementSpeed); // Set increment interval

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [inView]);

  return (
    <section
      className='w-full lg:w-[85vw] justify-center   self-center items-center'
      id='careers'
    >
      <div className='md:p-[4vh] py-[3vh] grid  grid-cols-1 md:grid-cols-[1fr,1fr] place-items-center place-content-center gap-[30px]'>
        {WhyTricode.map((info, i) => (
          <div
            key={i.toString()}
            className='flex gap-3 w-full pt-[16px] lg:pt-[59px] pl-[10px] lg:pl-[34px] md:w-[40vw]  min-h-[145px] md:min-h-[237px] py-5 px-4 bg-neutral-50 border border-zinc-200 justify-center items-center lg:items-start'
          >
            <Image
              width={52}
              height={48}
              className='animate-pulse'
              src={info.img}
              alt='icon'
            />
            <div className='ml-[16px] lg:ml-[25px]'>
              <div className='text-black semiBold  mb-[8px] lg:mb-[10px] text-base md:text-xl'>
                {info.tittle}
              </div>
              <div className='text-slate-600 text-xs md:text-sm lg:w-[93%]'>
                {info.descr}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        ref={ref}
        className='px-1 md:p-[2vh] py-[3vh] grid grid-cols-[1fr,1fr] place-content-center place-items-center lg:flex lg:flex-row flex-wrap justify-around lg:w-[80%] mx-auto items-start gap-8 md:gap-12'
      >
        {info.map((item, i) => {
          return (
            <div key={i.toString()} className='w-full lg:w-max'>
              <div
                style={font.style}
                className='text-center text-binance_green text-2xl md:text-4xl font-extrabold '
              >
                {item.text == "AMOUNT SPEND" ? `$${item.number}` : item.number}
              </div>
              <div
                style={font.style}
                className='text-center whitespace-nowrap text-zinc-600 text-xs md:text-base font-bold '
              >
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`flex justify-center space-x-4 mt-[0vh] md:space-x-6 md:mt-[3vh]`}
      >
        <Link
          href={"/auth/register"}
          className='Bold hover:bg-opacity-70 flex justify-center hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-black px-[7vw] py-[1.5vh] rounded-lg bg-binance_green text-white'
        >
          <button>Hire</button>
        </Link>
        <Link
          href={"/auth/register"}
          className='Bold hover:bg-opacity-70 flex justify-center hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-binance_green px-[7vw] py-[1.5vh] rounded-lg bg-black text-white'
        >
          <button>Join</button>
        </Link>
      </div>
    </section>
  );
}
