import { marquees } from "@/Data/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Marq() {
  return (
    <>
      <Marquee
        direction='left'
        speed={80}
        delay={5}
        pauseOnHover={true}
        autoFill={true}
      >
        {marquees.map((marquee, i) => {
          return (
            <div
              key={(i + 1).toString()}
              className='image_wrapper w-[70px] h-[70px] px-[22.04px] py-[15.56px] ml-5 bg-white rounded-[14px] border border-[#676A6A] border-opacity-40 justify-center items-center inline-flex overflow-hidden'
            >
              <Image src={marquee.img} alt='stack' width={36} height={36} />
            </div>
          );
        })}
      </Marquee>
    </>
  );
}
